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
import ViewOne from './ViewOne'
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
            selectNum: '-1',
            renderPlaceholderOnly: 'blank',
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
        }
        this.num = '请输入客户状态';


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

    changeNum = (num, select) =>{
        this.num = num;
        this.state.selectNum  = select;
    }


    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            this._renderPlaceholderView();
        }
        return (
            <View style={styles.flex}>
                <NavigatorView title='客户信息'/>
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

                    <View style={{flex: 1, height: Pixel.getPixel(40),marginTop: Pixel.getPixel(60)}}>
                        <Text style={{
                            fontSize: 25,
                            marginTop: Pixel.getPixel(10),
                            marginLeft: Pixel.getPixel(15)
                        }}>基本信息</Text>

                    </View>


            )
        }

        if (rowData == '3') {
            return (
                <View style={{flex: 1, height: Pixel.getPixel(90)}}>

                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>客户姓名</Text>


                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>当前客户状态</Text>

                    <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>信息来源</Text>
                    <Text style={{
                        marginTop: Pixel.getPixel(-60),
                        marginLeft: Pixel.getPixel(260),
                    }}>summer</Text>
                    <TouchableOpacity onPress={() => {
                        this.toNextPage({
                            name: 'ViewOne',
                            component: ViewOne,
                            params: {
                                selectNum: this.state.selectNum,
                                name: 'summer',
                                changeNum: this.changeNum
                            }
                        });
                    }}>
                        <Text style={{marginTop: Pixel.getPixel(7), marginLeft: Pixel.getPixel(260),color:"darkgrey"}}>{this.num}</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop: Pixel.getPixel(10), marginLeft: Pixel.getPixel(260),color:"darkgrey"}}>请选择客户来源</Text>
                </View>
            )
        }
        if (rowData == '4') {
            return (
                <View style={{flex: 1, backgroundColor: "#d3d3d3", height: Pixel.getPixel(10)}}></View>
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