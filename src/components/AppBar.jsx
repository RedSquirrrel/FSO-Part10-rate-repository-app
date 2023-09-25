import Constants from "expo-constants";
import { useApolloClient, useQuery } from "@apollo/client";
import { View, StyleSheet, Pressable, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import { ME } from "../graphql/queries";
import theme from "../theme";
import { useAuthStorage } from "../hooks/useAuthStorage";

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleLogOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <Pressable>
      <View style={styles.container}>
        <ScrollView horizontal>
          <AppBarTab label="Repositories" to="/" />
          {data?.me ? <AppBarTab label="Create a review" to="/add-review" /> : <AppBarTab label="" to="/" />}
          {data?.me ? <AppBarTab label="Sign Out" to="/" onPress={handleLogOut} /> : <AppBarTab label="Sign In" to="/signin" />}
        </ScrollView>
      </View>
    </Pressable>
  );
};

export default AppBar;
