import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: 300,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});


// to use react component function(methods) in this class component
class PeopleList extends Component {
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