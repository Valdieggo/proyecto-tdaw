import axios from "axios";
import { useQuery } from "react-query";

const DOG_API_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const fetchRandomDogImage = async () => {
  try {
    const response = await axios.get(DOG_API_ENDPOINT);

    if (response.status !== 200) {
      throw new Error("No se pudo recuperar la imagen del perro");
    }

    return response.data.message;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "No se pudo recuperar la imagen del perro"
    );
  }
};

export const useDogImageQuery = () => {
  return useQuery("randomDogImage", fetchRandomDogImage, {
    refetchOnWindowFocus: false,
  });
};
