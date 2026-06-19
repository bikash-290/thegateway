import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between">
      <h4>Dashboard</h4>

      <div className="d-flex gap-3 align-items-center">
        <Bell />
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-circle"
          alt=""
        />
      </div>
    </div>
  );
}