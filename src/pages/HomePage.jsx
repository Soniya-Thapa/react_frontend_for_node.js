import { Link } from "react-router-dom"
// import Button from "../components/Button"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function HomePage() {
  const [books, setBooks] = useState([])
  //backend integration
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/books")
    setBooks(response.data.datas)
  }
  //only call function when the page is reload 
  useEffect(() => {
    fetchBooks()
  }, [])
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {
          //books bhanney statelai loop gariyo using map(higher order function) . 
          // jahily pani map ko syntax : arraytoloop.map(function(arraykoeachitem){return()})  
          // book ko thau ma j rakhda nih hunxa (dutiai case ma)
          books.map(function (book) {
            return (
              <Card book={book} />
            )
          })
        }
      </div>

      {/* <button>login</button>
   <button>Register</button>
   <button>LogOut</button> */}

      {/* //the Button is Component. so yeha ma HomePage component bhitra Button component lai import gariraxu */}
      {/* <Button title="Login"/>
   <Button title="Register"/>
   <Button title="Logout"/> */}

    </>
  )
}
export default HomePage