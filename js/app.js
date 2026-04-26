// =============================================
//  STEP 2026 - App Logic
//  عايد أكاديمي | الأزمنة لاختبار STEP 2026
// =============================================

// ===== STATE =====
const AppState = {
  currentSection: null,
  currentTab: 'summary',
  quizAnswers: {},       // { questionIndex: choiceIndex }
  quizResults: {},       // { sectionId: { score, total, answers } }
  scores: JSON.parse(localStorage.getItem('step_scores') || '{}')
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  loadSavedScores();
  initScrollAnimations();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.tense-card, .course-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
  });
}

// ===== LOAD SAVED SCORES =====
function loadSavedScores() {
  const scores = AppState.scores;
  Object.keys(scores).forEach(sectionId => {
    const data = scores[sectionId];
    updateCardProgress(sectionId, data.score, data.total);
  });
}

function updateCardProgress(sectionId, score, total) {
  const pct = Math.round((score / total) * 100);
  const progEl = document.getElementById(`prog-${sectionId}`);
  const scoreEl = document.getElementById(`score-${sectionId}`);
  if (progEl) progEl.style.width = pct + '%';
  if (scoreEl) {
    scoreEl.textContent = `${score}/${total} (${pct}%)`;
    scoreEl.classList.add('completed');
  }
}

