import UserSchema from "./UserSchema,js";
//user CRUD

//create user 
 export const creatUser = userData =>{
    return UserSchema(userData).save()
}; 

// get single use by user 
 export const getUserById = (_id) =>{
    return UserSchema.findByID(_id);
};

// git single use rby filer, filter must be object 
export const getAnyUser= (filter) =>{
    return UserSchema.findOne(filter);
};

// UPDAT USER , @id is string and update in an object
export const updateUserById= (_id, updateDate) =>{
    return UserSchema.findByIdAndUpdate(_id, updateDate);
};

// delete user by _id
export const deleteUserById = (_id) =>{
    return UserSchema.findByIdAndDelete(_id);
};
