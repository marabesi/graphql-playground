import React from 'react';
import { render } from '@testing-library/react';
import { RenderProductList } from './ProductList';

describe('Product list component', () => {

  test('renders loading message by default', () => {
    const { getByText } = render(<RenderProductList error={false} props={false}/>);
    const error = getByText(/Loading/i);

    expect(error).toBeTruthy();
  })

  test('renders error message on error', () => {
    const { getByText } = render(<RenderProductList error={{ message: 'something went wrong'}} props={{}}/>);
    const error = getByText(/something went wrong/i);

    expect(error).toBeTruthy();
  })

  test('renders product list', () => {
    const products = {
      products: [
        {
          title: 'prod1',
          image_link: '//test/ggg.png'
        },
        {
          title: 'prod2',
          image_link: '//aaaa.jpg'
        }
      ]
    };
    const { container } = render(<RenderProductList error={false} props={products} />);
    const list = container.querySelectorAll('section');

    expect(list.length).toBe(2);
  })
})
