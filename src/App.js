
import React, {useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import firestore from './confs/firebaseConf';
import { async } from '@firebase/util';

const App= () =>{
  useEffect(() => {

    const obtenerDatos = async() =>{
      const datos = await getDocs(collection(firestore, 'urnaElectoral'));
      console.log(datos.docs);
    }   

    obtenerDatos();
  },[]);

  return(
    <h1>Urna de Votos</h1>
  );
}

export default App;