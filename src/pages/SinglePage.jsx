import { Link, useParams } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function SinglePage() {
  const {id} = useParams() //used to get parameters of the route. it can be only used when you have dynamic routing
  //id ma 2,3,4 basxa
  const [book,setBook] = useState({}) // {}:because the response is in object format
  const fetchBook = async ()=>{
    // here if we use : http://localhost:3000/books/id then the id is taken as fixed not as a variable which may contain different value such as 2,3,4
    const response = await axios.get("http://localhost:3000/books/"+id)
    setBook(response.data.datas)
  }
  useEffect(()=>{
    fetchBook()
  },[])
  return (
    <>
      <Navbar />
      <h1>Id     : {book.id}</h1>
      <h1>Name   : {book.bookName}</h1>
      <h1>Price  : {book.bookPrice}</h1>
      <h1>Author : {book.bookAuthor}</h1>
      <h1>Genre  : {book.bookGenre}</h1>

      <Button title="Delete" />

      <Link to="/edit-page">
        <Button title="Edit" />
      </Link>

    </>
  )
}
export default SinglePage