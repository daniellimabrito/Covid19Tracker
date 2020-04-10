import React, { Component }  from "react";
import {View} from 'react-native';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

var retData = [];

class CountryCharts extends React.PureComponent {
     constructor(props){
         super(props);
         //itemInfo = props.navigation.state.params.item;

         this.state = {
            data        : [],
          //  isLoading: true, 
         }
         const { value } = props;

       // this.state = {
        //translateYValue: 0, //new Animated.Value(value),
       // };
     }


     getCountriesStatsAsync() {
        

        return fetch('https://pomber.github.io/covid19/timeseries.json')
            .then((response) => response.json())
            .then((responseJson) => {
               retData = responseJson;  
                this.setState({
                isLoading: false,
               // dataSource: JSON.stringify(responseJson),
                data: responseJson,
                }, function(){
    
                });
                //console.log(retData);
            })
       
            .catch((error) =>{
                console.error(error);
            });
        }
    
        componentDidMount() {
            this.getCountriesStatsAsync(); 
          // window.clearTimeout;
            
        }

        setRanking = () => {
            const array = [retData];
            let valJson= '[{}]';
            let obj = JSON.parse(valJson);

             
            
           // arrayholder = arrayholder.sort((a, b) => (a.cases < b.cases) ? 1 : -1)
            array.forEach(function (item, index) {
                console.log(item);
              if (item["Afghanistan"] == 'Afghanistan') {
                obj.push({"confirmed": item.confirmed, "deaths": item.deaths, "recovered": item.recovered});
                //console.log(item.country + ' ' + item.confirmed);
               }
              });
              //console.log(obj);
             // obj.shift();
             retData = obj; //JSON.stringify(obj);;
         
          }

        render() {

            this.setRanking();
         //  const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
            
           const contentInset = { top: 20, bottom: 20 }
           const colors = [ '#43edcc','#7b4173', '#a55194', '#ce6dbd' ]
           const keys   = [ 'date','confirmed', 'deaths', 'recovered' ]
           const data1 = retData;

            return (

                <View>

                <AreaChart
                style={{ height: 200}}
                data={ data1 }
                keys={keys}
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={ contentInset }
            >
                <Grid/>
  
            </AreaChart>
            <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={ data1 }
                    formatLabel={ (value, index) => index }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                    contentInset={ contentInset }
                />
            </View>
            
            );
        }
 }

 export default CountryCharts;

