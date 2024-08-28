import LayoutContainPokemon from "@/layout/layoutContainPokemon/layoutContainPokemon";

export default function Home() {
  return (
    <div className="max-h-dvh h-dvh p-6 bg-[]">
      <div className="flex items-center gap-2">
        <h1 className="font-extrabold text-3xl">Pokédex</h1>
        <img className="w-6" src="/img/game_16033713.png" alt="Pokéball" />
      </div>
      <LayoutContainPokemon />
    </div>
  );
}
