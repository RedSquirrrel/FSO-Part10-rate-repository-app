import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.white,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextNavigation: {
    color: theme.colors.white,
  },
  errorColor: {
    color: theme.colors.errorColor,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeNavigation: {
    fontSize: theme.fontSizes.navigation,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "navigation" && styles.colorTextNavigation,
    color === "errorColor" && styles.errorColor,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "navFontSize" && styles.fontSizeNavigation,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
