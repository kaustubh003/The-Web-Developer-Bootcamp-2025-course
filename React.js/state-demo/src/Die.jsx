import "./Die.css";
export default function Die({ val, color = "slateblue" }) {
  return (
    <div style={{ backgroundColor: color }} className="Die">
      {val}
    </div>
  );
}
