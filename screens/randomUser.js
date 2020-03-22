import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator, FlatList, List, ListItem , TouchableOpacity, Alert} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from "@expo/vector-icons";
import { Icon, SearchBar } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from '../routes/CovidStack';


class RandomUser extends Component {
    constructor(props){
        super(props);
// export default function List({ navigation }) {
    this.state = {
        loading: false,      
        data: [],      
        error: null,    
      };
        this.arrayholder = [];
        //const  navigation  = this.props;
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

  

      makeRemoteRequest = () => {    
        const url = `https://randomuser.me/api/?&results=20`;
        this.setState({ loading: true });
        
        fetch(url)      
          .then(res => res.json())      
          .then(res => { 
              console.log(res);       
            this.setState({          
              data: res.results,          
              error: res.error || null,          
              loading: false,        
            });        
            
           this.arrayholder = res.results;      
         })      
         .catch(error => {        
           this.setState({ error, loading: false });      
         });  
      };

      renderHeader = () => {    
        return (      
          <SearchBar        
            placeholder="Type Here..."        
            lightTheme        
            round        
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}             
          />    
        );  
      };     

      searchFilterFunction = text => {    
        const newData = this.arrayholder.filter(item => {      
          const itemData = `${item.name.title.toUpperCase()}   
          ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
          
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ data: newData });  
      };
      

      componentDidMount() {
          this.makeRemoteRequest();
      }

    render() {
       
        if(this.state.loading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

          return(
            <View style={styles.container}>
                <View> 
                    <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList          
                        data={this.state.data}          
                        renderItem={({ item }) => ( 
                        <ListItem              
                            roundAvatar              
                            title={`${item.name.first} ${item.name.last}`}  
                            subtitle={item.email}                           
                            avatar={{ uri: item.picture.thumbnail }}   
                            containerStyle={{ borderBottomWidth: 0 }} 
                        />          
                        )}          
                        keyExtractor={item => item.email}  
                        ItemSeparatorComponent={this.renderSeparator} 
                        ListHeaderComponent={this.renderHeader}                             
                    />            
                    </List>
                </View>

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

export default RandomUser;