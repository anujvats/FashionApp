import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { RoundButton } from "./Button";

export const FooterInfo = ({ title, description, last, onPress }) => {
  return (
    <View style={style.container}>
      <Text style={style.textTitle}>{title}</Text>
      <Text style={style.textDescription}>{description}</Text>
      <RoundButton
        onPress={onPress}
        variant={last ? "primary" : "default"}
        label={last ? "Let's Get Started" : "Next"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "SFProdisplay-SemiBold",
    color: "#0C0D34",
    marginBottom: 12,
    lineHeight: 40,
  },
  textDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "SFProdisplay-Regular",
    color: "#0C0D34",
    marginBottom: 40,
  },
});
