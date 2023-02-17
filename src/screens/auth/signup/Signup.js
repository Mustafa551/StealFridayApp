import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Input } from "../../../components";
import Checkbox from "expo-checkbox";

// import AppLoading from 'expo-app-loading'
// import { useFonts } from 'expo-font'

const Signup = ({ navigation }) => {
  // let [fontsLoaded] = useFonts({
  //     "poppin": require('../../../assests/fonts/Poppins-Regular.ttf')
  // })

  // if(!fontsLoaded){
  //     return <AppLoading/>
  // }

  const [isChecked, setChecked] = useState(false);

  const user = require("../../../assests/images/user.png");
  const phone = require("../../../assests/images/phone.png");
  const emailimage = require("../../../assests/images/emailicon.png");
  const lockimage = require("../../../assests/images/lockicon.png");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", flex: 1 }}>
          <View style={styles.topview}>
            <Image
              source={require("../../../assests/images/logo2.png")}
              style={styles.logoimage}
            />

            <Text style={styles.logotext}>Sign Up</Text>
          </View>

          <View style={styles.middleview}>
            <Input
              margin={25}
              image={user}
              secureTextEntry={false}
              placeholder={"Name"}
            />
            <Input
              image={phone}
              secureTextEntry={false}
              margin={25}
              placeholder={"Phone Number"}
              type={"number-pad"}
            />
            <Input
              margin={25}
              image={emailimage}
              placeholder={"Email Address"}
              type={"email-address"}
            />
            <Input
              margin={25}
              image={lockimage}
              placeholder={"Password"}
              secureTextEntry={true}
              pass={true}
            />
            <Input
              margin={25}
              image={lockimage}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              pass={true}
            />

            <View style={styles.check}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                  style={{ marginRight: 10, padding: -10 }}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#CD1C1B" : undefined}
                />
                <Text style={{ fontSize: 12 }}>I agree with</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#CD1C1B",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  Terms of Services
                </Text>
                <Text style={{ fontSize: 12 }}>&</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#CD1C1B",
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  Privacy Policy
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomview}>
            <Text
              style={{
                fontSize: 15,
                color: "#CD1C1B",
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Subscription Charges $19.99
            </Text>

            <Button
              width={"55%"}
              height={55}
              press={() => navigation.navigate("Payment")}
              back={"#a41716"}
              color={"white"}
              size={18}
              title={"Proceed To Pay"}
            />

            <View style={styles.signup}>
              <Text style={{ fontSize: 12 }}>Already have an account? </Text>
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{ color: "#CD1C1B", fontWeight: "bold", fontSize: 12 }}
              >
                Login
              </Text>
            </View>

            <View style={styles.contact}>
              <Text style={{ fontSize: 13 }}>Having Trouble Signing Up?</Text>
              <Text
                style={{ color: "#CD1C1B", fontWeight: "bold", fontSize: 13 }}
              >
                Contact Us
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topview: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 0,
  },

  logoimage: {
    width: 200,
    height: 51,
  },
  logotext: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 10,
  },
  check: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignSelf: "center",
  },
  bottomview: {
    marginTop: 15,
    alignItems: "center",
  },
  signup: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  contact: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
});

export default Signup;
