import React, { useRef } from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from "../../Container"
import {SocialFooter} from "../SocialFooter"

import { TextField } from "../../TextField"
import { CheckBox } from "../../CheckBox"

const emailValidator = (inputText) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(inputText)
}

const passwordValidator = (inputText) => {
    return inputText.length >= 6
}


export const LoginScreen = ({navigation}) => {

    const passwordRef = useRef(null)

    const navigateToForgotScreen = () => {
        navigation.navigate('ForgotPasswordScreen')
    }

    const emailSubmit = () => {
        passwordRef.current.focus()
    }

    const hanndlePassword = () => {
        console.log("Hello")
    }

    const navigateToSignUp = () => {
        navigation.navigate("SignUpScreen")
    }

    const footer = (<SocialFooter 
            navigate= {navigateToSignUp} 
            buttonTitle1="Don’t have an account?"
            buttonTitle2="Sign Up here" />)
  

    return(
        <Container footer= {footer} patternIndex={0}> 
            <View style= {styles.textContainer}>
                 <Text style={styles.titleStyle}>Welcome Back</Text>
                 <Text style= {styles.subtitleStyle} > 
                 Use your credentials below and login to your account </Text>
                  <View style= {{marginBottom: 16}}>
                        <TextField placeholder= "Enter your email" 
                               validator= {emailValidator} 
                               iconName = "mail" 
                               secureTextEntry= {false}
                               returnKeyLabel="next"
                               returnKeyType="next"
                               onSubmitEditing= {() => { passwordRef.current.focus() }}
                                />
                    </View>
                    <View style= {{marginBottom: 16}}>
                        <TextField placeholder= "Enter your password" 
                               validator= {passwordValidator} 
                               iconName = "lock" 
                               secureTextEntry= {true}
                               returnKeyLabel="go"
                               returnKeyType="go"
                               onSubmitEditing= {() => {}}
                               ref= {passwordRef}/>
                    </View>
                <View style= {{marginBottom: 40, flexDirection: "row",justifyContent: 'space-between'}}>
                    <CheckBox />
                    <TouchableOpacity onPress= {navigateToForgotScreen}>
                        <Text style={styles.textStyle}> Forgot password </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style= {styles.buttonStyle}>
                    <Text style= {styles.buttonText}>Log into your account</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        padding: 40,
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