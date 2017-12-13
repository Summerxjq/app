/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    ListView,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Button,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class AppTest extends Component {
    constructor(props){
        super(props);
        this.state = {modalVisible:false};
    }
    setModalVisible(){
        this.setState({modalVisible:true});
    }

    hideModel(){
        this.setState({modalVisible:false});
    }


    render() {

        return(

            <View>

                <View style={{flexDirection:'column'}}>

                    <View style={{width:375,height:75,backgroundColor:"#05c5c2"}}>
                        <Text style={{fontSize:18,color:"white",marginTop:40,marginLeft:150}}>账户管理</Text>
                    </View>
                    <View style={{width:375,height:45,backgroundColor:"#48d1cc"}} >
                        <Text style={{fontSize:15,color:"white",lineHeight:45,marginLeft:20}}>账户号码：43677450036808888</Text>
                    </View>
                    <View style={{width:375,height:130,backgroundColor:"#05c5c2"}} >
                        <Text style={{fontSize:12,color:"white",marginTop:30,marginLeft:150}}>账户总额（元）</Text>
                        <Text style={{fontSize:30,color:"white",marginTop:5,marginLeft:90}}>1,500,000,00</Text>
                    </View>
                    <View style={{flexDirection:'row',width:375,height:60,backgroundColor:"#20b2aa"}}>
                        <View style={{flexDirection:'column',marginLeft:20,marginTop:10}}>
                            <Text style={{color:"white",fontSize:15}}>可用余额(元)</Text>
       [                           <Text style={{color:"white",fontSize:18}}>200,00</Text>
                        </View>
                        <View style={{flexDirection:'column',marginLeft:100,marginTop:10}}>
                            <Text style={{color:"white",fontSize:15}}>冻结余额(元)</Text>
                            <Text style={{color:"white",fontSize:18}}>100,00</Text>
                        </View>
                    </View>
                    <View style={{width:375,height:40,backgroundColor:"#dcdcdc"}}>
                        <TouchableOpacity onPress={()=>{this.setModalVisible()}}>
                            <Text style={{color:"#a9a9a9",marginLeft:20,marginTop:10,color:"black"}}>账户管理</Text>
                        </TouchableOpacity>
                    </View>

                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >

                       <View style={{width:260,height:180,backgroundColor:"white",marginTop:260,marginLeft:55}}>
                           <Text style={{fontSize:20,marginLeft:110,marginTop:20}}>提示</Text>
                           <Text style={{fontSize:15,marginLeft:30,marginTop:10}}>企业服务时间为9：00-19：00</Text>
                           <Text style={{fontSize:15,marginLeft:50,marginTop:10}}>请在企业服务时间内操作</Text>


                       <Text onPress={()=>{this.hideModel()}} style={{fontSize:18,marginLeft:100,marginTop:50,color:"green"}}>知道了</Text>
                       </View>

                </Modal>



                    </View>


            </View>

        );
    }

}


AppRegistry.registerComponent('AppTest', () => AppTest);
