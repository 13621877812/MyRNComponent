import React, {Component} from 'react';
import {
StyleSheet,
View,
Modal,
Text,
Button
}from 'react-native';


export default class ModalComponent extends Component{
   constructor(props){
       super(props);
       this.state = {modalVisible:false};
   }
   
    setModelVsible(visible){
      this.setState({modalVisible:visible})
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <Modal  style={{backgroundColor:'green'}}
                      //弹出动画类型 ‘none’ 'slide' 'fade'
                      animated = {'slide'}

                      //modal页面消失的时候调用(经测试好像没用)
                      onRequestClose = {()=>{
                          alert('modal消失');
                      }}

                      //modal页面显示以后调用
                      onShow = {()=>{
                          alert('modal显示');
                      }}

                      onDismiss={()=>{
                        alert('modal消失');
                      }}
                      //modal背景视图是否透明
                      transparent = {false}

                     //显示或隐藏modal
                     visible={this.state.modalVisible}

                >  

                <View  style={styles.containerStyle}> 
                  <Button  
                    title='返回'
                    onPress = {()=>{
                        this.setModelVsible(!this.state.modalVisible);
                    }}
                  />
                </View>
                </Modal>
                <Button  title='显示modal' onPress={()=>{this.setModelVsible(true)}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    }

});