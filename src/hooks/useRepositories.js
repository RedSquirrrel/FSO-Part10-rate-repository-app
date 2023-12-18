import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ debouncedValue }) => {
  const defaultPrinciple = "Latest repositories";
  const [selectedItem, setSelectedItem] = useState(defaultPrinciple);

  function getOrderByAndOrderDirection(sortingOption) {
    switch (sortingOption) {
      case "Latest repositories":
        return { orderBy: "CREATED_AT", orderDirection: "DESC", first: 8 };
      case "Highest rated repositories":
        return { orderBy: "RATING_AVERAGE", orderDirection: "DESC", first: 8 };
      case "Lowest rated repositories":
        return { orderBy: "RATING_AVERAGE", orderDirection: "ASC", first: 8 };
      default:
        return { orderBy: "CREATED_AT", orderDirection: "DESC", first: 8 };
    }
  }

  const { orderBy, orderDirection, first } = getOrderByAndOrderDirection(selectedItem);

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
      first,
      searchKeyword: debouncedValue,
    },
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories;

  const handleFetchMore = async () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first,
        orderBy,
        orderDirection,
      },
    });
  };
  return { repositories, loading, selectedItem, setSelectedItem, fetchMore: handleFetchMore };
};

export default useRepositories;
