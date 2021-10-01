import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import renderCellExpand from './CellRenderer';
import { useStyles } from './TableStyle';

const columns = [
  { field: 'company', headerName: 'Firma Adı', minWidth: 220, renderCell: renderCellExpand },
  {
    field: 'city',
    headerName: 'Şehir',
    width: 180
  },
  {
    field: 'name',
    headerName: 'Şirket Sahibi',
    width: 180
  },
  {
    field: 'dateCreated',
    headerName: 'Üyelik Başlangıç Tarihi',
    width: 220,
    type: 'date'
  },
  {
    field: 'status',
    headerName: 'Üyelik Aktifliği',
    width: 180
  }
];

export default function CompanyTable() {
  const classes = useStyles();
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 40
  });

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }} className={classes.root}>
          <DataGrid
            autoHeight
            rows={data.rows}
            columns={columns}
            getRowClassName={(params) => `super-app-theme--${params.getValue(params.id, 'status')}`}
          />
        </div>
      </div>
    </div>
  );
}
