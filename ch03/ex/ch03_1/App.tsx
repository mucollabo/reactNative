import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import {Colors} from 'react-native-paper'

// console.log(Colors.blue500)
export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet World!</Text>
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.blue500},
  text: {fontSize: 40, color: Colors.blue200},
})
