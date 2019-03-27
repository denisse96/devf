const store = require("../models/Store"); 
const user = require("../models/Users")


const createStore = (data) => {
	return store.create(data);
};

const getStoreByUser= (User) => {//Preguntar como se hace 
	return store.findOne({email:email});
};

const getStoreById = (id) => {
	return store.findOne({_id:id,is_active:true}).populate("posts");
};

const getAllStores = () => {
	return store.find({is_active:true}).populate("posts");
};

const updateStoreById = (id,data) =>{
	return store.findByIdAndUpdate(id,{$set:data},{new:true});
};

const deleteStoreById =  (id)  => {
	return store.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};

module.exports ={
    createStore, 
    getStoreById, 
    getStoreByUser, 
    getAllStores, 
    updateStoreById, 
    deleteStoreById

}