import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { auth, db } from "../firebase/firebase";
//import { Entypo } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width, height } = Dimensions.get("window");
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Signup({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, "users", user.uid), {
          Name: username,
          Email: email,
          PhoneNumber: phone,
          CreatedAt: new Date().toUTCString(),
        });
      })
      .then(() => alert("account created successfully 🎉"))
      .catch((err: any) => {
        alert(err.message);
      });
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderText}>Sign up now</Text>
        </View>
          {/* Username */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Username</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your name"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          {/* Email */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Email</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {/* Phone Number */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Phone Number</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your phone number"
              value={phone?.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          {/* Password */}
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* Forgot Password */}

          {/* Login Button */}
          <View style={styles.loginButton}>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.loginButtonText}>
                {loading ? "Creating account..." : "Create Account"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupGroup}>
            <Text style={styles.new}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.signup}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201D28",
    minHeight: Math.round(Dimensions.get('window').height),
  },
  loginHeader: {
    marginHorizontal: 40,
    marginTop:100,
    textAlign: "center",
    justifyContent: "center",
  },
  loginHeaderText: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    justifyContent: "center",
  },
  loginContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  emailContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  emailInput: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingLeft: 10,
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  passwordInput: {
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingLeft: 10,
  },
  forgotContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  loginButton: {
    marginTop: 40,
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
    color: Colors.primary,
  },
});
