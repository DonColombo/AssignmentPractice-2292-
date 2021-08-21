import * as React from 'react';
import { Text, View, StyleSheet, Button, Image,Alert ,TextInput , TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  
  return (
    <View style={styles.container}>
     <Text style={styles.paragraph}>
      John Doe Music
      </Text>
        <Image
        style={styles.image}
        source={{
          uri: 'https://www.neonsignau.com/images/big/Music-Note-Purple-Neon-Sign.jpg',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="email address"
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => alert('Thank you, Check your email')} style={styles.Button}>
        <Text style={styles.buttontext}>Send Mail</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
   paragraph: {
     margin: 11,
     fontSize: 18,
     fontWeight: 'Bold',
     textAlign: 'center',
   },
   image: {
    width: 300,
    height: 300,
  },
    input: {
    height: 40,
    margin: 12,
    borderColor:'gray',
    borderWidth: 1,
  },
    Button: {
      backgroundColor: "black",
      paddingTop: 10,
      paddingBottom: 10,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 10,
      borderRadius: 5,
    },
    buttontext: {
      fontSize: 20,
      color:'#fff',
    
    },


});

