//Variables:
const { animate, hover, scroll } = Motion;
const letsGo = document.getElementById("sign-up")
//Variables END
letsGo.addEventListener("click", (e) => {
    console.log("Click detected, showing modal....")
    window.location.href = "app.html";
    return;
});

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