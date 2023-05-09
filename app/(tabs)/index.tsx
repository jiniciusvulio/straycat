import { StyleSheet, View, FlatList} from 'react-native'

import Post from '../../components/Post';
import posts from '../../assets/data/posts';


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  }
});
