import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          img={item.ownerAvatarUrl}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          stars={item.stargazersCount}
          forks={item.forksCount}
          reviews={item.reviewCount}
          rating={item.ratingAverage}
        />
      )}
    />
  );
};

export default RepositoryList;
