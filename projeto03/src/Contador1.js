import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import estilo from './estilo1'

export default comp => {

    const [numero, setNumero] = useState(comp.inicial)

    const inc = () => setNumero(numero + 25)
    const dec = () => setNumero(numero - 25)
    return (
        <>
            <Text style={estilo.FontGrande}>{numero}</Text>
            <Button title=" + " onPress={inc}/>
            <Button title=" - " onPress={dec}/>
        </>
    )
}