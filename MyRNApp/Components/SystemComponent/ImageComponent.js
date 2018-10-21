import React,{Component} from 'react';
import{
StyleSheet,
View,
Text,
Image,
ImageBackground,
Dimensions
}from 'react-native';

const screenSize = Dimensions.get('window');

export default class ButtonComponent extends Component{
    render(){
        return(
           <View style={styles.containerStyle}>
                {/* 加载本地RN图片*/}
                {this.loadRNLocalImage()}

                {/* 加载网络图片*/}
                {this.loadNetImage()}

                {/* 加载ios图片*/}
                {this.loadiOSImage()}

                {/* 背景图片组件*/}
                {this.loadComponentImage()}


           </View>
        );
    }
     //加载本地图片
    loadRNLocalImage(){
      return <View style={styles.imageItemStyle}>
          <Image  
                  style={styles.imageStyle}
                  source={require('../../img/game.jpg')}
                  onLayout={()=>{
                      console.log('布局发生改变');
                  }}
                  //加载开始调用
                  onLoadStart={()=>{
                    console.log('开始加载');
                  }}

                  //加载成功完成时调用此函数回调
                  onLoad = {()=>{
                    console.log('加载成功');
                  }}
                  //加载结束，不管成功与否，只要结束都调用此方法
                  onLoadEnd={()=>{
                    console.log('加载结束');
                  }}

                  //决定当前组件和图片尺寸不成比例的时候如何调整图片的大小
                  resizeMode = {'contain'}
          />
          <Text>加载本地RN图片</Text>
      </View>
    }
    //加载网络图片
    loadNetImage(){
      return <View style={styles.imageItemStyle}>
          <Image style={styles.imageStyle}
                 source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
           />
           <Text>加载网络图片</Text>
      </View>
    }
    loadiOSImage(){
        return <View style={styles.imageItemStyle}>
        <Image style={styles.imageStyle}
               source={{uri:'screen'}}
         />
         <Text>加载ios图片</Text>
    </View>
    }
    //背景图片
    loadComponentImage(){
        return <View style={styles.imageItemStyle}>
                <ImageBackground style={styles.imageStyle}
                                 source={{uri:'screen'}}
                        >
                  <Text>背景图片</Text>
                </ImageBackground>
              </View>
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:70
    },
    imageItemStyle:{
     marginLeft:10,
    
     marginBottom:10
    },
    imageStyle:{
       width:100,
       height:100
    }
});