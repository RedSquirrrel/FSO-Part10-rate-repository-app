import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";

const useRepository = idToSearch => {
  const { data, loading } = useQuery(REPOSITORY, {
    variables: { idToSearch },
    fetchPolicy: "cache-and-network",
  });

  const repository = data?.repository;
  return { repository, loading };
};

export default useRepository;
