import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AppBar from "./AppBar";
import Repository from "./Repository";
import ReviewForm from "./ReviewForm";
import MyReviews from "./MyReview/MyReviews";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgrounds.mainBg,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/add-review" element={<ReviewForm />} exact />
        <Route path="/my-reviews" element={<MyReviews />} exact />
        <Route path="/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
