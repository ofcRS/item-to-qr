import styles from "./page.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/items-list")
}
