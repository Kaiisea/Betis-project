import { Categoria } from "./components/Categoria";

const categorias = [
  {
    titulo: "Superheroes", // Titulo de categoria
    peliculas: ["Los Vengadores", "Spiderman", "Batman", "Superman"], // Listado de peliculas
  },
  {
    titulo: "Terror",
    peliculas: ["Saw", "Scream", "Hellraiser", "The Ring", "Insidious"],
  },
  {
    titulo: "Animación",
    peliculas: [
      "Tarzan",
      "El Viaje de Chihiro",
      "Castillo Ambulante",
      "Rey Leon",
      "Mulan",
    ],
  },
];

function App() {
  return (
    <div>
      {categorias.map((categoria) => (
        <Categoria titulo={categoria.titulo} peliculas={categoria.peliculas} />
      ))}
    </div>
  );
}
export default App;
