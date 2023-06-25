document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
        var messageInput = document.getElementById('message');
        var message = messageInput.value;
        alert('Message sent successfully: ' + message);
    });
});
