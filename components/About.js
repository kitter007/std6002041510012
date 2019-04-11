//import Library
import React, {Component} from 'react';
import {View,Text,ActivityIndicator,Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

//write component
class About extends Component{
    static navigationOptions = {
        title:'Profile',
        headerLeft: null,
        headerStyle: {
            backgroundColor: "#D0B3E1",
        },
        headerTintColor: "black",
    };
    constructor(){ //auto working when class first run
        super();
        this.state={
            name:'',
            email:''
        }
    }

    async componentDidMount(){ //work after render() is run
        const token = await AsyncStorage.getItem('@storage_Token')
        axios.get("http://128.199.240.120:9999/api/auth/me", {
                headers: {
                    "accept":"*/*",
                    "Authorization": "Bearer " + token
                }
            })
        .then(response =>{
            console.log(response);
            this.setState({
                email: response.data.data.email,
                name: response.data.data.name
            })
        })
        .catch(error=>{
            console.log('error',error);
        })
    }
    async Logout(){
        await AsyncStorage.removeItem("@storage_Token");
        const {navigate} = this.props.navigation;
        return navigate('Login')
    }
    render() {
        if (this.state.name == '') {
            return(
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
            );
        }

        return (
            <View style={{ paddingTop: 10 }}>
                <Text style={{ textAlign: "center", fontSize: 28, color: "black" }}>Profile</Text>
                <View style={{ padding: 20}}>
                    <Text style={styles.text}>Name: {this.state.name}</Text>
                    <Text style={styles.text}>Email: {this.state.email}</Text>

                    <View style={{ marginTop: 40 }}>
                    <Button 
                        title="Back"
                        onPress={() =>
                        this.props.navigation.push('Login')}
                    />
                    </View>
                    <View style={{ paddingTop: 10 }}>
                    <Button  
                        title="Logout"
                        onPress={this.Logout.bind(this)}
                    />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 25
    },
    lastText: {
        fontSize: 30,
        marginBottom: 20
    }
}

//export class
export default About;