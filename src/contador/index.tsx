import React from 'react';
import { View, Text } from 'react-native';
import { s } from './style'

interface ContadorProps{
    contador: number;
}

export default function Contador ({contador}: ContadorProps){
    return(
        <View style={s.container}>
            <Text style={s.texto}>{contador.toFixed(2)}</Text>
        </View>
    )
}