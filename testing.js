(function() {
    let bounceWindow;

    function openBounceWindow() {
        // Open a new small popup window
        bounceWindow = window.open("", "BouncingWindow", "width=300,height=200,left=100,top=100");

        if (!bounceWindow) {
            alert("Bouncing Window needs popups. Please turn off popups.");
            return;
        }

        bounceWindow.document.write("<h2>dsc.gg/msedge</h2>");
        bounceWindow.document.write("<button onclick='window.close()'>Close</button>");

        let x = 100, y = 100;
        let xSpeed = 5, ySpeed = 5;

        function bounce() {
            if (bounceWindow.closed) {
                openBounceWindow(); // Reopen if closed
                return;
            }

            let screenWidth = screen.availWidth - 300; // Keep inside screen
            let screenHeight = screen.availHeight - 200;

            x += xSpeed;
            y += ySpeed;

            if (x <= 0 || x >= screenWidth) xSpeed *= -1;
            if (y <= 0 || y >= screenHeight) ySpeed *= -1;

            bounceWindow.moveTo(x, y);
            setTimeout(bounce, 30); // Adjust for smooth bouncing
        }

        bounce();
    }

    openBounceWindow();

    window.onbeforeunload = function() {
        setTimeout(openBounceWindow, 500); // Reopen if main window is closed
    };
})();
