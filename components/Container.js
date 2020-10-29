import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View , Image, Dimensions, StyleSheet, Text} from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {width, height: wHeight } = Dimensions.get("window")

const imaageAspectRatio = 750/1125

const height = width * imaageAspectRatio

const bgpatternHeight = height * 0.61

export const Container = ({footer, children}) => {
    const insets = useSafeAreaInsets()
    return(
        <KeyboardAwareScrollView scrollEnabled= {false}>
        <View style = {styles.container}>
            <StatusBar  style = "light" />
            <View style= {{backgroundColor:"white"}}>
                <View style= {styles.imageContainer}>
                    <Image source = {require("../assets/pattern1.png")} 
                        style= { styles.imageStyle } />
                </View>
            </View>
            <View style= {styles.reverseImageContainer}>
                <Image  source = {require("../assets/pattern1.png")} 
                        style= { styles.reverseImageStyle} /> 
                <View style= {styles.mainContainer}>
                        {children}
                </View>
            </View>
            <View  style= {[styles.footer, {paddingBottom: insets.bottom + 10}]}>  
                {footer}
            </View>
        </View>
        </KeyboardAwareScrollView>  
    )
}

const styles = StyleSheet.create({
    container: {
        height: wHeight,
        backgroundColor: "#0C0D34",
    },
    imageContainer : {
        height: bgpatternHeight ,
        borderBottomLeftRadius: 75,
        overflow: "hidden",
    },
    imageStyle: { 
        height , 
        width,
        borderBottomLeftRadius: 75,
    },

    reverseImageContainer: {
        flex:1,
        overflow:"hidden",
    },
    reverseImageStyle : {
        position: "absolute",
        height, 
        top: -bgpatternHeight,
        width,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 75,
        borderTopLeftRadius: 0,
    },
    footer: {
        backgroundColor: "#0C0D34",
    }
})
