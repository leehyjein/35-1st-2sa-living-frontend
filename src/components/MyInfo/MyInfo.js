import React, { useEffect, useState } from 'react';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import './MyInfo.scss';

const MyInfo = ({ sideOn, setSideOn }) => {
  let [item, setItem] = useState([]);

  useEffect(() => {
    fetch('/data/sideMenuMockData.json')
      .then(response => response.json())
      .then(data => setItem(data));
  }, []);

  const filterBag = item.filter(els => {
    return els.category.includes('chair');
  });
  let bagItemCount = filterBag.length;

  const removeSide = () => {
    setSideOn('');
  };
  return (
    <>
      <div className={`background ${sideOn}`} />
      <aside className={`quick ${sideOn}`}>
        <div className="my-name">
          <p className="name">
            <img src="/images/MyInfo/profile-user.png" alt="회원정보" />
            환영합니다 <span>홍길동 고객님</span>
          </p>
          <div className="close" onClick={removeSide}>
            <img src="/images/MyInfo/close.png" alt="close" />
          </div>
        </div>
        <div className="my-shopping">
          <h3>
            장바구니<em id="count">{bagItemCount}</em>
          </h3>
          <div className="my-shopping-list">
            {filterBag.map(els => {
              return (
                <ShoppingBag itemBag={els} key={els.id} setItem={setItem} />
              );
            })}
          </div>
          <div className="my-shopping-btn">
            <div className="viewbtn">장바구니보기</div>
            <div className="buybtn">바로구매</div>
          </div>
        </div>

        <div className="my-likeit">
          <h3>라이크잇 상품</h3>
          <div className="my-likeit-list">
            <p> 구매하고 싶은 상품을 라이크잇 하세요</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MyInfo;
