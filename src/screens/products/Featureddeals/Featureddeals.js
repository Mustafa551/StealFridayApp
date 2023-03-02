import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Header, Modall2, Product } from "../../../components";
import { product3 } from "../../../constant/objects";

const Featureddeals = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            filteropen={() => setVisible(true)}
            filter={true}
            one={visible}
            press3={() => navigation.goBack()}
            header2={true}
          />

          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              Featured Deals
            </Text>
          </View>
        </View>

        <View style={{ width: "95%", alignSelf: "center" }}>
          <Product
          press={navigation}
            hori={false}
            num={2}
            product={product3}
            marginbottom={15}
            marginTop={40}
          />
        </View>
        <View>
          <Modall2 visible={visible} backbtn={() => setVisible(false)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Featureddeals;
