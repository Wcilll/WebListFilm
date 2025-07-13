function startSite() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  filterContent("anime"); // tampilkan default anime
}

function filterContent(type) {
  const anime = document.getElementById("animeSection");
  const kdrama = document.getElementById("kdramaSection");

  if (type === "anime") {
    anime.style.display = "block";
    kdrama.style.display = "none";
  } else {
    kdrama.style.display = "block";
    anime.style.display = "none";
  }
}

// ...existing code...
const scrollContainer = document.querySelector(".horizontal-scroll");
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  scrollContainer.classList.add("active");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});
scrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});
scrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  scrollContainer.classList.remove("active");
});
scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  scrollContainer.scrollLeft = scrollLeft - walk;
});

// Function to scroll to a specific section
function goToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
