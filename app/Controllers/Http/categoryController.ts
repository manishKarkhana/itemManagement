import categoryServices from "App/Services/categoryServices";
export default class categoryController {
  public async addCategory({ request, response }) {
    let {category,modifiedBy} = request.all();
    let addItemProperties = await categoryServices.addCategory(category,modifiedBy);
    response.send({
      success: true,
      message: "item created",
      Item: addItemProperties,
    });
  }
  public async listItemCategory({ request, response }) {
    let { _id,category } = request.all();
    let getItem = await categoryServices.listItemCategory(_id,category);
    response.send({
      success: true,
      item: getItem,
    });
  }
  public async listCategory({ request, response }) {
    let { } = request.all();
    let getItem = await categoryServices.listCategory();
    response.send({
      success: true,
      item: getItem,
    });
  }
  public async updateCategory({ request, response }) {
    let { _id,category,modifiedBy} = request.all();
    let getItem = await categoryServices.updateCategory( _id,category,modifiedBy);
    response.send({
      success: true,
      message: "category updated",
      item: getItem,
    });
  }
  public async deleteCategory({ request, response }) {
    let { _id} = request.all();
    await categoryServices.deleteCategory(_id);
    response.send({
      success: true,
      message: "category deleted",

    });
  }
  public async categoryEditHistory({ request, response }) {
    let { _id } = request.all();
    let categoryEditHistory = await categoryServices.categoryEditHistory(_id);
    response.send({
      success: true,
      categoryEditHistory: categoryEditHistory,
    });
  }
}
