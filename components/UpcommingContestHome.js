import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity,SafeAreaView } from 'react-native'

export default class UpcommingContestHome extends Component {
    constructor(){
        super();
        this.state={
            contests:[
                {name: "JudgeMine Regular Contest - 01", link: require('../screens/ContestsScreen')},
                {name: "JudgeMine Regular Contest - 02", link: require('../screens/ContestsScreen')},
                {name: "JudgeMine Regular Contest - 03", link: require('../screens/ContestsScreen')},
            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={st.mainView}>
                <Text style={st.heading}>Upcomming Contests</Text>
                <FlatList
                    data={this.state.contests}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <View style={st.item}> 
                            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.name}</Text>
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
