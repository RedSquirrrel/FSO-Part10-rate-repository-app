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
  fontSizeLinkButton: {
    fontSize: theme.fontSizes.linkButton,
  },
  textCenter: {
    textAlign: "center",
  },
});

const Text = ({ color, fontSize, fontWeight, style, textAlign, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "navigation" && styles.colorTextNavigation,
    color === "errorColor" && styles.errorColor,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "navFontSize" && styles.fontSizeNavigation,
    fontSize === "linkButton" && styles.fontSizeLinkButton,
    fontWeight === "bold" && styles.fontWeightBold,
    textAlign === "center" && styles.textCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
