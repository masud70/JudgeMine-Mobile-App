import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity,SafeAreaView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function UpcommingContestHome ({props}) {
    const navigation = useNavigation();
    const [Item, setItem] = useState([
        {name: "JudgeMine Regular Contest - 01", link: '../screens/ContestsScreen'},
        {name: "JudgeMine Regular Contest - 02", link: '../screens/ContestsScreen'},
        {name: "JudgeMine Regular Contest - 03", link: '../screens/ContestsScreen'},
    ])

    return (
        <SafeAreaView style={st.mainView}>
            <Text style={st.heading}>Upcomming Contests</Text>
            <FlatList
                data={Item}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Contests')}>
                        <View style={st.item}> 
                            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const st = StyleSheet.create({
    mainView:{
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#792ba6',
        borderRadius: 10,
        alignContent: 'center',
        marginBottom: 10
    },
    heading:{
        fontSize: 22,
        fontWeight: 'bold',
        width: "98%",
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#d6d6d6'
    },
    item:{
        marginBottom: 2,
        padding: 10,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6'
    }
})
