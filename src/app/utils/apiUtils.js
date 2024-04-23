import axios from 'axios';


export async function testNewApi(muscles, equipment, intensityLevel) {
    const options = {
        method: 'GET',
        url: 'https://work-out-api1.p.rapidapi.com/search',
        params: {
          Muscles: `${muscles}`,
          Equipment: `${equipment}`,
          Intensity_Level: `${intensityLevel}`
        },
        headers: {
          'X-RapidAPI-Key': '3d357e3a29msh445b97c70ac3addp1f649djsn23ce1b980cfd',
          'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }
}
