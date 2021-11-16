import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
    </SafeAreaView>
  );
}
