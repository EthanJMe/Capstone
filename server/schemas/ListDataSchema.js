import mongoose from 'mongoose';
const listDataSchema = mongoose.Schema({
    Title: String,
    Description: String,
});
const ListData = mongoose.model('Data', listDataSchema)
export default ListData