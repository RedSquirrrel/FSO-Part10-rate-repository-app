import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories, loading, selectedItem, setSelectedItem } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryListContainer repositories={repositories} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />;
};

export default RepositoryList;
