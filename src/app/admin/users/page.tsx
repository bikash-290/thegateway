"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
    },
    {
      id: 2,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");

  const handleAddUser = () => {
    if (!name || !email) return;

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      role,
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setRole("User");
  };

  const handleDeleteUser = (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container-fluid">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Users Management</h4>
        </div>

        <div className="card-body">

          {/* Add User Form */}
          <div className="row mb-4">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-primary w-100"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th style={{ width: "120px" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <span
                          className={`badge ${
                            user.role === "Admin"
                              ? "bg-danger"
                              : "bg-success"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            handleDeleteUser(user.id)
                          }
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center"
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}