import { useMutation } from "@apollo/client";
import { REGISTER_NEW_USER } from "../graphql/mutations";

export const useSignUp = () => {
  const [mutate, result] = useMutation(REGISTER_NEW_USER);

  const signUp = async ({ username, password }) => {
    try {
      const registrationData = await mutate({
        variables: {
          user: {
            username,
            password,
          },
        },
      });

      return registrationData;
    } catch (error) {
      console.log("[useSignUP ERROR]", error);
    }
  };

  return [signUp, result];
};
