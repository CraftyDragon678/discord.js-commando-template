import { Document, model, Schema } from 'mongoose';

export interface Setting extends Document {
  _id: string;
  prefix: string;
}

const settingSchema = new Schema<Setting>({
  _id: { type: String, required: true },
  prefix: { type: String },
}, { versionKey: false, timestamps: true });

const Settings = model<Setting>('setting', settingSchema);
export default Settings;
