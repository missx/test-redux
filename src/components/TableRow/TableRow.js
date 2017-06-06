import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';



const TableRow = ({ onClick, onClickDelete, completed, text, date }) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <td>{text}</td>
    <td>{date.toDateString()} {date.toLocaleTimeString()}</td>
    <td>
      <Button 
        bsStyle="danger" 
        type="button" 
        onClick={onClickDelete}>
            Delete
      </Button>
    </td>
  </tr>
)

TableRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default TableRow;