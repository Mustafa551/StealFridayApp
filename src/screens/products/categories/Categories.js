import React from 'react'
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Header,Product } from '../../../components'
import { accessories, clothing, shoes } from '../../../constant/objects';
const Categories = ({navigation, route}) => {
  const { name } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <ScrollView>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Header
            
            press3={() => navigation.goBack()}
            header2={true}
          />

          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>
              {name}
            </Text>
          </View>
        </View>
        <View style={{ width: "95%", alignSelf: "center" }}>
          <Product
          press={navigation}
            hori={false}
            num={2}
            product={name == "Clothing" ? clothing : name == "Shoes" ? shoes : name == "Accessories" ? accessories : null}
            marginbottom={15}
            marginTop={40}
          />
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 15,
                marginTop: 10,
                fontSize: 16,
                fontWeight: "bold",
                color: "#1564EB",
              }}
            >
              View More..
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
  )
}

export default Categories
