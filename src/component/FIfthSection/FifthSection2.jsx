import React,{useState} from 'react';
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"

function FifthSection() {

   const [isClick,setIsClick]=useState(false)

   const articles=[
      {
         id:1,
         img:img1,
         headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum libero omnis itaque unde, dignissimos quia accusantium, est expedita obcaecati illo aperiam officia neque vel possimus magnam magni, porro quo?'
      },
      {
         id:2,
         img:img2,
         headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum libero omnis itaque unde, dignissimos quia accusantium, est expedita obcaecati illo aperiam officia neque vel possimus magnam magni, porro quo?'
      },
      {
         id:3,
         img:img3,
         headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum libero omnis itaque unde, dignissimos quia accusantium, est expedita obcaecati illo aperiam officia neque vel possimus magnam magni, porro quo?'
      },
      {
         id:4,
         img:img4,
         headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum libero omnis itaque unde, dignissimos quia accusantium, est expedita obcaecati illo aperiam officia neque vel possimus magnam magni, porro quo?'
      },
      {
         id:5,
         img:img5,
         headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum libero omnis itaque unde, dignissimos quia accusantium, est expedita obcaecati illo aperiam officia neque vel possimus magnam magni, porro quo?'
      },
   ]
  return (
    <section className='p-40 flex flex-col gap-20 items-center justify-center border-b border-gray-300'>
      <h1 className='text-2xl'>Actual news</h1>
      <div className='flex flex-wrap items-center justify-center'>
         {articles.map((article,index)=>{
            return(
               <div className={`${index >= 4 && !isClick ? "hidden" :"block"}flex flex-col gap-2 w-96 p-10 text-center`} key={article.id}>
                  <img className='min-h-[500px] max-h-[600px] h-full object-cover rounded-xl' src={article.img} alt="image" />
                  <h3 className='text-center'>{article.headline}</h3>
                  <button className='text-green-500 font-bold'>More details</button>
               </div>
            )
         })}
      </div>
      <button 
        onClick={()=>setIsClick(!isClick)}
        className='btn border border-gray-300 px-12 mt-12'>
         See {isClick ? "Less":"More"}
      </button>
    </section>
  )
}

export default FifthSection