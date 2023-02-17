// import React from 'react'
// import { FlatList, StyleSheet, Text, View } from 'react-native'

// const Products2 = ({products2}) => {
//   return (

//     <View style={{backgroundColor: "green",height: 100,}}>
//         <FlatList
//         data={products2}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={(product, index) =>{
//             return (
//                 <View style={styles.mainview} key={index}>

//                     <Text>react native</Text>

//                 </View>
//             )
//         }}
//         />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     mainview: {
//         width: 266,
//         height: 283,
//         backgroundColor: "red",
//         elevation: 10
//     },
// })

// export  {Products2}

import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const Products2 = ({ product }) => {
  return (
    <FlatList
      style={{
        borderRadius: 30,
        width: "100%",
        paddingBottom: 10,
        marginBottom: 10,
      }}
      horizontal={true}
      data={product}
      showsHorizontalScrollIndicator={false}
      renderItem={( item ) => {
        return (
          <>
          <View style={styles.mainview}>
            <View style={{marginTop: -10,overflow: "hidden",width: 196,height: 250}}>
              <Image style={{width: "100%",height: "100%",overflow: "visible"}} resizeMode="cover" source={item.item.image}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16,fontWeight: "bold"}}>{item.item.title}</Text>
                <Text style={{fontSize: 14}}>{item.item.total}</Text>
            </View>
          </View>
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainview: {
    width: 266,
    height: 283,
    backgroundColor: "white",
    elevation: 10,
    marginRight: 20,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
    overflow: "visible",
    marginLeft: 10
  },
});

export  {Products2};
