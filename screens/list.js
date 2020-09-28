import React, {Component} from 'react';
import {YellowBox, StyleSheet, Text, TextInput, View, ActivityIndicator, FlatList , TouchableOpacity, Alert} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, SearchBar, Avatar } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from '../routes/CovidStack';
import CountryInfo from '../screens/countryInfo';
import { flags } from '../styles/countryFlags';
import NumberFormat from 'react-number-format';
import { mdiAccount, mdiArrowTopRight } from '@mdi/js'
import { NavigationActions, NavigationInjectedProps,withNavigation } from 'react-navigation';

var  arrayholder = [];

var  arrayTotal = [];

var globaNumbers = [];



class List extends React.Component {
    constructor(props){
        super(props);
        
// export default function List({ navigation }) {
        this.state = { 
            search: [], 
            isLoading: true, 
            text: 'Brazil',
            data        : [],
            dataBackup  : [],
            dataSource : null,
            error: null,  
        }
        arrayholder = [];
        //const  navigation  = this.props;
        console.disableYellowBox = true;
      }


      setSearchText(event){
        searchText = event.nativeEvent.text;
        data       = this.state.dataBackup;
        searchText = searchText.trim().toLowerCase();
        data = data.filter(l => {
        return l.nama.toLowerCase().match( searchText );
       });

       this.setState({
        data : data
        });
    }
      updateSearch = search => {
        this.setState({ search });
      };
  
    getCountriesStatsAsync() {
        

    return fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then((response) => response.json())
        .then((responseJson) => {

          var i,x;
          var myObj = responseJson;
            var skill = "World";
            var test = responseJson[0];


            for (i = 0; i < responseJson.length; i++) {
             
              if (myObj[i].country == 'World')
              {
                globaNumbers = myObj[i];
                myObj[i] = {};
               //x += myObj[i];
              }

              if (myObj[i].country === '') {
                myObj[i] = [{}];
              //  myObj.shift();
                
              }

              //console.log(myObj[i].country);
            }
           
            let obj = JSON.parse('[{}]');
           var myObjRemoveEmpty = myObj.filter((item,index) => {      
         
              if (item.country !== undefined && item.country != 'World' && item.country != '') {
              const itemData = `${item.country.toUpperCase()}`;

              obj.push({Ranking: index > 0? "("+ (index ) + ")": "", "active": item.active, "cases": item.cases, "casesPerOneMillion": item.casesPerOneMillion, "country": item.country, "critical": item.critical, "deaths": item.deaths, "recovered": item.recovered, "todayCases": item.todayCases, "todayDeaths": item.todayDeaths}); 
                return obj;
               //return itemData.indexOf(textData) > -1;    
              }
            });

            obj.shift();
            myObj = obj; //myObjRemoveEmpty;
           // console.log(obj);

            //console.log(myObj[0]);
             //test['Country'] == 'China';
            // responseJson = x;
            arrayholder = myObj;  
            //arrayholder[0] = [];
            arrayTotal = responseJson;
            this.setState({
            isLoading: false,
            dataSource: JSON.stringify(responseJson),
            data: myObj,
            }, function(){

            });
            
        })
        .then((responseJson) => {
       //  console.log(arrayholder)
       this.setRanking();
       })
        .catch((error) =>{
            console.error(error);
        });
    }

    myAction = (items) => {
      NavigationActions.navigate('CountryInfo', items);
      console.log(items);
      //return nav;
    };

    componentDidMount(){
        this.getCountriesStatsAsync();                
    }

    filteredItems = (text) => {
       //console.log(arrayholder);
        
       // console.log(JSON.stringify(this.state.data));
        return this.state.data.results.filter( x => { return x.indexOf(text) > -1 })
        
    }

    filterData(text) {
        
       // console.log(this.state.data.results[2].country);
       // var dataObj = this.state.data.results.filter(function(item){
       //     return item.indexOf(text) > -1;
           // return item.state == text;
       //  });
       //  console.log(dataObj);

       //  this.setState({ data: dataObj });  
       //  this.setState({ data: newData });  
    }

    pressHandler = (items) => {
      //console.log(NavigationActions);
    //  NavigationActions.navigate('CountryInfo', items);
     //  this.myAction(items);
//     this.props.navigation.navigate('CountryInfo', { screen: 'Settings' });
        this.props.navigation.navigate('CountryInfo', items);
    }
  
