import React from 'react';

import myarr from '../ourlist'

function List(props) {
  return (
    <ul>
      {myarr.map((name) => <li key={name}>{name}</li>)}
    </ul>
  )
}


export default List;