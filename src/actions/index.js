"use server";

import connectToDB from "@/database";
import Product from "@/models/productschema";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export const fetchProducts = async () => {
  try {
    await connectToDB(); 
    const products = await Product.find().lean(); // Convert to plain object
    return products.map((product) => ({
      ...product,
      _id: product._id.toString(), // ✅ Convert ObjectId to string
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function addNewProduct(productdata) {
  try {
    await connectToDB();

    const result = await Product.updateOne(
      { ProductID: productdata.ProductID },
      { $set: productdata },
      { upsert: true } // Creates a new product if it doesn't exist
    );

    if (result.modifiedCount > 0 || result.upsertedCount > 0) {
      console.log("Product added or updated successfully");
      revalidatePath("/");
    } else {
      console.log("Failed to add product");
    }
  } catch (error) {
    console.log("Error adding product:", error);
  }
}

export async function editProductData(editedData) {
  try {
    await connectToDB();

    const updatedProduct = await Product.updateOne(
      { ProductID: editedData.ProductID }, // Match by ProductID
      { $set: editedData } // Update fields with new data
    );

    if (updatedProduct.modifiedCount === 1) {
      console.log("Success");
    } else {
      console.log("error")
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

export async function deleteProductData(PID) {
  try {
    await connectToDB();

    const deletedProduct = await Product.deleteOne({ PID }); // ✅ Use PID

    if (deletedProduct.deletedCount === 1) {
      console.log("Success");
    } else {
      console.log("Failure");
    }
  } catch (error) {
    console.log("Error deleting product:", error);
  }
}

