
const handler = (req: any, res: any) => {
    const recipeId = req.query.recipeId;
    const method = req.method;

    switch(method) {
        case 'GET':
            res.send("hello recipe " + recipeId)
            break;
        case 'POST':
            res.send("hello recipe post " + recipeId)
            break;
        case 'PUT':
            res.send("hello recipe put " + recipeId)
            break;
        case 'DELETE':
            res.send("hello recipe del " + recipeId)
            break;
        default:
            res.status(405).send("Error: Method not allowed");
    }
}

export default handler;