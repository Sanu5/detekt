navigationPageText=fetch(pathToRoot+"navigation.html").then((e=>e.text())),displayNavigationFromPage=()=>{navigationPageText.then((e=>{document.getElementById("sideMenu").innerHTML=e})).then((()=>{document.querySelectorAll(".overview > a").forEach((e=>{e.setAttribute("href",pathToRoot+e.getAttribute("href"))}))})).then((()=>{document.querySelectorAll(".sideMenuPart").forEach((e=>{e.classList.contains("hidden")||e.classList.add("hidden")}))})).then((()=>{revealNavigationForCurrentPage()})).then((()=>{scrollNavigationToSelectedElement()})),document.querySelectorAll('.footer a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},revealNavigationForCurrentPage=()=>{let e=document.getElementById("content").attributes.pageIds.value.toString(),t=document.querySelectorAll(".sideMenuPart"),n=0;do{t.forEach((t=>{-1!==t.attributes.pageId.value.indexOf(e)&&0===n&&(n=1,t.classList.contains("hidden")&&(t.classList.remove("hidden"),t.setAttribute("data-active","")),revealParents(t))})),e=e.substring(0,e.lastIndexOf("/"))}while(-1!==e.indexOf("/")&&0===n)},revealParents=e=>{e.classList.contains("sideMenuPart")&&(e.classList.contains("hidden")&&e.classList.remove("hidden"),revealParents(e.parentNode))},scrollNavigationToSelectedElement=()=>{let e=document.querySelector("div.sideMenuPart[data-active]");if(null==e)return;let t=e.querySelectorAll(":scope > div.overview span.nav-icon").length>0;e.children.length>1&&!t?e.scrollIntoView(!0):e.scrollIntoView({behavior:"auto",block:"center",inline:"center"})},"loading"==document.readyState?window.addEventListener("DOMContentLoaded",(()=>{displayNavigationFromPage()})):displayNavigationFromPage();