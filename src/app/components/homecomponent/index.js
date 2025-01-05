'use client'
import {Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel"
import Image from "next/image";

export default function Home(){
  const items = [
    {
      id: 1,
      title: "Accident and Education Benefit Scheme",
      description: "Beneficiaries under the scheme. Drivers who are holding valid DL issued by Transport Department to drive private commercial transport vehicles.Conductors who are holding valid conductor licence issued by Transport Department and registered under the Scheme.Cleaners of private commercial transport vehicles.",
      image: "/images/kargov.png",
    },
    {
      id: 2,
      title: "National Livestock Mission",
      description: "The focus of the scheme is on entrepreneurship development and breed improvement in poultry, sheep, goat and piggery including feed and fodder development.",
      image: "/images/govind.jpg",
    },
    {
      id: 3,
      title: "Item 3 Title",
      description: "This is the description for item 3.",
      image: "/images/kargov.png",
    },
  ];

  const items2 = [
    {
      id: 1,
      title: "National Livestock Mission",
      description: "The focus of the scheme is on entrepreneurship development and breed improvement in poultry, sheep, goat and piggery including feed and fodder development.",
      image: "/images/govind.jpg",
    },
    {
      id: 2,
      title: "National Livestock Mission",
      description: "The focus of the scheme is on entrepreneurship development and breed improvement in poultry, sheep, goat and piggery including feed and fodder development.",
      image: "/images/govind.jpg",
    },
    {
      id: 3,
      title: "Item 3 Title",
      description: "This is the description for item 3.",
      image: "/images/kargov.png",
    },
  ];

  return(
    <div className="flex flex-col w-full h-screen ">
      <p className="ml-8 text-bold text-lg mb-2 ">Government Schemes</p>
    <div className="w-full">
      <Carousel>
        <CarouselPrevious className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-600 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-200">
            &lt;
          </CarouselPrevious>

          {/* Next Button */}
          <CarouselNext className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 text-gray-600 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-200">
            &gt;
          </CarouselNext>

        <CarouselContent className="w-full h-[200px]">
          {items.map((item) => (
            <CarouselItem key={item.id} className="flex w-full h-full">
              <div className="w-1/3 h-[80%] mt-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center pr-8 mr-4">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    <p className="ml-8 text-bold text-lg mt-2 ">Expense Report</p>
    <div className="flex w-full h-[300px] mt-4 justify-around">
      <img src="/images/img1.png" alt="Image 1" className="w-1/3 h-full object-cover" />
      <img src="/images/img2.png" alt="Image 2" className="w-1/3 h-full object-cover" />
    </div>
    <div className="flex w-full justify-center mt-4 px-8">
    <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      Update Expenses
    </button>
    <button className="ml-4 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
      Insights
    </button>
  </div>
  <p className="ml-8 text-bold text-lg mt-2 ">Jobs</p>
  <div className="w-[90%] mx-auto my-4 p-6 border border-gray-300 shadow-lg rounded-lg flex items-center">
      {/* Profile Picture */}
      <div className="w-24 h-24 ml-8">
        <Image
          src="/images/person.svg" // Update with the actual image path
          alt="Profile Picture"
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      {/* Profile Details */}
      <div className="flex-1 ml-16">
        <h2 className="text-2xl font-semibold">Pooja Singh</h2>
        <p className="text-lg text-gray-600">Dairy farmer</p>
        <p className="text-gray-500 mt-2">Deliver dairy prducts from Nagpur to Kolkata</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="px-6 py-2 text-white bg-orange-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Details
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Contact
          </button>
          <button className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Accept
          </button>
        </div>
      </div>
    </div>

    <div className="w-[90%] mx-auto my-4 p-6 border border-gray-300 shadow-lg rounded-lg flex items-center">
      {/* Profile Picture */}
      <div className="w-24 h-24 ml-8">
        <Image
          src="/images/person2.svg" // Update with the actual image path
          alt="Profile Picture"
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      {/* Profile Details */}
      <div className="flex-1 ml-16">
        <h2 className="text-2xl font-semibold">Krishna Kumar</h2>
        <p className="text-lg text-gray-600">Construction materials</p>
        <p className="text-gray-500 mt-2">Deliver cement from Nagpur to Chennai</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          <button className="px-6 py-2 text-white bg-orange-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Details
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Contact
          </button>
          <button className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}