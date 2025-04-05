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
        { src: "assests/images/galerie/chambre1/20190114_100129 (1).jpg", category: "cuisine" },
        { src: "assests/images/galerie/cuisine/20190114_104353 (1).jpg", category: "salon" },
        { src: "assests/images/galerie/chambre1/20190114_100129 (1).jpg", category: "chambre1" },
        { src: "assests/images/galerie/chambre1/20190114_100129 (1).jpg", category: "salle-de-bain" },
        { src: "assests/images/galerie/cuisine/20190114_104353 (1).jpg", category: "piscine" },
        { src: "assests/images/galerie/cuisine/20190114_104353 (1).jpg", category: "cuisine" },
        { src: "assests/images/galerie/chambre1/20190114_100129 (1).jpg", category: "piscine" },
      ];
  
      let currentPhotos = []; // tableau filtré global

      const renderPhotos = (filter) => {
        gallery.innerHTML = "";
        currentPhotos = filter === "all" ? photos : photos.filter(p => p.category === filter);
      
        currentPhotos.forEach((p, index) => {
          const img = document.createElement("img");
          img.src = p.src;
          img.alt = p.category;
          img.dataset.category = p.category;
          gallery.appendChild(img);
      
          img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = p.src;
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
        lightboxImg.src = next.src;
        lightboxImg.alt = next.category;
      });
      
      lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
        const prev = currentPhotos[currentIndex];
        lightboxImg.src = prev.src;
        lightboxImg.alt = prev.category;
      });
      
  
    renderPhotos("all");
  });  