import { useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Image, 
  Pressable,
  SafeAreaView
} from 'react-native'

import SafeAreaAndroid from '../components/SafeAreaAndroid'

const user = {
  id: '123456789',
  name: 'Amogus Pink',
  username: 'amoguspink',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
}

export default function NewPost() {

  const [text, setText] = useState("");
  const router = useRouter();

  const onPostPress = () => {
    console.warn(`Post enviado: "${text}"`);

    setText('');
    router.back();
  }

  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>Cancelar</Link>
          <Pressable onPress={onPostPress} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>

        </View>
        <View style={styles.input}>
          <Image src={user.image} style={styles.image} />
          <TextInput 
            value={text}
            onChangeText={setText}
            placeholder='Fique à vontade para ser criativo! :)'
            multiline
            textAlignVertical='top'
            style={{ flex: 1, marginTop: 15 }}
            numberOfLines={5}
            maxLength={301}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#ffbf00',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
  input: {
    flexDirection: 'row',
    lineHeight: 20,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10
  }
})