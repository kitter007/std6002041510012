import React,{Component} from 'react';
import {View,Text} from 'react-native';

const styles = {
    textStyle:{
        fontSize:25,
        color :'black'
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems:'center',
        padding:15,
        backgroundColor:'#D0B3E1',
        shadowColor:'red',
        shadowOffset:{width:0,height:2},
        shadowOpacity:100,
        elevation:10,
        position:'relative'
    }
};

class Header extends Component{
    render(){
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
export default Header
//แบบสั้น
/*export default (props) =>
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
    </View>*/