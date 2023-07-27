import { useNavigate } from "react-router-native";
import { useSignIn } from "../hooks/useSignIn";

import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const [signIn, result] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });

      if (data) {
        navigate("/");
      }
      return data;
    } catch (e) {
      console.log("[SIGN IN ERROR]", e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
