import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function HomeSlider() {
    const navigation = useNavigation();
    const [Items, setItems] = useState([
        { screen: "Problems", link: require("../assets/images/problems.png"), text: "Practice Problems", description: "Solve interesting Mathematical Problems on JusgeMine"},
        { screen: "Contests", link: require("../assets/images/contest.png"), text: "Contest Section", description: "Compete with others in the contest area on JudgeMine"},
        { screen: "Blogs", link: require("../assets/images/blogs.png"), text: "Blog Section", description: "Learn new topics and share your knowledge with JudgeMine community"}
    ])
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                keyExtractor={(Item, index) => index.toString()}
                data={Items}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={()=> navigation.navigate(item.screen)}
                    >
                        <View style={styles.item}>
                            <Image style={styles.image} source={item.link}/>
                            <Text style={styles.text}>{item.text}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        flexDirection: 'row',
    },
    item:{
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        height: 250,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300,
        borderColor: '#792ba6',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    image:{
        width: 90,
        height: 90,
    },
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#792ba6'
    },
    description:{
        fontSize: 18,
        textAlign: 'center',
    }
})