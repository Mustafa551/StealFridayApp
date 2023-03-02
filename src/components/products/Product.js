import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Product = ({
  product,
  marginTop,
  hori,
  num,
  marginbottom,
  press,
  
}) => {
  return (
    <View style={{ marginTop: marginTop }}>
      <FlatList
      
        data={product}
        showsHorizontalScrollIndicator={false}
        horizontal={hori}
        numColumns={num}
        renderItem={(items) => {
          return (
            <TouchableOpacity
              onPress={() =>
                press.navigate("Products", {
                  screen: "Addtocart",
                  params: {
                    image: items.item.image,
                    productname: items.item.title,
                    price: items.item.price,
                    tag: items.item.tag,
                  },
                })
              }
            >
              <View
                style={{
                  marginRight: 10,
                  alignItems: "center",
                  marginBottom: marginbottom,
                }}
              >
                <View
                  style={[
                    styles.productback,
                    { backgroundColor: items.item.backcolor },
                  ]}
                >
                  <View style={{ width: "80%", alignSelf: "center" }}>
                    <View style={styles.topitem}>
                      <View
                        style={[
                          styles.tag,
                          { backgroundColor: items.item.backcolor },
                        ]}
                      >
                        <Text>{items.item.tag}</Text>
                      </View>
                      <View
                        style={{
                          height: 30,
                          width: 30,
                          borderRadius: 15,
                          backgroundColor: "white",
                          opacity: 0.7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AntDesign
                          name="star"
                          color={items.item.iconcolor}
                          size={22}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "90%",
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <View style={{ marginVertical: 30, marginTop: 40 }}>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {items.item.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 110,
                        height: 110,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ width: "80%", height: "80%", marginRight: 20 }}
                        resizeMode="contain"
                        source={items.item.image}
                      />
                    </View>
                  </View>
                </View>

                <Text style={{ fontSize: 16, marginTop: 10 }}>
                  {items.item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productback: {
    width: "90%",
    height: 160,
    borderRadius: 30,
    opacity: 0.8,
  },
  topitem: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tag: {
    width: 45,
    height: 18,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
});

export { Product };
