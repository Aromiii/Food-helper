const NewRecipeForm = (props: {
  onChange: (event: { target: HTMLInputElement }) => void,
  onChange1: (event: { target: HTMLInputElement }) => void,
  onChange2: (event: { target: HTMLInputElement }) => void,
  onChange3: (event: { target: HTMLInputElement }) => void,
  onChange4: (event: { target: HTMLInputElement }) => void,
  onClick: () => void,
  onClick1: () => void,
  onClick2: () => void
}) => {
  return <div className="flex flex-col w-[50%] min-w-[300px]">
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" required onChange={props.onChange}
           className="bg-gray-200 rounded-2xl p-1"/>

    <label htmlFor="desc">Description:</label>
    <input type="text" name="desc" onChange={props.onChange1}
           className="bg-gray-200 rounded-2xl p-1"/>

    <label htmlFor="image">Image link:</label>
    <input type="text" name="image" onChange={props.onChange2}
           className="bg-gray-200 rounded-2xl p-1"/>

    <div className="w-[100%]">
      <label htmlFor="desc">Ingredients:</label>
      <input className="bg-gray-200 p-1 rounded-full w-full "
             type="text" onChange={props.onChange3}/>
      <button className="bg-green-400 rounded-full p-1 my-1 w-40"
              onClick={props.onClick1}>
        Add new Ingredient
      </button>
    </div>
    <div className="w-full">
      <label htmlFor="desc">Steps:</label>
      <input className="bg-gray-200 p-1 rounded-full w-full "
             type="text" onChange={props.onChange4}/>
      <button className="bg-green-400 rounded-full p-1 my-1 w-40"
              onClick={props.onClick2}>
        Add new step
      </button>
    </div>

    <div className="flex place-content-center">
      <input onClick={props.onClick} type="submit" value="Create new recipe"
             className="bg-green-400 m-5 w-40 h-12 rounded-full text-lg"/>
    </div>
  </div>;
}
export default NewRecipeForm