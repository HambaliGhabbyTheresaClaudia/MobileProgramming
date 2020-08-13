import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component
{
    render()
    {
        return(
            <View>
                <Text style={{textAlign: 'center', fontSize: 30}}>Home</Text>
                <Button title="Show"></Button>
            </View>
        )
    };
}