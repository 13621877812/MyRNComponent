import React,{Component} from 'react';
import
{
    StyleSheet,
    View,
    Text,
    Slider,
    ScrollView,
    TextInput,
    Dimensions
}from 'react-native';
const screenSize = Dimensions.get('window');
export default class SliderComponent extends Component{
    constructor(props){
       super(props);

       this.state = {
           sliderValue:20
       };
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <ScrollView style={styles.scrollStyle}
                  contentContainerStyle={styles.contentStyle}
                >
                   <Slider 
                        style={styles.sliderStyle}
                        
                        //如果为true，用户就不能移动滑块。默认为false
                        disabled={false}

                        //给轨道设置一张背景图。只支持静态图片。图片最中央的像素会被平铺直至填满轨道
                        //trackImage = {require('')}

                        //滑块右侧轨道的颜色。默认为一个蓝色的渐变色
                        //maximumTrackTintColor ={'gray'}

                        //滑块的最小值(当滑块到最左端时表示的值) 默认为 0
                        minimumValue ={0}

                        //滑块的最大值（当滑块到最右端表示的值）默认为1
                        maximumValue ={100}

                        //在用户滑动滑块的过程中不断回调此函数
                        onValueChange={(value)=>{
                            this.setState({sliderValue:value})
                        }}

                        //用户结束滑动块时调用此函数
                        onSlidingComplete ={(value)=>{

                        }}

                        thumbTintColor = {'yellow'}

                   />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    scrollStyle:{
        width:screenSize.width,
        height:screenSize.height,
        
    },
    contentStyle:{
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'green'
    },
    sliderStyle:{
       width:200,
       height:40,
       marginTop:40 
    },
    textStyle:{
        fontSize:18,
        color:'blue'
    }
});