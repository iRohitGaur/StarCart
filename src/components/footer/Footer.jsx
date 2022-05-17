import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="about_us flex_column">
        <div className="ftr_title sui_logo_wrapper flex_row">
          <div className="flex_column">
            <span className="sui_logo_text">StarCart</span>
            <span className="sui_logo_caption">little bird-tee store</span>
          </div>
        </div>
        <a className="sui_btn btn_txt" href="/">
          Contact Us
        </a>
        <a className="sui_btn btn_txt" href="/">
          About Us
        </a>
        <a className="sui_btn btn_txt" href="/">
          Careers
        </a>
      </div>
      <div className="help flex_column">
        <span className="ftr_title">HELP</span>
        <a className="sui_btn btn_txt" href="/">
          Payments
        </a>
        <a className="sui_btn btn_txt" href="/">
          Shipping
        </a>
        <a className="sui_btn btn_txt" href="/">
          Returns
        </a>
        <a className="sui_btn btn_txt" href="/">
          FAQ
        </a>
      </div>
      <div className="policy flex_column">
        <span className="ftr_title">POLICY</span>
        <a className="sui_btn btn_txt" href="/">
          Return Policy
        </a>
        <a className="sui_btn btn_txt" href="/">
          Terms Of Use
        </a>
        <a className="sui_btn btn_txt" href="/">
          Security
        </a>
        <a className="sui_btn btn_txt" href="/">
          Privacy
        </a>
      </div>
      <div className="social flex_column">
        <span className="ftr_title">SOCIAL</span>
        <a className="sui_btn btn_txt" href="/">
          Twitter
        </a>
        <a className="sui_btn btn_txt" href="/">
          Facebook
        </a>
        <a className="sui_btn btn_txt" href="/">
          YouTube
        </a>
        <a className="sui_btn btn_txt" href="/">
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
