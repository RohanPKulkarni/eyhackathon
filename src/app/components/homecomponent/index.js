'use client'

import { Pencil, Trash, Plus } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { addNewProduct,deleteProductData,editProductData } from "@/actions";
import { Adityatechcontext } from "../context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HomeScreen = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState("Products");
  const [loading, setLoading] = useState(true);
  const { productdata, setProductData } = useContext(Adityatechcontext);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  const menuOptions = [
    "Products",
    "Sales",
    "Customers",
    "Purchases",
    "Employees",
    "Category",
  ];

  const data = {
    Sales: ["Sale 1", "Sale 2", "Sale 3"],
    Customers: ["Customer 1", "Customer 2", "Customer 3"],
    Purchases: ["Purchase 1", "Purchase 2", "Purchase 3"],
    Employees: ["Employee 1", "Employee 2", "Employee 3"],
    Category: ["Category 1", "Category 2", "Category 3"],
  };

  const handleEdit = (product) => {
    setProductData(product);
    editProductData(productdata);  
  };

  const handleSave = () => {
    addNewProduct(productdata);
  };

  const handleDelete = (productId) => {
    deleteProductData(productId);
  };

  return (
    <div className="min-h-screen mx-auto">
      {/* Top Component */}
      <div className="flex items-center justify-center min-h-[33vh]">
        <div className="text-gray-900 mt-20 px-4 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.jpg"
              alt="Company Logo"
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold">Aditya Private Ltd</h1>
              <p className="text-xs sm:text-sm text-gray-900 italic">
                Your trusted partner for technology
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Header Bar */}
      <div className="bg-white shadow-md ">
        <div className="flex justify-center py-4">
          {/* Slider for small screens */}
          <div className="flex space-x-2 mx-4 overflow-x-auto whitespace-nowrap sm:hidden scrollbar-hide py-2">
            {menuOptions.map((option) => (
              <button
                key={option}
                className={`px-3 py-1 text-sm rounded-md ${
                  selectedOption === option
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-gray-800 hover:text-white transition`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>


          {/* Show all options directly for larger screens */}
          <div className="hidden sm:flex space-x-6">
            {menuOptions.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-md ${
                  selectedOption === option
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-gray-800 hover:text-white transition`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Bottom Component */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          {selectedOption} Details:
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 justify-center">
          {selectedOption === "Products" ? (
            loading ? (
              <p>Loading products...</p>
            ) : products?.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="relative bg-white p-4 rounded-md shadow hover:shadow-lg transition cursor-pointer"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Pencil
                        className="absolute top-4 left-4 w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer transition"
                        onClick={() => handleEdit(product)}
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                          Update product details
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.keys(productdata || {}).map((key) => (
                          <div key={key} className="flex flex-col">
                            <label className="text-sm font-medium">{key}</label>
                            <input
                              type={
                                typeof productdata[key] === "number"
                                  ? "number"
                                  : "text"
                              }
                              value={productdata[key] ?? ""}
                              onChange={(e) =>
                                setProductData({
                                  ...productdata,
                                  [key]:
                                    typeof productdata[key] === "number"
                                      ? Number(e.target.value)
                                      : e.target.value,
                                })
                              }
                              className="border p-2 rounded-md"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </DialogContent>
                  </Dialog>

                  <Trash
                    className="absolute top-4 right-4 w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition"
                    onClick={() => handleDelete(product.PID)}
                  />

                  <img
                    src={product.Pic || null}
                    alt={product.ProductName || "No Image"}
                    className="w-full h-40 object-contain rounded-md mb-2"
                  />``
                  <h3 className="text-lg font-bold">{product.ProductName}</h3>
                  <p className="text-gray-600">{product.Description}</p>
                  <p className="text-black font-semibold">
                    ₹{product.SellingPrice}
                  </p>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )
          ) : (
            data[selectedOption].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow hover:shadow-lg transition"
              >
                {item}
              </div>
            ))
          )}
        </div>

        {/* Add New Product Button */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center mt-6 ml-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-black transition">
              <Plus className="w-5 h-5 mr-2" />
              Add New Product
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill the details below to add a new product.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(productdata || {}).map((key) => (
                <div key={key} className="flex flex-col">
                  <label className="text-sm font-medium">{key}</label>
                  <input
                    type={
                      typeof productdata[key] === "number"
                        ? "number"
                        : "text"
                    }
                    value={productdata[key] ?? ""}
                    onChange={(e) =>
                      setProductData({
                        ...productdata,
                        [key]:
                          typeof productdata[key] === "number"
                            ? Number(e.target.value)
                            : e.target.value,
                      })
                    }
                    className="border p-2 rounded-md"
                  />
                </div>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition"
              onClick={handleSave}
            >
              Save
            </button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HomeScreen;
