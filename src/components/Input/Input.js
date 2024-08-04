import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({label, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.input_container}>
            <TextInput style={styles.input} onChangeText={onChangeText} placeholder={placeholder}/>
        </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input_container: {
    borderWidth: 1,
    margin: 5,
    padding: 4,
    borderRadius: 10,
    borderColor: '#6643b5'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    input: {
        padding: 3,
        fontSize: 16,
        fontWeight: 'bold',
    }
})