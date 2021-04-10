import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

import * as actions from '../actions';

const styles = StyleSheet.create({
    
    container: {
        paddingTop: 50,
        paddingLeft: 20,
    },    
    text: {
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
        fontSize: 30,
    }  
  });

class PeopleDetail extends Component {
    
    render() {
        return  (
            <View style={styles.container}>
                    <SimpleIcon name={'close'} size={30}
                        onPress={() => this.props.nonSelected()}
                    />
                    <Text style={styles.text}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                    <Text style={styles.text}> from {this.props.person.company}</Text>
                    
                    <Text style={styles.text}>{this.props.person.phone}</Text>
                       
                    <Text style={styles.text}>{this.props.person.project}</Text>
                        
                    <Text style={styles.text}>{this.props.person.notes}</Text>              
            </View>
        )
    }
}

const mapStateToProp = state => {
    return { 
        person: state.personSelected
    }
}

export default connect(mapStateToProp, actions)(PeopleDetail);