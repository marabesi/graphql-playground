import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  test('renders product title', () => {
    const { getByText } = render(<Product title={'my product'} imageLink={''} />);
    const productTitle = getByText(/my product/i);

    expect(productTitle).toBeTruthy();
  });

  test('renders product alt image', () => {
    const { getByAltText } = render(<Product title={'my product'} imageLink={'/my/image/test.png'} />);
    const altImage = getByAltText(/my product/i);

    expect(altImage).toBeTruthy();
  });

  test('renders product image link', () => {
    const { container } = render(<Product title={'my product'} imageLink={'/my/image/test.png'} />);
    expect(container.querySelector('img')?.src).toContain('/my/image/test.png')
  });
})
