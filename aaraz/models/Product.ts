import mongoose, { Schema } from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}


const ProductSchema: Schema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true },
  productId: { type: String, required: true, unique: true },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
