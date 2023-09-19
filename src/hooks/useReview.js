import { useQuery } from "@apollo/client";
import { REVIEWLIST } from "../graphql/queries";

const useReview = reviewList => {
  const { data, loading } = useQuery(REVIEWLIST, {
    variables: { reviewList },
    fetchPolicy: "cache-and-network",
  });

  const reviews = data?.repository.reviews.edges.map(r => r.node);

  return { reviews, loading };
};

export default useReview;
