import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, textColor, ScrollView, Image} from 'react-native';
import SearchBar from './SearchBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WhiteHorizontalLine from './WhiteHorizontalLine';
import Icon from 'react-native-vector-icons/MaterialIcons';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Weather({ weatherData, fetchWeatherData }) {
    function Flashcard({label, imagePath, label2}) {
        return (
          <View style={styles.card}>
            <View >
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.label2}>{label2}</Text> 
            </View>
            <View styles={styles.imagecard}>
                <Image source={imagePath} style={styles.image} />
            </View>
           
          </View>
        );
      };
      function Flashcard2({label, imagePath, label2}) {
        return (
          <View style={styles.card}>
            <View >
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.label2}>{label2}</Text> 
            </View>
            <View styles={styles.imagecard}>
                <Image source={imagePath} style={styles.image2} />
            </View>
           
          </View>
        );
      };
    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed }
} = weatherData;
const [{ main }] = weather;

return (
    <View style={styles.container}>
        <StatusBar backgroundColor='darkgray' />
        <SearchBar fetchWeatherData={fetchWeatherData} />
        <View style={styles.location}>
        <Icon name='place' color={'peru'} size={40}  />
        <Text style={{ fontWeight: 'bold', fontSize: 30,}}>{name}</Text> 
        </View>
        
        <ScrollView>
  <View>
    {/* <TouchableOpacity style={styles.button}  >
    <Flashcard
    label= {<Text style={{ ...styles.headerText, color: textColor, fontSize: 46}}>{temp} °C</Text>}
    // label1 = {<Text style={{ ...styles.headerText, color: textColor, fontSize: 20, color: 'white',flex: 1, flexDirection: 'column'}}>{main}</Text>}
    imagePath={require('../../assets/camera.png') }
      >
      </Flashcard>
     
    </TouchableOpacity> */}
    <TouchableOpacity style={styles.button} >
    <Flashcard
      label={<Text style={{fontSize: 46}}>{temp} °C</Text>}
      label2={<Text style={{fontSize: 20, color: 'white',flex: 1, flexDirection: 'column'}}>{main}</Text>}
      imagePath={require('../../assets/cloudy.png')  }
      >
      </Flashcard>
      <View>
      <WhiteHorizontalLine/>
      <Text style={{ ...styles.headerText, color: textColor, fontSize: 20, color: 'white',flex: 1, flexDirection: 'column'}}>Feels Like {temp-2} °C</Text>
      </View>
    </TouchableOpacity>
    </View>
    <View>
        <Text style={styles.label1}>Ideal Temperature</Text>
    </View>
    <View>
    <TouchableOpacity style={styles.button} >
    <Flashcard2
      label={<Text style={{ fontSize: 46}}>4°C - 37°C</Text>}
      label2={<Text style={{  fontSize: 20, color: 'white',flex: 1, flexDirection: 'column'}}>Sunny</Text>}
      imagePath={require('../../assets/sun.png') }
    >
      </Flashcard2>
      <View>
        <WhiteHorizontalLine/>
      <Text style={{ fontSize: 20, color: 'white',flex: 1, flexDirection: 'column'}}>Optimal Temperature: 12°C - 25°C</Text>
      </View>

    </TouchableOpacity>
    </View>
    </ScrollView>
    </View>

                // <View style={{alignItems: 'center' }}>
                //     <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}</Text> */}
                //     <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                //     <Text style={{ ...styles.headerText, color: textColor,}}>{temp} °C</Text>
                // </View>  

                // <View style={styles.extraInfo}>

                //     <View style={styles.info}>
                //         <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                //         <Text style={{ fontSize: 22, color: 'white' }}>{humidity} %</Text>
                //     </View>

                //     <View style={styles.info}>
                //         <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                //         <Text style={{ fontSize: 22, color: 'white' }}>{speed} m/s</Text>
                //     </View>
                
                // </View> 
                // </View> 
)
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    },
    card: {
        flex: 1,
        flexDirection: 'row',
          backgroundColor: 'peru',
          borderRadius: 8,
        //   padding: 10,
        //   elevation: 3,
        //   marginBottom: 30,
        //   marginLeft: 5,
        //   marginRight: 10,
          // marginTop: "5%",
          
      },
      location: {
        flex:1,
        flexDirection: 'row',
        marginLeft: "5%",
        marginTop: "5%",
      },
      image: {
        
        width: "60%",
        height: "80%",
        // marginBottom: "5%",
        resizeMode: 'cover',
        marginLeft: "50%",
    },
    image2: {
        
      width: "60%",
      height: "80%",
      // marginBottom: "5%",
      resizeMode: 'cover',
      marginLeft: "35%",
  },
    label: {
        fontSize: 40,
        color: 'white',  
    },
    label1: {
      marginTop: "5%",
      marginLeft: "5%",
      fontSize: 30,
      color: 'black',      
    },
    button: {
      backgroundColor:'peru',
      padding: 10,
      borderRadius: 5,
      marginLeft: "5%",
      marginRight: "5%",
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
      marginTop: "2%"
  
    },
      // button: {
        
      //   backgroundColor:'peru',
      //   padding: 10,
      //   borderRadius: 10,
      //   marginLeft: 10,
      //   marginRight: 10,
      //   borderWidth: 1,
      //   borderColor: 'black',
      //   marginTop: 10,
      //   elevation: 3,
    
      // },
      buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      text: {
        color:'white',
        fontSize: 15,
    
      },
    // backgroundImg: {
    //     flex: 1,
    //     width: Dimensions.get('screen').width
    // },
    // headerText: {
    //     fontSize: 36,
    //     marginTop: 10,
    // },
    // extraInfo: {
    //     flexDirection: 'row',
    //     marginTop: 20,
    //     justifyContent: 'space-between',
    //     padding: 10
    // },
    // info: {
    //     width: Dimensions.get('screen').width/2.5,
    //     backgroundColor: 'rgba(0,0,0, 0.5)',
    //     padding: 10,
    //     borderRadius: 15,
    //     justifyContent: 'center'
    // }
});
  
