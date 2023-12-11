import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReview = () => {
  const { data } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
  });
  const myReviews = data?.me.reviews.edges;

  return { myReviews };
};

export default useMyReview;
