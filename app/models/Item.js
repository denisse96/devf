const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ItemSchema = new Schema({

    item_store:{
        type: Schema.Types.ObjectId, 
        ref: "store"
        
        
    },

    item_name:{
        type: String, 
        required:true
    }, 
    item_description:{
        type: String, 
        required:true
    }, 
    item_price:{
        type: Int, 
        required:true
    }, 
    
    is_active: {
		type: Boolean,
		default: true
	}


}, { "collection": "item", "timestamps": true });


mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("item", ItemSchema);