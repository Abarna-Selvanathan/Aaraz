
import mongoose, { Schema, Document } from 'mongoose';

const OrderManagementSchema: Schema = new Schema({
  orderId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  orderStatus: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], required: true },
  productDetail: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

export default mongoose.models.OrderManagement || mongoose.model('OrderManagement', OrderManagementSchema);
