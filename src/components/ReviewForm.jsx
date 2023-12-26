import { View, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import useReviewForm from "../hooks/useReviewForm";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    backgroundColor: theme.backgrounds.repoListItemsBg,
  },
  innerContainer: {
    padding: 10,
  },
  submitBtn: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: theme.colors.white,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().min(0).max(100).integer().required("Rating is required"),
  text: yup.string(),
});

const ReviewForm = () => {
  const [addReview, result] = useReviewForm();

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
  };

  const navigate = useNavigate();

  const onSubmit = async values => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await addReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });

      const repId = data.createReview.repositoryId;

      if (data) {
        navigate(`/${repId}`);
      }
      return data;
    } catch (e) {
      console.log("[ADD REVIEW ERROR]", e);
    }
  };

  return (
    <View style={styles.formContainer}>
      {result.error && (
        <Text color="errorColor" textAlign="center" fontWeight="bold">
          {result.error.message}
        </Text>
      )}
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <View style={styles.innerContainer}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput multiline={true} numberOfLines={5} name="text" placeholder="Review" />
            <Pressable style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Create a Review</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
