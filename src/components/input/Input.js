import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
const Input = ({ placeholder, type, secureTextEntry, image, pass, margin }) => {
  const [eye, setEye] = useState(false);

  return (
    <View style={[styles.inputview,{marginTop: margin}]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={image} style={styles.inputicon} />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!eye}
        />
      </View>
      <TouchableOpacity onPress={() => setEye(!eye)}>
        {pass ? (
          <View style={{ right: 4 }}>
            {eye == false ? (
              <Entypo name="eye-with-line" size={22} color={"#707070"} />
            ) : (
              <Entypo name="eye" size={22} color={"#707070"} />
            )}
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputview: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 52,
    borderRadius: 25,
    backgroundColor: "#fff",
    elevation: 10,
    position: "relative",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  input: {
    width: "90%",
    fontSize: 12,
    color: "#707070",
    paddingLeft: 15,
  },
});

export { Input };
