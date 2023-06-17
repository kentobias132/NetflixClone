import React from "react";

function Footer() {
  return (
    <div className=" py-16 text-gray-300 text-sm bg-black">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <a href="#">Questions? Contact us.</a>
        <div className=" grid">
          <ul className=" py-9 underline grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <p>Netflix Nigeria</p>
      </div>
    </div>
  );
}

export default Footer;