import Mongoose from 'mongoose';
const { Schema } = Mongoose;

const itemPropertiesSchema = new Schema({
    other: { type: Map, of: String },
    itemId: { type: Schema.Types.ObjectId, ref: 'items' },
    isActive: { type: Boolean, default: true, require: true },
    createdAt: { type: Date, immutable: true, default: () => new Date() },
    updatedAt: [{ time: Date, name: String }],
});
export default Mongoose.model('itemProperties', itemPropertiesSchema);
