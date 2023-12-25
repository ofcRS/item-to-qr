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
  {
    price: 349.99,
    id: 1,
    description:
      "A mystic sword forged in the heart of a dying star, adorned with runes of power. Legend has it that the blade can cut through the fabric of reality itself, allowing its wielder to travel between different dimensions. A treasure coveted by warriors and mages alike.",
    imageUrl: "https://i.imgur.com/aHEpOWu.png",
    title: "Starforged Runeblade",
  },
  {
    price: 415.5,
    id: 2,
    description:
      "This ancient tome is bound in scales that shimmer with celestial light. Within its pages lie the secrets of the cosmos, penned by an archmage who vanished eons ago. It is said that those who read from it can harness the raw energies of creation.",
    imageUrl: "https://i.imgur.com/Z5pFbS6.png",
    title: "Tome of Cosmic Secrets",
  },
  {
    price: 475.0,
    id: 3,
    description:
      "A legendary hero known as the Guardian of the Enchanted Forest, protector of all magical creatures dwelling within. Her spirit is said to be infused with the forest's life essence, granting her command over nature and the ability to commune with beasts and plants.",
    imageUrl: "https://i.imgur.com/bGTnPgK.png",
    title: "The Guardian of the Enchanted Forest",
  },
];

export const useItemsList = () => {
  return useStorageState<Item[]>("items", initial);
};
