import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const InputComponent = (props) => {
    return (
        <View style={styles.container}>
            <TextInput {...props} style={styles.input} />
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    container:{
        width: '90%',
    },
    input:{
        width: '100%',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 8,
        height: 55,
        padding: 15,
        fontSize: 22,
        marginBottom: 10
    }
})
