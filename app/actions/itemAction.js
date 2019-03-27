const store = require("../models/Store"); 
const item = require("../models/Item")


const createItem = (data) => {
	return item.create(data);
};

/*
const getStoreById = (id) => {
	return store.findOne({_id:id,is_active:true}).populate("posts");
};
*/
const getAllItems = () => {
	return item.find({is_active:true}).populate("posts");
};

const updateItemById = (id,data) =>{
	return item.findByIdAndUpdate(id,{$set:data},{new:true});
};

const deleteItemById =  (id)  => {
	return item.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports ={
    createItem, 
    getAllItems, 
    updateItemById, 
    deleteItemById

}