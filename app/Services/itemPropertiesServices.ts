import ItemPropertie from "App/Models/ItemPropertie";

export default class itemPropertiesServices {
  static async addItemProperties(other, itemId) {
    let addItemProperties = await ItemPropertie.create({
      other: other,
      itemId: itemId
    });
    return addItemProperties;
  }
  static async getItemProperties(_id) {
    const getItemProperties = await ItemPropertie.findOne({ _id: _id });
    return getItemProperties;
  }
  static async listsItemProperties() {
    const listItemProperties = await ItemPropertie.find({ isActive: true });
    return listItemProperties;
  }
  static async updateItemProperties(_id, other, modifiedBy) {
    var time = {
      time: new Date(),
      name: modifiedBy
    }
    const updateItemProperties = await ItemPropertie.findOne({ _id: _id });
    if (updateItemProperties) {
      updateItemProperties.other = other
      updateItemProperties.updatedAt.push(time)
      await updateItemProperties.save();
    }
  }
  static async deleteItemProperties(_id) {
    const deleteItemProperties = await ItemPropertie.findOne({ _id: _id });
    if (deleteItemProperties) {
      deleteItemProperties.isActive = false

      await deleteItemProperties.save();
    }
  }
  static async itemPropertiesEditHist(_id) {
    const itemPropertiesEditHist = await ItemPropertie.findOne({ _id: _id }, { "updatedAt": 1 });
    return itemPropertiesEditHist;
  }



}

