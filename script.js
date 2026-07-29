//Variables:
const { animate, hover, scroll } = Motion;
const letsGo = document.getElementById("sign-up")
const button = document.getElementById("notify")
const modal = document.getElementById("ads-modal")
const email = document.getElementById("email")
//Variables END

//Resend Module BEGIN
//Wait for modal click
letsGo.addEventListener("click", (e) => {
        console.log("click detected!")
    modal.removeAttribute("hidden");
    //Modal showed, waiting for email option
    button.addEventListener("click", async () => {
        window.location.href = "app.html"

        const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.value
    
        })
        
    });

    const result = await response.json();
    console.log(result);
}); 
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