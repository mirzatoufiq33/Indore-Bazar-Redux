import axios from "axios";

 export const fetchproducts = async() =>{

   const response = await axios.get('https://fakestoreapi.com/Products')
  //  console.log(response)
  //  console.log(response.data)
   
   return response.data;

  };


  export const fetchproduct = async (id) =>{
    try {
      const response = await axios.get("https://fakestoreapi.com/Products/" + id)
      // console.log(response)
      // console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }