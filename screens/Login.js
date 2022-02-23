import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Signup from "./Signup";
import firebase from 'firebase';
import db from '../config'

export default class Login extends React.Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password:'',
        }
    }
    login = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    // Signed in 
    alert('welcomeback!')
    this.props.navigation.navigate('Home')
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('../assets/GameOn.png')} style={{ width: 300, height: 275, alignSelf: 'center', borderRadius: '30', marginTop:15 }} />
                    <Text style={{ marginTop: 50, marginLeft:50, color: 'black', fontWeight: 'bold', fontSize:30, marginBottom:-30, marginLeft:40 }}>Login</Text>
                    <SimpleLineIcons name="login" size={24} color="black" />

                    <MaterialCommunityIcons name="email-open-outline" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey" }} placeholder = "Email ID"                     
                        onChangeText = {(val)=>{
                            this.setState({email:val})
                        }}>
                    </TextInput>
                    <View/>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey"}} placeholder = "Password"
                        secureTextEntry={true}
                        onChangeText = {(val)=>{
                            this.setState({password:val})
                        }}>
                    </TextInput>
                    <Text style = {{marginTop:10, color:'blue',fontWeight:'bold',alignSelf:'flex-end', marginHorizontal:"5%"}} onPress = {()=>{
                        this.props.navigation.navigate('Forgotpassword')
                    }}>
                        Forgot password?
                    </Text>
                    <TouchableOpacity style={{backgroundColor:'blue', width:'90%',height:'9%',marginTop:'10%', borderRadius:15, alignSelf:'center',justifyContent:'center'}}
                    onPress = {()=>{
                        this.login()
                    }}
                    >
                        <Text style={{fontSize:25,color:'white', alignSelf:'center'}}>Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

});