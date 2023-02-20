import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Button, Header, Input, Modall } from "../../../components";

const Changepassword = ({ navigation }) => {
  const lockimage = require("../../../assests/images/lockicon.png");
  const [visible2, setVisible2] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", paddingBottom: 40 }}>
          <Header press3={() => navigation.goBack()} header2={true} />

          <View style={{ alignItems: "center", marginTop: 40 }}>
            <Text style={{ fontSize: 22, fontWeight: "400" }}>
              Change Password
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <Input
              margin={25}
              image={lockimage}
              placeholder={"Current Password"}
              secureTextEntry={true}
              pass={true}
            />

            <Input
              margin={45}
              image={lockimage}
              placeholder={"New Password"}
              secureTextEntry={true}
              pass={true}
            />

            <Input
              margin={45}
              image={lockimage}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              pass={true}
            />
          </View>
          <View style={{ marginTop: 60 }}>
            <Button
              width={"70%"}
              height={60}
              press={() => setVisible2(true)}
              back={"#a41716"}
              color={"white"}
              size={22}
              title={"Update"}
            />

            <Modall
              visible={visible2}
              text={"Password Updated"}
              backbtn={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Changepassword;
