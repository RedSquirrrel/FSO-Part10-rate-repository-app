import { useApolloClient, useMutation } from "@apollo/client";

import { AUTH_USER } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

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
      apolloClient.resetStore();
      return authData;
    } catch (error) {
      console.log("[useSignIn ERROR]", error);
    }
  };

  return [signIn, result];
};
