import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/Checklist";
import Stats from "./components/Stats";

function App() {
  const [todo, setTodo] = useState([]);
  function handleSubmit(title) {
    if (title.trim() !== "") {
      const newNote = {
        id: new Date().getSeconds(),
        title,
        done: false,
      };
      setTodo([...todo, newNote]);
    }
  }

  function handleToggleDone(itemId) {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === itemId ? { ...item, done: !item.done } : item
      )
    );
  }

  function DeleteItem(id) {
    setTodo((removeItem) => removeItem.filter((item) => item.id !== id));
    console.log(todo);
  }

  function HapusSemuaItem() {
    const confirm = window.confirm(
      "Apakah kamu yakin ingin menghapus semua tugas?"
    );
    if (confirm) {
      setTodo([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <CheckList
        todo={todo}
        onToggleDone={handleToggleDone}
        DeleteItem={DeleteItem}
        onClearItems={HapusSemuaItem}
      />
      <Stats items={todo} />
    </div>
  );
}

export default App;
