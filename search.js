document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    
    searchButton.addEventListener("click", function () {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      switch (searchInput) {
        case "home":
          window.location.href = "#home";
          break;
        case "about":
          window.location.href = "#about";
          break;
        case "references":
          window.location.href = "#references";
          break;
        case "contact":
          window.location.href = "#contact";
          break;
        default:
          alert("Section not found.");
      }
    });
  });
  