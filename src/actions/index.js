"use server";

import connectToDB from "@/database";
import DepartmentAsset from "@/models/productschema";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export const fetchDepartmentAssets = async () => {
  try {
    await connectToDB();

    const departments = await DepartmentAsset.find().lean(); // Converts Mongoose docs to plain objects

    return departments.map((dept) => ({
      _id: dept._id.toString(), // Optional: only if you plan to use it on the client
      department: dept.department,
      assets: dept.assets.map((asset) => ({
        ...asset,
        _id: asset._id.toString(), // Convert asset's ObjectId to string
        SlNo: asset.SlNo ?? "",
        Description: asset.Description ?? "",
        ServiceTag: asset.ServiceTag ?? "",
        IdentificationNo: asset.IdentificationNo ?? "",
        ProcurementDate: asset.ProcurementDate ?? "",
        Cost: asset.Cost ?? "",
        Location: asset.Location ?? "",
      })),
    }));
  } catch (error) {
    console.log("Error fetching department assets:", error);
    return [];
  }
};


export const addHardwareAssetToDepartmentByName = async (departmentName, newAsset) => {
  try {
    await connectToDB();

    // Find and update by department name
    const updatedDepartment = await DepartmentAsset.findOneAndUpdate(
      { department: departmentName },
      { $push: { assets: newAsset } },
      { new: true } // Return updated doc
    ).lean();

    if (!updatedDepartment) {
      console.log('Department not found');
    }

    return {
      ...updatedDepartment,
      _id: updatedDepartment._id.toString(),
      assets: updatedDepartment.assets.map((asset) => ({
        ...asset,
        _id: asset._id.toString(),
        SlNo: asset.SlNo ?? "",
        Description: asset.Description ?? "",
        ServiceTag: asset.ServiceTag ?? "",
        IdentificationNo: asset.IdentificationNo ?? "",
        ProcurementDate: asset.ProcurementDate ?? "",
        Cost: asset.Cost ?? "",
        Location: asset.Location ?? "",
      })),
    };
  } catch (error) {
    console.log('Error adding asset by department name:', error);
    return null;
  }
};

export const editHardwareAssetInDepartmentByName = async (departmentName, updatedAsset) => {
  try {
    await connectToDB();

    // Extract asset ID from the updated asset
    const assetId = updatedAsset._id;

    // Find the department
    const department = await DepartmentAsset.findOne({ department: departmentName });

    if (!department) {
      console.log('Department not found');
      return null;
    }

    // Find the index of the asset to be updated
    const assetIndex = department.assets.findIndex(
      (asset) => asset._id.toString() === assetId
    );

    if (assetIndex === -1) {
      console.log('Asset not found in department');
      return null;
    }

    // Update asset fields
    department.assets[assetIndex] = {
      ...department.assets[assetIndex]._doc, // Preserve existing values
      ...updatedAsset, // Overwrite with new values
    };

    // Save the changes
    const updatedDepartment = await department.save();

    return {
      ...updatedDepartment.toObject(),
      _id: updatedDepartment._id.toString(),
      assets: updatedDepartment.assets.map((asset) => ({
        ...asset.toObject(),
        _id: asset._id.toString(),
        SlNo: asset.SlNo ?? "",
        Description: asset.Description ?? "",
        ServiceTag: asset.ServiceTag ?? "",
        IdentificationNo: asset.IdentificationNo ?? "",
        ProcurementDate: asset.ProcurementDate ?? "",
        Cost: asset.Cost ?? "",
        Location: asset.Location ?? "",
      })),
    };
  } catch (error) {
    console.log('Error editing asset in department:', error);
    return null;
  }
};


export const deleteHardwareAssetFromDepartmentBySlNo = async (departmentName, slNo) => {
  try {
    await connectToDB();

    // Find the department and remove the asset with the given SlNo from the assets array
    const updatedDepartment = await DepartmentAsset.findOneAndUpdate(
      { department: departmentName },
      { $pull: { assets: { SlNo: slNo } } }, // $pull removes matching element by SlNo
      { new: true } // Return the updated document
    ).lean();

    if (!updatedDepartment) {
      console.log('Department not found or asset not deleted');
      return null;
    }

    return {
      ...updatedDepartment,
      _id: updatedDepartment._id.toString(),
      assets: updatedDepartment.assets.map((asset) => ({
        ...asset,
        _id: asset._id.toString(),
        SlNo: asset.SlNo ?? "",
        Description: asset.Description ?? "",
        ServiceTag: asset.ServiceTag ?? "",
        IdentificationNo: asset.IdentificationNo ?? "",
        ProcurementDate: asset.ProcurementDate ?? "",
        Cost: asset.Cost ?? "",
        Location: asset.Location ?? "",
      })),
    };
  } catch (error) {
    console.log('Error deleting asset from department:', error);
    return null;
  }
};


/*export async function addNewProduct(productdata) {
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
*/
