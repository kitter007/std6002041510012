import React from 'react';
import {View,Text} from 'react-native';
import Header from './Header';

class App extends React.Component{
    render(){
        return(
            <View>
                <Header title = {'Albums'}></Header>
                <Text>Kittiporn Sinnurukkun</Text>
            </View>
        );
    }
}
export default App;

