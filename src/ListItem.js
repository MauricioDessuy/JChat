import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        
    }

    render() {
        return (
           <TouchableHighlight 
                onPress={this.click} 
                underlayColor="#cccccc">
                <View style={styles.item}>
                    <Image source={{uri: this.props.data.img}} style={styles.imagem} />
                    <View style={styles.info} >
                        <Text style={styles.nome}>{this.props.data.nome}</Text>
                        <Text numberOfLines={1} style={styles.msg}>{this.props.data.msg}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        flex: 1,
        flexDirection: 'row',
    },
    imagem: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 20
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});



