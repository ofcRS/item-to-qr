"use client";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";
import styles from "./qr-scanner.module.css";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QRScannerPage() {
  const router = useRouter();

  const openCam = useCallback(() => {
    QRScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          QRScanner.show();
          const scanSub = QRScanner.scan().subscribe((text: string) => {
            const parsedData = JSON.parse(text);
            if (parsedData.isItemToQrJSON) {
              router.push(`/item-details?id=${parsedData.id}`);
            } else {
              alert("Wrong QR code");
            }

            scanSub.unsubscribe();
          });
        } else if (status.denied) {
          QRScanner.openSettings();
        } else {
        }
      })
      .catch((e: any) => console.log("Error is" + e));
  }, [router]);

  useEffect(() => {
    openCam();

    return () => {
      QRScanner.destroy();
    };
  }, [openCam]);

  return (
    <div className={styles.qrScanner}>
      <div className={styles.scanArea}></div>
      <div className={styles.controls}>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
        <button
          onClick={async () => {
            if ((await QRScanner.getStatus()).lightEnabled) {
              QRScanner.disableLight();
            } else {
              QRScanner.enableLight();
            }
          }}
        >
          Light{" "}
        </button>
      </div>
    </div>
  );
}
