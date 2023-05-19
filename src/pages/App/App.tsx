import { HashRouter, Routes, Route } from "react-router-dom";
import { routesConfig } from "../../utils/routesConfig";
import { useAuthGetData } from "./api/auth";
import Header from "../../modules/Header/Header";
import { FilterContext, initialState } from "./utils/context";
import { useReducer } from "react";
import { reducer } from "./utils/reducer";

const App = () => {
  const { authData } = useAuthGetData();
  const token = authData?.access_token;
  token && localStorage.setItem("token", `${token}`);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Header />
        <Routes>
          {routesConfig.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Routes>
      </HashRouter>
    </FilterContext.Provider>
  );
};

export default App;
