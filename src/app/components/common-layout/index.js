'use client'
import Header from "../header";
   

export default function CommonLayout({children}){

    return(
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    );
}