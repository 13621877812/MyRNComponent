import React,{Component} from 'react';
import {
  Alert,
  Platform,
  View
}from 'react-native';
import MySectionList from '../CustomComponent/SectionList';


//数据列表
const datas = [
{
    key:'Android,iOS通用',
    platform:'all',
    usability:true,
    data:[
      {title:'Alert'},
      {title:'Share'},
      {title:'Animated'},
      {title:'AppState'},
      {title:'Dimensions'},
      {title:'AsyncStorage'},
      {title:'StyleSheet'},
      {title:'Timer'},

      {title:'Linking'},
      {title:'LayoutAnimation'},
      {title:'NetInfo'},
      {title:'PixelRatio'},
      {title:'Vibration'}

    ]
},
{
    key:'iOS专用',
    platform:'iOS',
    usability:Platform.OS === 'ios',
    data:[
        {title:'ActionSheetIOS'},
        {title:'AlertIOS'},
        {title:'AppStateIOS'},
        {title:'ImagePickerIOSAPI'}
    ]

},
{
    key:'Android',
    platform:'Android',
    usability:Platform.OS === 'android',
    data:[
        {title:'BackAndroid'},
        {title:'ToastAndroid'}
    ]
}
];

// 系统API
export default class SystemAPIComponent extends Component{
    render(){
        return <MySectionList data = {datas} selectItem={this.selectItem.bind(this)}/>
    }
    selectItem(params){
      alert(params);
      this.props.navigation.navigate(params);
    }
   
}

