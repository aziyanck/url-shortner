const link = document.getElementById("inputURL");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 98590024-6bcb-480d-8d2c-37ceb3f97162",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: link.value,
        domain: "tinyurl.com"
      })
    });

    const data = await response.json();

    if (data.data?.tiny_url) {
      result.innerHTML = `<a href="${data.data.tiny_url}" target="_blank">${data.data.tiny_url}</a>`;
    } else {
      result.textContent = "Failed to shorten URL.";
      console.log(data); // See full response for more debugging
    }

  } catch (error) {
    console.error("Fetch error:", error);
    result.textContent = "An error occurred while shortening the URL.";
  }
});