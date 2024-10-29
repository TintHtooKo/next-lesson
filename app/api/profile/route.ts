
export async function GET(){
    let posts = [{id:1, title:"hahaha", body:"hohoho"},{id:2,title:"hihihi",body:"himhimihin"}]
    return Response.json(posts)
}