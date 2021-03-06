import React, { useRef } from 'react';
import {View, Text, StyleSheet, Alert} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from "../../components/Container"
import { TextField } from "../../components/TextField"
import { SocialFooter } from "../../components/SocialFooter"

export const ForgotPasswordScreen = ({navigation}) => {

    const emailValidator = (inputText) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(inputText)
    }

    const emailSubmit = () => {
       console.log('handle submite')
    }

    const navigateToSignUp = () => {
        navigation.navigate("SignUpScreen")
    }

    const navigateToPasswordChange = () => {
        navigation.navigate('PasswordChangeScreen')
    }

    const footer = (<SocialFooter 
        navigate= {navigateToSignUp} 
        buttonTitle1="Don’t have an account?"
        buttonTitle2="Sign Up here" />)

    return(
        <Container footer={footer} patternIndex={2}> 
            <View style={{justifyContent:"center", padding: 40, flex:1}}>
            <View style= {styles.textContainer}>
                 <Text style={styles.titleStyle}>Forgot password?</Text>
                 <Text style= {styles.subtitleStyle} > 
                 Enter the email address associated with your account </Text>
                  <View style= {{marginBottom: 16}}>
                        <TextField placeholder= "Enter your email" 
                               validator= {emailValidator} 
                               iconName = "mail" 
                               secureTextEntry= {false}
                               returnKeyLabel="go"
                               returnKeyType="go"
                               onSubmitEditing= {() => { }}
                                />
                    </View>
                <TouchableOpacity style= {styles.buttonStyle} onPress={navigateToPasswordChange}>
                    <Text style= {styles.buttonText}>Reset password</Text>
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
        fontFamily: "SFProdisplay-Bold",
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