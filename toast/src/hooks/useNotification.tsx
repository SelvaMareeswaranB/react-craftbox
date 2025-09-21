import { useCallback, useState } from "react";
import Notifications from "../components/Notifications";

export default function useNotification(
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
) {
  const [Notification, setNotification] = useState<NotificationItem[]>([]);
  const triggerNotification = useCallback(
    (notificationProp: NotificationItem) => {
      const id = Date.now();
      const newNotification = { id, ...notificationProp };
      setNotification((prev) => [ ...prev,newNotification]);
      const timer = setTimeout(() => {
        setNotification((prev) => prev.filter((n) => n.id !== id));
      }, notificationProp.duration ?? 3000);
      return () => clearTimeout(timer);
    },
    []
  );

  const removeNotification = (id: number) => {
    setNotification((prev) => prev.filter((n) => n.id !== id));
  };
  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {" "}
      {Notification.map((n) => (
        <Notifications
          key={n.id}
          type={n.type}
          message={n.message}
          onClose={() => removeNotification(n.id!)}
        />
      ))}
    </div>
  );

  return { triggerNotification, NotificationComponent };
}
