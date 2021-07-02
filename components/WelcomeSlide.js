import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'

export default class WelcomeSlide extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={require('../assets/images/banner.jpg')}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: 202,
        width: "100%",
        backgroundColor: 'red',
        flex: 1,
        borderBottomWidth: 10,
        borderColor: 'gray',
    },
    image:{
        height: 200,
        width: '100%',
        flex: 1
    }
})