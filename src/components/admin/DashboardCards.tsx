export default function DashboardCards() {
  const stats = [
    {
      title: "Users",
      value: "120",
    },
    {
      title: "Services",
      value: "15",
    },
    {
      title: "Bookings",
      value: "250",
    },
    {
      title: "Payments",
      value: "₹1,20,000",
    },
  ];

  return (
    <div className="row">
      {stats.map((item) => (
        <div
          key={item.title}
          className="col-md-3 mb-4"
        >
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>{item.title}</h6>
              <h3>{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}