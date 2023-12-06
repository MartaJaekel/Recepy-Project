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
      <Image src={recipe.image} />
    </>
  );
}
