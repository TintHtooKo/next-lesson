
export async function GET(){
    let posts = [{id:1, title:"hello", body:"world"},{id:2,title:"br lote nay lae",body:"min nae br sgi lae"}]
    return Response.json(posts)
}