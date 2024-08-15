"use server";

interface FormState {
  success: boolean;
}

export default async function contactForm(
  state: FormState,
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  return {
    success: true,
  };
}
