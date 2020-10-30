import React, { useRef } from 'react';
import {View, Text, StyleSheet} from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from "../../Container"
import {SocialFooter} from "../SocialFooter"

import { TextField } from "../../TextField"
import {CheckBox} from "../../CheckBox"

const emailValidator = (inputText) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(inputText)
}

const passwordValidator = (inputText) => {
    return inputText.length >= 6
}


export const SignUpScreen = ({navigation}) => {

    const passwordRef = useRef(null)
    const passwordConfirmRef = useRef(null)

    const emailSubmit = () => {
        passwordRef.current.focus()
    }

    const passwordSubmit = () => {
        passwordConfirmRef.current.focus()
    }

    const passwordConfirmSubmit = () => {
        console.log("Hello")
    }

    const navigateToLogin = () => {
        navigation.goBack()
    }

    const footer = (
        <SocialFooter navigate={navigateToLogin} 
        buttonTitle1= "Already have an account?"
        buttonTitle2= "Login here"/>
    )

    return(
        <Container footer= {footer} patternIndex={1}> 
            <View style= {styles.textContainer}>
                 <Text style={styles.titleStyle}>Create account</Text>
                 <Text style= {styles.subtitleStyle} > 
                 Let’s us know what your name, email, and your password </Text>
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
                               returnKeyType="next"
                               onSubmitEditing= {() => { passwordConfirmRef.current.focus() }}
                               ref= {passwordRef}/>
                 </View>   
                 <View style= {{marginBottom: 16}}>
                    <TextField placeholder= "Confirm password" 
                               validator= {passwordValidator} 
                               iconName = "lock" 
                               secureTextEntry= {true}
                               returnKeyLabel="go"
                               returnKeyType="go"
                               onSubmitEditing= {() => {}}
                               ref= {passwordConfirmRef}/>  
                </View>            
                <TouchableOpacity style= {styles.buttonStyle}>
                    <Text style= {styles.buttonText}>Create your account</Text>
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