export function showMessage(message, type) {
    Toastify ({
        text: message,
        duration: 3000,
        newWinow: true,
        close: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
            background: type === "success" ? "green" : "red"
        },
        onclick: function() {}
    }).showToast();
}