import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function EditPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [book, setBook] = useState({})
  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3000/books/" + id)
    setBook(response.data.datas)
  }
  useEffect(() => {
    fetchBook()
  }, [])

  const handleChange = (event) => {
    let { name, value } = event.target
    setBook({
      ...book,
      [name]: value
    })
  }
  const editBook =async(event)=>{
    event.preventDefault()
    const response = await axios.patch("http://localhost:3000/books/" + id,book)
    if(response.status ===200){
      navigate("/")
    }
    else{
      alert("some error occured!")
    }
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-white  rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
              Edit Book
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form onSubmit={editBook}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Edit Book Name</label>
                  <input onChange={handleChange}
                    value={book.bookName}
                    type="text" name="bookName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="C-programming”" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Edit Book Genre</label>
                  <input onChange={handleChange} value={book.bookGenre} type="text" name="bookGenre" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="IT" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Edit Book Author</label>
                  <input onChange={handleChange} value={book.bookAuthor} type="text" name="bookAuthor" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Soniya Thapa" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Edit Book Price</label>
                  <input onChange={handleChange} value={book.bookPrice} type="number" name="bookPrice" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$100" required />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit" onClick={(event) => {
                  event.target.blur();
                }}>Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
export default EditPage