import { useMutation } from "@apollo/client";

import { AUTH_USER } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH_USER);
  console.log("[useSignIn MUTATION RESULT authData]", result);

  const signIn = async ({ username, password }) => {
    try {
      const authData = await mutate({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });
      console.log("[useSignIn authData IN USESIGNIN]", authData);
      return authData;
    } catch (error) {
      console.log("[useSignIn ERROR]", error);
    }
  };

  return [signIn, result];
};
