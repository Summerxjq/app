/**
 * Created by xujiaqi on 2018/1/8.
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
export default class ShangPinPage3 extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.BaoBei),
        };
        console.log('---'+this.state.dataSource)

    }
    componentWillReceiveProps(nextProps) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.BaoBei),
        });

    }

    renderRow = (rowData, sectionId, rowId) => {
        /*console.log('-------flag', rowData.flag);*/
        return (
            <View style={styles.everyview}>
                <Image source={{url:rowData.goodsPicUrl}}
                       resizeMode="stretch"
                       style={styles.imageviews}/>
                <View style={styles.etext}>
                    <Text >{rowData.goodsName}</Text>
                    <Text style={styles.text}>¥</Text>
                    <Text style={styles.text1}>{rowData.goodsPrices}</Text>
                    <Text style={styles.text4}>{rowData.highPraiseNum}</Text>
                    <Text style={styles.text5}>条评价</Text>
                    <Text style={styles.text6}>好评</Text>
                    <Text style={styles.text7}>{rowData.highPraiseProbability}</Text>
                    <Text style={styles.text8}>%</Text>
                </View>

            </View>
        )

    }
    render() {
            return (
                <View style={styles.Maxview}>
                    <ListView contentContainerStyle={styles.container}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                              enableEmptySections={true}
                    />
                </View>
            );
        }
    }
const styles = StyleSheet.create({
    text8:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(140),
        marginTop:Pixel.getPixel(-19),

    },
    text7:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(120),
        marginTop:Pixel.getPixel(-18),

    },
    text6:{
        width:Pixel.getPixel(35),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(90),
        marginTop:Pixel.getPixel(-15),

    },
    text5:{
        width:Pixel.getPixel(60),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(28),
        marginTop:Pixel.getPixel(-16),
    },
    text4:{
        width:Pixel.getPixel(40),
        fontSize:15,
        color:'#D8D5DF',
        marginLeft:Pixel.getPixel(0),
        marginTop:Pixel.getPixel(30),
    },
    text1:{
        width:Pixel.getPixel(70),
        color:'red',
        fontSize:18,
        marginLeft:Pixel.getPixel(25),
        marginTop:Pixel.getPixel(-21),
    },
    text:{
        width:Pixel.getPixel(20),
        fontSize:18,
        color:'red',
        marginLeft:Pixel.getPixel(0),
        marginTop:Pixel.getPixel(25),

    },
    container:{
    },
    etext:{
        width:Pixel.getPixel(210),
        height:Pixel.getPixel(130),
        marginLeft:Pixel.getPixel(160),
        marginTop:Pixel.getPixel(-110),
        borderBottomColor:'darkgray',
        borderBottomWidth:1
    },
    imageviews:{
        marginTop:Pixel.getPixel(25),
        marginLeft:Pixel.getPixel(10),
        height:Pixel.getPixel(115),
        width:Pixel.getPixel(140),
    },
    Maxview:{
        flex:1,
        marginLeft:Pixel.getPixel(7),

    },
    everyview:{
        width:Pixel.getPixel(370),
        height:Pixel.getPixel(160),




    }
});
