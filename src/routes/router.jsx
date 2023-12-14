import { createBrowserRouter } from "react-router-dom";
import { CandidatosSeleccion, PerfilSeleccion, SignUp } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/candidato",
    element: <CandidatosSeleccion />,
  },
  {
    path: "/perfil",
    element: <PerfilSeleccion />,
  },
]);

export default router;
