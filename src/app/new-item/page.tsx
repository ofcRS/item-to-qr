"use client";
import { Form, Formik } from "formik";
import { CreateItemFormValues } from "./types";
import { TextField } from "@/shared/ui/text-field/text-field";

import styles from "./new-item.module.css";
import { useStorageState } from "@/shared/hooks/use-storage-state";
import { Item } from "@/entities/item/lib/types";
import { useRouter } from "next/navigation";
import { useItemsList } from "@/entities/item/lib/hooks";
import Link from "next/link";

export default function NewItem() {
  const router = useRouter();

  const [, setItems] = useItemsList();

  return (
    <Formik<CreateItemFormValues>
      initialValues={{
        title: "",
        description: "",
        price: 100,
        imageUrl: "https://picsum.photos/300/300",
      }}
      onSubmit={(values) => {
        setItems((items) => {
          if (!items) return [{ ...values, id: 1 }];
          return [
            ...items,
            {
              ...values,
              id: items.length + 1,
              imageUrl: values.imageUrl + "?unique=" + items.length,
            },
          ];
        });
        router.push("/");
      }}
    >
      <Form className={styles.form}>
        <TextField name="title" label="Title" />
        <TextField name="description" label="Description" />
        <TextField name="price" label="Price" />
        <TextField name="imageUrl" label="Image URL" />
        <div className={styles.buttons}>
          <Link href="/" className={styles.backButton}>
            Cancel
          </Link>
          <button type="submit" className={styles.submitButton}>
            Create
          </button>
        </div>
      </Form>
    </Formik>
  );
}
