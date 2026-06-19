import { Service } from "../types/service";

export const serviceService = {
  async getServices(): Promise<Service[]> {
    const res = await fetch("/api/services");

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    return res.json();
  },

  async createService(
    data: Partial<Service>
  ) {
    return fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(data),
    });
  },

  async updateService(
    id: number,
    data: Partial<Service>
  ) {
    return fetch(
      `/api/services/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  },

  async deleteService(
    id: number
  ) {
    return fetch(
      `/api/services/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};