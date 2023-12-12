import { useEffect } from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import Text from "../Text";
import useMyReview from "../../hooks/useMyReview";
import MyReviewsItem from "./MyReviewsItem";

const MyReviews = () => {
  const { myReviews, loading, refetch } = useMyReview();

  useEffect(() => {
    refetch();
  }, []);

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    message: {
      marginTop: 10,
      fontSize: 20,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  if (loading) {
    return <ActivityIndicator size="large" color="#0366d6" />;
  }

  if (!myReviews || myReviews.length === 0) {
    return (
      <Text style={styles.message} fontWeight="bold" color="primary" textAlign="center">
        Create a review first
      </Text>
    );
  }
  return (
    <FlatList
      data={myReviews}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ node }) => node.id}
      renderItem={({ item }) => <MyReviewsItem key={item.node.id} reviews={item.node} />}
    />
  );
};

export default MyReviews;
