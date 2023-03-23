import Mongoose from "mongoose";
const { Schema } = Mongoose;

const itemSchema = new Schema({
  versionId: { type: String, require: true, maxlength: 250, index: true },
  owner: { type: String, require: true, maxlength: 250, index: true },
  name: { type: String, require: true, maxlength: 250, index: true },
  itemID: { type: String, require: true, maxlength: 250, index: true },
  itemName: { type: String, require: true, maxlength: 250, index: true },
  category: { type: String, require: true, maxlength: 250, index: true },
  material: { type: String, require: true, maxlength: 250, index: true },
  length: { type: String, require: true, maxlength: 250, index: true },
  width: { type: String, require: true, maxlength: 250, index: true },
  height: { type: String, require: true, maxlength: 250, index: true },
  hsnSAC: { type: String, require: true, maxlength: 250, index: true },
  targetCost: { type: String, require: true, maxlength: 250, index: true },
  process: { type: String, require: true, maxlength: 250, index: true },
  postProcess: { type: String, require: true, maxlength: 250, index: true },
  description: { type: String, require: true, maxlength: 250, index: true },
  surfaceFinish: { type: String, require: true, maxlength: 250, index: true },
  addedBY: { type: String, require: true, maxlength: 250, index: true },
  isActive: { type: Boolean, default: true, require: true },
  createdAt: { type: Date, immutable: true, default: () => new Date() },
  updatedAt: [{ time: Date, name: String }],
  other: [{ type: Map, of: String }],


});
export default Mongoose.model("items", itemSchema);
