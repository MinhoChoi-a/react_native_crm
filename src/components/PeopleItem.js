import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons'; //react-native-vector-icons;
import * as actions from '../actions';

//const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 30,
        height: 100,
        width: 350
    },
    title: {
        top:30,
        left:100,
        fontSize:24,
    }   

});

const PeopleItem = (prop) => {
        return  (
            <View style= {[styles.card]}>
              <Pressable  onPress={() => prop.selectPerson(prop.people)}>
                    <Text style={[styles.title]}>{prop.people.firstName} {prop.people.lastName}</Text>
                </Pressable>
            </View>

            
          
        )    
}


//connect(state, actions) 
//=> make connection on store, so whenever its state changed, then the prop will be changed 
//to follow the reducer's return datait as a prop
export default connect(null, actions)(PeopleItem);