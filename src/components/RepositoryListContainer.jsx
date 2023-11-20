import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { handleCancel, selectedItem, setSelectedItem, searchQuery, handleSearch } = this.props;

    return (
      <RepositoryListHeader
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        handleCancel={handleCancel}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    );
  };

  render() {
    const { repositoryNodes } = this.props;

    const styles = StyleSheet.create({
      separator: {
        height: 10,
      },
    });

    const ItemSeparator = () => <View style={styles.separator} />;

    const goTo = id => {
      this.props.navigate(`/${id}`);
    };
    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <>
            <Pressable onPress={() => goTo(item.id)}>
              <RepositoryItem
                id={item.id}
                img={item.ownerAvatarUrl}
                fullName={item.fullName}
                description={item.description}
                language={item.language}
                stars={item.stargazersCount}
                forks={item.forksCount}
                reviews={item.reviewCount}
                rating={item.ratingAverage}
              />
            </Pressable>
          </>
        )}
      />
    );
  }
}

export default RepositoryListContainer;
