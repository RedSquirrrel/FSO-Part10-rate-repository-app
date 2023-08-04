import { useParams } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import { useEffect, useState } from "react";

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const [showUniqueRepository, setShowUniqueRepository] = useState(false);

  useEffect(() => {
    if (id) setShowUniqueRepository(true);
  }, []);

  return (
    <>
      {repository && (
        <RepositoryItem
          id={repository.id}
          img={repository.ownerAvatarUrl}
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
          stars={repository.stargazersCount}
          forks={repository.forksCount}
          reviews={repository.reviewCount}
          rating={repository.ratingAverage}
          url={repository.url}
          showUniqueRepository={showUniqueRepository}
        />
      )}
    </>
  );
};

export default Repository;
