"use client";

import Link from "next/link";

import styles from "./items-list.module.css";
import { ItemCard } from "@/entities/item";
import { useItemsList } from "@/entities/item/lib/hooks";

export default function ItemsList() {
  const [items] = useItemsList();

  return (
    <ul className={styles.list}>
      {items?.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} hideDeleteButton />
        </li>
      ))}
      <div className={styles.buttons}>
        <Link
          className={`${styles.bottomButton} ${styles.newItemButton}`}
          href="../new-item"
        >
          New Item
        </Link>
        <Link
          className={`${styles.bottomButton} ${styles.scanQrButton}`}
          href="../qr-scanner"
        >
          Scan QR
        </Link>
      </div>
    </ul>
  );
}
