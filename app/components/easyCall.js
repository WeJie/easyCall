/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import ContactList from './contactList';
//designed by Madebyoliver and Gregor Cresnar from Flaticon
export default class easyCall extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{
            title: '联系人',
            component: ContactList,
            RightButton:
              <TouchableOpacity
                style={{flex: 1, marginRight: 20}}>
                <Image
                  source={require('./img/add.png')}
                  resizeMode="contain"
                  style={{width: 20, height: 20,}}
                 />
              </TouchableOpacity>
          }}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          navigationBar={
            <Navigator.NavigationBar
            // <Navigator.BreadcrumbNavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  if (index === 0 ) { return; }
                  return (
                    <TouchableOpacity
                      style={{ flex: 1, marginLeft: 20}}
                      onPress={() => navigator.pop()}>
                      <Image
                        source={require('./img/back.png')}
                        resizeMode="contain"
                        style={{width: 20, height: 20,}}
                      />
                    </TouchableOpacity>
                  );
                },
                RightButton: (route, navigator, index, navState) => {
                  console.log('right route', route, navState);
                  return (
                    route.RightButton
                  );
                },
                Title: (route, navigator, index, navState) => {
                  return (
                    <Text style={{ color: 'black', fontSize: 18}}>
                      {route.title || 'Title'}
                     </Text>
                  );
                },
              }}
              style={{ backgroundColor: 'white', borderBottomWidth: 1, borderColor: '#E8E8E8'}}
              />
          }
          />
      </View>
    );
  }

  renderScene(route, navigator) {
    return (
      <route.component navigator={navigator} {...route.passProps}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white'
  }
});
