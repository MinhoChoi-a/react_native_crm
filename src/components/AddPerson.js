import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({

    container: {
       
        width: 300,
       
        paddingTop: 20,
        paddingLeft: 20,
    }
});


// to use react component function(methods) in this class component
class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }
    render() {
        return  (
            <View style={styles.container}>
            <Text>Add person screen</Text></View>
        )
    }
}


export default connect(null, actions)(AddPerson);