

import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import Signup from './src/Signup';
import GenderScreen from './src/pages/GenderScreen';
import HomeScreen from './src/pages/HomeScreen';
import ModeScreen from './src/pages/ModeScreen';
import WeekScreen from './src/pages/WeekScreen';
import ExcerciseScreen from './src/pages/ExcerciseScreen';
import Settings from './src/drawer/Settings';
import About from './src/drawer/About';
import BMI from './src/drawer/BMI';
// import Name from './src/drawer/Name';
import Share from './src/drawer/Share';
import Profile from './src/drawer/Profile';



const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ModeScreen" component={ModeScreen} />
        <Stack.Screen name="WeekScreen" component={WeekScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExcerciseScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="BMI" component={BMI} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Share" component={Share} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;