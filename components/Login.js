import React,{ Component } from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }
    onChangeEmail(e){
        console.log('onChangeEmail',e)
        this.setState({email:e})
       
    }
    onChangePassword(e){
        console.log('onChangePassword',e)
        this.setState({password:e})
    }
    onPress(){
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response=>{
                console.log('login', response.data.data.token)
            })
    }
    render(){
        return(
            <View> 
                <Text></Text>
                <Text style={{width:350,marginLeft:30,fontSize:24,fontWeight:'bold'}}>Login Form</Text>
                <TextInput
                    style={style=styles.textin}
                    placeholder='Email'
                    value={this.state.email}
                    onChangeText={this.onChangeEmail} />

                <TextInput
                    secureTextEntry
                    style={style=styles.textin}
                    placeholder='Password'
                    value={this.state.password}
                    onChangeText={this.onChangePassword}  />

                <View style={{width:350,marginLeft:30,marginTop:10}}>
                <Button
                    title='Login'
                    onPress={this.onPress.bind(this)}
                    />
                </View>
            </View>
            
        );
    }
}
export default Login;

const styles = {
    textin:{
        height:40,
        width:350,
        backgroundColor:'#F5F5F5',
        fontWeight:'bold',
        borderRadius:7,
        marginLeft:30,
        borderWidth: 1.5,     
        borderColor: '#d6d7da',
        marginTop:7
    },
};