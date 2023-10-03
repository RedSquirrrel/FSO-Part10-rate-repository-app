import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 4,
    width: "80%",
    // marginTop: 8,
    // marginLeft: 8,
    // marginRight: 8,
    padding: 8,
    // height: "auto",
  },
  title: {},
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    // color: theme.colors.textPrimary,
    // height: 10,
  },
});

const MenuItems = ({ onSelectItem, isVisible }) => {
  if (!isVisible) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title} color="textSecondary">
        Select an item...
      </Text>
      <TouchableOpacity onPress={() => onSelectItem("Latest repositories")}>
        <Text style={styles.item}>Latest repositories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem("Highest rated repositories")}>
        <Text style={styles.item}>Highest rated repositories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelectItem("Lowest rated repositories")}>
        <Text style={styles.item}>Lowest rated repositories</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItems;
