function adminLogin() {

    const email =
        document.getElementById("email")
        .value
        .trim();

    const password =
        document.getElementById("password")
        .value
        .trim();

    const users =
        JSON.parse(
            localStorage.getItem("users")
        ) || [];

    const admin =
        users.find(user =>

            user.email === email &&
            user.password === password &&
            user.role === "admin"
        );

    if (!admin) {

        alert(
            "Invalid admin credentials."
        );

        return;
    }

    localStorage.setItem(
        "currentUser",
        JSON.stringify(admin)
    );

    alert(
        "Admin login successful!"
    );

    window.location.href =
        "../Admin/admin.html";
}