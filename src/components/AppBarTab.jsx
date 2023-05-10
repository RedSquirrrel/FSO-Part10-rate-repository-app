import { StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ label, to }) => {
  const styles = StyleSheet.create({
    navText: {
      padding: 10,
    },
  });

  return (
    <Link to={to}>
      <Text fontWeight="bold" color="navigation" fontSize="navFontSize" style={styles.navText}>
        {label}
      </Text>
    </Link>
  );
};

export default AppBarTab;
