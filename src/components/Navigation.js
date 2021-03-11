import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import PeopeList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const TabNavigator = createBottomTabNavigator(
    {
        People: PeopeList,
        Add: AddPerson,
        Company: CompanyList
    },
    {
        initailRouteName: 'People',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#80cbc4',
            showLabel: false,
            showIcon: true, //no need for ios,
            style: {
                backgroundColor: '#26a69a'
            },
        },
    }
);

export default createAppContainer(TabNavigator);