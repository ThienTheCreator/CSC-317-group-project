//Search function for pages that are not index.html
function clickSearch(){
	let searchBar = document.getElementById("searchBar");
	switch(searchBar.value.toLowerCase()){
		case "home":
			window.location.href = "../index.html";
			break;
		case "menu":
			window.location.href = "menu.html";
			break;
		case "popular items":
			window.location.href = "popular.html";
			break;
		case "special deal":
			window.location.href = "specials.html";
			break;
		case "payment":
			window.location.href = "order.html";
			break;
		case "faq":
			window.location.href = "faq.html";
			break;
		case "about us":
			window.location.href = "aboutUs.html";
			break;
		case "login":
			window.location.href = "login.html";
			break;
		case "register":
			window.location.href = "register.html";
			break;
		default:
			alert("Page not found!");
			break;
	}	
}

//if enter was press call search function
function enterSearch(){
	if(event.keyCode == 13) {
		clickSearch();
        }
}


//Search function for index.html
function clickHomeSearch(){
	let searchBar = document.getElementById("searchBar");
	switch(searchBar.value.toLowerCase()){
		case "home":
			window.location.href = "index.html";
			break;
		case "menu":
			window.location.href = "html/menu.html";
			break;
		case "popular items":
			window.location.href = "html/popular.html";
			break;
		case "special deal":
			window.location.href = "html/specials.html";
			break;
		case "payment":
			window.location.href = "html/order.html";
			break;
		case "faq":
			window.location.href = "html/faq.html";
			break;
		case "about us":
			window.location.href = "html/aboutUs.html";
			break;
		case "login":
			window.location.href = "html/login.html";
			break;
		case "register":
			window.location.href = "html/register.html";
			break;
		default:
			alert("Page not found!");
			break;
	}	
}

//if enter was press call search function
function enterHomeSearch(){
	if(event.keyCode == 13) {
		clickHomeSearch();
        }
}
