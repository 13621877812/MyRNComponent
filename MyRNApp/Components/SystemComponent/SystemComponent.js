import React,{Component} from 'react';
import {
 StyleSheet,
 View,
 Text,
 FlatList,
 SectionList,
 Image,
 Alert,
 Platform
}from 'react-native';
import MySectionList from '../CustomComponent/SectionList'




//数据源
const datas = [
 {
   key:'Android,iOS通用',
   platform:'all',
   usability:true,
   data:[
       {title:'View'},
       {title:'Text'},
       {title:'Button'},
       {title:'Image'},
       {title:'TextInput'},
       {title:'ScrollView'},
       {title:'FlatList'},
       {title:'WebView'},
       {title:'ActivityIndicator'},
       {title:'Clipboard'},
       {title:'Modal'},
       {title:'Picker'},
       {title:'Slider'},
       {title:'Switch'}
   ]
 },{
    key:'iOS专用',
    platform:'iOS',
    usability:Platform.OS === 'ios',
    data:[
        {title:'DatePickerIOS'},
        {title:'MaskViewIOS'},
        {title:'NavigatorIOS'},
        {title:'PickerIOS'},
        {title:'ProgressViewIOS'},
        {title:'SegmentedControlIOS'},
        {title:'TabBarIOS'}
    ]
 },{
    key:'iOS专用',
    platform:'iOS',
    usability:Platform.OS === 'android',
    data:[
        {title:'DatePickerIOS'},
        {title:'MaskViewIOS'},
        {title:'NavigatorIOS'},
        {title:'PickerIOS'},
        {title:'ProgressViewIOS'},
        {title:'SegmentedControlIOS'},
        {title:'TabBarIOS'}
    ]
 }
];


//系统组件列表
export default class SystemComponent extends Component{
    render(){
      return <MySectionList 
                   data = {datas} 
                   selectItem = {this.selectItem.bind(this)}
                   />
    }
    selectItem(params,platform,usability){
        let component = null;

        if (usability) {
            //组件在该平台上可用
            Alert.alert('提示','该组件系统上使用');
            return;
        }else if (platform === 'iOS') {
            //组件在ios平台上不可用
            Alert.alert('提示','该组件只能在iOS系统上使用');
            return;
        }else if (platform === 'Android' ) {
            Alert.alert('提示','该组件只能在Android系统上使用');
            return;
        }

        switch (params) {
            case 'FlatList':
                component = 'FlatListPage'
                break;
        
            default:
                component = 'ImagePage'
                break;
        }
        
        this.params.navigation.navigate(component);

    }

}