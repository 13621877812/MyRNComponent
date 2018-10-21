/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import {
  AppRegistry
} from 'react-native';
import App from './App';

AppRegistry.registerComponent('MyRNApp', () => App);

// import React,{Component} from 'react';
// import {
//   View,
//   Text,
//   AppRegistry,
//   SectionList,
//   FlatList,TouchableHighlight
// }from 'react-native';



// class testComponent extends Component{
//   render(){
//    let datas = [{title1:'标题',data:[{name:'张三丰',age:1},{name:'张三丰',age:3},{name:'张三丰',age:2}]}];

//     return(
//       <SectionList
//         sections = {datas}
//         renderItem = {({item}) =>   <TouchableHighlight><View><Text>{item.name}</Text><Text>{item.age}</Text></View></TouchableHighlight>  }
//         renderSectionHeader = {({section}) => (<Text style ={{fontSize:30,color:'red'}}>{section.title1}</Text>)}
//         ItemSeparatorComponent = {() => <View style={{backgroundColor:'red',height:2}}/>}
        
//       />
//     );
//   }
    

  


// }

// AppRegistry.registerComponent('MyRNApp', () => testComponent);