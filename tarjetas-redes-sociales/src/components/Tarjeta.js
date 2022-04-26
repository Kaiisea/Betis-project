export function Tarjeta(props) {
  return (
    <div
      style={{
        border: `1px solid ${props.color}`,
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <div style={{ padding: 16 }}>
        <h1 style={{ fontSize: 24, fontWeight: 900, textAlign: "center"}}>
          {props.title}
        </h1>
        <p style={{ textAlign: "center", marginBottom: 24}}>{props.description}</p>
        <button style={{width: '100%', height: 44, borderRadius: 22, backgroundColor: props.color, border: 'none', color: 'white'}}>{props.textBoton}</button>
      </div>
    </div>
  );
}
