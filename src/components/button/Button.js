import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({
  title,
  press,
  size,
  back,
  color,
  width,
  height,
  border,
  marginright,
}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[
        styles.btn,
        {
          backgroundColor: back,
          width: width,
          height: height,
          borderWidth: border,
          marginRight: marginright,
        },
      ]}
    >
      <Text style={{ fontSize: size, color: color, fontWeight: "600" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
    elevation: 10,
  },
});

export { Button };
