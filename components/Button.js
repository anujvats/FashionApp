import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

export const RoundButton = ({ variant, label, onPress }) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : variant === "transparent" ? "transparent" : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.buttonContainer, { backgroundColor }]}
    >
      <Text style={[style.buttonLabel, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 16,
    fontFamily: "SFProdisplay-Medium",
  },
});
