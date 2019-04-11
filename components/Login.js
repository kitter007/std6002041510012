// import library
import React, { Component } from 'react';
import { View, Text, TextInput, Button,Alert } from 'react-native';
import axios from 'axios';
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

// write component
class Login extends Component {
    static navigationOptions = {
        title:'Login',
        headerStyle: {
            backgroundColor: "#D0B3E1",
        },
        headerTintColor: "black",
    };
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        // this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    async componentDidMount(){
        const {navigate} = this.props.navigation;
        const token = await AsyncStorage.getItem('@storage_Token')
        if (token) {
            console.log('token_check',token)
            return navigate('Profile')   
        }
    }
    onChangeEmail(e) {
        console.log('onChangeEmail', e)
        this.setState({ email: e}) 
    }
    onChangePassword(e) {
        this.setState({ password: e})
    }
    async onPress() {
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        await axios.post(url, this.state)
            .then(async response => {
                console.log('token ', response.data.data.token)
                await AsyncStorage.setItem('@storage_Token', response.data.data.token)
                const {navigate} = this.props.navigation;
                return navigate('Profile') 
            }).catch(error => {
                Alert.alert(
                  'Wrong',
                  'Email หรือ Password ไม่ถูกต้อง',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
                );
              });
    }
    render() {
        return (
            <View style={{ paddingTop: 10 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "black" }}>Login Form</Text>
                <View style={{ padding: 20}}>
                    <TextInput
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        style={styles.textin}
                    />

                    <TextInput
                        placeholder="Password"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        style={styles.textin}
                        secureTextEntry
                    />

                    <Button title="Login" onPress={this.onPress.bind(this)} />
                </View>
            </View>
        );
    }
}

const styles = {
    textin:{
        height:50,
        backgroundColor:'#F5F5F5',
        fontWeight:'bold',
        borderRadius:7,
        marginLeft:0,
        borderWidth: 1.5,     
        borderColor: '#d6d7da',
        marginBottom:10,
        fontSize: 20
    },
};

// export
export default Login;