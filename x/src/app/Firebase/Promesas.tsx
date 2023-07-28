import { persona } from "../../../Interfaces";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc,DocumentReference, deleteDoc } from "firebase/firestore";
import { db } from "./Conexion";

export const registrarPersona=async(p:persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);
}
export const obtenerPersonas =async ()=>{
    var listado:persona[] =[];
    const querySnapshot = await getDocs(collection(db, "personas"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
    // doc.data() is never undefined for query doc snapshots
    var p:persona = {
        idPersona:doc.id,
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        edad:doc.data().edad,
        email:doc.data().email,
        contrasena:doc.data().contrasena,
        productos:doc.data().productos,
        cantidad:doc.data().cantidad,
        direccion:doc.data().direccion,
        ciudad:doc.data().ciudad,
        talla:doc.data().talla,
        telefono:doc.data().telefono,
    }
   // console.log(p)
    listado.push(p)
    console.log(doc.id, " => ", doc.data());
    });
    return listado
}

export const obtenerPersona = async (idPersona:string)=>{
    const docRef = doc(db, "personas", idPersona);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    var p:persona = {
        idPersona:docSnap.id,
        nombre:docSnap.data().nombre,
        apellido:docSnap.data().apellido,
        edad:docSnap.data().edad,
        email:docSnap.data().email,
        contrasena:docSnap.data().contrasena,
        productos:docSnap.data().productos,
        cantidad:docSnap.data().cantidad,
        direccion:docSnap.data().direccion,
        ciudad:docSnap.data().ciudad,
        talla:docSnap.data().talla,
        telefono:docSnap.data().telefono


    }
    return p
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
        return undefined
}
}
export const actualizarPersona =  async(idPersona:string,p:persona)=>{
    const docRef = doc(db, "personas", idPersona);

// Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {...p});
}
export const eliminarPersona= async(idPersona:string)=>{
    await deleteDoc(doc(db, "personas", idPersona));
}