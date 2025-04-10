import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search'; 
import Navigation from '../Navigation'; 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {MdOutlineShoppingCart} from 'react-icons/md';
import {IoGitCompareOutline} from 'react-icons/io5';
import {FaRegHeart} from 'react-icons/fa6';
import {GiHamburgerMenu} from 'react-icons/gi';
import Tooltip from '@mui/material/Tooltip';
import MobileMenu from '../MobileMenu';
import './header.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor: '#ff4081',
    },
}));

// Custom styled icon button with better touch targets
const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: '8px',
    '@media (max-width: 767px)': {
        padding: '6px',
        margin: '0 1px',
    },
    '& svg': {
        fontSize: '1.3rem',
        '@media (max-width: 767px)': {
            fontSize: '1.2rem',
        },
    },
}));

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [searchExpanded, setSearchExpanded] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Check for scroll position to make header sticky
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);
            
            // Add or remove a class from body for padding adjustment
            if (scrolled) {
                document.body.classList.add('has-sticky-header');
            } else {
                document.body.classList.remove('has-sticky-header');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('has-sticky-header');
        };
    }, []);

    // Check for window resize to determine mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
            if (window.innerWidth > 767) {
                setMobileMenuOpen(false);
                setSearchExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`bg-white header-container ${isScrolled ? 'sticky-header' : ''}`}>
            <div className="header-main border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center h-16">
                        {/* Logo section */}
                        <div className="flex-shrink-0 mr-4">
                            <Link to={"/"} className="block">
                                <img 
                                    src='/logo.png' 
                                    alt="BBMart Logo" 
                                    className="h-8 w-auto"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://placehold.co/160x40?text=BBMart';
                                    }}
                                />
                            </Link>
                        </div>

                        {/* Navigation - desktop only */}
                        <div className="hidden md:block flex-grow overflow-hidden">
                            <Navigation />
                        </div>

                        {/* Search Bar - desktop only */}
                        <div className="hidden md:block w-[250px] flex-shrink-0 ml-4">
                            <Search />
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center ml-auto md:ml-4 space-x-1">
                            <Tooltip title="Cart">
                                <Link to="/cart">
                                    <StyledIconButton aria-label="cart" className="header-icon-button">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </StyledIconButton>
                                </Link>
                            </Tooltip>

                            <div className="hidden md:block">
                                <Tooltip title="Compare">
                                    <StyledIconButton aria-label="compare" className="header-icon-button">
                                        <StyledBadge badgeContent={2} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </StyledIconButton>
                                </Tooltip>
                            </div>

                            <div className="hidden md:block">
                                <Tooltip title="Wishlist">
                                    <StyledIconButton aria-label="wishlist" className="header-icon-button">
                                        <StyledBadge badgeContent={3} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </StyledIconButton>
                                </Tooltip>
                            </div>

                            {/* Login/Register for desktop */}
                            <div className="hidden md:block ml-2">
                                <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600 transition-colors mr-1">Login</Link> | 
                                <Link to="/signup" className="text-sm text-gray-700 hover:text-blue-600 transition-colors ml-1">Register</Link>
                            </div>

                            {/* Mobile menu toggle button */}
                            <div className="md:hidden">
                                <StyledIconButton 
                                    aria-label="menu" 
                                    onClick={toggleMobileMenu} 
                                    className="header-icon-button"
                                >
                                    <GiHamburgerMenu />
                                </StyledIconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <MobileMenu 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
                includeSearch={true}
            />
        </header>
    )   
}

export default Header;