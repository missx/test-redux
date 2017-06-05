import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import TableRow from '../TableRow/TableRow';

const TableList = ({ todos, onTodoClick }) => (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Todo</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>
        <TableRow
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </tbody>
  </Table>
)

TableList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TableList;