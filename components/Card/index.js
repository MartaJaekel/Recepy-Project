import Image from "next/image";
import Link from "next/link";

export default function Card({ recipe }) {
  return (
    <div>
      <Link href={`recipes/${recipe._id}`}>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={200}
          height={270}
        ></Image>
        <h2>{recipe.title}</h2>
      </Link>
    </div>
  );
}
