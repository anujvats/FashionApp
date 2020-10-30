import React, { Component, useRef } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";

import Animated, { multiply, divide, interpolate, Extrapolate } from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import { FooterInfo } from "../../components/Footerinfo";
import { slidesData } from "../../../mock/Mockdata";

import { Slider, SLIDER_HEIGHT } from "../../components/Slide";
import {Dot} from "../../components/Dot";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

export const OnboardingScreen = ({navigation}) => {
  const x = useValue(0);
  const scrollRef = useRef(null);
  const backgroundColor = interpolateColor(x, {
    inputRange: slidesData.map((_, i) => i * width),
    outputRange: slidesData.map((slide) => slide.backgroundColor),
  });

  const onnScroll = onScrollEvent({ x });

  return (
    <View style={onboardStyle.container}>
      <Animated.View style={[onboardStyle.slider, { backgroundColor }]}>
      {slidesData.map(({picture}, index) => {
         const opacity = interpolate(x , {
           inputRange: [(index - 0.5) * width , index * width, (index + 0.5) * width],
           outputRange: [0, 1, 0],
           extrapolate: Extrapolate.CLAMP
         })  

        return(
        <Animated.View key = {index} style= {[onboardStyle.underlay, {opacity:opacity}]}>
          <Image source={picture.src} style = {{
            width: (width - BORDER_RADIUS), 
            height: (width - BORDER_RADIUS) * (picture.height/picture.width),
             }}/>
        </Animated.View>)

      })}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          onScroll={onnScroll}
        >
          {slidesData.map((slide) => (
            <Slider
              key={slide.id}
              label={slide.catchyText}
              right={!(slide.id % 2)}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={[onboardStyle.boxfooter, {backgroundColor}]}>
        <View
          style={onboardStyle.footerContainer}
        >
         <View style={onboardStyle.pagination}>
         {slidesData.map((slide, index) => (
            <Dot
              key={slide.id}
              index = {index}
              currentIndex = {divide(x, width)}
            />
          ))}
         </View> 
          <Animated.View  style={[
            onboardStyle.footer,
            {
              width: width * slidesData.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}>
          {slidesData.map((slide, index) => (
            <FooterInfo
              key={slide.id}
              title={slide.title}
              description={slide.description}
              last={index === slidesData.length - 1}
              onPress={() => {
                if(index === slidesData.length - 1) {
                  navigation.navigate("WelcomeScreen")
                }else {
                  if (scrollRef.current) {
                    scrollRef.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1) });
                  }
                }
              }}
            />
          ))}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const onboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  boxfooter: {
    flex: 1,
  },

  footer: {
    flexDirection: "row",
  },
   
  footerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    width,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center" 
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
