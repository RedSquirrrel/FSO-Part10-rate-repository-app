import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.backgrounds.repoListItemsBg,
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

const validationSchema = yup.object().shape({
  username: yup.string().min(3, "Username must be at least 3 character long").required("Usrename is required"),
  password: yup.string().min(5, "Password must have at least 5 characters").required("Password is required"),
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
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
            <Pressable style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
