import * as React from "react";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { DoctorPage, Hospital } from ".";
import Massages from "./Massages";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Doctor"
    activeColor="red"
    style={{ backgroundColor: "yellow" }}
  >
    <Tab.Screen
      name="Doctor"
      component={DoctorPage}
      options={{
        tabBarLabel: "Doctor",
        tabBarColor: "green",
        tabBarIcon: ({ color }) => (
          <Fontisto name="doctor" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Massage"
      component={Massages}
      options={{
        tabBarLabel: "Massages",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="chat-bubble" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Hospital"
      component={Hospital}
      options={{
        tabBarLabel: "Hospital",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="local-hospital" size={26} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
