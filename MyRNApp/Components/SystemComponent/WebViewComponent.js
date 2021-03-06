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
 
              
              //iOS
              scrollEnabled = {true}
 
             //指定是否开启DOM本地存储
             //Android
             domStorageEnabled = {true}
 
             //仅限Android平台。
             //Android
             javaScriptEnabled = {true}
 
             //指定混合内容模式。即WebView是否应该允许安全链接(https) 页面中加载非安全链接(http)的内容
             //('never','always','compatibility')
             //Android
             mixedContentMode = {'compatibility'}
 
             //用于控制页面上的表单是否启用自动保存/自动补全功能
             //Android
             saveFormDataDisabled={true}
 
 
             //为WebView设置user-agent字符串标识。这一字符串也可以在原生端用WebViewConfig来设置，但js端
             //Android
             userAgent = {''}
             
             automaticallyAdjustContentInsets ={true}
 
             //在网页加载完成之后，还可以主动调用此方法（以ref形式调用）继续给WebView注入JS代码。注入后立即执行
             injectJavaScript={()=>{
                 alert('注入js');
             }}
 
             //设置在网页加载之前注入的一段js代码
             injectedJavaScript={'一段注入的js代码'}
 
             //设置页面中的HTML5音视频是否需要在用户点击后再开始播放。默认值为true
             mediaPlaybackRequiresUserAction  = {true}
 
      
             //开始加载
             onLoadStart = {()=>{
                 alert('开始加载');
             }}
             //加载成功
             onLoad = {()=>{
                alert('加载成功');
             }}
             
             onLoadEnd={()=>{
                 alert('加载结束');
             }}
 
             //加载失败
             onError = {()=>{
                 alert('加载失败');
             }}
 
             //在WebView内容的网页中调用window.postMessage方法时可以出发此属性对应的函数，从而实现网页和RN之间的数据交互。
             //设置此属性的同时会在webView中注入一个postMessage的全局函数并覆盖可能已经存在的同名实现
             onMessage = {()=>{
                 alert('收到消息');
             }}
 
             onNavigationStateChange={()=>{
 
             }}
 
             //设置一个函数，返回一个视图用于显示错误
             renderError = {()=>{
                 return <Text>
                     错误
                 </Text>
             }}
 
             //设置一个函数，返回一个加载指示器
             renderLoading = {()=>{
                 return <View/>
             }}
 
 
             //设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
             scalesPageToFit ={true}
 
             //强制WebView在第一次加载时先显示loading视图。默认为true
             startInLoadingState = {true}
              
            
            />
        );
    }
}

