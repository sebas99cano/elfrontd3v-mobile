import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Dashboard from "../screens/dashboard/components/Dashboard";
import Earnings from "../screens/earnings/components/Earnings";
import Expenses from "../screens/expenses/components/Expenses";
import Profile from "../screens/profile/components/Profile";

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={Earnings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-task" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="insert-chart-outlined"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
