const WA_NUMBER = "201025792459";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const COUNTRY_SYSTEMS = {
    KW: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }] },
        { title: 'المرحلة المتوسطة', grades: [{ name: 'السادس', val: 6, num: 6 }, { name: 'السابع', val: 7, num: 7 }, { name: 'الثامن', val: 8, num: 8 }, { name: 'التاسع', val: 9, num: 9 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'العاشر', val: 10, num: 10 }, { name: 'الحادي عشر', val: 11, num: 11 }, { name: 'الثاني عشر', val: 12, num: 12 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'العاشر', val: 13, num: 10 }, { name: 'الحادي عشر', val: 14, num: 11 }, { name: 'الثاني عشر', val: 15, num: 12 }] }
    ],
    EG: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني الإعدادي', val: 8, num: 2 }, { name: 'الثالث الإعدادي', val: 9, num: 3 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الصف الأول', val: 10, num: 1 }, { name: 'الثاني', val: 11, num: 2 }, { name: 'الثالث', val: 12, num: 3 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الصف الأول', val: 13, num: 1 }, { name: 'الثاني', val: 14, num: 2 }, { name: 'الثالث', val: 15, num: 3 }] }
    ],
    SA: [
        { title: 'الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المتوسطة', grades: [{ name: 'الأول المتوسط', val: 7, num: 1 }, { name: 'الثاني', val: 8, num: 2 }, { name: 'الثالث', val: 9, num: 3 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الصف الأول', val: 10, num: 1 }, { name: 'الثاني', val: 11, num: 2 }, { name: 'الثالث', val: 12, num: 3 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الصف الأول', val: 13, num: 1 }, { name: 'الثاني', val: 14, num: 2 }, { name: 'الثالث', val: 15, num: 3 }] }
    ],
    OM: [
        { title: 'التعليم الأساسي 1', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }] },
        { title: 'التعليم الأساسي 2', grades: [{ name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }, { name: 'السابع', val: 7, num: 7 }, { name: 'الثامن', val: 8, num: 8 }, { name: 'التاسع', val: 9, num: 9 }, { name: 'العاشر', val: 10, num: 10 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'الحادي عشر', val: 11, num: 11 }, { name: 'الثاني عشر', val: 12, num: 12 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'الحادي عشر', val: 14, num: 11 }, { name: 'الثاني عشر', val: 15, num: 12 }] }
    ],
    QA: [
        { title: 'المرحلة الابتدائية', grades: [{ name: 'الأول الابتدائي', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }, { name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }] },
        { title: 'المرحلة الإعدادية', grades: [{ name: 'الأول الإعدادي', val: 7, num: 1 }, { name: 'الثاني', val: 8, num: 2 }, { name: 'الثالث', val: 9, num: 3 }] },
        { title: 'الثانوية العلمي', grades: [{ name: 'العاشر', val: 10, num: 1 }, { name: 'الحادي عشر', val: 11, num: 2 }, { name: 'الثاني عشر', val: 12, num: 3 }] },
        { title: 'الثانوية الأدبي', grades: [{ name: 'العاشر', val: 13, num: 1 }, { name: 'الحادي عشر', val: 14, num: 2 }, { name: 'الثاني عشر', val: 15, num: 3 }] }
    ],
    AE: [
        { title: 'الحلقة الأولى', grades: [{ name: 'الصف الأول', val: 1, num: 1 }, { name: 'الثاني', val: 2, num: 2 }, { name: 'الثالث', val: 3, num: 3 }, { name: 'الرابع', val: 4, num: 4 }] },
        { title: 'الحلقة الثانية', grades: [{ name: 'الخامس', val: 5, num: 5 }, { name: 'السادس', val: 6, num: 6 }, { name: 'السابع', val: 7, num: 7 }, { name: 'الثامن', val: 8, num: 8 }] },
        { title: 'الحلقة الثالثة', grades: [{ name: 'التاسع', val: 9, num: 9 }, { name: 'العاشر', val: 10, num: 10 }, { name: 'الحادي عشر', val: 11, num: 11 }, { name: 'الثاني عشر', val: 12, num: 12 }] }
    ]
};

