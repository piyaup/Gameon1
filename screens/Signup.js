import React from "react";
import{ StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import {Feather} from "@expo/vector-icons";
import {ArtDesign} from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default class Signup extends React.Component {
    signUp=()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
  alert('User created!');

  db.collection('users').add({email:this.state.email, name:this.state.name, password:this.state.password})

  this.props.navigation.replace('Home')
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }
      constructor(){
        super();
        this.state={
            email:'',
            password:'',
            comfirmPassword:'',
            name:'',
            age:'',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('../assets/GameOn1.png')} style={{ width: 300, height: 275, alignSelf: 'center', borderRadius: '30', marginTop:15 }} />
                    <Text style={{ marginTop: 50, marginLeft:50, color: 'black', fontWeight: 'bold', fontSize:30, marginBottom:-30, marginLeft:40 }}>Sign In</Text>
                    <AntDesign name="user" size={24} color="black" />

                    <MaterialCommunityIcons name="email-open-outline" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey" }}
                    placeholder = "Email ID"
                        onChangeText = {(val)=>{
                            this.setState({email:val})
                        }}>
                    </TextInput>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey"}}
                    placeholder = "Password"
                        onChangeText = {(val)=>{
                            this.setState({password:val})
                        }}>
                    </TextInput>
                    <Ionicons name="key" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey"}}
                    placeholder = "confirmPassword"
                        onChangeText = {(val)=>{
                            this.setState({confirmPassword:val})
                        }}>
                    </TextInput>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey"}}
                    placeholder = "Name"
                        onChangeText = {(val)=>{
                            this.setState({name:val})
                        }}>
                    </TextInput>
                    <MaterialIcons name="format-list-numbered" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:-26,marginLeft:20, borderBottomColor:"grey"}}
                    placeholder = "Age"
                        onChangeText = {(val)=>{
                            this.setState({age:val})
                        }}>
                    </TextInput>
                    <Text style = {{marginTop:10, color:'blue',fontWeight:'bold',alignSelf:'flex-end', marginHorizontal:"5%"}} onPress = {()=>{
                        this.props.navigation.navigate('Login')
                    }}>
                        Already have an account? 
                    </Text>
                    <TouchableOpacity style={{backgroundColor:'blue', width:'90%',height:'9%',marginTop:'10%', borderRadius:15, alignSelf:'center',justifyContent:'center'}} 
                    onPress = {()=>{
                        this.signUp()
                    }}>
                        <Text style={{fontSize:25,color:'white', alignSelf:'center'}}>Sign up</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

});