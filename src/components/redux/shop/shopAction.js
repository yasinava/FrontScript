const addItem = (data)=>{
    return{
        type:"ADDTOSHOP",
        payload:data
    }
}
const removeItem = (data)=>{
    return{
        type:"REMOVE",
        payload:data
    }
}
const check = (data)=>{
    return{
        type:"CHECKOUT",
        payload:data
    }
}
const clear = (data)=>{
    return{
        type:"CLEAR",
        payload:data
    }
}
const addToCourse = (data)=>{
    return{
        type:"ADDTOCOURSE",
        payload:data
    }
}
export {check,addItem,removeItem,addToCourse,clear};
