import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SLIDER_HEIGHT = 0.6 * height;

export const Slider = ({ label, right }) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.cotainer}>
      <View style={[styles.textContainer, { transform }]}>
        <Text style={styles.textStyle}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    width,
  },
  textContainer: {
    height: 100,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 80,
    fontWeight: "bold",
    fontFamily: "SFProdisplay-Regular",
    color: "white",
    textAlign: "center",
  }
});
