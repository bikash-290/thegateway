"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.success) {
      document.cookie = `token=${data.token}; path=/`;

      window.location.href = "/admin";

      //alert("Login Successful");
      window.location.href = "/admin";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">

              <h3 className="mb-4">
                Login
              </h3>

              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}