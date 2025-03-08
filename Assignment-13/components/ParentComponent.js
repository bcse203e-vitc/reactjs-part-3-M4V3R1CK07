import { useState } from "react";

function ParentComponent() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent updateMessage={() => setMessage("Updated!")} />
    </div>
  );
}

function ChildComponent({ updateMessage }) {
  return <button onClick={updateMessage}>Change Parent Message</button>;
}

export default ParentComponent;
