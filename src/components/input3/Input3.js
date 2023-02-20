import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Input3 = ({ type, placeholder, image }) => {
  return (
    <View style={[styles.inputview2]}>
      <View style={{ flexDirection: "row", alignItems: "center", width: "90%" }}>
        <Image style={{marginLeft:5}} source={image} />
        <TextInput
          keyboardType={type}
          placeholder={placeholder}
          style={styles.input2}
        />
      </View>
      <Image style={{justifyContent: "flex-end",alignItems:"flex-end"}} source={require("../../assests/images/edit.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputview2: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 52,
    borderBottomColor: "#BCBCBC",
    borderBottomWidth: 1,
    marginTop: 20,
    paddingTop: 20,
    justifyContent: "space-between"
    
  },
  input2: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    width: "100%",    
  
  },
});

export { Input3 };
