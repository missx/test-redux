import React from 'react';
import PropTypes from 'prop-types';


const TableRow = ({ onClick, completed, text, date }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <td>{text}</td>
    <td>{date.toDateString()} {date.toLocaleTimeString()}</td>
  </tr>
)

TableRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}

export default TableRow;