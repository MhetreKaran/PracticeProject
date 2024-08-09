import { NavigationContainer, useNavigation} from '@react-navigation/native';
import React from "react";
import { Button, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LivePage} from './src/pages/LivePage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LivePage" component={LivePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomePage(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1,alignItems: 'center',justifyContent: 'space-around'}}>
            <Button title="Start a live" onPress={()=>{navigation.navigate('LivePage',{isHost:true})}}/>
            <Button title="Watch a live" onPress={()=>{navigation.navigate('LivePage',{isHost:false})}}/>
        </View>
    )
}