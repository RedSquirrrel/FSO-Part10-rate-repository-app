import { useState } from "react";
import { View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Text from "../Text";
import MenuItem from "./MenuItems";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  dropdown: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    transform: [{ rotate: "0deg" }],
  },
  rotatedIcon: {
    transform: [{ rotate: "180deg" }],
  },
  selectedItem: {
    marginRight: 8,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

const MenuPicker = ({ selectedItem, setSelectedItem }) => {
  const [visible, setVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
    setIsRotated(!isRotated);
  };

  const onSelectedItemHandler = item => {
    setSelectedItem(item);
    toggleMenu();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.dropdown}>
        <Text style={styles.selectedItem}>{selectedItem}</Text>
        <Text style={isRotated ? styles.rotatedIcon : styles.icon}>▼</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={toggleMenu}>
        <View style={styles.modalContainer}>
          <MenuItem onSelectItem={onSelectedItemHandler} isVisible={visible} />
        </View>
      </Modal>
    </View>
  );
};

export default MenuPicker;
