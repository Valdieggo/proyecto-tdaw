import { useQuery } from "@tanstack/react-query";
import { dogsServices } from "../services/dogsServices";

const useDogRegisterRandom = (perroId) => {
  const {
    data: perroRegistradoRandom,
    isRefetching,
    isLoading,
  } = useQuery({
    queryKey: ["randomDogRegister"],
    queryFn: () => dogsServices.perrosCandidatos(perroId),
    onError: (error) => {
      console.error("Error al cargar los perros: ", error);
    },
    refetchOnWindowFocus: false,
    enabled: !!perroId,
  });

  return { perroRegistradoRandom, isRefetching, isLoading };
};

export default useDogRegisterRandom;
