"use client";

import { useStorageState } from "@/shared/hooks/use-storage-state";
import { Item } from "@/entities/item/lib/types";
import { useSearchParams } from "next/navigation";
import { ItemCard } from "@/entities/item";
import styles from "./item-details.module.css";
import { useItemsList } from "@/entities/item/lib/hooks";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ItemDetailsPage() {
  const [items] = useItemsList();

  const id = useSearchParams().get("id");
  let item = null;

  if (!id) {
    return redirect("/");
  }

  if (id && items) {
    item = items.find((item) => `${item.id}` === id);
  }

  if (!item) {
    return null;
  }

  return (
    <div className={styles.itemDetails}>
      <ItemCard item={item} />
      <Link href="/items-list" className={styles.button}>
        Back
      </Link>
    </div>
  );
}
