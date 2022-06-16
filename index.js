(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            // trong trường hợp này ko dùng arrow func vì như vậy 'this' sẽ là undefined
            document.querySelector(".active").classList.remove("active");
            // page container nào đang hiện thì sẽ bị bỏ
            document.getElementById(button.dataset.id).classList.add("active");
            // hiện page container nào có id trùng với data.id của button
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
