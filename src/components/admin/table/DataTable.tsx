interface Column<T> {
  key: keyof T;
  label: string;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  renderActions?: (row: T) => React.ReactNode;
}

export default function DataTable<T>({
  data,
  columns,
  renderActions,
}: Props<T>) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">

        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>
                {col.label}
              </th>
            ))}
            {renderActions && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={String(col.key)}>
                  {String(row[col.key])}
                </td>
              ))}

              {renderActions && (
                <td>
                  {renderActions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}