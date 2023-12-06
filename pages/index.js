import useSWR from "swr";
import Card from "@/components/Card";
import Link from "next/link";

export default function HomePage() {
  const { data: recipes } = useSWR("api/recipes");

  if (!recipes) {
    return <div>Data Loading...</div>;
  }

  return (
    <div>
      <h1>Recipe App</h1>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe._id}>
              <Card recipe={recipe} />
            </li>
          );
        })}

      </ul>
      <Link href="/create">Create Recipe</Link>
    </div>
  );
}
