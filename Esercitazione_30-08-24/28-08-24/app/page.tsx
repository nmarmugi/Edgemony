import LayoutContainPokemon from "@/layout/layoutContainPokemon/layoutContainPokemon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[768px] w-full max-h-dvh h-dvh p-6 bg-[#E85463] relative">
      <div className="w-full flex items-center gap-2 mb-5">
        <Image width={40} height={40} src="/img/2lHyIcGNwCt73HvB4zwEyV9xtgt.svg" alt="Pokéball" />
        <h1 className="font-extrabold text-3xl text-[rgb(255,255,255)]">Pokédex</h1>
      </div>
      <LayoutContainPokemon />
    </div>
  );
}
