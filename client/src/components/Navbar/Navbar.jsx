import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector} from "react-redux"

export default function Navbar() {

  const [openCart,setOpenCart] = useState(false)

  const products = useSelector(state=> state.cart.products)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">Clothes Kart</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/3">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpenCart(!openCart)}>
                <ShoppingCartOutlinedIcon/>
                <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart/>}
    </div>
  );
}
