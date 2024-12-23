import React from 'react';
import {View, Image, Text} from 'react-native'
import { s } from '../cronometro/style'

export default function Cronometro(){
    return(
        <View style={s.container}>
            <Image source={require('../img/cronometro.png')}
                    style={s.cronometro}/>
        </View>
    )
}