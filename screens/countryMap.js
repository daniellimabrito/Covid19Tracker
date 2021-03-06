import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


class CountryMap extends React.Component {  
    constructor(props){
        super(props);
        //this.state ={ search: '', isLoading: true, text: 'Brazil'}
        const  {navigation}  = this.props;
      }

    componentDidMount(){
       // console.log(this.props.params);
    }

    render() {    
        const  userValue = this.props;
        console.log(userValue.item);
        return (    
            
        <View style={{flex: 1}}>  
            <View
            style={{position: 'reference', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}
            >
               
            </View>
            <MapView  
            
            style={styles.map}    
            region={{ latitude: -12.977749, 
                longitude: -38.501629, 
                latitudeDelta: 0.0922,          
                longitudeDelta: 0.0421        
            }}        
                showsUserLocation={true}      
            >
                <MapView.Marker 
                    coordinate={{
                        latitude: -12.977749, 
                        longitude: -38.501629
                      // latitude: 42.882004, 
                      // longitude: 74.582748 
                    }}
                    title="TEste"
                    description={"AAAA"}
                   // title={this.props.country}
                    //description={this.props.cases}
                />
            </MapView>    
           
        </View>    
        );  
        }}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    });

    export default CountryMap;