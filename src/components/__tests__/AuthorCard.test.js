import React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter} from 'react-router';
import AuthorCard from '../AuthorCard';

describe('Author Card', () => {
    test('should render link output', () => {
        const component = renderer.create(
            <MemoryRouter> 
                <AuthorCard />
            </MemoryRouter>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
