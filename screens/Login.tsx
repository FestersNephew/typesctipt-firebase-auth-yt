import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase/firebase";
import { Entypo } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";

const { width, height } = Dimensions.get("window");
let top;
if (Platform.OS === "ios") {
  top = height * 0.02;
} else {
  top = 0;
}

export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignin = async () => {
    setLoading(true);
    await
    signInWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        alert("login successful :)");
      })
      .catch((err: any) => {
        alert(err.message);
      });
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
          <View style={styles.loginHeader}>
            <Text style={styles.loginHeaderText}>Welcome Warrior, </Text>
            <Text style={styles.loginHeaderText2}>Let's get you signed in.</Text>
          </View>

          <View style={styles.loginContainer}>
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
            <View style={styles.forgotContainer}>
              <TouchableOpacity onPress={() => navigation.push("Forgot")}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            {/* Login Button */}
            <View style={styles.loginButton}>
              <TouchableOpacity onPress={handleSignin}>
                <Text style={styles.loginButtonText}>
                  {
                    loading ? "Loading" : "Login"
                  }
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signupGroup}>
              <Text style={styles.new}>New here?</Text>
              <TouchableOpacity onPress={() => navigation.push("Signup")}>
                <Text style={styles.signup}>Sign Up</Text>
              </TouchableOpacity>
            </View>
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginHorizontal: 5,
  },
  loginHeader: {
    marginHorizontal: 40,
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
  loginHeaderText2: {
    fontSize: 25,
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
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  forgotContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
    paddingRight: 30,
  },
  loginButton: {
    marginTop: 20,
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
    color: Colors.text,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  new: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  signup: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
});
