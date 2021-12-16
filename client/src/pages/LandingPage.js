import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql, useMutation } from "@apollo/client"
import AddAnimalButton from '../components/AddAnimalButton/AddAnimalButton'


const ANIMALS_QUERY = gql`
{
 animals {
   image
   id
   price
   slug
   title
   
 }
}`


const ADD_ANIMAL_MUTATION = gql`
mutation(
    $image: String!, 
    $title: String!, 
    $price: String!, 
    $description: [String!]!, 
    $slug: String!, 
    $stock: Int!, 
    $category: String!, 
    $rating: Float){
  addAnimal(
      image: $image, 
      title: $title, 
      price: $price, 
      description: $description, 
      slug: $slug, stock: $stock, 
      category: $category, 
      rating: $rating) 
    {
    title
    id
    }
}
`



function LandingPage() {

    const { loading, error, data } = useQuery(ANIMALS_QUERY);

    const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);




    if (loading) return <div>Still Loading</div>
    if (error) return <div>Error...</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
            <AddAnimalButton addAnimal={addAnimal} />
        </div>
    )
}

export default LandingPage
