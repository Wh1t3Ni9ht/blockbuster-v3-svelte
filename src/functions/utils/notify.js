import { toasts } from "svelte-toasts";

function notify(type, message, duration = 3000) {
  toasts.add({
    title: message,
    description: "",
    duration, // 0 or negative to avoid auto-remove
    placement: "top-center",
    type,
    theme: "dark",
  });
}

export default notify;
