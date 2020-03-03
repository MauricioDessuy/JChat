import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [
        {key: '1', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Mauricio Dessuy', msg: 'Opa tudo bom?'},
        {key: '2', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Irineu da Silva', msg: 'Eae cara blz? Partiu estudar React native utilizando o expo'},
        {key: '3', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Maria dos Santos', msg: 'To tranquilo cara?'},
        {key: '4', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Mãe', msg: 'Sim mãe'},
        {key: '5', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Irmão', msg: 'Bora jogar?'},
        {key: '6', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Irmão 2', msg: 'Bora jogar futebol!'},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
});
