import React from 'react'
import Button from "@mui/material/Button";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import { PiDropSimple } from 'react-icons/pi';

const CategoryCollapse = ({ submenuIndex, innerSubmenuIndex, openSubmenu, openInnerSubmenu, setIsOpenCatPanel }) => {
    
    const toggleDrawer = (open) => () => {
        setIsOpenCatPanel(open);
    };

    return (
        <>
        <div className="scroll">
                <ul className="w-full">
                  <li className="list-none flex items-center relative flex-col">
                    <Button 
                      className="w-full !text-left !justify-start !px-3 !text-[black]"
                      onClick={() => openSubmenu(0)} // Add click handler to button
                    >
                      Printing
                    </Button>
        
                    {submenuIndex === 0 ? (
                      <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(0)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(0)}
                      />
                    )}
        
                    {submenuIndex === 0 && (
                      <ul className="submenu w-full pl-3">
                        <li className="list-none relative mb-1">
                          <Link to="/">
                            <Button className="w-full !text-left !justify-start !px-3 !text-[black]">
                              Fashion
                            </Button>
                          </Link>
        
                          {innerSubmenuIndex === 0 ? (
                            <FiMinusSquare
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => openInnerSubmenu(0)}
                            />
                          ) : ( 
                            <FaRegSquarePlus
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => openInnerSubmenu(0)}
                            />
                          )}
        
                        
        
                          {innerSubmenuIndex === 0 && (
                            <ul className="inner_submenu w-full pl-3">
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  T-shirt
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Cups
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Pen
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Books/Diary/Notebooks
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
        
        
        
        
        
        
                  <li className="list-none flex items-center relative flex-col">
                    <Link to="/" className="w-full">
                      <Button 
                      className="w-full !text-left !justify-start !px-3 !text-[black]"
                      onClick={() => openSubmenu(1)} // Add click handler to button
                    >
                      Branding
                    </Button>
                    </Link>
        
                    {submenuIndex === 1 ? (
                      <FiMinusSquare
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(1)}
                      />
                    )}
        
                    {submenuIndex === 1 && (
                      <ul className="submenu w-full pl-3">
                        <li className="list-none relative mb-1">
                          <Link to="/">
                            <Button className="w-full !text-left !justify-start !px-3 !text-[black]">
                              logo
                            </Button>
                          </Link>
        
                          {innerSubmenuIndex === 1 ? (
                            <FiMinusSquare
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => openInnerSubmenu(1)}
                            />
                          ) : ( 
                            <FaRegSquarePlus
                              className="absolute top-[10px] right-[15px] cursor-pointer"
                              onClick={() => openInnerSubmenu(1)}
                            />
                          )}
        
                        
        
                          {innerSubmenuIndex === 1 && (
                            <ul className="inner_submenu w-full pl-3">
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  T-shirt
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Cups
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Pen
                                </Link>
                              </li>
        
                              <li className="list-none relative mb-1">
                                <Link
                                  to="/"
                                  className="link w-full !text-left !justify-start !px-3"
                                >
                                  Books/Diary/Notebooks
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
        
                </ul>
              </div>
        </>
    )
}

export default CategoryCollapse