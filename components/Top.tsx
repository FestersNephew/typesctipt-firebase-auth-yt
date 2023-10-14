import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

interface TopProps {}

const Top: FC<TopProps> = () => {
  return (
    <View style={styles.icons}>
      <TouchableOpacity style={styles.back}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icons}>
        <AntDesign name="setting" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back:{
    backgroundColor: Colors.secondary,
    width: 45,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Top;