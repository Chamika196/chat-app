import Avatar from "../chatlist/Avatar";

const Chatitem = ({ user, msg, image, animationDelay }) => {
  return (
    <div
      style={{ animationDelay: `${animationDelay}s` }}
      className={`chat__item ${user ? user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
        <div className="chat__meta">
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </div>
      </div>
      <Avatar isOnline="active" image={image} />
    </div>
  );
};

export default Chatitem;
