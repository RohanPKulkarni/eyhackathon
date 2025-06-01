import mongoose from "mongoose";
import connectToDB from "@/database";

// Define a schema for individual assets
const assetSchema = new mongoose.Schema({
  SlNo: { type: String },
  Description: { type: String },
  ServiceTag: { type: String },
  IdentificationNo: { type: String },
  ProcurementDate: { type: mongoose.Schema.Types.Mixed }, // Can be number or string
  Cost: { type: String },
  Location: { type: String },
});

// Define schema for department-level asset grouping
const departmentAssetSchema = new mongoose.Schema({
  department: { type: String, required: true },
  assets: [assetSchema],
});

// Create the model
const DepartmentAsset =
  mongoose.models.DepartmentAsset || mongoose.model("DepartmentAsset", departmentAssetSchema);

export default DepartmentAsset;

// Asset initialization function
export const initAssets = async () => {
  await connectToDB();

  const rawData = {
      "Automation Laboratory (DES 507)":[
        {
          "Sl. No": 1,
          "Description": "Dell Optiplex Desktop 390 Computer System with 4GB RAM and 500GB HDD",
          "Service Tag": "89PC8R1",
          "Identification No": "IT 367",
          "Procurement Date": 40995,
          "Cost": "36750.00",
          "Location": "Automation Laboratory (DES 507)"
        },
        {
          "Sl. No": 2,
          "Description": "Dell Optiplex Desktop 390 Computer System with 4GB RAM and 500GB HDD",
          "Service Tag": "89LNWQ1",
          "Identification No": "IT 368",
          "Procurement Date": 40995,
          "Cost": "32550.00",
          "Location": ""
        },
        {
          "Sl. No": 3,
          "Description": "Dell Optiplex Desktop 390 Computer System with 4GB RAM and 500GB HDD",
          "Service Tag": "89K2ZR1",
          "Identification No": "IT 369",
          "Procurement Date": 40995,
          "Cost": "32550.00",
          "Location": ""
        },
        {
          "Sl. No": 4,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J862",
          "Identification No": "IT 522",
          "Procurement Date": 42340,
          "Cost": "42200.00",
          "Location": ""
        },
        {
          "Sl. No": 5,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J5BU",
          "Identification No": "IT 523",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 6,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J5BL",
          "Identification No": "IT 526",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 7,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J87K",
          "Identification No": "IT 527",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 8,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J59S",
          "Identification No": "IT 529",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 9,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J5A5",
          "Identification No": "IT 530",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 10,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J87D",
          "Identification No": "IT 531",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 11,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J85F",
          "Identification No": "IT 534",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 12,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J5A2",
          "Identification No": "IT 536",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        },
        {
          "Sl. No": 13,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S10HVA00100PG00J86C",
          "Identification No": "IT 541",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": ""
        }
      ],
      "Process Control Laboratory (DES 508)":[
      {
              "Sl. No": 1,
              "Description": "Dell Optiplex Desktop Computer System with 4GB RAM and 500GB HDD",
              "Service Tag": "89G3ZR1",
              "Identification No": "IT 366",
              "Procurement Date": "27-03-2012",
              "Cost": "32550.00",
              "Location": "Process Control Laboratory (DES 508)"
            },
            {
              "Sl. No": 2,
              "Description": "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
              "Service Tag": "L900154",
              "Identification No": "IT 323",
              "Procurement Date": "23-02-2010",
              "Cost": "31096",
              "Location": null
            }
      ],
      "Embedded Controllers Laboratory (CRD 211)": [
          {
            "Sl. No": 1,
            "Description": "Dell Power Edge R720 Rack Mount Server 2xIntel Xeon E5-2630v2.2, 32 GB(4x8GB RDIMM), 2.7TB HDD (4 x 900GB)",
            "Service Tag": "7FD7T12",
            "Identification No": "IT 506",
            "Procurement Date": "04-01-2016",
            "Cost": "400900",
            "Location": "Embedded Controllers Laboratory (CRD 211)"
          },
          {
            "Sl. No": 2,
            "Description": "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S9172A99L900181",
            "Identification No": "IT 322",
            "Procurement Date": "23-02-2010",
            "Cost": "31096",
            "Location": null
          },
          {
            "Sl. No": 3,
            "Description": "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S9172A99L900126",
            "Identification No": "IT 324",
            "Procurement Date": "23-02-2010",
            "Cost": "31096",
            "Location": null
          },
          {
            "Sl. No": 4,
            "Description":  "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S9172A99L900210",
            "Identification No": "IT 325",
            "Procurement Date": "23-02-2010",
            "Cost": "31096",
            "Location": null
          },
          {
            "Sl. No": 5,
            "Description":  "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S4089AG1L951502",
            "Identification No": "IT 355",
            "Procurement Date": "19-07-2011",
            "Cost": "26134.5",
            "Location": null
          },
          {
            "Sl. No": 6,
            "Description":  "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S4089AG1L951322",
            "Identification No": "IT 356",
            "Procurement Date": "19-07-2011",
            "Cost": "26134.5",
            "Location": null
          },
          {
            "Sl. No": 7,
            "Description":  "Lenovo Think Centre Model 9172A99 with Intel Core 2DUO @ 2.66GHZ, 4GB DDR2 RAM, 160GB HDD with 17” TFT  Monitor",
            "Service Tag": "1S4089AG1L951016",
            "Identification No": "IT357",
            "Procurement Date": "19-07-2011",
            "Cost": "26134.5",
            "Location": null
          },
          {
            "Sl. No": 8,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J84T",
            "Identification No": "IT507",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 9,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J59Y",
            "Identification No": "IT508",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 10,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J87Q",
            "Identification No": "IT509",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 11,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5B2",
            "Identification No": "IT510",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 12,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J8S7",
            "Identification No": "IT511",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 13,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5AN",
            "Identification No": "IT512",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 14,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5B9",
            "Identification No": "IT513",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 15,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J59X",
            "Identification No": "IT514",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 16,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5AW",
            "Identification No": "IT515",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 17,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5AU",
            "Identification No": "IT516",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 18,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J84K",
            "Identification No": "IT517",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 19,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J86F",
            "Identification No": "IT518",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 20,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5BB",
            "Identification No": "IT519",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 21,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J85U",
            "Identification No": "IT520",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 22,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J5BT",
            "Identification No": "IT521",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 23,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S10HVA00100PG00J5BH",
            "Identification No": "IT524",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 24,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S10HVA00100PG00J59U",
            "Identification No": "IT525",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 25,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S10HVA00100PG00J5AB",
            "Identification No": "IT528",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 26,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S10HVA00100PG00J5BV",
            "Identification No": "IT532",
            "Procurement Date": "04-01-2016",
            "Cost": "42200",
            "Location": null
          },
          {
            "Sl. No": 27,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HG924",
            "Identification No": "IT 653",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 28,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HG973",
            "Identification No": "IT 654",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 29,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HH017",
            "Identification No": "IT 655",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 30,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HH261",
            "Identification No": "IT 656",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 31,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HD674",
            "Identification No": "IT 657",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 32,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HH112",
            "Identification No": "IT 658",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 33,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HE003",
            "Identification No": "IT 659",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 34,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9H029",
            "Identification No": "IT 660",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 35,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HH074",
            "Identification No": "IT 661",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 36,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "1S8985B63L9HH315",
            "Identification No": "IT 662",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 37,
            "Description":  "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel core 2 duo E4500 @ 2.2 GHz CPU with 4 GB RAM, 500 GB HDD, Lenova 19”             TFT Monitor (Transferred from ISE)",
            "Service Tag": "158985B63L9HH053",
            "Identification No": "IT 677",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          }
      ],
          "Control Systems Lab (DES 204)": [
          {
            "Sl. No": 1,
            "Description": "Lenovo Think Centre",
            "Service Tag": "1S4089AG1L951360",
            "Identification No": "IT354",
            "Procurement Date": "25/05/2011",
            "Cost": "26134.5",
            "Location": "Control Systems Lab (DES 204)"
          },
      {
            "Sl. No": 2,
            "Description": "Lenova Desktop Computer System Model H50-30 with Intel Core I5, 4GB RAM, 1TB HDD and 17\" TFT Monitor",
            "Service Tag": "E300U1F5",
            "Identification No": "IT 427",
            "Procurement Date": null,
            "Cost": "42158",
            "Location": null
          },
          {
            "Sl. No": 3,
            "Description": "Lenova Desktop Computer System Model H50-30 with Intel Core I5, 4GB RAM, 1TB HDD and 17\" TFT Monitor",
            "Service Tag": "R300U1J9",
            "Identification No": "IT 429",
            "Procurement Date": null,
            "Cost": "42158",
            "Location": null
          },
          {
            "Sl. No": 4,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT778",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 5,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT779",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 6,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT780",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 7,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT781",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 8,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT782",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 9,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT783",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 10,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT784",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
      {
            "Sl. No": 11,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT785",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 12,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT786",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 13,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT787",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 14,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT788",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 15,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT789",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 16,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT790",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 17,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT791",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 18,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT792",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 19,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT793",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 20,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT794",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 21,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT795",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
      {
            "Sl. No": 22,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT796",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
          {
            "Sl. No": 23,
            "Description": "Lenovo Make Thinkcentre NEO 50 Desktop Intel Core i5 12500 12th, 16GB DDR4 Memory 512GB NVMe SSD, Sound on board, GIGA Lan Lenovo Keyboard & Mouse, Lenovo 19.5 Inch Monitor",
            "Service Tag": null,
            "Identification No": "IT797",
            "Procurement Date": null,
            "Cost": "45068",
            "Location": null
          },
      {
            "Sl. No": 24,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC with Intel Core 2 Duo E4500 @ 2.2 GHz CPU, 4 GB RAM, 500 GB HDD, Lenovo 19” TFT Monitor (Transferred from ISE) to be scrapped (Absolute)",
            "Service Tag": "158985B63L9HC641",
            "Identification No": "IT 663",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 25,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HG960",
            "Identification No": "IT 664",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 26,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH062",
            "Identification No": "IT 665",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 27,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH282",
            "Identification No": "IT 666",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 28,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HE068",
            "Identification No": "IT 667",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 29,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HD690",
            "Identification No": "IT 668",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 30,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HD657",
            "Identification No": "IT 669",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 31,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH013",
            "Identification No": "IT 670",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 32,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH220",
            "Identification No": "IT 671",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
      {
            "Sl. No": 33,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH620",
            "Identification No": "IT 672",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 34,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HG906",
            "Identification No": "IT 673",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 35,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HE184",
            "Identification No": "IT 674",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 36,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "1589789A14L907587",
            "Identification No": "IT 675",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          },
          {
            "Sl. No": 37,
            "Description": "IBM THINK CENTRE 8985 B63 DESKTOP PC (To be scrapped)",
            "Service Tag": "158985B63L9HH206",
            "Identification No": "IT 676",
            "Procurement Date": null,
            "Cost": "39540",
            "Location": null
          }
      ],
      "Mitsubishi Laboratory":[
          {
            "Sl. No": 1,
            "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 17” TFT Monitor",
            "Service Tag": "1S1HVA00100PG00J59Q",
            "Identification No": "IT540",
            "Procurement Date": 42340,
            "Cost": 42200,
            "Location": "Automation Laboratory (DES 507)(Mitsubishi Laboratory)"
          }
      ],
      "R&D (LHC 502B)":[
          {
          "Sl. No": 1,
          "Description": "Lenovo Think Centre M750 TW B360 Tower with Intel Core i7-8700, 8th Generation Processor, 16GB DDR4 RAM, 1 TB HDD, Lenovo 19.5\" LED Monitor, Keyboard, Mouse, Gigabit Ethernet & Sound Board",
          "Service Tag": "PG01R6VC",
          "Identification No": "IT650",
          "Procurement Date": 43756,
          "Cost": 67260,
          "Location": "R&D (LHC 502B)"
        },
        {
          "Sl. No": 2,
          "Description": "Lenovo Think Centre M750 TW B360 Tower with Intel Core i7-8700, 8th Generation Processor, 16GB DDR4 RAM, 1 TB HDD, Lenovo 19.5\" LED Monitor, Keyboard, Mouse, Gigabit Ethernet & Sound Board",
          "Service Tag": "PG01R9W0",
          "Identification No": "IT651",
          "Procurement Date": 43756,
          "Cost": 67290,
          "Location": null
        },
        {
          "Sl. No": 3,
          "Description": "Lenovo Think Centre M750 TW B360 Tower with Intel Core i7-8700, 8th Generation Processor, 16GB DDR4 RAM, 1 TB HDD, Lenovo 19.5\" LED Monitor, Keyboard, Mouse, Gigabit Ethernet & Sound Board",
          "Service Tag": "PG01R6VB",
          "Identification No": "IT652",
          "Procurement Date": 43756,
          "Cost": 67290,
          "Location": null
        },
        {
          "Sl. No": 4,
          "Description": "Lenovo Desktop Computer System Model H50-30 with Intel Core i5, 4GB RAM, 1TB HDD and 17\" TFT Monitor",
          "Service Tag": "R300U1E0",
          "Identification No": "IT428",
          "Procurement Date": 42158,
          "Cost": 42200,
          "Location": null
        },
        {
          "Sl. No": 5,
          "Description": "Lenovo Desktop Model with Intel Core i7",
          "Service Tag": "CPRI Funded Project",
          "Identification No": "IT798",
          "Procurement Date": null,
          "Cost": 0,
          "Location": null
        },
        {
          "Sl. No": 6,
          "Description": "Lenovo Desktop Computer System Model H50-30 with Intel Core i5, 4GB RAM, 1TB HDD and 17\" TFT Monitor",
          "Service Tag": "R300M3A2",
          "Identification No": "IT430",
          "Procurement Date": 42222,
          "Cost": 42200,
          "Location": null
        }
      ],
      "Faculties computing facility":[
          {
          "Sl. No": 1,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "1C7PTLVI",
          "Identification No": "IT383",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "Christina Grace"
        },
        {
          "Sl. No": 2,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "4HNTLV1",
          "Identification No": "IT384",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "Nishi"
        },
        {
          "Sl. No": 3,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "2PNTLVI",
          "Identification No": "IT385",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "K. M. Vanitha"
        },
        {
          "Sl. No": 4,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "G7NTLV1",
          "Identification No": "IT386",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "Dr. A. Saravanan"
        },
        {
          "Sl. No": 5,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "CPNTLV1",
          "Identification No": "IT387",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "Ellavar Kuzhali"
        },
        {
          "Sl. No": 6,
          "Description": "Dell Optiplex 390, Intel Core i5, 4GB DDR3 RAM, 500GB HDD with 18.5\" Dell Monitor",
          "Service Tag": "15PTLVI",
          "Identification No": "IT388",
          "Procurement Date": 41584,
          "Cost": 35000,
          "Location": "Dr. H S Niranjana Murthy"
        },
        {
          "Sl. No": 7,
          "Description": "Lenovo Desktop Computer System Model H50-30 with Intel Core i5, 4GB RAM, 1TB HDD and 17\" TFT Monitor",
          "Service Tag": "R300M398",
          "Identification No": "IT426",
          "Procurement Date": 42222,
          "Cost": 42200,
          "Location": "N. Krishna Kumari (Clerk)"
        },
        {
          "Sl. No": 8,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S1HVA00100PG00J5AF",
          "Identification No": "IT533",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": "Dr. M. Jyothirmayi (HOD)"
        },
        {
          "Sl. No": 9,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S1HVA00100PG00J5AY",
          "Identification No": "IT535",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": "Dr. Pushpa M.K"
        },
        {
          "Sl. No": 10,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S1HVA00100PG00J580",
          "Identification No": "IT537",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": "M.D. Nandeesh"
        },
        {
          "Sl. No": 11,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S1HVA00100PG00J5B4",
          "Identification No": "IT538",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": null
        },
        {
          "Sl. No": 12,
          "Description": "Lenovo S500 Desktop with Intel Core i5, 4GB DDR3 RAD, 500GB HDD with 17” TFT Monitor",
          "Service Tag": "1S1HVA00100PG00J59R",
          "Identification No": "IT539",
          "Procurement Date": 42340,
          "Cost": 42200,
          "Location": "J. V. Alamelu"
        },
        {
          "Sl. No": 13,
          "Description": "Dell Optiplex 7050MT with Intel Core i7, 7th Gen, 8GB RAM, 2TB HDD with 21.5\" P Series Monitor",
          "Service Tag": "4M6Y7Q2",
          "Identification No": "IT633",
          "Procurement Date": "25/07/2018",
          "Cost": 71980,
          "Location": "G Shiva Prakash"
        }
      ],
      "Projectors":[
      {
          "Sl. No": "1",
          "Description": "Hitachi LCD Projector",
          "Service Tag": "",
          "Identification No": "IT343",
          "Procurement Date": 40310,
          "Cost": 29000,
          "Location": "Simulation Lab (DES 204)"
        },
        {
          "Sl. No": "2",
          "Description": "Acer 2700 Series LCD Projector",
          "Service Tag": "",
          "Identification No": "IT390",
          "Procurement Date": 41436,
          "Cost": 24500,
          "Location": "Automation Lab"
        },
        {
          "Sl. No": "3",
          "Description": "Acer Model X1173N LCD Projector",
          "Service Tag": "",
          "Identification No": "IT423",
          "Procurement Date": 41831,
          "Cost": 25847.33,
          "Location": "Class Room"
        },
        {
          "Sl. No": "4",
          "Description": "Acer Model X1173N LCD Projector",
          "Service Tag": "",
          "Identification No": "IT424",
          "Procurement Date": 41831,
          "Cost": 25847.33,
          "Location": "Class Room"
        },
        {
          "Sl. No": "5",
          "Description": "Acer Model X1173N LCD Projector",
          "Service Tag": "",
          "Identification No": "IT425",
          "Procurement Date": 41831,
          "Cost": 25847.33,
          "Location": "Class Room"
        },
        {
          "Sl. No": "6",
          "Description": "Acer Model DSC1513 LCD Projector",
          "Service Tag": "MRJMD11002538011325900",
          "Identification No": "IT590",
          "Procurement Date": 42372,
          "Cost": 25847.5,
          "Location": "Office"
        },
        {
          "Sl. No": "7",
          "Description": "Acer Model DSC1513 LCD Projector",
          "Service Tag": "MRJMD110025380113D5900",
          "Identification No": "IT591",
          "Procurement Date": 42372,
          "Cost": 25847.5,
          "Location": "Office"
        },
        {
          "Sl. No": "8",
          "Description": "Acer Model DC1513 LCD Projector",
          "Service Tag": "X1223H",
          "Identification No": "IT648",
          "Procurement Date": 43696,
          "Cost": 32320,
          "Location": "Embedded Lab"
        }
      ],
      "Laptops" : 
      [
      {
          "Sl. No": "1",
          "Description": "HP Laptop Compaq 6710b Intel Core 2 DUO",
          "Service Tag": "CNU7281F4D",
          "Identification No": "",
          "Procurement Date": "",
          "Cost": "",
          "Location": "Office"
        },
        {
          "Sl. No": "2",
          "Description": "IBM Thinkpad Centrino Laptop",
          "Service Tag": "2887AE3",
          "Identification No": "TQPPC/05147",
          "Procurement Date": "",
          "Cost": "",
          "Location": "Office"
        },
        {
          "Sl. No": "3",
          "Description": "Lenova G500 Laptop",
          "Service Tag": "CB24271942",
          "Identification No": "IT389",
          "Procurement Date": "",
          "Cost": "",
          "Location": "Automation Laboratory"
        },
        {
          "Sl. No": "4",
          "Description": "HP Laptop Compaq 6710b Intel Core 2 DUO",
          "Service Tag": "GM913PA#ACJ",
          "Identification No": "ST-PC-1",
          "Procurement Date": 41584,
          "Cost": 38000,
          "Location": "Office"
        },
        {
          "Sl. No": "5",
          "Description": "HP Laptop Compaq 6710b Intel Core 2 DUO",
          "Service Tag": "CNU7281F2Y",
          "Identification No": "",
          "Procurement Date": "",
          "Cost": "",
          "Location": "MJ"
        },
        {
          "Sl. No": "6",
          "Description": "HP Laptop Compaq 6710b Intel Core 2 DUO",
          "Service Tag": "CNU7281F7J",
          "Identification No": "",
          "Procurement Date": "",
          "Cost": "",
          "Location": "PMK"
        },
        {
          "Sl. No": "7",
          "Description": "Dell Inspiron 3298 Intel i5 with 20 GB RAM",
          "Service Tag": "CM62B53",
          "Identification No": "IT699",
          "Procurement Date": 44049,
          "Cost": 59999.99,
          "Location": "Office"
        },
        {
          "Sl. No": "8",
          "Description": "Dell Inspiron 3298 Intel i5 with 20 GB RAM",
          "Service Tag": "5LBCB53",
          "Identification No": "IT700",
          "Procurement Date": 44049,
          "Cost": 59999.99,
          "Location": "Office"
        },
        {
          "Sl. No": "9",
          "Description": "Lenova Ideal Pad S540 with Intel i7 with 8GB RAM",
          "Service Tag": "YXN0B032600E",
          "Identification No": "IT701",
          "Procurement Date": 44110,
          "Cost": 89680,
          "Location": "Office"
        }
      ],
      "Printers in the department":
      [
        {
          "Sl. No": "1",
          "Description": "HP 1022 Laserjet Printer",
          "Service Tag": "",
          "Identification No": "IT040",
          "Procurement Date": 38593,
          "Cost": "---",
          "Location": "Process Control Lab (DES 508)"
        },
        {
          "Sl. No": "2",
          "Description": "HP 1136MFP Laserjet Multifunction Printer",
          "Service Tag": "CNH8H73B45",
          "Identification No": "IT505",
          "Procurement Date": 42317,
          "Cost": 10395,
          "Location": "H.O.D"
        },
        {
          "Sl. No": "3",
          "Description": "HP 1136MFP Laserjet Multifunction Printer",
          "Service Tag": "CNJ8H8W49T",
          "Identification No": "IT504",
          "Procurement Date": 42317,
          "Cost": 10395,
          "Location": "Dept. Office"
        },
        {
          "Sl. No": "4",
          "Description": "HP 1136MFP Laserjet Multifunction Printer",
          "Service Tag": "CNJ8J6N9NB",
          "Identification No": "IT593",
          "Procurement Date": 43080,
          "Cost": 11078,
          "Location": "Staff Cabin"
        },
        {
          "Sl. No": "5",
          "Description": "HP Laser Jet Pro MFP M427fdw",
          "Service Tag": "PHB8J6L3K7",
          "Identification No": "IT 799",
          "Procurement Date": "CPRI Funded",
          "Cost": "---",
          "Location": "H.O.D"
        }
      ],
      "Scanner in the department":
      [
        {
          "Sl. No": "1",
          "Description": "HP ScanJet G3010",
          "Service Tag": "CN6CMA5272",
          "Identification No": "BRNS",
          "Procurement Date": "---",
          "Cost": "---",
          "Location": "Office"
        },
        {
          "Sl. No": "2",
          "Description": "HP ScanJet G3110",
          "Service Tag": "CN379BA0X8",
          "Identification No": "IT391",
          "Procurement Date": 41436,
          "Cost": 8000,
          "Location": "Process Control Lab (DES 508)"
        },
        {
          "Sl. No": "3",
          "Description": "Hp Scanjet Pro 2000 S2 Sheet Feed Scaner",
          "Service Tag": "CN39SB200T",
          "Identification No": "IT801",
          "Procurement Date": 45280,
          "Cost": 24013,
          "Location": "H.O.D"
        }
      ],
      "Computer in project lab":
      [
      {
          "Sl. No": "1",
          "Description": "HP Worskstation,  HPXW4400, Intel Core 2 Duo, 1.86GHz, 512MB RAM, 80GB HDD",
          "Service Tag": "HP-SGH72001VS",
          "Identification No": "BRNSWS-I CPU-2",
          "Procurement Date": "---",
          "Cost": "---",
          "Location": "Project Lab"
        },
        {
          "Sl. No": "2",
          "Description": "",
          "Service Tag": "HP-SGH7150CKV",
          "Identification No": "BRNSWS-I CPU-3",
          "Procurement Date": "---",
          "Cost": "---",
          "Location": "Project Lab"
        },
        {
          "Sl. No": "3",
          "Description": "",
          "Service Tag": "HP-SGH72001W",
          "Identification No": "BRNSWS-I CPU-1",
          "Procurement Date": "---",
          "Cost": "---",
          "Location": "Staff Room (DES502)"
        }
      ],
      "UPS in Department":
      [
       {
          "Sl. No": "1",
          "Description": "10 KVA UPS (Power Net)  with 16 Nos Battiers",
          "Service Tag": "",
          "Identification No": "",
          "Procurement Date": "14-12-2005 (Tequip)",
          "Cost": "---",
          "Location": "Controls Lab"
        },
        {
          "Sl. No": "2",
          "Description": "10 KVA UPS (Power Net) with 16 Nos 100AH Tubular Batteries",
          "Service Tag": "",
          "Identification No": "IT 326",
          "Procurement Date": 40239,
          "Cost": 160160,
          "Location": "Automation Lab"
        },
        {
          "Sl. No": "3",
          "Description": "5KVA Online UPS (Power Net)  with 75AH Batteries",
          "Service Tag": "",
          "Identification No": "IT 632",
          "Procurement Date": 43154,
          "Cost": 129800,
          "Location": "Project Lab"
        },
        {
          "Sl. No": "4",
          "Description": "10 KVA UPS with 16Nos 75AH SMF Battery",
          "Service Tag": "",
          "Identification No": "IT 649",
          "Procurement Date": "19-08-2019",
          "Cost": "201190.00",
          "Location": "Embedded Controllers Lab"
        }
      ]
  };

  // ✅ Transform rawData to array of department documents
  const assetsToInsert = Object.entries(rawData).map(([department, assets]) => ({
    department,
    assets: assets.map((a) => ({
      SlNo: a["Sl. No"]?.toString(),
      Description: a["Description"] || "",
      ServiceTag: a["Service Tag"] || "",
      IdentificationNo: a["Identification No"] || "",
      ProcurementDate: a["Procurement Date"] || "",
      Cost: a["Cost"] || "",
      Location: a["Location"] || "",
    })),
  }));

  try {
    const existing = await DepartmentAsset.find();
    if (existing.length === 0) {
      await DepartmentAsset.insertMany(assetsToInsert);
      console.log("Assets initialized successfully.");
    }
  } catch (error) {
    console.log("Error initializing assets:", error);
  }
};

// Call the initialization
initAssets();
