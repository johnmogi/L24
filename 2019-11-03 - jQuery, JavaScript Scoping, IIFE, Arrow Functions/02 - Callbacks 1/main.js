
function printMyName() {
    document.write("Assaf Finkelshtein<br>");
}

function doWork(callback) {
    callback();
}

doWork(printMyName);
doWork(function () {
    document.write("Assaf Finkelshtein<br>");
});

