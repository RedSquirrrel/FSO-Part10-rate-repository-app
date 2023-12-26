import { useQuery } from "@apollo/client";
import { REVIEWLIST } from "../graphql/queries";

const useReview = (repositoryID, first) => {
  const { data, loading, fetchMore } = useQuery(REVIEWLIST, {
    variables: { repositoryID, first },
    fetchPolicy: "cache-and-network",
  });

  const reviews = data?.repository.reviews.edges.map(r => r.node);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        repositoryID,
        first,
      },
    });
  };

  return { reviews, loading, fetchMore: handleFetchMore };
};

export default useReview;
