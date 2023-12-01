import React from 'react'
// prittier ignore
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  Text,
  Platform,
} from 'react-native'
import * as D from './src/data'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

const text = `Almost before we knew it, we had left the ground.`

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./src/assets/images/bg.jpg')}>
        <Image source={{uri: avatarUrl}} style={[styles.image]} />
        <View style={[styles.flex, styles.padding10]}>
          <Text style={[styles.text, styles.regular]}>{text} [regular]</Text>
          <Text style={[styles.text, styles.medium]}>{text} [medium]</Text>
          <Text style={[styles.text, styles.semiBold]}>{text} [semiBold]</Text>
          <Text style={[styles.text, styles.bold]}>{text} [bold]</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1},
  backgroundImage: {flex: 1},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2},
  padding10: {padding: 10},
  text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},

  regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
  medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
  semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},
  bold: {fontFamily: 'DancingScript-Bold', fontWeight: Platform.select({ios: '700', android: '600'})},
})
