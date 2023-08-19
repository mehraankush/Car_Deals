"use client"

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"
import { useRouter } from "next/navigation"


const SearchButton = ({othersClasses}:{othersClasses:string}) =>(
  <button type="submit" className={`-ml-3 z-10 ${othersClasses}`}>
     <Image src="/magnifying-glass.svg" alt="Magnifying glass" width={40} height={40} className="object-contain"/>
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState("");
    const router = useRouter();
    
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) =>{
         e.preventDefault();

         if(manufacturer==='' && model === ''){
          return alert('Please Fill The Search Bar');
         }
         updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase());
    }

    const updateSearchParams = (model:string,manufacters:string) =>{
         const searhParams = new URLSearchParams(window.location.search);

         if(model){
          searhParams.set('model',model);
         }else{
          searhParams.delete('model');
         }

         if(manufacters){
          searhParams.set('manufacters',manufacters);
         }else{
          searhParams.delete('manufacters');
         }

         const newPathName = `${window.location.pathname}?${searhParams.toString()}`

         router.push(newPathName);
    }

  return (
    <form onSubmit={handleSearch} className="searchbar">
         <div className="searchbar__item">
               <SearchManufacturer
                 manufacturer={manufacturer}
                 setManufacturer={setManufacturer}
                 
               />
             <SearchButton othersClasses="sm:hidden"/>
         </div>
         <div className="searchbar__item">
            <Image src="/model-icon.png" alt="Model Icon" width={25} height={25} className=" absolute w-[20px] h-[20px] ml-4 object-contain"/>
            <input type="text" name="model" 
                value={model} 
                onChange={(e)=> setModel(e.target.value)}
                placeholder="Tiguan" 
                className="searchbar__input"
             />
             <SearchButton othersClasses="sm:hidden"/>
         </div>
         <SearchButton othersClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar