const fs = require('fs');
const path = require('path');

const dir = 'd:/منصة/spedia-clone';

// 1. Copy images
fs.copyFileSync('C:/Users/Support/.gemini/antigravity/brain/d8619793-64e7-4de8-9678-f291de3bf923/student_boy_1778527056642.png', path.join(dir, 'student_boy.png'));
fs.copyFileSync('C:/Users/Support/.gemini/antigravity/brain/d8619793-64e7-4de8-9678-f291de3bf923/student_girl_1778527451140.png', path.join(dir, 'student_girl.png'));

// 2. Replacements "أكاديمية" -> "منصة"
const replaceInFile = (file, search, replace) => {
    let p = path.join(dir, file);
    if (!fs.existsSync(p)) return;
    let cnt = fs.readFileSync(p, 'utf8');
    cnt = cnt.replace(search, replace);
    fs.writeFileSync(p, cnt, 'utf8');
};

const replaceAllInFile = (file, searchRegex, replace) => {
    let p = path.join(dir, file);
    if (!fs.existsSync(p)) return;
    let cnt = fs.readFileSync(p, 'utf8');
    cnt = cnt.replace(searchRegex, replace);
    fs.writeFileSync(p, cnt, 'utf8');
};

['script.js', 'index.html', 'grade.html', 'explore.html', 'dashboard.html', 'login.html', 'subjects.html', 'fix_html.js', 'admin.html'].forEach(f => {
    replaceAllInFile(f, /أكاديمية حصون/g, 'منصة حصون');
    replaceAllInFile(f, /أكاديمية/g, 'منصة');
});

// 3. Update index.html to add floating popups
let indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
if (!indexHtml.includes('student_boy.png')) {
    const popupsHtml = `
    <!-- Floating students popups -->
    <div class="floating-student" style="bottom: 20%; left: 5%; animation: floatUp 4s ease-in-out infinite;">
        <img src="student_boy.png" alt="طالب">
        <div class="badge">حصون</div>
    </div>
    <div class="floating-student" style="top: 25%; right: 8%; animation: floatUp 5s ease-in-out infinite reverse;">
        <img src="student_girl.png" alt="طالبة">
        <div class="badge">حصون</div>
    </div>
    <style>
    .floating-student {
        position: absolute;
        z-index: 10;
        width: 120px;
        filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
    }
    .floating-student img {
        width: 100%;
        border-radius: 50%;
        border: 4px solid #fff;
    }
    .floating-student .badge {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #12b8c5, #1e3c72);
        color: #fff;
        padding: 5px 15px;
        border-radius: 20px;
        font-family: 'Tajawal', sans-serif;
        font-weight: 800;
        font-size: 14px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    @keyframes floatUp {
        0% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.05); }
        100% { transform: translateY(0px) scale(1); }
    }
    @media(max-width: 768px){
        .floating-student { width: 80px; }
        .floating-student .badge { font-size: 12px; padding: 3px 10px; }
    }
    </style>
    `;
    // Insert inside the hero section container
    indexHtml = indexHtml.replace('class="hero-container"', 'class="hero-container" style="position:relative;"');
    indexHtml = indexHtml.replace('<div class="hero-content">', popupsHtml + '\n                <div class="hero-content">');
    fs.writeFileSync(path.join(dir, 'index.html'), indexHtml, 'utf8');
}

// 4. Update admin.html to add Course Password and Admin Pass codes logic
let adminHtml = fs.readFileSync(path.join(dir, 'admin.html'), 'utf8');
if (!adminHtml.includes('course-code-container')) {
    let replacedFormGroup = `
                <div class="form-group">
                    <label>النوع</label>
                    <select id="ct-type" onchange="document.getElementById('course-code-container').style.display = this.value === 'course' ? 'block' : 'none'">
                        <option value="book">كتاب متاح للطلب</option>
                        <option value="course">كورس واشتراك (مغلق برقم سري)</option>
                    </select>
                </div>
                <div class="form-group" id="course-code-container" style="display:none;">
                    <label>كود التفعيل الخاص بالكورس (كلمة المرور 🔒)</label>
                    <input type="text" id="ct-course-code" placeholder="مثال: MATH101">
                </div>
                <div class="form-group">
                    <label>الصف الدراسي</label>
    `;
    adminHtml = adminHtml.replace(/<div class="form-group">\s*<label>النوع<\/label>[\s\S]*?<div class="form-group">\s*<label>الصف الدراسي<\/label>/, replacedFormGroup);

    // Check if regex matched, otherwise do basic replace
    if (!adminHtml.includes('course-code-container')) {
        adminHtml = adminHtml.replace('<div class="form-group">\r\n                    <label>الصف الدراسي', replacedFormGroup); // fallback
    }

    // Hide phone numbers if adminType == restricted
    adminHtml = adminHtml.replace(
        "<td>${u.phone}</td>",
        "<td>${adminType === 'restricted' ? '********' : u.phone}</td>"
    );
    // Ensure adminType is defined in renderTables
    adminHtml = adminHtml.replace(
        "let att = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');",
        "let att = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');\\n            let adminType = sessionStorage.getItem('adminType');"
    );

    // Save ct-course-code in addContent
    adminHtml = adminHtml.replace(
        "title: fileInput.files[0].name.split('.')[0], /* use filename as title */",
        "title: fileInput.files[0].name.split('.')[0], courseCode: document.getElementById('ct-course-code') ? document.getElementById('ct-course-code').value : '', /* use filename as title */"
    );

    fs.writeFileSync(path.join(dir, 'admin.html'), adminHtml, 'utf8');
}

