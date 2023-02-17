import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import { Button } from "../../components";
import Lottie from "lottie-react-native";

const Modall = ({ visible, backbtn, svisible, show, text,presss }) => {
  return (
    <Modal
      onBackButtonPress={backbtn}
      style={{ alignItems: "center" }}
      isVisible={visible}
    >
      <View style={styles.modalview}>
        <View style={styles.topview}> 
        {show ?
        <>
          <MaterialIcons name="error-outline" size={70} />
          <Text style={{ fontSize: 18, fontWeight: "bold",marginBottom: 10 }}>Notice</Text>
        </> 
          :
          <Lottie
            style={{height: 140,width: 140,marginBottom: -20}}
            autoPlay
              source={require("../../assests/lottie/lf30_editor_mlmghdi1.json")}
              
            />
        }
        </View>

        <Text style={{ fontSize: 18, textAlign: "center" }}>
         {text}
        </Text>
        <View style={styles.modalbtn}>
          {show ? 
          <View style={{flexDirection: "row",marginTop: 15}}>
          <Button
            press={svisible}
            title={"No"}
            color={"black"}
            back={"white"}
            border={2}
            width={110}
            height={45}
            marginright={10}
            />
          <Button
          press={presss}
          title={"Yes"}
          color={"white"}
          back={"#a41716"}
          width={110}
          height={45}
          />
          </View>
          : 
          <Button
          title={"Close"}
          color={"white"}
          back={"#a41716"}
          width={110}
          height={45}
          press={backbtn}
          />
}
        </View>
      </View>




    </Modal>
  );
};

const styles = StyleSheet.create({
  modalview: {
    backgroundColor: "white",
    width: 250,
    height: 250,
    borderRadius: 30,
  },
  topview: {
    alignItems: "center",
  },
  modalbtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
});

export { Modall };
