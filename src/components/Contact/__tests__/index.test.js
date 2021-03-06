import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm is rendering', () =>
{
    it('renders', () =>
    {
        render(<ContactForm />);
    });

    it('matches snapshot', () =>
    {
        const { asFragment } = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders', () =>
    {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('submit_btn')).toHaveTextContent('Submit');
    });
});