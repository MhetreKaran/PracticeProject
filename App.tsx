// import { View, Text } from 'react-native'
// import React from 'react'
// import AppNavigation from './src/navigation/AppNavigation'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'


// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <AppNavigation />
//     </GestureHandlerRootView>
//   )
// }

// export default App
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import React from "react";
import { Button, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LivePage} from './src/pages/LivePage';
import {PermissionsAndroid} from 'react-native';
import ConferencePage from './src/pages/ConferencePage';
import HomePage from './src/pages/HomePage';
const Stack = createNativeStackNavigator();
export default function App() {


// const granted = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA,
//                                   );
//     granted.then((data)=>{

//         if(!data) {
//             const permissions = [PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, PermissionsAndroid.PERMISSIONS.CAMERA];
//             PermissionsAndroid.requestMultiple(permissions);
//         }
//     }).catch((err)=>{
//     console.log(err.toString());
//     })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        {/* <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LivePage" component={LivePage} />
        <Stack.Screen name="ConferencePage" component={ConferencePage} /> */}
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="HomePage" component={HomePage} />
            <Stack.Screen options={{headerShown: false}} name="ConferencePage" component={ConferencePage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

