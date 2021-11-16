import React from "react";
import { View, Text, Image } from "react-native";

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
  <Image
    source={{
      uri: "https://www.esquiresg.com/wp-content/uploads/2018/05/best-restaurants-world-main-esquire-singapore-1280x720.jpg",
    }}
    style={{ width: "100%", height: 180 }}
  />
);
