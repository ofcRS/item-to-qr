"use client";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";
import styles from "./qr-scanner.module.css";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QRScannerPage() {
  const router = useRouter();

  const openCam = useCallback(() => {
    QRScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          QRScanner.show();
          const scanSub = QRScanner.scan().subscribe((text: string) => {
            alert("Scanned something" + text);

            scanSub.unsubscribe();
          });
        } else if (status.denied) {
          QRScanner.openSettings();
        } else {
        }
      })
      .catch((e: any) => alert("Error is" + e));
  }, []);

  useEffect(() => {
    openCam();

    return () => {
      QRScanner.destroy();
    }
  }, [openCam]);

  return (
    <div className={styles.qrScanner}>
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
