"use client";

import {
  useEffect,
  useState,
} from "react";

import Swal from "sweetalert2";
import Link from "next/link";
import { Service } from "@/types/service";
import { serviceService } from "@/services/serviceService";

export default function ServicesPage() {
  const [services, setServices] =
    useState<Service[]>([]);

  const [search, setSearch] =
    useState("");

  const loadServices =
    async () => {
      const data =
        await serviceService.getServices();

      setServices(data);
    };

  useEffect(() => {
    loadServices();
  }, []);

  const deleteService =
    async (id: number) => {
      const result =
        await Swal.fire({
          title:
            "Delete Service?",
          icon: "warning",
          showCancelButton: true,
        });

      if (
        !result.isConfirmed
      )
        return;

      await serviceService.deleteService(
        id
      );

      loadServices();

      Swal.fire(
        "Deleted",
        "",
        "success"
      );
    };

  const filtered = services.filter(
  (service) =>
    service?.title
      ?.toLowerCase()
      ?.includes(search.toLowerCase())
  );

  return (
    <div className="card shadow-sm">

      <div className="card-header d-flex justify-content-between">

        <h4>
          Services Management
        </h4>

        <Link
            href="/admin/services/add"
            className="btn btn-primary"
            >
            Add Service
        </Link>

      </div>

      <div className="card-body">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Service"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <div className="table-responsive">

          <table className="table table-bordered">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Status</th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {filtered.map(
                (service) => (
                  <tr
                    key={
                      service.id
                    }
                  >
                    <td>
                      {
                        service.id
                      }
                    </td>

                    <td>
                      <img
                        src={service.image}
                        alt={service.title}
                        width="60"
                        height="60"
                        className="rounded object-fit-cover"
                      />
                    </td>

                    <td>
                      {
                        service.title
                      }
                    </td>

                    <td>
                      ₹
                      {
                        service.price
                      }
                    </td>

                    <td>
                      <span className="badge bg-success">
                        {
                          service.status
                        }
                      </span>
                    </td>

                    <td>

                      <Link
                        href={`/admin/services/edit/${service.id}`}
                        className="btn btn-warning btn-sm me-2"
                        >
                        Edit
                        </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteService(
                            service.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}