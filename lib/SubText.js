'use strict';
import React,{PropTypes} from 'react';
import {View, Text} from 'react-native';
class SubText extends React.Component{
    constructor(props){
        super(props);
    }
    static propTypes = {
        text: PropTypes.string.isRequired,
        type: PropTypes.string,
        textStyle:PropTypes.object.isRequired,
        subTextStyle:PropTypes.object,
        subsuptext:PropTypes.oneOf[PropTypes.string,PropTypes.array],
        style:PropTypes.object
    }
    static defaultProps = {
        text: 'C2H2',
        type:'sub',
        textStyle:null,
        subTextStyle:null,
        subsuptext:"0123456789",
        style:null
    };
    getSubTextStyle(){
        if(this.props.subTextStyle){
            return this.props.subTextStyle;
        }else{
            var style= JSON.parse(JSON.stringify(this.props.textStyle));
            style.fontSize=style.fontSize/2;
            return style;
        }
    }
   getViewWithSub(str,char){
     if(this.props.type=="sup"){
         var view= (
             <View style={{flexDirection:'row'}}>
                 <Text style={this.props.textStyle}>{str}</Text>
                 <View style={{height:"100%"}}>
                     <Text style={this.getSubTextStyle()}>{char}</Text>
                 </View>
             </View>

        );
         return view;


     }else{
         var view= (<Text style={this.props.textStyle}>{str}
             <Text style={this.getSubTextStyle()}>{char}</Text>
         </Text>);
         return view;
     }



   }

    getViews(str){
        var nonumbertext="";
        var numbers=this.props.subsuptext;
        if(typeof numbers=='array'){
            numbers=numbers.join("");
        }
        var views=[];
        for(var i =0;i<str.length;i++){
            var char=str[i];
            if(numbers.indexOf(char)>=0){
                var view= this.getViewWithSub(nonumbertext,char);
                views.push(view);
                nonumbertext="";
            }else{
                nonumbertext+=char;
            }
        }
        if(nonumbertext){
            var view= (<Text style={this.props.textStyle}>{nonumbertext}</Text>);
            views.push(view);
        }
        return views;

    }





    render(){
        return (
            <View style={[this.props.style,{flexDirection:'row'}]}>
                {this.getViews(this.props.text)}
            </View>

        );
    }
}


export default SubText;