import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6643b5',
    borderRadius: 15,
    margin: 5,
    padding: 15,
    alignItems: 'center'
},
title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
}
})

export default Button

