document.getElementById("theme-toggle")?.addEventListener("click",()=>{const e=document.documentElement.classList.toggle("dark");try{localStorage.setItem("theme",e?"dark":"light")}catch{}});
