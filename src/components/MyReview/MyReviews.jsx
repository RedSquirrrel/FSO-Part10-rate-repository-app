import { FlatList, View, StyleSheet } from "react-native";
import useMyReview from "../../hooks/useMyReview";
import MyReviewsItem from "./MyReviewsItem";

const MyReviews = () => {
  const { myReviews } = useMyReview();

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <View>
      <FlatList
        data={myReviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <MyReviewsItem key={item.node.repositoryId} reviews={item.node} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default MyReviews;
