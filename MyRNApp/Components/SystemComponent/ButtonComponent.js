import React,{Component} from 'react';
import{
StyleSheet,
View,
Button
}from 'react-native';

export default class ButtonComponent extends Component{
    render(){
        return(
           <View style={styles.containerStyle}>
               <Button  
                   //按钮的标题
                    title= '按钮，可以点击'
                    
                    //用于给残障人士显示的文本(譬如软件读屏器可以读到的内容)
                    accessibilityLabel ={'按钮，可以点击'}

                    //文本的颜色（ios） 或是按钮的背景颜色（android）
                    color = 'red'
                    
                    //设置为true时，按钮不可点击
                    disabled = {false}

                    onPress={()=>{
                        alert('按钮被点击');
                    }}

               //不起作用，button  无法设置样式
                 style = {styles.buttonStyle}
               />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    },
    buttonStyle:{
      backgroundColor:'blue',
      borderWidth:1,
      borderColor:'blue',

    }
});