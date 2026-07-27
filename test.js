const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", async () => {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: input.value
        })
    });

    const result = await response.json();
    console.log(result);
}); 