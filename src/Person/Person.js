import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name}! I am {props.age} yearso ld!</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;