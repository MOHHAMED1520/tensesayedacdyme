// =============================================
//  STEP 2026 - Tenses Data: Summaries + Quizzes
//  عايد أكاديمي | الأزمنة لاختبار STEP 2026
// =============================================

const TENSES_DATA = {

  // ===================================================
  // 1. المضارع البسيط | Simple Present Tense
  // ===================================================
  "present-simple": {
    title: "المضارع البسيط",
    titleEn: "Simple Present Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم المضارع البسيط للتعبير عن الحقائق الثابتة والعادات المتكررة والجداول الزمنية.",
      formula: "Subject + V1 (s/es for he/she/it)",
      uses: [
        { title: "الحقائق الثابتة والعلمية", example: "The sun rises in the east.", translation: "الشمس تشرق من الشرق." },
        { title: "العادات والروتين اليومي", example: "She drinks coffee every morning.", translation: "هي تشرب القهوة كل صباح." },
        { title: "الجداول والبرامج الرسمية", example: "The train leaves at 8 PM.", translation: "القطار يغادر الساعة 8 مساءً." },
        { title: "التعليمات والإرشادات", example: "You add the eggs and mix well.", translation: "تضيف البيض وتخلط جيدًا." },
        { title: "الأفعال الحالية مع أفعال الحالة", example: "I know the answer.", translation: "أنا أعرف الإجابة." }
      ],
      signals: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "every week", "on Mondays", "generally", "frequently", "occasionally"],
      negation: "Subject + do/does + not + V1",
      question: "Do/Does + Subject + V1?",
      tip: "تذكّر: أضف (s/es) للفعل عند استخدام he / she / it — مثال: He works / She goes / It runs",
      warning: "لا تُضاف s/es مع: I / You / We / They",
      stepStyle: "في اختبار STEP — يُختبر هذا الزمن غالبًا بـ: اختيار الفعل الصحيح في جملة عادات أو حقيقة، أو الفرق بين do/does في السؤال والنفي، أو تمييزه عن المضارع المستمر."
    },
    quiz: [
      {
        q: "She ______ to work by bus every day.",
        choices: ["go", "goes", "going", "is go"],
        correct: 1,
        explanation: "مع she نستخدم الفعل مع (s) → goes"
      },
      {
        q: "Water ______ at 100 degrees Celsius.",
        choices: ["boil", "boils", "boiling", "is boil"],
        correct: 1,
        explanation: "حقيقة علمية + مفرد غائب (water) → boils"
      },
      {
        q: "They ______ football on weekends.",
        choices: ["plays", "is playing", "play", "played"],
        correct: 2,
        explanation: "مع they نستخدم الفعل الأساسي بدون s → play"
      },
      {
        q: "______ your brother work at a hospital?",
        choices: ["Do", "Does", "Is", "Are"],
        correct: 1,
        explanation: "your brother = he → نستخدم Does في السؤال"
      },
      {
        q: "The museum ______ at nine o'clock every morning.",
        choices: ["open", "opens", "is opened", "opening"],
        correct: 1,
        explanation: "جدول رسمي + مفرد → opens"
      },
      {
        q: "I ______ coffee in the morning.",
        choices: ["doesn't drink", "don't drink", "not drink", "am not drink"],
        correct: 1,
        explanation: "مع I → نستخدم don't في النفي"
      },
      {
        q: "The flight to Riyadh ______ at 6 AM tomorrow.",
        choices: ["leave", "leaving", "leaves", "will leaving"],
        correct: 2,
        explanation: "جدول رسمي يُعبَّر عنه بالمضارع البسيط → leaves"
      },
      {
        q: "My mother ______ very well.",
        choices: ["cook", "cooks", "is cooking", "cooked"],
        correct: 1,
        explanation: "مهارة ثابتة + my mother = she → cooks"
      },
      {
        q: "The Earth ______ around the Sun.",
        choices: ["move", "moves", "is moving", "moved"],
        correct: 1,
        explanation: "حقيقة علمية → moves"
      },
      {
        q: "He ______ not like spicy food.",
        choices: ["do", "does", "is", "are"],
        correct: 1,
        explanation: "نفي مع he → does not"
      },
      {
        q: "The conference ______ on the first Monday of every month.",
        choices: ["takes place", "take place", "is taking place", "took place"],
        correct: 0,
        explanation: "حدث دوري منتظم → takes place"
      },
      {
        q: "Children ______ to school five days a week.",
        choices: ["goes", "going", "go", "is going"],
        correct: 2,
        explanation: "children = they → go بدون s"
      },
      {
        q: "She always ______ her homework before dinner.",
        choices: ["do", "does", "is doing", "did"],
        correct: 1,
        explanation: "always + she = عادة + مفرد غائب → does"
      },
      {
        q: "The manager ______ not approve of late arrivals.",
        choices: ["do", "does", "is", "has"],
        correct: 1,
        explanation: "نفي مع مفرد غائب → does not"
      },
      {
        q: "I ______ what you mean.",
        choices: ["am understanding", "understand", "understands", "understood"],
        correct: 1,
        explanation: "فعل حالة (stative verb) → لا يستخدم مع المستمر، بل المضارع البسيط: understand"
      },
      {
        q: "How often ______ you exercise?",
        choices: ["do", "does", "are", "is"],
        correct: 0,
        explanation: "سؤال عن التكرار مع you → do"
      },
      {
        q: "My dog ______ a lot when it is hungry.",
        choices: ["bark", "barks", "barking", "is bark"],
        correct: 1,
        explanation: "my dog = مفرد غائب → barks"
      },
      {
        q: "We ______ English at this school.",
        choices: ["teaches", "teaching", "teach", "is teach"],
        correct: 2,
        explanation: "we → teach بدون s"
      },
      {
        q: "The news ______ at seven every evening.",
        choices: ["start", "starts", "starting", "is start"],
        correct: 1,
        explanation: "جدول ثابت + the news = مفرد → starts"
      },
      {
        q: "She rarely ______ to parties.",
        choices: ["goes", "go", "going", "is going"],
        correct: 0,
        explanation: "rarely دليل عادة + she → goes"
      }
    ]
  },

  // ===================================================
  // 2. المضارع المستمر | Present Continuous Tense
  // ===================================================
  "present-continuous": {
    title: "المضارع المستمر",
    titleEn: "Present Continuous Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم المضارع المستمر للحديث عن أحداث تحدث الآن أو حول وقت الحديث، وترتيبات مستقبلية مؤكدة.",
      formula: "Subject + am/is/are + V-ing",
      uses: [
        { title: "ما يحدث الآن لحظة الكلام", example: "She is reading a book right now.", translation: "هي تقرأ كتابًا الآن." },
        { title: "حدث مؤقت حول هذه الفترة", example: "He is working on a new project these days.", translation: "هو يعمل على مشروع جديد هذه الأيام." },
        { title: "ترتيبات مستقبلية مؤكدة", example: "They are flying to London tomorrow.", translation: "هم سيسافرون إلى لندن غداً." },
        { title: "نزعات متغيرة وتطورات", example: "Prices are rising fast.", translation: "الأسعار ترتفع بسرعة." }
      ],
      signals: ["now", "right now", "at the moment", "at present", "currently", "these days", "today", "still", "look!", "listen!"],
      negation: "Subject + am/is/are + not + V-ing",
      question: "Am/Is/Are + Subject + V-ing?",
      tip: "الأفعال الحالة (stative verbs) لا تُستخدم مع المستمر: know, understand, believe, love, hate, want, need, prefer, see, hear, smell",
      warning: "خطأ شائع في STEP: استخدام 'am knowing' أو 'is believing' — هذا خطأ! استخدم المضارع البسيط.",
      stepStyle: "في STEP — يُختبر بالتمييز بين المستمر والبسيط، وتحديد الكلمة الدليلية الصحيحة، والتحقق من أفعال الحالة."
    },
    quiz: [
      {
        q: "Listen! The baby ______ in the other room.",
        choices: ["cries", "cry", "is crying", "cried"],
        correct: 2,
        explanation: "Listen! دليل على ما يحدث الآن → is crying"
      },
      {
        q: "She ______ her new laptop right now.",
        choices: ["set up", "sets up", "is setting up", "setting up"],
        correct: 2,
        explanation: "right now → is setting up"
      },
      {
        q: "I ______ a party for next Friday. Would you like to come?",
        choices: ["plan", "planned", "am planning", "plans"],
        correct: 2,
        explanation: "ترتيب مستقبلي مؤكد → am planning"
      },
      {
        q: "They ______ to music at the moment.",
        choices: ["listen", "listens", "are listening", "listened"],
        correct: 2,
        explanation: "at the moment → are listening"
      },
      {
        q: "He ______ what you are saying — can you repeat it?",
        choices: ["is not understanding", "doesn't understand", "isn't understand", "don't understand"],
        correct: 1,
        explanation: "understand فعل حالة → لا تستخدم المستمر → doesn't understand"
      },
      {
        q: "The children ______ in the garden currently.",
        choices: ["play", "plays", "are playing", "played"],
        correct: 2,
        explanation: "currently → are playing"
      },
      {
        q: "Look at that bird! It ______ so beautifully.",
        choices: ["sings", "sing", "is singing", "sang"],
        correct: 2,
        explanation: "Look! → حدث الآن → is singing"
      },
      {
        q: "We ______ a new branch in Jeddah next month.",
        choices: ["open", "opens", "are opening", "opened"],
        correct: 2,
        explanation: "ترتيب مستقبلي + next month → are opening"
      },
      {
        q: "She ______ a headache right now.",
        choices: ["is having", "has", "have", "having"],
        correct: 1,
        explanation: "have (في معنى الملكية أو الحالة الجسدية) فعل حالة → has"
      },
      {
        q: "The company ______ new software these days.",
        choices: ["tests", "test", "is testing", "tested"],
        correct: 2,
        explanation: "these days → حدث مؤقت مستمر → is testing"
      },
      {
        q: "Why ______ you ______ so much today?",
        choices: ["do / work", "are / working", "is / working", "have / worked"],
        correct: 1,
        explanation: "حدث الآن → are you working"
      },
      {
        q: "I ______ you need help with this.",
        choices: ["am thinking", "think", "thinks", "thought"],
        correct: 1,
        explanation: "think = فعل حالة → لا يستخدم مع المستمر → think"
      },
      {
        q: "The students ______ for their final exams at the moment.",
        choices: ["prepare", "prepares", "are preparing", "prepared"],
        correct: 2,
        explanation: "at the moment → are preparing"
      },
      {
        q: "He ______ better since he started the new medicine.",
        choices: ["is feeling", "feels", "feel", "felt"],
        correct: 0,
        explanation: "تغير ملحوظ + since → is feeling مقبولة هنا (feel كفعل حالة متغير)"
      },
      {
        q: "More and more people ______ electric cars nowadays.",
        choices: ["buy", "buys", "are buying", "bought"],
        correct: 2,
        explanation: "نزعة متغيرة + nowadays → are buying"
      },
      {
        q: "She ______ to her friend on the phone right now.",
        choices: ["talks", "talk", "is talking", "talked"],
        correct: 2,
        explanation: "right now → is talking"
      },
      {
        q: "It ______ heavily outside. Take an umbrella.",
        choices: ["rain", "rains", "is raining", "rained"],
        correct: 2,
        explanation: "Take = أمر = الآن → is raining"
      },
      {
        q: "I ______ this cake — it tastes amazing!",
        choices: ["am loving", "love", "loves", "am love"],
        correct: 1,
        explanation: "love = فعل حالة → المضارع البسيط: love"
      },
      {
        q: "The researcher ______ data for her project this semester.",
        choices: ["collects", "collect", "is collecting", "collected"],
        correct: 2,
        explanation: "this semester = فترة مؤقتة → is collecting"
      },
      {
        q: "______ you ______ to the conference next Thursday?",
        choices: ["Do / go", "Are / going", "Is / going", "Have / gone"],
        correct: 1,
        explanation: "ترتيب مستقبلي مؤكد → Are you going"
      }
    ]
  },

  // ===================================================
  // 3. المضارع التام | Present Perfect Tense
  // ===================================================
  "present-perfect": {
    title: "المضارع التام",
    titleEn: "Present Perfect Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم المضارع التام لربط الماضي بالحاضر — حدث وقع في الماضي وله علاقة أو أثر بالحاضر.",
      formula: "Subject + have/has + Past Participle (V3)",
      uses: [
        { title: "تجربة حياتية (حدثت في وقت غير محدد)", example: "I have visited Japan twice.", translation: "لقد زرت اليابان مرتين." },
        { title: "حدث حديث ونتيجته واضحة", example: "She has lost her keys — she cannot get in.", translation: "فقدت مفاتيحها — لا تستطيع الدخول." },
        { title: "حدث بدأ في الماضي ولا يزال مستمراً", example: "They have lived here for ten years.", translation: "يعيشون هنا منذ عشر سنوات." },
        { title: "حدث مع just / already / yet", example: "He has just finished the report.", translation: "لقد انتهى للتو من التقرير." }
      ],
      signals: ["just", "already", "yet", "ever", "never", "recently", "lately", "since", "for", "so far", "up to now", "before", "once", "twice"],
      negation: "Subject + have/has + not + V3",
      question: "Have/Has + Subject + V3?",
      tip: "for + مدة زمنية: for three years / for a week | since + نقطة بداية: since 2020 / since Monday",
      warning: "لا تستخدم المضارع التام مع زمن محدد في الماضي مثل: yesterday / in 2010 / last year — استخدم الماضي البسيط بدلاً منه",
      stepStyle: "في STEP — الفرق بين for/since، وموضع just/already/yet، والتمييز بين Present Perfect والماضي البسيط."
    },
    quiz: [
      {
        q: "She ______ three books so far this month.",
        choices: ["read", "reads", "has read", "had read"],
        correct: 2,
        explanation: "so far + علاقة بالحاضر → has read"
      },
      {
        q: "I ______ ever been to Australia.",
        choices: ["haven't", "hasn't", "didn't", "wasn't"],
        correct: 0,
        explanation: "ever في النفي مع I → haven't"
      },
      {
        q: "They ______ in this city ______ 2015.",
        choices: ["live / since", "have lived / since", "lived / for", "has lived / since"],
        correct: 1,
        explanation: "حدث مستمر من نقطة محددة → have lived / since"
      },
      {
        q: "He has ______ finished the project.",
        choices: ["yet", "just", "since", "for"],
        correct: 1,
        explanation: "just يأتي بعد has/have مباشرة → just"
      },
      {
        q: "Have you submitted the report ______?",
        choices: ["just", "already", "yet", "since"],
        correct: 2,
        explanation: "في السؤال والنفي → yet"
      },
      {
        q: "She has worked here ______ five years.",
        choices: ["since", "for", "ago", "before"],
        correct: 1,
        explanation: "مدة زمنية بالأرقام → for"
      },
      {
        q: "I ______ this film twice — it's incredible!",
        choices: ["see", "saw", "have seen", "had seen"],
        correct: 2,
        explanation: "تجربة ليس لها وقت محدد → have seen"
      },
      {
        q: "The team ______ already ______ the decision.",
        choices: ["have / made", "has / made", "had / made", "did / make"],
        correct: 1,
        explanation: "the team = مفرد → has + already مع V3 → has already made"
      },
      {
        q: "She ______ her phone somewhere. She can't find it now.",
        choices: ["lose", "lost", "has lost", "was losing"],
        correct: 2,
        explanation: "أثر واضح في الحاضر → has lost"
      },
      {
        q: "______ you ever tried sushi?",
        choices: ["Did", "Do", "Have", "Has"],
        correct: 2,
        explanation: "تجربة حياتية + you → Have"
      },
      {
        q: "He ______ home yet. He's still at the office.",
        choices: ["hasn't gone", "didn't go", "doesn't go", "hadn't gone"],
        correct: 0,
        explanation: "yet في النفي + أثر بالحاضر → hasn't gone"
      },
      {
        q: "We ______ not seen Dr. Al-Qahtani lately.",
        choices: ["have", "has", "had", "did"],
        correct: 0,
        explanation: "نفي مع we → have not"
      },
      {
        q: "This is the most interesting book I ______ ever ______.",
        choices: ["have / read", "had / read", "did / read", "am / reading"],
        correct: 0,
        explanation: "أفضل تجربة حياتية → have ever read"
      },
      {
        q: "The company ______ three new branches this year.",
        choices: ["opens", "opened", "has opened", "had opened"],
        correct: 2,
        explanation: "this year = فترة لم تنته → has opened"
      },
      {
        q: "I ______ my homework, so now I can play.",
        choices: ["finish", "finished", "have finished", "had finished"],
        correct: 2,
        explanation: "نتيجة واضحة في الحاضر → have finished"
      },
      {
        q: "He ______ the report last night. (NOT present perfect)",
        choices: ["has submitted", "have submitted", "submitted", "submits"],
        correct: 2,
        explanation: "last night = زمن محدد في الماضي → ماضي بسيط: submitted"
      },
      {
        q: "How long ______ you ______ English?",
        choices: ["do / study", "have / studied", "are / studying", "did / study"],
        correct: 1,
        explanation: "How long + نشاط مستمر → have you studied"
      },
      {
        q: "She ______ never traveled abroad before.",
        choices: ["has", "have", "had", "did"],
        correct: 0,
        explanation: "never + she → has never"
      },
      {
        q: "The prices ______ significantly in recent months.",
        choices: ["rise", "rose", "have risen", "are rising"],
        correct: 2,
        explanation: "in recent months + تغير ملحوظ → have risen"
      },
      {
        q: "I ______ him since we were in school together.",
        choices: ["knew", "know", "have known", "am knowing"],
        correct: 2,
        explanation: "since = من نقطة محددة حتى الآن → have known"
      }
    ]
  },

  // ===================================================
  // 4. المضارع التام المستمر | Present Perfect Continuous
  // ===================================================
  "present-perfect-continuous": {
    title: "المضارع التام المستمر",
    titleEn: "Present Perfect Continuous",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم للتعبير عن فعل بدأ في الماضي ولا يزال مستمراً حتى الآن، مع التركيز على المدة أو النتيجة.",
      formula: "Subject + have/has + been + V-ing",
      uses: [
        { title: "فعل مستمر من الماضي حتى الآن", example: "I have been studying for two hours.", translation: "أنا أدرس منذ ساعتين (وما زلت)." },
        { title: "التركيز على مدة الفعل", example: "She has been waiting here since noon.", translation: "هي تنتظر هنا منذ الظهر." },
        { title: "نتيجة فعل مستمر واضحة", example: "He has been running — he looks tired.", translation: "كان يركض — يبدو متعباً." }
      ],
      signals: ["for", "since", "all day", "all morning", "how long", "recently", "lately"],
      negation: "Subject + have/has + not + been + V-ing",
      question: "Have/Has + Subject + been + V-ing?",
      tip: "الفرق الدقيق: Perfect = الانتهاء ← Perfect Continuous = الاستمرار والمدة | She has written 3 reports. (انتهت) vs She has been writing for 2 hours. (لا تزال تكتب)",
      warning: "الأفعال الحالة (stative) لا تستخدم مع المستمر: know, love, want — استخدم Present Perfect بدلاً منها.",
      stepStyle: "في STEP — التمييز بين Present Perfect و Present Perfect Continuous، واستخدام for/since."
    },
    quiz: [
      {
        q: "She ______ all morning and is exhausted.",
        choices: ["has worked", "have worked", "has been working", "is working"],
        correct: 2,
        explanation: "all morning + نتيجة واضحة + استمرار → has been working"
      },
      {
        q: "How long ______ you ______ for this company?",
        choices: ["have / worked", "have / been working", "are / working", "did / work"],
        correct: 1,
        explanation: "How long + استمرار → have you been working"
      },
      {
        q: "They ______ since early morning — they must be hungry.",
        choices: ["travel", "have traveled", "have been traveling", "are traveling"],
        correct: 2,
        explanation: "since + استمرار + نتيجة → have been traveling"
      },
      {
        q: "I ______ for hours and I still haven't found the answer.",
        choices: ["search", "have searched", "have been searching", "searched"],
        correct: 2,
        explanation: "for hours + لا تزال مستمرة → have been searching"
      },
      {
        q: "He ______ all week. He needs a rest.",
        choices: ["has been studying", "has studied", "studied", "is studying"],
        correct: 0,
        explanation: "all week + نتيجة (needs a rest) → has been studying"
      },
      {
        q: "The children ______ in the garden for the past hour.",
        choices: ["have played", "play", "have been playing", "are playing"],
        correct: 2,
        explanation: "for the past hour → have been playing"
      },
      {
        q: "She ______ two articles this week. (Focus on completion)",
        choices: ["has been writing", "has written", "wrote", "writes"],
        correct: 1,
        explanation: "التركيز على الإنجاز والعدد → has written (Perfect بدون Continuous)"
      },
      {
        q: "It ______ heavily since last night — the streets are flooded.",
        choices: ["rains", "has rained", "has been raining", "rained"],
        correct: 2,
        explanation: "since + استمرار + نتيجة → has been raining"
      },
      {
        q: "He ______ this song for three hours. Can he stop?",
        choices: ["sings", "has sung", "has been singing", "is singing"],
        correct: 2,
        explanation: "for three hours + استمرار مزعج → has been singing"
      },
      {
        q: "We ______ a solution to the problem lately.",
        choices: ["look for", "have been looking for", "have looked for", "looked for"],
        correct: 1,
        explanation: "lately + استمرار → have been looking for"
      },
      {
        q: "She ______ because she ______ onions.",
        choices: ["is crying / cut", "has been crying / has been cutting", "cries / cuts", "has cried / cut"],
        correct: 1,
        explanation: "كلتا الجملتين تُشير إلى فعل مستمر سببه واضح → has been crying / has been cutting"
      },
      {
        q: "I ______ to contact you all day — why wasn't your phone on?",
        choices: ["tried", "have tried", "have been trying", "try"],
        correct: 2,
        explanation: "all day + استمرار → have been trying"
      },
      {
        q: "He ______ the answer since the question was asked.",
        choices: ["knows", "has been knowing", "has known", "knew"],
        correct: 2,
        explanation: "know = فعل حالة → Present Perfect بدون Continuous: has known"
      },
      {
        q: "The doctor ______ patients for 12 hours straight.",
        choices: ["has seen", "sees", "has been seeing", "saw"],
        correct: 2,
        explanation: "for + استمرار → has been seeing"
      },
      {
        q: "You look tired! ______ you ______ enough sleep?",
        choices: ["Have / been getting", "Did / get", "Are / getting", "Do / get"],
        correct: 0,
        explanation: "نتيجة واضحة + سؤال عن مدة → Have you been getting"
      },
      {
        q: "The factory ______ since the new management took over.",
        choices: ["has been expanding", "expands", "expanded", "is expanding"],
        correct: 0,
        explanation: "since + استمرار → has been expanding"
      },
      {
        q: "They ______ on the new bridge for two years, and it's almost done.",
        choices: ["work", "are working", "have been working", "worked"],
        correct: 2,
        explanation: "for two years + يوشكون الانتهاء → have been working"
      },
      {
        q: "She ______ chess since she was six. She's amazing at it.",
        choices: ["has been playing", "is playing", "plays", "played"],
        correct: 0,
        explanation: "since + استمرار حتى الآن → has been playing"
      },
      {
        q: "I ______ here for thirty minutes — where is everyone?",
        choices: ["wait", "waited", "have been waiting", "have waited"],
        correct: 2,
        explanation: "for thirty minutes + استمرار وشكوى → have been waiting"
      },
      {
        q: "The researchers ______ the data all weekend.",
        choices: ["analyze", "have analyzed", "have been analyzing", "analyzed"],
        correct: 2,
        explanation: "all weekend + استمرار → have been analyzing"
      }
    ]
  },

  // ===================================================
  // 5. المستقبل البسيط | Simple Future Tense
  // ===================================================
  "future-simple": {
    title: "المستقبل البسيط",
    titleEn: "Simple Future Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم للتعبير عن قرارات آنية، تنبؤات، وعود، وأحداث مستقبلية غير مخططة مسبقاً.",
      formula: "Subject + will + V1 (bare infinitive)",
      uses: [
        { title: "قرار آني (اتخذ لحظة الكلام)", example: "The phone is ringing — I'll get it!", translation: "الهاتف يرن — سأرد عليه!" },
        { title: "التنبؤ والتوقع", example: "I think it will rain tomorrow.", translation: "أعتقد أنه سيمطر غداً." },
        { title: "الوعد والعزم", example: "I promise I will call you.", translation: "أعدك بأنني سأتصل بك." },
        { title: "عروض المساعدة", example: "Shall I open the window?", translation: "هل أفتح النافذة؟" }
      ],
      signals: ["tomorrow", "next week/month/year", "in the future", "soon", "later", "I think", "I believe", "probably", "perhaps", "I promise", "I bet"],
      negation: "Subject + will not (won't) + V1",
      question: "Will + Subject + V1?",
      tip: "be going to vs will: (going to) = خطة محددة مسبقاً أو دليل واضح | (will) = قرار آني أو تنبؤ دون دليل",
      warning: "لا تضع s على الفعل بعد will: 'He will goes' — خطأ! الصحيح: 'He will go'",
      stepStyle: "في STEP — الفرق بين will و be going to، وتمييز القرار الآني من الخطة المسبقة."
    },
    quiz: [
      {
        q: "Don't worry — I ______ help you with the report.",
        choices: ["am going to", "will", "would", "shall"],
        correct: 1,
        explanation: "وعد/عرض مساعدة لحظي → will"
      },
      {
        q: "She has already bought the tickets — she ______ to Paris next week.",
        choices: ["will travel", "is going to travel", "travels", "traveled"],
        correct: 1,
        explanation: "خطة محددة سلفاً (already bought) → is going to travel"
      },
      {
        q: "Look at those clouds! It ______ rain.",
        choices: ["will", "is going to", "shall", "would"],
        correct: 1,
        explanation: "دليل واضح (clouds) → is going to rain"
      },
      {
        q: "I ______ answer that. It's a tough question.",
        choices: ["won't", "am not going to", "don't", "didn't"],
        correct: 0,
        explanation: "رفض آني → won't"
      },
      {
        q: "The meeting ______ be postponed to next Tuesday.",
        choices: ["is", "will", "shall", "going to"],
        correct: 1,
        explanation: "قرار/قرار رسمي → will"
      },
      {
        q: "______ you be at the conference tomorrow?",
        choices: ["Are", "Do", "Will", "Have"],
        correct: 2,
        explanation: "سؤال عن المستقبل البسيط → Will"
      },
      {
        q: "I think technology ______ change our lives dramatically.",
        choices: ["changes", "is changing", "will change", "changed"],
        correct: 2,
        explanation: "I think = رأي/تنبؤ → will change"
      },
      {
        q: "The phone is ringing — I ______ get it.",
        choices: ["am going to", "will", "shall", "would"],
        correct: 1,
        explanation: "قرار آني لحظة الكلام → will"
      },
      {
        q: "She ______ probably finish the exam before everyone else.",
        choices: ["is", "has", "will", "does"],
        correct: 2,
        explanation: "probably + تنبؤ → will"
      },
      {
        q: "They ______ build a new hospital in the area next year.",
        choices: ["will", "are going to", "shall", "would"],
        correct: 1,
        explanation: "خطة رسمية مُقررة مسبقاً → are going to"
      },
      {
        q: "I promise I ______ be late again.",
        choices: ["am not going to", "won't", "am not", "don't"],
        correct: 1,
        explanation: "وعد → won't (will not)"
      },
      {
        q: "By the time you arrive, the lecture ______ started. (future perfect context)",
        choices: ["will have", "will", "would have", "has"],
        correct: 0,
        explanation: "فعل مستقبلي مكتمل قبل وقت معين → will have started"
      },
      {
        q: "She ______ move to a bigger apartment — she's been saving up for months.",
        choices: ["will", "is going to", "shall", "would"],
        correct: 1,
        explanation: "خطة محددة مسبقاً (saving for months) → is going to"
      },
      {
        q: "Perhaps it ______ be easier to use the other route.",
        choices: ["is", "was", "will", "would"],
        correct: 2,
        explanation: "perhaps + تنبؤ → will"
      },
      {
        q: "The new policy ______ take effect from January 1st.",
        choices: ["will", "would", "is", "has"],
        correct: 0,
        explanation: "إعلان رسمي → will"
      },
      {
        q: "______ I carry those bags for you?",
        choices: ["Will", "Shall", "Am", "Do"],
        correct: 1,
        explanation: "Shall I = عرض مساعدة رسمي/مهذب"
      },
      {
        q: "He ______ retire next year — everything is arranged.",
        choices: ["will", "is going to", "retires", "would"],
        correct: 1,
        explanation: "خطة جاهزة (everything is arranged) → is going to"
      },
      {
        q: "I believe the team ______ win the championship.",
        choices: ["wins", "won", "will win", "is winning"],
        correct: 2,
        explanation: "I believe = رأي شخصي → will win"
      },
      {
        q: "She ______ never forget what you did for her.",
        choices: ["is", "has", "will", "does"],
        correct: 2,
        explanation: "تعبير عن الإطار المستقبلي + never → will"
      },
      {
        q: "The deadline is tomorrow — he ______ work all night to finish.",
        choices: ["will", "is going to", "shall", "would"],
        correct: 1,
        explanation: "ضرورة مخططة واضحة → is going to"
      }
    ]
  },

  // ===================================================
  // 6. المستقبل المستمر | Future Continuous Tense
  // ===================================================
  "future-continuous": {
    title: "المستقبل المستمر",
    titleEn: "Future Continuous Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم للتعبير عن حدث سيكون مستمراً في لحظة محددة في المستقبل.",
      formula: "Subject + will + be + V-ing",
      uses: [
        { title: "حدث مستمر في لحظة محددة مستقبلاً", example: "At 8 PM, I will be having dinner.", translation: "الساعة 8 مساءً، سأكون أتناول العشاء." },
        { title: "حدث طبيعي في مجرى الأمور", example: "She will be taking the exam next week.", translation: "هي ستأخذ الامتحان الأسبوع القادم." },
        { title: "سؤال مؤدب عن خطط الآخرين", example: "Will you be using the car tonight?", translation: "هل ستستخدم السيارة الليلة؟" }
      ],
      signals: ["at this time tomorrow", "at 5 o'clock next Monday", "all day tomorrow", "this time next week", "when you arrive", "while"],
      negation: "Subject + will not (won't) + be + V-ing",
      question: "Will + Subject + be + V-ing?",
      tip: "الفرق مع Future Simple: will drive = قرار | will be driving = في أثناء القيادة في لحظة محددة",
      warning: "لا تخلطه مع Present Continuous المستقبلي — Future Continuous يُشير إلى استمرار في لحظة بعينها.",
      stepStyle: "في STEP — اختر هذا الزمن عندما يُذكر وقت محدد في المستقبل مع حدث مستمر (at this time / while)."
    },
    quiz: [
      {
        q: "This time tomorrow, she ______ in her new office.",
        choices: ["works", "will work", "will be working", "is working"],
        correct: 2,
        explanation: "this time tomorrow + حدث مستمر → will be working"
      },
      {
        q: "At 9 AM on Saturday, the conference ______ .",
        choices: ["takes place", "will take place", "will be taking place", "took place"],
        correct: 2,
        explanation: "at 9 AM + استمرار في تلك اللحظة → will be taking place"
      },
      {
        q: "He ______ the whole day tomorrow — he has a big project.",
        choices: ["works", "will work", "will be working", "is going to work"],
        correct: 2,
        explanation: "the whole day tomorrow = فترة مستقبلية مستمرة → will be working"
      },
      {
        q: "When you arrive, I ______ dinner. Come straight in.",
        choices: ["make", "will make", "will be making", "am making"],
        correct: 2,
        explanation: "when you arrive = لحظة محددة في المستقبل + حدث مستمر → will be making"
      },
      {
        q: "______ you ______ the car this afternoon? I need it.",
        choices: ["Will / be using", "Are / using", "Do / use", "Have / used"],
        correct: 0,
        explanation: "سؤال مؤدب عن الخطط → Will you be using"
      },
      {
        q: "Don't call at 7 PM — we ______ .",
        choices: ["eat", "will eat", "will be eating", "are eating"],
        correct: 2,
        explanation: "لحظة محددة في المستقبل + استمرار → will be eating"
      },
      {
        q: "Next year at this time, they ______ their exams.",
        choices: ["finish", "will finish", "will be finishing", "finished"],
        correct: 2,
        explanation: "next year at this time → will be finishing"
      },
      {
        q: "She ______ hard when the results come out.",
        choices: ["studies", "has studied", "will be studying", "will study"],
        correct: 2,
        explanation: "when results come out = لحظة مستقبلية → will be studying (مستمر في تلك اللحظة)"
      },
      {
        q: "I ______ in Dubai during the conference — you can visit me.",
        choices: ["stay", "will be staying", "will stay", "stayed"],
        correct: 1,
        explanation: "during the conference = فترة محددة في المستقبل → will be staying"
      },
      {
        q: "They ______ the new system all week.",
        choices: ["test", "have tested", "will be testing", "tested"],
        correct: 2,
        explanation: "all week (مستقبل) → will be testing"
      },
      {
        q: "This time next month, he ______ his new job.",
        choices: ["starts", "will start", "will be starting", "is starting"],
        correct: 2,
        explanation: "this time next month → will be starting"
      },
      {
        q: "The surgeon ______ during that hour — don't disturb her.",
        choices: ["operates", "will operate", "will be operating", "operated"],
        correct: 2,
        explanation: "during that hour = لحظة مستقبلية محددة → will be operating"
      },
      {
        q: "While you ______ lunch, I will be in the meeting.",
        choices: ["have", "will have", "are having", "will be having"],
        correct: 2,
        explanation: "while = في أثناء → are having (مضارع مستمر في جملة الزمن)"
      },
      {
        q: "He ______ at the airport when the announcement is made.",
        choices: ["arrives", "will arrive", "will be arriving", "arrived"],
        correct: 2,
        explanation: "when + لحظة مستقبلية → will be arriving"
      },
      {
        q: "I ______ the office tomorrow — call my assistant.",
        choices: ["won't use", "won't be using", "don't use", "haven't used"],
        correct: 1,
        explanation: "نفي المستقبل المستمر → won't be using"
      },
      {
        q: "At this point next year, students ______ for the new STEP model.",
        choices: ["prepare", "will prepare", "will be preparing", "prepared"],
        correct: 2,
        explanation: "at this point next year → will be preparing"
      },
      {
        q: "She ______ the data all morning, so she won't be free until noon.",
        choices: ["analyzes", "will analyze", "will be analyzing", "analyzed"],
        correct: 2,
        explanation: "all morning (مستقبل) + استمرار → will be analyzing"
      },
      {
        q: "Will you ______ at the training session on Monday?",
        choices: ["attend", "be attending", "attending", "attended"],
        correct: 1,
        explanation: "سؤال مؤدب will + be + V-ing → be attending"
      },
      {
        q: "At midnight, the system ______ the backup procedure.",
        choices: ["runs", "will run", "will be running", "ran"],
        correct: 2,
        explanation: "at midnight = لحظة محددة → will be running"
      },
      {
        q: "In two hours, the plane ______ over the ocean.",
        choices: ["flies", "will fly", "will be flying", "is flying"],
        correct: 2,
        explanation: "in two hours = لحظة محددة مستقبلاً → will be flying"
      }
    ]
  },

  // ===================================================
  // 7. الماضي البسيط | Simple Past Tense
  // ===================================================
  "past-simple": {
    title: "الماضي البسيط",
    titleEn: "Simple Past Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم الماضي البسيط للتعبير عن أحداث مكتملة في وقت محدد في الماضي.",
      formula: "Subject + V2 (Past form) / was/were",
      uses: [
        { title: "حدث مكتمل في وقت محدد", example: "She graduated in 2022.", translation: "تخرجت في 2022." },
        { title: "سلسلة أحداث في الماضي", example: "He entered, sat down, and opened his book.", translation: "دخل، جلس، وفتح كتابه." },
        { title: "عادة أو حالة ماضية منتهية", example: "They used to live in Riyadh.", translation: "كانوا يعيشون في الرياض." },
        { title: "شرط المستحيل مع if", example: "If I knew the answer, I would tell you.", translation: "لو كنت أعرف الإجابة، لأخبرتك." }
      ],
      signals: ["yesterday", "last week/month/year", "ago", "in 2015", "in the morning", "once", "then", "at that time", "when"],
      negation: "Subject + did not (didn't) + V1",
      question: "Did + Subject + V1?",
      tip: "الأفعال المنتظمة: add -ed (worked, studied, played) | الأفعال الشاذة تحفظ: go→went, see→saw, take→took, write→wrote",
      warning: "لا تستخدم الماضي البسيط مع جمل تحتوي على أدوات المضارع التام مثل: already, just, yet, never, ever",
      stepStyle: "في STEP — يختبر الأفعال الشاذة، والتمييز بين الماضي والمضارع التام، واستخدام didn't في النفي."
    },
    quiz: [
      {
        q: "She ______ to Jeddah last summer.",
        choices: ["go", "goes", "went", "has gone"],
        correct: 2,
        explanation: "last summer = وقت محدد في الماضي → went"
      },
      {
        q: "They ______ the project two weeks ago.",
        choices: ["finish", "have finished", "finished", "finishing"],
        correct: 2,
        explanation: "two weeks ago = ماضي محدد → finished"
      },
      {
        q: "______ you ______ the new manager at the meeting?",
        choices: ["Did / meet", "Have / met", "Do / meet", "Are / meeting"],
        correct: 0,
        explanation: "سؤال عن حدث ماضٍ → Did you meet"
      },
      {
        q: "She ______ not attend the conference yesterday.",
        choices: ["does", "did", "has", "is"],
        correct: 1,
        explanation: "نفي الماضي → did not"
      },
      {
        q: "When he ______ in, everyone was quiet.",
        choices: ["comes", "come", "came", "has come"],
        correct: 2,
        explanation: "حدث في الماضي → came"
      },
      {
        q: "I ______ a lot of Arabic poetry when I was at school.",
        choices: ["read", "reads", "have read", "am reading"],
        correct: 0,
        explanation: "when I was at school = فترة ماضية → read (ماضي الفعل الشاذ)"
      },
      {
        q: "The team ______ the championship three years ago.",
        choices: ["wins", "won", "has won", "win"],
        correct: 1,
        explanation: "three years ago → won"
      },
      {
        q: "He ______ the email before he left the office.",
        choices: ["send", "sended", "sent", "has sent"],
        correct: 2,
        explanation: "حدث في الماضي → sent (فعل شاذ)"
      },
      {
        q: "We ______ great fun at the festival last night.",
        choices: ["have", "had", "has", "have had"],
        correct: 1,
        explanation: "last night = ماضي محدد → had"
      },
      {
        q: "She ______ the answer, so she raised her hand.",
        choices: ["knows", "knew", "has known", "know"],
        correct: 1,
        explanation: "تسلسل أحداث ماضية → knew"
      },
      {
        q: "The researcher ______ the experiment in 2019.",
        choices: ["conduct", "conducts", "conducted", "has conducted"],
        correct: 2,
        explanation: "in 2019 = ماضي محدد → conducted"
      },
      {
        q: "I ______ to their house last week but nobody ______ home.",
        choices: ["went / was", "go / is", "went / is", "have gone / was"],
        correct: 0,
        explanation: "last week → went / was"
      },
      {
        q: "______ the children ______ their homework yesterday?",
        choices: ["Did / do", "Have / done", "Are / doing", "Do / do"],
        correct: 0,
        explanation: "yesterday = ماضي → Did they do"
      },
      {
        q: "The flight ______ two hours late.",
        choices: ["arrive", "arrived", "has arrived", "arrives"],
        correct: 1,
        explanation: "حدث مكتمل في الماضي → arrived"
      },
      {
        q: "She ______ the best student in the class last year.",
        choices: ["is", "are", "was", "were"],
        correct: 2,
        explanation: "last year + مفرد → was"
      },
      {
        q: "They ______ the contract until both sides agreed.",
        choices: ["don't sign", "didn't sign", "haven't signed", "won't sign"],
        correct: 1,
        explanation: "حدث ماضٍ + until → didn't sign"
      },
      {
        q: "He ______ a book every night before sleeping.",
        choices: ["read", "reads", "has read", "reading"],
        correct: 0,
        explanation: "عادة ماضية → read (simple past)"
      },
      {
        q: "The discovery ______ place in the early twentieth century.",
        choices: ["take", "takes", "took", "has taken"],
        correct: 2,
        explanation: "في القرن الماضي → took"
      },
      {
        q: "She ______ the window because it ______ too cold.",
        choices: ["shut / was", "shuts / is", "has shut / was", "shutted / were"],
        correct: 0,
        explanation: "ماضي متسلسل → shut / was"
      },
      {
        q: "I first ______ my best friend when we ______ in primary school.",
        choices: ["meet / were", "met / were", "have met / are", "met / are"],
        correct: 1,
        explanation: "حدث ماضٍ + فترة ماضية → met / were"
      }
    ]
  },

  // ===================================================
  // 8. الماضي المستمر | Past Continuous Tense
  // ===================================================
  "past-continuous": {
    title: "الماضي المستمر",
    titleEn: "Past Continuous Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم الماضي المستمر للتعبير عن حدث كان مستمراً في لحظة محددة في الماضي.",
      formula: "Subject + was/were + V-ing",
      uses: [
        { title: "حدث كان مستمراً حين وقع حدث آخر", example: "I was sleeping when the phone rang.", translation: "كنت نائماً حين رن الهاتف." },
        { title: "حدثان كانا مستمرَّين في آنٍ واحد", example: "While she was cooking, he was watching TV.", translation: "بينما كانت تطبخ، كان يشاهد التلفاز." },
        { title: "وصف الخلفية في قصة ماضية", example: "The sun was setting and birds were singing.", translation: "كانت الشمس تغيب والطيور تغرد." }
      ],
      signals: ["when", "while", "at that time", "at 8 o'clock yesterday", "all morning", "all day", "as"],
      negation: "Subject + was/were + not + V-ing",
      question: "Was/Were + Subject + V-ing?",
      tip: "القاعدة الذهبية: was/were (الطويل) + when + ماضي بسيط (القصير) — الحدث الطويل المستمر + الحدث القصير الذي قاطعه",
      warning: "في جملة while: يُستخدم المستمر في كلا الجانبين عند التزامن، أو المستمر + بسيط عند المقاطعة",
      stepStyle: "في STEP — when/while، الحدث المقاطع، ووصف المشهد الماضي."
    },
    quiz: [
      {
        q: "I ______ when the earthquake struck.",
        choices: ["sleep", "slept", "was sleeping", "am sleeping"],
        correct: 2,
        explanation: "حدث مستمر (نوم) + حدث مقاطع (الزلزال) → was sleeping"
      },
      {
        q: "While she ______ , her son broke a window.",
        choices: ["cooked", "cooks", "was cooking", "is cooking"],
        correct: 2,
        explanation: "while + حدث مستمر → was cooking"
      },
      {
        q: "What ______ you ______ at midnight last night?",
        choices: ["did / do", "were / doing", "are / doing", "have / done"],
        correct: 1,
        explanation: "at midnight last night = لحظة ماضية محددة → were you doing"
      },
      {
        q: "The children ______ in the garden when it started raining.",
        choices: ["play", "played", "were playing", "are playing"],
        correct: 2,
        explanation: "when + حدث مقاطع (started) → were playing"
      },
      {
        q: "He ______ not paying attention, so he missed the announcement.",
        choices: ["did", "was", "is", "were"],
        correct: 1,
        explanation: "نفي الماضي المستمر + he → was not"
      },
      {
        q: "While I ______ , my colleague sent an urgent email.",
        choices: ["present", "presented", "was presenting", "am presenting"],
        correct: 2,
        explanation: "while + حدث مستمر → was presenting"
      },
      {
        q: "They ______ football all afternoon.",
        choices: ["play", "played", "were playing", "have played"],
        correct: 2,
        explanation: "all afternoon = مدة ماضية مستمرة → were playing"
      },
      {
        q: "The manager ______ on the phone when I entered.",
        choices: ["talked", "talks", "was talking", "is talking"],
        correct: 2,
        explanation: "when I entered = لحظة ماضية → was talking"
      },
      {
        q: "As the sun ______, the birds started to sing.",
        choices: ["rise", "rose", "was rising", "is rising"],
        correct: 2,
        explanation: "as = في حين + وصف خلفية → was rising"
      },
      {
        q: "I ______ a headache all day yesterday.",
        choices: ["had", "have had", "was having", "have"],
        correct: 0,
        explanation: "have (فعل حالة) + all day yesterday → had (ماضي بسيط)"
      },
      {
        q: "She ______ at the store when she met her old teacher.",
        choices: ["shop", "shopped", "was shopping", "has shopped"],
        correct: 2,
        explanation: "when + حدث مقاطع → was shopping"
      },
      {
        q: "At 10 PM yesterday, I ______ the final chapter.",
        choices: ["read", "reads", "was reading", "have read"],
        correct: 2,
        explanation: "at 10 PM yesterday = لحظة ماضية محددة → was reading"
      },
      {
        q: "While the teacher ______, some students ______ notes.",
        choices: ["explained / were taking", "was explaining / were taking", "was explaining / took", "explained / took"],
        correct: 1,
        explanation: "while + حدثان متزامنان مستمران → was explaining / were taking"
      },
      {
        q: "He dropped his phone while he ______ the stairs.",
        choices: ["climbs", "climbed", "was climbing", "is climbing"],
        correct: 2,
        explanation: "while + حدث مستمر → was climbing"
      },
      {
        q: "It ______ heavily when we left the house.",
        choices: ["rained", "rains", "was raining", "is raining"],
        correct: 2,
        explanation: "when we left = لحظة ماضية → was raining"
      },
      {
        q: "The students ______ when the fire alarm went off.",
        choices: ["studied", "study", "were studying", "are studying"],
        correct: 2,
        explanation: "when + حدث مقاطع → were studying"
      },
      {
        q: "Was she ______ the report when you called?",
        choices: ["write", "wrote", "writing", "written"],
        correct: 2,
        explanation: "was + V-ing → writing"
      },
      {
        q: "I ______ what he was saying — it was too noisy.",
        choices: ["didn't hear", "wasn't hearing", "haven't heard", "don't hear"],
        correct: 0,
        explanation: "hear = فعل حالة → لا يستخدم مع المستمر → didn't hear"
      },
      {
        q: "The researchers ______ data when the system crashed.",
        choices: ["collect", "collected", "were collecting", "have collected"],
        correct: 2,
        explanation: "when + حدث مقاطع → were collecting"
      },
      {
        q: "While everyone ______, she quietly left the room.",
        choices: ["talked", "talks", "were talking", "are talking"],
        correct: 2,
        explanation: "while + مجموعة مستمرة → were talking"
      }
    ]
  },

  // ===================================================
  // 9. الماضي التام | Past Perfect Tense
  // ===================================================
  "past-perfect": {
    title: "الماضي التام",
    titleEn: "Past Perfect Tense",
    emoji: "🦋",
    summary: {
      intro: "يُستخدم الماضي التام للتعبير عن حدث وقع قبل حدث آخر في الماضي — ما حدث أولاً.",
      formula: "Subject + had + Past Participle (V3)",
      uses: [
        { title: "حدث وقع قبل حدث آخر في الماضي", example: "She had left when he arrived.", translation: "كانت قد غادرت حين وصل." },
        { title: "تجربة كانت مكتملة قبل وقت ماضٍ", example: "I had never seen snow before 2010.", translation: "لم أكن قد رأيت الثلج قبل 2010." },
        { title: "شرط الشيء المستحيل (3rd conditional)", example: "If he had studied, he would have passed.", translation: "لو كان قد درس، لكان قد نجح." }
      ],
      signals: ["before", "after", "already", "just", "by the time", "when", "because", "as soon as", "never before"],
      negation: "Subject + had not (hadn't) + V3",
      question: "Had + Subject + V3?",
      tip: "الترتيب الزمني: الحدث الأول (أقدم) = Past Perfect | الحدث الثاني = Simple Past. مثال: By the time she arrived (PP1), we had already started (PP1 earlier)... wait: 'we had started' (PP) before 'she arrived' (SP).",
      warning: "لا تستخدم الماضي التام إلا إذا كان هناك ماضيان — الأقدم بـ had + V3 والأحدث بالماضي البسيط",
      stepStyle: "في STEP — ترتيب الأحداث، by the time، before/after، والشرط الثالث (3rd conditional)."
    },
    quiz: [
      {
        q: "She ______ the report before the meeting started.",
        choices: ["finished", "finishes", "had finished", "has finished"],
        correct: 2,
        explanation: "حدث أول (انتهت) قبل الاجتماع → had finished"
      },
      {
        q: "By the time he arrived, everyone ______ .",
        choices: ["left", "leaves", "had left", "has left"],
        correct: 2,
        explanation: "by the time = بحلول الوقت → had left"
      },
      {
        q: "I ______ never ______ sushi before I visited Japan.",
        choices: ["had / tried", "have / tried", "did / try", "was / trying"],
        correct: 0,
        explanation: "تجربة قبل وقت ماضٍ → had never tried"
      },
      {
        q: "He failed the exam because he ______ studied.",
        choices: ["didn't", "hadn't", "hasn't", "wasn't"],
        correct: 1,
        explanation: "سبب فشل سابق للفشل → hadn't studied"
      },
      {
        q: "After she ______ her coffee, she started working.",
        choices: ["finishes", "finished", "had finished", "has finished"],
        correct: 2,
        explanation: "after + الحدث الأول → had finished"
      },
      {
        q: "The plane ______ already ______ when we reached the airport.",
        choices: ["had / departed", "has / departed", "was / departing", "did / depart"],
        correct: 0,
        explanation: "أقدم حدث في الماضي → had already departed"
      },
      {
        q: "If he ______ the instructions, the accident wouldn't have happened.",
        choices: ["followed", "had followed", "would follow", "has followed"],
        correct: 1,
        explanation: "3rd conditional → had followed"
      },
      {
        q: "She told me that she ______ the project two days before.",
        choices: ["completed", "had completed", "has completed", "completes"],
        correct: 1,
        explanation: "حدث أسبق في الكلام غير المباشر → had completed"
      },
      {
        q: "By the end of the year, the company ______ its target.",
        choices: ["reaches", "reached", "had reached", "has reached"],
        correct: 2,
        explanation: "by the end of the year (ماضي) → had reached"
      },
      {
        q: "______ you ______ the news before the announcement?",
        choices: ["Did / hear", "Had / heard", "Have / heard", "Were / hearing"],
        correct: 1,
        explanation: "سؤال عن حدث أسبق → Had you heard"
      },
      {
        q: "When the doctor arrived, the patient ______ .",
        choices: ["already died", "has already died", "had already died", "already dies"],
        correct: 2,
        explanation: "حدث أسبق → had already died"
      },
      {
        q: "She ______ the book before the movie came out.",
        choices: ["read", "reads", "had read", "has read"],
        correct: 2,
        explanation: "قبل حدث ماضٍ آخر → had read"
      },
      {
        q: "They ______ not ______ each other before the wedding.",
        choices: ["did / meet", "had / met", "have / met", "were / meeting"],
        correct: 1,
        explanation: "نفي حدث أسبق → had not met"
      },
      {
        q: "He realized he ______ his keys at home.",
        choices: ["leaves", "left", "had left", "has left"],
        correct: 2,
        explanation: "أدرك بعد الخروج (أسبق) → had left"
      },
      {
        q: "As soon as the guests ______, we ______ the food.",
        choices: ["left / served", "had left / served", "left / had served", "had left / had served"],
        correct: 0,
        explanation: "as soon as: الأول ماضٍ بسيط → left / served (كلاهما ماضي بسيط في التتابع المباشر)"
      },
      {
        q: "I ______ to call you, but I ______ your number.",
        choices: ["wanted / had forgotten", "want / forgot", "wanted / forgot", "had wanted / forgot"],
        correct: 0,
        explanation: "wanted (ماضي) + سبب أسبق (نسيان) → had forgotten"
      },
      {
        q: "The teacher gave us more time because we ______ the test yet.",
        choices: ["didn't finish", "haven't finished", "hadn't finished", "don't finish"],
        correct: 2,
        explanation: "سبب ماضٍ أسبق → hadn't finished"
      },
      {
        q: "She was surprised — she ______ that the office was relocated.",
        choices: ["didn't know", "hadn't known", "doesn't know", "hasn't known"],
        correct: 1,
        explanation: "حالة مستمرة سابقة لحدث ماضٍ → hadn't known"
      },
      {
        q: "Before the internet, people ______ on encyclopedias.",
        choices: ["rely", "relied", "had relied", "have relied"],
        correct: 2,
        explanation: "before = قبل الإنترنت (ماضٍ أسبق) → had relied"
      },
      {
        q: "By the time the rescue team arrived, the fire ______ out.",
        choices: ["burnt", "burns", "had burnt", "has burnt"],
        correct: 2,
        explanation: "by the time + ماضي = حدث أسبق → had burnt"
      }
    ]
  }
};

