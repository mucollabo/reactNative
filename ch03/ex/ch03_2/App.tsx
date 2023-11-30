import React from 'react'
// prettier-ignore
import { Platform, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {MD2Colors as Colors} from 'react-native-paper'

const {width, height} = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text, {color: 'white'}]}>os: {Platform.OS} </Text>
      <Text style={[styles.text, {color: 'yellow'}]}>width: {width} px</Text>
      <Text style={[styles.text, {color: 'orange'}]}>height: {height} px</Text>
      <View style={[styles.box, {borderRadius: 10}]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 40, borderBottomLeftRadius: 40},
        ]}
      />
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
  text: {fontSize: 20, marginBottom: 10, marginLeft: 50, marginTop: 20},
  box: { width: '70%', height: 100, backgroundColor: Colors.white, marginBottom: 10, marginLeft: Platform.select({ios: 20, android: 0})},
  border: { borderWidth: 10, borderColor: Colors.lime500 }
})
