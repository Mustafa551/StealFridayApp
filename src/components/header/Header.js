import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ header1,press,press2,header2,press3,height,width }) => {
  return (
    <>
      {header1 && (
        <View style={styles.top}>
          <View style={{width: "100%",alignSelf:"center",flexDirection: "row",justifyContent: "space-between",}}>
            <View style={{alignSelf: "flex-start",width: "10%"}}>
              <TouchableOpacity onPress={press}>

              <Image
              
              source={require("../../assests/images/menu.png")}
              style={{ width: 45, height: 45 }}
              />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center",width: "80%" }}>
              <Image
                source={require("../../assests/images/logo2.png")}
                style={{ width: 120, height: 30 }}
              />
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>By</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",alignSelf:"flex-end",width: "10%",justifyContent: "flex-end" }}>
              <Image
                source={require("../../assests/images/notif.png")}
                style={{ width: 16, height: 24, marginRight: 10 }}
              />
              <TouchableOpacity onPress={press2}>

              <Image
                source={require("../../assests/images/profile.png")}
                style={{ width: 45, height: 45 }}
                />
                </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {header2 && (
        <View style={{flexDirection: "row",
        marginTop: 50,
        width: "100%",
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
        
        
        }}>
          <View style={{height: 42,width: 42,borderRadius: 21,backgroundColor: "#00000029",opacity: .6,justifyContent: "center",alignItems: "center", position: "absolute",left: 0 }}>
          <TouchableOpacity onPress={press3}>
            <Image source={require('../../assests/images/leftarrow.png')} style={{height: 24,width: 24,}} />
            </TouchableOpacity>

          </View>
          {/* <View  style={{width: "88%",alignItems:"center",alignSelf:"center"}}> */}
            

            <Image  source={require('../../assests/images/logo2.png')} style={{width: width ? width : 140,height: height ? height : 35}} />
          {/* </View> */}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    marginTop: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export { Header };
