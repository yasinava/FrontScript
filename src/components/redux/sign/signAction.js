const sign =(data)=>{
    return{
        type :"SIGN",
        payload : data
    }
}
const login = (dataLogin)=>{
    return{
        type :"LOGIN",
        payload : dataLogin
    }
}
const logout = ()=>{
    return{
        type :"LOGOUT",
    }
}
export {login,logout,sign};