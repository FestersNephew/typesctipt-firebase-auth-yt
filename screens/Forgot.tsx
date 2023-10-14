import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { auth } from "../firebase/firebase";
import { Feather } from "@expo/vector-icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ForgotPassword({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");

  const handlePassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => alert("password reset email sent 🚀"))
      .catch((error: any) => console.log(error.message));
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/forgot.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>

        <ScrollView
          style={styles.formContainer}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={styles.text}>Forgot your password?</Text>
          </View>
          <View style={styles.emailContainer}>
            <Feather
              name="mail"
              size={20}
              color="gray"
              style={{ marginLeft: 15 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter email address here"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handlePassword}
          >
            <View>
              <Text style={styles.send}>Send password reset link</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.goBackButton}>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.send}>Press Here To Go Back To Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.spam}>
            <Text style={{ fontSize: 12, color: Colors.deep, fontWeight: "400" }}>
              Check your email spam folder to find password reset link
            </Text>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201D28",
    minHeight: Math.round(Dimensions.get('window').height),
    paddingTop: 20,
  },
  imageContainer: {
    paddingTop: 55,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  formContainer: {
    width: "100%",
  },
    text: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.text,
  },
  emailContainer: {
    marginTop: 15,
    width: "100%",
    height: 50,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: "5%",
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  send: {
    color: Colors.secondary,
    fontSize: 18,
  },
  goBackButton: {
    marginTop: "5%",
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  spam: {
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  
});
// behavior={Platform.OS === "ios" ? "padding" : "height"}
//       // keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
