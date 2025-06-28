window.addEventListener("DOMContentLoaded", function () {
  // Look for all dropdowns in the header
  const dropdowns = document.querySelectorAll('.bd-header-article .dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    if (dropdownMenu && dropdownMenu.innerHTML.includes('download')) {
      // Found the download dropdown (by content check)

      const backButton = document.createElement("a");
      backButton.href = "https://orbitingideas.com";
      backButton.innerHTML = "← Back";
      backButton.style.marginRight = "12px";
      backButton.style.padding = "6px 10px";
      backButton.style.background = "#f0f0f0";
      backButton.style.borderRadius = "5px";
      backButton.style.fontWeight = "bold";
      backButton.style.textDecoration = "none";
      backButton.style.color = "#333";
      backButton.style.fontSize = "14px";

      // Insert before this dropdown
      dropdown.parentNode.insertBefore(backButton, dropdown);
    }
  });
});
