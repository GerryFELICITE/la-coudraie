document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const filters = document.querySelectorAll(".filter-btn");
  
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");

    let currentIndex = 0; // pour savoir quelle image est affichée
  
    const photos = [
        { thumb: "assests/images/galerie/salon/salon1.webp", full: "assests/images/galerie/salon/salon1.jpg", category: "salon" },
        { thumb: "assests/images/galerie/salon/salon2.webp", full: "assests/images/galerie/salon/salon2.jpg", category: "salon" },
        { thumb: "assests/images/galerie/salon/salon3.webp", full: "assests/images/galerie/salon/salon3.jpg", category: "salon" },
        { thumb: "assests/images/galerie/salon/salon4.webp", full: "assests/images/galerie/salon/salon4.jpg", category: "salon" },
        { thumb: "assests/images/galerie/cuisine/cuisine1.webp", full: "assests/images/galerie/cuisine/cuisine1.jpg", category: "cuisine" },
        { thumb: "assests/images/galerie/cuisine/cuisine2.webp", full: "assests/images/galerie/cuisine/cuisine2.jpg", category: "cuisine" },
        { thumb: "assests/images/galerie/piscine/piscine1.webp", full: "assests/images/galerie/piscine/piscine1.jpg", category: "piscine" },
        { thumb: "assests/images/galerie/piscine/piscine2.webp", full: "assests/images/galerie/piscine/piscine2.jpg", category: "piscine" },
        { thumb: "assests/images/galerie/piscine/piscine3.webp", full: "assests/images/galerie/piscine/piscine3.jpg", category: "piscine" },
        { thumb: "assests/images/galerie/chambreRomantique/chambreRomantique1.webp", full: "assests/images/galerie/chambreRomantique/chambreRomantique1.jpg", category: "chambreRomantique" },
        { thumb: "assests/images/galerie/chambreRomantique/chambreRomantique2.webp", full: "assests/images/galerie/chambreRomantique/chambreRomantique2.jpg", category: "chambreRomantique" },
        { thumb: "assests/images/galerie/chambreRomantique/chambreRomantique3.webp", full: "assests/images/galerie/chambreRomantique/chambreRomantique3.jpg", category: "chambreRomantique" },
        { thumb: "assests/images/galerie/chambreRomantique/chambreRomantique4.webp", full: "assests/images/galerie/chambreRomantique/chambreRomantique4.jpg", category: "chambreRomantique" },
        { thumb: "assests/images/galerie/chambreJungle/chambreJungle1.webp", full: "assests/images/galerie/chambreJungle/chambreJungle1.jpg", category: "chambreJungle" },
        { thumb: "assests/images/galerie/chambreJungle/chambreJungle2.webp", full: "assests/images/galerie/chambreJungle/chambreJungle2.jpg", category: "chambreJungle" },
        { thumb: "assests/images/galerie/chambreMer/chambreMer1.webp", full: "assests/images/galerie/chambreMer/chambreMer1.jpg", category: "chambreMer" },
        { thumb: "assests/images/galerie/chambreMer/chambreMer2.webp", full: "assests/images/galerie/chambreMer/chambreMer2.jpg", category: "chambreMer" },
        { thumb: "assests/images/galerie/chambreMer/chambreMer3.webp", full: "assests/images/galerie/chambreMer/chambreMer3.jpg", category: "chambreMer" },
        { thumb: "assests/images/galerie/chambreMer/chambreMer4.webp", full: "assests/images/galerie/chambreMer/chambreMer4.jpg", category: "chambreMer" },
        { thumb: "assests/images/galerie/sdbMer/sdbMer1.webp", full: "assests/images/galerie/sdbMer/sdbMer1.jpg", category: "sdbMer" },
        { thumb: "assests/images/galerie/sdbRomantique/sdbRomantique1.webp", full: "assests/images/galerie/sdbRomantique/sdbRomantique1.jpg", category: "sdbRomantique" },
        { thumb: "assests/images/galerie/sdbRomantique/sdbRomantique2.webp", full: "assests/images/galerie/sdbRomantique/sdbRomantique2.jpg", category: "sdbRomantique" },
        { thumb: "assests/images/galerie/sdj/sdj1.webp", full: "assests/images/galerie/sdj/sdj1.jpg", category: "sdj" },
        { thumb: "assests/images/galerie/sdj/sdj2.webp", full: "assests/images/galerie/sdj/sdj2.jpg", category: "sdj" },
        { thumb: "assests/images/galerie/veranda/veranda1.webp", full: "assests/images/galerie/veranda/veranda1.jpg", category: "veranda" },
        { thumb: "assests/images/galerie/veranda/veranda2.webp", full: "assests/images/galerie/veranda/veranda2.jpg", category: "veranda" },
        { thumb: "assests/images/galerie/veranda/veranda3.webp", full: "assests/images/galerie/veranda/veranda3.jpg", category: "veranda" },
        { thumb: "assests/images/galerie/veranda/veranda4.webp", full: "assests/images/galerie/veranda/veranda4.jpg", category: "veranda" },
        { thumb: "assests/images/galerie/veranda/veranda5.webp", full: "assests/images/galerie/veranda/veranda5.jpg", category: "veranda" },
        { thumb: "assests/images/galerie/jardin/jardin1.webp", full: "assests/images/galerie/jardin/jardin1.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin2.webp", full: "assests/images/galerie/jardin/jardin2.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin3.webp", full: "assests/images/galerie/jardin/jardin3.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin4.webp", full: "assests/images/galerie/jardin/jardin4.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin5.webp", full: "assests/images/galerie/jardin/jardin5.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin6.webp", full: "assests/images/galerie/jardin/jardin6.jpg", category: "jardin" },
        { thumb: "assests/images/galerie/jardin/jardin7.webp", full: "assests/images/galerie/jardin/jardin7.jpg", category: "jardin" }
      ];
  
      let currentPhotos = []; // tableau filtré global

      const renderPhotos = (filter) => {
        gallery.innerHTML = "";
        currentPhotos = filter === "all" ? photos : photos.filter(p => p.category === filter);
      
        currentPhotos.forEach((p, index) => {
          const img = document.createElement("img");
          img.src = p.thumb;
          img.alt = p.category;
          img.dataset.category = p.category;
          gallery.appendChild(img);
      
          img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = p.full;
            lightboxImg.alt = p.category;
            currentIndex = index;
          });
        });
      };      

  
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        renderPhotos(filter);
      });
    });
  
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    lightboxNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentPhotos.length;
        const next = currentPhotos[currentIndex];
        lightboxImg.src = next.full;
        lightboxImg.alt = next.category;
      });
      
      lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
        const prev = currentPhotos[currentIndex];
        lightboxImg.src = prev.full;
        lightboxImg.alt = prev.category;
      });
      
  
    renderPhotos("all");
  });  