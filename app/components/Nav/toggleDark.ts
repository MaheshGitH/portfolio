export default function toggleDark() {
  const bodyElement = document.body.classList;
  if (bodyElement.contains("dark")) {
    bodyElement.replace("dark", "light");
    updateCookie("light");
    return "LIGHT";
  } else if (bodyElement.contains("light")) {
    bodyElement.replace("light", "dark");
    updateCookie("dark");
    return "DARK";
  }
}

async function updateCookie(value: string) {
  await cookieStore.set("theme", value);
}
