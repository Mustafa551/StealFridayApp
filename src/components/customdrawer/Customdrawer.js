import React from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../constant/Image";

const Customdrawer = ({navigation}) => {
  const sidebar = [
    {
      title: "Home",
      image: require("../../assests/images/home.png"),
      
    },
    {
      title: "Settings",
      image: require("../../assests/images/user2.png"),
      change: 'Profilesetting'
    },
    {
      title: "Subscription",
      image: require("../../assests/images/subs.png"),
    },
    {
      title: "Favorites",
      image: require("../../assests/images/favo.png"),
    },
    {
      title: "Cart",
      image: require("../../assests/images/cart.png"),
    },
    {
      title: "My Orders",
      image: require("../../assests/images/order.png"),
    },
    {
      title: "Contact Us",
      image: require("../../assests/images/contact.png"),
    },
    {
      title: "Logout",
      image: require("../../assests/images/logout.png"),
    },
  ];
  return (
    <ImageBackground
      source={require("../../assests/images/drawe3.png")}
      style={{ height: "100%", width: "100%" }}
      resizeMode={"stretch"}
    >
      <View style={{ width: "80%", alignSelf: "center", marginTop: 70 }}>
        <Image
          source={require("../../assests/images/logo.png")}
          style={{ width: 190, height: 30 }}
        />
        <View style={{ marginTop: 100 }}>
          <FlatList
            data={sidebar}
            renderItem={(item) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate(item.item.change)} >

                <View style={{ flexDirection: "row", marginBottom: 23 }}>
                  <Image
                    source={item.item.image}
                    style={{ width: 20, height: 22, marginRight: 13 }}
                  />
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.item.title}
                  </Text>
                </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Customdrawer;
