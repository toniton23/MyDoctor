import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Splash,
  GetStarted,
  Login,
  Register,
  UploadPhoto,
  Massages,
  Hospital,
  Doctor,
  MainApp,
  DoctorPage,
  DokterUmum,
  DokterGigi,
  DokterMata,
  DokterIbu,
  DokterKandungan,
  Chating,
} from "../pages";
import { BottomNavigator } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

{
  /*const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Massages" component={Massages} />
      <Tab.Screen name="Hospital" component={Hospital} />
    </Tab.Navigator>
  );
};*/
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Doctor"
        component={DoctorPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Massages"
        component={Massages}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DokterUmum"
        component={DokterUmum}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DokterGigi"
        component={DokterGigi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DokterMata"
        component={DokterMata}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DokterIbu"
        component={DokterIbu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DokterKandungan"
        component={DokterKandungan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chating"
        component={Chating}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
