import axios from "axios";


const API_ID = "7209541c";
const API_KEY = "9135d9ba9da334cbd46241e33e938b6e";

export default {
 getRecipe: (term) => {
 return axios.request(`https://api.edamam.com/search?q=${term}&app_id=${API_ID}&app_key=${API_KEY}`);
}
}
