import React from 'react'
import { Text, View } from 'react-native'

const Sizes = ({back,color,text,border}) => {
  return (
    <View style={{height: 30,width: 30,borderRadius: 5,backgroundColor: back,alignItems: "center", justifyContent: "center",marginLeft: 5,borderColor: border,borderWidth:1}}>
        <Text style={{fontSize: 15,color: color, fontWeight: "bold"}}>{text}</Text>
    </View>
  )
}

export  {Sizes}
