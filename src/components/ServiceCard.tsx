interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5>{title}</h5>

          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}