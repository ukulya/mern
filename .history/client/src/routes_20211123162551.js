import { Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { LinksPage } from "./pages/LinksPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route exact path="/links" element={<LinksPage />} />
        <Route exact path="/create" element={<CreatePage />} />
        <Route path="/detail:id" element={<DetailPage />} />
        <Route to="*" element={<AuthPage/>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route exact path="/" element={<AuthPage />} />
      <Redirect to="/create" />
    </Routes>
  );
};
