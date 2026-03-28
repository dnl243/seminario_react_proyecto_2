export default function Log({ turns }) {
  // const turns = [
  //   { square: { row: 0, col: 1 }, player: "X" },
  //   { square: { row: 1, col: 2 }, player: "O" },
  //   { square: { row: 0, col: 2 }, player: "X" },
  //   ...
  // ];
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
