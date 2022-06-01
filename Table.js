import React from 'react';
import MaterialTable from 'material-table';
function TableApp(props) {
    return (
      <MaterialTable
        title="Basic Sorting Preview"
        columns={[
          { title: 'Product Name', field: 'name' },
          { title: 'Price', field: 'price' },
          { title: 'Category', field: 'category' },
          ,
        ]}
        data={props.cookies}        
        options={{
          sorting: true
        }}
      />
    )
  }
  
export default TableApp;