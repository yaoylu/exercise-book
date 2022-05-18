import React from 'react';
export class ProductCategoryRow extends React.Component {
  render() {
    const { catagory } = this.props;
    return (
      <tr>
        <th colSpan={'2'}>
          {catagory}
        </th>
      </tr>
    );
  }
}
