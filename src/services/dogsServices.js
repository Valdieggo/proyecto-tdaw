import makeRequest from "./api/makeRequest";

export const dogsServices = {
  perroRandom() {
    return makeRequest("get", "/api/perros/random");
  },

  perrosCandidatos(perroInteresadoId) {
    return makeRequest("get", `/api/perros/candidatos/${perroInteresadoId}`);
  },

  crearInteraccion(data) {
    return makeRequest("post", "/api/perros/interacciones", data);
  },

  perrosAceptados(id) {
    return makeRequest("get", `/api/perros/${id}/aceptados`);
  },

  perrosRechazados(id) {
    return makeRequest("get", `/api/perros/${id}/rechazados`);
  },

  listarPerros() {
    return makeRequest("get", "/api/perros");
  },

  detallePerro(id) {
    return makeRequest("get", `/api/perros/${id}`);
  },

  crearPerro({ nombre, foto_url, descripcion }) {
    return makeRequest("post", "/api/perros/", {
      nombre,
      foto_url,
      descripcion,
    });
  },

  actualizarPerro(id, data) {
    return makeRequest("put", `/api/perros/${id}`, data);
  },

  eliminarPerro(id) {
    return makeRequest("delete", `/api/perros/${id}`);
  },
};
