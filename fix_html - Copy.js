const fs = require('fs');

const topLogoHTML = `\n    <header id="top-logo-header" style="background:#fff; padding:15px; display:flex; justify-content:center; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
        <a href="index.html" class="logo text-dark" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
            <img src="image_1778255598103.png" alt="Logo" style="width: 50px; height: 50px; border-radius: 50%; object-fit:cover;">
            <div class="logo-text" style="display:flex; flex-direction:column; line-height:1;">
                <span class="ar" style="font-size:28px; font-weight:900; color:#12b8c5;">حصون</span>
                <span class="en" style="font-weight:800; color:#121e33;">HUSOON</span>
            </div>
        </a>
    </header>\n`;

const bottomNavHTML = `\n    <!-- BOTTOM NAV ACTIONS -->
    <div class="navbar bottom-navbar" style="background:#fff; padding:20px; border-radius:30px 30px 0 0; box-shadow:0 -10px 40px rgba(0,0,0,0.08); display:flex; justify-content:center; position:relative; z-index:100; margin-top:50px;">
        <div class="nav-actions">
            <div class="discover-container">
                <a href="explore.html" class="btn-discover" style="padding:12px 25px; font-size:18px;">
                    <i class="fas fa-th-large"></i> <span data-i18n="discover">اكتشف المواد</span>
                </a>
                <div class="mega-menu" style="border-radius:20px; box-shadow:0 30px 60px rgba(0,0,0,0.15); padding:30px;">
                    <div class="mega-menu-grid"></div>
                </div>
            </div>
            <div class="country-container">
                <a href="#" class="nav-icon-circle country-flag" style="border:3px solid var(--primary-color); padding:3px; overflow:hidden; width:50px; height:50px;">
                    <img src="" alt="Country" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                </a>
                <div class="country-dropdown" style="border-radius:15px; padding:10px;">
                    <a href="#" data-code="KW"><img src="https://flagcdn.com/kw.svg" alt="Kuwait"> الكويت</a>
                    <a href="#" data-code="SA"><img src="https://flagcdn.com/sa.svg" alt="KSA"> السعودية</a>
                    <a href="#" data-code="AE"><img src="https://flagcdn.com/ae.svg" alt="UAE"> الإمارات</a>
                    <a href="#" data-code="QA"><img src="https://flagcdn.com/qa.svg" alt="Qatar"> قطر</a>
                    <a href="#" data-code="OM"><img src="https://flagcdn.com/om.svg" alt="Oman"> سلطنة عمان</a>
                    <a href="#" data-code="EG"><img src="https://flagcdn.com/eg.svg" alt="Egypt"> مصر</a>
                </div>
            </div>
            <a href="#" class="nav-icon-circle cart-icon" onclick="openCart(event)" style="width:50px; height:50px; background:#f4f7fa; color:#121e33;">
                <i class="fas fa-shopping-cart"></i>
            </a>
            <a href="login.html" class="btn-login" style="padding:12px 30px; font-size:18px;">
                <span data-i18n="login">تسجيل دخول</span>
            </a>
        </div>
    </div>\n`;

const footerHTML = ``;

function processFile(file) {
    let html = fs.readFileSync(file, 'utf8');

    if (html.includes('<header id="top-logo-header"')) {
        return;
    }

    html = html.replace('<body>', '<body>' + topLogoHTML);

    if (html.includes('<footer')) {
        let footerStart = html.indexOf('<footer');
        html = html.substring(0, footerStart) + bottomNavHTML + '\\n' + html.substring(footerStart);
    } else {
        html = html.replace('<script src="script.js"></script>', bottomNavHTML + footerHTML + '\\n    <script src="script.js"></script>');
    }

    fs.writeFileSync(file, html);
    console.log('Fixed ' + file);
}

processFile('d:/منصة/spedia-clone/explore.html');
processFile('d:/منصة/spedia-clone/grade.html');
