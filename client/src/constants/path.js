let base_url = "/api/"
if (window.location.host === "localhost:3000") {
    base_url = "http://localhost:9000/api/"
}

export default base_url;