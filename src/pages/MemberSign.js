import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet } from 'react-native'
import Button from '../components/Button/Button'
import Input from '../components/Input'


const MemberSign = ({navigation}) => {

    const [userName, setUserName] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userCity, setUserCity] = useState(null)


    function handleSubmit(){

        if(!userName || !userAge || !userMail || !userCity){
            Alert.alert('Patika Fitness', 'Information cannot be left blank!')
        }

        const user = {
             userName,
             userAge,
             userMail,
             userCity
        }

        navigation.navigate('MemberResult', {user})
    }

  return (

    <SafeAreaView style={styles.container}>
      <Input label='Member Name Surname' placeholder='Enter Your Name Surname' onChangeText={setUserName}/>
      <Input label='Member Age' placeholder='Enter Your Age' onChangeText={setUserAge}/>
      <Input label='Member E-Mail' placeholder='Enter Your E-Mail' onChangeText={setUserMail}/>
      <Input label='Member City' placeholder='Enter Your City' onChangeText={setUserCity}/>
      <Button text='Sign Up' onPress={handleSubmit}/>  
    </SafeAreaView>
    
  )
}

export default MemberSign

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5def5',
        paddingTop: 20
    }
})