"use client";

import { FC, Fragment, useState } from "react";
import { Item } from "../lib/types";
import styles from "./item.module.css";
import { useItemsList } from "@/entities/item/lib/hooks";
import { useRouter } from "next/navigation";
import { QRCodePopup } from "@/entities/item/ui/qr-code-popup";

export const ItemCard: FC<{ item: Item }> = ({ item }) => {
  const [, setItems] = useItemsList();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { id, imageUrl, title, price, description } = item;
  const router = useRouter();

  return (
    <Fragment>
      {isPopupOpen && (
        <QRCodePopup item={item} onClose={() => setIsPopupOpen(false)} />
      )}
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.productImage} src={imageUrl} alt={title} />
        </div>
        <a className={styles.title} href={`/item-details?id=${id}`}>
          {title}
        </a>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>${price}</div>
        <button className={styles.button} onClick={() => setIsPopupOpen(true)}>
          Show QR
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setItems((prev) => {
              if (!prev) return prev;

              return prev.filter((item) => item.id !== id);
            });
            // TODO: заменить useState на реактивное хранилище, чтобы все использования useItemsList получали обновления,
            //  пока просто буду релоадить страницу

            router.push("/");
          }}
        >
          Delete Item
        </button>
      </div>
    </Fragment>
  );
};
