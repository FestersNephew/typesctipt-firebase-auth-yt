import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import Card from "../constants/Card";
import { FontAwesome } from "@expo/vector-icons";

const Bottom: FC = () => {
  return (
    <View style={styles.bottomContainer}>
      <Text style={{ fontSize: 20, color: Colors.white, fontWeight: "bold" }}>
        Current Challenges
      </Text>

      <View style={styles.completeContainer}>
        <Card
                  icon={<FontAwesome
                      name="graduation-cap"
                      size={24}
                      color={Colors.primary} />}
                  cardTextOne="02 Steps"
                  cardText="Education"
                  style={{ backgroundColor: Colors.text }} cardTextTwo={""}        />
        <Card
                  icon={<FontAwesome name="briefcase" size={24} color={Colors.secondary} />}
                  cardTextOne="04 Steps"
                  cardText="Professional"
                  style={{ backgroundColor: Colors.secondary }} cardTextTwo={""}        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>Your Completed Challenges</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.bottomSectionText}>All Challenges</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: Sizes.medium,
  },
  completeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Sizes.xs,
  },
  card: {
    backgroundColor: Colors.secondary,
  },
  bottomSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Sizes.medium,
  },
  bottomSectionText: {
    fontWeight: "bold",
    fontSize: Sizes.smedium,
    color: Colors.gray,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: Colors.gray,
  }
});

export default Bottom;