import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Button, Button2, Sizes } from "../../../components";
const Addtocart = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <ImageBackground
          source={require("../../../assests/images/Splash.png")}
          resizeMode={"stretch"}
          style={{ width: "100%", height: Dimensions.get("window").height }}
        >
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              paddingBottom: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assests/images/whiteleftarrow.png")}
              style={{ width: 28, height: 28 }}
            />
            <View style={styles.topright}>
              <Image source={require("../../../assests/images/star.png")} />
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: -40 }}>
            <Image source={require("../../../assests/images/headphone5.png")} />
          </View>

          <View
            style={{
              width: "90%",
              alignSelf: "center",
              marginBottom: 10,
              marginTop: -30,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Product Name
            </Text>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              Product Code:42303
            </Text>
          </View>

          <View style={styles.orderdetails}>
            <View style={{ width: "80%", alignSelf: "center", marginTop: 25 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Price:</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>$15.00</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 4,
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Size:</Text>
                <View style={{ flexDirection: "row" }}>
                  <Sizes
                    back={"#E4201E"}
                    color={"white"}
                    text={"L"}
                    border={"#CD1C1B"}
                  />
                  <Sizes
                    back={"white"}
                    color={"black"}
                    text={"M"}
                    border={"#CD1C1B"}
                  />
                  <Sizes
                    back={"white"}
                    color={"black"}
                    text={"S"}
                    border={"#CD1C1B"}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Condition:
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>New</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderBottomColor: "#707070",
                  paddingBottom: 8,
                  marginTop: 15,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Brand:</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Hidden Sole
                </Text>
              </View>
                <View style={{marginTop: 10}}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Description:</Text>
                <Text style={{ fontSize: 14, }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                </Text>
                </View>

              <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 10}}>
              <Button
              width={"70%"}
              height={49}
              press={() => navigation.navigate("")}
              size={22}
              title={"Buy Now"}
              color={"white"}
              back={"#a41716"}
            />
            <Button2 />

              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topright: {
    height: 34,
    width: 34,
    borderRadius: 18,
    backgroundColor: "white",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  orderdetails: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
  },
});

export default Addtocart;
