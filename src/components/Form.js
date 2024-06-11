import { useState } from "react";

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
export default Form;
