import axios from "axios"

const API_URL = "https://auth-backend-93eo.onrender.com/api/user"

export const register = async(formData) =>{

   try {
    const response = await axios.post(API_URL + "/register" , formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
   } catch (error) {
    console.log(error)
   }
}


export const login = async(formData) =>{
// console.log(formData)
    try {
        const response = await axios.post(API_URL + "/login" , formData);
   localStorage.setItem("user", JSON.stringify(response.data));
   return response.data
    } catch (error) {
       console.log(error) 
    }
    

}

