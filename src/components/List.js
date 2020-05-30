import React from 'react';

import myarr from '../ourlist'

function List() {
  return (
    <ul>
      {myarr.map((name) => <li key={name}>{name}</li>)}
    </ul>
  )
}


export default List;