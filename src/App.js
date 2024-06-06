import { useState } from "react";
const listItems = [
  {
    id: 1,
    title: "Ngoding",
    done: false,
  },

  {
    id: 2,
    title: "Makan",
    done: false,
  },
];
function App() {
  const [todo, setTodo] = useState(listItems);
  function handleSubmit(title) {
    if (title.trim() !== "") {
      const newNote = {
        id: new Date().getHours(),
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
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <CheckList todo={todo} onToggleDone={handleToggleDone} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝 Todo Ceklis ✅</span>;
}

function Form({ onSubmit }) {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Ada yang mau kamu catat? 🤔</h3>
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={handleChange}
        />
        <button>add</button>
      </form>
    </>
  );
}

function CheckList({ todo, onToggleDone }) {
  return (
    <div className="list">
      <ul>
        {todo.map((item) => (
          <Item key={item.id} item={item} onToggleDone={onToggleDone} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onToggleDone }) {
  return (
    <li key={item.id}>
      <input
        type={"checkbox"}
        id={item.id}
        checked={item.done}
        onChange={() => onToggleDone(item.id)}
        required
      />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>🗒️ Kamu punya x catatan dan baru x dichecklist(x%)</span>
    </footer>
  );
}

export default App;
