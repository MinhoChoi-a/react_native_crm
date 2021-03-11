import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: 300,
        paddingTop: 20,
    }
});


// to use react component function(methods) in this class component
class PeopleList extends Component {
    
    //will be used to tap bar navation => need to install react-navitgation
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }
    render() {
        return  (
            <View style={styles.container}>
            <FlatList
                data={this.props.people}
                renderItem={( {item} ) => <PeopleItem people={item} /> }
            />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(mapStateToProps)(PeopleList);