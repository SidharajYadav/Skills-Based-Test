import React from 'react';

const categories = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Database' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'aws', label: 'AWS' }
];

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-medium mb-2">Select Test Category:</label>
            <select 
                id="category" 
                value={selectedCategory} 
                onChange={(e) => onSelectCategory(e.target.value)} 
                className="border rounded px-3 py-2"
            >
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
