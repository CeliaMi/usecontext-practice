import  BookCard  from "../components/BookCard"
import { useLoaderData  } from "react-router-dom"


 const Home = () => {
  const data = useLoaderData()
  return (
    <section className="flex flex-col text-center w-full container px-5 py-2 mx-auto justify-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-white" >Lista de todos los libros</h1>
      <div className="flex flex-col mb-20">
          <BookCard books = {data.books} />
      </div>   
    </section>
  )
}
export default Home