const RATES = {
    KW: { cur: 'د.ك', rate: 1 / 160, dialect: { hero_sub: 'يا هلا بك! جودة معلمين تشرح الصدر، وبأسعار ما تحس فيها.', hero_t1: 'الخبرة مو بس رقم', hero_t2: 'هذي قصتنا في التعليم', discover: 'اكتشف المواد', login: 'تسجيل دخول', stat_vid: 'فيديو تعليمي تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تدري إن كتبنا', smart2: 'تتكلم ؟', smart_desc: 'كتبنا وتلاخيصنا شاملة، مصممة عشان تضمن لك التفوق المطلق.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ رحلة التميز!', hero_btn: 'استكشف الدروس', req: 'طلب الحين', academy_name: 'منصة حصون', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    SA: { cur: 'ر.س', rate: 1 / 13, dialect: { hero_sub: 'أهلاً بك! جودة معلمين تسر الخاطر، والأسعار في متناول الجميع.', hero_t1: 'خبراء التعليم المنزلي', hero_t2: 'وبصمتنا بالتعليم', discover: 'تصفح المواد', login: 'تسجيل الدخول', stat_vid: 'مقطع فيديو تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب مجاب', smart1: 'تدري إن مناهجنا', smart2: 'تتفاعل معك؟', smart_desc: 'ملازمنا التفاعلية عالية الجودة مصممة لضمان تفوقك الدائم.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتميزين وابدأ رحلة التفوق!', hero_btn: 'استكشف دوراتنا', req: 'اطلب الآن', academy_name: 'منصة حصون', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة الشرح', success_student: 'الطالب المتفوق', private_lesson_title: 'دروس خصوصية', private_lesson_sub: 'أنت الآن VIP استفسر براحتك', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'بث مباشر مع كبار المعلمين', live_sub: 'حصة تفاعلية مع زملائك' } },
    AE: { cur: 'د.إ', rate: 1 / 13, dialect: { hero_sub: 'مرحبابك! جودة معلمين تثلج الصدر، وأسعار ولا أروع.', hero_t1: 'التميز يبدأ من هنا', hero_t2: 'وهذي حكايتنا في التعليم', discover: 'تصفح المواد', login: 'دخول الحين', stat_vid: 'فيديو تعليمي حصري', stat_stu: 'طالب متميز معانا', stat_qa: 'سؤال وجواب مشروح', smart1: 'تعرف إن كتبنا', smart2: 'تتحدث لك؟', smart_desc: 'منهجك صار بمتناول إيدك، مبسط ومصمم بأسلوب يخليك الأول.', suc1: 'كون واحد من آلاف', suc2: 'المتفوقين وابدأ الإبداع!', hero_btn: 'تصفح الكورسات', req: 'اطلب الحين', academy_name: 'منصة حصون', hero_pill_left: 'للتفوق دروب', hero_pill_right_title: 'أمهر المعلمين', hero_pill_right_sub: 'مبسط وسريع', hero_quality: 'شرح متميز', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'أنت الحين VIP إسأل بدون توقف', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'بث مباشر وفعال', live_sub: 'تفاعل مع أصدقائك بمتعة' } },
    QA: { cur: 'ر.ق', rate: 1 / 13, dialect: { hero_sub: 'حياك الله! جودة تشرح الخاطر، وبسعر في متناول الكل.', hero_t1: 'شرح مبسط ومميز', hero_t2: 'قصّتنا ويا التعلام', discover: 'تصفح المواد', login: 'تسجيل دخول', stat_vid: 'فيديو شرح تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تدري إن ملازمنا', smart2: 'تشرح لك؟', smart_desc: 'كتب تلخص لك كل ما تحتاجه، مصممة بطريقة عصرية وسهلة.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ التميز!', hero_btn: 'اكتشف دوراتنا', req: 'اطلب الآن', academy_name: 'منصة حصون', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حصتك', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    OM: { cur: 'ر.ع', rate: 1 / 125, dialect: { hero_sub: 'أهلاً بك! مدرسين يشرحوا الصدر، وبأسعار جداً ممتازة.', hero_t1: 'طريقك للتفوق', hero_t2: 'هذي قصتنا التعليمية', discover: 'تصفح المنصة', login: 'تسجيل الدخول', stat_vid: 'فيديو تعليمي مميز', stat_stu: 'طالب متميز معانا', stat_qa: 'سؤال محدد ومجاب', smart1: 'تعرف إن ملخصاتنا', smart2: 'تحاكيك؟', smart_desc: 'ملخصات متقنة، شاملة وبسيطة، تضمن وصولك للقمة.', suc1: 'انضم لزملائك', suc2: 'المتفوقين وابدأ التفوق!', hero_btn: 'تصفح منصتنا', req: 'اطلب الآن', academy_name: 'منصة حصون', hero_pill_left: 'طريقك للتفوق', hero_pill_right_title: 'نخبة المعلمين', hero_pill_right_sub: 'شرح احترافي ومبسط', hero_quality: 'جودة في الشرح', success_student: 'الطالب المتميز', private_lesson_title: 'حصة خاصة', private_lesson_sub: 'انت الحين VIP اسأل وناقش مثل ما تبي', order_lesson: 'اطلب حضور', live_students: 'الطلاب', live_teacher: 'المعلم', live_title: 'شرح مباشر مع نخبة من المعلمين', live_sub: 'شارك مع المعلم انت و ربعك' } },
    EG: { cur: 'ج.م', rate: 1, dialect: { hero_sub: 'أهلاً بيك! جودة مدرسين تشرح القلب. وسعر؟ كأنك ما دفعتش!', hero_t1: 'الخبرة مش بس رقم', hero_t2: 'دي حكايتنا في التعليم', discover: 'اكتشف المواد', login: 'تسجيل الدخول', stat_vid: 'فيديو تعليمي تفاعلي', stat_stu: 'طالب مسجل متفوق', stat_qa: 'سؤال وجواب محلول', smart1: 'تعرف إن كتبنا', smart2: 'بتتكلم؟', smart_desc: 'أقوى المذكرات لتأهيل الأوائل، مبسطة ومصممة بأحدث الأساليب.', suc1: 'انضم لآلاف الطلاب', suc2: 'المتفوقين وابدأ التميز!', hero_btn: 'استكشف الكورسات', req: 'اطلب دلوقتي', academy_name: 'منصة حصون', hero_pill_left: 'طريقك للقمة', hero_pill_right_title: 'أفضل المعلمين', hero_pill_right_sub: 'شرح احترافي بجد', hero_quality: 'شرح ممتاز', success_student: 'الطالب المتفوق', private_lesson_title: 'حصة خصوصي', private_lesson_sub: 'انت دلوقتي VIP اسأل براحتك خالص', order_lesson: 'اطلب حصتك', live_students: 'الطلبة', live_teacher: 'المدرس', live_title: 'شرح مباشر مع نخبة من المدرسين', live_sub: 'شارك مع مدرسك انت وصحابك' } }
};

function getDialect(key, code) { return (RATES[code] && RATES[code].dialect[key]) ? RATES[code].dialect[key] : (RATES['EG'].dialect[key] || ''); }

function forceFakeData() {
    let codes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
    let needUpdateCodes = false;
    if (!codes.find(c => c.code === '1234')) { codes.push({ code: '1234', isUsed: true }); needUpdateCodes = true; }
    if (needUpdateCodes) localStorage.setItem('spedia_codes', JSON.stringify(codes));

    let users = JSON.parse(localStorage.getItem('spedia_users') || '[]');
    let needUpdateUsers = false;
    if (!users.find(u => u.code === '1234')) { users.push({ code: '1234', name: 'أحمد محمود', phone: '01012345678', grade: '10', role: 'student' }); needUpdateUsers = true; }
    if (needUpdateUsers) localStorage.setItem('spedia_users', JSON.stringify(users));

    let content = JSON.parse(localStorage.getItem('spedia_content') || '[]');
    let fakeBooksAndCourses = [
        { id: 101, type: 'book', grade: '10', title: 'كتاب الرياضيات - متقدم', priceBase: 120, image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 102, type: 'course', grade: '10', title: 'الكيمياء الشامل الممتع', priceBase: 500, image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462295-2895977.png' },
        { id: 103, type: 'book', grade: '11', title: 'مذكرة الفيزياء الذهبية', priceBase: 150, image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 104, type: 'course', grade: '11', title: 'دورة القدرات كمي ولفظي', priceBase: 800, image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-education-3414902-2868846.png' },
        { id: 105, type: 'course', grade: '12', title: 'المراجعة النهائية', priceBase: 650, image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3462291-2895973.png' },
        { id: 106, type: 'book', grade: '1', title: 'تأسيس القراءة والكتابة', priceBase: 90, image: 'https://cdni.iconscout.com/illustration/premium/thumb/book-4113220-3406254.png' },
        { id: 107, type: 'course', grade: '7', title: 'العلوم العامة المكثفة', priceBase: 300, image: 'https://cdni.iconscout.com/illustration/premium/thumb/online-education-3414902-2868846.png' }
    ];
    let needUpdateContent = false;
    fakeBooksAndCourses.forEach(fc => { if (!content.find(c => c.id === fc.id)) { content.push(fc); needUpdateContent = true; } });
    if (needUpdateContent) localStorage.setItem('spedia_content', JSON.stringify(content));

    let exams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    if (exams.length > 0 && !exams[0].questionsList) exams = []; // Force update for new schema
    if (exams.length === 0) {
        exams.push({
            id: 201, grade: '10', title: 'امتحان تجريبي شامل (للتقييم)', durationMinutes: 60, type: 'exam', typeName: 'امتحان نهائي',
            questionsList: [
                { type: 'mcq', text: 'ما هي أهمية بناء بنية تحتية قوية للبرمجيات؟', options: ['تسهيل التوسع مستقبلاً', 'زيادة الألوان بالموقع', 'تقليل سرعة النت', 'لا شيء مما سبق'] },
                { type: 'tf', text: 'الجافاسكريبت هي لغة برمجة تعمل على الخوادم والمتصفحات معاً.', answer: 'true' },
                { type: 'essay', text: 'اشرح باختصار كيف تعمل أنظمة إدارة قواعد البيانات العلائقية.' }
            ]
        });
        exams.push({ id: 202, grade: '11', title: 'اختبار قصير - الوحدة الأولى', durationMinutes: 20, type: 'quiz', typeName: 'اختبار قصير', questionsList: [{ type: 'tf', text: 'الأرض مسطحة.', answer: 'false' }] });
        exams.push({ id: 203, grade: '10', title: 'تسميع فيزياء - قوانين نيوتن', durationMinutes: 120, type: 'homework', typeName: 'تسميع', questionsList: [{ type: 'essay', text: 'اكتب نص قانون نيوتن الثالث.' }] });
        localStorage.setItem('spedia_exams', JSON.stringify(exams));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('spedia_country')) localStorage.setItem('spedia_country', 'EG');
    forceFakeData();
    renderMegaMenu();
    applyCountryRules();
    attachGlobalEvents();
    renderCurrentPage();
    injectFloatingAdmin();
    injectCartModal();
    injectBookTransition();
    injectGlobalAnimations();
});

function injectGlobalAnimations() {
    const icons = ['fas fa-book-open', 'fas fa-graduation-cap', 'fas fa-flask', 'fas fa-atom', 'fas fa-microscope', 'fas fa-calculator', 'fas fa-square-root-alt', 'fas fa-globe-americas', 'fas fa-pencil-ruler', 'fas fa-dna', 'far fa-lightbulb'];
    const colors = ['rgba(18, 184, 197, 0.6)', 'rgba(230, 126, 34, 0.5)', 'rgba(232, 28, 255, 0.5)', 'rgba(19, 38, 68, 0.4)'];

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes gentleFloat {
            0% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.15; }
            50% { transform: translateY(-30px) scale(1.05) rotate(10deg); opacity: 0.3; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.05)); }
            100% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.15; }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        let maxH = window.innerHeight;
        // Restricting floating icons primarily to viewport to avoid stretching the page

        for (let i = 0; i < 12; i++) {
            let el = document.createElement('i');
            el.className = icons[Math.floor(Math.random() * icons.length)];
            let size = Math.random() * 30 + 20;

            let color = colors[Math.floor(Math.random() * colors.length)];

            el.style.cssText = `
                position: fixed;
                top: ${Math.random() * 80 + 10}vh;
                left: ${Math.random() * 90 + 5}vw;
                font-size: ${size}px;
                color: ${color};
                z-index: -1;
                pointer-events: none;
                animation: gentleFloat ${Math.random() * 5 + 5}s ease-in-out infinite;
                filter: blur(0.5px);
            `;
            document.body.appendChild(el);
        }
    }, 1500);
}

function injectBookTransition() {
    let loader = document.createElement('div');
    loader.id = 'book-transition';
    loader.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 999999; display: flex; justify-content: center; align-items: center;
        background-color: transparent; pointer-events: none; transition: 0.5s;
    `;
    loader.innerHTML = `
        <div style="position:absolute; top:0; left:0; width:50%; height:100%; background:var(--primary-color); transform-origin: left; transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);" class="book-left"></div>
        <div style="position:absolute; top:0; right:0; width:50%; height:100%; background:var(--primary-color); transform-origin: right; transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);" class="book-right"></div>
        <div style="position:absolute; font-family:'Tajawal'; color:#fff; font-size:40px; font-weight:900; z-index:2; transition: opacity 0.5s;" class="book-logo">حصون</div>
    `;
    document.body.appendChild(loader);

    setTimeout(() => {
        document.querySelector('.book-left').style.transform = 'perspective(1500px) rotateY(-90deg)';
        document.querySelector('.book-right').style.transform = 'perspective(1500px) rotateY(90deg)';
        document.querySelector('.book-logo').style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 100);

    document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', function (e) {
            let target = this.getAttribute('href');
            if (target && !target.startsWith('#') && !target.startsWith('javascript')) {
                e.preventDefault();
                loader.style.display = 'flex';
                document.querySelector('.book-left').style.transform = 'perspective(1500px) rotateY(0deg)';
                document.querySelector('.book-right').style.transform = 'perspective(1500px) rotateY(0deg)';
                document.querySelector('.book-logo').style.opacity = '1';
                setTimeout(() => window.location.href = target, 800);
            }
        });
    });
}

function injectCartModal() {
    if (!document.getElementById('cart-modal')) {
        let modal = document.createElement('div');
        modal.id = 'cart-modal';
        modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:100000; justify-content:center; align-items:center; backdrop-filter:blur(5px);';
        modal.innerHTML = `
            <div style="background:#fff; border-radius:20px; padding:30px; width:90%; max-width:500px; box-shadow:0 20px 50px rgba(0,0,0,0.2);">
                <h3 style="font-size:24px; color:var(--primary-color); margin-bottom:20px; text-align:center;"><i class="fas fa-shopping-cart"></i> سلة المشتريات</h3>
                <ul id="cart-items-list" style="list-style:none; padding:0; margin-bottom:20px; font-weight:bold; color:#121e33;"></ul>
                <form id="cart-form" onsubmit="submitCartOrder(event)">
                    <div style="margin-bottom:15px;">
                        <input id="cart-name" type="text" placeholder="الاسم كامل" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:10px;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <input id="cart-code" type="text" placeholder="الكود (إن وجد)" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:10px;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <select id="cart-country" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:10px;">
                            <option value="">اختر الدولة</option>
                            <option value="السعودية">السعودية</option>
                            <option value="الكويت">الكويت</option>
                            <option value="عمان">عمان</option>
                            <option value="مصر">مصر</option>
                            <option value="الإمارات">الإمارات</option>
                            <option value="قطر">قطر</option>
                        </select>
                    </div>
                    <div style="margin-bottom:15px;">
                        <select id="cart-payment" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:10px;">
                            <option value="">طريقة الدفع</option>
                            <option value="تحويل بنكي">تحويل بنكي</option>
                            <option value="دفع إلكتروني">دفع إلكتروني</option>
                            <option value="نقدي">نقدي (عند التوصيل)</option>
                        </select>
                    </div>
                    <div style="margin-bottom:15px;">
                        <input id="cart-phone" type="text" placeholder="رقم الهاتف للتواصل (واتساب)" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:10px;">
                    </div>
                    <div style="display:flex; gap:10px;">
                        <button type="button" class="btn-primary" style="flex:1; background:#f44336;" onclick="document.getElementById('cart-modal').style.display='none'">إلغاء</button>
                        <button type="submit" class="btn-primary" style="flex:1;">تأكيد وتواصل واتساب</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function renderMegaMenu() {
    const cCode = localStorage.getItem('spedia_country') || 'EG';
    const grid = document.querySelector('.mega-menu-grid');
    if (!grid) return;

    let structure = COUNTRY_SYSTEMS[cCode] || COUNTRY_SYSTEMS['EG'];
    grid.innerHTML = structure.map(stage => `
        <div class="mega-column">
            <h4>${stage.title}</h4>
            ${stage.grades.map(g => `<a href="grade.html?g=${g.val}&name=${encodeURIComponent(g.name)}">${g.name}</a>`).join('')}
        </div>
    `).join('');
}

function injectFloatingAdmin() {
    if (!document.getElementById('floating-admin-btn')) {
        let btn = document.createElement('button');
        btn.id = 'floating-admin-btn';
        btn.innerHTML = '<i class="fas fa-user-shield"></i> الإدارة';
        btn.style.cssText = 'position:fixed; bottom:20px; left:20px; z-index:99999; background:linear-gradient(135deg, #121e33, #1e3c72); color:#fff; border:none; padding:8px 15px; border-radius:20px; font-family:"Tajawal"; font-weight:800; box-shadow:0 10px 20px rgba(0,0,0,0.4); cursor:pointer; font-size:14px; transition:0.3s; display:flex; align-items:center; gap:8px; border:2px solid rgba(255,255,255,0.1);';
        btn.onclick = window.promptAdmin;
        btn.onmouseover = () => btn.style.transform = 'translateY(-8px) scale(1.05)';
        btn.onmouseout = () => btn.style.transform = 'none';
        document.body.appendChild(btn);
    }
}

function attachGlobalEvents() {
    const countryFlag = document.querySelector('.country-flag');
    if (countryFlag) {
        countryFlag.addEventListener('click', (e) => {
            e.preventDefault();
            const existingMenu = document.querySelector('.country-dropdown');
            if (existingMenu) existingMenu.classList.toggle('show');
        });
    }

    const countryLinks = document.querySelectorAll('.country-dropdown a');
    countryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const code = e.currentTarget.getAttribute('data-code');
            localStorage.setItem('spedia_country', code);
            window.location.reload(); // refresh current page instead of redirecting to index.html
        });
    });

    const btnDiscover = document.querySelector('.btn-discover');
    if (btnDiscover) {
        btnDiscover.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'explore.html';
        });
    }

    const scrollBtn = document.querySelector('.scroll-top-btn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) scrollBtn.classList.add('visible');
            else scrollBtn.classList.remove('visible');
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function applyCountryRules() {
    const cCode = localStorage.getItem('spedia_country') || 'EG';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let text = getDialect(key, cCode);
        if (text) el.innerHTML = text;
    });

    const flagImages = {
        'KW': 'https://flagcdn.com/kw.svg',
        'SA': 'https://flagcdn.com/sa.svg',
        'AE': 'https://flagcdn.com/ae.svg',
        'QA': 'https://flagcdn.com/qa.svg',
        'OM': 'https://flagcdn.com/om.svg',
        'EG': 'https://flagcdn.com/eg.svg'
    };
    const mainFlag = document.querySelector('.country-flag img');
    if (mainFlag) mainFlag.src = flagImages[cCode] || flagImages['EG'];
}

