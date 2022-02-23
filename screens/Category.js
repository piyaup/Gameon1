import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, ImageBackground} from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import firebase from 'firebase'
import db from '../config'

export default class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            challenges: []
        }
    }
    getData = async () => {
        var responce = await db.collection("challenges").get()
        responce.docs.map((a) => {
            var temp = this.state.challenges
            temp.push(a.data())
            this.setState({ challenges: temp })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {this.state.challenges.map((a) => {
                        return (
                            <ImageBackground source = {{uri:a.Image}}style={{ flex:1, marginTop: 10, width: '90%', alignSelf: 'center', borderRadius: 20, padding: 10 }}>
                                
                                <Text>{a.Title}</Text>
                                <Text>{a.Description}</Text>
                            </ImageBackground>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}