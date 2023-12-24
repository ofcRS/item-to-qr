import { FC } from "react";
import QRCode from "qrcode.react";

import styles from "./qr-code-popup.module.css";
import { Item } from "@/entities/item/lib/types";

type Props = {
  onClose: () => void;
  item: Item;
};

export const QRCodePopup: FC<Props> = ({ onClose, item }) => {
  return (
    <div className={styles.qrCodePopup}>
      <div className={styles.body}>
        <QRCode
          value={JSON.stringify({
            id: item.id,
            someOtherData: "someOtherData",
            isItemToQrJSON: true,
          })}
          size={400}
        />
        <button className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
