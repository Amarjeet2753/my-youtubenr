import Body from "./Body"
import Header from "./Header"

import { Provider } from "react-redux"

import store from "./utils/store"

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import MainContainer from "./MainContainer"
import WatchPage from "./WatchPage"


const appRouter = createBrowserRouter([{
     path :"/",
     element : <Body/>,
     children :[
           {
            path : "/",
            element : <MainContainer/>
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

        <Header/>
        <RouterProvider router={appRouter}></RouterProvider>
        {/* <Body/> */}
      </Provider>
      
      </div>
     
 
  )
}

export default App
