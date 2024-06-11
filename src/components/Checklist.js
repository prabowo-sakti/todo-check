import { useState } from "react";
import Item from "./Item";

function CheckList({ todo, onToggleDone, DeleteItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  const ByTitle = todo.slice().sort((a, b) => a.title.localeCompare(b.title));
  const ByStatus = todo.slice().sort((a, b) => Number(a.done) - Number(b.done));

  function sortItems() {
    switch (sortBy) {
      case "title":
        return ByTitle;
      case "status":
        return ByStatus;
      case "input":
      default:
        return todo;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0
          ? sortedItems.map((item) => (
              <Item
                key={item.id}
                item={item}
                onToggleDone={onToggleDone}
                DeleteItem={DeleteItem}
              />
            ))
          : null}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Urutkan berdasarkan input</option>
          <option value="title"> Urutkan berdasarkan judul</option>
          <option value="status"> Urutkan berdasarkan status</option>
        </select>
        <button onClick={onClearItems}>Hapus Semua</button>
      </div>
    </div>
  );
}

export default CheckList;
