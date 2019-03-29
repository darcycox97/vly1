import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  cuid: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  name: { type: 'String', required: true },
});

export default mongoose.model('Volunteer', volunteerSchema);
