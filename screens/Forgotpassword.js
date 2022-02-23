// import React from "react";
// import{ StyleSheet, Text, View, Image, ScrollView, TextInput} from "react-native";
// import { FontAwesome } from "@expo/vector-icons"

// export default class Forgotpassword extends React.Component {
//     render() {
//         return(
//             <View style = {{ flex:1}}>
//                 <ScrollView>
                    
//                 </ScrollView>
//             </View>
//         )
//     }
// }
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Signup from "./Signup";

export default class Login extends React.Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password:'',
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('../assets/GameOn.png')} style={{ width: 300, height: 275, alignSelf: 'center', borderRadius: '30', marginTop:15 }} />
                    <Text style={{ marginTop: 50, marginLeft:50, color: 'black', fontWeight: 'bold', fontSize:30, marginBottom:-30, marginLeft:40 }}>Login</Text>

                    <MaterialCommunityIcons name="email-open-outline" size={24} color="black" />
                    <TextInput style = {{width: "90%", height: 30, borderBottomWidth:1, paddingLeft:10, marginTop:50,marginLeft:20, borderBottomColor:"grey", alignSelf:'center' }}
                    
                    placeholder = "Email ID"
                        onChangeText = {(val)=>{
                            this.setState({email:val})
                        }}>
                    </TextInput>


                    <TouchableOpacity style={{backgroundColor:'blue', width:'90%',height:'9%',marginTop:'10%', borderRadius:15, alignSelf:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20,color:'white', alignSelf:'center'}}>Send reset Password link</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

});