import 'react-native-gesture-handler';
import  React, {useState} from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProblemsScreen from './screens/ProblemsScreen';
import ContestsScreen from './screens/ContestsScreen';
import BlogsScreen from './screens/BlogsScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import LeaderBoardScreen from './screens/LeaderBoardScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProblemStack = createStackNavigator();
const ContestStack = createStackNavigator();
const LeaderBoardStack = createStackNavigator();
const BlogStack = createStackNavigator();
const LoginStack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return(
    <NavigationContainer>
      <Drawer.Navigator edgeWidth={500}
      drawerStyle={{
        BackgroundColor: '#e6e6e6',
        width: 250,
      }}
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} 
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

        <Drawer.Screen name="Problems" component={ProblemStackScreen} 
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
        <Drawer.Screen name="Contests" component={ContestStackScreen} 
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
        <Drawer.Screen name="LeaderBoard" component={LeaderBoardStackScreen} 
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
        <Drawer.Screen name="Blogs" component={BlogStackScreen} 
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
        {
          !isLoggedIn ?
          <Drawer.Screen name="Login" component={LoginStackScreen} 
          options={{
          title: "Login",
          drawerIcon: ({focused})=>(
            <FontAwesome5
              name="user"
              size={ focused ? 20 : 17}
              color={focused? '#792ba6' : '#3b3b3b'}
            />
          )
        }}
        />
          : null
        }
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default App;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'JudgeMine',
      }} />
    </HomeStack.Navigator>
  );

  const ProblemStackScreen = ({navigation}) => (
    <ProblemStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
      <ProblemStack.Screen name="Problems" component={ProblemsScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'Problems',
      }} />
    </ProblemStack.Navigator>
  );

  const ContestStackScreen = ({navigation}) => (
    <ContestStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
      <ContestStack.Screen name="Contests" component={ContestsScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'Contests',
      }} />
    </ContestStack.Navigator>
  );

  const LeaderBoardStackScreen = ({navigation}) => (
    <LeaderBoardStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
    <LeaderBoardStack.Screen name="Problem" component={LeaderBoardScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'LeaderBoard',
      }} />
    </LeaderBoardStack.Navigator>
  );

  const BlogStackScreen = ({navigation}) => (
    <BlogStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
    <BlogStack.Screen name="Blogs" component={BlogsScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'Blogs'
      }} />
    </BlogStack.Navigator>
  );

  const LoginStackScreen = ({navigation}) => (
    <LoginStack.Navigator 
      screenOptions={{
        headerShown: true, headerTitleAlign: 'center', headerStyle:{ backgroundColor: '#792ba6' }, headerTintColor:'#fff', headerTitleStyle:{ fontSize: 25 }
        }}
        >
    <LoginStack.Screen name="Login" component={LoginScreen} 
      options={{
        headerLeft: ()=>(
          <FontAwesome5 name="bars" style={{padding:15}} size={20}  color='#fff' onPress={()=>navigation.openDrawer()} />
        ),
        title:'Login'
      }} />
    </LoginStack.Navigator>
  );