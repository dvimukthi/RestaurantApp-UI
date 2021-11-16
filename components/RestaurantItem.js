import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://www.esquiresg.com/wp-content/uploads/2018/05/best-restaurants-world-main-esquire-singapore-1280x720.jpg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = () => (
  <View>
    <Text>Farmhouse Kitchen Thai Cuisine</Text>
    <Text>30-40 * min</Text>
    <Text>4.5</Text>
  </View>
);
