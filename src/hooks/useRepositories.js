import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const defaultPrinciple = "Latest repositories";

  function getOrderByAndOrderDirection(sortingOption) {
    switch (sortingOption) {
      case "Latest repositories":
        return { orderBy: "CREATED_AT", orderDirection: "DESC" };
      case "Highest rated repositories":
        return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      case "Lowest rated repositories":
        return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
      default:
        return { orderBy: "CREATED_AT", orderDirection: "DESC" };
    }
  }
  const [selectedItem, setSelectedItem] = useState(defaultPrinciple);

  const { orderBy, orderDirection } = getOrderByAndOrderDirection(selectedItem);

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy,
      orderDirection,
    },
    fetchPolicy: "cache-and-network",
  });

  const repositories = data?.repositories;
  return { repositories, loading, selectedItem, setSelectedItem };
};

export default useRepositories;
