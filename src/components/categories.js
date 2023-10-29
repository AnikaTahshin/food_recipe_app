import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((cat, index) => {
          let isActive = cat?.name == activeCategory;

          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(cat?.name)}
              key={index}
              style={{ flex: 1, alignItems: "center", paddingRight: 10 }}
            >
              <View
                style={{
                  borderRadius: hp(10),
                  padding: 10,
                  backgroundColor: isActive ? "#fcba03" : "#B0B0B0",
                }}
              >
                <Image
                  source={{ uri: cat?.strCategoryThumb }}
                  style={{ height: hp(6), width: hp(6) }}
                />
              </View>
              <Text style={{ color: "gray", fontSize: hp(1.6) }}>
                {cat?.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
