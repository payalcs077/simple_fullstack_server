async function getData() {
    const res = await fetch("/api/message");
    const data = await res.json();
    document.getElementById("result").innerText = data.message;
}