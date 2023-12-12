import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMyReview = () => {
  const { data, loading, refetch } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
  });
  const myReviews = data?.me.reviews.edges;

  return { myReviews, loading, refetch };
};

export default useMyReview;
