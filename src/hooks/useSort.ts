import { useState } from "react";

export function useSort<T>(
  data: T[],
  field: keyof T
) {
  const [sortField, setSortField] =
    useState(field);

  const sortedData = [...data].sort(
    (a, b) =>
      String(a[sortField]).localeCompare(
        String(b[sortField])
      )
  );

  return {
    sortedData,
    sortField,
    setSortField,
  };
}