const products = [
    {
      id: "1",
      category: "cables",
      name: "Cable eléctrico",
      description: "Cable de cobre aislado para conexiones eléctricas seguras y eficientes.",
      price: "$12.000 CLP",
      image: "https://ttp.cl/media/catalog/product/cache/a8da9cf5741381b077f35393acea39f7/8/6/866122principal_1.jpg",
      stock: 5
    },
    {
      id: "2",
      category: "electricidad",
      name: "Interruptor de luz",
      description: "Interruptor de pared para encender y apagar la iluminación de manera conveniente.",
      price: "$6.500 CLP",
      image: "https://falabella.scene7.com/is/image/Falabella/gsc_117356520_1757229_1?wid=800&hei=800&qlt=70",
      stock: 15
    },
    {
      id: "3",
      category: "electricidad",
      name: "Enchufe eléctrico",
      description: "Enchufe estándar para conectar dispositivos eléctricos a la corriente.",
      price: "$4.000 CLP",
      image: "https://easycl.vtexassets.com/arquivos/ids/299953-800-450?width=800&height=450&aspect=true",
      stock: 9
    },
    {
      id: "4",
      category: "electricidad",
      name: "Fusible",
      description: "Dispositivo de protección que se funde para evitar daños por sobrecarga eléctrica.",
      price: "$2.500 CLP",
      image: "https://maxelectronica.cl/3457/fusible-cilindrico-capsula-de-vidrio-modelo-bgxp-5x20mm-valores.jpg",
      stock: 1
    },
    {
      id: "5",
      category: "accesorios",
      name: "Alargador",
      description: "Multiplicador de tomas eléctricas para conectar varios dispositivos a la vez.",
      price: "$15.000 CLP",
      image: "https://rhona.cl/uploads/2014/08/20140829120020-producto-alargador-multiple-6-tomas_1-800x515.jpg",
      stock: 4
    },
    {
      id: "6",
      category: "electricidad",
      name: "Transformador",
      description: "Dispositivo que cambia el voltaje de la corriente eléctrica para adaptarlo a diferentes aparatos.",
      price: "$7.500 CLP",
      image: "https://easycl.vtexassets.com/arquivos/ids/185407/381392-01.jpg?v=637527529339830000",
      stock: "5"
    },
    {
      id: "7",
      category: "electricidad",
      name: "Caja de conexiones",
      description: "Caja protectora para empalmar y conectar cables eléctricos de manera segura.",
      price: "$18.000 CLP",
      image: "https://http2.mlstatic.com/D_NQ_NP_891716-MLC69762633703_062023-O.webp",
      stock: "2"
    },
    {
      id: "8",
      category: "accesorios",
      name: "Timbre eléctrico",
      description: "Dispositivo para señalizar la llegada de visitantes o notificar eventos mediante un sonido eléctrico.",
      price: "$5.550 CLP",
      image: "https://http2.mlstatic.com/D_NQ_NP_939188-MLC49527730417_032022-O.webp",
      stock: "7"
    } 
  ];
  
export const getProducts = () =>{
  return new Promise((resolve, reject) =>{
    if(products.length > 0){
      setTimeout(() => {
        resolve(products)
      }, 2000);
    }else{
      reject("No hay productos.")
    }
  })
}

export const getProductById = (id) => {
  return new Promise ((resolve, reject) =>{
    if(products.length > 0){
      const product = products.find( p => p.id === id);
      setTimeout(() =>{
        if(!product){
          reject(`No se encuentre el producto con id ${id}`)
        }
        resolve(product);
      }, 2000);
    }else {
      reject("No hay productos");
    }
  })
}