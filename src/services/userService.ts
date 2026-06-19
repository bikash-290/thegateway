import { User } from "@/types/user";

export const userService = {
  async getUsers(): Promise<User[]> {
    const res = await fetch("/api/users");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  },

  async deleteUser(id: number) {
    return fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
  },

  async updateUser(
    id: number,
    data: Partial<User>
  ) {
    return fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};