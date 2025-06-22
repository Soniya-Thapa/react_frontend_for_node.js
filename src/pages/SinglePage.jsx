import { Link } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"
import Navbar from "../components/Navbar"

function SinglePage() {
  return (
    <>
      <Navbar />
      <h1>This is single page!!!</h1>
      <Button title="Delete" />
      <Link to="/edit-page">
        <Button title="Edit" />
      </Link>

    </>
  )
}
export default SinglePage