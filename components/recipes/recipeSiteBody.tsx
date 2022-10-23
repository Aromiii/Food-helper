const RecipeSiteBody = (props: { src: string, name: string, desc: string, recipe: string, onClick: () => void }) => {
  return <>
    <img src={props.src}
         className="object-cover h-56 w-screen"
         alt="Picture that user provided"/>
    <div className="px-4 w-screen">
      <h1 className="my-1.5">
        {props.name}
      </h1>
      <p className="my-2">
        {props.desc}
      </p>
      <p className="my-4">
        {props.recipe}
      </p>
    </div>
    <button
      className="bg-red-700 text-white border-black border-2 p-2 rounded-full m-3"
      onClick={props.onClick}>
      Remove recipe
    </button>
  </>;
}
export default RecipeSiteBody