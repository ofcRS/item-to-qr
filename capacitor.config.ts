import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.item.to.qr",
  appName: "item-to-qr",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
