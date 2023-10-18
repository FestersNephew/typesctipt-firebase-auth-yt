import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";


function UserProfile() {
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      // fetch user profile data asynchronously
      const response = await fetch("/api/user/profile");
      const data = await response.json();
      setUserProfile(data);
    }
    fetchData();
  }, []);

  if (!userProfile) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Top />
      <Middle />
      <Bottom />
    </View>
  );
}

export default UserProfile;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 180,
    backgroundColor:"#201D28",
  },
});