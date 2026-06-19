"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: "bi-speedometer2",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "bi-people",
  },
  {
    name: "Services",
    path: "/admin/services",
    icon: "bi-gear",
  },
  {
    name: "Bookings",
    path: "/admin/bookings",
    icon: "bi-calendar-check",
  },
  {
    name: "Contacts",
    path: "/admin/contacts",
    icon: "bi-envelope",
  },
  {
    name: "Gallery",
    path: "/admin/gallery",
    icon: "bi-images",
  },
  {
    name: "Payments",
    path: "/admin/payments",
    icon: "bi-credit-card",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="bg-dark text-white vh-100 p-3"
      style={{ width: "260px" }}
    >
      <h3 className="mb-4">Gateway Admin</h3>

      {menu.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`d-block p-3 rounded text-decoration-none mb-2 ${
            pathname === item.path
              ? "bg-primary text-white"
              : "text-light"
          }`}
        >
          <i className={`bi ${item.icon} me-2`}></i>
          {item.name}
        </Link>
      ))}
    </aside>
  );
}