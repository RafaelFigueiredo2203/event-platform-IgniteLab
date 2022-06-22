import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { Evento } from "./pages/Event"




function App() {



  return (
   <Evento/>
  )
}

export default App
