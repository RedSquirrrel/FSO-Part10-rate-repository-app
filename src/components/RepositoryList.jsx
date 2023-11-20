import { useState, useEffect } from "react";
import { useNavigate } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(searchQuery);

  const { repositories, selectedItem, setSelectedItem } = useRepositories({ debouncedValue });
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  const handleSearch = text => {
    setSearchQuery(text);
  };

  function handleCancel() {
    setSearchQuery("");
    setDebouncedValue("");
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchQuery) {
        setDebouncedValue(searchQuery);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  return (
    <RepositoryListContainer
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
      handleCancel={handleCancel}
      repositoryNodes={repositoryNodes}
      navigate={navigate}
    />
  );
};

export default RepositoryList;
