import Route from '@ioc:Adonis/Core/Route'

Route.post("/item/additem", "ItemController.addItem"),
Route.post("/item/updateItem", "ItemController.updateItem")
Route.get("/item/getItem", "ItemController.getItem")
Route.get("/item/getItemList", "ItemController.getItemList")
Route.delete("/item/deleteItem", "ItemController.deleteItem")
Route.get("/item/listItemProperties", "ItemController.listItemProperties")
Route.get("/item/listAllItemProperties", "ItemController.listAllItemProperties")
Route.get("/item/itemEditHistory", "ItemController.itemEditHistory")