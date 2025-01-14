import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function OrderSortingPerColumnGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        columns={data.columns.map((column) => ({
          ...column,
          sortingOrder:
            column.field === 'quantity' ? ['desc', 'asc', null] : undefined,
        }))}
        sortingOrder={['asc', 'desc', null]}
      />
    </div>
  );
}
