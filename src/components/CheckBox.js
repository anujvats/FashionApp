import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {Feather as Icon} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CheckBox = () => {

    const [buttonState, setButtonState] = useState(false)

    const onPress = () => {
        setButtonState((value) => !value)
    }

    return(
        <TouchableOpacity style= {styles.container} onPress= {onPress} >
            <View style= {[styles.squareView, {backgroundColor: buttonState === true ? "#2CB9B0" : "white" }]}>
                <Icon name= 'check' size= {16} color= "white" />
            </View>
            <Text style={styles.textStyle}>Remember Me</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    squareView: {
        height: 20,
        width: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#8A8D90",
        marginRight: 8,
        borderWidth: StyleSheet.hairlineWidth,
    },
    textStyle: {
        color: "#0C0D34",
        fontFamily: "SFProdisplay-Regular",
        lineHeight: 18,
        fontSize: 15,
    }

})