const form = document.querySelector("#quote-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const service = String(formData.get("service") || "").trim();
    const town = String(formData.get("town") || "").trim();
    const timing = String(formData.get("timing") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const subject = service
      ? `Quote request: ${service}`
      : "Quote request";

    const body = [
      "New quote request",
      "",
      `Service: ${service}`,
      `Town: ${town}`,
      `Timing: ${timing}`,
      `Name: ${name || "Not provided"}`,
      `Contact: ${contact}`,
      "",
      "Details:",
      details
    ].join("\n");

    window.location.href = `mailto:utopixgroup@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
