type NotificationProp= {
  type: "info" | "success" | "error" | "warning";
  message: string;
  onClose: () => void;
};

type NotificationItem = NotificationProp & {
  id?: number;
  duration?: number;
};
