import Route from '@ioc:Adonis/Core/Route'

Route.post("/item/addItemProperties", "itemPropertiesController.addItemProperties")
Route.get("/item/getItemProperties", "itemPropertiesController.getItemProperties")
Route.get("/item/listsItemProperties", "itemPropertiesController.listsItemProperties")
Route.post("/item/updateItemProperties", "itemPropertiesController.updateItemProperties")
Route.delete("/item/deleteItemProperties", "itemPropertiesController.deleteItemProperties")
Route.get("/item/itemPropertiesEditHist", "itemPropertiesController.itemPropertiesEditHist")

