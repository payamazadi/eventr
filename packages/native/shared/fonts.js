import { Platform } from "react-native";

export default {
  defaultFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif-light"
};
