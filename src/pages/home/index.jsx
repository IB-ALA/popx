import React from "react";
import profilePicture from "../../assets/profile_picture.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <h3 className="title">Account Settings</h3>

      <div className="account-section">
        <div className="profile-card">
          <img className="profile-image" src={profilePicture} alt="User" />
          <div className="profile-info">
            <h4 className="profile-name">Marry Doe</h4>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          Sed Diam
        </p>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Home;
