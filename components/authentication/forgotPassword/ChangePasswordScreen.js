import React from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons'

import { Container } from "../../Container"

export const PasswordChangeScreen = ({navigation}) => {

    const emailValidator = (inputText) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(inputText)
    }

    const emailSubmit = () => {
       console.log('handle submite')
    }

    const navigateToSignUp = () => {
        navigation.navigate("LoginScreen")
    }

    const popToBack= () => {
        navigation.pop()
    }

    const circleView = 
    (
        <View style={{height: 80, width: 80, backgroundColor: "rgba(44,185,176,0.1)" , borderRadius: 40, justifyContent: "center", alignItems:"center"}}>
            <Icon name= 'check' size={32} color='#2CB9B0'/>
        </View>
    )

    const closeButton = 
    (
        <View style={{justifyContent: "center", margin: 16, alignItems:"center"}}>
            <TouchableOpacity style={{height: 60, width: 60, backgroundColor: "white", borderRadius:30, justifyContent: "center", alignItems:"center"}}
             onPress = {popToBack}>
                <Icon name= 'x' size={32} color='black'/>
             </TouchableOpacity>
        </View>
    )

    return(
        <Container footer={closeButton} patternIndex={3}> 
            <View style={{padding: 40,justifyContent:"center", alignItems: "center", flex:1}}>
                    { circleView }
            <View style= {styles.textContainer}>
                 <Text style={styles.titleStyle}>Your password was successfully changed</Text>
                 <Text style= {styles.subtitleStyle} > Close this window and login again </Text>
                <TouchableOpacity style= {styles.buttonStyle} onPress= {navigateToSignUp}>
                    <Text style= {styles.buttonText}>Login Again</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        paddingBottom: 10,
        overflow: "hidden"
    },
    titleStyle: {
        fontSize: 28,
        color : "#0C0D34",
        margin: 24,
        lineHeight: 33,
        textAlign: "center",
        fontFamily: "SFProdisplay-Bold"
    },
    subtitleStyle: {
        fontSize: 16,
        color : "#0C0D34",
        lineHeight: 24,
        marginBottom: 24,
        opacity: 0.5,
        textAlign: "center",
        alignItems: "center",
        fontFamily: "SFProdisplay-Regular"
    },
    textStyle: {
        color: "#2CB9B0",
        fontFamily: "SFProdisplay-Regular",
        textAlign: "center",
        lineHeight: 18,
        fontSize: 15,
    },
    buttonStyle: {
        height: 50,
        backgroundColor: "#2CB9B0",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    buttonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 18,
        fontFamily: "SFProdisplay-Regular",
    }
})