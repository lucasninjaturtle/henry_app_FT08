import { useState, useCallback } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";

const columns = [
  {
    name: "id",
    minWidth: 70,
    defaultWidth: 70,
    header: "Id",
    editable: false
  },
  {
    name: "name",
    defaultFlex: 1,
    header: "Nombre",
    editable: false
  }
];

function Groups({ data }) {
  const [selected, setSelected] = useState();

  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected);
  }, []);

  return (
    <div className="w-auto">
      <h1 className="text-5xl md:text-4xl lg:text-5xl text-center font-semibold">
        Grupos
      </h1>
      <ReactDataGrid
        idProperty="id"
        editable={true}
        // checkboxColumn
        onSelectionChange={onSelectionChange}
        columns={columns}
        defaultFilterValue={[
          {
            name: "name",
            operator: "contains",
            type: "string",
            value: ""
          }
        ]}
        style={{
          marginTop: 25,
          minWidth: 500,
          minHeight: 500,
          maxHeight: 750
        }}
        dataSource={data}
      />
    </div>
  );
}

export default Groups;
