import React from "react"
import { StyleSheet, View, Text } from "react-native"

import {FaceBookSignInIcon} from "./socialIcons/FacebookIcon"
import {GoogleSignInIcon} from "./socialIcons/GoogleIcon"
import {AppleSignInIcon} from "./socialIcons/AppleSignIn"
import { TouchableOpacity } from "react-native-gesture-handler"

export const SocialFooter = (props) => {

const onPress = () => {
    props.navigate()
}

return(
    <>
    <View style= {styles.container}>
        <View style= {styles.iconStyle} >
            <FaceBookSignInIcon />
        </View>
        <View style= {styles.iconStyle} >
            <GoogleSignInIcon />
        </View >
        <View style= {styles.iconStyle} >
            <AppleSignInIcon />
        </View >
    </View>
    <TouchableOpacity style= {styles.buttonStyles} onPress = {onPress}>
        <Text style={{color: "white"}}> {props.buttonTitle1} </Text> 
        <Text style={{color: "#2CB9B0"}}> {props.buttonTitle2} </Text>
    </TouchableOpacity>
    </>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    iconStyle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        margin: 16,
        backgroundColor:"white",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyles: {
        flexDirection:"row", 
        justifyContent:"center",
        alignItems: "center"
    }
})