import { View, StyleSheet, Pressable, Alert, ToastAndroid } from "react-native";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: 20,
  },
  viewRepositoryBtn: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    width: 150,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  deleteReviewBtn: {
    color: theme.colors.white,
    backgroundColor: theme.colors.errorColor,
    paddingVertical: 15,
    width: 150,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

const MyReviewsItem = ({ reviews }) => {
  const reviewDate = reviews.createdAt.split("T")[0].split("-").reverse().join(".");
  const navigation = useNavigate();
  const [deleteReview] = useDeleteReview();

  const handleViewRepository = id => {
    navigation(`/${id}`);
  };

  const handleDeleteReviewAlert = id => {
    Alert.alert("Delete review", "Are you sure you want to delete this review?", [
      { text: "Cancel", onPress: () => showToast("Deletion canceled") },
      { text: "Delete", onPress: () => deleteReview(id) },
    ]);
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

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

      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => handleViewRepository(reviews.repositoryId)}>
          <Text style={styles.viewRepositoryBtn}>View repository</Text>
        </Pressable>
        <Pressable onPress={() => handleDeleteReviewAlert(reviews.id)}>
          <Text style={styles.deleteReviewBtn}>Delete review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyReviewsItem;
