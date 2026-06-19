"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Category } from "@/types/category";


export default function AddServicePage() {
  const router = useRouter();
  const [imageFile, setImageFile] =
  useState<File | null>(null);
  const [categories, setCategories] =
  useState<Category[]>([]);
  useEffect(() => {
  loadCategories();
}, []);

    const loadCategories = async () => {
      try {
        const response = await fetch(
          "/api/categories"
        );

        const data =
          await response.json();

        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

  const [formData, setFormData] = useState({
    category_id: "",
    title: "",
    description: "",
    image: "",
    price: "",
    status: "Active",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    let imagePath = "";

    if (imageFile) {
      const formDataUpload =
        new FormData();

      formDataUpload.append(
        "file",
        imageFile
      );

      const uploadResponse =
        await fetch("/api/upload", {
          method: "POST",
          body: formDataUpload,
        });

      if (!uploadResponse.ok) {
        const errorText =
          await uploadResponse.text();

        console.error(errorText);

        throw new Error(
          "Upload failed"
        );
      }

      const uploadResult =
        await uploadResponse.json();

      imagePath =
        uploadResult.image;
    }

    try {
      const response = await fetch(
        "/api/services",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            category_id:
              Number(
                formData.category_id
              ),
            title: formData.title,
            description:
              formData.description,
            image: formData.imagePath,
            price: Number(
              formData.price
            ),
            status:
              formData.status,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Service added successfully",
        });

        router.push(
          "/admin/services"
        );
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add service",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="card shadow-sm">
        <div className="card-header">
          <h4>Add Service</h4>
        </div>

        <div className="card-body">
          <form
            onSubmit={
              handleSubmit
            }
          >
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Category ID
                </label>

                <select
                  name="category_id"
                  className="form-select"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Category
                  </option>

                  {categories.map(
                    (category) => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.category_name}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Service Title
                </label>

                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={
                    formData.title
                  }
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">
                  Description
                </label>

                <textarea
                  name="description"
                  className="form-control"
                  rows={4}
                  value={
                    formData.description
                  }
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Service Image
                </label>

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) =>
                    setImageFile(
                      e.target.files?.[0] || null
                    )
                  }
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={
                    formData.price
                  }
                  onChange={
                    handleChange
                  }
                  required
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">
                  Status
                </label>

                <select
                  name="status"
                  className="form-select"
                  value={
                    formData.status
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>
              </div>

            </div>

            <div className="d-flex gap-2">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Service
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() =>
                  router.push(
                    "/admin/services"
                  )
                }
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}