import Constants from "expo-constants";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.navigationBg,
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const AppBar = () => {
  return (
    <Pressable>
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab label="Repositories" to="/" />
          <AppBarTab label="Sign In" to="/signin" />
        </ScrollView>
      </View>
    </Pressable>
  );
};

export default AppBar;