// ===== OPEN SECTION MODAL =====
function openSection(sectionId) {
  const data = TENSES_DATA[sectionId];
  if (!data) return;

  AppState.currentSection = sectionId;
  AppState.currentTab = 'summary';
  AppState.quizAnswers = {};

  const modal = document.getElementById('sectionModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = buildModalHTML(sectionId, data);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll to top
  content.scrollTop = 0;

  // Activate summary tab by default
  switchTab('summary');
}

function closeSection() {
  document.getElementById('sectionModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== BUILD MODAL HTML =====
function buildModalHTML(sectionId, data) {
  return `
    <div class="modal-header">
      <div class="modal-header-info">
        <h2>${data.emoji} ${data.title}</h2>
        <p>${data.titleEn} — النماذج 51 و52</p>
      </div>
      <button class="modal-close" onclick="closeSection()" aria-label="إغلاق">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="modal-tabs">
      <button class="tab-btn active" id="tab-summary" onclick="switchTab('summary')">
        <i class="fas fa-book-open"></i> ✨ الملخص
      </button>
      <button class="tab-btn" id="tab-quiz" onclick="switchTab('quiz')">
        <i class="fas fa-question-circle"></i> ✨ الكويز (20 سؤال)
      </button>
    </div>

    <div class="tab-content active" id="content-summary">
      ${buildSummaryHTML(data.summary)}
    </div>

    <div class="tab-content" id="content-quiz">
      ${buildQuizHTML(sectionId, data.quiz)}
    </div>
  `;
}

// ===== BUILD SUMMARY HTML =====
function buildSummaryHTML(summary) {
  const usesHTML = summary.uses.map(u => `
    <div class="info-item">
      <strong>${u.title}</strong>
      <span>${u.example}</span>
      <span style="color:#10b981;font-size:0.78rem;">${u.translation}</span>
    </div>
  `).join('');

  const signalsHTML = summary.signals.map(s => `<span class="signal-tag">${s}</span>`).join('');

  return `
    <div class="summary-section">
      <div class="summary-badge">📌 نظرة عامة</div>
      <p style="color:#4a5568;font-size:0.95rem;line-height:1.8;">${summary.intro}</p>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-code"></i> الصيغة (Formula)</h3>
      <div class="formula-box">${summary.formula}</div>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-list-check"></i> متى نستخدمه؟</h3>
      <div class="info-grid">${usesHTML}</div>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-tags"></i> الكلمات الدليلية (Signal Words)</h3>
      <div class="signals-list">${signalsHTML}</div>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-ban"></i> صيغة النفي</h3>
      <div class="formula-box" style="font-size:0.85rem;">${summary.negation}</div>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-question"></i> صيغة السؤال</h3>
      <div class="formula-box" style="font-size:0.85rem;">${summary.question}</div>
    </div>

    <div class="summary-section">
      <div class="tip-box"><strong>💡 نصيحة STEP:</strong> ${summary.tip}</div>
      <div class="warning-box"><strong>⚠️ تحذير:</strong> ${summary.warning}</div>
    </div>

    <div class="summary-section">
      <h3><i class="fas fa-star"></i> أسلوب STEP في الاختبار</h3>
      <div class="example-box">
        <p>${summary.stepStyle}</p>
      </div>
    </div>

    <div style="text-align:center;margin-top:1.5rem;">
      <button class="btn btn-primary btn-lg" onclick="switchTab('quiz')">
        <i class="fas fa-play"></i> ابدأ الكويز الآن
      </button>
    </div>
  `;
}

// ===== BUILD QUIZ HTML =====
function buildQuizHTML(sectionId, questions) {
  const questionsHTML = questions.map((q, i) => {
    const letters = ['A', 'B', 'C', 'D'];
    const choicesHTML = q.choices.map((c, ci) => `
      <button class="choice-btn" id="choice-${i}-${ci}"
        onclick="selectAnswer(${i}, ${ci}, ${q.correct})"
        data-question="${i}" data-choice="${ci}">
        <span class="choice-letter">${letters[ci]}</span>
        ${escapeHTML(c)}
      </button>
    `).join('');

    return `
      <div class="question-card" id="qcard-${i}">
        <div class="question-number">السؤال ${i + 1} من ${questions.length}</div>
        <p class="question-text">${escapeHTML(q.q)}</p>
        <div class="choices-grid">${choicesHTML}</div>
        <div class="feedback-msg" id="feedback-${i}" style="display:none;"></div>
      </div>
    `;
  }).join('');

  return `
    <div class="quiz-header">
      <span class="quiz-progress-info" id="quiz-progress-text">
        أجب عن السؤال التالي
      </span>
      <span class="quiz-score-live" id="quiz-score-live">
        النتيجة: 0/${questions.length}
      </span>
    </div>
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" id="quiz-progress-fill" style="width:0%"></div>
    </div>

    <div id="quiz-questions">
      ${questionsHTML}
    </div>

    <div style="text-align:center;margin-top:2rem;">
      <button class="btn btn-success btn-lg" id="finish-quiz-btn"
        onclick="finishQuiz('${sectionId}')" style="display:none;">
        <i class="fas fa-flag-checkered"></i> عرض النتيجة النهائية
      </button>
    </div>

    <div style="text-align:center;margin-top:1rem;">
      <button class="btn btn-ghost btn-sm" onclick="switchTab('summary')">
        <i class="fas fa-arrow-right"></i> العودة للملخص
      </button>
    </div>
  `;
}

// ===== SWITCH TAB =====
function switchTab(tab) {
  AppState.currentTab = tab;

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const tabBtn = document.getElementById(`tab-${tab}`);
  const tabContent = document.getElementById(`content-${tab}`);

  if (tabBtn) tabBtn.classList.add('active');
  if (tabContent) tabContent.classList.add('active');

  // Scroll modal to top
  const modalBox = document.getElementById('modalContent');
  if (modalBox) modalBox.scrollTop = 0;
}

// ===== SELECT ANSWER =====
function selectAnswer(questionIndex, choiceIndex, correctIndex) {
  // Already answered?
  if (AppState.quizAnswers.hasOwnProperty(questionIndex)) return;

  AppState.quizAnswers[questionIndex] = choiceIndex;
  const sectionId = AppState.currentSection;
  const data = TENSES_DATA[sectionId];
  const question = data.quiz[questionIndex];
  const isCorrect = choiceIndex === correctIndex;

  // Disable all choices for this question
  const qCard = document.getElementById(`qcard-${questionIndex}`);
  const allChoices = qCard.querySelectorAll('.choice-btn');
  allChoices.forEach(btn => btn.disabled = true);

  // Mark correct and wrong
  const chosenBtn = document.getElementById(`choice-${questionIndex}-${choiceIndex}`);
  const correctBtn = document.getElementById(`choice-${questionIndex}-${correctIndex}`);

  correctBtn.classList.add('correct');
  if (!isCorrect) {
    chosenBtn.classList.add('wrong');
    qCard.classList.add('answered-wrong');
  } else {
    qCard.classList.add('answered-correct');
  }

  // Show feedback
  const feedbackEl = document.getElementById(`feedback-${questionIndex}`);
  feedbackEl.style.display = 'flex';

  if (isCorrect) {
    feedbackEl.className = 'feedback-msg feedback-correct';
    feedbackEl.innerHTML = `<i class="fas fa-check-circle"></i> <span>إجابة صحيحة! <span class="explanation-text">${question.explanation}</span></span>`;
  } else {
    feedbackEl.className = 'feedback-msg feedback-wrong';
    feedbackEl.innerHTML = `<i class="fas fa-times-circle"></i> <span>إجابة خاطئة — <span class="explanation-text">${question.explanation}</span></span>`;
  }

  // Update progress
  updateQuizProgress(sectionId);

  // Show finish button if all answered
  const totalQ = data.quiz.length;
  const answeredCount = Object.keys(AppState.quizAnswers).length;

  if (answeredCount === totalQ) {
    const finishBtn = document.getElementById('finish-quiz-btn');
    if (finishBtn) {
      finishBtn.style.display = 'inline-flex';
      finishBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ===== UPDATE QUIZ PROGRESS =====
function updateQuizProgress(sectionId) {
  const data = TENSES_DATA[sectionId];
  const totalQ = data.quiz.length;
  const answeredCount = Object.keys(AppState.quizAnswers).length;

  let correctCount = 0;
  Object.entries(AppState.quizAnswers).forEach(([qi, ci]) => {
    if (parseInt(ci) === data.quiz[parseInt(qi)].correct) correctCount++;
  });

  const pct = Math.round((answeredCount / totalQ) * 100);

  const progressFill = document.getElementById('quiz-progress-fill');
  const progressText = document.getElementById('quiz-progress-text');
  const scoreLive = document.getElementById('quiz-score-live');

  if (progressFill) progressFill.style.width = pct + '%';
  if (progressText) progressText.textContent = `أجبت على ${answeredCount} من ${totalQ} سؤال`;
  if (scoreLive) scoreLive.textContent = `النتيجة: ${correctCount}/${totalQ}`;
}

// ===== FINISH QUIZ =====
function finishQuiz(sectionId) {
  const data = TENSES_DATA[sectionId];
  const totalQ = data.quiz.length;

  let correctCount = 0;
  Object.entries(AppState.quizAnswers).forEach(([qi, ci]) => {
    if (parseInt(ci) === data.quiz[parseInt(qi)].correct) correctCount++;
  });

  // Save score
  AppState.scores[sectionId] = { score: correctCount, total: totalQ };
  localStorage.setItem('step_scores', JSON.stringify(AppState.scores));
  updateCardProgress(sectionId, correctCount, totalQ);

  // Close section modal
  closeSection();

  // Show result modal
  showResultModal(sectionId, correctCount, totalQ, data);
}

// ===== SHOW RESULT MODAL =====
function showResultModal(sectionId, score, total, data) {
  const pct = Math.round((score / total) * 100);
  const wrong = total - score;

  // Determine level
  let levelClass, levelText, emoji;
  if (pct >= 90) {
    levelClass = 'level-excellent'; levelText = '🏆 ممتاز — مستواك رائع!'; emoji = '🎉';
  } else if (pct >= 75) {
    levelClass = 'level-good'; levelText = '👍 جيد جداً — تحتاج مراجعة بسيطة'; emoji = '😊';
  } else if (pct >= 55) {
    levelClass = 'level-average'; levelText = '📚 متوسط — يحتاج تطوير'; emoji = '💪';
  } else {
    levelClass = 'level-weak'; levelText = '⚠️ ضعيف — تحتاج تدريباً مكثفاً'; emoji = '📖';
  }

  // Recommend course
  const course = recommendCourse(pct);

  const modal = document.getElementById('resultModal');
  const content = document.getElementById('resultContent');

  content.innerHTML = `
    <div class="result-header">
      <span class="result-emoji">${emoji}</span>
      <div class="result-score-circle">
        <span class="score-num">${pct}%</span>
        <span class="score-label">نسبة النجاح</span>
      </div>
      <h2>${data.emoji} ${data.title}</h2>
      <p>النماذج 51 و52 — اختبار STEP 2026</p>
    </div>

    <div class="result-body">
      <div class="result-level">
        <span class="level-badge ${levelClass}">${levelText}</span>
      </div>

      <div class="result-stats">
        <div class="result-stat">
          <span class="s-num" style="color:#10b981;">${score}</span>
          <span class="s-label">إجابات صحيحة</span>
        </div>
        <div class="result-stat">
          <span class="s-num" style="color:#ef4444;">${wrong}</span>
          <span class="s-label">إجابات خاطئة</span>
        </div>
        <div class="result-stat">
          <span class="s-num" style="color:#f5831f;">${total}</span>
          <span class="s-label">إجمالي الأسئلة</span>
        </div>
      </div>

      ${buildCourseRecommendation(pct, course)}

      <div class="divider"></div>

      <div class="result-actions">
        <button class="btn btn-primary" onclick="retryQuiz('${sectionId}')">
          <i class="fas fa-redo"></i> إعادة الاختبار
        </button>
        <button class="btn btn-gold" onclick="showStudyPlan('${course.id}', '${data.title}', ${pct})">
          <i class="fas fa-calendar-alt"></i> خطة المذاكرة
        </button>
        <button class="btn btn-ghost" onclick="closeResultModal()">
          <i class="fas fa-home"></i> العودة للرئيسية
        </button>
      </div>

      <div style="margin-top:1.5rem;">
        <div class="share-quran" style="margin-bottom:1rem;">
          <i class="fas fa-quran"></i>
          <p>«وَقُل رَّبِّ زِدْنِي عِلْمًا» — سورة طه: 114</p>
        </div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;justify-content:center;">
          <button class="share-btn whatsapp" style="font-size:0.8rem;padding:0.5rem 1rem;" onclick="shareResultWhatsApp('${data.title}', ${score}, ${total}, ${pct})">
            <i class="fab fa-whatsapp"></i> شارك نتيجتك
          </button>
          <button class="share-btn telegram" style="font-size:0.8rem;padding:0.5rem 1rem;" onclick="shareResultTelegram('${data.title}', ${score}, ${total}, ${pct})">
            <i class="fab fa-telegram"></i> تيليجرام
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== RECOMMEND COURSE =====
function recommendCourse(pct) {
  if (pct < 56) return COURSES[0]; // Premium
  if (pct < 71) return COURSES[1]; // Intensive
  return COURSES[2]; // Comprehensive
}

// ===== BUILD COURSE RECOMMENDATION =====
function buildCourseRecommendation(pct, course) {
  let urgencyText = '';
  if (pct < 56) {
    urgencyText = `مستواك الحالي يُشير إلى أنك بحاجة إلى تأسيس قوي شامل لتحقيق درجة عالية في STEP 2026.
    أكاديمية عايد توصي بـ:`;
  } else if (pct < 71) {
    urgencyText = `مستواك جيد لكنك تحتاج مراجعة مركزة قبل الاختبار. الدورة المثالية لك هي:`;
  } else {
    urgencyText = `مستواك جيد جداً! لتحقيق درجة +90 وضمان أعلى نتيجة ممكنة، ننصحك بـ:`;
  }

  return `
    <div class="course-recommendation">
      <div class="rec-title">
        <i class="fas fa-graduation-cap"></i>
        توصية أكاديمية عايد
      </div>
      <p style="font-size:0.85rem;color:#4a5568;margin-bottom:0.75rem;">${urgencyText}</p>
      <div class="rec-course">${course.icon} ${course.name} — ${course.version}</div>
      <p class="rec-desc">${course.description}</p>
      <a href="${course.link}" target="_blank" class="btn btn-primary" style="width:100%;justify-content:center;">
        <i class="fas fa-external-link-alt"></i> سجّل في الدورة الآن
      </a>
    </div>
  `;
}

function closeResultModal() {
  document.getElementById('resultModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== RETRY QUIZ =====
function retryQuiz(sectionId) {
  closeResultModal();
  AppState.quizAnswers = {};
  openSection(sectionId);
  setTimeout(() => switchTab('quiz'), 100);
}

// ===== SHOW STUDY PLAN =====
function showStudyPlan(courseId, sectionTitle, pct) {
  closeResultModal();

  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const plan = STUDY_PLANS[courseId] || STUDY_PLANS.premium;
  const modal = document.getElementById('planModal');
  const content = document.getElementById('planContent');

  const weeksHTML = plan.weeks.map(week => `
    <div class="plan-week">
      <div class="plan-week-header">
        <i class="fas fa-calendar-week"></i>
        ${week.title}
      </div>
      <div class="plan-week-body">
        ${week.days.map(d => `
          <div class="plan-day">
            <span class="plan-day-num">${d.day}</span>
            <span class="plan-day-task">${d.task}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="plan-header">
      <button class="modal-close" onclick="closeStudyPlan()" style="position:absolute;top:1rem;left:1rem;">
        <i class="fas fa-times"></i>
      </button>
      <h2>📅 خطة المذاكرة المخصصة</h2>
      <p>${course.icon} ${course.name} | نتيجتك في "${sectionTitle}": ${pct}%</p>
    </div>

    <div class="plan-body">
      <div class="tip-box" style="margin-bottom:1.5rem;">
        <strong>🎯 هدفك:</strong> تحسين مستواك وتحقيق درجة عالية في STEP 2026 مع ${course.name}
      </div>

      ${weeksHTML}

      <div class="warning-box" style="margin-top:1rem;">
        <strong>⚡ نصيحة:</strong> اشترك في الدورة لمتابعة شرح مفصل مع المدرب — لا تدرس وحدك!
      </div>
    </div>

    <div class="plan-footer">
      <div class="plan-store-link">
        <i class="fas fa-store"></i>
        <span>اشترك في <a href="${course.link}" target="_blank">${course.name}</a> الآن</span>
      </div>
      <div class="plan-share-btns">
        <button class="share-btn whatsapp" style="font-size:0.8rem;padding:0.5rem 0.9rem;"
          onclick="sharePlanWhatsApp('${courseId}', '${sectionTitle}', ${pct})">
          <i class="fab fa-whatsapp"></i> شارك الخطة
        </button>
        <button class="share-btn telegram" style="font-size:0.8rem;padding:0.5rem 0.9rem;"
          onclick="sharePlanTelegram('${courseId}', '${sectionTitle}', ${pct})">
          <i class="fab fa-telegram"></i> تيليجرام
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStudyPlan() {
  document.getElementById('planModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== SHARE FUNCTIONS =====
const SITE_URL = window.location.href.split('?')[0];
const SITE_NAME = 'الأزمنة لاختبار STEP 2026 | عايد أكاديمي';

function shareWhatsApp() {
  const text = `🦋 *${SITE_NAME}*\n\n📚 تجميعات وتسريبات أحدث نماذج STEP 2026 (51 و52)\n✨ ملخصات تفصيلية + 180 سؤال تفاعلي للأزمنة\n\n«مَن دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ»\n\n🔗 ${SITE_URL}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareTwitter() {
  const text = `🦋 ${SITE_NAME}\n\n📚 ملخصات + 180 سؤال تفاعلي لأزمنة اختبار STEP 2026\n\n🔗 ${SITE_URL}\n\n#STEP2026 #اختبار_STEP #عايد_أكاديمي`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
}

function shareTelegram() {
  const text = `🦋 *${SITE_NAME}*\n\n📚 تجميعات نماذج 51 و52 + ملخصات تفصيلية + 180 سؤال تفاعلي\n\n🔗 ${SITE_URL}`;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(SITE_URL).then(() => {
    showToast('✅ تم نسخ الرابط — شارك الفائدة مع أصدقائك!');
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = SITE_URL;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('✅ تم نسخ الرابط!');
  });
}

// ===== SHARE RESULT =====
function shareResultWhatsApp(sectionTitle, score, total, pct) {
  const course = recommendCourse(pct);
  const text = `🦋 *نتيجتي في "${sectionTitle}"*\n\n📊 ${score}/${total} — نسبة ${pct}%\n\n🎯 جرّب مستواك أنت:\n${SITE_URL}\n\n📚 لتحسين مستواك: ${course.link}\n\n«مَن دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ»`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function shareResultTelegram(sectionTitle, score, total, pct) {
  const course = recommendCourse(pct);
  const text = `🦋 نتيجتي في "${sectionTitle}": ${score}/${total} (${pct}%)\n\nجرّب الاختبار: ${SITE_URL}\nالدورة الموصى بها: ${course.link}`;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`, '_blank');
}

// ===== SHARE STUDY PLAN =====
function sharePlanWhatsApp(courseId, sectionTitle, pct) {
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const text = `📅 *خطة المذاكرة لـ STEP 2026*\n\n📊 نتيجتي في "${sectionTitle}": ${pct}%\n🎯 الدورة المختارة: ${course.name}\n\n✨ أنشئ خطتك أنت:\n${SITE_URL}\n\n🛒 سجّل في الدورة:\n${course.link}\n\n«وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ»`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function sharePlanTelegram(courseId, sectionTitle, pct) {
  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const text = `📅 خطة مذاكرة STEP 2026\nنتيجتي في "${sectionTitle}": ${pct}%\nالدورة: ${course.name}\n\nأنشئ خطتك: ${SITE_URL}\nسجّل: ${course.link}`;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(text)}`, '_blank');
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== CLOSE MODALS ON OVERLAY CLICK =====
document.getElementById('sectionModal').addEventListener('click', function(e) {
  if (e.target === this) closeSection();
});
document.getElementById('resultModal').addEventListener('click', function(e) {
  if (e.target === this) closeResultModal();
});
document.getElementById('planModal').addEventListener('click', function(e) {
  if (e.target === this) closeStudyPlan();
});

// ===== ESC KEY =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSection();
    closeResultModal();
    closeStudyPlan();
  }
});

// ===== INTERSECTION OBSERVER FOR CARDS =====
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.tense-card, .course-card').forEach(el => {
  cardObserver.observe(el);
});

// ===== UTILITY: ESCAPE HTML =====
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('%c🦋 الأزمنة | STEP 2026 — عايد أكاديمي', 'color:#f5831f;font-size:1.2rem;font-weight:bold;');
console.log('%c📚 تجميعات النماذج 51 و52 | 180 سؤال تفاعلي', 'color:#0d1b3e;font-size:0.9rem;');
