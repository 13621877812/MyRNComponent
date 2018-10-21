import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView
}from 'react-native';

export default class WebViewComponent extends Component{
    render(){
        return(
            <WebView  
               source = {{uri:'http://www.baidu.com'}}
               style = {{flex:1}}
               //指定HTML5视频是在网页当前位置播放还是使用原生的全屏播放器播放。默认值为false
               //ios
               allowsInlineMediaPlayback={true}

               //是否弹性
               bounces = {true}

               //ios  边框
               contentInset={{top:10,bottom:20,left:20,right:50}}


              //探测网页中某些特殊数据类型，自动生成链接，默认情况下仅允许探测电话号码
              //‘phoneNumber’，‘link’，‘address’ ，‘calendarEvent’，‘none’，‘all’
              //ios 
              dataDetectorTypes ={['phoneNumber','link','address','calendarEvent']}

              //允许为webview发起的请求运行一个自定义处理函数，返回true或false表示是否继续执行响应的请求
              //ios 
              onShouldStartLoadWithRequest = {()=>{
                  return false;
              }}
              
              
            
            />
        );
    }
}