import { ProductMemoryService } from "./services/product-memory.service";

const productMemoryService = new ProductMemoryService();
//probando creacion
productMemoryService.create({
  title: "Calcetines",
  price: 50,
  description: "Calcetines para caballero",
  categoryId: 5,
  images: [],
})

const products = productMemoryService.getAll();
console.log('Original', products[0])
const productId = products[0].id;
//probanco actualizacion
productMemoryService.update(productId, {
  price: 110,
  images: ["image1.png", "image2.png", "image3.jpg"]
})
//probando metodo de busqueda
const rta = productMemoryService.findOne(productId)
console.log("updated, finded, done..!", rta)
