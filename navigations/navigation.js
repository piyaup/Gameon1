import React from 'react';
import Forgotpassword from "../screens/Forgotpassword"
import Signup from "../screens/Signup"
import Loading from "../screens/Loading"
import Login from "../screens/Login"
import Category from "../screens/Category"
import CategoryDetails from '../screens/CategoryDetails';
import BlogDetails from '../screens/BlogDetails';
import Blog from '../screens/Blog';
import Home from '../screens/Home';
import MyChallenges from '../screens/MyChallenges';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack1 = createStackNavigator();

function CategoryStack(){
    return(
        <Stack1.Navigator screenOptions={{headerShown:false}}>
            <Stack1.Screen name = "Home" component={Home}/>
            <Stack1.Screen name = "Category" component={Category}/>
            <Stack1.Screen name = "CategoryDetails" component={CategoryDetails}/>
        </Stack1.Navigator>
    )
}

const Stack2 = createStackNavigator();

function BlogStack(){
    return(
        <Stack2.Navigator screenOptions={{headerShown:false}}>
            <Stack2.Screen name = "Blog" component={Blog}/>
            <Stack2.Screen name = "BlogDetails" component={BlogDetails}/>
        </Stack2.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={CategoryStack} />
      <Tab.Screen name="Blog" component={BlogStack} />
      <Tab.Screen name="MyChallenges" component={MyChallenges} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

// function MyStack(){
//     return(
//         <Stack.Navigator screenOptions={{headerShown:true}}>
//             <Stack.Screen name = "Login" component={Login} />
//             <Stack.Screen name = "Home" component={MyTabs}/>
//             <Stack.Screen name = "Loading" component={Loading}/>
//             <Stack.Screen name = "Signup" component={Signup}/>
            
//             <Stack.Screen name = "Forgotpassword" component={Forgotpassword}/>          
//         </Stack.Navigator>
//     )
// }
function MyStack(){
    return(
        <Stack.Navigator >
             <Stack.Screen name = "Signup" component={Signup} options = {{headerShown:true}}/>
            <Stack.Screen name = "Home" component={MyTabs}/>
            <Stack.Screen name = "Loading" component={Loading}/>
            
           
            <Stack.Screen name = "Login" component={Login} options = {{headerShown:false}}/>
            <Stack.Screen name = "Forgotpassword" component={Forgotpassword}/>          
        </Stack.Navigator>
    )
}


export default MyStack; MyTabs; BlogStack; CategoryStack;