import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../components/Button/Button'


const WelcomeScreen = ({navigation}) => {

    function goToMemberSign(){
        navigation.navigate('MemberSign')
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Patika Fitness</Text>
      <Button text='Members Sign Up' onPress={goToMemberSign}/>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d5def5'
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 30
    }
})