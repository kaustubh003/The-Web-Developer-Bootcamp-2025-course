import Property from "./Property";
function PropertyList({ properties }) {
  return (
    <div style={{ display: "flex" }}>
      {properties.map((p) => {
        return <Property key={p.id} {...p} />;
      })}
    </div>
  );
}

export default PropertyList;
