import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from './Screens/auth/LoginScreen';
import { RegistrationScreen } from './Screens/auth/RegistrationScreen';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreateScreen from './Screens/mainScreen/CreatePostsScreen';
import Home from './Screens/mainScreen/Home';

// icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }
  // return (
  //   <MainTab.Navigator screenOptions={{ showLabel: false }}>
  //     <MainTab.Screen
  //       options={{
  //         tabBarIcon: ({ focused, size, color }) => (
  //           <MaterialCommunityIcons
  //             name="postage-stamp"
  //             size={size}
  //             color={color}
  //           />
  //         ),
  //         headerRight: ({ focused, size, color }) => (
  //           <MaterialIcons name="logout" size={24} color="grey" />
  //         ),
  //         headerRightContainerStyle: {
  //           paddingRight: 20,
  //         },
  //       }}
  //       name="Posts"
  //       component={PostsScreen}
  //     />
  //     <MainTab.Screen
  //       options={{
  //         tabBarIcon: ({ focused, size, color }) => (
  //           <AntDesign name="pluscircleo" size={size} color={color} />
  //         ),
  //       }}
  //       name="Create"
  //       component={CreateScreen}
  //     />
  //     <MainTab.Screen
  //       options={{
  //         tabBarIcon: ({ focused, size, color }) => (
  //           <MaterialCommunityIcons
  //             name="face-man-profile"
  //             size={size}
  //             color={color}
  //           />
  //         ),
  //       }}
  //       name="Profile"
  //       component={ProfileScreen}
  //     />
  //   </MainTab.Navigator>
  // );
};
