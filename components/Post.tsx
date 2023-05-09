import { Text, View, Image, StyleSheet } from "react-native";
import { PostType } from "../types";

type PostProps = {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <View style={styles.container}>
      <Image src={post.user.image} style={styles.userImage} />
      
      <View style={styles.mainContainer}>
        <Text style={styles.userName}>{post.user.name}</Text>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    backgroundColor: 'white'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userName: {
    fontWeight: '600'
  },
  content: {
    lineHeight: 20,
    marginTop: 5
  }
});

export default Post;