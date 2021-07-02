import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'

export default class RecentBlogs extends Component {
    constructor(){
        super();
        this.state={
            blogs:[
                {title: "JudgeMine Regular Contest - 01 Announcement", link: require('../screens/ContestsScreen')},
                {title: "JudgeMine Regular Contest - 02 Announcement", link: require('../screens/ContestsScreen')},
                {title: "JudgeMine Regular Contest - 03 Announcement", link: require('../screens/ContestsScreen')},
            ]
        }
    }
    render() {
        return (
            <SafeAreaView style={st.mainView}>
                <Text style={st.heading}>Most Recent Blogs</Text>
                <FlatList
                    data={this.state.blogs}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <View style={st.item}> 
                            <Text style={{fontSize: 20, textAlign: 'center'}}>{item.title}</Text>
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
        marginBottom: 5
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
        borderBottomColor: '#d6d6d6',
        textAlign: 'center'
    }
})
