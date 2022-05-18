
import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';
export class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    const { filterText, inStockOnly } = this.props;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) < 0) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        );
      }
      rows.push(
        <ProductRow product={product}
          key={product.name}/>
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
