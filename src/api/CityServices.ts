import axios from "axios";

const cityUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bb3759c751msh10ede5cda96bceep15077djsn07d5365cea7a',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  export const getCities = async (cityName: string) => {
    try {
        const result = await axios.get(`${cityUrl}?namePrefix=${cityName}`, options)
        return result.data;
    } catch (e: any) {
        alert(`${e.response.data.message}. Try again after 3 seconds`);
    }
        
  }
  