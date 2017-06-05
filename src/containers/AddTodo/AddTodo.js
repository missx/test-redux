import React from 'react';
import { connect } from 'react-redux';
import { Button,
         FormControl,
         Form } from 'react-bootstrap';

import { addTodo } from '../../actions';
import './AddTodo.css';


let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form inline
            onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <FormControl
            type="text"
            placeholder="Add Todo"
            inputRef={(text) => {
                input = text;
            }}
            bsSize="sm" 
          />
        <Button bsStyle="success" type="submit" className="AddTodo-button-spacing">
            Add Todo
        </Button>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo