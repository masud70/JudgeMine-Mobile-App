import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProblemsScreen from './screens/ProblemsScreen';
import ContestsScreen from './screens/ContestsScreen';
import BlogsScreen from './screens/BlogsScreen.js';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
import LogoutScreen from './screens/LogoutScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home"
      edgeWidth={500}
      drawerStyle={{
        BackgroundColor: '#e6e6e6',
        width: 250,
      }}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#792ba6',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontSize: 25
        }
      }}
      >
        <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: "JudgeMine",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="home"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="Problems" component={ProblemsScreen} 
          options={{
          title: "Problems",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="brain"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="Contests" component={ContestsScreen} 
          options={{
          title: "Contests",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="crown"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="LeaderBoard" component={LeaderBoardScreen} 
          options={{
          title: "LeaderBoard",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="chart-line"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="Blogs" component={BlogsScreen} 
          options={{
          title: "Blogs",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="book-open"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="Login" component={LoginScreen} 
          options={{
          title: "Login",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="sign-in-alt"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="SignUp" component={SignUpScreen} 
          options={{
          title: "SignUp",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="user-plus"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} 
          options={{
          title: "Profile",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="user-alt"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
        <Drawer.Screen name="LogOut" component={LogoutScreen} 
          options={{
          title: "LogOut",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="sign-out-alt"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default App;
