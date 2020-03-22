
import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { images } from "../styles/global";
import { globalStyles } from '../styles/global';
import { pink } from 'color-name';
import { flags } from '../styles/countryFlags';
import { Icon, SearchBar, Avatar } from 'react-native-elements';
import NumberFormat from 'react-number-format';


state = {
    info : {}
};

var itemInfo = {};

class CountryInfo extends Component {
    constructor(props){
        super(props);
       // console.log(props.navigation.state.params.item);
        itemInfo = props.navigation.state.params.item;
        console.log(itemInfo);
       
    }

    componentDidMount() {
        this.setState({info : itemInfo });
    }

    getCountryInfo () {
       return ""
    }


    render(){

        return( 
            <View style={{flex:1}}>

            
             <View style={{flex:1}}>
                <Card >
 
               
                <CardImage              
                  // source={{uri: 'http://placehold.it/480x270'}} 
                    source={ images.covid }    
                  //  source={flags[itemInfo.country]}
                  // style={ { width: 480, height: 202} }   
                   style={{backgroundColor: '#fff'}}                      
                />
                  
                <View style={{paddingTop:240, position: 'absolute'}}>
                    <Text style={globalStyles.titleTextDetail}>{this.props.navigation.state.params.item.country}</Text>
                </View>
            
               
                 <CardTitle variant="outlined"
                    //style={{paddingBottom:0, height:90}}
                   // avatarSource= {flags[itemInfo.country]}
                  //  title={<Text>{this.props.navigation.state.params.item.country}</Text>} 
                    
                />               
               
                <CardContent 
                style={{paddingTop:295, position: 'absolute'}}
                   // style={globalStyles.backGroungTransparent}
                   // avatarSource= {images.covidGreen}
                  //  avatarSource= {flags[itemInfo.country]}
                >    
        

                    <View style={{backgroundColor:'#fff', paddingTop:0, marginLeft: 0}} > 
                    <Avatar
                                  rounded
                                  source={flags[itemInfo.country]}
                                  size="large"
                                />

                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailHeader}> CASES</Text>   
                    </View>             

                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailLabel}>Confirmed</Text>
                        <NumberFormat
                            value={itemInfo.cases}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResutConfirmed}>{value}</Text>}               
                        /> 
                        
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                         <Text style={globalStyles.titleTextDetailLabel}>Active </Text>
                         
                         <NumberFormat
                            value={itemInfo.active}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />  
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailLabel}>Critical</Text>
                        <NumberFormat
                            value={itemInfo.critical}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />   
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailLabel}>Fatal </Text>
                        <NumberFormat
                            value={itemInfo.deaths}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />     
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                         <Text style={globalStyles.titleTextDetailLabel}>Recovered </Text>
                         <NumberFormat
                            value={itemInfo.recovered}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />    
                    </View>

                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailLabel}>Today </Text> 
                        <NumberFormat
                            value={itemInfo.todayCases}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />  
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>  
                        <Text style={globalStyles.titleTextDetailLabel}>Today Deaths </Text>
                        <NumberFormat
                            value={itemInfo.todayDeaths}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => <Text style={globalStyles.titleTextDetailResut}>{value}</Text>}               
                        />   
                    </View>
         
                    </View>
                </CardContent>
                
                <CardAction 
                    separator={true} 
                    inColumn={false}>
                    <CardButton
                    onPress={() => {}}
                    title=""
                    color="blue"
                    />
                    <CardButton
                    onPress={() => {}}
                    title=""
                    color="blue"
                    />
                </CardAction>
                </Card>  
               </View>
              
            </View>
        )
    }

}

export default CountryInfo