// 5. Update script.js for Restricted Admin and Unlock Course function
let scriptJS = fs.readFileSync(path.join(dir, 'script.js'), 'utf8');

// Prompt Admin (Restricted code)
if (!scriptJS.includes('adminType')) {
    let repPrompt = `
window.promptAdmin = function () {
    let pass = prompt("بوابة الإدارة - يرجى كتابة الرقم السري (الأساسي 1234 أو كود المساعدين):");
    if (pass === "1234") {
        sessionStorage.setItem('isAdmin', 'yes');
        sessionStorage.setItem('adminType', 'full');
        window.location.href = "admin.html";
    } else if (pass === "5678") {
        sessionStorage.setItem('isAdmin', 'yes');
        sessionStorage.setItem('adminType', 'restricted');
        window.location.href = "admin.html";
    } else if (pass !== null) {
        alert("بيانات خاطئة، محاولة غير مصرح بها.");
    }
}
    `;
    scriptJS = scriptJS.replace(/window\.promptAdmin = function \(\) \{[\s\S]*?\}/, repPrompt.trim());
}

// unlockCourse logic and renderCards modify
if (!scriptJS.includes('unlockCourse')) {
    let newFunc = `
window.unlockCourse = function(title, code) {
    if (!code || code.trim() === '' || code === 'undefined') {
        alert('هذا الكورس قيد التجهيز أو الكود السري مفقود.');
        return;
    }
    let input = prompt('هذا الكورس محمي بقفل 🔒.\\nالرجاء إدخال كود الكورس السري لفتحه:');
    if (input === code) {
        alert('تم فتح كورس "' + title + '" بنجاح! 🎉\\n(تمت المطابقة، يمكنك الآن مشاهدة المحتوى)');
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if(user) {
            let cart = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
            cart.push(title);
            localStorage.setItem('spedia_unlocked', JSON.stringify(cart));
            // Reload to hide lock button
            window.location.reload();
        }
    } else if (input !== null) {
        alert('الكود الذي أدخلته غير صحيح. يرجى التواصل مع الإدارة.');
    }
}
function isUnlocked(title) {
    let unlocked = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
    return unlocked.includes(title);
}
`;
    scriptJS += "\\n" + newFunc;

    let renderCardsRep = `
        let btnHtml = '';
        if (item.type === 'course') {
            if (window.isUnlocked && window.isUnlocked(item.title)) {
                btnHtml = \`<button class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px; background:linear-gradient(135deg, #4caf50, #2e7d32);"><i class="fas fa-check-circle" style="font-size:24px;"></i> مفتوح للمشاهدة </button>\`;
            } else {
                btnHtml = \`<button onclick="unlockCourse('\${item.title}', '\${item.courseCode}')" class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px; background:linear-gradient(135deg, #f44336, #e53935);"><i class="fas fa-lock" style="font-size:24px;"></i> فتح الكورس السري </button>\`;
            }
        } else {
            btnHtml = \`<button onclick="addToCart('\${item.title}', '\${renderPrice(item.priceBase)}', '\${btnText}')" class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px;"><i class="fas fa-cart-plus" style="font-size:24px;"></i> \${btnText} </button>\`;
        }

        div.innerHTML = \`
            <div class="subject-cover" style="background:linear-gradient(135deg, #e8fbff, #f4f7fa); height:180px; position:relative; overflow:hidden;">
                <img src="\${item.image}" style="object-fit:contain; height:80%; position:absolute; top:10%; left:0; right:0; margin:auto; filter:drop-shadow(0 15px 15px rgba(0,0,0,0.15)); transition:0.3s;" class="hover-scale">
            </div>
            <div class="subject-body" style="text-align:center; padding:25px;">
                <h3 style="font-size:20px; font-weight:800; color:var(--text-dark); margin-bottom:10px;">\${item.title}</h3>
                <h4 class="highlight mt-10" style="font-size:26px; font-weight:900; margin-bottom:20px;">\${renderPrice(item.priceBase)}</h4>
                \${btnHtml}
            </div>
        \`;
    `;

    scriptJS = scriptJS.replace(/div\.innerHTML = `[\s\S]*?`;/, renderCardsRep);
}

fs.writeFileSync(path.join(dir, 'script.js'), scriptJS, 'utf8');

console.log("Modifications fully completed successfully!");
