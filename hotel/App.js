import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App = () => {
  const[modalHabitacion1, setModalHabitacion1] = useState(false);
  const[modalHabitacion2, setModalHabitacion2] = useState(false);
  const[modalHabitacion3, setModalHabitacion3] = useState(false);
  const[modalHabitacion4, setModalHabitacion4] = useState(false);
  const[modalHabitacion5, setModalHabitacion5] = useState(false);
  return(
    <>
    <ScrollView>
      <Modal transparent={true} animationType="slide" visible={modalHabitacion1} onRequestClose={() => {alert('Modal has been closed.');}}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Clasic</Text>
            <Text style={styles.texto}>Habitacion estandar con todas las comodidades, un escritorio para jornadas de trabajo, aire acondicionado, cama matrimonial,
              un baño propio, cuenta con estadia de 2 dias y una noche.
            </Text>
            <Button title='Cerrar' onPress={() =>{setModalHabitacion1(!modalHabitacion1)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalHabitacion2} onRequestClose={() => {alert('Modal has been closed.');}}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Gold</Text>
            <Text style={styles.texto}>Comoda Habitacion con excelentes vistas a la ciudad, cuenta con servicio a la habitacion, tiene 2 baños individuales, aire acondicionado,servicio de buffet, barra libre,
            cuenta con una estadia de 3 dia y 2 noche. 
            </Text>
            <Button title='Cerrar' onPress={() =>{setModalHabitacion2(!modalHabitacion2)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalHabitacion3} onRequestClose={() => {alert('Modal has been closed.');}}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Diamond</Text>
            <Text style={styles.texto}>Es una Habitacion minimalista, cuenta con una pequeña terraza para apreciar las vistas que se tiene de la ciudad, disponemos de servicio a la habitacion con desayuno, almuerzo y cena, los fin de semana
            disponemos de un gran buffet de 7 a 12 de la noche, al adquirir la habitacion cuenta don derecho a usar ciertas partes de las intalaciones, disco, bares, spa y piscina. La estadia es de 1 semana.
            </Text>
            <Button title='Cerrar' onPress={() =>{setModalHabitacion3(!modalHabitacion3)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalHabitacion4} onRequestClose={() => {alert('Modal has been closed.');}}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion DELUX</Text>
            <Text style={styles.texto}>Una habitacion con todas las comodidades para una amplia estadia de 5 dias y 4 noches, la habitacion contiene un pequeño bar el cual dispone de las bebidas mas solicitadas de la ciudad,
            cuenta con un amplio comedor y sala de estar para unos 6 invitados y ademas de contar con unas vistas a la gran ciudad, contamos con servicio a la habitacion, derecho a desayuno, almuerzo, cena y buffet el fin de smeana. Contamos con 2 habitaciones, una con
            camas separadas para mas privacidad y la otra con una cama en pareja. Por adquirir la habitacion tendra permiso sobre el uso de las instalaciones del hotel.
            </Text>
            <Button title='Cerrar' onPress={() =>{setModalHabitacion4(!modalHabitacion4)}}></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalHabitacion5} onRequestClose={() => {alert('Modal has been closed.');}}>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Royal</Text>
            <Text style={styles.texto}>Una Habitacion Lujosa y de prestigio solo para nuestros clientes VIP, la habitacion se encuentra en el segundo Hotel ubicado mas cerca de las montañas, lejos de la cuidad para una mayor tranquiladad hacia nuestros clientes VIP.
            Tine todos los servicios a la disposicion, bar, disco, una piscina amplia, terraza con vista al lago junto a las montañas nevadas, paseos en bote y motos de agua, la habitacion cuenta con un amplio espacio de sala de estar
            con una vista casi de 360 del hermoso paisaje y una habitacion con una cama matrimonial.

            </Text>
            <Button title='Cerrar' onPress={() =>{setModalHabitacion5(!modalHabitacion5)}}></Button>
          </View>
        </View>
      </Modal>

      <View style = {{flexDirection:'row'}}>
        <Image style={styles.banner} source = {require('./src/img/logo.jpg')} />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Habitaciones Disponibles</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight onPress={() =>{setModalHabitacion1(!modalHabitacion1)}}>
              <Image style={styles.ciudad} source={require('./src/img/habitacion1.jpg')}/>
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight onPress={() =>{setModalHabitacion2(!modalHabitacion2)}}>
              <Image style={styles.ciudad} source={require('./src/img/habitacion2.jpg')}/>
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight onPress={() =>{setModalHabitacion3(!modalHabitacion3)}}>
              <Image style={styles.ciudad} source={require('./src/img/habitacion3.jpg')}/>
          </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight onPress={() =>{setModalHabitacion4(!modalHabitacion4)}}>
              <Image style={styles.ciudad} source={require('./src/img/habitacion4.jpg')}/>
            </TouchableHighlight>
          </View>
          <View>
          <TouchableHighlight onPress={() =>{setModalHabitacion5(!modalHabitacion5)}}>
              <Image style={styles.ciudad} source={require('./src/img/habitacion5.jpg')}/>
            </TouchableHighlight>
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Lugares de Interes</Text>
        <View>
          <View>
            <Image style={styles.mejores} source={require('./src/img/lago.jpg')}/>
            <Text style={styles.texto}>Una amplia terraza con vista a lago, luego de un relajante masaje en el spa del hotel.</Text>
          </View>

          <View>
            <Image style={styles.mejores} source={require('./src/img/Spa.jpg')}/>
            <Text style={styles.texto}>Un Spa con servicio completo y con una pequeña piscina con una agradable temperatura.</Text>
          </View>

          <View>
            <Image style={styles.mejores} source={require('./src/img/Turismo.jpg')}/>
            <Text style={styles.texto}>Contamos con un edificio dedicado para todos los servicios que ofrecemos por adquirir las habitaciones, el cual dispone de un buffet, los bares, discotecas y un spa.
            </Text>
          </View>

          <View>
            <Image style={styles.mejores} source={require('./src/img/Senderismo.jpg')}/>
            <Text style={styles.texto}>Un lugar de especial interes para nuestros clientes VIP, Senderismo, contamos con guias y equipos para realizar esta actividad.</Text>
          </View>
        </View>
        
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  banner:{
  height:250,
  flex:1
  },
  titulo: {
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10,
    textAlign: 'center',
    padding: 10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:300,
    height:250,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex:1,
  },
  Modal:{
    backgroundColor: '#fff',
    margin:50,
    padding:30,
    borderRadius: 10,
    flex: 1,
    justifyContent:'space-around'
    
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  texto:{
    textAlign: 'justify',
  }
 });

 export default App;