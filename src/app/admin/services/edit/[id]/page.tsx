"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Category } from "@/types/category";
import Swal from "sweetalert2";

interface ServiceFormData {
  category_id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  status: string;
}

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const [categories, setCategories] =
  useState<Category[]>([]);
  useEffect(() => {
  loadCategories();
  fetchService();
  }, []);
  const [loading, setLoading] = useState(true);


  const [formData, setFormData] =
    useState<ServiceFormData>({
      category_id: "",
      title: "",
      description: "",
      image: "",
      price: "",
      status: "Active",
    });

  

  const loadCategories = async () => {
  const response = await fetch(
    "/api/categories"
  );

  const data =
    await response.json();

  setCategories(data);
};
  const fetchService = async () => {
    try {
      const response = await fetch(
        `/api/services/${params.id}`
      );

      const service =
        await response.json();

      setFormData({
        category_id:
          service.category_id?.toString() ||
          "",
        title: service.title || "",
        description:
          service.description || "",
        image: service.image || "",
        price:
          service.price?.toString() || "",
        status:
          service.status || "Active",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load service",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/services/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            category_id: Number(
              formData.category_id
            ),
            title:
              formData.title,
            description:
              formData.description,
            image:
              formData.image,
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
          text: "Service updated successfully",
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
        text: "Failed to update service",
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="card shadow-sm">
        <div className="card-header">
          <h4>Edit Service</h4>
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

                <input
                  type="number"
                  name="category_id"
                  className="form-control"
                  value={
                    formData.category_id
                  }
                  onChange={
                    handleChange
                  }
                  required
                />
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
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  className="form-control"
                  value={
                    formData.image
                  }
                  onChange={
                    handleChange
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
                Update Service
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