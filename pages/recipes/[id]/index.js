import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  if (error) return <div>Error loading recipe</div>;
  if (!player) return <div>Loading...</div>;


  
  return (
    <>
      <Image src={recipe.image} />
    </>
  );
}
