/**
 * Created by xujiaqi on 2018/1/9.
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
let datas=[];
export default class LingXing extends BaseComponent {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:this.ds.cloneWithRows(this.props.ling),
            flags:false
        };
    }
    componentWillReceiveProps(nextProps) {
        datas=[]
        nextProps.ling.map((data,index)=>{
            datas.push({
                title:data,
                flag: false
            })
        })
        this.setState({
            dataSource: this.ds.cloneWithRows(datas),
        });
    }
    singleSelect=(rowId)=>{
        datas.map((data,index)=>{
            data.flag=false;
        });
        datas[rowId].flag=true;
        this.setState({
            dataSource: this.ds.cloneWithRows(datas),
        });
    }
    renderRow = (rowData, sectionId, rowId) => {
        return(
            <View style={[styles.everyview,rowData.flag ? {borderColor:'red',borderWidth:1} : {}]}>
                <TouchableOpacity onPress={
                    () => {
                        this.singleSelect(rowId);
                        this.props.clickRowData(rowData.title, rowId);
                    }}>
                    <Text style={[styles.everytext,rowData.flag ? {color:'red'} : {}]}>{rowData.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    clickRowData = (name, rowID) => {

        this.props.ling[rowID].flags = !this.props.ling[rowID].flags;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(this.props.ling),
            flags:true
        });

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
    everytext: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: Pixel.getPixel(40),
    },
    container: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft: Pixel.getPixel(5),

    },
    everyview: {
        width: Pixel.getPixel(80),
        height: Pixel.getPixel(40),
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(10),
        backgroundColor: 'aliceblue',
        borderRadius:15,
        overflow:'hidden'
    },
    Maxview: {
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(180),
        marginLeft: Pixel.getPixel(),

    },
});

