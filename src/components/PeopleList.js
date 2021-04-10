import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({

    container: {
      
        width: 300,
      
        paddingTop: 20,
        paddingLeft: 20,
    }
});


// to use react component function(methods) in this class component
class PeopleList extends Component {
    
    //will be used to tap bar navation => need to install react-navitgation
    //static -> belong to class only, not for the instances
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }

    renderInitialView() {
        if(this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        }

        else {
            return (
                <FlatList
                data={this.props.people}
                renderItem={( {item} ) => <PeopleItem people={item}/>}                
                />
                )
            }
        }

    render() {
        return  (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView
    }
}

//connect function -> connects react components to a redux store
//second parameter needed to get state => prop
export default connect(mapStateToProps)(PeopleList);