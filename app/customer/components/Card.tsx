import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { GlassView } from "expo-glass-effect";
import { LinearGradient } from "expo-linear-gradient";
import { Star, Plus } from "lucide-react-native";

export default function FoodCard() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
     

      {/* Glass Card */}
      <View style={styles.card}>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.02)",
            "rgba(255,255,255,0.08)",
            
            
          ]}
          style={StyleSheet.absoluteFillObject}
        />

        {/* Food Image */}
        <Image
          source={require("@/assets/images/burger.png")}
          style={styles.foodImage}
          contentFit="contain"
        />

        {/* Rating */}
        <View style={styles.rating}>
          <Star
            size={12}
            color="#FACC15"
            fill="#FACC15"
          />

          <Text style={styles.ratingText}>
            4.8
          </Text>
        </View>

        {/* Category */}
        <View style={styles.category}>
          <Text style={styles.categoryText}>
            Burger
          </Text>
        </View>

        {/* Bottom */}
        <View style={styles.bottom}>
          <View>
            <Text style={styles.title}>
              Cheese Burger
            </Text>

            <Text style={styles.subtitle}>
              Double Patty • Cheese
            </Text>

            <Text style={styles.price}>
              $14.99
            </Text>
          </View>

          <Pressable style={styles.button}>
            <Plus
              size={22}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.15,
  },

  card: {
    width: 160,
    height: 310,

    borderRadius: 28,

    overflow: "hidden",

    borderWidth: 1,

    borderColor: "rgba(255,255,255,0.08)",
  },

  foodImage: {
    width: 150,
    height: 150,

    alignSelf: "center",

    marginTop: 15,
  },

  rating: {
    position: "absolute",

    top: 16,

    right: 16,

    flexDirection: "row",

    alignItems: "center",

    gap: 4,

    paddingHorizontal: 10,

    paddingVertical: 6,

    borderRadius: 999,

    backgroundColor: "rgba(0,0,0,0.35)",
  },

  ratingText: {
    color: "white",

    fontSize: 12,

    fontWeight: "600",
  },

  category: {
    position: "absolute",

    left: 16,

    top: 16,

    backgroundColor: "rgba(255,138,43,0.18)",

    paddingHorizontal: 10,

    paddingVertical: 6,

    borderRadius: 999,
  },

  categoryText: {
    color: "#FF8A2B",

    fontWeight: "600",

    fontSize: 11,
  },

  bottom: {
    flex: 1,


    padding: 18,

    flexDirection: "row",

    alignItems: "flex-end",

    justifyContent: "space-between",
  },

  title: {
    color: "white",

    fontSize: 18,

    fontWeight: "700",
  },

  subtitle: {
    color: "#B8BDC7",

    fontSize: 13,

    marginTop: 4,
  },

  price: {
    color: "#FF8A2B",

    fontSize: 24,

    fontWeight: "800",

    marginTop: 10,
  },

  button: {
    width: 48,

    height: 48,

    borderRadius: 16,

    backgroundColor: "#FF8A2B",

    justifyContent: "center",

    alignItems: "center",
  },
});