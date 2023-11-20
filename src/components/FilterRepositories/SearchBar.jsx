import { View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../../theme";

const style = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    paddingHorizontal: 36,
    paddingVertical: 10,
    backgroundColor: theme.backgrounds.white,
    borderRadius: 5,
    flex: 1,
    elevation: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    zIndex: 1000,
    position: "absolute",
  },
  cancelIconContainer: {
    marginLeft: 300,
    zIndex: 1000,
    position: "absolute",
  },
  cancelIcon: {
    width: 20,
    height: 20,
  },
});

const Searchbar = ({ searchQuery, handleSearch, handleCancel }) => {
  return (
    <View style={style.container}>
      <Image source={require("../../icons/search.png")} style={style.searchIcon} />
      <TextInput style={style.searchInput} value={searchQuery} placeholder="Search repositories..." onChangeText={handleSearch} />
      {searchQuery ? (
        <TouchableOpacity onPress={handleCancel} style={style.cancelIconContainer}>
          <Image source={require("../../icons/cancel.png")} style={style.cancelIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Searchbar;
