const fs = require('fs');
const files = ['index.html', 'explore.html', 'grade.html'];

for (let file of files) {
    let path = 'd:/منصة/spedia-clone/' + file;
    let html = fs.readFileSync(path, 'utf8');

    // Remove the old sticky navbar block
    let headerStart = html.indexOf('<header class="navbar"');
    if (headerStart === -1) continue;
    let headerEnd = html.indexOf('</header>', headerStart) + 9;
    let navBlockOriginal = html.substring(headerStart, headerEnd);

    // If it hasn't been split yet
    if (!html.includes('id="top-logo-header"')) {
        let topLogoHTML = `
    <header id="top-logo-header" style="background:#fff; padding:15px; display:flex; justify-content:center; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
        <a href="index.html" class="logo text-dark" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
            <img src="image_1778255598103.png" alt="Logo" style="width: 50px; height: 50px; border-radius: 50%;">
            <div class="logo-text" style="display:flex; flex-direction:column; line-height:1;">
                <span class="ar" style="font-size:28px; font-weight:900; color:#12b8c5;">حصون</span>
                <span class="en" style="font-weight:800; color:#121e33;">HUSOON</span>
            </div>
        </a>
    </header>
`;

        // Extract just the nav-actions part
        let navActionsStart = navBlockOriginal.indexOf('<div class="nav-actions">');
        let navActionsEnd = navBlockOriginal.indexOf('</div>\n        </div>', navActionsStart);
        if (navActionsEnd === -1) navActionsEnd = navBlockOriginal.indexOf('</div>\r\n        </div>', navActionsStart);
        if (navActionsEnd === -1) navActionsEnd = navBlockOriginal.indexOf('</div>', navBlockOriginal.length - 30);

        let actionsHtml = navBlockOriginal.substring(navActionsStart, navActionsEnd + 6);

        let bottomNavHTML = `
    <!-- BOTTOM NAV -->
    <div class="bottom-nav-container" style="background:#fff; padding:20px; border-radius:30px 30px 0 0; box-shadow:0 -10px 40px rgba(0,0,0,0.08); display:flex; justify-content:center; position:relative; z-index:100; margin-top:50px;">
        ${actionsHtml}
    </div>
`;
        // Replace the original header with the top logo header
        html = html.substring(0, headerStart) + topLogoHTML + html.substring(headerEnd);

        // Inject the bottom nav just before the footer
        let footerStart = html.indexOf('<footer');
        if (footerStart !== -1) {
            html = html.substring(0, footerStart) + bottomNavHTML + '\n    ' + html.substring(footerStart);
        } else {
            let bodyEnd = html.indexOf('</body>');
            html = html.substring(0, bodyEnd) + bottomNavHTML + '\n' + html.substring(bodyEnd);
        }

        fs.writeFileSync(path, html);
        console.log('Fixed', path);
    }
}
