'use client';

import { useState, useEffect, useContext } from "react";
import { Adityatechcontext } from "../context";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import {
  addHardwareAssetToDepartmentByName,
  editHardwareAssetInDepartmentByName,
  deleteHardwareAssetFromDepartmentBySlNo
} from "@/actions";
import { Pencil, Trash } from "lucide-react";

const HomeScreen = ({ deptassets }) => {
  const departmentMap = {};
  (deptassets || []).forEach((doc) => {
    departmentMap[doc.department] = doc.assets;
  });

  const departments = Object.keys(departmentMap);
  const [selectedDept, setSelectedDept] = useState(departments[0]);
  const { productdata } = useContext(Adityatechcontext);
  const router = useRouter();

  const [newAsset, setNewAsset] = useState({
    SlNo: '',
    Description: '',
    ServiceTag: '',
    IdentificationNo: '',
    ProcurementDate: '',
    Cost: '',
    Location: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [assetToDelete, setAssetToDelete] = useState(null);

  useEffect(() => {
    if (selectedDept) {
      router.prefetch(`/department/${selectedDept}`);
    }
  }, [selectedDept, router]);

  const handleChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleAddAsset = async () => {
    try {
      if (isEditMode) {
        const result = await editHardwareAssetInDepartmentByName(selectedDept, newAsset);
        if (result && result.assets) {
          alert("Asset updated successfully!");
          window.location.reload();
        } else {
          alert("Failed to update asset");
        }
      } else {
        const result = await addHardwareAssetToDepartmentByName(selectedDept, newAsset);
        if (result && result.assets) {
          alert("Asset added successfully!");
          window.location.reload();
        } else {
          alert("Failed to add asset");
        }
      }
    } catch (error) {
      console.log("Error saving asset:", error);
      alert("Error saving asset");
    }

    setDialogOpen(false);
    setNewAsset({
      SlNo: '',
      Description: '',
      ServiceTag: '',
      IdentificationNo: '',
      ProcurementDate: '',
      Cost: '',
      Location: '',
    });
    setIsEditMode(false);
  };

  const handleEdit = (asset) => {
    setNewAsset(asset);
    setIsEditMode(true);
    setDialogOpen(true);
  };

  const handleDelete = (asset) => {
    setAssetToDelete(asset);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const result = await deleteHardwareAssetFromDepartmentBySlNo(selectedDept, assetToDelete.SlNo);
      if (result && result.assets) {
        alert("Asset deleted successfully!");
        window.location.reload();
      } else {
        alert("Failed to delete asset");
      }
    } catch (error) {
      console.log("Error deleting asset:", error);
      alert("Error deleting asset");
    }

    setDeleteDialogOpen(false);
    setAssetToDelete(null);
  };

  const colors = [
    "border-red-500", "border-green-500", "border-blue-500", "border-yellow-500",
    "border-purple-500", "border-pink-500", "border-orange-500", "border-teal-500",
    "border-emerald-500", "border-indigo-500"
  ];

  const textColorMap = {
    "border-red-500": "text-red-500",
    "border-green-500": "text-green-500",
    "border-blue-500": "text-blue-500",
    "border-yellow-500": "text-yellow-500",
    "border-purple-500": "text-purple-500",
    "border-pink-500": "text-pink-500",
    "border-orange-500": "text-orange-500",
    "border-teal-500": "text-teal-500",
    "border-emerald-500": "text-emerald-500",
    "border-indigo-500": "text-indigo-500",
  };

  const descriptionColorMap = {};
  let colorIndex = 0;

  return (
    <div className="min-h-screen mx-auto">
      {/* Header */}
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
                M S Ramaiah Institute of Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Dropdown */}
      <div className="bg-white shadow-md">
        <div className="flex justify-center py-4">
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-4 py-2 rounded-md border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Assets List */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{selectedDept} - Asset List</h2>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <button
                className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
                onClick={() => {
                  setIsEditMode(false);
                  setNewAsset({
                    SlNo: '',
                    Description: '',
                    ServiceTag: '',
                    IdentificationNo: '',
                    ProcurementDate: '',
                    Cost: '',
                    Location: '',
                  });
                  setDialogOpen(true);
                }}
              >
                Add New Component
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditMode ? "Edit Asset" : "Add New Asset"}</DialogTitle>
                <DialogDescription>
                  {isEditMode
                    ? `Edit asset details for ${selectedDept}.`
                    : `Fill out the form to add a new asset to the ${selectedDept} department.`}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                {Object.keys(newAsset).map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field}
                    value={newAsset[field]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                ))}
              </div>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                </DialogClose>
                <button onClick={handleAddAsset} className="px-4 py-2 bg-blue-600 text-white rounded">
                  {isEditMode ? "Update Asset" : "Add Asset"}
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(departmentMap[selectedDept]) && departmentMap[selectedDept].length > 0 ? (
            departmentMap[selectedDept].map((asset, index) => {
              const desc = asset.Description || "Unknown";

              if (!descriptionColorMap[desc]) {
                descriptionColorMap[desc] = colors[colorIndex % colors.length];
                colorIndex++;
              }

              const borderColorClass = descriptionColorMap[desc];
              const textColorClass = textColorMap[borderColorClass] || "text-black";

              return (
                <div
                  key={index}
                  className={`relative bg-white p-8 rounded-md shadow hover:shadow-lg transition border-l-4 ${borderColorClass}`}
                >
                  <button
                    onClick={() => handleEdit(asset, index)}
                    className="absolute top-2 left-2 text-gray-600 hover:text-gray-800"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(asset, index)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                  >
                    <Trash size={18} />
                  </button>

                  <p><strong>Sl. No:</strong> {asset.SlNo}</p>
                  <p className={`${textColorClass} font-semibold`}>Description: {desc}</p>
                  <p><strong>Service Tag:</strong> {asset.ServiceTag}</p>
                  <p><strong>Identification No:</strong> {asset.IdentificationNo}</p>
                  <p><strong>Procurement Date:</strong> {String(asset.ProcurementDate)}</p>
                  <p><strong>Cost:</strong> ₹{asset.Cost}</p>
                  <p><strong>Location:</strong> {asset.Location || selectedDept}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-full">No assets found for this department.</p>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete asset Sl. No: {assetToDelete?.SlNo}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            </DialogClose>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeScreen;
