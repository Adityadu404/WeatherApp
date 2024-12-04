import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({onPress, color, size , name}) {
  return (
   <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed }>
     <View style={styles.container}>
        <Ionicons name={name} color={color} size={size}/>
    </View>
   </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        margin :6
    },
    pressed:{
        opacity:0.75
    }
})