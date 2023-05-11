import { StyleSheet, View, FlatList, Pressable} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Post from '../../components/Post';
import posts from '../../assets/data/posts';


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} /> 
    
      <Link href="/new-post" asChild>
        <Entypo name="plus" size={24} color="white" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    backgroundColor: 'rgba(255, 191, 0, 1)',
   
    position: 'absolute',
    
    padding: 10,
    borderRadius: 10,

    right: 15,
    bottom: 15,
    textAlign: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
    overflow: 'hidden'
  },
});
