import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView,
    Image,
    TouchableOpacity,

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import NavigatorView from '../component/AllNavigationView';
import MainRoot from './MainRoot';
import ViewOne from './ViewOne';
import View7 from "./View7";

export default class MainPage extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            renderPlaceholderOnly: 'blank',
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        }
        this.num = 100;


    }

    initFinish = () => {
        this.setState({renderPlaceholderOnly: 'success'});
    };

    _renderPlaceholderView() {
        return (
            <View style={{width: width, height: height, backgroundColor: fontAndClolr.COLORA3}}>
                {this.loadView()}
            </View>
        );
    }

     changeNum = (num) =>{
        this.num = num;
    }


    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            this._renderPlaceholderView();
        }
        return (
            <View style={styles.flex}>
                <NavigatorView title='账单详情'/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>

        );
    }

    _renderRow = (rowData) => {
        console.log('----', rowData);
        if (rowData == '1') {
            return (

                <View style={{marginTop: Pixel.getPixel(91), height: Pixel.getPixel(80)}}>
                    <Text style={{color: "red", fontSize: 20, marginLeft: Pixel.getPixel(15)}}>已拍下</Text>
                    <Text style={{fontSize: 14, marginTop: Pixel.getPixel(7), marginLeft: Pixel.getPixel(15)}}>请尽快和卖家协商价格，待卖家通知后支付定金</Text>
                </View>
            )

        }
        if (rowData == '2') {
            return (
                <View style={{flex: 1, backgroundColor: "#d3d3d3", height: Pixel.getPixel(10)}}></View>
            )
        }
        if (rowData == '3') {

            return (
                <View style={{flex: 1, height: Pixel.getPixel(40)}}>
                    <Text style={{
                        fontSize: 14,
                        color: "#dcdcdc",
                        marginTop: Pixel.getPixel(10),
                        marginLeft: Pixel.getPixel(15)
                    }}>订单号：12312331221</Text>
                    <Text style={{
                        fontSize: 14,
                        color: "#dcdcdc",
                        marginTop: Pixel.getPixel(-17),
                        marginLeft: Pixel.getPixel(180)
                    }}>订单日期：2019/09/09</Text>
                </View>
            )
        }
        if (rowData == '4') {
            return (

                <View style={{flex: 1, height: Pixel.getPixel(105)}}>
                    <Text style={{fontSize: 20, marginLeft: Pixel.getPixel(15)}}>[北京]奔驰M级(进口)2015款M……</Text>
                    <Text style={{
                        fontSize: 12,
                        marginTop: Pixel.getPixel(7),
                        marginLeft: Pixel.getPixel(15)
                    }}>里程:20.59万</Text>
                </View>
            )

        }
        if (rowData == '5') {
            return (
                <View style={{flex: 1, backgroundColor: "#d3d3d3", height: Pixel.getPixel(10)}}></View>
            )
        }
        if (rowData == '6') {

            return (
                <TouchableOpacity onPress={() => {
                    this.toNextPage({
                        name: 'ViewOne',
                        component: ViewOne,
                        params: {
                            name: 'summer',
                            changeNum: this.changeNum
                        }
                    });
                }}>
                    <View style={{flex: 1, height: Pixel.getPixel(40)}}>
                        <Text style={{
                            fontSize: 25,
                            marginTop: Pixel.getPixel(10),
                            marginLeft: Pixel.getPixel(15)
                        }}>采购信息</Text>

                    </View>
                </TouchableOpacity>

            )
        }

        if (rowData == '7') {
            return (
                <View7 number={this.num}/>
            )
        }
        if (rowData == '8') {
            return (
                <View style={{flex: 1, backgroundColor: "#d3d3d3", height: Pixel.getPixel(10)}}></View>
            )
        }
        if (rowData == '9') {

            return (
                <View style={{flex: 1, height: Pixel.getPixel(40)}}>
                    <Text style={{
                        fontSize: 25,
                        marginTop: Pixel.getPixel(10),
                        marginLeft: Pixel.getPixel(15)
                    }}>卖家信息</Text>

                </View>
            )
        }

        if (rowData == '10') {
            return (
                <View style={{flex: 1, height: Pixel.getPixel(110)}}>
                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>姓名</Text>
                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>联系方式</Text>
                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>企业名称</Text>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.toNextPage({
                            name: 'MainRoot',
                            component: MainRoot,
                            params: {
                                name: 'summer'
                            }
                        });
                    }}>
                        <Text style={styles.buttonText}>确认验收</Text>


                    </TouchableOpacity>


                </View>
            )
        }
        else {
            return null;
        }
    };

}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        color: "white"


    },
    button: {
        width: Pixel.getPixel(80),
        height: Pixel.getPixel(40),
        borderRadius: 20,
        backgroundColor: "#05c5c2",
        justifyContent: "center",
        overflow: "hidden",
        marginLeft: Pixel.getPixel(150)
    },


    flex: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img: {
        width: Pixel.getPixel(26),
        height: Pixel.getPixel(26),
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigimg: {
        width: Pixel.getPixel(56),
        height: Pixel.getPixel(56),
    },
    selectedTitleStyle: {
        color: fontAndClolr.COLORB0
    },
    imageStyle: {
        position: 'absolute',
        bottom: Pixel.getPixel(10),
        left: width / 2.0 - 0.5,
        width: 1,
        height: Pixel.getPixel(30),
        backgroundColor: "lightgray",
    },
    outImageStyle: {
        position: 'absolute',
        bottom: Pixel.getPixel(16),
        left: width / 2 - Pixel.getPixel(56) / 2
    }
});