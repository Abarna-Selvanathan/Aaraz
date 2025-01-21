
import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
