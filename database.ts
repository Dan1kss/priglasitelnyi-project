import {createTypees,updateTypees,Gest} from './typeeeeees'
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx3AFqIigST2RUwzDWh5duDb8Cim1RR136N_CBv7LK8cLJ_7cLs1B50XzzIPZdcugYNuQ/exec";
import axios from "axios";
const GestsList: Gest[] = []
let idcounter = 1
// export const create =(body:createTypees): Gest =>{
//     const geest = {
//       id: idcounter,
//       info: body.info,
//       apportunity: body.info.apportunity
//     };
//     idcounter += 1
//     GestsList.push(geest)
//     return geest 
// }
export const read =()=>{
    return GestsList

}


export const create = async (body: createTypees): Promise<Gest> => {

  const geest = {
    id: idcounter,
    info: body.info,
    apportunity: body.info.apportunity,
  };
  idcounter += 1;
  GestsList.push(geest);

  try {
    await axios.post(GOOGLE_SCRIPT_URL, geest, {
      headers: {
        "Content-Type": "text/plain;charset=utf-8", 
      },
    });
    // await axios.post(GOOGLE_SCRIPT_URL, geest);
    // console.log("Данные успешно отправлены в Google Таблицы");
  } catch (error) {
    console.error("Ошибка при отправке в Google Таблицы:", error);
  }
  return geest;
};





// export const update = (id:number,body:updateTypees): Gest | null =>{
//     const geest= GestsList.find((e)=>e.id === id)
//     if (geest){
//         geest.info = body.info
//         geest.apportunity= body.apportunity
//         return geest
//     }
//     else {
//         return null
//     }
// }