/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  CameraRoll
} from 'react-native';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this._addPhoto = this._addPhoto.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnPhoto}
          onPress={() => this._addPhoto}>
          <Image
            style={styles.imgPhoto}
            resizeMode="stretch"
            source={require('./img/totoro.png') }
            />
        </TouchableOpacity>
        <View style={styles.info}>
          <View style={styles.infoName}>
            <Text style={styles.labelName}>姓名</Text>
            <TextInput
              style={styles.txtInputName}
              placeholder="请输入姓名"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.infoPhone}>
            <Text style={styles.labelPhone}>电话</Text>
            <TextInput
              style={styles.txtInputPhone}
              placeholder="请输入电话号码"
              keyboardType="numeric"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
      </View>
    );
  }

  _addPhoto() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 56,
    backgroundColor: '#F5FCFF'
  },
  btnPhoto: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 3,
    marginBottom: 20,
  },
  imgPhoto: {
    flex: 1,
    width: null,
    height: null,
  },
  info: {
    flex: 1,
    backgroundColor: 'white'
  },
  infoName: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  infoPhone: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  labelName: {
    width: 85,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 17,
  },
  labelPhone: {
    width: 85,
    marginRight: 5,
    marginLeft: 15,
    fontSize: 17,
  },
  txtInputName: {
    flex: 1,
    padding: 2,
    fontSize: 17,
  },
  txtInputPhone: {
    flex: 1,
    padding: 2,
    fontSize: 17,
  }
});
