import ItemService from "App/Services/ItemService";

export default class ItemController {
  public async addItem({ request, response }) {
    let { versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, addedBY, modifiedBy } = request.all();
    let addItem = await ItemService.addItem(versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, addedBY, modifiedBy);
    response.send({
      success: true,
      message: "item created",
      Item: addItem,
    });
  }

  public async updateItem({ request, response }) {
    let { _id, versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, modifiedBy } = request.all();
    let updateItem = await ItemService.updateItem(_id, versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, modifiedBy);

    response.send({
      success: true,
      message: "item updated",
      Item: updateItem,
    });
  }
  public async getItem({ request, response }) {
    let { _id } = request.all();
    let getItem = await ItemService.getItem(_id);
    response.send({
      success: true,
      item: getItem,
    });
  }
  public async getItemList({ request, response }) {
    let { sort_by_itemName, sort_by_updatedAt, sort_by_addedBY, limit, offset, itemID } = request.all();
    let getItemList = await ItemService.getItemList(sort_by_itemName, sort_by_updatedAt, sort_by_addedBY, limit, offset, itemID);
    response.send({
      success: true,
      getItemList: getItemList,
    });
  }
  public async deleteItem({ request, response }) {
    let { _id } = request.all();
    await ItemService.deleteItem(_id);
    response.send({
      success: true,
      message: "item deleted",

    });
  }
  public async listItemProperties({ request, response }) {
    let { _id } = request.all();
    let listItemProperties = await ItemService.listItemProperties(_id);
    response.send({
      success: true,
      item: listItemProperties,
    });
  }
  public async listAllItemProperties({ request, response }) {
    let { } = request.all();
    let listAllItemProperties = await ItemService.listAllItemProperties();
    response.send({
      success: true,
      item: listAllItemProperties,
    });
  }
  public async itemEditHistory({ request, response }) {
    let { _id } = request.all();
    let itemEditHistory = await ItemService.itemEditHistory(_id);
    response.send({
      success: true,
      itemEditHist: itemEditHistory,
    });
  }

}
