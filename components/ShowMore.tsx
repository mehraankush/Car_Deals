"use client";

import { useRouter } from "next/navigation";
import  CustomButton  from "./CustomButton";
import { updateSearcchParams } from "@/utils";

interface ShowMoreProps {
    pageNumber:number;
    isNext:boolean;
}

const ShowMore = ({ pageNumber, isNext }:ShowMoreProps) => {
    const router = useRouter();

    const hadleNavigation = () =>{

        const newLimit = (pageNumber+1)*10;
         const newPathName = updateSearcchParams("limit",`${newLimit}`);

         router.push(newPathName);
    }

  return (
    <div>
        <div className="w-full flex-center gap-5 mt-10">
           {
            !isNext && (<CustomButton
               title="Show More"
               btnType="button"
               containerStyles="bg-primary-blue rounded-full text-white"
               handleClick={hadleNavigation}
            />)
           }
        </div>
    </div>
  )
}

export default ShowMore