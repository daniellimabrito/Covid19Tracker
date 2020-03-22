import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: "#333",
        paddingHorizontal: 10,
        paddingVertical: 5
        
    },
    titleTextNoPadLeft:  {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: "#333",
        paddingHorizontal: 0,
        paddingVertical: 5
        
    },

    titleTextDetailHeader: {
        fontFamily: 'nunito-bold',
        fontSize: 32,
        color: 'darkred',
        padding: 0
        
    },
    titleTextDetailLabel: {
        fontFamily: 'nunito-bold',
        fontSize: 22,
        color: 'gray',
        textAlign: 'left',
        width: 180
       // padding: 20
        
    },
    titleTextDetailResut: {
        fontFamily: 'nunito-bold',
        fontSize: 22,
        color: "#aaa",
        width: 120
       // padding: 20 
    },
    titleTextDetailResutConfirmed: {
        fontFamily: 'nunito-bold',
        fontSize: 22,
        color: 'red',
        width: 120
       // padding: 20 
    },
    titleTextDetail: {
        fontFamily: 'nunito-bold',
        fontSize: 40,
        color: "#456",
       // width: 200,
        paddingHorizontal: 20
        
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        color:'black',
        borderRadius:6,  
    },
    errorText : {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
    titleTextSpace: {
        padding: 20, 
    },
    textSearch: {
        fontFamily: 'nunito-bold',
        fontSize: 24,
        color: "#333",
        paddingHorizontal: 20,
        //marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        height: 60,
        flex: 1
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // 'cover' or 'stretch',
        width: null,
        height: null,
        backgroundColor: '#000'
        //backgroundColor: 'rgba(52, 52, 52, 0.9)'
       // backgroundColor: 'transparent'
    },
    backGroungTransparent : {
       // backgroundColor: 'rgba(52, 52, 52, 0.03)'
        backgroundColor: 'transparent'
    }
});

export const images = {
   // noUser :  require('../assets/user.png'),
    covid : require('../assets/covid19.png'),
    covidsm : require('../assets/covid19-sm.png'),
    covidGreen : require('../assets/corona-green.png')
}