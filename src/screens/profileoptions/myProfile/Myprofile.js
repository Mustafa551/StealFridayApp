import React from "react";
import { View, SafeAreaView, ScrollView, Image } from "react-native";
import { Header, Input3 } from "../../../components";
import { Button } from "../../../components";

const Myprofile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center", paddingBottom: 40 }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../../assests/images/camera.png")}
              style={{
                width: 60,
                height: 60,
                position: "relative",
                top: 55,
                zIndex: 1,
                right: -60,
              }}
            />
            <Image
              source={require("../../../assests/images/profile2.png")}
              style={{ width: 137, height: 137 }}
            />
          </View>

          <View style={{marginTop: 10}}>
            <Input3
              placeholder={"First Name"}
              image={require("../../../assests/images/user.png")}
            />

            <Input3
              placeholder={"Last Name"}
              image={require("../../../assests/images/user.png")}
            />

            <Input3
              type={"email-address"}
              placeholder={"Email Address"}
              image={require("../../../assests/images/emailicon.png")}
            />

            <Input3
              type={"phone-pad"}
              placeholder={"+92 123 4567891"}
              image={require("../../../assests/images/phone.png")}
            />
          </View>
<View style={{marginTop: 40}}>

          <Button
              width={"60%"}
              height={50}
              press={() => {}}
              back={"#a41716"}
              color={"white"}
              size={22}
              title={"Update"}
            />
              </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Myprofile;
