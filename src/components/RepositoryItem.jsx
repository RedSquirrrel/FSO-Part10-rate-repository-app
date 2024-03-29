import { View, StyleSheet, Image, Pressable, Linking } from "react-native";
import Text from "./Text";
import theme from "../theme";

const RepositoryItem = ({ showUniqueRepository, img, fullName, description, language, stars, forks, reviews, rating, url }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.backgrounds.repoListItemsBg,
      padding: 10,
    },
    avatarImg: {
      width: 75,
      height: 75,
      borderRadius: 5,
    },
    topPart: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 20,
      padding: 10,
    },
    info: {
      marginLeft: 20,
      width: "75%",
      alignItems: "flex-start",
      paddingTop: 5,
    },
    language: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,

      alignSelf: "flex-start",
      padding: 10,
      marginTop: 15,
      borderRadius: 5,
    },
    bottomPart: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    counts: {
      textAlign: "center",
    },
    openInGithubBtn: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      marginTop: 20,
      borderRadius: 5,
    },
  });

  const formatNumber = num => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.topPart}>
        <Image style={styles.avatarImg} source={{ uri: img }} />
        <View style={styles.info}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text>{description}</Text>
          <Text fontWeight="bold" style={styles.language}>
            {language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <View>
          <Text fontWeight="bold" style={styles.counts}>
            {formatNumber(stars)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text fontWeight="bold" style={styles.counts}>
            {formatNumber(forks)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text fontWeight="bold" style={styles.counts}>
            {formatNumber(reviews)}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text fontWeight="bold" style={styles.counts}>
            {formatNumber(rating)}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
      {showUniqueRepository ? (
        <Pressable style={styles.openInGithubBtn} onPress={() => Linking.openURL(url)}>
          <Text textAlign="center" color="white" fontWeight="bold" fontSize="linkButton">
            Open in GitHub
          </Text>
        </Pressable>
      ) : (
        ""
      )}
    </View>
  );
};

export default RepositoryItem;
