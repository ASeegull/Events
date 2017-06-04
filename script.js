var boxes = document.querySelectorAll('.example1 div');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", capture, true);
    boxes[i].addEventListener("click", bubble, false);
}

function capture() {
    alert(this.classList);
}

function bubble() {
    alert(this.classList);
}

//First example:END

function onForm() {
    alert("stopPropagation зупиняє вспливання. Це повідомлення не з'являється, коли клікається по самому input");
}

function clickOnInput(event) {
    alert('Функція виконується безпосередньо з input');
    event.stopPropagation();
}

function clickOnLabel(event) {
    alert('Функція виконується безпосередньо з label');
    event.stopPropagation();
    event.preventDefault();
}


document.querySelector('.button-container').addEventListener('click', onForm, false);

document.querySelectorAll('[type=radio]').forEach(function (item) {
    item.addEventListener('click', clickOnInput, false);
});

document.querySelectorAll('.button-container label').forEach(function (item) {
    item.addEventListener('click', clickOnLabel, false);
});

//Second example:END


function clickOnCheckbox() {
    alert('На клік на чекбоксі навішені два слухачі подій');
    event.stopImmediatePropagation();
}

function clickCheckbox() {
    var message = this.getAttribute('data-lang');
    alert(message); //This message tou will never see because of stopImmediatePropagation
}

document.querySelectorAll('[type=checkbox]').forEach(function (item) {
    item.addEventListener('click', clickOnCheckbox, false);
});

document.querySelectorAll('[type=checkbox]').forEach(function (item) {
    item.addEventListener('click', clickCheckbox, false);
});