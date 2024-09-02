import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.imgWrapper}>
          <img src={image} alt="User avatar" />
        </div>
        <h2 className={css.fullName}>{name}</h2>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.likes}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.likes}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.likes}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
