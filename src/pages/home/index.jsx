import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h3 className="title">Account Settings</h3>

      <div className="profile-card">
        <img
          className="profile-image"
          src="https://via.placeholder.com/80"
          alt="User"
        />
        <div className="profile-info">
          <h4 className="profile-name">Marry Doe</h4>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat. Sed Diam
      </p>
    </div>
  );
};

export default Home;
