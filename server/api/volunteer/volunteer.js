import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  cuid: { type: 'String', required: true },
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Volunteer', volunteerSchema);
