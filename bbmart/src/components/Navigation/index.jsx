import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LiaAngleDownSolid } from 'react-icons/lia';
import CategoryPanel from './CategoryPanel';
import './style.css';

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };

    const closeCategoryPanel = () => {
        setIsOpenCatPanel(false);
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    // Navigation items with submenu data
    const navItems = [
        { text: 'Home', link: '/', hasSubmenu: false },
        { 
            text: 'Stationery', 
            link: '/productListing', 
            hasSubmenu: true,
            submenu: [
                { text: 'Notebooks', link: '/productListing?category=notebooks' },
                { text: 'Pens', link: '/productListing?category=pens' },
                { text: 'Markers', link: '/productListing?category=markers' },
                { text: 'Organizers', link: '/productListing?category=organizers' },
                { text: 'Accessories', link: '/productListing?category=accessories' }
            ]
        },
        { text: 'Custom Printing', link: '/custom-printing', hasSubmenu: false },
        { text: 'Blog', link: '/blog', hasSubmenu: false },
        { text: 'About Us', link: '/about-us', hasSubmenu: false },
        { text: 'Contact Us', link: '/contact-us', hasSubmenu: false },
    ];

    return (
        <div className="navigation-container">
            <ul className="flex items-center gap-1 navigation-menu">
                {navItems.map((item, index) => (
                    <li 
                        key={index} 
                        className="list-none relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to={item.link} className="block">
                            <div className="nav-item text-gray-800 hover:text-blue-600 transition-colors text-sm px-3 h-full flex items-center whitespace-nowrap">
                                {item.text}
                                {item.hasSubmenu && <LiaAngleDownSolid className="ml-1 text-xs" />}
                            </div>
                        </Link>

                        {item.hasSubmenu && hoveredIndex === index && (
                            <div className="submenu absolute top-full left-0 z-20 min-w-[200px] bg-white shadow-lg rounded-md overflow-hidden">
                                <ul>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="list-none w-full">
                                            <Link to={subItem.link} className="w-full">
                                                <div className="text-gray-700 w-full text-left justify-start rounded-none hover:bg-gray-100 px-4 py-3 text-sm">
                                                    {subItem.text}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {isOpenCatPanel && (
                <CategoryPanel 
                    isOpen={isOpenCatPanel} 
                    onClose={closeCategoryPanel} 
                />
            )}
        </div>
    );
};

export default Navigation;