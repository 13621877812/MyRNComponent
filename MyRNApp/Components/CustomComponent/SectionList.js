import React, {Component} from 'react';
import {
   StyleSheet,
   SectionList,
   View,
   Text,
   Image,
   TouchableHighlight,
   AlertIOS
}from 'react-native';

import PropTypes from 'prop-types';
  
export default class SectionListComponent extends Component{
    constructor(props){
        super(props);
    }

    //默认属性
    static defaultProps = {
       data:[],
       selectItem:(()=>{}),
       keyExtractor:((item,index)=>String(index))
    };

    //属性类型
    static propTypes = {
        //属性必须是数组
        data:PropTypes.array,

        //属性必须是函数
        selectItem:PropTypes.func
    }


    render(){
       
        return(
            <View >
             <SectionList
              sections = {this.props.data}
              keyExtractor={this.props.keyExtractor}
              renderItem = {(item)=>this.renderItem(item)}
              renderSectionHeader = {({section}) => this.renderSectionHeader(section)}
              ItemSeparatorComponent = {this.ItemSeparatorComponent}
             />
            </View>

        )
    }

    //cell
    renderItem(item){

        //renderItem = {(item)=>this.renderItem(item)}  此时item 是 {item:{age=1,name = 'dd},index=1}
        //renderItem = {({item})=>this.renderItem(item)}  此时item 是 {age=1,name = 'dd}  从第一个看出这里必须是item{({item})=>
        //可以看下 section  和 item 的传值方式  做对比
     return(
       <TouchableHighlight underlayColor = {'#e8e8e8'} onPress = {()=>{this.props.selectItem(item.item.title)}}>
         <View style = {styles.cellStyle}>
            <Text style={styles.cellText}>{item.item.title}</Text>
            <Image style={styles.imageStyle} source = {require('../../img/arrow.png')}/>
         </View>
       </TouchableHighlight>

     )
    }

    //头部
    renderSectionHeader(section){
        return (
            <View style={styles.sectionHeaderContainerStyle}>
                 <Text style={styles.sectionStyle}>{section.key}</Text>
            </View>
        )
    }

    //分割线
    ItemSeparatorComponent(){
     return (
         <View style={styles.itemSeparatorStyle}/>
     );
    }







}

const styles = StyleSheet.create({
  cellStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

    height:44,
    paddingLeft:10,

  },
  cellText:{
     fontSize:14,
     color:'black'
  },
  imageStyle:{
    width:20,
    height:20,
    marginRight:8
  },
  sectionHeaderContainerStyle:{
    height:30,
    backgroundColor:'#d8d8d8',
    justifyContent:'center'
  },
  sectionStyle:{
     fontSize:16,
     color:'#CD5C5C' 
  },
  itemSeparatorStyle:{
      height:0.5,
      backgroundColor:'#d8d8d8'
  }



});