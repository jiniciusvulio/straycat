import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { PostType } from "../types";
import { Entypo } from '@expo/vector-icons';
import { Link } from "expo-router";

import IconButton from "./IconButton";

type PostProps = {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/post/${ post.id }` } asChild>
      <Pressable style={ styles.container }>
        <Image src={ post.user.image } style={ styles.userImage } />
        
        <View style={ styles.mainContainer }>
          <View style={{ flexDirection: 'row' }}>

            <Text style={ styles.name }>{ post.user.name }</Text>
            <Text style={ styles.handle }>@{ post.user.username } · 2h</Text>
            <Entypo name="dots-three-horizontal" size={16} color="gray" style={{ marginLeft: 'auto' }} />
          </View>
          
          <Text style={ styles.content }>{ post.content }</Text>
      
          {post.image && <Image src={ post.image } style={ styles.image } />}

          <View style={ styles.footer }>
            <IconButton icon="comment" text={ post.comments } />          
            <IconButton icon="share-google" text={ post.reposts } />          
            <IconButton icon="like" text={ post.likes } />          
            <IconButton icon="chart" text={ post.impressions || 0 } />          
            <IconButton icon="share-apple" />          
          </View>
        </View>
      </Pressable>
    </Link>
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
  name: {
    fontWeight: '600',
  },
  handle: {
    color: 'gray',
    marginLeft: 5
  },
  content: {
    lineHeight: 20,
    marginTop: 5
  },
  image: {
    width: '100%',
    aspectRatio: 16/9,
    marginVertical: 10,
    borderRadius: 10,
    resizeMode: 'stretch'
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between'
  }
});

export default Post;