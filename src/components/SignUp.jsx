import { Pressable, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import { useSignUp } from "../hooks/useSignUp";
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
    width: "100%",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: theme.colors.white,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be at least 5 character long")
    .max(30, "Username cannot be more than 30 character long")
    .required("Usrename is required"),
  password: yup.string().min(5, "Password must have at least 5 characters").max(50).required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Password confirmation is required"),
});

const SignUp = () => {
  const [signUp, result] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async values => {
    const { username, password, passwordConfirm } = values;

    try {
      const { data } = await signUp({ username, password, passwordConfirm });

      if (data) {
        navigate("/signin");
      }
      return data;
    } catch (e) {
      console.log("[SIGN UP ERROR]", e);
    }
  };
  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
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
          <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
            <FormikTextInput secureTextEntry={true} name="passwordConfirm" placeholder="Password confirmation" />
            <Pressable style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
