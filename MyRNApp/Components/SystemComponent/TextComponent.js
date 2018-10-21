import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text
}from 'react-native';

export default class TextComponent extends Component{
    render(){

        return <View style={styles.containerStyle}>
           <Text style={styles.textStyle} 
           //ios  的行数
           numberOfLines={0}  
        // 指定字体是否随着给定样式的限制而自动缩放
        adjustsFontSizeToFit={true}

        //控制字体是否要根据系统的字体大小辅助选项来进行缩放
        allowFontScaling = {true}

        //当adjustsFontSizeToFit 开启之后 指定最小的缩放比，可设置为0.01---1.0
           minimumFontScale={0.5}

           //当挂载或者布局出现变化时调用
           onLayout={({nativeEvent:{layout:{x,y,width,height}}})=>{

           }}

           //当文本被点击以后执行此函数
           onPress={()=>{
               alert('点击');
           }}
           onLongPress={()=>{
            alert('长按'); 
           }}

           //决定用户是否可以长按选择文本。以便复制和粘贴
           //设置为false以后onLongPress方法照常响应，只是没有复制粘贴功能，默认是false
           selectable={true}
           >
              中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国
              中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国
              中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国
              中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国
              中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国
           </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    containerStyle:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    textStyle:{
      backgroundColor:'red',
      color:'white',
      width:150,
      height:160,
  fontSize:15,
      //"normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
      fontWeight:"200",
    
    }
});