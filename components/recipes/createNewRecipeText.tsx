import Link from "next/link";
import React from "react";

const CreateNewRecipeText = () => {
  return <div className="h-[calc(100vh-4rem)] place-content-center place-items-center flex">
    <Link href="/recipes/addnew">
      <h1 className="text-center">
        Create your first recipe by clicking here
      </h1>
    </Link>
  </div>;
}
export default CreateNewRecipeText;