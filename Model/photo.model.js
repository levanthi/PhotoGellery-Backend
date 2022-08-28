import mongoose from 'mongoose';
const photoSchema = mongoose.Schema(
  {
    data: Buffer,
    contentType: String,
  },
  { timestamps: true }
);

const photoModel = mongoose.model('photoModel', photoSchema);
export default photoModel;
