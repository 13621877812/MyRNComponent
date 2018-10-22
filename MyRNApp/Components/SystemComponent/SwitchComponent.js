import React,{Component} from 'react';
import
{
    StyleSheet,
    View,
    Text,
    Switch
  
}from 'react-native';

export default class SwitchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {value:false};
    }
    render(){
        return(
            <View style={styles.containerStyle}>
              <Switch 
              //是否是开启状态
              value={this.state.value} 
              //状态改变时触发 
              onValueChange={(value)=>{
                   this.setState({value:value});
              }} 
              //暂时不知道是什么东西，可能是一个标志性的东西
              testID ={'dddd'} 
             
              //圆圈的颜色
              thumbTintColor = {'red'} 

              //开启时的背景颜色
              onTintColor={'yellow'} 

              //关闭时的Android 的背景颜色   iOS是边框的颜色
              tintColor={'black'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   containerStyle:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   }
});