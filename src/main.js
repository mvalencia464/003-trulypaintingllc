// Projects data
const projects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    description:
      "Complete kitchen remodel with custom cabinets, quartz countertops, and new appliances",
    type: "Kitchen Remodel",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68159806db01842adf87ca4f.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68159806ea8101223fed35dc.webp",
    testimonial: {
      text: "They transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible!",
      author: "Sarah M.",
      rating: 5,
    },
  },
  {
    id: 2,
    title: "Gorgeous Bathroom Renovation",
    description:
      "Luxury bathroom remodel with heated floors, custom tile work, and modern fixtures",
    type: "Bathroom Remodel",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815a2f00013197527049d0b.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815a2f0db0184080087d5c1.webp",
    testimonial: {
      text: "Our bathroom feels like a high-end spa now. The heated floors are amazing!",
      author: "Michael & Lisa K.",
      rating: 5,
    },
  },
  {
    id: 3,
    title: "Custom Deck Build",
    description:
      "New gorgeous deck with dark composite decking and cable railing",
    type: "Outdoor Living",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815a5ceea81010f18ed4746.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815a5ceca200059e5301abc.webp",
    testimonial: {
      text: "The new deck completely transformed our backyard. Perfect for entertaining!",
      author: "David W.",
      rating: 5,
    },
  },
  {
    id: 4,
    title: "Flooring Installation",
    description:
      "Complete kitchen and hallway transformation with new flooring",
    type: "Flooring Installation",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152dd5209d22cd672d22f3.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152dd55d4a83c03f067435.webp",
    testimonial: {
      text: "The new floor is so much better than the old one. We're so grateful to have this finally fixed.",
      author: "John Doe",
      rating: 5,
    },
  },
  {
    id: 5,
    title: "Master Suite Addition",
    description: "400 sq ft master suite addition with custom closets",
    type: "Home Addition",
    beforeImage:
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    afterImage:
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
    testimonial: {
      text: "The new master suite exceeded our expectations. It's like having a luxury hotel room at home!",
      author: "Emily R.",
      rating: 5,
    },
  },
  {
    id: 6,
    title: "Complete Home Exterior",
    description: "New siding, windows, and roof with modern color scheme",
    type: "Exterior Renovation",
    beforeImage:
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    afterImage:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    testimonial: {
      text: "Our home's curb appeal has improved dramatically. The neighbors keep asking for your number!",
      author: "Thomas & Mary B.",
      rating: 5,
    },
  },
  {
    id: 7,
    title: "Open Concept Living",
    description:
      "Removed walls to create an open floor plan with modern finishes",
    type: "Interior Renovation",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815acfcea81016307ed4d64.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815acfc1e3c1e5e4112e2d4.webp",
    testimonial: {
      text: "The open concept transformation has made our home feel so much larger and brighter.",
      author: "Amanda L.",
      rating: 5,
    },
  },
  {
    id: 8,
    title: "Garage Conversion",
    description:
      "Here's what a plain garage looks like when it's converted into a beautiful home gym",
    type: "Space Conversion",
    beforeImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815ab1dea81010787ed4b82.webp",
    afterImage:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/6815ab1dea8101b542ed4b83.webp",
    testimonial: {
      text: "The garage conversion was brilliant. Now we have a perfect work-from-home setup!",
      author: "Chris P.",
      rating: 5,
    },
  },
  {
    id: 9,
    title: "Luxury Kitchen Remodel",
    description:
      "High-end kitchen renovation with professional-grade appliances",
    type: "Kitchen Remodel",
    beforeImage:
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    afterImage:
      "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg",
    testimonial: {
      text: "This kitchen is a chef's dream! The quality of work is outstanding.",
      author: "Patricia M.",
      rating: 5,
    },
  },
];

// Instagram videos data
const instagramVideos = [
  {
    id: 1,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152de9ca200088432f72e9.webp",
    videoUrl: "#",
    title: "Bathroom Transformation Timelapse",
    views: "2.4K views",
  },
  {
    id: 2,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152de988cf5c168af6431b.webp",
    videoUrl: "#",
    title: "Bathroom Remodel Process",
    views: "1.8K views",
  },
  {
    id: 3,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/681468f25d4a83742002f13f.webp",
    videoUrl: "#",
    title: "Exterior Repair",
    views: "3.2K views",
  },
  {
    id: 4,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/68152fe7ca200088882f750d.webp",
    videoUrl: "#",
    title: "Flood Remediation",
    views: "1.5K views",
  },
  {
    id: 5,
    thumbnail:
      "https://storage.googleapis.com/msgsndr/ZvYXEcu0DmkCtuv5cGcG/media/681468f25d4a83484302f13c.webp",
    videoUrl: "#",
    title: "General Handyman",
    views: "2.1K views",
  },
];

