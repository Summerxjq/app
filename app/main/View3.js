/**
 * Created by xujiaqi on 2017/12/19.
 */
var App=React.createClass({
    getInitialState:function(){
        return{userInput:''};
    },
    handleChange:function(e){
        this.setState({
            userInput:e.target.value
        });
    },

    clearAndFocusinput:function(){
        this.setState({
            userInput:''
        });
        if(this.refs.myTextInput!==null){
            this.refs.myTextInput.focus();
        }
    },
    render:function(){
        return(
            <div>
                <input
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    ref="myTextInput"
                />
                <input type="button"
                       value="Reset And Focus"
                       onClick={this.clearAndFocusinput}
                       />

            </div>
        );
    }
});
ReactDOM.render(
    <APP/>
    document.getElementById('content')
);
