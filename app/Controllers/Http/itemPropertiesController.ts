import itemPropertiesServices from "App/Services/itemPropertiesServices";
export default class itemPropertiesController {
  public async addItemProperties({ request, response }) {
    let {other,itemId} = request.all();
    let addItemProperties = await itemPropertiesServices.addItemProperties(other,itemId);
    response.send({
      success: true,
      message: " itemProperties created",
      Item: addItemProperties,
    });
  }
  public async getItemProperties({ request, response }) {
    let { _id } = request.all();
    let getItemProperties = await itemPropertiesServices.getItemProperties(_id);
    response.send({
      success: true,
      item: getItemProperties,
    });
  }
  public async listsItemProperties({ request, response }) {
    let { } = request.all();
    let listItemProperties = await itemPropertiesServices.listsItemProperties();
    response.send({
      success: true,
      item: listItemProperties,
    });
  }
  public async updateItemProperties({ request, response }) {
    let { _id,other,modifiedBy} = request.all();
    let updateItemProperties = await itemPropertiesServices.updateItemProperties(_id,other,modifiedBy);
    response.send({
      success: true,
      message: " itemProperties updated",

      item: updateItemProperties,
    });
  }
  public async deleteItemProperties({ request, response }) {
    let { _id} = request.all();
    await itemPropertiesServices.deleteItemProperties(_id,);
    response.send({
      success: true,
      message: " itemProperties deleted",
    });
  }
  public async itemPropertiesEditHist({ request, response }) {
    let { _id } = request.all();
    let itemPropertiesEditHist = await itemPropertiesServices.itemPropertiesEditHist(_id);
    response.send({
      success: true,
      itemPropertiesEditHist: itemPropertiesEditHist,
    });
  }

}