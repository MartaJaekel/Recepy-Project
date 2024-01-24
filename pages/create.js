import Link from "next/link"
import Form from "@/components/Form"
import { useRouter } from "next/router"
import useSWR from "swr";
export default function CreateRecipe() {

const router = useRouter();
const {mutate} = useSWR("/api/recipes")
async function addRecipe(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipeData = Object.fromEntries(formData);

    const response = await fetch("/api/recipes", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
    if (response.ok) {
        router.push("/");
        mutate();
        event.target.reset();
    }
}

    return(
        <>
        <h1>Add new Recipe</h1>
        <Form onSubmit={addRecipe}/>
        <Link href="/">HomePage</Link>
        </>
    )
}