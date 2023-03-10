import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Settingoption = ({ title, press }) => {
  return (
    <TouchableOpacity onPress={press} style={styles.settingop}>
      <View style={{}}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>
      <View style={{}}>
        <Image
          source={require("../../assests/images/rightarrow.png")}
          style={{ width: 14, height: 24 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingop: {
    width: "100%",
    height: 57,
    backgroundColor: "#fff",
    elevation: 10,
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export { Settingoption };
