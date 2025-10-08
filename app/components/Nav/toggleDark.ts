export default function toggleDark() {
  const bodyElement = document.body.classList;
  if (bodyElement.contains("dark")) {
    bodyElement.replace("dark", "light");
    document.cookie = "theme=light; path=/; max-age=31536000";
    return "LIGHT";
  } else if (bodyElement.contains("light")) {
    bodyElement.replace("light", "dark");
    document.cookie = "theme=dark; path=/; max-age=31536000";
    return "DARK";
  }
}
