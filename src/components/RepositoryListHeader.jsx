import { View } from "react-native";
import SearchBar from "./FilterRepositories/SearchBar";
import MenuPicker from "./DropdownSelectionMenu/MenuPicker";

const RepositoryListHeader = ({ searchQuery, handleSearch, handleCancel, selectedItem, setSelectedItem }) => {
  return (
    <View>
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} handleCancel={handleCancel} />
      <MenuPicker selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </View>
  );
};

export default RepositoryListHeader;
