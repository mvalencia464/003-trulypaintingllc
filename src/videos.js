// Instagram videos data
const instagramVideos = [
  {
    id: 1,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152de9ca200088432f72e9.webp",
    videoUrl: "#",
    title: "Bathroom Transformation Timelapse",
    views: "2.4K views",
    description: "Watch this amazing bathroom transformation from start to finish in this timelapse video."
  },
  {
    id: 2,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152de988cf5c168af6431b.webp",
    videoUrl: "#",
    title: "Bathroom Remodel Process",
    views: "1.8K views",
    description: "See the step-by-step process of how we transform outdated bathrooms into modern spa-like retreats."
  },
  {
    id: 3,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/681468f25d4a83742002f13f.webp",
    videoUrl: "#",
    title: "Exterior Repair",
    views: "3.2K views",
    description: "Learn how we repair and restore damaged exteriors to protect your home from the elements."
  },
  {
    id: 4,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152fe7ca200088882f750d.webp",
    videoUrl: "#",
    title: "Flood Remediation",
    views: "1.5K views",
    description: "See our emergency response team in action as they handle water damage and flood remediation."
  },
  {
    id: 5,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/681468f25d4a83484302f13c.webp",
    videoUrl: "#",
    title: "General Handyman",
    views: "2.1K views",
    description: "Our skilled handymen can tackle a wide range of home repair and maintenance tasks."
  },
  {
    id: 6,
    thumbnail:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    videoUrl: "#",
    title: "Kitchen Renovation",
    views: "4.7K views",
    description: "Watch as we transform this outdated kitchen into a modern cooking and entertaining space."
  },
];

// Mobile menu toggle
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("hidden");
}

// Initialize videos
function initializeVideos() {
  const videosGrid = document.getElementById("videosGrid");

  instagramVideos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.className =
      "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300";
    videoElement.innerHTML = `
      <div class="relative aspect-video bg-gray-100">
        <img
          src="${video.thumbnail}"
          alt="${video.title}"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-primary/20 hover:bg-primary/30 transition-colors">
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h3 class="text-white font-semibold">${video.title}</h3>
            <p class="text-white/80 text-sm">${video.views}</p>
          </div>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-bold text-primary mb-2">${video.title}</h3>
        <p class="text-gray-600">${video.description}</p>
        <div class="mt-3 flex justify-between items-center">
          <a href="#" class="text-primary font-medium hover:underline">Watch Video</a>
          <span class="text-sm text-gray-500">${video.views}</span>
        </div>
      </div>
    `;

    videosGrid.appendChild(videoElement);
  });
}

// Initialize everything when the page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeVideos();
});
