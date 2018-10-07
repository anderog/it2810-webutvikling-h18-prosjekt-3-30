import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import ContactList from './ContactList';

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.navigation.state.params.key,
      name: this.props.navigation.state.params.name,
      icon: this.props.navigation.state.params.ico,
      phone: this.props.navigation.state.params.phone
    };
  }

  onPress = () => {
    this.props.navigation.navigate("List");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colorBar}></View>
        <View style={styles.circle} />
        <Icon name='ios-arrow-back' underlayColor={'#FFD275'} type='ionicon' size={26} color={'#FCF8EF'} onPress={() => {this.onPress()}}/>
        <View style={styles.details}>
          <View>
            <View style={styles.imgWrapper}>
              <Icon name={this.state.icon} size={200} color={'lightgray'}/>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.meta}>{this.state.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  colorBar: {
    position: 'absolute',
    backgroundColor: '#FFD275',
    height: 125,
    width: 1000,
    zIndex: -1

  },
  circle: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 180/2,
    backgroundColor: '#fff',
    marginLeft: 90,
    marginTop: 44,
    marginBottom: 10,
    zIndex: 0
  },
  name: {
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 40,
    color: '#2C3E50'
  },
  details: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -200
  },
  meta: {
    alignSelf: 'center'
  }
});
