"use client"
import Link from "next/link";
import Image from "next/image";

import  CustomButton  from "./CustomButton";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const {data:session}  = useSession();
  return (
   <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex  justify-between items-center sm:px-16 px-6 py-4">
      <Link href="/" className="flex justify-center items-center"> 
        <Image src="/logo.svg" alt="Logo" width={118} height={18} className="object-contain"/>
      </Link>
      {
        session?( 
          <div className='flex gap-4 ml-auto font-extrabold text-white'>
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={`${session?.user?.image}`} alt="Logo" width={30} height={30} className="object-contain w-full h-full "/>
            </div>
              <CustomButton title="SIgn Out" btnType="button" handleClick={()=>signOut()} containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
          </div>
      ):( 

        <CustomButton title="SIgn In" btnType="button" handleClick={()=>signIn('google')} containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
      )}
     
    </nav>
   </header>
  )
}

export default Navbar