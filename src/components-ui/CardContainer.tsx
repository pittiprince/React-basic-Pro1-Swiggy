import { CardComponent } from "./CardComponent"
import { restaurants } from "@/data/RestaurentData"

export const CardContainer = () =>{

    return(
        <div id="Card-DisplayMainContainer" className=" h-screen w-full overflow flex justify-center ">
            <div id="Card-Display-container-center " className="w-10/12 flex flex-wrap p-4 gap-8  ">
            {restaurants.map((restaurant:any, index:any) => <CardComponent key={index} resObject={restaurant.info} />)}
            </div>
        </div>
    )
}