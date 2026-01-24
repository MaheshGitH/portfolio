"use client";

export default function handleScrollIntoView(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80;
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
