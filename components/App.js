import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';


class App extends Component{
    render(){
        return(
            <View>
                <Header title = {'Login'}></Header>
                <Login/>
            </View>
        );
    }
}
export default App;

