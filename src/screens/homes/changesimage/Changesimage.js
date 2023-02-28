import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, Animated, Easing } from "react-native";

const Changesimage = () => {
  const [preimage, setPreimage] = useState(0);
  const [newimage, setNewimage] = useState(0);
  const images = [
    {
      image: require("../../../assests/images/image1.png"),
    },
    {
      image: require("../../../assests/images/image2.png"),
    },
    {
      image: require("../../../assests/images/image3.png"),
    },
    {
      image: require("../../../assests/images/image4.png"),
    },
    {
      image: require("../../../assests/images/image5.png"),
    },
    {
      image: require("../../../assests/images/image6.png"),
    },
  ];

  //   useEffect(()={

  //   },[])
  // let rotateValueHolder = new Animated.Value(0)
  const changeimage = () => {
    const num = Math.floor(Math.random() * 5);
    setNewimage(num);
    setPreimage(newimage);
  //   rotateValueHolder.setValue(0)
  //   Animated.timing(rotateValueHolder, {
  //           toValue: 1,
  //           duration: 3000,
  //           easing: Easing.linear,
  //           useNativeDriver: false,
  //         }).start(() => changeimage());
  };

  // const RotateData = rotateValueHolder.interpolate({
  //   inputRange:[0,1],
  //   outputRange:['0deg','360deg']
  // })
  return (
    <View style={{ width: "90%", alignSelf: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 80,
        }}
      >
        {/* transform: [{rotate: RotateData}] */}
        <Animated.Image
          source={images[newimage].image}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Image
          source={images[preimage].image}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 300 }}>
        <TouchableOpacity
          onPress={changeimage}
          style={{
            width: 200,
            height: 80,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 19 }}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Changesimage;

// import { StyleSheet, Text, Image, View, Easing, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';

// const ImgAnimation = ({ Food1, Food2 }) => {
//   let rotateValueHolder = new Animated.Value(0);
//   const startImageRotateFunction = () => {
//     rotateValueHolder.setValue(0);
//     Animated.timing(rotateValueHolder, {
//       toValue: 1,
//       duration: 500,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start(() => startImageRotateFunction());
//   };
//   const RotateData = rotateValueHolder.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });
//   const [currentSlide, setCurrentSlide] = useState(false);
//   const position = new Animated.ValueXY({ x: 0, y: 0 });
//   // const [animation] = useState(new Animated.ValueXY({x: 0, y: 0}));
//   const position1 = new Animated.ValueXY({ x: 0, y: 0 });
//   useEffect(() => {
//     Animated.spring(position, {
//       toValue: 250,
//       duration: 3000,
//       easing: Easing.circle, // Easing is an additional import from react-native
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(animation, {
//       toValue: { x: 200, y: 200 },
//       duration: 3000,
//       easing: Easing.circle, // Easing is an additional import from react-native
//       useNativeDriver: true,
//     }).start();
//     console.log(animation.ValueXY);
//   }, []);
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(animation, {
//       toValue: 0.6,
//       duration: 9000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const rotate = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['90deg', '260deg'],
//   })
//   const scale = animation.interpolate({
//     inputRange: [1, 2],
//     outputRange: [1, 2],
//   });

//   const animatedStyle = {
//     transform: [{ rotate }, { scale }],
//   };
//   return (
//     useEffect(() => {
//       startImageRotateFunction();
//       setTimeout(() => {
//         // navigation.replace('login');
//       }, 1000);
//     }, []),
//     <>
//       <View
//         style={{
//           width: 220,
//           height: 100,
//           position: 'absolute',
//           right: -220,
//           backgroundColor: "red",
//           top: -140,
//         }}>
//         <Animated.View
//           style={{
//             paddingLeft: 30,
//             transform: [{ translateY: position.y }]
//           }}>

//           <Animated.Image
//             source={Food1}
//             resizeMode="contain"
//             style={{
//               width: 224,
//               height: 43,
//               transform: [{ rotate: RotateData }],
//             }}
//           />
//           {currentSlide === true ? (
//             <Image
//               source={Food1}
//               resizeMode="contain"
//               style={[{ width: '100%' }, animatedStyle]}
//             />
//           ) : (
//             <Animated.Image
//               source={Food1}
//               resizeMode="contain"
//               style={[{ width: '100%' }, animatedStyle]}
//             />
//           )}
//         </Animated.View>
//       </View>
//       <View
//         style={{
//           width: 140,
//           height: 140,
//           position: 'absolute',
//           right: -250,
//           top: 200,
//         }}>
//         <Animated.View
//           style={{ paddingLeft: 30, transform: [{ translateY: position1.y }] }}>
//           <Image source={Food2} resizeMode="contain" style={{ width: '100%' }} />
//         </Animated.View>
//       </View>
//     </>
//   );
// };

// export default ImgAnimation;
// const styles = StyleSheet.create({});
