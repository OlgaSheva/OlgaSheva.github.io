const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
const navGroup = document.querySelector(".nav-group");
const menuSidebar = document.querySelector(".menu-sidebar");
const footer = document.querySelector(".footer");
const postFooter = document.querySelector(".post-footer");
const radioButton = document.querySelector(".radio-button");
const birthdayIcon = document.querySelector(".birthday-icon");

const showOrHideMenu = () => {
    menu.classList.toggle("active");
};

const activeLink = event => {
    event.target.closest(".nav-link").classList.toggle("active");
};

const activeTagButton = event => {
    const tag = event.target.closest(".tag");
    tag.classList.toggle("active");
    tag.style.cursor = "pointer";
};

const activePostFooterButton = event => {
    const postButton = event.target.closest(".post-button");
    postButton.classList.toggle("active");
    postButton.style.cursor = "pointer";
};

const activeRadioButton = event => {
    const radioButton = event.target.closest(".radio-button-item");
    radioButton.classList.toggle("active");
    radioButton.style.cursor = "pointer";
};

menuBtn.addEventListener('click', showOrHideMenu);
menuSidebar.addEventListener('mouseover', activeLink);
menuSidebar.addEventListener('mouseout', activeLink);
footer.addEventListener('mouseover', activeTagButton);
footer.addEventListener('mouseout', activeTagButton);
postFooter.addEventListener('mouseover', activePostFooterButton);
postFooter.addEventListener('mouseout', activePostFooterButton);
radioButton.addEventListener('mouseover', activeRadioButton);
radioButton.addEventListener('mouseout', activeRadioButton);
birthdayIcon.addEventListener('mouseover', activePoints);