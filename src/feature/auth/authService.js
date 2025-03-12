import axios from "axios"

export const register = async(formData) =>{

   try {
    const response = await axios.post("/api/user/register" , formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data
   } catch (error) {
    console.log(error)
   }
    

}


export const login = async(formData) =>{
// console.log(formData)
    try {
        const response = await axios.post("/api/user/login" , formData);
   localStorage.setItem("user", JSON.stringify(response.data));
   return response.data
    } catch (error) {
       console.log(error) 
    }
    

}

