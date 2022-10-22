const NewRecipeForm = (props: {
  onChange: (event: { target: HTMLInputElement }) => void,
  onChange1: (event: { target: HTMLInputElement }) => void,
  onChange2: (event: { target: HTMLInputElement }) => void,
  onChange3: (event: { target: HTMLInputElement }) => void,
  onClick: () => void
}) => {
  return <div className="flex flex-col w-[50%] min-w-[300px]">
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" required onChange={props.onChange}
           className="bg-gray-200 rounded-2xl p-1"/>

    <label htmlFor="desc">Description:</label>
    <input type="text" name="desc" onChange={props.onChange1}
           className="bg-gray-200 rounded-2xl p-1"/>

    <label htmlFor="recipe">Recipe:</label>
    <input type="text" name="recipe" required onChange={props.onChange2}
           className="bg-gray-200 rounded-2xl p-1"/>

    <label htmlFor="image">Image link:</label>
    <input type="text" name="image" onChange={props.onChange3}
           className="bg-gray-200 rounded-2xl p-1"/>
    <div className="flex place-content-center">
      <input onClick={props.onClick} type="submit" value="Create new recipe"
             className="bg-green-400 m-5 w-40 h-12 rounded-full text-lg"/>
    </div>
  </div>;
}
export default NewRecipeForm