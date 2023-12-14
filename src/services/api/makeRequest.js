import apiClient from "./apiClient";

async function makeRequest(method, url, data = null) {
  try {
    const config = {
      method: method,
      url: url,
      data: data,
    };

    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    let errorMessage;
    if (error.response) {
      errorMessage = error.response.data;
    } else if (error.request) {
      errorMessage = "No se recibió respuesta del servidor";
    } else {
      errorMessage = "Error al realizar la solicitud";
    }

    if (errorMessage !== null) {
      console.log("errors make: " + errorMessage?.errors);
      console.log("error make: " + errorMessage?.error);
      console.log("Mesaje make: " + errorMessage?.message);
    } else {
      console.log(error);
    }

    throw errorMessage;
  }
}
export default makeRequest;
