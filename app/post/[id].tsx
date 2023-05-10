import { Text } from 'react-native'
import Post from "../../components/Post"
import posts from "../../assets/data/posts"
import { useSearchParams } from "expo-router"

export default function PostScreen() {
  const { id } = useSearchParams();

   const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Text>Post {id} não encontrado!</Text>
  }
  return (
    <Post post={post} />
  )
}