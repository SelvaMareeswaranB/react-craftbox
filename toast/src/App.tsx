import useNotification from "./hooks/useNotification";
import "./App.css";
export default function App() {
  const { triggerNotification, NotificationComponent } =
    useNotification("top-right");

  const showInfo = () => {
    triggerNotification({
      type: "info",
      message: "Empty File",
      duration: 4000,
      onClose: () => console.log("Info closed"),
    });
  };

  const showError = () => {
    triggerNotification({
      type: "error",
      message: "File Deleted",
      duration: 5000,
      onClose: () => console.log("Error closed"),
    });
  };

  const showSuccess = () => {
    triggerNotification({
      type: "success",
      message: "File Updated",
      duration: 5000,
      onClose: () => console.log("Error closed"),
    });
  };
  const showWarning = () => {
    triggerNotification({
      type: "warning",
      message: "Limit Reached",
      duration: 5000,
      onClose: () => console.log("Error closed"),
    });
  };

  return (
    <div className="button-container">
      <div className="button-grid">
        <button onClick={showInfo}>Show Info </button>
        <button onClick={showError}>
          Show Error 
        </button>
        <button onClick={showSuccess}>
          Show Success
        </button>
        <button onClick={showWarning}>
          Show Warning
        </button>
      </div>

      {NotificationComponent}
    </div>
  );
}
