import React, {Component} from 'react';
import {
   StyleSheet,
   SectionList,
   View,
   Text,
   Image,
   TouchableHighlight
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
              renderSectionHeader = {this.renderSectionHeader}
              ItemSeparatorComponent = {this.ItemSeparatorComponent}
             />
            </View>

        )
    }

    //cell
    renderItem(info){
     return(
       <TouchableHighlight>
          <Text>ddddd</Text>

       </TouchableHighlight>

     )
    }

    //头部
    renderSectionHeader(info){
        return (
            <View>
                 <Text>ddddd</Text>
            </View>
        )
    }

    //分割线
    ItemSeparatorComponent(){
     return (
         <View>
            <Text>ddddd</Text>
         </View>
     )
    }







}
