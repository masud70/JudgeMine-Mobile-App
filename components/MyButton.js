import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MyButton = ({text, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container:{
        width: "90%",
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 8
    },
    text:{
        fontSize: 22,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#792ba6',
        color: '#fff',
        fontWeight: 'bold'
    }
})
