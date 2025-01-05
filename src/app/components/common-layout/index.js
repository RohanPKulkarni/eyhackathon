'use client'
import Header from "../header";
   

export default function CommonLayout({children}){

    return(
        <div className="mx-auto pt-2 lg:px-8">
            <Header/>
            <main>{children}</main>
        </div>
    );
}