// ===== COURSES DATA =====
const COURSES = [
  {
    id: "premium",
    name: "دورة STEP المميزة",
    version: "النسخة الحديثة 2026",
    icon: "🏆",
    description: "هدفك درجة عالية +90 — هنا البداية الصح! تغطية أشمل وأعمق لكل أقسام الاختبار.",
    scoreRange: [0, 55],
    studyDays: 30,
    link: "https://mohhamed1520.github.io/ayedacdyme/"
  },
  {
    id: "intensive",
    name: "دورة STEP المكثفة",
    version: "تحديث 2026",
    icon: "⚡",
    description: "مثالية إذا وقتك ضيق وتحتاج نتيجة سريعة قبل الاختبار.",
    scoreRange: [56, 70],
    studyDays: 14,
    link: "https://mohhamed1520.github.io/ayedacdyme/"
  },
  {
    id: "comprehensive",
    name: "دورة STEP الشاملة",
    version: "تحديث 2026",
    icon: "📚",
    description: "مناسبة لمن يريد بناء أساس قوي ومراجعة خطوة بخطوة.",
    scoreRange: [71, 100],
    studyDays: 21,
    link: "https://mohhamed1520.github.io/ayedacdyme/"
  }
];

// ===== STUDY PLANS DATA =====
const STUDY_PLANS = {
  premium: {
    weeks: [
      {
        title: "الأسبوع الأول — تأسيس الأزمنة",
        days: [
          { day: "اليوم 1-2", task: "مراجعة المضارع البسيط والمستمر + حل 40 سؤال" },
          { day: "اليوم 3-4", task: "المضارع التام والتام المستمر + 40 سؤال" },
          { day: "اليوم 5-6", task: "الماضي البسيط والمستمر + 40 سؤال" },
          { day: "اليوم 7",   task: "مراجعة عامة للأسبوع + نموذج مصغر" }
        ]
      },
      {
        title: "الأسبوع الثاني — المستقبل والماضي التام",
        days: [
          { day: "اليوم 8-9",   task: "المستقبل البسيط والمستمر + تمارين" },
          { day: "اليوم 10-11", task: "الماضي التام + الشرط الثالث" },
          { day: "اليوم 12-13", task: "نموذج كامل للأزمنة + مراجعة الأخطاء" },
          { day: "اليوم 14",    task: "اختبار تشخيصي شامل" }
        ]
      },
      {
        title: "الأسبوع الثالث — تعمق وتطبيق",
        days: [
          { day: "اليوم 15-17", task: "مراجعة نقاط الضعف + تدريب مكثف" },
          { day: "اليوم 18-19", task: "أسئلة STEP حقيقية من النماذج 51-52" },
          { day: "اليوم 20-21", task: "نموذج اختبار كامل + تقييم ذاتي" }
        ]
      },
      {
        title: "الأسبوع الرابع — مراجعة نهائية",
        days: [
          { day: "اليوم 22-25", task: "مراجعة سريعة لجميع الأزمنة + نماذج" },
          { day: "اليوم 26-28", task: "تدريب مكثف على أسلوب STEP" },
          { day: "اليوم 29-30", task: "راحة قبل الاختبار + مراجعة خفيفة" }
        ]
      }
    ]
  },
  intensive: {
    weeks: [
      {
        title: "الأيام 1-7 — التأسيس السريع",
        days: [
          { day: "اليوم 1-2", task: "المضارع البسيط + المستمر + 40 سؤال سريع" },
          { day: "اليوم 3-4", task: "الماضي البسيط + التام + 40 سؤال" },
          { day: "اليوم 5-6", task: "المستقبل + المستمر + التام المستمر" },
          { day: "اليوم 7",   task: "مراجعة عامة وتحديد نقاط الضعف" }
        ]
      },
      {
        title: "الأيام 8-14 — تطبيق مكثف",
        days: [
          { day: "اليوم 8-10",  task: "نماذج STEP كاملة + تدريب مكثف" },
          { day: "اليوم 11-12", task: "مراجعة الأخطاء الشائعة في STEP" },
          { day: "اليوم 13",    task: "نموذج اختبار كامل بتوقيت حقيقي" },
          { day: "اليوم 14",    task: "مراجعة خفيفة + تحضير نهائي" }
        ]
      }
    ]
  },
  comprehensive: {
    weeks: [
      {
        title: "الأسبوع الأول — القواعد الأساسية",
        days: [
          { day: "اليوم 1-2", task: "المضارع البسيط: القواعد + أمثلة + تطبيق" },
          { day: "اليوم 3-4", task: "المضارع المستمر: القواعد + أمثلة + تطبيق" },
          { day: "اليوم 5-6", task: "المضارع التام: القواعد + for/since + تطبيق" },
          { day: "اليوم 7",   task: "مراجعة الأسبوع + أسئلة مختلطة" }
        ]
      },
      {
        title: "الأسبوع الثاني — تعمق في الأزمنة",
        days: [
          { day: "اليوم 8-9",   task: "المضارع التام المستمر + الفروق الدقيقة" },
          { day: "اليوم 10-11", task: "الماضي البسيط + الأفعال الشاذة" },
          { day: "اليوم 12-13", task: "الماضي المستمر + when/while" },
          { day: "اليوم 14",    task: "الماضي التام + ترتيب الأحداث" }
        ]
      },
      {
        title: "الأسبوع الثالث — المستقبل والتطبيق",
        days: [
          { day: "اليوم 15-16", task: "المستقبل البسيط vs be going to" },
          { day: "اليوم 17-18", task: "المستقبل المستمر + تطبيق" },
          { day: "اليوم 19-20", task: "نماذج STEP + مراجعة الأخطاء" },
          { day: "اليوم 21",    task: "اختبار تشخيصي شامل" }
        ]
      }
    ]
  }
};
