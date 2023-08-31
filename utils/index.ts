export async function fetchCars() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "X-RapidAPI-Key": "a30431a34cmshbc3d4229ea5a477p16e2cejsnc5cd15dc14b6",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// export async function fetchCars() {
//   // const { manufacturer, year, model, limit, fuel } = filters;

//   // Set the required headers for the API request
//   const headers = {
//     "X-RapidAPI-Key": "a30431a34cmshbc3d4229ea5a477p16e2cejsnc5cd15dc14b6",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
//     {
//       headers: headers,
//     }
//   );

//   // Parse the response as JSON
//   const result = await response.json();

//   return result;
// }
