import React from 'react'
import { View, SafeAreaView, ScrollView, Text, FlatList } from 'react-native'
import { Header } from '../../../components'
import { term } from '../../../constant/objects'
const Terms = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
    <ScrollView>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Header press3={() => navigation.goBack()} header2={true} />

        <View style={{width: "90%", backgroundColor: "white", borderRadius: 20, elevation: 10, marginTop: 60,alignSelf: "center", marginBottom: 80,paddingBottom: 20}}>
            <Text style={{fontSize: 18, fontWeight: "bold",textAlign: "center",marginTop: 20}}>Terms of Services</Text>
            <View style={{width: "90%",alignSelf: "center",marginTop: 10}}>
                <FlatList 
                data={term}
            renderItem={(item) => {
                return (
                    <>
                    <Text style={{fontSize: 16, fontWeight: "bold",marginTop: 20}}>{item.item.heading}</Text>
            <Text style={{fontSize: 12}}>{item.item.content}</Text>
                    </>
              
                )
            }}
              />
            
            </View>
        </View>
       
        </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default Terms
