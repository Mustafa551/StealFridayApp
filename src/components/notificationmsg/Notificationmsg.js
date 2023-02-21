import React from "react";
import { Image, Text, View } from "react-native";

const Notificationmsg = ({ image, title, time }) => {
  return (
    <View
      style={{
        height: 81,
        backgroundColor: "white",
        width: "100%",
        elevation: 10,
        borderRadius: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    
        alignSelf: "center",
      }}
    >
      <Image source={image} style={{ width: 76, height: 52, marginLeft: 10 }} />
      <View style={{ alignItems: "center", paddingLeft: 15 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={{ fontSize: 13 }}>{time}</Text>
      </View>
    </View>
  );
};

export { Notificationmsg };
