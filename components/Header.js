import React,{Component} from 'react';
import {View,Text} from 'react-native';

class Header extends Component{
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Header;

const styles = {
    header:{
        padding:20,
        alignItems:'center',
        backgroundColor:'#D0B3E1'
    },
    text:{
        fontSize:25,
        color :'black'
    },
};

//แบบสั้น
/*export default (props) =>
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
    </View>*/