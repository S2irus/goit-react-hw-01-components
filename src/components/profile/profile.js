import userData from './user.json'

export default function Profile() {
    return (
      <div className="containerProfile">
        <Details
          image={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
        />
        <Stats stats={userData.stats} />
      </div>
    );
  }
  
  function Details({ image, username, tag, location }) {
    return (
      <div className="profile">
        <img className="profile__image" src={image} alt={username} />
        <h3 className="profile__username">{username}</h3>
        <p className="profile__text">@{tag}</p>
        <p className="profile__text">{location}</p>
      </div>
    );
  }
  
  function Stats({ stats }) {
    return (
      <ul className="stats">
        <li className="stats__item">
          <p>Folowers</p>
          <p className="stats__stat">{stats.followers}</p>
        </li>
        <li className="stats__item">
          <p>Views</p>
          <p className="stats__stat">{stats.views}</p>
        </li>
        <li className="stats__item">
          <p>Likes</p>
          <p className="stats__stat">{stats.likes}</p>
        </li>
      </ul>
    );
  }