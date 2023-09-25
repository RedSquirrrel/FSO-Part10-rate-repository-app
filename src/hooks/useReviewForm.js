import { useMutation } from "@apollo/client";

import { ADD_REVIEW } from "../graphql/mutations";

export const useReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW);

  const addReview = async ({ ownerName, repositoryName, rating, text }) => {
    if (result) {
      try {
        const reviewData = await mutate({
          variables: {
            review: {
              ownerName,
              repositoryName,
              rating,
              text,
            },
          },
        });

        return reviewData;
      } catch (error) {
        console.log("[ERROR]", error);
      }
    }
  };

  return [addReview, result];
};
