//Variables:
const { animate, hover, scroll } = Motion;
const names = document.getElementById("names")
const submit = document.getElementById("submit")
const proccess = document.getElementById("proccessing")
const groups = document.getElementById("groups")
//Variables END
submit.addEventListener("click", (e) => {
    if (names.value === "") {
        console.log("please enter names")
        alert("Please enter names...")
    } else {
        proccess.hidden = false;
        setTimeout(() => {
            console.log("groups made!")
            proccess.hidden = true;
            groups.hidden = false;
        }, 2000);
    }
});



//Animation Below:
hover(submit, (element) => {
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
//Animations END