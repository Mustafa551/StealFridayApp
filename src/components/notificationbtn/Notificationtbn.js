import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'

const Notificationtbn = ({title,stat}) => {
    const [swi, setSwi] = useState(stat)
  return (
    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 15}}>
        <Text style={{fontSize: 17,fontWeight: "400"}}>{title}</Text>
        <Switch
        trackColor={{false: "gray", true: "#E4201E"}}
        thumbColor={swi ? "white" : "white"}
        value={swi}
        onValueChange={(value) => setSwi(value)}
        style={{width: 45,height: 25}}
        />
    </View>
  )
}

export  {Notificationtbn}
