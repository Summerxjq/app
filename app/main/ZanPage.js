/**
 * Created by xujiaqi on 2018/1/11.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ListView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
var op = false;
var os = false;
export default class ZanPage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            isShow1: false,
            isShow2: false,
            isShow3: false,
            isShow4: false,
            isShow5: false,
            isShow6: false,
            MessAge: this.props.message,
            zan: this.props.message.minePraiseList,
            pinglun: '',
            pingluns: this.props.message.mineComments,
        };
        console.log(this.state.pingluns+"-----")
    }

    componentWillReceiveProps(nextProps) {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
     dataSource: ds.cloneWithRows(nextProps.message),
     });
     }
    clickchange = () => {
        this.setState({
            isShow: !this.state.isShow,
        })
    }
    click = (num) => {
        let formData = new FormData();
        formData.append('id', num);
        formData.append('account', 11111111112,);
        fetch('http://10.2.1.92:8080/mine/setPraise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('dianzan', responseData)
                this.setState({
                    zan: responseData.data,
                    renderPlaceholderOnly: 'success'
                });
            }).catch(
            (error) => {
            });
        this.setState({
            isShow1: true,
            isShow2: true,
            isShow: false,
            isShow4: true
        })
    }
    click1 = (data) => {
        this.setState({
            isShow: false,
            isShow5: true
        })
    }
    clickpinglun = (num) => {

        this.setState({
            isShow1: true,
            isShow5:false
        })
        let formData = new FormData();
         formData.append('id',num);
         formData.append('account',11111111112 ,);
         formData.append('content',this.state.pinglun,);
         fetch('http://10.2.1.92:8080/mine/setComments',{
         method: 'POST',
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: formData,
         }).then((response) => response.json())
         .then((responseData) => {
         console.log('pinglun',responseData)
         this.setState({
         pingluns:responseData.data,
         renderPlaceholderOnly:'success'
         });
         }).catch(
         (error)=> {
         });

    }
    click2 = (num) => {
        let formData = new FormData();
        formData.append('id', num);
        formData.append('account', 11111111112,);
        fetch('http://10.2.1.92:8080/mine/deletePraise', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('dianzan', responseData)
                this.setState({
                    zan: responseData.data,
                    renderPlaceholderOnly: 'success'
                });
            }).catch(
            (error) => {
            });
        op = !op
        if (os == false) {
            this.setState({
                isShow1: true,
                isShow2: true,
                isShow: false,
                isShow4: false
            })
        }
        if (os == true) {
            this.setState({
                isShow1: true,
                isShow2: true,
                isShow3: true,
                isShow: false,
                isShow4: false
            })
        }
    }
    clickquxiao = (num) => {
        this.setState({
            isShow5: false,
        })
    }

    render() {
        return (
            <View style={styles.Viewevery}>
                <TouchableOpacity onPress={
                    () => {
                        this.clickchange()
                    }
                }>
                    <Image source={require('../image/消息.png')}
                           resizeMode="stretch"
                           style={styles.xiaoxiview}/>
                </TouchableOpacity>
                {this.state.isShow && (<View style={styles.zanview}>
                    <View>
                        <Image source={require('../image/赞.png')}
                               resizeMode="stretch"
                               style={styles.zanimage}/>
                        <TouchableOpacity onPress={
                            () => {
                                this.click(this.state.MessAge.mine.id)
                            }
                        }>
                            <Text style={styles.dianzan}>赞</Text>

                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={require('../image/评 论.png')}
                               resizeMode="stretch"
                               style={styles.pinglunimage}/>
                        <TouchableOpacity onPress={
                            () => {
                                this.click1(this.state.MessAge.mine.id)
                            }
                        }>
                            <Text style={styles.pinglun}>评论</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={
                        () => {
                            this.click2(this.state.MessAge.mine.id)
                        }
                    }>
                        {this.state.isShow4 && (<Text style={styles.quxiaozan}>取消</Text>)}
                    </TouchableOpacity>
                </View>)}
                <View>

                </View>

                <View style={styles.sanjiaoView}><Image source={require('../image/赞三角.png')}
                                                        resizeMode="stretch"
                                                        style={styles.zansanjiao}/>
                </View>


                <View style={styles.xinview}>
                    <Image source={require('../image/心.png')}
                           resizeMode="stretch"
                           style={styles.xinphoto}/>
                    <Text style={styles.yonghu}>{this.state.zan + ","}</Text>
                </View>
                <View style={styles.pingluntext}>
                    {this.state.pingluns.map((value, index) => {
                        return(<View key={index + 'images1'}><Text style={styles.pinglunyonghu}>{value.nickName}</Text>
                        <Text style={styles.maohao}>{value.content}</Text></View>)
                    })}

                </View>
                {this.state.isShow5 && (
                    <View style={styles.textinput}>
                        <Image source={require('../image/语音.png')}
                               resizeMode="stretch"
                               style={styles.yuyin}/>
                        <TouchableOpacity onPress={
                            () => {
                                this.clickquxiao()
                            }
                        }>
                        <Text style={styles.biaoqing}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={
                            () => {
                                this.clickpinglun(this.state.MessAge.mine.id)
                            }
                        }>
                            <Text style={styles.gengduo}>确定</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.inputview}
                                   placeholder=""
                                   onChangeText={(text) => this.setState({pinglun:text})}
                        />
                    </View>
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputview: {
        width: Pixel.getPixel(250),
        height: Pixel.getPixel(40),
        marginTop: Pixel.getPixel(-36),
        marginLeft: Pixel.getPixel(35),
        borderRadius: Pixel.getPixel(10),
        borderWidth: 1,
        borderColor: 'darkgray',
        backgroundColor:'white'

    },
    gengduo: {
        textAlign: 'center',
        lineHeight: Pixel.getPixel(30),
        width: Pixel.getPixel(40),
        height: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(-30),
        marginLeft: Pixel.getPixel(330),
        borderColor: 'darkgray',
        borderWidth: 1,
        borderRadius: Pixel.getPixel(5),
    },
    biaoqing: {
        textAlign: 'center',
        lineHeight: Pixel.getPixel(30),
        width: Pixel.getPixel(40),
        height: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(-28),
        marginLeft: Pixel.getPixel(290),
        borderColor: 'darkgray',
        borderWidth: 1,
        borderRadius: Pixel.getPixel(5),
    },
    textinput: {
        marginTop: Pixel.getPixel(110),
        width: Pixel.getPixel(375),
        height: Pixel.getPixel(50),
        borderWidth: 1,
        borderColor: 'darkgray',
        backgroundColor:'#F3F5F9'
    },
    quxiaozan: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        width: Pixel.getPixel(40),
        height: Pixel.getPixel(25),
        backgroundColor: 'black',
        marginLeft: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(-18),
    },
    sanjiaoView: {
        width: Pixel.getPixel(30),
        height: Pixel.getPixel(30),
    },
    maohao: {
        marginLeft: Pixel.getPixel(70),
        marginTop: Pixel.getPixel(-17),
        color: '#87AAC9',
    },
    pinglunyonghu: {
        marginLeft: Pixel.getPixel(10),
        color: '#87AAC9',
    },
    pingluntext: {
        width: Pixel.getPixel(350),
        marginLeft: Pixel.getPixel(20),
        backgroundColor: '#F3F5F9',
    },
    yonghu: {
        color: '#87AAC9',
        width: Pixel.getPixel(200),
        height: Pixel.getPixel(25),
        marginTop: Pixel.getPixel(-20),
        marginLeft: Pixel.getPixel(40),
    },
    xinphoto: {
        width: Pixel.getPixel(25),
        height: Pixel.getPixel(25),
        marginTop: Pixel.getPixel(7),
        marginLeft: Pixel.getPixel(10),
    },
    yuyin: {
        width: Pixel.getPixel(25),
        height: Pixel.getPixel(25),
        marginTop: Pixel.getPixel(12),
        marginLeft: Pixel.getPixel(5),
    },
    xinview: {
        width: Pixel.getPixel(350),
        height: Pixel.getPixel(40),
        marginLeft: Pixel.getPixel(20),
        marginTop: Pixel.getPixel(0),
        backgroundColor: '#F3F5F9',
        borderBottomColor: 'darkgray',
        borderBottomWidth: 1
    },
    zansanjiao: {
        width: Pixel.getPixel(30),
        height: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(10),
        marginLeft: Pixel.getPixel(50),
    },
    pinglun: {
        fontSize: 15,
        color: 'white',
        marginLeft: Pixel.getPixel(110),
        marginTop: Pixel.getPixel(-18),
    },
    dianzan: {
        fontSize: 15,
        color: 'white',
        marginLeft: Pixel.getPixel(40),
        marginTop: Pixel.getPixel(-18),
    },
    zanimage: {
        width: Pixel.getPixel(20),
        height: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(10),
    },
    pinglunimage: {
        width: Pixel.getPixel(20),
        height: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(80),
        marginTop: Pixel.getPixel(-20),
    },
    zanview: {
        width: Pixel.getPixel(150),
        height: Pixel.getPixel(40),
        marginLeft: Pixel.getPixel(174),
        marginTop: Pixel.getPixel(-40),
        backgroundColor: 'black',
    },
    xiaoxiview: {
        width: Pixel.getPixel(35),
        height: Pixel.getPixel(30),
        marginTop: Pixel.getPixel(-30),
        marginLeft: Pixel.getPixel(330),
    },
});
