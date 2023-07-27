const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "35d9887fd6mshc2d5dffc8ea660cp1ebf9bjsnd818e03b049f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export const getCars = async () => {
  let res, err;
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res = result;
  } catch (error) {
    err = error;
  }
  return { res, err };
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
