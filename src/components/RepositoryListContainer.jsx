import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
  const navigate = useNavigate();
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  const goTo = id => {
    navigate(`/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <>
          <Pressable onPress={() => goTo(item.id)}>
            <RepositoryItem
              id={item.id}
              img={item.ownerAvatarUrl}
              fullName={item.fullName}
              description={item.description}
              language={item.language}
              stars={item.stargazersCount}
              forks={item.forksCount}
              reviews={item.reviewCount}
              rating={item.ratingAverage}
            />
          </Pressable>
        </>
      )}
    />
  );
};

export default RepositoryListContainer;