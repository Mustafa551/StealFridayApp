import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Input2, Modall } from "../../../components";

const Payment = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <ScrollView >
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 0 }}
        >
          <Image
            source={require("../../../assests/images/leftarrow.png")}
            style={{ width: 24, height: 24, marginTop: 40 }}
          />
        </TouchableOpacity>

        <View style={styles.topview}>
          <Text style={styles.topviewtxt1}>Payment Method</Text>
          <Text style={styles.topviewtxt2}>
            Subscription Fee $19.99/month and it will auto re-subscribed. You
            can turn off auto re-subscription from settings
          </Text>
        </View>

        <View style={styles.middleview}>
          <Input2 label={"Name on Card"} placeholder={"Name"} width={"90%"} />
          <Input2 label={"Card Number"} margin={40} placeholder={"xxxx xxxx xxxx xxxx"} width={"90%"} pass={true} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Input2
              type={"phone-pad"}
              placeholder={"xx/xx"}
              label={"Expiry Date"}
              margin={40}
              width={"30%"}
            />
            <Input2
            placeholder={"xxx"}
              type={"phone-pad"}
              label={"CVV"}
              margin={40}
              width={"30%"}
            />
          </View>
        </View>

        <View style={styles.bottomview}>
          <Button
            press={() => setVisible(true)}
            width={"55%"}
            height={55}
            size={22}
            back={"#a41716"}
            color={"white"}
            title={"Pay Now"}
          />

          <Modall
            svisible={() => setVisible(false)}
            visible={visible}
            backbtn={() => setVisible(false)}
            presss={() => {
              setVisible2(true), setVisible(false);
            }}
            show={true}
            text={" Are you sure, you want to proceed with payment?"}
          />

          <Modall
            
            visible={visible2}
            text={"Payment Processed Successfully"}
            backbtn={() => setVisible2(false)}
          />

          <Text style={styles.or}>OR</Text>

          <Button
          press={()=> navigation.navigate('Mydrawer', {screen: 'Homes'})}
            width={"55%"}
            height={55}
            size={22}
            back={"white"}
            color={"black"}
            title={"PayPal"}
            style={styles.btn3}
          />
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topview: {
    alignItems: "center",
    marginTop: 15,
  },
  topviewtxt1: {
    fontSize: 22,
    fontWeight: "bold",
  },
  topviewtxt2: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    width: "73%",
    lineHeight: 18,
    marginTop: 25,
    opacity: 0.7,
  },
  middleview: {
    marginTop: 40,
    width: "100%",
    alignSelf: "center",
  },
  or: {
    fontSize: 21,
    fontWeight: "600",
    opacity: 0.3,
    textAlign: "center",
    marginVertical: 25,
  },
  bottomview: {
    marginTop: 50,
    paddingBottom: 20
  },
  // btn3: {
  //   marginBottom: 10,
  //   paddingBottom: 10,
  // },
});

export default Payment;