    searchFilterFunction = text => {    
      //console.log('Test')
       
        const newData = arrayholder.filter(item => {      
         
          if (item.country !== undefined && item.country != 'World' && item.country != '') {
          const itemData = `${item.country.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            return itemData.startsWith(textData);
           //return itemData.indexOf(textData) > -1;    
          }
        });
        
        this.setState({ data: newData });  
      }; 

      setRanking = () => {
        const array = arrayholder;
        let valJson= '[{}]';// '[{"Ranking": "", "active": "", "cases": "", "casesPerOneMillion": "", "country": "", "critical": "", "deaths": "", "recovered": "", "todayCases": "", "todayDeaths":""}]';
        let obj = JSON.parse(valJson);
        
        
      //  arrayholder = arrayholder.sort((a, b) => (a.cases < b.cases) ? 1 : -1)
        array.forEach(function (item, index) {
          if (item.country !== '' && item.country !== undefined ) {
            obj.push({Ranking: item.Ranking, "active": item.active, "cases": item.cases, "casesPerOneMillion": item.casesPerOneMillion, "country": item.country, "critical": item.critical, "deaths": item.deaths, "recovered": item.recovered, "todayCases": item.todayCases, "todayDeaths": item.todayDeaths});
            //console.log(item.country + ' ' + item.todayCases);
           }
          });
          
          obj.shift();
          arrayholder = obj; //JSON.stringify(obj);;
     
      }

    render() {

     //console.log(globaNumbers);


    
      //console.log(activeTotal);

      let item = {country: globaNumbers.country,cases: globaNumbers.cases, active: globaNumbers.active, critical: globaNumbers.critical, deaths: globaNumbers.deaths, recovered: globaNumbers.recovered, todayCases: globaNumbers.todayCases, todayDeaths: globaNumbers.todayDeaths};

      this.setRanking();
      //arrayholder = arrayholder.sort((a, b) => (a.cases < b.cases) ? 1 : -1)
      
     // item = JSON.stringify(item);
     // console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        const { search } = this.state;
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }


          return(

           
         
            <View style={styles.container}>
       

               <View style={{paddingHorizontal: 0, paddingBottom:5}} >
               <SearchBar                   
                    placeholder="Type here..."
                    lightTheme               
                    round        
                    onChangeText={text => this.searchFilterFunction(text)}
                    autoCorrect={false}  
                    //onChangeText={this.updateSearch}
                    value={search}
                />

                </View>

              <View>
                <TouchableOpacity onPress={() => this.pressHandler({item})} >
                  <View> 
                          <Card >
                                                   
                                  <Avatar
                                    rounded
                                  //  color="green"
                                   source={flags['World']}
                                    size='small'
                                    //icon={{name:'globe', color: 'green', type: 'font-awesome'}}
                                    //showEditButton
                                 
                                  />
                                  <Text style={globalStyles.titleText}> Total Cases </Text>                               
                                  <NumberFormat

                              
                                        value={item.cases}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={value => <Text style={globalStyles.titleTextNoPadLeft}>{value}</Text>}               
                                    />  
                                  <View style={{paddingHorizontal:30, alignContent:'flex-end', alignSelf: 'flex-end'}}>
                                    <Icon name='arrow-forward' color='gray' size={34} /> 
                                  </View>
                          </Card>
                          </View>
                  </TouchableOpacity>
              </View>

              <FlatList style= {styles.gridBody}
                data={this.state.data}              
                //data={arrayholder}
                keyExtractor={(item, index) => item.country}
                renderItem={({ item, index }) => (
                    
                    <TouchableOpacity onPress={() => this.pressHandler({item})} >
                       <View> 
                        <Card >
                        <Text style={globalStyles.titleText}> { item.Ranking == undefined  ? ''  : item.Ranking} </Text>  
                                <Avatar
                                  rounded
                                  source={flags[item.country]}
                                  size='small'
                                  backgroundColor='white'
                                  //showEditButton
                                />
                                <Text style={globalStyles.titleText}> { item.country }</Text>                               
                                <NumberFormat

                             
                                      value={item.cases}
                                      displayType={'text'}
                                      thousandSeparator={true}
                                      renderText={value => <Text style={globalStyles.titleTextNoPadLeft}>{value}</Text>}               
                                  />  
                                <View style={{paddingHorizontal:30, alignContent:'flex-end', alignSelf: 'flex-end'}}>
                                  <Icon name='arrow-forward' color='gray' size={34} /> 
                                </View>
                        </Card>
                        </View>
                    </TouchableOpacity>
                )} 
                />
            </View>
          );
    }

}



    const styles = StyleSheet.create({
        container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        container: {
            flex: 1,
            paddingTop: 22,            
           },
        item: {
             padding: 10,
             fontSize: 18,
             height: 44,
        },
        header : {
            backgroundColor: '#ddd',
            height : 60,
            flexDirection: 'row',
            marginHorizontal: 10,
            //paddingTop: 20,
            paddingHorizontal: 10,
           
        
        },
        headerItem : {
            marginRight : 10,
            fontWeight: 'bold'
        },
        gridBody : {
            marginHorizontal: 10,
        }
    });

export default List;