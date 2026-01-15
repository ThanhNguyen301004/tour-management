import React, { useEffect, useState } from "react";
import "./css/Search.css";
import { offers1, offers2, offers3, offers4 } from "../assets/listImage";
import BaseUrl from "../utils/BaseUrl";
import { Link } from "react-router-dom";

export default function Search() {
  const [tours, setTours] = useState([]);

  const ITEMS_PER_PAGE = 6;
  const fetchTourFromServer = async () => {
    try {
      const response = await fetch(`${BaseUrl}tour`);
      const data = await response.json();
      return data.content; // Giả sử dữ liệu categories được trả về trong trường 'content' của đối tượng phản hồi
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ server:", error);
      return [];
    }
  };
  useEffect(() => {
    const loadTour = async () => {
      const tourData = await fetchTourFromServer();
      setTours(tourData);
    };

    loadTour();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tours.length / 6);
  useEffect(() => {
    const rowsPerPage = 6;
    const rows = document.querySelectorAll(".offers_item");
    const paginationBtns = document.querySelectorAll(".pagination-btn");

    function showPage(pageNumber) {
      for (let i = 0; i < rows.length; i++) {
        if (
          i >= (pageNumber - 1) * rowsPerPage &&
          i < pageNumber * rowsPerPage
        ) {
          rows[i].style.display = "block";
        } else {
          rows[i].style.display = "none";
        }
      }

      paginationBtns.forEach((btn) => {
        if (parseInt(btn.dataset.page) === pageNumber) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    paginationBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const page = parseInt(btn.dataset.page);
        setCurrentPage(page);
        showPage(page);
      });
    });

    // Mặc định hiển thị trang đầu tiên
    showPage(currentPage);
  }, [currentPage]);
  return (
    <div className="main-search">
      <div className="main_offers-search">
        <div className="left_main-search">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              id="location"
              placeholder="Tìm kiếm địa điểm..."
              onkeyup="showSuggestions()"
            />
            <label className="filter-label" htmlFor="price">
              Lọc giá:
            </label>
            <select className="filter-input" id="price">
              <option value="asc">Tăng dần</option>
              <option value="desc">Giảm dần</option>
            </select>
            <label className="filter-label">Khoảng giá:</label>
            <label className="checkbox">
              <input type="checkbox" id="price1" />
              <span className="checkmark" />
              Dưới 1 triệu
            </label>
            <label className="checkbox">
              <input type="checkbox" id="price2" />
              <span className="checkmark" />
              Dưới 3 triệu
            </label>
            <label className="checkbox">
              <input type="checkbox" id="price3" />
              <span className="checkmark" />
              Dưới 10 triệu
            </label>
            <label className="filter-label">Danh mục:</label>
            <label className="checkbox">
              <input type="checkbox" id="category1" />
              <span className="checkmark" />
              Miền Bắc
            </label>
            <label className="checkbox">
              <input type="checkbox" id="category2" />
              <span className="checkmark" />
              Miền trung
            </label>
            <label className="checkbox">
              <input type="checkbox" id="category3" />
              <span className="checkmark" />
              Miền Nam
            </label>
            <button className="btn-search">Tìm kiếm</button>
          </div>
        </div>
        <div className="box main_offers__box">
          <h2 className="offers_title">Các Tour du lịch</h2>

          <div className="offers_items">
            {tours.map((tour, index) => (
              <div className="offers_item" key={tour.id}>
                <div className="offers_image">
                  <Link
                    className="offers_image_background"
                    to={{
                      pathname: `/tourDetails/${tour.id}`,
                      state: { selectedTour: tour },
                    }}
                    style={{
                      backgroundImage: `url(${
                        tour.image && tour.image.length > 0
                          ? tour.image[0].url
                          : ""
                      })`,
                    }}
                  ></Link>
                  <div className="offers_name">
                    <a href="#">{tour.title}</a>
                  </div>
                </div>
                <div className="offers_content">
                  <div className="offers_price">{tour.price}đ</div>
                  <div className="rating rating_4 offers_rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p className="offers_text">{tour.describe}</p>
                  <div className="offers_icons">
                    <ul className="offers_icons_list">
                      <li className="offers_icons_item">
                        <img src="./images/post.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="./images/compass.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="./images/bicycle.png" alt="" />
                      </li>
                      <li className="offers_icons_item">
                        <img src="./images/sailboat.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div className="offers_link">
                    <Link
                      to={{
                        pathname: `/tourDetails/${tour.id}`,
                        state: { selectedTour: tour },
                      }}
                    >
                      Đọc thêm
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`pagination-btn ${
                index + 1 === currentPage ? "active" : ""
              }`}
              data-page={index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
