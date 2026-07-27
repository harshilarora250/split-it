//Variables:
const { animate, hover, scroll } = Motion;
const letsGo = document.getElementById("sign-up")
//Variables END

//Resend Module BEGIN
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
//RESEND Module END
//Animation Below:
//Sign-up hover
hover(".sign-up", (element) => {
    console.log("hover started on", element);
    animate(
        element,
        { scale: 1.1 },
        { duration: 0.3 }
    );
    return () => {
        animate(
            element,
            { scale: 1 },
            { duration: 0.3 }
        );
    };
});
// Sign-up hover end
//Animations END