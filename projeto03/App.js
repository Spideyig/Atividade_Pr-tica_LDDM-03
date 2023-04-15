import React from 'react'
import {View, StyleSheet } from 'react-native'
import Contador1 from './src/Contador1'
import Contador2 from './src/Contador2'

export default () => (
  <View style={style.App}>
    <Contador1 inicial={0}/>
    <Contador2 inicial={0}/>
  </View>
  )

const style = StyleSheet.create({
  App: {
    backgroundColor: '#AC9',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
