// ===== SCROLL REVEAL ANIMATION =====

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }else{
      entry.target.classList.remove("active");
    }

  });
},{
  threshold:0.15
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});


// ===== NAVBAR ACTIVE LINK (SMOOTH UX) =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

});

/* ===== SKILL CLICK PROGRESS ===== */

document.querySelectorAll(".skill-card").forEach(card => {

  card.addEventListener("click", () => {

    const progress = card.querySelector(".skill-progress");
    const percentText = card.querySelector(".skill-percent");
    const level = card.getAttribute("data-skill");

    // toggle open/close
    if(card.classList.contains("active")){
      card.classList.remove("active");
      progress.style.width = "0%";
      percentText.textContent = "";
      return;
    }

    // close others
    document.querySelectorAll(".skill-card").forEach(c=>{
      c.classList.remove("active");
      c.querySelector(".skill-progress").style.width = "0%";
      c.querySelector(".skill-percent").textContent = "";
    });

    // open selected
    card.classList.add("active");

    setTimeout(()=>{
      progress.style.width = level + "%";
      percentText.textContent = level + "%";
    },100);

  });

});
