import React from "react";
import{ StyleSheet, Text, View, Image, ScrollView, TextInput} from "react-native";
import { FontAwesome } from "@expo/vector-icons"

export default class Loading extends React.Component {
    render() {
        return(
            <View style = {{ flex:1}}>
                <ScrollView>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        )
    }
}