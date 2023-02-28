import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { Header, Modall2, Product } from "../../../components";
import { accessories, clothing, product3, shoes } from "../../../constant/objects";

const Activedeals = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [filterbtn, setfilterbtn] = useState(true);
  const [bordershow, setbordershow] = useState(0);
  const [defaultproduct, setdefaultproduct] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            filteropen={() => setVisible(true)}
            filter={filterbtn}
            press3={() => navigation.goBack()}
            header2={true}
          />

          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              Active Deals
            </Text>
          </View>
          <View>
            <Modall2 visible={visible} backbtn={() => setVisible(false)} />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 }}
          >
            <Text
            onPress={() => {setfilterbtn(false), setbordershow(1), setdefaultproduct(false)}}
              style={{
                fontSize: 16,
                paddingBottom: 5,
                borderBottomColor: "#CD1C1B",
                borderBottomWidth: bordershow == 1 ? 2 : 0
              }}
            >
              Clothing
            </Text>
            <Text
            onPress={() => {setfilterbtn(false), setbordershow(2), setdefaultproduct(false)}}
              style={{
                fontSize: 16,
                borderBottomColor: "#CD1C1B",
                paddingBottom: 5,
                borderBottomWidth: bordershow == 2 ? 2 : 0
              }}
            >
              Shoes
            </Text>
            <Text
            onPress={() => {setfilterbtn(false), setbordershow(3), setdefaultproduct(false)}}
              style={{
                fontSize: 16,
                borderBottomColor: "#CD1C1B",
                paddingBottom: 5,
                borderBottomWidth: bordershow == 3 ? 2 : 0
              }}
            >
              Accessories
            </Text>
          </View>
        </View>
        <View style={{ width: "95%", alignSelf: "center" }}>
            { defaultproduct  ?
          <Product
          press={navigation}
          
            hori={false}
            num={2}
            product={product3}
            marginbottom={15}
            marginTop={30}
          />: 
          <Product
          
          press={navigation}
          hori={false}
          num={2}
          product={bordershow == 1 ? clothing : bordershow == 2 ? shoes : bordershow == 3 ? accessories: product3}
          marginbottom={15}
          marginTop={30}
        />
            }
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activedeals;


// borderBottomColor: "",
//                 borderBottomWidth: 3,
