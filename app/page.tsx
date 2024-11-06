import BlogCard from "@/component/BlogCard";
import CustomBottom from "@/component/CustomBottom";
import {  getPosts, readData } from "@/server/actions";
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
  const {error,success} = await getPosts();
  if(error){
    throw new Error(error)
  }
  return (
    <main className=" mt-10 p-4">
      <h1 className="title-text">Recent Blog List</h1>
      {
        success?.length == 0 ? (
          <h1 className="title-text">No Blog Found</h1>
        ) : (
          success?.map(post => (
            <BlogCard id={post.id} title={post.title} desc={post.desc} key={post.id}/>        
          ))
        )
      }
      <hr />
      <div className="">
        
      </div>
      
    </main>
  );
}
