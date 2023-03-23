import Items from "App/Models/Items";
import Mongoose from 'mongoose'
const import1 = require('/Users/manishsingh/item-service/start/routes.ts');




export default class itemService {
  static async addItem(versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, addedBY, modifiedBy) {
    let addItem = await Items.create({
      versionId: versionId,
      owner: owner,
      name: name,
      itemID: itemID,
      itemName: itemName,
      category: category,
      material: material,
      length: length,
      width: width,
      height: height,
      hsnSAC: hsnSAC,
      targetCost: targetCost,
      process: process,
      postProcess: postProcess,
      description: description,
      surfaceFinish: surfaceFinish,
      addedBY: addedBY,
    });

    return addItem;
  }
  static async updateItem(_id, versionId, owner, name, itemID, itemName, category, material, length, width, height, hsnSAC, targetCost, process, postProcess, description, surfaceFinish, modifiedBy) {
    var value = import1.watchMongodb()
    var change1
    var flage = true;
    var change
    var time = {
      time: new Date(),
      name: modifiedBy
    }
    const updateItem = await Items.findOne({ _id: _id });
    if (updateItem) {
      // updateItem.other = value,
      updateItem.updatedAt.push(time),
        (updateItem.name = name),
        (updateItem.versionId = versionId),
        (updateItem.owner = owner),
        (updateItem.name = name),
        (updateItem.itemID = itemID),
        (updateItem.itemName = itemName),
        (updateItem.category = category),
        (updateItem.material = material),
        (updateItem.length = length),
        (updateItem.width = width),
        (updateItem.height = height),
        (updateItem.hsnSAC = hsnSAC),
        (updateItem.targetCost = targetCost),
        (updateItem.process = process),
        (updateItem.postProcess = postProcess),
        (updateItem.description = description),
        (updateItem.surfaceFinish = surfaceFinish),
        await updateItem.save();
      value.on('change', next => {
        change = next.updateDescription.updatedFields
        var key = Object.keys(change)
        change1 = [next.updateDescription.updatedFields]
        change1 = change1.map(function (obj) {
          obj['updatedAt'] = obj[key[key.length - 1]];
          delete obj[key[key.length - 1]];
          return obj;
        });


        if (flage == true) {
          Items.findByIdAndUpdate({ _id: _id },
            { $push: { "other": change1[0] } }, { new: true }).exec();
          flage = false
        }
      });
    }
    return
  }
  static async getItem(_id) {
    const getItem = await Items.findOne({ _id: _id });
    return getItem;
  }
  static async getItemList(sort_by_itemName, sort_by_updatedAt, sort_by_addedBY, limit, offset, itemID) {
    let sortByQuery: {} = { _id: -1 | 1 }
    if (sort_by_itemName) {
      sortByQuery = {}
      sortByQuery['itemName'] = sort_by_itemName === 'asc' ? 1 : -1
    }

    if (sort_by_updatedAt) {
      sortByQuery = {}
      sortByQuery['updatedAt.time'] = sort_by_updatedAt === 'asc' ? 1 : -1
    }
    if (sort_by_addedBY) {
      sortByQuery = {}
      sortByQuery['addedBY'] = sort_by_addedBY === 'asc' ? 1 : -1
    }

    let query = {}

    if (itemID != '' && itemID != undefined) {
      query['itemID'] = new RegExp(itemID, 'i')
    }

    const getItemList = await Items.find({ $and: [{ isActive: true }, query] },
      { _id: 1, versionId: 1, owner: 1, name: 1, itemID: 1, itemName: 1, category: 1, material: 1, length: 1, width: 1, height: 1, hsnSAC: 1, targetCost: 1, process: 1, postProcess: 1, description: 1, surfaceFinish: 1, addedBY: 1, modifiedBy: 1, 'updatedAt.time': 1, 'updatedAt.name': 1 }
    ).collation({ locale: 'en' })
      .sort(sortByQuery)
      .skip(offset)
      .limit(limit)
    return getItemList;
  }
  static async deleteItem(_id) {
    const deleteItem = await Items.findOne({ _id: _id });
    if (deleteItem) {
      deleteItem.isActive = false;
      await deleteItem.save();

    }

    return deleteItem;
  }
  static async listItemProperties(_id) {
    let listItemProperties = Items.aggregate([
      {
        $match: {
          "_id": new Mongoose.Types.ObjectId(_id.toString()),
        }
      },
      {
        $lookup: {
          from: "itemproperties",
          localField: "_id",
          foreignField: "itemId",
          as: "itemproperties",
        },
      },
      // { 
      //   $project : { 
      //     "versionId":1,
      //     "owner":1,
      //     "name":1,
      //     "itemID":1,
      //     "itemName":1,
      //     "category":1,
      //     "material":1,
      //     "length":1,
      //     "width":1,
      //     "height":1,
      //     "hsnSAC":1,
      //     "targetCost":1,
      //     "process":1,
      //     "postProcess":1,
      //     "description":1,
      //     "surfaceFinish":1,
      //     "addedBY":1,
      //     "modifiedBy":1,
      //     "aa":1

      //   } 
      // }
    ])
    console.log(listItemProperties, "vhjkl;kjh")
    return listItemProperties;
  }
  static async listAllItemProperties() {
    let listAllItemProperties = Items.aggregate([

      {
        $lookup: {
          from: "itemproperties",
          localField: "_id",
          foreignField: "itemId",
          as: "itempropertie",
        },
      },
      // { 
      //   $project : { 
      //     "versionId":1,
      //     "owner":1,
      //     "name":1,
      //     "itemID":1,
      //     "itemName":1,
      //     "category":1,
      //     "material":1,
      //     "length":1,
      //     "width":1,
      //     "height":1,
      //     "hsnSAC":1,
      //     "targetCost":1,
      //     "process":1,
      //     "postProcess":1,
      //     "description":1,
      //     "surfaceFinish":1,
      //     "addedBY":1,
      //     "modifiedBy":1,
      //     "itemPropertie":1

      //     } 
      // }
    ])
    return listAllItemProperties;
  }
  static async itemEditHistory(_id) {
    const itemEditHistory = await Items.findOne({ _id: _id }, { "other": 1 });
    return itemEditHistory;
  }

}
