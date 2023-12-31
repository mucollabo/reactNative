import React, {useCallback, useState, useRef} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Alert, Animated} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Avatar} from '../components';
import {styles} from './Person.style';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};

const PersonBasic: FC<PersonProps> = ({person, deletePressed}) => {
  const animValue = useRef(new Animated.Value(0)).current;
  const rightViewAnimStyle = {opacity: animValue};
  const avatarPressed = useCallback(
    () =>
      Animated.timing(animValue, {useNativeDriver: true, toValue: 1}).start(),
    [],
  );
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <Animated.View style={[styles.rightView, rightViewAnimStyle]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]} onPress={avatarPressed}>
          {person.email}
        </Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={Colors.blue500} />
          <Icon name="twitter" size={24} color={Colors.purple500} />
          <Icon name="heart" size={24} color={Colors.red500} />
        </View>
      </Animated.View>
    </View>
  );
};
export default PersonBasic;
/*
import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert, Animated, Easing} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {useToggle} from '../hooks' // 추가했습니다.
import {Avatar} from '../components'
import {styles} from './Person.style'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void // 추가했습니다.
}

const Person: FC<PersonProps> = ({person, deletePressed}) => {
  // 바뀐 부분입니다.
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={Colors.blue500} />
          <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
          <Icon name="heart" size={24} color={Colors.red500} />
        </View>
      </View>
    </View>
  )
}
export default Person
*/
