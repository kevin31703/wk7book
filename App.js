import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';
import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';
// import Animated from 'react-native-reanimated';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image,Text, } from 'react-native';
import { Tile } from 'react-native-elements';

const Drawer = createDrawerNavigator();

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import MybookList from "./src/components/MybookList";
import Bottom from "./src/components/Bottom";

const HomeStack = () => {
  return (
    <View>
      <Header />
      <MybookList />
      <Bottom />
    </View>
  );
};
const Mybook = () => {
  return (
    <View>
      <Header />

      <AlbumList />
      <Bottom />
    </View>
  );
};
const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop: -48,}} {...rest}>
      <View style={{flexDirection:"row"}}>
        <View>
      <Tile
        imageSrc={{ uri: "https://github.com/kevin31703/wk4insteemo/blob/master/img/head5.png?raw=true"}}
        imageContainerStyle={{height:80, width:80, }}
        containerStyle={{
          width:300,
          height:240,
          paddingLeft:15,
          paddingTop:90,
          backgroundColor:"#00b49f",
        }}
        featured
      />
      <View>
      <Text style={{         
        fontSize:14,
        marginLeft:20,
        marginTop:-35,
        color:"#ffffff", }}>teemoisthebest2020@gmail.com</Text>
        <Text style={{       
        fontSize:16,
        marginLeft:19,
        marginTop:-40,
        color:"#ffffff",
        fontWeight:"500"}}>GamexHCl</Text>
          </View>
         </View>

      <View style={{height:240,width:48,backgroundColor:"#00b49f"}}>
        <Image 
                  source={{
                      uri: "https://github.com/kevin31703/inspic/blob/master/image/drawable-xhdpi/btn_down_arrow.png?raw=true"
                  }}
                  style={{        
                    width:33,
                    height:33,
                    marginTop:185,
                    left:-50,}}
                  />
      </View>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerStyle={{ width: 290,}}
        drawerContentOptions={{
          activeBackgroundColor: '#00b49f',
          activeTintColor:'#fff',
          itemStyle: { marginLeft: 0, marginRight: 0 },
          labelStyle: { fontSize: 16 },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <Image 
                source={{
                    uri: "https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/icon_bottomnav_home.png?raw=true"
                }}
                style={{ width:28, height:28, marginLeft:15, marginTop:8,  marginBottom:5,}}
                />
              ),            
            }
          }
          />
        <Drawer.Screen 
          name="My Book" 
          component={Mybook} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require("./image/drawable-xhdpi/6.png")}
                  style={{width:28, height:28, marginLeft:15, marginTop:8,  marginBottom:5,tintColor:tintColor}}
                />
              ),            
            }
          }
        />    
        <Drawer.Screen 
          name="Favorites" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={{
                    uri:"https://github.com/kevin31703/inspic/blob/master/image/drawable-xxxhdpi/icon_bottomnav_favorites.png?raw=true"
                  }}
                  style={{width:28, height:28, marginLeft:15, marginTop:8,  marginBottom:5,}}
                />
              ),            
            }
          }
        />  
         <Drawer.Screen 
          name="Settings" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={{
                    uri:"https://github.com/kevin31703/inspic/blob/master/image/drawable-xhdpi/icon_drawer_setting.png?raw=true"
                  }}
                  style={{width:28, height:28, marginLeft:15, marginTop:8,  marginBottom:5,}}
                />
              ),            
            }
          }
        />  
                 <Drawer.Screen 
          name="About us" 
          component={HomeStack} 
          options={
            {
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={{
                    uri:"https://github.com/kevin31703/inspic/blob/master/image/drawable-xhdpi/icon_drawer_aboutus.png?raw=true"
                  }}
                  style={{width:28, height:28, marginLeft:15, marginTop:8,  marginBottom:5,}}
                />
              ),            
            }
          }
        /> 
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
export default App;