// Before/After Slider functionality
class BeforeAfterSlider {
  constructor(element) {
    this.element = element;
    this.beforeImage = element.querySelector(".before-image");
    this.isDragging = false;
    this.sliderPosition = 50;

    this.element.addEventListener(
      "mousedown",
      this.startDragging.bind(this)
    );
    document.addEventListener("mousemove", this.drag.bind(this));
    document.addEventListener("mouseup", this.stopDragging.bind(this));

    // Initial render
    this.updateSliderPosition(50);
  }

  startDragging(e) {
    e.preventDefault();
    this.isDragging = true;
    this.element.style.cursor = "grabbing";
  }

  stopDragging() {
    this.isDragging = false;
    this.element.style.cursor = "ew-resize";
  }

  drag(e) {
    if (!this.isDragging) return;

    const rect = this.element.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    this.updateSliderPosition(percent);
  }

  updateSliderPosition(percent) {
    this.sliderPosition = percent;
    this.beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    const handle = this.element.querySelector(".slider-handle");
    if (handle) {
      handle.style.left = `${percent}%`;
    }
  }
}

// Initialize projects
function initializeProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className =
      "bg-white rounded-lg shadow-lg overflow-hidden";
    projectElement.innerHTML = `
    <div class="before-after-slider">
      <img src="${
        project.afterImage
      }" alt="After" class="w-full h-full object-cover" />
      <div class="before-image absolute inset-0">
        <img src="${
          project.beforeImage
        }" alt="Before" class="w-full h-full object-cover" />
      </div>
      <div class="slider-handle">
        <svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm font-medium text-primary">${
          project.type
        }</span>
        <div class="flex">
          ${Array(project.testimonial.rating)
            .fill()
            .map(
              () => `
            <svg class="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          `
            )
            .join("")}
        </div>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">${
        project.title
      }</h3>
      <p class="text-gray-600 mb-4">${project.description}</p>
      <blockquote class="italic text-sm text-gray-500 border-l-4 border-primary pl-4">
        "${project.testimonial.text}"
        <footer class="mt-2 font-medium text-gray-700">
          - ${project.testimonial.author}
        </footer>
      </blockquote>
    </div>
  `;

    projectsGrid.appendChild(projectElement);
    new BeforeAfterSlider(
      projectElement.querySelector(".before-after-slider")
    );
  });
}

// Initialize Instagram videos
function initializeVideos() {
  const videoScroll = document.getElementById("videoScroll");

  instagramVideos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.className =
      "flex-none w-[300px] bg-white rounded-lg shadow-lg overflow-hidden group";
    videoElement.innerHTML = `
    <div class="relative aspect-[9/16] bg-gray-100">
      <img
        src="${video.thumbnail}"
        alt="${video.title}"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors">
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 class="text-white font-semibold">${video.title}</h3>
          <p class="text-white/80 text-sm">${video.views}</p>
        </div>
      </div>
    </div>
  `;

    videoScroll.appendChild(videoElement);
  });
}

// Video scroll functionality
function scrollVideos(direction) {
  const videoScroll = document.getElementById("videoScroll");
  const scrollAmount = 300;
  videoScroll.scrollLeft +=
    direction === "left" ? -scrollAmount : scrollAmount;
}

// Header scroll effect
function setupHeaderScroll() {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    const navLinks = document.querySelectorAll(".nav-link");

    if (window.scrollY > 20) {
      header.classList.remove("py-4");
      header.classList.add("bg-white", "shadow-md", "py-2");
      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-800");
      });
    } else {
      header.classList.add("py-4");
      header.classList.remove("bg-white", "shadow-md", "py-2");
      navLinks.forEach((link) => {
        link.classList.add("text-white");
        link.classList.remove("text-gray-800");
      });
    }
  });
}

// Mobile menu toggle
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("hidden");
}

// Initialize everything when the page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeProjects();
  initializeVideos();
  setupHeaderScroll();
});
