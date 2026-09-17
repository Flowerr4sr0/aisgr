const params = new URLSearchParams(window.location.search);
const pkgid = params.get("pkgid");

if (pkgid) {
    const destination =
        `intent://#Intent;` +
        `action=android.intent.action.MAIN;` +
        `category=android.intent.category.LAUNCHER;` +
        `package=${pkgid};` +
        `end;`;

    window.location.href = destination;
} else {
    window.location.replace("/");
}
