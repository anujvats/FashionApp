import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {Asset} from "expo-asset"
import * as Font from "expo-font"

import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { imageAssets, fonts } from "./mock/Mockdata"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"

import { OnboardingScreen } from "./src/authentication/onbording/Onboarding";
import { WelcomeScreen } from "./src/authentication/onbording/Welcome"
import { LoginScreen } from "./src/authentication/login/LoginScreen"
import { SignUpScreen } from "./src/authentication/signup/SignUpScreen"
import { ForgotPasswordScreen } from "./src/authentication/forgotPassword/ForgotPasswordScreen"
import { PasswordChangeScreen } from './src/authentication/forgotPassword/ChangePasswordScreen';
import { HomeScreen } from "./src/home/HomeScreen"



const HomeNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    </Drawer.Navigator>
  )
}

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen
        name="OnBoardingScreen"
        component={OnboardingScreen}
      />
      <AuthenticationStack.Screen 
      name = "WelcomeScreen" 
      component = {WelcomeScreen} />
      
      <AuthenticationStack.Screen 
      name = "LoginScreen" 
      component = {LoginScreen} />

      <AuthenticationStack.Screen 
      name = "SignUpScreen" 
      component = {SignUpScreen} />

      <AuthenticationStack.Screen 
      name = "ForgotPasswordScreen" 
      component = {ForgotPasswordScreen} />

      <AuthenticationStack.Screen 
      name = "PasswordChangeScreen" 
      component = {PasswordChangeScreen} />

    </AuthenticationStack.Navigator>
  );
};


const AppStackNaviator = () => {

  return(
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen
          name="OnBoarding"
          component={AuthenticationNavigator}
        />
        <AppStack.Screen
          name="HomeScreen"
          component={HomeNavigator}
        />
    </AppStack.Navigator>
  )
}

const AuthenticationStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AppStack = createStackNavigator();

const loadAsset = async () => {

  const imageAsset = imageAssets.map((image) => {
       Asset.fromModule(image).downloadAsync()
  })

  const fontAssets = Font.loadAsync(fonts)

  await Promise.all([...imageAsset, fontAssets])
}

export default function App() {

  const [ready, setReady] = useState(false)

  if(!ready) {
    return( <AppLoading 
      startAsync = {loadAsset}
      onFinish = {() => setReady(true)}
      onError={console.warn}
   />)
  }
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNaviator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
