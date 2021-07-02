import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'

export default class Top5Miners extends Component {
    constructor(){
        super();
        this.state={
            users:[
                {username: "Nishat", link: require('../screens/ContestsScreen')},
                {username: "Tonmoy", link: require('../screens/ContestsScreen')},
                {username: "Ayesha", link: require('../screens/ContestsScreen')},
            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={st.mainView}>
                <Text style={st.heading}>Top 5 Miners</Text>
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.username}
                    renderItem={({ item }) => (
                        <View style={st.item}> 
                            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.username}</Text>
                        </View>
                    )}
                />
            </SafeAreaView>
        )
    }
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
        padding: 5,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6'
    }
})
