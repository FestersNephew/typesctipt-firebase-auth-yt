import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserProfile from "../components/UserProfile";

export default function Dashboard({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>();

  const handleSignout = async () => {
    await auth.signOut();
  };
  const Modal = () => {
    Alert.alert("Auth App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  const getData = async () => {
    const docRef = doc(db, "users", "info");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Fam!</Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={Modal}>
            <Text style={{ color: Colors.white, fontSize: 20 }}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 180,
    backgroundColor: "#201D28",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
  welcome: {
    color: "#00A8DE",
    fontSize: 45,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
