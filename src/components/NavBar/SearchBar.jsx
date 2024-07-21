import { useState } from "react";
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

// Search Data
const searchData = [
  {
    name: 'Fashion',
    image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
    name: 'Shirt',
    image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
    name: 'Jacket',
    image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
  {
    name: 'Mobile',
    image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
  },
  {
    name: 'Laptop',
    image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
  },
  {
    name: 'Home',
    image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
  },
  {
    name: 'book',
    image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
  },
]

const SearchBar = () => {
  // Search State 
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search)).slice(0, 8);
  return (
    <div className="flex flex-col items-center">
      {/* search input  */}
      <div className="input flex justify-center w-60">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder='Search here'
            onChange={(e) => setSearch(e.target.value)}
            className='bg-gray-200 placeholder-gray-400 px-2 py-2 w-60 outline-none text-black'
          />
          <FaSearch className="absolute right-2 text-gray-500" />
        </div>
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center w-60">
        {search && (
          <div className="block absolute -200 w-60 z-50 my-1 rounded-lg px-2 py-2 bg-gray-400" style={{backgroundColor:"#F5F5F5"}}> 
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div key={index} className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={item.image} alt="" />
                        {item.name}
                      </div>
                    </div>
                  )
                })}
              </>
            ) : (
              <div className="flex justify-center">
                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
