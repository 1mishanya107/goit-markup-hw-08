(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expended =
            menuBtnRef.getAttribute("aria-expended") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expended", !expended);
        document.body.classList.toggle("menu-open")
        mobileMenuRef.classList.toggle("is-open");
    })
}
)
(
)
;