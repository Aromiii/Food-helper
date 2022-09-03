import React from 'react';
import Link from 'next/link'

function RecipeContainer(props: any) {
    return (
        <>
            <Link href={"/recipes/" + props.id}>
                <div>
                    <br/>
                    <h1>{props.name}</h1>
                    <p>{props.desc}</p>
                </div>
            </Link>
        </>
    );
}

export default RecipeContainer;