function renderPrice(priceBase) {
    const cCode = localStorage.getItem('spedia_country') || 'EG';
    const info = RATES[cCode] || RATES['EG'];
    const converted = (priceBase * info.rate).toFixed(2);
    let txt = converted.endsWith('.00') ? converted.slice(0, -3) : converted;
    return `${txt} ${info.cur}`;
}

function renderCurrentPage() {
    const path = window.location.pathname;

    if (path.includes('grade.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const g = urlParams.get('g') || 10;
        const name = urlParams.get('name') || `الصف ${g}`;
        if (document.getElementById('grade-title')) document.getElementById('grade-title').innerText = name;

        let content = JSON.parse(localStorage.getItem('spedia_content') || '[]');
        let books = content.filter(c => c.grade == g && c.type == 'book');
        let courses = content.filter(c => c.grade == g && c.type == 'course');

        const cCode = localStorage.getItem('spedia_country') || 'EG';
        renderCards('books-list', books, "أريد طلب الكتاب", getDialect('req', cCode) || "الطلب الآن");
        renderCards('courses-list', courses, "أريد الاشتراك في", getDialect('req', cCode) || "الاشتراك الآن");
    }
    else if (path.includes('dashboard.html')) {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if (!user) { window.location.href = 'login.html'; return; }

        const elName = document.getElementById('dash-name');
        if (elName) elName.innerText = user.name;

        const elGrade = document.getElementById('dash-grade');
        if (elGrade) elGrade.innerText = `طالب مسجل كود: ${user.code}`;

        loadStudentData(user);
    }
    else if (path.includes('admin.html')) {
        if (sessionStorage.getItem('isAdmin') !== 'yes') {
            window.location.href = 'index.html';
        }
    }

    // Observer Details
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animated');
        });
    });
    document.querySelectorAll('.animate-on-scroll, .subject-card').forEach(el => observer.observe(el));
}

