function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>Yuk buat catatan</span>
      </footer>
    );
  }
  const doneItems = items.filter((item) => item.done).length;
  const persen = Math.round((doneItems / items.length) * 100);
  return (
    <footer className="stats">
      <span>
        {persen === 100
          ? "Kamu sudah melakukannya semua"
          : `🗒️ Kamu punya ${items.length} catatan dan baru ${doneItems} di checklist (
            ${persen}%)`}
      </span>
    </footer>
  );
}

export default Stats;
