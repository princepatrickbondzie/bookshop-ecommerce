import { useState } from "react";
import Courses from "../../Components/Courses/Courses";
import Nav from "../../Components/Nav/Nav";
import "./UserAccount.css";
import Avatar from "../../images/sincerely-media-TwjZ62z58EQ-unsplash.jpg";

const ProfilePage = () => {
  const [wishList, setWishList] = useState();

  const handleClick = () => {
    if (wishList) {
      return <Courses />;
    }
  };

  return (
    <div>
      <Nav />
      <div id="main-body">
        <div className="container">
          <div className="profile-header">
            <div className="profile-img">
              <img src={Avatar} width="200" alt="avatar" />
            </div>
            <div className="profile-nav-info">
              <h3 className="user-name">Ekow Prince</h3>
              <div className="address">
                <p id="state" className="state">
                  Cape Coast,
                </p>
                <span id="country" className="country">
                  Ghana.
                </span>
              </div>
            </div>
            <div className="profile-option">
              <div className="notification">
                <i className="fa fa-bell"></i>
                <span className="alert-message">3</span>
              </div>
            </div>
          </div>
          <div className="main-bd">
            <div className="left-side">
              <div className="profile-side">
                <p className="mobile-no">
                  <i className="fa fa-phone"></i> +23320077700
                </p>
                <p className="user-mail">
                  <i className="fa fa-envelope"></i>ekow@gmail.com
                </p>
                <div className="user-bio">
                  <h3>Shipping Address</h3>
                  <p className="bio">
                    Lorem ipsum dolor sit amet, hello how consectetur
                    adipisicing elit. Sint consectetur provident magni yohoho
                    consequuntur, voluptatibus ghdfff exercitationem at quis
                    similique. Optio, amet!
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="nav">
                <ul onC>
                  <li
                    className="user-post active"
                    name="wishList"
                    value={wishList}
                    onClick={(e) => setWishList(e.target.value)}
                  >
                    Wishlist
                  </li>
                  <li className="user-review">Orders</li>
                  <li className="user-setting">Account</li>
                </ul>
              </div>
              {/* <div className="profile-body">
              <div className="profile-posts tab">
                <p>
                  <h1>Your Wishlist</h1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  quia sunt itaque ut libero cupiditate ullam qui velit laborum
                  placeat doloribus, non tempore nisi ratione error rem minima
                  ducimus. Accusamus adipisci quasi at itaque repellat sed magni
                  eius magnam repellendus. Quidem inventore repudiandae sunt
                  odit. Aliquid facilis fugiat earum ex officia eveniet, nisi,
                  similique ad ullam repudiandae molestias aspernatur qui autem,
                  nam? Cupiditate ut quasi iste, eos perspiciatis maiores
                  molestiae.
                </p>
              </div>
              <div className="profile-reviews tab">
                <p>
                  <h1>Your Orders</h1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam pariatur officia, aperiam quidem quasi, tenetur
                  molestiae. Architecto mollitia laborum possimus iste esse.
                  Perferendis tempora consectetur, quae qui nihil voluptas.
                  Maiores debitis repellendus excepturi quisquam temporibus quam
                  nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime
                  provident, distinctio animi commodi nemo, eveniet fugit porro
                  quos nesciunt quidem a, corporis nisi dolorum minus sit eaque
                  error sequi ullam. Quidem ut fugiat, praesentium velit
                  aliquam!
                </p>
              </div>
              <div className="profile-settings tab">
                <div className="account-setting">
                  <p>
                    <h1>Acount Setting</h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit omnis eaque, expedita nostrum, facere libero
                    provident laudantium. Quis, hic doloribus! Laboriosam nemo
                    tempora praesentium. Culpa quo velit omnis, debitis maxime,
                    sequi animi dolores commodi odio placeat, magnam, cupiditate
                    facilis impedit veniam? Soluta aliquam excepturi illum natus
                    adipisci ipsum quo, voluptatem, nemo, commodi, molestiae
                    doloribus magni et. Cum, saepe enim quam voluptatum vel
                    debitis nihil, recusandae, omnis officiis tenetur, ullam
                    rerum.
                  </p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
