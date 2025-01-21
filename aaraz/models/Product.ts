
import mongoose, { Schema } from 'mongoose';




const ProductSchema: Schema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  productId: { type: String, required: true, unique: true },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
