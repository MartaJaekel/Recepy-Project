import Link from "next/link"
import Form from "@/components/Form"
export default function CreateRecipe() {

    return(
        <>
        <h1>Add new Recipe</h1>
        <Form/>
        <Link href="/">HomePage</Link>
        </>
    )
}