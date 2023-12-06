import Image from "next/image";

export default function Card({ recipe }) {
  return (
    <div>
      <figure>
        <Image
          scr={recipe.image}
          alt={recipe.title}
          //   sizes="(max-width:400px)"
        ></Image>
      </figure>
      <h2>{recipe.title}</h2>
    </div>
  );
}
