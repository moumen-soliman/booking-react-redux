import React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter} from 'react-router';
import BookCard from '../BookCard';

describe('Book Card', () => {
    test('should render link output', () => {
        const component = renderer.create(
            <MemoryRouter> 
                <BookCard />
            </MemoryRouter>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});

