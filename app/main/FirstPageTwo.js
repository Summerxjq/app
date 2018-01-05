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
import ShangPin from './ShangPinPage'
var Swiper = require('react-native-swiper');

export default class FirstPageTwo extends BaseComponent {
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
            dataSource: ds.cloneWithRows(['1','2','3','4','5','6','7']),
        }
    }
    renderRow = (rowData, sectionId, rowId) => {
        if(rowData=='1'){
            return(
                <View style={styles.lunboview}>
                    <Image source={require('../image/second.jpeg')}
                           style={styles.photoviews}/>

                </View>
            )
        }
        if(rowData=='2'){
            return(
                <View style={styles.zhide}>
                    <Text style={styles.textview1}>值得囤</Text>
                </View>
            )
        }
        if(rowData=='3'){
            return(
                <View style={styles.everyview1}>
                    <ShangPin/>
                </View>
            )
        }
        if(rowData=='4'){
            return(
                <View style={styles.zhide2}>
                    <Text style={styles.textview2}>米面粮油</Text>
                </View>
            )
        }
        if(rowData=='5'){
            return(
                <View style={styles.everyview2}>
                    <ShangPin/>
                </View>
            )
        }
        if(rowData=='6'){
            return(
                <View style={styles.zhide2}>
                    <Text style={styles.textview2}>牛奶水饮</Text>
                </View>
            )
        }
        if(rowData=='7'){
            return(
                <View style={styles.everyview2}>
                    <ShangPin/>
                </View>
            )
        }
        else {
            return null;
        }
    }
    render() {

        return (
            <View style={styles.Maxview}>
                <View style={styles.bannerview}>
                    <ScrollView contentContainerStyle={styles.contentContainer}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                        <Text style={styles.textview}>值得囤</Text>
                        <Text style={styles.textview}>米面粮油</Text>
                        <Text style={styles.textview}>牛奶水饮</Text>
                        <Text style={styles.textview}>中外美酒</Text>
                        <Text style={styles.textview}>护肤彩妆</Text>
                        <Text style={styles.textview}>时令生鲜</Text>
                        <Text style={styles.textview}>家居生活</Text>
                    </ScrollView>
                </View>
                <View style={styles.shangpin}>
                        <ListView
                            showsVerticalScrollIndicator={false}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                        />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    everyview2:{
        height:Pixel.getPixel(220),
        backgroundColor:"white"
    },
    zhide2:{
        height:Pixel.getPixel(50),
        alignItems:'center',
    },
    textview2:{
        lineHeight:Pixel.getPixel(49),
    },
    zhide:{
        height:Pixel.getPixel(50),
        alignItems:'center'

    },
    textview1:{
        lineHeight:Pixel.getPixel(49),
    },
    Maxview:{
    },
    everyview1:{
        height:Pixel.getPixel(220),
        backgroundColor:"white"
    },
    lunboview: {
        height: Pixel.getPixel(120),
        backgroundColor: "yellow",
    },
    photoviews:{
        height: Pixel.getPixel(120),
        width: Pixel.getPixel(375),
        resizeMode:"stretch"
    },
    shangpin:{
        height:Pixel.getPixel(470),
    },
    textview:{
        marginLeft:Pixel.getPixel(30),
    },
    contentContainer: {
        alignItems:'center'
    },
    bannerview:{
        height: Pixel.getPixel(50),
        backgroundColor: "white",
    },

    Maxview: {
        height: Pixel.getPixel(610),
    },

});
