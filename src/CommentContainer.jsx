
import { USER_LOGO } from "./Constant";


const commentData = [
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[
        {
          name : "user",
          comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
          reply :[],
        },
        {
          name : "user",
          comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
          reply :[
            {
              name : "user",
              comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
              reply :[],
            },
          ],
        },
      ],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[
       { name : "user",
        comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
        reply :[],},
       { name : "user",
        comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
        reply :[],},
        

        {
          
          name : "user",
          comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
          reply :[
            {
              name : "user",
              comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
              reply :[
                {
                  name : "user",
                  comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
                  reply :[],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name : "user",
      comment : "Lorem Ipsum has been the industry's standard dummy text ever since.",
      reply :[],
    },
]


const Comment = ({data})=>{

      // console.log(data)
     
      const {name,comment,reply} =data;

     return (
      <div className='flex flex-row bg-gray-200 p-2 m-2'>

         <img className="h-12 w-12" alt="logo" src={USER_LOGO}/>
         <div className="px-3">

          <div className="font-bold">{name}</div>
          <div>{comment}</div>
        
         </div>

      </div>
     )
}

const CommentList = ({datas})=>{

      

     return datas.map((d,ind) =>(
      
      <div  key ={ind} >

        <Comment data={d}/>
        <div className=" pl-5 ml-5 border-l-2 border-black">
           <CommentList datas={d.reply}/>
        </div>
      </div>
    ))
       
     
}





const CommentContainer = () => {
  return (
    <div className=" p-2">
      <h1 className="font-bold text-xl m-2">Comments : </h1>
      {/* <Comment data={commentData[0]}/> */}
      <CommentList datas={commentData}/>
    </div>
  )
}

export default CommentContainer
