import React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter} from 'react-router';
import CategoriesCard from '../CategoriesCard';

describe('Category Card', () => {
    test('should render props and links output', () => {
        const component = renderer.create(
            <MemoryRouter> 
                <CategoriesCard />
            </MemoryRouter>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});