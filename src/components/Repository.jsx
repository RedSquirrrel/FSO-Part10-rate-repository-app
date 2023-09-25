import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useParams } from "react-router-native";

import useRepository from "../hooks/useRepository";
import useReview from "../hooks/useReview";

import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const [showUniqueRepository, setShowUniqueRepository] = useState(false);
  const { reviews } = useReview(id);

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  useEffect(() => {
    if (id) setShowUniqueRepository(true);
  }, []);

  return (
    <>
      {repository && (
        <FlatList
          data={reviews}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => (
            <RepositoryItem
              key={repository.id}
              id={repository.id}
              img={repository.ownerAvatarUrl}
              fullName={repository.fullName}
              description={repository.description}
              language={repository.language}
              stars={repository.stargazersCount}
              forks={repository.forksCount}
              reviews={repository.reviewCount}
              rating={repository.ratingAverage}
              url={repository.url}
              showUniqueRepository={showUniqueRepository}
            />
          )}
        />
      )}
    </>
  );
};

export default Repository;
