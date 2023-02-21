import React from "react";
import { View, SafeAreaView, ScrollView, Text, FlatList } from "react-native";
import { Header, Notificationmsg } from "../../../components";
import { newnoti, oldnoti } from "../../../constant/objects";
const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8", }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header press3={() => navigation.goBack()} header2={true} />
          <View style={{alignItems: "center",marginTop: 35}}>
            <Text style={{fontSize: 22, fontWeight: "500"}}>Notifications</Text>
          </View>

            <View style={{flexDirection: "row",alignItems: "center",marginTop: 20,marginBottom:-15}}>
                <Text style={{fontSize: 16, fontWeight: "500"}}>New Notification</Text>
                <View style={{borderBottomWidth: 1,width: "100%",marginLeft: 5}}></View>
            </View>

            <View style={{marginTop: 10 ,}}>
                <FlatList 
                style={{borderRadius: 20,}}
                data={newnoti}
                renderItem={({item}) => <Notificationmsg title={item.title} time={item.time} image={item.image} />}
                />
                
            </View>

            <View style={{flexDirection: "row",alignItems: "center",marginTop: 20,marginBottom:-15}}>
                <Text style={{fontSize: 16, fontWeight: "500"}}>Old Notification</Text>
                <View style={{borderBottomWidth: 1,width: "100%",marginLeft: 5}}></View>
            </View>

            <View style={{marginTop: 10 ,}}>
                <FlatList 
                style={{borderRadius: 20,}}
                data={oldnoti}
                renderItem={({item}) => <Notificationmsg title={item.title} time={item.time} image={item.image} />}
                />
                
            </View>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
