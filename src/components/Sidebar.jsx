import { useState, useEffect } from 'react';
import { getCategories } from '../../utils/functions';

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col w-[210px] max-w-[40vw] justify-start items-center py-5">
      <div className="flex pb-2">
        <h2 className="font-bold text-gray-700">Categories</h2>
      </div>
      <div className="flex flex-col items-center">
        <a href="#" className="px-10 w-full p-1 text-sm text-gray-600 hover:text-gray-900">
          <h3>All books</h3>
        </a>
        {categories.map((category, index) => (
          <a key={index} href="#" className="text-sm px-10 w-full p-1 text-gray-600 hover:text-gray-900">
            <h3 className='capitalize'>{category.replaceAll('_', ' ')}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
