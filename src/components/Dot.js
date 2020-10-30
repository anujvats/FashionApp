import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

export const Dot = ({index, currentIndex}) => {

    const opacity = interpolate(currentIndex,{
        inputRange: [index - 1 , index , index + 1],
        outputRange: [0.5,1,0.5],
        extrapolate: Extrapolate.CLAMP
    })

    const scale = interpolate(currentIndex,{
        inputRange: [index - 1 , index , index + 1],
        outputRange: [1,1.5,1],
        extrapolate: Extrapolate.CLAMP
    })


    return(
        <Animated.View style= {[styles.dotContainer, {opacity,transform: [{scale}]}]} />
    )
}

const styles = StyleSheet.create({
    dotContainer: {
        height: 8,
        width: 8,
        margin: 4,
        backgroundColor: "#2CB9B0",
        borderRadius: 4,
    }
})