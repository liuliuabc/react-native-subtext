# react-native-subtext
自动识别文本中的数字转为上标或者下标 android&ios
<img width="480" src="https://github.com/liuliuabc/imgfolder/blob/master/subtextdemo.png?raw=true"/>


### Start 

``` bash
npm i react-native-subtext --save或者
yarn add react-native-subtext

```

``` js

import  SubText from 'react-native-subtext';

//...

render() {
        return (
            <View style={{flex:1}}>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}}  text={"C2H4O5"}></SubText>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}}  text={"C2H4O5"} type={'sup'}></SubText>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}} subTextStyle={{color:"red",fontSize:12}}  text={"C6H4O5"}></SubText>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}} subTextStyle={{color:"blue",fontSize:12}}  text={"ABCDEF"} subsuptext={"BDF"}></SubText>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}} subTextStyle={{color:"blue",fontSize:12}}  text={"大家好才是真的好"} subsuptext={"好"}></SubText>
                <SubText style={{marginBottom:5}} textStyle={{color:"black",fontSize:20}} subTextStyle={{color:"blue",fontSize:12}}  text={"大家好才是真的好"} subsuptext={"好"} type={'sup'}></SubText>
            </View>

        );
    }

```

### Options
| Props        | Type         | Example  | Description  |
| ------------- |:-------------:| -----:|----------:|
| style     | object | {marginBottom:5} | 整个控件的style |
| textStyle     | object | {color:"black",fontSize:20} | 非上标下标文本的样式 |
| subTextStyle     | object | {color:"blue",fontSize:12} |上标下标文本的样式，默认和textStyle相同，只是字体缩小一倍  |
| text      | string      |  C2H4O5 | 要显示的整个文本 |
| type | string     |    sup | sup代表上标，默认下标 |
| subsuptext | string     |    0123456789 | 需要显示为上标或者下标的字符 |
