function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT85T6NEpaKqjG9OuBKEtQbjivKE2Vcva--g&usqp=CAU";
}