import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

const Input2 = ({label,margin,width,type,pass,placeholder}) => {
  return (
    <View style={[styles.inputview2 ,{marginTop: margin,width: width}]}>
        <Text style={{fontSize: 14,color: "#00000065", fontWeight: "bold"}}>{label}</Text>
        <View>
        <TextInput keyboardType={type} placeholder={placeholder}  style={styles.input2} />
        {
            pass ?
            <View style={{flexDirection: "row",position: "absolute",right: 0}}>
            <Image source={require('../../assests/images/red.png')}style={{width: 20,height: 20,left: 10,zIndex: 1}} />
            <Image source={require('../../assests/images/yellow.png')}style={{width: 20,height: 20,}} />
            </View>
            :
            null
        }
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    inputview2:{
        alignSelf: "center",
        
    },
    input2: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        height: 40,
        paddingLeft: -5,
        fontSize: 17,
        fontWeight: "600"
    }
})

export  {Input2}
