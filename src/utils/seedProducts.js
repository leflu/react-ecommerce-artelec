import {addDoc, collection} from "firebase/firestore"
import { db } from "../config/firebaseConfig";
import { v4 } from "uuid";
const products = [
    {
      id:v4(),
      category: "cables",
      name: "Cable eléctrico",
      description: "Cable de cobre aislado para conexiones eléctricas seguras y eficientes.",
      price: "$12.000 CLP",
      image: "https://www.grantech.cl/wp-content/uploads/2022/12/CABLE-ELECTRICO-BLANCO.jpg",
      stock: 5
    },
    {
      id:v4(),
      category: "electricidad",
      name: "Interruptor de luz",
      description: "Interruptor de pared para encender y apagar la iluminación de manera conveniente.",
      price: "$6.500 CLP",
      image: "https://falabella.scene7.com/is/image/Falabella/gsc_113553849_671923_1?wid=800&hei=800&qlt=70",
      stock: 15
    },
    {
      id:v4(),
      category: "electricidad",
      name: "Enchufe eléctrico",
      description: "Enchufe estándar para conectar dispositivos eléctricos a la corriente.",
      price: "$4.000 CLP",
      image: "https://easycl.vtexassets.com/arquivos/ids/299953-800-450?width=800&height=450&aspect=true",
      stock: 9
    },
    {
      id:v4(),
      category: "electricidad",
      name: "Fusible",
      description: "Dispositivo de protección que se funde para evitar daños por sobrecarga eléctrica.",
      price: "$2.500 CLP",
      image: "https://motosmagnolia.cl/wp-content/uploads/2021/02/FUSI3.jpg",
      stock: 1
    },
    {
      id:v4(),
      category: "accesorios",
      name: "Alargador",
      description: "Multiplicador de tomas eléctricas para conectar varios dispositivos a la vez.",
      price: "$15.000 CLP",
      image: "https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F62a784ce99f9870e9a7ab714%2Fimage%2F62a784ce99f9870e9a7ab714%2Foriginal%2Fj1572_1.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=cf56c5995f5794cd2446968623a8eaea",
      stock: 4
    },
    {
      id:v4(),
      category: "electricidad",
      name: "Transformador",
      description: "Dispositivo que cambia el voltaje de la corriente eléctrica para adaptarlo a diferentes aparatos.",
      price: "$7.500 CLP",
      image: "https://easycl.vtexassets.com/arquivos/ids/185407/381392-01.jpg?v=637527529339830000",
      stock: "5"
    },
    {
      id:v4(),
      category: "electricidad",
      name: "Caja de conexiones",
      description: "Caja protectora para empalmar y conectar cables eléctricos de manera segura.",
      price: "$18.000 CLP",
      image: "https://http2.mlstatic.com/D_NQ_NP_973784-MLC51855246082_102022-O.webp",
      stock: "2"
    },
    {
      id:v4(),
      category: "accesorios",
      name: "Timbre eléctrico",
      description: "Dispositivo para señalizar la llegada de visitantes o notificar eventos mediante un sonido eléctrico.",
      price: "$5.550 CLP",
      image: "https://http2.mlstatic.com/D_NQ_NP_966475-MLU70424817217_072023-O.webp",
      stock: "7"
    } 
  ];

export const seedProducts = ( )=> {

    products.forEach(product =>{
        addDoc(collection(db, "products"), product)
    })
}