import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {Asset} from "expo-asset"
import * as Font from "expo-font"

import { AppLoading } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { imageAssets, fonts } from "./mock/Mockdata"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { OnboardingScreen } from "./components/authentication/onbording/Onboarding";
import { WelcomeScreen } from "./components/authentication/onbording/Welcome"
import { LoginScreen } from "./components/authentication/login/LoginScreen"
import { SignUpScreen } from "./components/authentication/signup/SignUpScreen"
import { ForgotPasswordScreen } from "./components/authentication/forgotPassword/ForgotPasswordScreen"
import { PasswordChangeScreen } from './components/authentication/forgotPassword/ChangePasswordScreen';

const AuthenticationStack = createStackNavigator();

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
        <AuthenticationNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
