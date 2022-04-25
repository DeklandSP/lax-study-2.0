
function changeWebsite() {
    if (window.innerWidth < 1024) {
        window.location = "landingPageMobile.html"

    }
    if (window.innerWidth >= 1024) {
        window.location = "landingPage.html"
    }
}