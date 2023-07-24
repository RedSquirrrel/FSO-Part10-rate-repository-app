import { useMutation } from "@apollo/client";

import { AUTH_USER } from "../graphql/mutations";
import AuthStorage from "../utils/authStorage";

const authStorage = new AuthStorage();

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH_USER);

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

      await authStorage.setAccessToken(authData.data.authenticate.accessToken);
      return authData;
    } catch (error) {
      console.log("[useSignIn ERROR]", error);
    }
  };

  return [signIn, result];
};