function renderCards(containerId, items, whatsappPrefix, btnText) {
    const cont = document.getElementById(containerId);
    if (!cont) return;
    cont.innerHTML = '';
    if (items.length === 0) {
        cont.innerHTML = '<p style="text-align:center;width:100%;color:#888;font-weight:bold;padding:40px;">لا يوجد محتوى لهذا الصف حالياً. الإدارة ستضيفه قريباً.</p>';
        return;
    }
    items.forEach(item => {
        let div = document.createElement('div');
        div.className = 'subject-card animate-on-scroll';

        let btnHtml = '';
        if (item.type === 'course') {
            let unlocked = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
            if (unlocked.includes(item.title)) {
                let ytLink = item.youtubeUrl || '#';
                btnHtml = `<button onclick="window.open('${ytLink}', '_blank')" class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px; background:linear-gradient(135deg, #4caf50, #2e7d32);"><i class="fas fa-play-circle" style="font-size:24px;"></i> شاهد الفيديو الآن </button>`;
            } else {
                btnHtml = `<button onclick="unlockCourse('${item.title}', '${item.courseCode || ''}')" class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px; background:linear-gradient(135deg, #f44336, #e53935);"><i class="fas fa-lock" style="font-size:24px;"></i> فتح الكورس السري </button>`;
            }
        } else {
            btnHtml = `<button onclick="addToCart('${item.title}', '${renderPrice(item.priceBase)}', '${btnText}')" class="btn-primary w-100" style="width:100%; padding:15px; border-radius:12px; font-size:18px;"><i class="fas fa-cart-plus" style="font-size:24px;"></i> إضافة للسلة </button>`;
        }

        let imgStyle = item.type === 'course'
            ? 'object-fit:cover; width:100%; height:100%; position:absolute; top:0; left:0;'
            : 'object-fit:contain; height:80%; position:absolute; top:10%; left:0; right:0; margin:auto; filter:drop-shadow(0 15px 15px rgba(0,0,0,0.15));';
        let ytOverlay = item.type === 'course'
            ? '<div style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.4); display:flex; justify-content:center; align-items:center; pointer-events:none;"><i class="fab fa-youtube" style="color:red; font-size:60px; filter:drop-shadow(0 5px 10px rgba(0,0,0,0.5));"></i></div>'
            : '';

        div.innerHTML = `
            <div class="subject-cover" style="background:linear-gradient(135deg, #e8fbff, #f4f7fa); height:180px; position:relative; overflow:hidden;">
                <img src="${item.image}" style="${imgStyle} transition:0.3s;" class="hover-scale">
                ${ytOverlay}
            </div>
            <div class="subject-body" style="text-align:center; padding:25px;">
                <h3 style="font-size:20px; font-weight:800; color:var(--text-dark); margin-bottom:10px;">${item.title}</h3>
                <h4 class="highlight mt-10" style="font-size:26px; font-weight:900; margin-bottom:20px;">${renderPrice(item.priceBase)}</h4>
                ${btnHtml}
            </div>
        `;
        cont.appendChild(div);
    });
}

