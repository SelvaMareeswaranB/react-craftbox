import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./Notification.css";

const iconStyles = { marginRight: "10px" };
const icons = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

export default function Notifications({
  type = "info",
  message,
  onClose,
}: NotificationProp) {
  return (
    <div className={`notification ${type} slide`}>
      {icons[type]}
      {message}

      <AiOutlineClose color="white" onClick={onClose} className="closeBtn" />
    </div>
  );
}
