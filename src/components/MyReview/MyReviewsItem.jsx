import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgrounds.repoListItemsBg,
    width: "100%",
    padding: 10,
  },

  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  ratingText: {
    color: theme.colors.primary,
    padding: 5,
  },
  infoContainer: {
    width: "85%",
  },
  reviewDate: {
    color: theme.colors.textSecondary,
    marginBottom: 10,
  },
});

const MyReviewsItem = ({ reviews }) => {
  const reviewDate = reviews.createdAt.split("T")[0].split("-").reverse().join(".");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rating}>
          <Text fontWeight="bold" style={styles.ratingText}>
            {reviews.rating}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text fontSize="subheading" fontWeight="bold">
            {reviews.repositoryId}
          </Text>
          <Text style={styles.reviewDate}>{reviewDate}</Text>
          <Text>{reviews.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default MyReviewsItem;