function sendWhatsApp(msg) {
    window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
}

function openCart(e) {
    if (e) e.preventDefault();
    let cart = JSON.parse(localStorage.getItem('spedia_cart') || '[]');
    if (cart.length === 0) {
        alert("سلة المشتريات فارغة. اختر الكورس أو الكتاب أولاً.");
        return;
    }
    document.getElementById('cart-modal').style.display = 'flex';
    document.getElementById('cart-items-list').innerHTML = cart.map(c => `<li>${c.title} - ${c.price}</li>`).join('');
}

function addToCart(title, price, typeText) {
    let cart = JSON.parse(localStorage.getItem('spedia_cart') || '[]');
    cart.push({ title: title, price: price, type: typeText });
    localStorage.setItem('spedia_cart', JSON.stringify(cart));
    alert("تم الإضافة إلى السلة!");
}

window.submitCartOrder = function (e) {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem('spedia_cart') || '[]');
    let name = document.getElementById('cart-name').value;
    let code = document.getElementById('cart-code').value;
    let country = document.getElementById('cart-country').value;
    let payment = document.getElementById('cart-payment').value;
    let phone = document.getElementById('cart-phone').value;

    let itemsStr = cart.map(c => c.title).join(' , ');
    let msg = `طلب جديد:\nالاسم: ${name}\nالكود: ${code || 'لا يوجد'}\nالدولة: ${country}\nطريقة الدفع: ${payment}\nللتواصل: ${phone}\nالمطلوب: ${itemsStr}`;

    localStorage.removeItem('spedia_cart');
    document.getElementById('cart-modal').style.display = 'none';
    sendWhatsApp(msg);
}

