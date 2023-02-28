import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Viewall = ({
  text,
  text2,
  left,
  right,
  fontSize,
  fontWeight,
  lineColor,
  viewAllBtn,
  backgroundColor,
  press,
  marginTop,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          alignSelf: "center",
          width: "100%",
          height: 25,
          alignItems: "center",
          justifyContent: "center",
          marginTop: marginTop,
          flexDirection: "row",
          backgroundColor: backgroundColor || "#F8F8F8",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 2,
            backgroundColor: lineColor || "grey",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -13,
              left: left,
              backgroundColor: backgroundColor || "#F8F8F8",
              paddingRight: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize || 16,
                color: "#030303",
                fontWeight: fontWeight || "600",
              }}
            >
              {text}
            </Text>
          </View>
          {viewAllBtn && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Products", {
                  screen: press,
                })
              }
              style={{
                position: "absolute",
                top: -13,
                height: 25,
                right: 0,
                overflow: "hidden",
                backgroundColor: "#F8F8F8",
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
              activeOpacity={0.9}
            >
              <Text
                style={{
                  fontSize: fontSize || 14,
                  color: "#CD1C1B",
                  fontWeight: fontWeight || "bold",
                }}
              >
                {text2}
              </Text>
              {/* <Icon
                name="arrow-right"
                type="FontAwesome"
                style={{
                  color: '#CD1C1B',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              /> */}

              <AntDesign name="arrowright" size={15} color={"#CD1C1B"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
export { Viewall };
