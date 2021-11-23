import React from "react";
import { Routes, Route } from "react-router-dom";

import Lobby from "./pages/Lobby";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import Friends from "./pages/Friends";
import Setting from "./pages/SeeMore";

function App() {
  return (
    <Routes>
      <Route index element={<Lobby />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/rooms" element={<RoomList />} />
      <Route path="/rooms/:roomId" element={<RoomDetail />} />
      <Route path="/more" element={<Setting />} />
    </Routes>
  );
}

export default App;
