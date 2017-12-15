import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StatusBar,
    Modal,
    Image,
    Text,
    Platform,
    Alert,
    AppState
} from 'react-native';

import MyNavigator  from './component/MyNavigator';
import * as fontAndColor from './constant/fontAndColor';
import ShowToast from "./component/toast/ShowToast";

export default class root extends Component {

    render() {
        return (
            <View style={{flex:1,backgroundColor:fontAndColor.COLORA3}}>
                <MyNavigator showToast={(content)=>{
                    this.showToast(content)
                }} showModal={(value)=>{this.showModal(value)}}/>
                <ShowToast ref='toast' msg={''}></ShowToast>

            </View>
        );
    }


    componentDidMount() {
        global.iosIDFA = this.props.IDFA;
        global.phoneVersion = this.props.phoneVersion;
        global.phoneModel = this.props.phoneModel;
        global.appVersion = this.props.appVersion;

    }


    showToast = (content) => {
        this.refs.toast.changeType(ShowToast.TOAST, content);
    }

    showModal = (value) => {
        this.refs.toast.showModal(value);
    }


}


