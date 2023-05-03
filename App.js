import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";
import {
  useFonts,
  Barlow_400Regular,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  let [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.primary50,
        tabBarOptions: {
          labelStyle: {
            fontSize: 20,
          fontFamily: "Barlow_400Regular",
          },
        },
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarOptions: {
            labelStyle: {
              fontSize: 20,
            fontFamily: "Barlow_400Regular",
            },
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          labelStyle: {
            fontSize: 20,
            fontFamily: "Barlow_400Regular",
            color: '#b3cde0' 
          },
          
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color}  />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              tabBarOptions: {
                labelStyle: {
                  fontSize: 20,
                fontFamily: "Barlow_400Regular",
                },
              },
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false,
                tabBarOptions: {
                  labelStyle: {
                    fontSize: 20,
                  fontFamily: "Barlow_400Regular",
                  },
                }, }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                Presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
