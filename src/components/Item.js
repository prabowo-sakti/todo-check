function Item({ item, onToggleDone, DeleteItem }) {
  return (
    <li>
      {item.title ? (
        <>
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
          <button onClick={() => DeleteItem(item.id)}>❌</button>
        </>
      ) : null}
    </li>
  );
}

export default Item;
