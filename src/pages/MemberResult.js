import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const MemberResult = ({route}) => {

    const {user} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: 'bold', margin: 20}}>Kayıt Tamamlandı!</Text>
      <Text style={styles.title}>Member Name Surname : {user.userName}</Text>
      <Text style={styles.title}>Member Age : {user.userAge}</Text>
      <Text style={styles.title}>Member Mail : {user.userMail}</Text>
      <Text style={styles.title}>Member City : {user.userCity}</Text>
    </SafeAreaView>
  )
}

export default MemberResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5def5',
        paddingTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 10
    }
})