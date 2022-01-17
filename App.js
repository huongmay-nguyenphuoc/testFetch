import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Form } from 'react-native';
import { genericFetch } from './fetchApi';
import { genericFetchUsers } from './fetchApi';
import { API_URL } from "@env" 
export default function App() {

  const [users, setUsers] = useState('');
  const [token, setToken] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  console.log(users)
   useEffect(() => {
    genericFetchUsers(`${API_URL}/experiences`, 'GET', token) 
    .then(json => setUsers(json))
    .catch(error => console.error(error))
    setUsers([])
  }, [token])


  const handleSubmitPress = () => {

    const body = JSON.stringify({
      "login": userEmail,
      "password": userPassword
  })

    genericFetch(`${API_URL}/login`, 'POST', body, token)
      .then(json => setToken(json.token))
      .catch((error) => {
        console.error("error" , error);
        setToken('')
      });
  };

  return (
    <View style={styles.container}>
      <Text>Tous les users</Text>
      {users && users.map(user => <Text key={user.id}>login : { user.title}</Text>)}


      <TextInput
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter login" required //dummy@abc.com
              />

      <TextInput
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" required //12345
              />
  
      <TouchableOpacity
              onPress={handleSubmitPress}>
              <Text>LOGIN</Text>
      </TouchableOpacity>

      {token && <Text>Token : {token}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
