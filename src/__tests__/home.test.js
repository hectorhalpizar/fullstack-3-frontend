import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/index';

import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
 
describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home name="HECTOR HUGO ALPIZAR C." />);
 
    const heading = screen.getByRole('heading', {
      name: "HECTOR HUGO ALPIZAR C.",
    });
 
    expect(heading).toBeInTheDocument();
  });

  it('renders a summary', () => {
    render(<Home name="My Summary" />);
 
    const heading = screen.getByText('My Summary');
 
    expect(heading).toBeInTheDocument();
  });


});