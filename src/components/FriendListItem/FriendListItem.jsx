// import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.wrapper}>
      <img src={avatar} alt="Avatar" width="48" />

      <p>{name}</p>

      {isOnline ? (
        <p className={css.green}>Online</p>
      ) : (
        <p className={css.red}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
