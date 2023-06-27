import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.backgrounds.repoListItemsBg,
    alignItems: "center",
    padding: 10,
  },
  submitBtn: {
    backgroundColor: theme.colors.primary,
    width: "90%",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  btnText: {
    color: theme.colors.white,
  },
});

const SignIn = () => {
  const onSubmit = values => {
    console.log("VALUES", values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
            <Pressable style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
