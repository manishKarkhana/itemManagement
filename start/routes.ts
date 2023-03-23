/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Items from "App/Models/Items";

import "App/Routes/Item"
import "App/Routes/ItemProperties"
import "App/Routes/Category"




const mongoose = require("mongoose")

Route.get('/', async () => {
  return { hello: 'world' }
})
// module.exports = {
//   sum: function () {
//     var bb: any = []
//     const user = Items.collection;
//     const changeStream = user.watch();
//     changeStream.on('change', next => {
//       var aa = Object.entries(next)
//       aa = aa[5][1].updatedFields
//       bb.push(aa)
//       console.log(bb, "bhjhhjhj")
//     });


//   }
// };
var watchMongodb = function () {
  const user = Items.collection;
  const changeStream = user.watch();
  var aa
  return changeStream.on('change', next => {
    aa = Object.entries(next)
  });
};
const DB = "mongodb+srv://admin:hello.1234@cluster0.ciea9.mongodb.net/test"
mongoose.connect(DB).then(() => {
  console.log("mongo database connected")
  watchMongodb()
})

module.exports = {
  watchMongodb
}

