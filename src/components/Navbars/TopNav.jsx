const TopNav = ({ style }) => {
  return (
    <div className={`top-navbar style-${style}`}>
      <div className="container">
        <div className="content text-white">
          <span className="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
            <small className="fs-10px">{"Акция"}</small>
          </span>
          <img
            src="/assets/img/icons/nav_icon/imoj_heart.png"
            alt=""
            className="icon-15 me-1"
          />
          <span className="fs-10px op-6 me-1">{"Получи"} </span>
          <small className="op-10 fs-10px">{"20% скидки"}</small>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