window.submitExam = function (title) {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return alert("الرجاء تسجيل الدخول أولاً");

    let allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    let currentExam = allExams.find(ex => ex.title === title);

    // Fallback if exam object not found
    if (!currentExam) {
        currentExam = { questionsList: [], durationMinutes: 15 };
    }

    let modal = document.getElementById('quiz-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quiz-modal';
        modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:100000; display:flex; justify-content:center; align-items:center; backdrop-filter:blur(10px); opacity:0; transition:0.3s; pointer-events:none;';
        document.body.appendChild(modal);
    }

    let questionsHtml = '';

    if (currentExam.questionsList && currentExam.questionsList.length > 0) {
        questionsHtml = currentExam.questionsList.map((q, idx) => {
            let innerHtml = '';

            if (typeof q === 'string') {
                // Backward compatibility for old exams
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <textarea rows="3" placeholder="اكتب إجابتك..." style="width:100%; padding:15px; border-radius:10px; border:1px solid #ccc; font-family:'Tajawal'; resize:vertical; outline:none; font-size:16px;"></textarea>
                    </div>
                `;
                return `
                <div class="question-block" style="background:#fff; padding:25px; border-radius:15px; margin-bottom:20px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="font-size:20px; color:#132644; margin-bottom:20px; font-weight:800;">${idx + 1}. ${q}</h3>
                    ${innerHtml}
                </div>`;
            }

            if (q.type === 'mcq') {
                let optionsHtml = '';
                let shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);
                shuffledOpts.forEach((opt, optIdx) => {
                    optionsHtml += `<label class="quiz-option"><input type="radio" name="qans_${idx}" value="${opt}"> <span class="custom-radio"></span> ${opt}</label>`;
                });
                innerHtml = `<div style="display:flex; flex-direction:column; gap:12px;">${optionsHtml}</div>`;
            } else if (q.type === 'tf') {
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <label class="quiz-option"><input type="radio" name="qans_${idx}" value="true"> <span class="custom-radio"></span> العبارة صحيحة</label>
                        <label class="quiz-option"><input type="radio" name="qans_${idx}" value="false"> <span class="custom-radio"></span> العبارة خاطئة</label>
                    </div>
                `;
            } else if (q.type === 'essay') {
                innerHtml = `
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <textarea id="qans_${idx}" rows="4" placeholder="اكتب إجابتك هنا بوضوح مفصل..." style="width:100%; padding:15px; border-radius:10px; border:1px solid #ccc; font-family:'Tajawal'; resize:vertical; outline:none; font-size:16px;"></textarea>
                    </div>
                `;
            }

            return `
                <div class="question-block" style="background:#fff; padding:25px; border-radius:15px; margin-bottom:20px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="font-size:20px; color:#132644; margin-bottom:20px; font-weight:800;">${idx + 1}. ${q.text}</h3>
                    ${innerHtml}
                </div>
            `;
        }).join('');
    } else {
        questionsHtml = '<p style="text-align:center; color:#888;">لم يتم إضافة أسئلة لهذا الاختبار بعد.</p>';
    }

    modal.innerHTML = `
        <div style="background:#fff; width:90%; max-width:700px; border-radius:25px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.3); transform:translateY(30px); transition:0.4s; display:flex; flex-direction:column; max-height:90vh;">
            <div style="background:linear-gradient(135deg, #12b8c5, #1e3c72); padding:30px; text-align:center; color:#fff; position:relative;">
                <i class="fas fa-times" onclick="closeQuizSystem()" style="position:absolute; top:20px; right:20px; font-size:24px; cursor:pointer; opacity:0.8; transition:0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8"></i>
                <h2 style="margin:0; font-weight:900; font-size:28px;">${title}</h2>
                <div style="margin-top:10px; font-size:16px; opacity:0.9;"><i class="fas fa-clock"></i> الوقت المتبقي: <span id="quiz-timer">${currentExam.durationMinutes || 15}:00</span></div>
            </div>
            <div style="padding:40px 30px; overflow-y:auto; background:#f4f7fa; flex:1;">
                ${questionsHtml}
            </div>
            <div style="padding:20px 30px; background:#fff; border-top:1px solid #eee; text-align:left;">
                <button onclick="finishQuiz('${title}')" class="btn-primary" style="background:linear-gradient(135deg, #4caf50, #2e7d32); width:100%; font-size:22px; padding:15px;">تسليم الإجابات وإغلاق <i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    if (!document.getElementById('quiz-dynamic-styles')) {
        let st = document.createElement('style');
        st.id = 'quiz-dynamic-styles';
        st.innerHTML = `
            .quiz-option { display:flex; align-items:center; gap:15px; cursor:pointer; padding:15px; border-radius:10px; border:1px solid #eeeeee; transition:0.3s; font-weight:600; color:#6a7c92; background:#fafafa; }
            .quiz-option:hover { background:#f4f7fa; border-color:#cwd; }
            .quiz-option input { display:none; }
            .custom-radio { width:24px; height:24px; border:2px solid #ccc; border-radius:50%; display:inline-block; position:relative; }
            .quiz-option input:checked + .custom-radio { border-color:#12b8c5; background:#12b8c5; }
            .quiz-option input:checked + .custom-radio::after { content:''; position:absolute; top:6px; left:6px; width:8px; height:8px; background:#fff; border-radius:50%; }
            .quiz-option input:checked ~ span { color:#12b8c5; font-weight:800; }
        `;
        document.head.appendChild(st);
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
        modal.firstElementChild.style.transform = 'translateY(0)';
    });
}

window.closeQuizSystem = function () {
    let modal = document.getElementById('quiz-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        modal.firstElementChild.style.transform = 'translateY(30px)';
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

window.finishQuiz = function (title) {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return;

    let allExams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    let currentExam = allExams.find(ex => ex.title === title);
    let answers = {};
    if (currentExam && currentExam.questionsList) {
        currentExam.questionsList.forEach((q, idx) => {
            if (q.type === 'essay' || typeof q === 'string') {
                let ta = document.getElementById(`qans_${idx}`);
                answers[idx] = ta ? ta.value : '';
            } else {
                let checked = document.querySelector(`input[name="qans_${idx}"]:checked`);
                answers[idx] = checked ? checked.value : '';
            }
        });
    }

    let subs = JSON.parse(localStorage.getItem('spedia_submissions') || '[]');
    let existsIndex = subs.findIndex(s => s.code === user.code && s.examTitle === title);
    if (existsIndex >= 0) {
        subs.splice(existsIndex, 1);
    }

    subs.push({
        code: user.code,
        name: user.name,
        examTitle: title,
        date: new Date().toLocaleDateString('ar-EG'),
        status: "قيد الانتظار",
        answers: answers
    });
    localStorage.setItem('spedia_submissions', JSON.stringify(subs));

    alert('تم إنهاء الاختبار وإرساله بنجاح! يتم تصحيحه الآن من قبل المعلم. 🎓');
    closeQuizSystem();
    if (window.location.pathname.includes('grade.html') || window.location.pathname.includes('explore.html')) {
        setTimeout(() => window.location.reload(), 500);
    }
}

/* LOGIN SYSTEM */
window.handleLogin = function (e) {
    e.preventDefault();
    const codeInlet = document.getElementById('code-input').value.trim();
    if (!codeInlet) return alert("يرجى إدخال الكود");

    let codes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');
    let users = JSON.parse(localStorage.getItem('spedia_users') || '[]');

    let theCode = codes.find(c => c.code === codeInlet);
    if (theCode) {
        if (theCode.isUsed) {
            let theUser = users.find(u => u.code === codeInlet);
            if (theUser) {
                localStorage.setItem('spedia_currentUser', JSON.stringify(theUser));
                window.location.href = 'dashboard.html';
            } else {
                alert("للأسف، الكود مستخدم بالفعل بيانات الحساب مفقودة.");
            }
        } else {
            document.getElementById('register-modal').style.display = 'flex';
            window.tempCode = codeInlet;
        }
    } else {
        alert("رمز التفعيل خاطئ أو غير مُسجل في منصة حصون.");
    }
}

window.closeRegisterModal = function () {
    document.getElementById('register-modal').style.display = 'none';
}

window.completeRegister = function (e) {
    e.preventDefault();
    let name = document.getElementById('reg-name').value;
    let phone = document.getElementById('reg-phone').value;
    let grade = document.getElementById('reg-grade').value;

    let users = JSON.parse(localStorage.getItem('spedia_users') || '[]');
    let codes = JSON.parse(localStorage.getItem('spedia_codes') || '[]');

    let theCode = codes.find(c => c.code === window.tempCode);
    if (theCode) {
        theCode.isUsed = true;
        localStorage.setItem('spedia_codes', JSON.stringify(codes));
    }

    let newUser = { code: window.tempCode, name, phone, grade, role: 'student' };
    users.push(newUser);
    localStorage.setItem('spedia_users', JSON.stringify(users));

    localStorage.setItem('spedia_currentUser', JSON.stringify(newUser));
    window.location.href = 'dashboard.html';
}

window.requestCode = function () {
    sendWhatsApp("السلام عليكم، أريد طلب كود اشتراك جديد في منصة حصون التعليمية.");
}

/* DASHBOARD LOGIC */
window.loadStudentData = function (user) {
    let profileImg = localStorage.getItem('spedia_profile_img_' + user.code);
    if (profileImg) {
        let sideImg = document.getElementById('sidebar-profile-img');
        if (sideImg) sideImg.src = profileImg;
    }

    let exams = JSON.parse(localStorage.getItem('spedia_exams') || '[]');
    let myExams = exams.filter(ex => String(ex.grade) === String(user.grade));
    let listExams = document.getElementById('student-exams');
    if (listExams) {
        if (myExams.length) {
            listExams.innerHTML = myExams.map(ex => `
                <div class="subject-mini-card animate-on-scroll" style="animation-delay:0.1s; border:1px solid #eee; border-radius:15px; margin-bottom:15px; background:#fff;">
                    <div class="icon-box" style="background:linear-gradient(135deg, #f44336, #ff1744);color:#fff; padding:15px; border-radius:15px;"><i class="fas fa-file-signature"></i></div>
                    <div class="info" style="padding:0 15px; flex:1;">
                        <h4 style="margin-bottom:5px; font-weight:800;">${ex.title}</h4>
                        <div style="display:flex; gap:10px; margin-top:5px;">
                            <span style="font-size:12px; background:#e8fbff; color:var(--primary-color); padding:3px 10px; border-radius:10px; font-weight:bold;">${ex.typeName || 'امتحان'}</span>
                            <span style="font-size:12px; color:#6a7c92; font-weight:700;"><i class="fas fa-clock"></i> وقت الحل: ${ex.durationMinutes} دقيقة</span>
                        </div>
                    </div>
                    <button class="btn-icon" style="margin-left:15px; background:#e8f5e9; color:#4caf50; border:none;" onclick="submitExam('${ex.title}')"><i class="fas fa-play"></i></button>
                </div>
            `).join('');
        } else {
            listExams.innerHTML = '<p style="color:#888; font-weight:600;">لا يوجد لديك امتحانات مطروحة أو واجبات حالياً.</p>';
        }
    }

    let results = JSON.parse(localStorage.getItem('spedia_results') || '[]');
    let myResults = results.filter(r => r.code === user.code);
    let listResults = document.getElementById('student-results');
    if (listResults) {
        if (myResults.length) {
            listResults.innerHTML = myResults.map(r => `
                <div class="animate-on-scroll" style="background:#fff; border-right:6px solid #9c27b0; border-radius:15px; padding:20px; margin-bottom:15px; box-shadow:0 8px 25px rgba(0,0,0,0.06); display:flex; gap:15px; align-items:center;">
                    <i class="fas fa-check-circle" style="color:#9c27b0; font-size:36px; background:#f3e5f5; padding:15px; border-radius:50%;"></i> 
                    <div class="res-content">
                        <div class="res-title" style="font-weight:900; color:#121e33; font-size:18px; margin-bottom:5px;">${r.examTitle}</div>
                        <div style="font-size:16px;color:#4caf50; font-weight:900;">النتيجة: ${r.grade}</div>
                        <div style="font-size:14px;color:#888; font-weight:600; margin-top:5px;"><i class="far fa-calendar-alt"></i> ${r.date}</div>
                    </div>
                    <div style="margin-right:auto; padding-left:10px;">
                        <input type="checkbox" onchange="toggleResultStrike(this)" title="حفظ/إخفاء" style="width:24px; height:24px; cursor:pointer; accent-color: #9c27b0;">
                    </div>
                </div>
            `).join('');
        } else {
            listResults.innerHTML = '<p style="color:#888; font-weight:600;">لم يتم إرسال أي نتائج اختبارات لك بعد.</p>';
        }
    }

    let evals = JSON.parse(localStorage.getItem('spedia_evaluations') || '[]');
    let myEvals = evals.filter(ev => ev.code == user.code);
    let listEvals = document.getElementById('student-evals');
    if (listEvals) {
        if (myEvals.length) {
            listEvals.innerHTML = myEvals.map(ev => `
                <div class="animate-on-scroll" style="background:#fff; border-left:6px solid #ff9800; border-radius:15px; padding:20px; margin-bottom:15px; box-shadow:0 8px 25px rgba(0,0,0,0.06); display:flex; gap:15px; align-items:center;">
                    <i class="fas fa-award" style="color:#ff9800; font-size:36px; background:#fff3e0; padding:15px; border-radius:50%;"></i> 
                    <div>
                        <div style="font-weight:900; color:#121e33; font-size:18px; margin-bottom:5px;">${ev.note}</div>
                        <div style="font-size:14px;color:#888; font-weight:600;"><i class="far fa-calendar-alt"></i> ${ev.date}</div>
                    </div>
                </div>
            `).join('');
        } else {
            listEvals.innerHTML = '<p style="color:#888; font-weight:600;">لم يُضف لك فريق الإدارة أي تقييمات استثنائية بعد.</p>';
        }
    }

    // Set attendance days count
    let attendance = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');
    let myAtt = attendance.filter(a => a.code === user.code);
    let attCard = document.getElementById('stat-attendance-days');
    if (attCard) {
        attCard.innerText = myAtt.length;
    }
}

window.showDashTab = function (tabId, el) {
    document.querySelectorAll('.dash-tab-section').forEach(t => t.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
    if (el) {
        document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
        el.parentElement.classList.add('active');
    }
}

window.registerAttendance = function () {
    let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
    if (!user) return;
    let attendance = JSON.parse(localStorage.getItem('spedia_attendance') || '[]');
    const todayDate = new Date().toLocaleDateString('ar-EG');

    if (attendance.find(a => a.code === user.code && a.date === todayDate)) {
        alert("تم تسجيل حضورك مسبقاً لهذا اليوم. استمر في المذاكرة! 👍");
        return;
    }

    attendance.push({
        code: user.code,
        name: user.name,
        date: todayDate,
        time: new Date().toLocaleTimeString('ar-EG')
    });
    localStorage.setItem('spedia_attendance', JSON.stringify(attendance));
    alert("ممتاز! تم تسجيل حضورك بنجاح في سجلات منصة حصون للإدارة 🎓");
}

window.logout = function () {
    localStorage.removeItem('spedia_currentUser');
    window.location.href = 'index.html';
}

window.toggleSidebar = function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

window.promptAdmin = function () {
    let pass = prompt("بوابة حصون للإدارة - يرجى كتابة الرقم السري (الأساسي أو المساعد):");
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

window.toggleResultStrike = function (chk) {
    let parent = chk.closest('.animate-on-scroll');
    let title = parent.querySelector('.res-title');
    if (chk.checked) {
        // Upon click (checkbox checked), exam name is NOT DELETED (strike-through but kept)
        title.style.textDecoration = 'line-through';
        title.style.color = '#888';
        parent.style.opacity = '0.7';
    } else {
        // when click removed (un-checked), exam name is NOT deleted normally either?
        title.style.textDecoration = 'none';
        title.style.color = '#121e33';
        parent.style.opacity = '1';
    }
}

window.updateProfileImg = function (input) {
    if (input.files && input.files[0]) {
        let user = JSON.parse(localStorage.getItem('spedia_currentUser'));
        if (!user) return alert('يرجى تسجيل الدخول أولاً');

        let reader = new FileReader();
        reader.onload = function (e) {
            let imgData = e.target.result;
            localStorage.setItem('spedia_profile_img_' + user.code, imgData);
            document.getElementById('sidebar-profile-img').src = imgData;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

window.unlockCourse = function (title, code) {
    if (!code || code.trim() === '' || code === 'undefined') {
        alert('هذا الكورس قيد التجهيز أو الكود السري مفقود.');
        return;
    }
    let input = prompt('هذا الكورس محمي بقفل 🔒.\\nالرجاء إدخال كود الكورس السري لفتحه:');
    if (input === code) {
        alert('تم فتح كورس "' + title + '" بنجاح! 🎉\\n(تمت المطابقة، يمكنك الآن مشاهدة المحتوى)');
        let cart = JSON.parse(localStorage.getItem('spedia_unlocked') || '[]');
        cart.push(title);
        localStorage.setItem('spedia_unlocked', JSON.stringify(cart));
        window.location.reload();
    } else if (input !== null) {
        alert('الكود الذي أدخلته غير صحيح. يرجى التواصل مع الإدارة.');
    }
}

