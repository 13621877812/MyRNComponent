import React ,{Component} from 'react';
import {
  StyleSheet,  
  View,
  Text,
  Picker,
  TextInput,
  Platform
}from 'react-native';



const datas = [
  '北京市(京)',
  '天津市(津)',
  '上海市(沪)',
  '重庆市(渝)',
  '河北省(冀)',
  '河南省(豫)',
  '云南省(云)',
  '辽宁省(辽)',
  '黑龙江省(黑)',
  '湖南省(湘)',
  '安徽省(皖)',
  '山东省(鲁)',
  '新疆维吾尔(新)',
  '江苏省(苏)',
  '浙江省(浙)',
  '江西省(赣)',
  '湖北省(鄂)',
  '广西壮族(桂)',
  '甘肃省(甘)',
  '山西省(晋)',
  '内蒙古(蒙)',
  '陕西省(陕)',
  '吉林省(吉)',
  '福建省(闽)',
  '贵州省(贵)',
  '广东省(粤)',
  '青海省(青)',
  '西藏(藏)',
  '四川省(川)',
  '宁夏回族(宁)',
  '海南省(琼)',
  '台湾省(台)',
  '香港特别行政区',
  '澳门特别行政区'
];

export default class PickerComponent extends Component{
    constructor(props){
        super(props);

        let newDatas = [];
        for (let index = 0; index < datas.length; index++) {
         
            newDatas.push({key:'第'+index+'行',value:datas[index]})
        }

        this.state={
            selected:'点击展开菜单',
            selectIndex:0,
            pickerData:newDatas,
            androidPickerMode:'dialog'
        }
    }
    
    render(){
        let picker = Platform.OS === 'ios'? this.getPickerForIOS() : this.getPickerForAndroid();
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                  选中了第 '{this.state.selectIndex}'个item,选中了：{datas[this.state.selectIndex]}
                </Text>
                <View style={{flexDirection:'row',height:40,justifyContent:'center',alignItems:'center',marginTop:20}}>
                      <Text style={styles.textStyle}>
                         选中第
                      </Text>
                      <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        value = {'  '}

                        //defaultValue = {'0'}
                        onChangeText = {(value)=>{
                            //安卓就是操蛋，不这样设置竟然不能删除输入框里面的内容
                            if (Platform.OS === 'android') {
                                this.setState({selectIndex:value})
                            }

                        
                            //更新状态
                            if (parseInt(value) >= 0 && parseInt(value) < this.state.pickerData.length) {
                     
                                   let selectValue = this.state.pickerData[parseInt(value)].key;
                                   this.setState({
                                     selected:selectValue,
                                     selectIndex:parseInt(value)
                                    })
                            }
                        }}/>
                        <Text style={styles.textStyle}>行</Text>

                </View>
                {picker}
            </View>
        );
    }
    //获取iOS Picker
    getPickerForIOS(){
       return <Picker 
         //样式
         style={styles.pickerStyle}
         
         //某一项被选中时执行此回调
         //itemValue：被选中项的value属性  itemPosition：被选中项在picker中索引位置
         onValueChange={(itemValue,itemPosition)=>{
             this.setState({
                 selected:itemValue,
                 selectIndex:itemPosition
             })
         }}

         //默认选中的值。可以是字符串或整数
         selectedValue={this.state.selected}

         //指定应用在每项标签上的样式(限iOS 系统)
         itemStyle = {styles.pickerItemStyle}



       >

         {this.getPickItems()}

       </Picker>
    }
    //获得pickItem
    getPickItems(){
        let items =[];
        for (let index = 0; index < this.state.pickerData.length; index++) {
           let dic = this.state.pickerData[index];
           items.push(<Picker.Item   label={dic.value} value={dic.key} key={index}/>)
        }
        return items;
    }
    getPickerForAndroid(){

    }


}

const styles = StyleSheet.create({
   containerStyle:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
   textStyle:{
     fontSize:18,
     color:'gray'
   },
   textInputStyle:{
       width:30,
       height:40,
       borderWidth:1,
       borderColor:'#d8d8d8',
       textAlign:'center'
   },
   pickerStyle:{
     width:'100%',
     height:200,
     backgroundColor:'red',
     marginTop:100
   },
   pickerItemStyle:{
       fontSize:14,
       color:'blue'
   }
});
