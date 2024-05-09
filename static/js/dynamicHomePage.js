function renderHomepage(layoutPrefs) {
    const widgetContainer = document.getElementById("widgetContainer");
    widgetContainer.innerHTML = ''; // Clear existing content

    layoutPrefs.forEach(pref => {
        const elementName = pref.element_name;

        // Create HTML elements based on the elementName
        let element;
        if (elementName === "toDo") {
            element = createToDo(); 
        } else if (elementName === "week") {
            element = createWeek();
        } else {
            // Handle other element types, to be added
            element = document.createElement("div");
            element.textContent = "Error: Unsupported element!";
        }

        // testing
        element.document.createElement("div");
        element.textContent = "this is in the js file";

        // Append the element to the widget container
        widgetContainer.appendChild(element);
    });
}

function createToDo() {
    const section = document.createElement("section");
    const header = document.createElement("h2");
    header.textContent = "To Do's";
    const list1 = document.createElement("ul");
    const list2 = document.createElement("ul");
    const item1 = document.createElement("li");
    item1.textContent = "do laundry";
    const item2 = document.createElement("li");
    item2.textContent = "askesa";
    const item3 = document.createElement("li");
    item3.textContent = "cuddles";
    const item4 = document.createElement("li");
    item4.textContent = "procrastination";

    section.appendChild(header);
    section.appendChild(list1);
    section.appendChild(list2);
    list1.appendChild(item1);
    list1.appendChild(item2);
    list1.appendChild(item3);
    list2.appendChild(item4);

    return section;
}

function createWeek() {
    const section = document.createElement("section");
    const header = document.createElement("h2");
    header.textContent = "This Week";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadr = document.createElement("tr");
    const theadd1 = document.createElement("th");
    theadd1.scope = "col";
    theadd1.textContent = "Monday";
    const theadd2 = document.createElement("th");
    theadd2.scope = "col";
    theadd2.textContent = "Tuesday";
    const theadd3 = document.createElement("th");
    theadd3.scope = "col";
    theadd3.textContent = "Wednesday";
    const theadd4 = document.createElement("th");
    theadd4.scope = "col";
    theadd4.textContent = "Thursday";
    const theadd5 = document.createElement("th");
    theadd5.scope = "col";
    theadd5.textContent = "Friday";
    const theadd6 = document.createElement("th");
    theadd6.scope = "col";
    theadd6.textContent = "Saturday";
    const theadd7 = document.createElement("th");
    theadd7.scope = "col";
    theadd7.textContent = "Sunday";

    const tbody = document.createElement("tbody");
    const tbodyr1 = document.createElement("tr");
    const tbodyd11 = document.createElement("td");
    tbodyd11.textContent = "22.04. <br><br> 20:30-21:30<br> Stretching";
    const tbodyd12 = document.createElement("td");
    tbodyd12.textContent = "23.04.";
    const tbodyd13 = document.createElement("td");
    tbodyd13.textContent = "24.04. <br><br> 18:00-19:00<br> Pole Dancing";
    const tbodyd14 = document.createElement("td");
    tbodyd14.textContent = "25.04. Today<br><br> 20:30-21:30<br> Stretching";
    const tbodyd15 = document.createElement("td");
    tbodyd15.textContent = "26.04.";
    const tbodyd16 = document.createElement("td");
    tbodyd16.textContent = "27.04. <br><br> 11:00-14:00<br> Winter Kaffee";
    const tbodyd17 = document.createElement("td");
    tbodyd17.textContent = "28.04. <br><br> 14:00-	&#8734; <br> Fotos machen";

    const tbodyr2 = document.createElement("tr");
    const tbodyd21 = document.createElement("td");
    tbodyd21.textContent = "29.04. <br><br> 19:15-20:15 <br> Pole Dancing <br> 20:30-21:30 <br> Stretching";
    const tbodyd22 = document.createElement("td");
    tbodyd22.textContent = "30.04. <br><br> 18:00 <br> Shopping TKMaxx";
    const tbodyd23 = document.createElement("td");
    tbodyd23.textContent = "01.05. <br><br> 18:00-19:00 <br> Pole Dancing";
    const tbodyd24 = document.createElement("td");
    tbodyd24.textContent = "02.04.";
    const tbodyd25 = document.createElement("td");
    tbodyd25.textContent = "03.04. <br><br> 18:00- &#8734; <br> Meal Prep";
    const tbodyd26 = document.createElement("td");
    tbodyd26.textContent = "04.04.";
    const tbodyd27 = document.createElement("td");
    tbodyd27.textContent = "05.04.";

    
    section.appendChild(header);
    section.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(theadr);
    theadr.appendChild(theadd1);
    theadr.appendChild(theadd2);
    theadr.appendChild(theadd3);
    theadr.appendChild(theadd4);
    theadr.appendChild(theadd5);
    theadr.appendChild(theadd6);
    theadr.appendChild(theadd7);
    tbody.appendChild(tbodyr1);
    tbody.appendChild(tbodyr2);
    tbodyr1.appendChild(tbodyd11);
    tbodyr1.appendChild(tbodyd12);
    tbodyr1.appendChild(tbodyd13);
    tbodyr1.appendChild(tbodyd14);
    tbodyr1.appendChild(tbodyd15);
    tbodyr1.appendChild(tbodyd16);
    tbodyr1.appendChild(tbodyd17);
    tbodyr2.appendChild(tbodyd21);
    tbodyr2.appendChild(tbodyd22);
    tbodyr2.appendChild(tbodyd23);
    tbodyr2.appendChild(tbodyd24);
    tbodyr2.appendChild(tbodyd25);
    tbodyr2.appendChild(tbodyd26);
    tbodyr2.appendChild(tbodyd27);
}