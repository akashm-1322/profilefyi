import React, { useEffect, useState } from 'react';
import ProductList from './ProductList'; // assuming you have a ProductList component

function Component() {
    const [data, setData] = useState([]); // Initialize as an empty array

    useEffect(() => {
        fetch('/sample.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="Component">
            <ProductList products={data} />
        </div>
    );
}

export default Component;
