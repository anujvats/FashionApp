import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import {RoundButton} from "../../components/Button";


const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const picture = {
    src : require("../../../assets/5.png"),
    height: 5074,
    width: 3383,
}

export const WelcomeScreen = ({navigation}) => {

    const navigateToSignUp = () => {
        navigation.navigate("SignUpScreen")
    }

    const navigateToLogin = () => {
        navigation.navigate("LoginScreen")
    }

    const naviagteToForgotPassword = () => {
        navigation.navigate("ForgotPasswordScreen")
    }

   return(<View style= {style.container}>
       <View style = {style.firstBox}> 
       <Image source= {picture.src} style = {style.image}/>
       </View>
       <View style= {style.whiteBoxContainer}> 
            <View style= {style.whiteBox}>
                <Text style= {style.titleText}>Let’s get started</Text>
                <Text style = {style.subtitleText}>
                        Login to your account below or signup or an amazing experience
                </Text>
                <RoundButton label= "Have an account? Login" 
                                variant= "primary" 
                                onPress = {navigateToLogin}/>
                <RoundButton label= "Join us, it’s Free" 
                             variant= "secondary"
                             onPress = {navigateToSignUp}/>
                <RoundButton label= "Forgot password?" 
                             variant= "transparent"
                             onPress = {naviagteToForgotPassword}/> 
        </View>
       </View>
   </View>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    firstBox: {
        flex : 1,
        backgroundColor: "rgba(12,13,52,0.05)",
        borderBottomRightRadius: 75,
        alignItems: "center",
        justifyContent: "space-around"
    },
    whiteBoxContainer: {
        flex: 1,
        backgroundColor: "rgba(12,13,52,0.05)"
    },

    whiteBox: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTopLeftRadius: BORDER_RADIUS,
    },
    image : {
        width: (width - BORDER_RADIUS), 
        height: (width - BORDER_RADIUS) * (picture.height/picture.width),
    },
    titleText: {
        fontSize: 24,
        color: "#0C0D34",
        lineHeight: 40,
    },
    subtitleText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#0C0D34",
    }
})