import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView , FlatList} from 'react-native';

class Home extends Component {
  constructor () {
    super ();
    this.state={
      data: [],
      bio: [],
    }
  } 
  componentDidMount () {
    this.apiCall ();
  }
  async apiCall () {
    let resp = await fetch ('https://indonesia-covid-19.mathdro.id/api/provinsi')
    let respJson = await resp.json ()
    this.setState ({data:respJson.data})
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 450, height: 250 }}
          resizeMode="stretch"
          source={{ uri:'data:image/jpeg;base64,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'}}         
        />
        <View style={styles.textview}>
          <Text style={styles.text}>Data COVID-19</Text>
          <Text style={styles.text1}>Global dan Indonesia</Text>
        </View>
        
        <ScrollView>

        <View style={{backgroundColor: '#FFF8DC', width: 370, height: 165, alignSelf: 'auto', borderRadius: 10, marginTop: 20}}>
              <Text style={{fontSize: 14, fontStyle: 'italic'}}>Corona Virus atau virus corona merupakan keluarga besar yang dapat 
          menyebabkan infeksi pada saluran pernafasan dari yang paling ringan hingga sedang seperti flu.
          banyak orang yang dapat terinfeksi oleh firus ini.</Text> 
          <Text style={{fontSize: 14, fontStyle: 'italic'}}>Berdasarkan data yang telah dikumpulkan, maka didapatkan hasil seperti yang ada dibawah ini :</Text>   
        </View>
          

        <Text style={{fontSize:20, alignSelf: 'center', marginTop: 25}}>Data Global</Text>
        <View style={{flexDirection: 'row', justifyContent:  'center', margin: 30}}>
            <View style={{backgroundColor: '#00FF40', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>Sembuh</Text>
              <Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>1394920</Text>
            </View>
            <View style={{backgroundColor: '#FFBF00', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>Positif</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>4079388</Text>
            </View>
            <View style={{backgroundColor: '#FF0000', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>Meninggal</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>281313</Text>
            </View>
          </View>
          
          <Text style={{fontSize:20, alignSelf: 'center'}}>Data Indonesia</Text>
          <View style={{flexDirection: 'row', justifyContent:  'center', margin: 30}}>
            <View style={{backgroundColor: '#00FF40', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>Sembuh</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>1394920</Text>
            </View>
            <View style={{backgroundColor: '#FFBF00', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>Positif</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>4079388</Text>
            </View>
            <View style={{backgroundColor: '#FF0000', width: 90, height: 55, marginRight: 20, borderRadius: 10}}>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>Meninggal</Text>
              <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic'}}>281313</Text>
            </View>
          </View>

          <Text style={{fontSize:20, alignSelf: 'center', marginBottom: 30}}>Data Per-Provinsi</Text>
          <FlatList
            data={this.state.data}
            renderItem={({item}) =>
              <View>
                <Text style={styles.container}>{item.provinsi}</Text>
                  <View  style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#00FF40', width: 60, height: 20, borderRadius: 8, marginRight: 10}}>
                      <Text style={{alignSelf: 'center', fontSize: 15, fontStyle: 'italic'}}>{item.kasusSemb}</Text>
                    </View>
                    <View style={{backgroundColor: '#FFBF00', width: 60, height: 20, borderRadius: 8, marginRight: 10}}>
                      <Text style={{alignSelf: 'center', fontSize: 15, fontStyle: 'italic'}}>{item.kasusPosi}</Text>
                    </View>
                    <View style={{backgroundColor: '#FF0000', width: 60, height: 20, borderRadius: 8, marginRight: 10}}>
                      <Text style={{alignSelf: 'center', fontSize: 15, fontStyle: 'italic'}}>{item.kasusMeni}</Text>
                    </View>
                  </View>
              </View>
            }
          />

          <View style={{backgroundColor: '#FFF8DC', width: 370, height: 155, alignSelf: 'auto', borderRadius: 10, marginTop: 20}}>
              <Text style={{fontSize: 14, fontStyle: 'italic'}}>Lindungi diri anda dan orang lain yang berada disekitar anda 
            dengan mengetahui fakta-fakta terkait dengan virus ini dan mengambil langkah pencegahan yang sesuai. Ikuti saran kesehatan yang diberikan oleh otodidas setempat.</Text> 
              <Text style={{fontSize: 14, fontStyle: 'italic'}}>Dengan cara melalukan hal seperti yang ada dibawah ini :</Text>   
          </View>

          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 270, marginTop: 20 }}
              resizeMode="stretch"
              source={{ uri:'https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/cara-memakai-masker-yang-benar.jpg'}}         
            />
          </View>
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 270, marginTop: 20 }}
              resizeMode="stretch"
              source={{ uri:'https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/cuci-tangan-pakai-sabun.jpg'}}         
            />
          </View>
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 270, marginTop: 20 }}
              resizeMode="stretch"
              source={{ uri:'https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/gerakan-masyarakat-hidup-sehat.jpg'}}         
            />
          </View>
          

        </ScrollView>
      </View>
    )
  }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'baseline',
      backgroundColor: '#D8BFD8',
      fontSize: 12,
    },
    textview: {
      position: 'absolute',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 75,
      fontWeight: 'bold',
    },
    text: {
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
    text1: {
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
    akhir: {
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
  });

  export default Home;