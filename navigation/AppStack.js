import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Dashboard from "../screens/dashboard/components/Dashboard";
import Earnings from "../screens/earnings/components/Earnings";
import Expenses from "../screens/expenses/components/Expenses";
import Profile from "../screens/profile/components/Profile";
import { Colors6 as Colors } from "../constants/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEarning from "../screens/earnings/components/AddEarning";

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

export const AppStackEarnings = () => {
  return (
    <StackNavigator.Navigator initialRouteName="Earnings">
      <StackNavigator.Screen
        name="Earnings"
        component={Earnings}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen name="AddEarning" component={AddEarning} />
    </StackNavigator.Navigator>
  );
};

function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="EarningsStack"
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.backgroundColor,
        tabBarInactiveTintColor: Colors.primary,
        tabBarActiveBackgroundColor: Colors.secondary,
        tabBarInactiveBackgroundColor: Colors.backgroundColor,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="EarningsStack"
        component={AppStackEarnings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-task" size={size} color={color} />
          ),
          headerShown: false,
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
