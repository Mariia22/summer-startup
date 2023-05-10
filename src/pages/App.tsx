import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from './Frame';
import { routesConfig } from './utils/routesConfig';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Frame />}>
          {routesConfig.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
