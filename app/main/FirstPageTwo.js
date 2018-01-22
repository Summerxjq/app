/**
 * Created by xujiaqi on 2018/1/4.
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
    ScrollView,
    ListView,
    TouchableHighlight


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
import ShangPin from './ShangPinPage'
var Swiper = require('react-native-swiper');
var i = 0;
let datas=[];
export default class FirstPageTwo extends BaseComponent {
    componentWillUnmount() {
    }

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            renderPlaceholderOnly: 'blank',
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6', '7']),
            goodsList: [],
            typeList: [],
        }
        this.biaoti=[];
    }

    initFinish() {
        this.fetchData();
    }
    fetchData = () => {
        let formData = new FormData();
        formData.append('account', this.state.num,);
        formData.append('accountPassword', this.state.password,);
        fetch('http://10.2.1.92:8080/main/supermarket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('FirstPageTwo', responseData.data)
                this.setState({
                    typeList: responseData.data.typeList,
                    goodsList: responseData.data.goodsList,
                    renderPlaceholderOnly: 'success',
                });
                console.log('+++++',this.state.typeList)
                datas=[];
                this.state.typeList.map((data,index)=>{
                    datas.push({
                        title:data,
                        flag: false
                    })
                    this.setState({
                        Biao:datas
                    })
                })
                console.log('------',this.state.Biao)

            }).catch(
            (error) => {
            });
    }
    renderRow = (rowData, sectionId, rowId) => {
        if (rowData == '1') {
            return (
                <View style={styles.lunboview}>
                    <Image source={require('../image/second.jpeg')}
                           style={styles.photoviews}/>
                </View>
            )
        }
        if (rowData == '2') {
            return (
                <View>
                    {this.state.goodsList.map((value, index) => {
                        return (
                            <View key={index + 'text'}>
                                <View style={styles.zhide}>
                                    <Text style={styles.textview1}>{value.typeName}</Text>
                                </View>
                                <View style={styles.everyview1}>
                                    <ShangPin shangPinData={value.list}/>
                                </View>
                            </View>
                        )
                    })}

                </View>
            )
        }

        else {
            return null;
        }
    }
    change = (value,num) => {
        this.state.goodsList.map((num) => {
            this.setState({
                flags:false
            });

        })
        if (num == 0) {
            var i=0;
            console.log('1111')
            _ListView.scrollTo({y: 120});

        }
        if (num == 1) {
            _ListView.scrollTo({y: 1160});
        }
        if (num == 2) {
            _ListView.scrollTo({y: 1760});
        }
        if (num == 3) {
            _ListView.scrollTo({y: 1920});
        }
        if (num == 4) {
            _ListView.scrollTo({y: 2850});
        }
        if (num == 5) {
            _ListView.scrollTo({y: 3450});
        }
        if (num == 6) {
            _ListView.scrollTo({y: 4270});
        }
    }
    changeTwo = () => {
        if (i == 0) {
            _ScrollView.scrollTo({x: 85})
        }
        if (i == 1) {
            _ScrollView.scrollTo({x: 170})
        }
        if (i == 2) {
            _ScrollView.scrollTo({x: 255})
        }
        if (i == 3) {
            _ScrollView.scrollTo({x: 340})
        }
        if (i == 4) {
            _ScrollView.scrollTo({x: 425})
        }
        if (i == 5) {
            _ScrollView.scrollTo({x: 510})
        }
        i++;
       if(i>6){
           _ScrollView.scrollTo({x: 0})
       }
    }

    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            return null;
        } else {
            return (
                <View style={styles.Maxview}>
                    <View style={styles.bannerview}>
                        <ScrollView ref={(ScrollView) => {
                            _ScrollView = ScrollView;
                        }}
                                    contentContainerStyle={styles.contentContainer}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                        >
                            {this.state.typeList.map((value, index) => {
                                return (
                                    <TouchableOpacity key={index + 'texts'} onPress={() => {
                                        this.change(value,index)
                                    }}>
                                        <Text style={[styles.textview,this.state.flags?{color: 'black'}:{} ]}>{value}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>

                    </View>
                    <TouchableOpacity onPress={() => {
                        this.changeTwo()
                    }}>
                        <View style={styles.shuangjiantou}>
                            <Image source={require('../image/双箭头.png')}
                                   resizeMode="center"
                                   style={styles.jiantou}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.shangpin}>
                        <ListView
                            ref={(ListView) => {
                                _ListView = ListView;
                            }}
                            showsVerticalScrollIndicator={false}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                        />
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    jiantou: {
        marginLeft: Pixel.getPixel(7),
        marginTop: Pixel.getPixel(10),
        height: Pixel.getPixel(30),
        width: Pixel.getPixel(30),
    },
    shuangjiantou: {
        height: Pixel.getPixel(50),
        width: Pixel.getPixel(40),
        marginLeft: Pixel.getPixel(335),
        marginTop: Pixel.getPixel(-50),
        borderLeftColor: 'darkgray',
        borderLeftWidth: 1,
        backgroundColor: 'white'
    },
    everyview2: {
        flex: 1,
        backgroundColor: "white"
    },
    zhide2: {
        height: Pixel.getPixel(50),
        alignItems: 'center',
    },
    textview2: {
        lineHeight: Pixel.getPixel(49),
    },
    zhide: {
        height: Pixel.getPixel(50),
        alignItems: 'center'
    },
    textview1: {
        fontSize: 16,
        lineHeight: Pixel.getPixel(49),
        color: 'red',
        letterSpacing: Pixel.getPixel(15),
    },
    Maxview: {},
    everyview1: {
        flex: 1,
        backgroundColor: "white"
    },
    lunboview: {
        height: Pixel.getPixel(120),
    },
    photoviews: {
        height: Pixel.getPixel(120),
        width: Pixel.getPixel(375),
        resizeMode: "stretch"
    },
    shangpin: {
        flex: 1,
    },
    textview: {
        textAlign: 'center',
        lineHeight: Pixel.getPixel(50),
        width: Pixel.getPixel(85),
        height: Pixel.getPixel(50),
    },
    contentContainer: {
        flexDirection: 'row',

    },
    bannerview: {
        width: Pixel.getPixel(335),
        backgroundColor: 'red',
        height: Pixel.getPixel(50),
        backgroundColor: "white",
    },
    Maxview: {
        flex: 1
    },

});
