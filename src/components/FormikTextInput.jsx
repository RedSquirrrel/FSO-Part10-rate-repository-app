import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputStyle: {
    width: "100%",
  },
  errorInput: {
    width: "100%",
    borderColor: theme.colors.errorColor,
  },
  errorText: {
    fontSize: 15,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={showError ? styles.errorInput : styles.inputStyle}
      />
      {showError && (
        <Text color="errorColor" fontWeight="bold" style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </View>
  );
};

export default FormikTextInput;
