const params = new URLSearchParams(window.location.search);
const destination = "intent://#Intent;package=" + params.get("pkgid") + ";end;";

if (params.has("pkgid")) {
    const pkgid = params.get("pkgid");

    window.location.href = destination;
} else {
    window.location.replace("/");
}