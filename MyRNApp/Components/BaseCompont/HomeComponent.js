import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
}from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    TabBarTop
} from 'react-navigation';

//tabbar 上的ViewController
import SystemComponent from '../SystemComponent/SystemComponent';
import SystemAPIComponent from '../SystemAPI/SystemAPIComponent';
import SystemLibrary from '../SystemLibrary/SystemLibrary';
import ThirdComponent from '../ThirdComponent/ThirdComponent';
import OtherComponent from '../UtilityTools/OtherComponent';

//tabBarIcon
const systemComponentNormal = require('../../img/Tabbar/systemComponent.png');
const systemComponentOn = require('../../img/Tabbar/systemCompont_on.png');
const systemApiNormal = require('../../img/Tabbar/systemApi.png');
const systemApiOn = require('../../img/Tabbar/systemApi_on.png');
const systemLibraryNormal = require('../../img/Tabbar/systemLibrary.png');
const systemLibraryOn = require('../../img/Tabbar/systemLibrary_on.png');
const threeThirdNormal = require('../../img/Tabbar/threeThird.png');
const threeThirdOn = require('../../img/Tabbar/threeThird_on.png');
const otherNormal = require('../../img/Tabbar/other.png');
const otherOn = require('../../img/Tabbar/other_on.png');



//navigation 组件

import ViewComponent from '../SystemComponent/ViewComponent';
import TextComponent from '../SystemComponent/TextComponent';
import ButtonComponent from '../SystemComponent/ButtonComponent';
import ImageComponent from '../SystemComponent/ImageComponent';
import TextInputComponent from '../SystemComponent/TextInputComponent';
import WebViewComponent from '../SystemComponent/WebViewComponent';
import ModalComponent from '../SystemComponent/ModalComponent';
import PickerComponent from '../SystemComponent/PickerComponent';
import SwitchComponent from '../SystemComponent/SwitchComponent';
import SliderComponent from '../SystemComponent/SliderComponent';

//tabBar 路由配置
const TabBarRouteConfig = {
    SystemComponent:{
        screen:SystemComponent,
        navigationOptions:{
            headerTitle:'系统组件',
            tabBarLabel:'系统组件',
            tabBarIcon:({tintColor,focused})=>(
                <Image 
                source={focused? systemComponentOn:systemComponentNormal}
                style={styles.tabBarIconStyle}
                />
            )
        }
    },
    SystemAPI:{
        screen:SystemAPIComponent,
        navigationOptions:{
            headerTitle:'系统API',
            tabBarLabel:'系统API',
            tabBarIcon:({tintColor,focused})=>(
                <Image
                 source ={focused? systemApiOn:systemApiNormal}
                 style={styles.tabBarIconStyle}
                />
            )
        }
    },
    SystemLibrary:{
        screen:SystemLibrary,
        navigationOptions:{
            headerTitle:'系统包',
            tabBarLabel:'系统包',
            tabBarIcon:({tintColor,focused})=>(
                <Image  source={focused? systemLibraryOn:systemLibraryNormal }
                   style={styles.tabBarIconStyle}
                />
            )
        }
    },
    ThirdComponent:{
        screen:OtherComponent,
        navigationOptions:{
            headerTitle:'第三方',
            tabBarLabel:'第三方',
            tabBarIcon:({tintColor,focused})=>(
             <Image source = { focused? threeThirdOn:threeThirdNormal} style={styles.tabBarIconStyle}/>
            )
        }
    },
    UtilityTools:{
        screen:OtherComponent,
        navigationOptions:{
            headerTitle:'其他',
            tabBarLabel:'其他',
            tabBarIcon:({focused})=>(
                <Image  source={focused? otherOn:otherNormal} style={styles.tabBarIconStyle}/>
            )
        }

      
    }
};
//
const TabBarNavigatorConfig = {
    initialRouteName:'SystemAPI',
    swipeEnabled:true,
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    tabBarOptions:{},
    lazy:true
  }

const TabBar = TabNavigator(TabBarRouteConfig, TabBarNavigatorConfig);



const StackNavigationConfig = {
   Tab:{
       screen:TabBar
    },
    View:{
        screen:ViewComponent,
        navigationOptions:{
            headerTitle:'View'
        }
    },
    Text:{
        screen:TextComponent,
        navigationOptions:{
            headerTitle:'Text'
        }
    },
    Button:{
        screen:ButtonComponent,
        navigationOptions:{
            headerTitle:'Button'
        }
    },
    Image:{
        screen:ImageComponent,
        navigationOptions:{
            headerTitle:'Image'
        }
    },
    TextInput:{
        screen:TextInputComponent,
        navigationOptions:{
            headerTitle:'TextInput'
        }
    },
    WebView:{
        screen:WebViewComponent,
        navigationOptions:{
            headerTitle:'WebView'
        }
    },
    Modal:{
       screen:ModalComponent,
       navigationOptions:{
          headerTitle:'Modal'
       }
    },
    Picker:{
        screen:PickerComponent,
        navigationOptions:{
            headerTitle : 'Picker'
        }
    },
    Switch:{
        screen:SwitchComponent,
        navigationOptions:{
            headerTitle:'Switch'
        }
    },
    Slider:{
        screen:SliderComponent,
        navigationOptions:{
            headerTitle:'Slider'
        }
    }

   
};

const Navi = StackNavigator(StackNavigationConfig);
export default Navi;




//底部导航和上面导航


const styles = StyleSheet.create({
    tabBarIconStyle:{
        width:20,
        height:20
    }
})

