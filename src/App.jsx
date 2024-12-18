import Body from "./Body"
import Header from "./Header"

import { Provider } from "react-redux"

import store from "./utils/store"

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import MainContainer from "./MainContainer"
import WatchPage from "./WatchPage"
import VideoSearchResults from "./VideoSearchResults"
import VideoContainer from "./VideoContainer"


const appRouter = createBrowserRouter([{
     path :"/",
     element : <Body/>,
     children :[
           {
            path : "/",
            element : <MainContainer/>,
            children : [
               {
                path :"/",
                element : <VideoContainer/>
               },
               {
                path : "/results",
                element : <VideoSearchResults/>
               },
            ]
           },
           {
            path : "/watch",
            element : <WatchPage/>
           },
          
     ]

     
}])

function App() {
  // const [count, setCount] = useState(0)


  return (
    
      <div>
        <Provider store={store}>

        <RouterProvider router={appRouter}>

        {/* <Header/> */}
        </RouterProvider>
        {/* <Body/> */}
      </Provider>
      
      </div>
     
 
  )
}

export default App
