import React from "react";
import { View, SafeAreaView, ScrollView, Text, FlatList } from "react-native";
import { Header, Notificationtbn } from "../../../components";
import { noti1, noti2 } from "../../../constant/objects";

const Notification = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{ width: "90%", alignSelf: "center", marginTop: 60 }}>
            <View>
              <Text
                style={{ fontSize: 26, fontWeight: "bold", marginBottom: 15 }}
              >
                New Deal
              </Text>
              <FlatList
                data={noti1}
                renderItem={(item) => {
                  return (
                    <Notificationtbn
                      title={item.item.title}
                      stat={item.item.stat}
                    />
                  );
                }}
              />
            </View>

            <View>
              <Text
                style={{ fontSize: 26, fontWeight: "bold", marginBottom: 15, marginTop: 30 }}
              >
                Order Status Update
              </Text>
              <FlatList
                data={noti2}
                renderItem={(item) => {
                  return (
                    <Notificationtbn
                      title={item.item.title}
                      stat={item.item.stat}
                    />
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
