import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaAws } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const categories = [
    { value: 'frontend', label: 'Frontend', icon: <FaCode />, description: 'Questions about HTML, CSS, and JavaScript.' },
    { value: 'backend', label: 'Backend', icon: <FaDatabase />, description: 'Questions about server-side programming.' },
    { value: 'database', label: 'Database', icon: <FaDatabase />, description: 'Questions about SQL and NoSQL databases.' },
    { value: 'cloud', label: 'Cloud', icon: <FaCloud />, description: 'Questions about cloud services and architecture.' },
    { value: 'aws', label: 'AWS', icon: <FaAws />, description: 'Questions about Amazon Web Services.' }
];

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-medium mb-2">Select Test Category:</label>
            <div className="grid grid-cols-2 gap-4">
                {categories.map(category => (
                    <div 
                        key={category.value} 
                        className={`border rounded p-4 flex items-center cursor-pointer ${selectedCategory === category.value ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
                        onClick={() => onSelectCategory(category.value)}
                        data-tip={category.description}
                    >
                        <div className="mr-3 text-xl">{category.icon}</div>
                        <div className="text-lg font-medium">{category.label}</div>
                    </div>
                ))}
            </div>
            <Tooltip place="top" type="dark" effect="float" />
        </div>
    );
};

export default CategorySelector;
