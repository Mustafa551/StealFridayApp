import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Header, Product, Viewall, Products2 } from "../../../components";
import { product, product2, product3 } from "../../../constant/objects";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            press2={() => navigation.navigate("Profilesetting")}
            press={() => navigation.openDrawer()}
            header1={true}
          />
          <View style={{ width: "100%" }}>
            <Image
              source={require("../../../assests/images/mask.png")}
              style={{
                width: 81,
                height: 41,
                alignItems: "center",
                alignSelf: "center",
              }}
            />
          </View>
          <LinearGradient
            colors={["#650E0D", "#CA1C1A"]}
            start={{ x: 0.1, y: 0.2 }}
            end={{ x: 0.8, y: 1 }}
            style={styles.timer}
          >
            <CountDown
              separatorStyle={{}}
              style={{}}
              until={2000000}
              size={20}
              digitStyle={{ marginHorizontal: 20 }}
              digitTxtStyle={{ color: "white", fontSize: 28 }}
              timeLabelStyle={{ fontSize: 10, marginTop: -8 }}
              timeToShow={["D", "H", "M", "S"]}
              timeLabels={{ d: "Days", h: "Hours", m: "Minutes", s: "Seconds" }}
            />
          </LinearGradient>

          <Viewall
            viewAllBtn
            text="Featured Deals"
            text2={"View All"}
            marginTop={20}
            left={0}
          />

          <Product hori={true} product={product} marginTop={40} />

          <Viewall
            viewAllBtn
            text="Deal Categories"
            text2={"View All"}
            left={0}
            marginTop={30}
          />

          <View style={{ marginTop: 20 }}>
            <Products2 product={product2} />
          </View>

          <Viewall
            viewAllBtn
            text="Active Deals"
            text2={"View All"}
            marginTop={0}
            left={0}
          />

          <Product
            hori={false}
            num={2}
            product={product3}
            marginbottom={15}
            marginTop={40}
          />
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 15,
                marginTop: 10,
                fontSize: 16,
                fontWeight: "bold",
                color: "#1564EB",
              }}
            >
              View More..
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timer: {
    width: "100%",
    height: 61,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default Home;
