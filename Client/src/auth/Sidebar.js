import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx" />
        <span className="logo_name">FaryTail</span>
      </div>
      <ul className="nav-links">
        <li>
          <a title="Bảng điểu khiển" href="/index.html" className="active">
            <i className="bx bx-grid-alt" />
            <span className="links_name">Bảng điểu khiển</span>
          </a>
        </li>
        <li>
          <a title="Sản phẩm" href="/product.html">
            <i className="bx bx-box" />
            <span className="links_name">Sản phẩm</span>
          </a>
        </li>
        <li>
          <a title="Cài đặt" href="/setting.html">
            <i className="bx bx-cog" />
            <span className="links_name">Cài đặt</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
