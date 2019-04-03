import React,{Component} from 'react';
import {View,Text,Image,Button} from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render(){
        return(
            <View>
                <CardSection>
                <View style={{ flexDirection: "row"}}>
                    <Image 
                        style={{width: 100, height: 100}}
                        source={{uri: 'https://bit.ly/2UjF6RG'}}/>
                    
                <View style={{ marginTop: 15, marginLeft: 10}}>
                    <Text>Album Name : The Avengers</Text>
                    <Text>Artist Name : Kittiporn</Text>
                </View>
                </View>
                </CardSection>
            
                <CardSection>
                    <Text></Text>
                    <Image 
                        style={{width: 420, height: 350}}
                        source={{uri: 'https://bit.ly/2HXxf4P'}}/>
                </CardSection>

                <CardSection>
                    <View style={styles.button}>
                    <View style={{width:100}}> 
                        <Button
                            title="Buy"
                            color="red"
                            />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}
export default Card;

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}