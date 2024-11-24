import React from "react";
import {MenuButton} from 'Menu';

export default function Home(){
   return(
      <div className="flex min-h-screen items-center justify-center">
         <Head>
            <title>
               Template
            </title>
            
         </Head>
         <main className="mx-auto w-auto">
            <MenuButton>Menu</MenuButton>

         </main>
      </div>
   )
}

