import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'

const Button2 = () => {
  return (
    <TouchableOpacity style={{width: 58,height: 51,backgroundColor: "#a41716",alignItems: "center", justifyContent: "center",borderRadius: 10}}>
        <Image source={require('../../assests/images/cart2.png')} style={{width: 30, height: 26}} />

    </TouchableOpacity>
  )
}

export  {Button2}
