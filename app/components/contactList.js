/**
 * @flow
 **/

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Contact from './contact';


export default class ContactList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['阿飞', '李寻欢', '上官金虹'])
    };
    console.log('list',this.props);

    this.renderRow = this.renderRow.bind(this);
    this._onPressRow = this._onPressRow.bind(this);
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        />
    );
  }

  renderRow(rowData) {
    return (
      <View style={styles.cell}>
        <TouchableOpacity
          style={styles.cellBtnContact}
          onPress={() => this._onPressRow(rowData) }>
          <Image
            style={styles.cellPhoto}
            resizeMode="contain"
            source={require('./img/totoro.png') }
            />
          <View style={styles.cellName}>
            <Text style={styles.txtName}>Hello World {rowData}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cellBtnCall}>
          <Text style={styles.cellBtnCallText}>Call</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPressRow(rowData) {
    this.props.navigator.push({
      title: 'Name',
      component: Contact,
      passProps: {
        contact: rowData
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    padding: 16,
    marginTop: 56
  },
  cell: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  cellBtnContact: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E8E8E8'
  },
  cellPhoto: {
    width: null,
    height: 200,
  },
  cellName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  txtName: {
    fontSize: 18,
  },
  cellBtnCall: {
    backgroundColor: '#09BB07',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellBtnCallText: {
    color: 'white',
    fontSize: 18
  }
});
