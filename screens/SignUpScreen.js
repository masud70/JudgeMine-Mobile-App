import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import InputComponent from '../components/InputComponent'
import MyButton from '../components/MyButton'

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/icon.png')}/>
            <Text style={styles.text} >Welcome To <Text style={{color: '#792ba6'}}>JudgeMine</Text></Text>
            <InputComponent placeholder="Username" textAlign='center' maxLength={20}/>
            <InputComponent placeholder="Email" keyboardType={'email-address'} textAlign='center' maxLength={20}/>
            <InputComponent placeholder="Password" textAlign='center' secureTextEntry maxLength={16} />
            <MyButton text={'Sign In'} onPress={()=>alert('clicked')}/>
            <TouchableOpacity style={styles.signin}
            onPress={()=>navigation.navigate('Login')}
            >
                <Text style={styles.signinText}>
                    Already have an account? Login now.
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    logo: {
        height: 150,
        width: 150
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    signin:{
        padding: 10,
    },
    signinText:{
        fontSize: 20,
        color: '#792ba6'
    }
})
