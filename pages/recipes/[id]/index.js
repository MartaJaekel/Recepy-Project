import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
    <h1>{recipe.title}</h1>
    <p>servings:{recipe.servings} </p>
    <p>time:{recipe.time}</p>
      <Image src={recipe.image}  alt={recipe.title}
          width={200}
          height={270} />
          <p>{recipe.ingredients}</p>
          <p>{recipe.directions}</p>
    </>
  );
}
