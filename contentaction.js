function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var success = false;

async function clickf() {
    try {
        await sleep(1000);
        if (document.querySelector('a[data-fquality="720p"]')) {
            console.log("720");
            document.querySelector('a[data-fquality="720p"]').click();
        } else if (document.querySelector('a[data-fquality="480"]')) {
            document.querySelector('a[data-fquality="480"]').click();
            console.log("480");
        } else if (document.querySelector('a[data-fquality="1080"]')) {
            document.querySelector('a[data-fquality="1080"]').click();
            console.log("1080");
        } else if (document.querySelector('a[data-fquality="360"]')) {
            document.querySelector('a[data-fquality="360"]').click();
            console.log("360");
        } else if (document.querySelector('a[data-fquality="240p"]')) {
            document.querySelector('a[data-fquality="240p"]').click();
            console.log("240");
        } else if (document.querySelector('a[data-fquality="144p"]')) {
            document.querySelector('a[data-fquality="144p"]').click();
            console.log("144");
        }
        else
            clickf();

        clickdown();
    } catch (err) { clickf(); }

}

async function clickdown() {
    try {
        if (!document.querySelector("#process-result > div > span.sr-only")) {
            await sleep(1000);
            window.location.href = document.querySelector("#process-result > div > a").href;
            await sleep(5000);
            window.close();
        } else {
            document.querySelector("div.modal-header > button").click();
            clickf();
        }
    } catch (err) { clickdown(); }
}


clickf();



