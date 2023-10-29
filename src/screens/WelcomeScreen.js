import { View, Text, StatusBar, Image } from "react-native";
import { useEffect } from "react";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const WelcomeScreen = () => {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;

    setTimeout(
      () => (ring1Padding.value = withSpring(ring1Padding.value + hp(5))),
      100
    );
    setTimeout(
      () => (ring2Padding.value = withSpring(ring2Padding.value + hp(5.5))),
      500
    );

    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: "10",
        backgroundColor: "#fcba03",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      {/* logo image with rings  */}

      <Animated.View
        style={{
          backgroundColor: "#E0E0E0",
          borderRadius: hp(25),
          padding: ring1Padding,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: "#F8F8F8",
            borderRadius: hp(20),
            padding: ring2Padding,
          }}
        >
          <Image
            style={{ height: hp(20), width: hp(20) }}
            source={require("../../assets/images/welcome.png")}
          />
        </Animated.View>
      </Animated.View>

      {/* title  */}

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: hp(7) }}>
          Foody
        </Text>

        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: hp(2) }}>
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
