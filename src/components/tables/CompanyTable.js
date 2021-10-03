import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
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
    field: 'isAdmin',
    headerName: 'Üyelik Aktifliği',
    width: 180,
    type: 'boolean'
  },
  {
    field: 'id',
    headerName: 'Event',
    width: 180,
    renderCell: (params) => (
      <strong>
        <Button
          component={RouterLink}
          to={`/companies/${params.value}`}
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Şirkete Git
        </Button>
      </strong>
    )
  }
];

export default function CompanyTable() {
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState(10);
  const { data } = useDemoData({
    dataSet: 'Company',
    rowLength: 40
  });

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }} className={classes.root}>
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 25, 50]}
            pagination
            autoHeight
            rows={data.rows}
            columns={columns}
            getRowClassName={(params) => `super-app-theme--${params.getValue(params.id, 'isAdmin')}`}
          />
        </div>
      </div>
    </div>
  );
}
