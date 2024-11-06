import CustomBottom from "@/component/CustomBottom";
import { createData, deleteData, readData } from "@/server/actions";
import Link from "next/link";


// Date.now() ka local mhr so yin refresh lote tgi data change nay mal
// but production mode mhr so yin static data pal phit nay mal, refresh lote lae ma change bu
// ae lo ma phit chin yin dynamic phit chin tae page mhr d code ko write htr
// 5 is for 5 seconds, 5s ta khr change ag

// export const revalidate = 5 // for production mode only

// dr ka apaw ko lo 5s ta khr wait sa yar ma lo, refresh lote tgi data change nay mal
// that is for dyanmic website or server side rendering
// but thate ma use bu
// export const dynamic = 'force-dynamic'


export default async function Home() {
  // database twat write htr tae action mhr error and success htoke htr loh
  // ta khr tae destructure lote lite tr
  const {error,success} = await readData();
  if(error){
    throw new Error(error)
  }
  return (
    <main>
      <h1 className="text-xl font-bold">Todos</h1>
      {
        success?.map(todo => (
          <div className=""  key={todo.id}>
            <p>{todo.title}</p>
            <form action={deleteData}>
              <input type="hidden" name="id" value={todo.id} readOnly/>
              <button type="submit" 
              className=" border border-1 p-2 bg-red-500 text-white"   
              >Delete</button>
            </form>
            <Link href={`/update/${todo.id}`} className=" border border-1 p-2 bg-green-600">Edit</Link>
            <hr className=" my-2"/>
          </div>
          
        ))
      }
      <hr />
      <div className="">
        <form action={createData} className=" mt-2">
          <input className="border border-1" type="text" name="title" />
         <CustomBottom label="Create Todo"/>
        </form>
      </div>
      
    </main>
  );
}
