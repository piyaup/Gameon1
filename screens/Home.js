import React from "react";
import{ StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons"

export default class Home extends React.Component {
    render() {
        return(
            <View style = {{ flex:1}}>
                <ScrollView>
                    <TouchableOpacity style = {{marginTop:100}}onPress = {()=>{

                        this.props.navigation.navigate("Category")
                        //this.props.navigation.navigate("Login")
                        //this.props.navigation.navigate("Signup")
                    }}>
                        
                        <Text>Category</Text>

                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}