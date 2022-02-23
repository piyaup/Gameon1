import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TextInput, ImageBackground} from "react-native";
import { FontAwesome } from "@expo/vector-icons"
import firebase from 'firebase';
import db from '../config'

export default class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            Blogs: [],
        }
    }
    getData = async () => {
        var responce = await db.collection("Blogs").get()
        responce.docs.map((b) => {
            var temp = this.state.Blogs
            temp.push(b.data())
            this.setState({ Blogs: temp })
        })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {this.state.Blogs.map((a) => {
                        // return (
                        //      <ImageBackground source = {{uri:a.Image}}style={{ flex:1, marginTop: 10, width: '90%', alignSelf: 'center', borderRadius: 20, padding: 10 }}>
                                
                        //          <Text>{a.Title}</Text>
                        //          <Text>{a.Description}</Text>
                        //      </ImageBackground>
                        // )
                    })}
                </ScrollView>
            </View>
        )
    }
}