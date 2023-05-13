import { BrowserRouter, Routes, Route} from "react-router-dom";
import { routesConfig } from "../../utils/routesConfig";
import { useAuthGetData } from "./api/auth";
import Header from "../../modules/Header/Header";

const App = () => {
  const { authData } = useAuthGetData();
  const token = authData?.access_token;
  token && localStorage.setItem("token", `${token}`);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routesConfig.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
