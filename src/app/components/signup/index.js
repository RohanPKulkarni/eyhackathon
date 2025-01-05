'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu,DropdownMenuContent,DropdownMenuTrigger,DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Fininfocontext } from '../context';// Adjust the path as necessary
import { ChevronDown } from 'lucide-react';

const SignupPage = () => {
  const router = useRouter();
  const { userdata, setUserData } = useContext(Fininfocontext);
  const professions = ['Diary Farmer', 'Agriculture Farmer', 'Transport', 'Other'];

  const handleSignup = () => {
    console.log(userdata);
    router.push('/home');
  };


  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Signup</h1>

        <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          value={userdata.name}
          onChange={(e) => setUserData({ ...userdata, name: e.target.value })}
          placeholder="Enter your name"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
        <input
          type="text"
          value={userdata.phone}
          onChange={(e) => setUserData({ ...userdata, phone: e.target.value })}
          placeholder="Enter your phone number"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 text-sm font-medium text-gray-600">Profession</label>
          <DropdownMenu>
          <DropdownMenuTrigger className="w-full px-4 py-2 text-left bg-white border rounded-md focus:outline-none flex items-center justify-between">
            <span>{userdata.profession || 'Select your profession'}</span>
            <ChevronDown className="text-gray-500" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-white border rounded-md shadow-lg">
            {professions.map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setUserData({ ...userdata, profession: item })}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          onClick={handleSignup}
          className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
