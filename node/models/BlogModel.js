/*import mongoose from "mongoose";
const Schema = mongoose.Schema

const itemSchema = new Schema(
    {
      title: {type:String},       
      id: {type:Number}, 
      image: {type:String}, 
      price: {type:Number},
      style: {type:String}, 
      quanty: {type:Number},
    },
    {collection: 'bestoffers'}
)

export default mongoose.model('ItemModel', itemSchema)*/

import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
      title: {type:String},       
      id: {type:Number}, 
      image: {type:String}, 
      price: {type:Number},
      style: {type:String}, 
      quanty: {type:Number},
    },
    {collection: 'bestoffers'}
)

export default mongoose.model('BlogModel', blogSchema)