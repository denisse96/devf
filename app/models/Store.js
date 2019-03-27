const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StoreSchema = new Schema({

    store_owner:{
        type: Schema.Types.ObjectId, 
        ref: "users"    
    },

    store_name:{
        type: String, 
        required:true
    }, 
    store_description:{
        type: String, 
        required:true
    }, 
    store_type:{
        type: String, 
        enum: ["Visa", "Tour", "Seguro"]
    }, 
    is_active: {
		type: Boolean,
		default: true
	}


}, { "collection": "store", "timestamps": true });


mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("store", StoreSchema);