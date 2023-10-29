import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";
import axios from "axios";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );

      if (response && response.data) {
        setCategories(response?.data?.categories);
      }
    } catch (error) {}
  };
  return (
    <View>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{ paddingTop: 14 }}
      >
        {/* avatar and bell icon  */}

        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greeting  */}

        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: hp(1.7), color: "gray" }}>Hello, Anika</Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8), fontWeight: "bold", color: "gray" }}
            >
              Make your own food
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8), fontWeight: "bold", color: "gray" }}
          >
            stay at <Text style={{ color: "#fcba03" }}>home</Text>
          </Text>
        </View>

        {/* search bar  */}

        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: hp(5),
            backgroundColor: "#d4cfcf",
            padding: 5,
            marginVertical: 10,
          }}
        >
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"#676464"}
            style={{
              fontSize: hp(1.7),
              flex: 1,
              marginBottom: 5,
              paddingLeft: 5,
            }}
          />
          <View
            style={{ backgroundColor: "#fff", borderRadius: hp(5), padding: 5 }}
          >
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </View>
        </View>

        {/* categories  */}
        <View>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
