import mongoose from "mongoose";
import connectToDB from "@/database";

const productSchema = new mongoose.Schema({
  PID: { type: Number, required: true },
  ProductID: { type: String, required: true },
  ProductName: { type: String, required: true },
  SubcategoryID: { type: Number, default: null },
  Description: { type: String },
  CostPrice: { type: Number },
  SellingPrice: { type: Number },
  Discount: { type: Number },
  VAT: { type: Number },
  OpeningStock: { type: Number },
  Pic: { type: String },
});

const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);

  export const initproducts = async () => {
    await connectToDB();
  
    const products = [
      {
        PID: 1,
        ProductID: "P-1",
        ProductName: "Speaker",
        SubcategoryID: 1,
        Description: "The F&D E200",
        CostPrice: 1500.0,
        SellingPrice: 2000.0,
        Discount: 10.0,
        VAT: 20,
        OpeningStock: 5,
        Pic: "C:\\Users\\Vaibhav-PC\\Desktop\\LATEST",
      },
      {
        PID: 2,
        ProductID: "P-2",
        ProductName: "Intex Speakers",
        SubcategoryID: 8,
        Description: "Loud Sound and",
        CostPrice: 100.0,
        SellingPrice: 200.0,
        Discount: 10.0,
        VAT: 20,
        OpeningStock: 500,
        Pic: "",
      },
      {
        PID: 3,
        ProductID: "P-3",
        ProductName: "Lenavo Mobile",
        SubcategoryID: 1,
        Description: "All",
        CostPrice: 400.0,
        SellingPrice: 500.0,
        Discount: 20.0,
        VAT: 10,
        OpeningStock: 20,
        Pic: "C:\\Users\\Vaibhav-PC\\Desktop\\Template\\downlo",
      },
      {
        PID: 4,
        ProductID: "P-4",
        ProductName: "Lenovo Vibe K4",
        SubcategoryID: 5,
        Description: '5.5" (13.97cm)',
        CostPrice: 500.0,
        SellingPrice: 600.0,
        Discount: 10.0,
        VAT: 50,
        OpeningStock: 10,
        Pic: "",
      },
      {
        PID: 5,
        ProductID: "P-5",
        ProductName: "lenovo vibe k5",
        SubcategoryID: 1,
        Description: "NETWORK",
        CostPrice: 10000.0,
        SellingPrice: 15000.0,
        Discount: 20.0,
        VAT: 50,
        OpeningStock: 10,
        Pic: "C:\\Users\\Vaibhav-PC\\Desktop\\LATEST",
      },
      {
        PID: 6,
        ProductID: "P-6",
        ProductName: "Lenovo Yoga Tab",
        SubcategoryID: 5,
        Description: "8MP primary",
        CostPrice: 50000.0,
        SellingPrice: 55500.0,
        Discount: 20.0,
        VAT: 10,
        OpeningStock: 700,
        Pic: "",
      },
      {
        PID: 7,
        ProductID: "P-7",
        ProductName: "LENOVO M70T",
        SubcategoryID: null,
        Description: "I7 12TH",
        CostPrice: 0.0,
        SellingPrice: 0.0,
        Discount: 0.0,
        VAT: 0,
        OpeningStock: 0,
        Pic: "",
      },
    ];
  
    try {
      const existingData = await Product.find();
      if (existingData.length === 0) {
        await Product.insertMany(products);
        console.log("Products initialized successfully");
      }
    } catch (error) {
      console.log("Error initializing products", error);
    }
  };
  initproducts();
  
  export default Product;
