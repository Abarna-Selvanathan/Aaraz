
import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, default: () => `U${Date.now()}` },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});


export default mongoose.models.User || mongoose.model('User', UserSchema);



