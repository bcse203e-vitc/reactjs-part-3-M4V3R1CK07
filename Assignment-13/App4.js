import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <UserList users={["Aditya", "Aayush", "Kartik"]} />
    </div>
  );
}

export default App;
