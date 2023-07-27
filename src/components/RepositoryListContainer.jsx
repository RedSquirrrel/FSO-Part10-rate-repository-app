import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

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

export default RepositoryListContainer;
