//Variables:
const { animate, hover, scroll } = Motion;
const names = document.getElementById("names")
const submit = document.getElementById("submit")
const proccess = document.getElementById("proccessing")
const groups = document.getElementById("groups")
const urgroups = document.getElementById("urgroups")
const gotgroups = localStorage.getItem("group")
const nogroup = document.getElementById("groupno")
//Variables END
submit.addEventListener("click", (e) => {
    if (names.value === "") {
        
        console.log("please enter names")
        alert("Please enter names...")
    } else {
        let text = names.value;
const grouparray = text.split(", ");
        proccess.hidden = false;
        setTimeout(() => {
            console.log("groups made!")
            proccess.hidden = true;
            urgroups.hidden = false;
            document.getElementById("urgroups").textContent=`${gotgroups}`
        }, 2000);
        console.log(grouparray)
    }
});

// Group creation algorithm
// Group creation algorith ends

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