import { useStorageState } from "@/shared/hooks/use-storage-state";
import { Item } from "./types";

const initial: Item[] = [
  {
    price: 299.99,
    id: 0,
    description:
      "An ethereal illustration of Yggdrasil, the immense tree from Norse mythology that connects the nine worlds. This artwork captures the magical essence of ancient sagas with Asgard's halls in the branches and the roots hinting at the well of Urd. Perfect for lovers of mythology and fantasy.",
    imageUrl: "https://i.imgur.com/AQ5cdke.png",
    title: "Yggdrasil - The World Tree Illustration",
  },
];

export const useItemsList = () => {
  return useStorageState<Item[]>("items", initial);
};
