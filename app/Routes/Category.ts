import Route from '@ioc:Adonis/Core/Route'

Route.post("/item/addCategory", "categoryController.addCategory"),
Route.get("/item/listItemCategory", "categoryController.listItemCategory")
Route.get("/item/listCategory", "categoryController.listCategory")
Route.post("/item/updateCategory", "categoryController.updateCategory")
Route.delete("/item/deleteCategory", "categoryController.deleteCategory")
Route.get("/item/categoryEditHistory", "categoryController.categoryEditHistory")

