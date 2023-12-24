import { useStorageState } from "@/shared/hooks/use-storage-state";
import { Item } from "./types";

const initial: Item[] = [
  {
    price: 19.99,
    id: 0,
    description: "A nice hat",
    imageUrl: "https://i.imgur.com/AQ5cdke.png",
    title: "Hat",
  },
];

export const useItemsList = () => {
  return useStorageState<Item[]>("items", initial);
};
