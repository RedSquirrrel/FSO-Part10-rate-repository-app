import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
});

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "#fff",
    inputborder: "#999",
    errorColor: "#d73a4a",
  },
  backgrounds: {
    mainBg: "#e1e4e8",
    navigationBg: "#24292e",
    repoListItemsBg: "#fff",
    white: "#fff",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    navigation: 18,
    linkButton: 17,
  },
  fonts: {
    main: styles.text.fontFamily,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
