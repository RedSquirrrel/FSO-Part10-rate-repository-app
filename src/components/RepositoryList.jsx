import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
