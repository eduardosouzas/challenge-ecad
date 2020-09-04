import React from 'react';
import { Input } from 'reactstrap';

export function CustomFilterMethod(filter, row) {
  return String(row[filter.id]).toLowerCase()
    .includes(filter.value.toLowerCase());
}

export function CustomTableFilter(dt) {
  return (
    <Input
      type="text"
      id={`Filter${dt.column.id}`}
      name={`Filter${dt.column.id}`}
      value={dt.filter ? dt.filter.value : ''}
      onChange={event => (event ? dt.onChange(event.target.value) : '')}
    />
  );
}

export function CustomNoData() {
  return (<span>asd</span>);
}
