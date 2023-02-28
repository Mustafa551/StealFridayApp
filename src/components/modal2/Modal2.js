import React, { useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import RadioForm from "react-native-simple-radio-button";
import { Button } from "../../components";

const Modall2 = ({ visible, backbtn }) => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(1);
  const data = [
    {
      label: "New To Old",
      value: 0,
    },

    {
      label: "Old To New",
      value: 1,
    },
  ];

  const data2 = [
    {
      label: "Price Low To High",
      value: 0,
    },

    {
      label: "Price High To Low",
      value: 1,
    },
  ];
  return (
    <Modal
      onBackButtonPress={backbtn}
      style={{ alignItems: "center" }}
      isVisible={visible}
    >
      <View style={styles.modalview}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Filter
        </Text>
        <View style={{ alignSelf: "center", width: "50%"}}>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, opacity: 0.3, textAlign: "center" }}>
              Conditions
            </Text>
            <View>
              <RadioForm
                radio_props={data}
                initial={value}
                buttonColor="black"
                onPress={(value) => setValue(value)}
                style={styles.radio}
                selectedButtonColor="red"
              />
            </View>
          </View>
          <View
            style={{
              width: 191,
              borderBottomWidth: 1,
              borderColor: "#707070",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 20,
            }}
          ></View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 18, opacity: 0.3, textAlign: "center" }}>
              Prices
            </Text>
            <View>
              <RadioForm
                radio_props={data2}
                initial={value2}
                buttonColor="black"
                onPress={(value) => setValue2(value)}
                style={[styles.radio, { marginTop: 10 }]}
                selectedButtonColor="red"
              />
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Button
              title={"Clear"}
              color={"white"}
              back={"#a41716"}
              width={110}
              height={45}
              press={backbtn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalview: {
    backgroundColor: "white",
    width: 292,
    height: 403,
    borderRadius: 30,
  },
  radio: {
    marginTop: 20,
  },
});

export { Modall2 };
