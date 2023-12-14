import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

const useDogImageQuery = () => {
  const {
    data: perroImagen,
    isRefetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["randomDogImage"],
    queryFn: fetchRandomDogImage,
    onError: (error) => {
      console.error("Error al cargar los perros: ", error);
    },
    refetchOnWindowFocus: false,
  });

  return { perroImagen, isRefetching, isLoading, refetch };
};

export default useDogImageQuery;
