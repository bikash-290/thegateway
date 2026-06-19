import DashboardCards from "@/components/admin/DashboardCards";

export default function DashboardPage() {
  return (
    <>
      <DashboardCards />

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              Revenue Chart
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              Weekly Report
            </div>
          </div>
        </div>
      </div>
    </>
  );
}