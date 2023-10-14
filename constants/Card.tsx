import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "./Colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

interface CardProps {
  icon: ReactNode;
  cardTextOne: string;
  cardTextTwo: string;
  cardText: string;
  style?: object;
}

const Card: FC<CardProps> = ({ icon, cardTextOne, cardTextTwo, cardText, style }) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.cardText}>{cardText}</Text>

      <Text style={styles.cardTextOne}>{cardTextOne}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.cardTextTwo}>Reviewed</Text>
        <AntDesign name="arrowright" size={24} color={Colors.gray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    width: 150,
    height: 180,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: Colors.white,
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText:{
    color: Colors.gray,
    fontWeight: "400",
    fontSize: 16,
    marginVertical: 15,
  },
  cardTextOne: {
    fontWeight: "bold",
    color: Colors.gray,
    fontSize: 18,
  },
  cardTextTwo: {
    borderBottomColor: Colors.gray,
    color: Colors.gray,
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 1,
    marginBottom: 3,
  },
});

export default Card;