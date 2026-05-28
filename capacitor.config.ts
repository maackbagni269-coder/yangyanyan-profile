import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.yangyanyan.profile",
  appName: "杨艳艳",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  android: {
    allowMixedContent: false,
    backgroundColor: "#f5f0e8",
  },
};

export default config;
