function Button(props) {
  return (
    <>
      <button className="bg-green-700" onClick={props.onClick}>{props.title}</button>
    </>
  )
}
export default Button
