import Category from "./components/Category"
import Heading from "./components/Heading"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import TotalSpent from "./components/TotalSpent"

function App() {
  return(
    <>
      <div className="">
        <Navbar/>
      </div>
      <main className="lg:max-w-[60%] lg:mx-auto mt-10 ">
        <Options/>

        <div className="mt-6">
          <Heading text={"Categories"}/>
          <div className=" ">
            <div className=" w-[fit-content]  sm:w-[80%] mx-auto grid grid-cols-2 p-4 gap-3 sm:mr-5">

            <Category path={"/svgs/food.svg"} name={"food"}/>
            <Category path={"/svgs/clothes.svg"} name={"clothes"}/>
            <Category path={"/svgs/home.svg"} name={"home"}/>
            <Category path={"/svgs/hygiene.svg"} name={"hygiene"}/>
            <Category path={"/svgs/stationery.svg"} name={"stationery"}/>
            <Category path={"/svgs/other.svg"} name={"other"}/>
            
            


            </div>
            <div className="max-w-[70%] mx-auto  ">

              <TotalSpent/>
            </div>

            
          </div>
        </div>

        <div className="mt-5">
          <Heading text={"Previous Expenses"}/>

        </div>
      </main>
    
    
    </>
    
  )
}

export default App
