'use client'
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetFooter,SheetTrigger,SheetTitle } from "@/components/ui/sheet";
import { Fininfocontext } from "../context";
import { useContext,useState } from "react";
import Image from "next/image";

export default function Header(){
  const { userdata } = useContext(Fininfocontext);
  const [open, setOpen] = useState(false);
  return(
    <div className="flex h-16 w-full text-green-700 shrink-0 items-center justify-between border-b border-black shadow-sm m-0 pb-0 mb-2 bg-transparent top-0">
      <div className="ml-4 ml-8 text-bold text-lg mb-2">FinanceBoss</div>

      {/* Profile Picture Section */}
      <div className="mr-4 flex">
        <div className="mr-2 text-lg text-blue-600 mt-1">{userdata.name}</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            {/* Profile Picture */}
            <div className="cursor-pointer">
              <Image
                src="/images/person.svg" // Replace with actual profile picture URL
                alt="Profile"
                width={40} // Adjust size as needed
                height={40} // Adjust size as needed
                className="rounded-full object-cover"
              />
            </div>
          </SheetTrigger>

          {/* User Profile Sheet */}
          <SheetContent side="right" className="w-80 p-6">
            <SheetHeader>
              <SheetTitle>User Profile</SheetTitle>
              <SheetDescription>View your details below:</SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              <div>
                <strong>Name:</strong> {userdata.name || "N/A"}
              </div>
              <div>
                <strong>Phone:</strong> {userdata.phone || "N/A"}
              </div>
              <div>
                <strong>Profession:</strong> {userdata.profession || "N/A"}
              </div>
            </div>
            <SheetFooter className="mt-6">
              <button
                onClick={() => setOpen(false)}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>

  );
}