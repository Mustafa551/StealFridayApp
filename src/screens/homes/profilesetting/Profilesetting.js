import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Header, Settingoption } from "../../../components";

const Profilesetting = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#F8F8F8"}}>
      <ScrollView>
        <View style={{width: "90%", alignSelf: "center"}}>
            <Header press3={() => navigation.goBack()} header2={true} />

            <View style={{alignItems: "center",marginTop: 30}}>
                <Text style={{fontSize: 22,fontWeight: "bold"}}>Settings</Text>
            </View>
            <View style={{marginTop: 50,}}>
            <Settingoption title={"My Profile"} />
            <Settingoption title={"Notificatons"} />
            <Settingoption title={"Change Password"} />
            <Settingoption title={"Terms & Conditions"} />
            <Settingoption title={"Privacy Policy"} />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilesetting;
