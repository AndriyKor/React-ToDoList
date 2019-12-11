import React from "react";

const List = props => {
  return props.items.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(item => (
          <tr key={item}>
            <th>{props.items.indexOf(item) + 1}</th>
            <td>{item}</td>
            <td className="text-right">
              <button
                className="btn btn-danger"
                onClick={() => props.handleDelete(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h4>The list is empty</h4>
  );
};

export default List;
