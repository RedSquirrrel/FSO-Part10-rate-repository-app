import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const AppBarTab = ({ label }) => {
  const styles = StyleSheet.create({
    navText: {
      padding: 10,
    },
  });

  return (
    <Pressable onPress={() => console.log("Pressable")}>
      <Text fontWeight="bold" color="navigation" fontSize="navFontSize" style={styles.navText}>
        {label}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
