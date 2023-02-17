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

const Home = ({navigation}) => {
  const product = [
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/tshirt1.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/shoes1.png"),
      title: "Nike Collection",
      backcolor: "#998BC8AD",
      iconcolor: "#453B62",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assests/images/headphone1.png"),
      title: "Beats Up HeadSet",
      backcolor: "#114C8A",
      iconcolor: "#114C8A",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assests/images/shoes2.png"),
      title: "Nike Collection",
      backcolor: "#CDF37B",
      iconcolor: "#BFFB41",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/tshirt2.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
    },
  ];

  const product2 = [
    {
      image: require("../../../assests/images/headphone2.png"),
      title: "Accessories",
      total: "48 Products",
    },
    {
      image: require("../../../assests/images/tshirt3.png"),
      title: "Clothing",
      total: "98 Products",
    },
    {
      image: require("../../../assests/images/shoes3.png"),
      title: "Shoes",
      total: "100 Products",
    },
  ];

  const product3 = [
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/tshirt1.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/shoes1.png"),
      title: "Nike Collection",
      backcolor: "#998BC8AD",
      iconcolor: "#453B62",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assests/images/headphone1.png"),
      title: "Beats Up HeadSet",
      backcolor: "#114C8A",
      iconcolor: "#114C8A",
    },
    {
      tag: "New",
      price: "$15.00",
      image: require("../../../assests/images/shoes2.png"),
      title: "Nike Collection",
      backcolor: "#BFFB41",
      iconcolor: "#CDF37B",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/apple.png"),
      title: "Apple Airpods",
      backcolor: "#AF0010",
      iconcolor: "#FF0000",
    },
    {
      tag: "Old",
      price: "$15.00",
      image: require("../../../assests/images/tshirt2.png"),
      title: "Gym T-shirt",
      backcolor: "#00000029",
      iconcolor: "#00000029",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#F8F8F8" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header press2={()=> navigation.navigate("Profilesetting")} press={() => navigation.openDrawer()} header1={true} />
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
            {/* <View style={{width:"90%",alignSelf: "center",flexDirection: "row",justifyContent: "space-between",alignItems:"center"}}>
                <View style={{alignItems:"center"}}>
                  <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>00</Text>
                  <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Days</Text>
                </View>

                <View style={{borderLeftWidth: 1,height: 40 ,borderLeftColor: "#030303"}}></View>

                <View style={{alignItems:"center"}}>
                  <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>14</Text>
                  <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Hours</Text>
                </View>

                <View style={{borderLeftWidth: 1,height: 40, borderLeftColor: "#030303"}}></View>


                <View style={{alignItems:"center"}}>
                  <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>30</Text>
                  <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Minutes</Text>
                </View>

                <View style={{borderLeftWidth: 1,height: 40, borderLeftColor: "#030303"}}></View>


                <View style={{alignItems:"center"}}>
                  <Text style={{color: "white",fontSize: 28,fontWeight:"bold"}}>09</Text>
                  <Text style={{color: "white",fontSize: 10, marginTop: -5}}>Seconds</Text>
                </View>
              </View>
           */}
            <CountDown
              style={{}}
              until={2000000}
              size={20}
              digitStyle={{ borderRightWidth: 1 }}
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
