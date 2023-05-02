import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import AppBarrTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.navigationBg,
    height: 100,
    display: "flex",

    justifyContent: "center",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarrTab label="Repositories" />
    </View>
  );
};

export default AppBar;
