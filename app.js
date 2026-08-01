const { animate, hover, scroll } = Motion;

const names = document.getElementById("names");
const submit = document.getElementById("submit");
const proccess = document.getElementById("proccessing");
const urgroups = document.getElementById("urgroups");
const nogroup = document.getElementById("groupno");

submit.addEventListener("click", () => {
    if (names.value === "") {
        alert("Please enter names...");
        return;
    }

    const people = names.value.split(", ").map(name => name.trim());
    const groupCount = Number(nogroup.value);

    if (!groupCount || groupCount > people.length) {
        alert("Invalid number of groups");
        return;
    }

    // Shuffle names
    people.sort(() => Math.random() - 0.5);

    // Create empty groups
    const createdGroups = Array.from({ length: groupCount }, () => []);

    // Put people into groups
    people.forEach((person, index) => {
        createdGroups[index % groupCount].push(person);
    });

    proccess.hidden = false;

    setTimeout(() => {
        proccess.hidden = true;
        urgroups.hidden = false;

        urgroups.textContent = createdGroups
            .map((group, i) => `Group ${i + 1}: ${group.join(", ")}`)
            .join("\n");
    }, 2000);
});

hover(submit, (element) => {
    animate(element, { scale: 1.1 }, { duration: 0.3 });

    return () => {
        animate(element, { scale: 1 }, { duration: 0.3 });
    };
});