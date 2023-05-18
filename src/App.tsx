import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/post/Detail";
import Create from "./page/post/Create";
import Edit from "./page/post/Edit";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} index />
      <Route path="post">
        <Route path=":id">
          <Route index element={<Detail />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
}
