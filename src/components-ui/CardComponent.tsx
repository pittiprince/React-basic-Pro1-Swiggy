interface ResObject {

  name: string;
  cloudinaryImageId: string;
  sla: {
    deliveryTime: number;
    lastMileTravel: number;
    serviceability: string;
    slaString: string;
    lastMileTravelString: string;
    iconType: string;
}
  cuisines: string[];
  areaName: string;
  avgRatingString: string;
}

interface CardComponentProps {
  resObject: ResObject;
}

export const CardComponent = ({ resObject }: CardComponentProps) => {
  const { name, cloudinaryImageId,  cuisines, areaName, avgRatingString, sla } = resObject;
  const { slaString } = sla;
  return (
    <div className="w-[15rem] h-[28rem] hover:scale-95 transition-all hover:ease-in-out overflow-hidden " id="CardContainer">
      <div className="h-2/3">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Biryani Image" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="h-2/6 p-3">
        <h2 className="text-black font-bold text-2xl">{name}</h2>
        <div className="flex gap-4">
          <h3>{avgRatingString}</h3>
          <h3>{slaString}</h3>
        </div>
        <h3 id="cusine" className="text-muted-foreground">{cuisines.join(",")}</h3>
        <h3 id="Address" className="text-muted-foreground">{areaName}</h3>
      </div>
    </div>
  );
};