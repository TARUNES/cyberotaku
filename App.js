import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import TabNav from './routes/TabNav';
import NavBar from './components/NavBar';
import Feed from './screens/Feed';
import Schudle from './screens/Schudle';
import AddSchedule from './screens/AddSchedule';
import BottomNavCenter from './Navigations/BottomNavCenter';

const App = () => {
  // const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="SignUp" component={SignUp} />
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Nav" component={NavBar} />
    //   <Stack.Screen name="Feed" component={Feed} />
    //   <Stack.Screen name="Sceudle" component={Schudle} />

    //   {/* <Stack.Screen name="Settings" component={Settings} /> */}
    //   <Stack.Screen
    //       name="TabNav"
    //       component={TabNav}
    //       options={{headerShown: false}}
    //     />
    // </Stack.Navigator>
    // </NavigationContainer>
    // <Schudle></Schudle>
<<<<<<< HEAD
    // <AddSchedule></AddSchedule>
    // <Home/>
    <View style={styles.container}>
      <NavigationContainer>
        <BottomNavCenter />
      </NavigationContainer>
    </View>
  );
};
=======
    <Feed></Feed>
    // <AddSchedule></AddSchedule>
  )
}
>>>>>>> 7b1ee04fc9f4c164752fbec925e70c952c635591


const styles = StyleSheet.create({
  container:{
    flex:1,
    
    
  }
});

export default App;