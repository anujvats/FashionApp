import React, { useState } from 'react';
import {StyleSheet, View} from "react-native"

import { Feather as Icon }  from "@expo/vector-icons";
import { TextInput } from 'react-native-gesture-handler';


const textInputState = {
    VALID: "valid",
    INVALID: "inValid",
    INITIAL: "initial"
}


export const TextField = React.forwardRef((props, ref) => {

    const [state, setState] = useState(textInputState.INITIAL)

    const validator = (emailText) => {

        if (emailText.length > 0) {
            const result =  props.validator(emailText)
            if(result === true) {
                setState(textInputState.VALID)
            }else {
                setState(textInputState.INVALID)
            } 
        } else {
            setState(textInputState.INITIAL)
        }
    }

    const borderColor = (state === textInputState.INVALID) ? "#FF0058" : ((state === textInputState.VALID ) ? "#2CB9B0" : "#8A8D90")

    return(
        <View style={[styles.container, {borderColor}]}>
             <View style={styles.iconContainer}>
                 <Icon name = {props.iconName} size = {16} color = {borderColor}/>
             </View>
                <View style= {{flex: 1}}>
                    <TextInput 
                    ref = {ref}
                    blurOnSubmit = {false}
                    placeholder = {props.placeholder} 
                    onChangeText = {validator} 
                    secureTextEntry= {props.secureTextEntry} 
                    autoCapitalize="none"
                    returnKeyLabel= {props.returnKeyLabel}
                    returnKeyType= {props.returnKeyType}
                    onSubmitEditing={props.onSubmitEditing}/>
                </View>
                {
                    (state === textInputState.VALID || state === textInputState.INVALID) && (
                        <View style={[styles.secondContainer, {backgroundColor: borderColor}]}>
                            <Icon color = "white" size ={16} name={(state === textInputState.VALID) ? "check": "x"} />
                         </View>
                    )
                } 
        </View>
    )
})


const styles = StyleSheet.create({
    
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
    },
    
    iconContainer: {
        padding: 8, 
        alignItems: "center", 
        justifyContent:"center"
    },
    
    secondContainer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }

})