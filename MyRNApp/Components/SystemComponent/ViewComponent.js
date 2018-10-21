import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text
}from 'react-native';

export default class ViewComponent extends Component{
    render(){
        return <View style={styles.container} >
                  <View  style={styles.innerStyle}
                      //设置当用户与此元素交互时，‘读取器’(对视力有障碍的人的辅助功能),阅读文字
                      accessibilityLabel = {'读屏器文字'}
                      
                      //当属性为true时，表示此时图启用了无障碍功能元素，默认情况下，所有可触摸元素都是无障碍功能元素
                      accessible = {true}

                      //当accessible为true时，如果用户对一个已选中的无障碍元素做了一个双击手势时，系统会调用此函数
                      onAccessibilityTap={()=>{
                          alert('123')
                      }}

                      //当组件挂载或布局变化时调用
                      onLayout = {({nativeEvent:{layout:{x,y,width,height}}})=>{
                           alert('view加载完成：' + '\n' + 'x:' + x + 'y:' + y + ' ' + 'width' + width + '  ' + 'height' + height);
                      }}

                      //当accessible为true时，如果用户做了一个双指轻触（magic tap）手势，系统会调用此函数
                      onMagicTap={()=>{

                      }}
                     />
                

              </View>
        
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'green'
    },
    innerStyle:{
      width:150,
      height:100,
      backgroundColor:'blue',
      borderColor:'red',
      borderWidth:5,
      //dashed dot  solid
      borderStyle:'dashed',
      opacity:0.8,
      //visible  hidden
      overflow:'visible',
      
      //高度设置为z轴，可以产生立体效果
       elevation:100,
       borderTopRightRadius:30
    }

});