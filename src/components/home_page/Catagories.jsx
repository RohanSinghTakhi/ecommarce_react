const category = [
    { image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png', name: 'fashion' },
    { image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png', name: 'shirt' },
    { image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png', name: 'jacket' },
    { image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png', name: 'mobile' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png', name: 'laptop' },
    { image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png', name: 'home' }
];

const Category = () => {

    

    return (
        <div>
            <div className="flex flex-col mt-14">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex">
                        {category.map((item, index) => (
                            <div key={index} className="px-3 lg:px-10">
                                <div  style={{border:"2px solid #D9D9D9",height:"145px",width:"175px"}} className="  lg:w-24 lg:h-24 max-w-xs  transition-all hover:bg-red-700 cursor-pointer mb-1">
                                    <div className="flex justify-center items-center h-full">
                                        <img src={item.image} alt={item.name} className="w-20" />
                                    </div>
                                </div>
                                <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                                    {item.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }" }} />
        </div>
    );
};

export default Category;
