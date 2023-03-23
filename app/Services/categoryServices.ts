import Category from "App/Models/Category";
import Mongoose from 'mongoose'



export default class categoryServices {
  static async addCategory(category,modifiedBy) {
    let addCategory = await Category.create({
        category: category,
        modifiedBy:modifiedBy
    });
    return addCategory;
  }
  static async listCategory() {

    const listCategory = await Category.find(
      { isActive: true },
    );
    return listCategory;
  }
  static async listItemCategory(_id,category) {
   
    let listItemCategory =Category.aggregate([
      { 
        $match: { 
          "_id":  new Mongoose.Types.ObjectId(_id.toString()),
          "category":category 
        } 
      },
      {
        $lookup: {
          from: "items",
          localField: "category",
          foreignField: "category",
          as: "items",
        },
      },
      { $project : { "category" :1 , "_id" : 1,"items":1,"modifiedBy":1,"updatedAt":1 } }
    ])          
    return listItemCategory;
  }
  static async updateCategory(_id,category,modifiedBy) {
    var time={
      time:new Date(),
      name:modifiedBy
    }
  
    const updateCategory = await Category.findOne({ _id: _id });
    if (updateCategory) {
      updateCategory.category=category
      updateCategory.updatedAt.push(time)
        await updateCategory.save();
    }
    return updateCategory
  }
  static async deleteCategory(_id) {
    const deleteCategory = await Category.findOne({ _id: _id });
    if (deleteCategory) {
      deleteCategory.isActive=false
        await deleteCategory.save();
    }
  }
  static async categoryEditHistory(_id) {
    const categoryEditHistory = await Category.findOne({ _id: _id },{"updatedAt":1});
    return categoryEditHistory;
  }
  
  
}
