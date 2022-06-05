import "./styles.css";

export default function Notification(props) {
  const { type, msg, handleOnClick } = props;
  return (
    <div
      onClick={() => {
        handleOnClick();
      }}
      className={`notificationWrapper ${type}`}
    >
      <p className="notificationMsg">{msg}</p>
    </div>
  );
}
