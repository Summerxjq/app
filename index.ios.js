/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class AppTest extends Component {
    render() {
        return (

            <View style={{ flexWrap:'wrap',flexDirection: 'column',width:375, height: 670, backgroundColor: "silver", marginTop: 0}}>
                <View style={{width:375, height: 80, margin: 0}}>
                    <Text style={{textAlign:'center',fontSize:16,marginTop:45}}>我的
                    </Text>
                </View>
                <View style={{flexDirection: 'row',width: 375, height: 100, backgroundColor: "darkcyan", margin: 1}}>
                    <View style={{width:64,height:64,backgroundColor:"red",margin:15}}>
                        <Image source={require('./image/p1.png', )} style={{width:64,height:64}}/>

                    </View>
                    <Text style={{fontSize: 16, marginTop:20}}>Summer</Text>
                    <Text style={{fontSize: 16,marginTop:40,marginLeft:-62}}>18512345678</Text>
                    <Text style={{fontSize: 16,marginTop:60,marginLeft:-102}}>北京市朝阳区亮马桥路</Text>
                    <View style={{width:30,height:30,backgroundColor:"black",marginLeft:80,marginTop:50}}>
                        <Image source={require('./image/p2.png', )} style={{width:30,height:30}}/>
                    </View>
                </View>
                <View style={{width: 375, height: 100, backgroundColor: "darkcyan", margin: 1}}>
                    <View style={{backgroundColor:'black',width:25,height:25,marginLeft:15,marginTop:15}}>
                        <Image source={require('./image/p3.png', )} style={{width:25,height:25,}}/>
                    </View>
                    <Text style={{marginLeft:45,marginTop:-20}}>账户余额</Text>
                    <View style={{width:25,height:25,marginLeft:15,marginTop:15}}>
                        <Image source={require('./image/p4.png', )} style={{width:25,height:25,}}/>
                    </View>
                    <Text style={{fontSize: 25,marginLeft:43,marginTop:-28}}>888.00</Text>
                    <Text style={{fontSize:14,marginTop:-20,marginLeft:310,color:'white'}}>提现到卡</Text>
                </View>
                <View style={{width: 375, height: 90, backgroundColor: "darkcyan", margin: 1}}>
                    <View style={{backgroundColor:'black',width:25,height:25,marginLeft:15,marginTop:15}}>
                        <Image source={require('./image/p5.png', )} style={{width:25,height:25}}/>
                    </View>
                    <Text style={{marginTop:-20,marginLeft:45}}>未完成订单</Text>
                    <Text style={{marginTop:-20,marginLeft:340}}>3个</Text>
                    <Text style={{marginTop:20,marginLeft:335,color:'white'}}>查看</Text>
                </View>
                <View style={{width: 375, height: 130, backgroundColor: "darkcyan", margin: 1}}>
                    <View style={{backgroundColor:'black',width:25,height:25,marginLeft:15,marginTop:15}}>
                        <Image source={require('./image/p6.png', )} style={{width:25,height:25}}/>
                    </View>
                    <Text style={{marginTop:-20,marginLeft:45}}>银行卡信息</Text>
                    <View style={{backgroundColor:'black',width:25,height:25,marginLeft:335,marginTop:-20}}>
                        <Image source={require('./image/p7.png', )} style={{width:25,height:25}}/>
                    </View>
                    <Text style={{marginTop:40,marginLeft:15}}>工商银行</Text>
                    <Text style={{marginTop:-15,marginLeft:150}}>21312443693425621</Text>
                    <Text style={{marginTop:-16,marginLeft:335,color:'white'}}>备注</Text>
                </View>
                <View style={{width: 375, height: 50, backgroundColor: "darkcyan", margin: 1}}>
                    <Text style={{marginTop:20,marginLeft:15}}>建设银行</Text>
                    <Text style={{marginTop:-15,marginLeft:150}}>21312443693425621</Text>
                    <Text style={{marginTop:-16,marginLeft:335,color:'white'}}>备注</Text>
                </View>
            </View>
        )
    }
}





AppRegistry.registerComponent('AppTest', () => AppTest);
