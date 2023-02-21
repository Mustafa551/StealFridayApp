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
import Entypo from "@expo/vector-icons/Entypo";
import Svgicon1 from "../../../assests/svg/homesvg";


// import AppLoading from 'expo-app-loading'
// import { useFonts } from 'expo-font'

const Login = ({ navigation }) => {
  // let [fontsLoaded] = useFonts({
  //     "poppin": require('../../../assests/fonts/Poppins-Regular.ttf')
  // })

  // if(!fontsLoaded){
  //     return <AppLoading/>
  // }

  const [isChecked, setChecked] = useState(false);

  const emailimage = require("../../../assests/images/emailicon.png");
  const lockimage = require("../../../assests/images/lockicon.png");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <View style={styles.topview}>
            <Image
              source={require("../../../assests/images/logo2.png")}
              style={styles.logoimage}
            />

            <Text style={styles.logotext}>Login</Text>
          </View>

          <View style={styles.middleview}>
            <Input
              image={emailimage}
              margin={35}
              placeholder={"Email Address"}
              type={"email-address"}
            />
            <Input
              image={lockimage}
              margin={35}
              placeholder={"Password"}
              secureTextEntry={true}
              pass={true}
            />

            

            <View style={styles.check}>
              <View style={{ flexDirection: "row" }}>
                <Checkbox
                  style={{ marginRight: 10, padding: -10 }}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#CD1C1B" : undefined}
                />
                <Text style={{ fontSize: 14 }}>Remember me</Text>
              </View>
              <Text style={{ fontSize: 12 }}>Forget password?</Text>
            </View>
          </View>

          <View style={styles.bottomview}>
            <Button
              width={"55%"}
              height={55}
              press={() => navigation.navigate("Signup")}
              size={22}
              title={"Login"}
              color={"white"}
              back={"#a41716"}
            />
            <Text style={styles.or}>OR</Text>
            <Svgicon1 />

            <View style={styles.signup}>
              <Text style={{ fontSize: 12 }}>Don't have an account? </Text>
              <Text
                onPress={() => navigation.navigate("Signup")}
                style={{ color: "#CD1C1B", fontWeight: "bold", fontSize: 12 }}
              >
                Sign Up
              </Text>
            </View>

            <View style={styles.contact}>
              <Text style={{ fontSize: 13 }}>Having Trouble Logging In?</Text>
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
    marginTop: 101,
    marginBottom: 40,
  },

  logoimage: {
    width: 200,
    height: 51,
  },
  logotext: {
    fontSize: 34,
    fontWeight: "900",
    marginTop: 40,
  },
  check: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignSelf: "center",
  },
  bottomview: {
    marginTop: 30,
  },
  or: {
    fontSize: 21,
    fontWeight: "600",
    opacity: 0.3,
    textAlign: "center",
    marginVertical: 35,
  },
  signup: {
    flexDirection: "row",
    alignSelf: "center",
  },
  contact: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 10,
  },
});

export default Login;
