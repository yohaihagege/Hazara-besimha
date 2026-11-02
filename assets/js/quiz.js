// Traductions Français & Hébreu uniquement
const translations = {
    fr: {
        title: "Hazara Besimha - Quiz de Mémorisation",
        language: "Langue:",
        dashboard: "Mon tableau de bord",
        logout: "Déconnexion",
        login: "Connexion",
        register: "Inscription",
        backToLearning: "Retour à l'étude",
        chooseSeder: "Choisissez un ordre (סדר)",
        chooseMassekhet: "Choisissez un traité (מסכת)",
        choosePerek: "Choisissez un chapitre (פרק)",
        chooseDaf: "Choisissez un daf (דף)",
        backToSeder: "← Retour aux ordres",
        backToMassekhet: "← Retour aux traités",
        backToPerek: "← Retour aux chapitres",
        backToDaf: "← Retour",
        question: "Question",
        questions: "questions",
        multipleChoice: "Choix multiple",
        textAnswer: "Réponse libre",
        submit: "Valider",
        nextQuestion: "Question Suivante",
        finishQuiz: "Terminer le Quiz",
        resultsTitle: "Résultats du Quiz",
        correctAnswers: "Bonnes réponses:",
        incorrectAnswers: "Mauvaises réponses:",
        totalQuestions: "Total:",
        retryDaf: "Réviser ce daf à nouveau",
        newSelection: "Choisir un autre daf",
        score: "Score",
        correct: "Correct !",
        incorrect: "Incorrect",
        correctAnswer: "La bonne réponse est :",
        excellent: "Excellent !",
        veryGood: "Très bien !",
        good: "Bien !",
        keepGoing: "Continuez vos efforts !",
        noSederAvailable: "Aucun Seder disponible",
        noMassekhetAvailable: "Aucune Massekhet disponible",
        noDafAvailable: "Aucun Daf disponible",
        addDapimMessage: "Sélectionnez un Daf pour générer les questions depuis daf-yomi.com.",
        noQuestions: "Impossible de charger les questions pour ce Daf.",
        typeAnswer: "Tapez votre réponse ici (en français ou en hébreu)...",
        french: "Français",
        hebrew: "עברית",
        viewOnDafYomi: "📖 Étudier ce Daf sur daf-yomi.com",
        regenerateQuestions: "🔄 Nouvelles questions (daf-yomi.com)",
        loadingDafQuestions: "Récupération du Daf sur daf-yomi.com et génération des questions...",
        dafYomiReady: "Quiz daf-yomi.com"
    },
    he: {
        title: "חזרה בשמחה - חידון שינון הדף היומי",
        language: "שפה:",
        dashboard: "לוח בקרה",
        logout: "התנתק",
        login: "התחבר",
        register: "הרשמה",
        backToLearning: "חזרה ללימוד",
        chooseSeder: "בחר סדר",
        chooseMassekhet: "בחר מסכת",
        choosePerek: "בחר פרק",
        chooseDaf: "בחר דף",
        backToSeder: "← חזרה לסדרים",
        backToMassekhet: "← חזרה למסכתות",
        backToPerek: "← חזרה לפרקים",
        backToDaf: "← חזרה",
        question: "שאלה",
        questions: "שאלות",
        multipleChoice: "רב ברירה",
        textAnswer: "תשובה חופשית",
        submit: "שלח",
        nextQuestion: "שאלה הבאה",
        finishQuiz: "סיים חידון",
        resultsTitle: "תוצאות החידון",
        correctAnswers: "תשובות נכונות:",
        incorrectAnswers: "תשובות שגויות:",
        totalQuestions: "סה\"כ:",
        retryDaf: "חזור על דף זה שוב",
        newSelection: "בחר דף אחר",
        score: "ניקוד",
        correct: "נכון!",
        incorrect: "לא נכון",
        correctAnswer: "התשובה הנכונה היא:",
        excellent: "מצויין!",
        veryGood: "טוב מאוד!",
        good: "טוב!",
        keepGoing: "המשך כך!",
        noSederAvailable: "אין סדר זמין",
        noMassekhetAvailable: "אין מסכת זמינה",
        noDafAvailable: "אין דף זמין",
        addDapimMessage: "בחר דף ליצירת שאלות מאתר daf-yomi.com.",
        noQuestions: "אין שאלות זמינות לדף זה.",
        typeAnswer: "הקלד את תשובתך כאן...",
        french: "צרפתית (Français)",
        hebrew: "עברית",
        viewOnDafYomi: "📖 צפה בדף באתר daf-yomi.com",
        regenerateQuestions: "🔄 שאלות חדשות מ-daf-yomi.com",
        loadingDafQuestions: "טוען את הדף מאתר daf-yomi.com ומייצר שאלות...",
        dafYomiReady: "חידון מהדף היומי"
    }
};

let currentLanguage = 'fr';

function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key;
}

function changeLanguage(lang) {
    if (lang !== 'fr' && lang !== 'he') {
        lang = 'fr';
    }
    currentLanguage = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Rafraîchir la question en cours si l'écran du quiz est actif
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen && quizScreen.classList.contains('active') && currentQuestions.length > 0) {
        displayQuestion();
        updateScore();
    }
}

// Structure des 6 Sedarim du Talmud
const sedarim = [
    {
        id: 'zeraim',
        hebrew: 'זרעים',
        french: 'Semences',
        description: 'Lois agricoles et bénédictions',
        massekhot: ["ברכות", "פאה", "דמאי", "כלאים", "שביעית", "תרומות", "מעשרות", "מעשר שני", "חלה", "ערלה", "ביכורים"]
    },
    {
        id: 'moed',
        hebrew: 'מועד',
        french: 'Temps fixé',
        description: 'Chabbat et fêtes',
        massekhot: ["שבת", "עירובין", "פסחים", "שקלים", "יומא", "סוכה", "ביצה", "ראש השנה", "תענית", "מגילה", "מועד קטן", "חגיגה"]
    },
    {
        id: 'nashim',
        hebrew: 'נשים',
        french: 'Femmes',
        description: 'Lois familiales et mariage',
        massekhot: ["יבמות", "כתובות", "נדרים", "נזיר", "סוטה", "גיטין", "קידושין"]
    },
    {
        id: 'nezikin',
        hebrew: 'נזיקין',
        french: 'Dommages',
        description: 'Droit civil et pénal',
        massekhot: ["בבא קמא", "בבא מציעא", "בבא בתרא", "סנהדרין", "מכות", "שבועות", "עבודה זרה", "הוריות"]
    },
    {
        id: 'kodashim',
        hebrew: 'קדשים',
        french: 'Choses saintes',
        description: 'Lois du Temple et sacrifices',
        massekhot: ["זבחים", "מנחות", "חולין", "בכורות", "ערכין", "תמורה", "כריתות", "מעילה", "תמיד", "מידות", "קינים"]
    },
    {
        id: 'tohorot',
        hebrew: 'טהרות',
        french: 'Puretés',
        description: 'Lois de pureté rituelle',
        massekhot: ["נדה"]
    }
];

// Structure complète des Massekhot avec l'identifiant daf-yomi.com (`massechet`) et le dernier Daf (`maxDaf`)
const allMassekhotStructure = {
    // Seder Zeraim
    "ברכות": { name: "Berakhot", perakimCount: 9, maxDaf: 64, massechetId: 283 },
    "פאה": { name: "Peah", perakimCount: 8, maxDaf: 20, massechetId: 283 },
    "דמאי": { name: "Demai", perakimCount: 7, maxDaf: 18, massechetId: 283 },
    "כלאים": { name: "Kilayim", perakimCount: 9, maxDaf: 20, massechetId: 283 },
    "שביעית": { name: "Sheviit", perakimCount: 10, maxDaf: 22, massechetId: 283 },
    "תרומות": { name: "Terumot", perakimCount: 11, maxDaf: 24, massechetId: 283 },
    "מעשרות": { name: "Maasrot", perakimCount: 5, maxDaf: 14, massechetId: 283 },
    "מעשר שני": { name: "Maaser Sheni", perakimCount: 5, maxDaf: 14, massechetId: 283 },
    "חלה": { name: "Challah", perakimCount: 4, maxDaf: 12, massechetId: 283 },
    "ערלה": { name: "Orlah", perakimCount: 3, maxDaf: 10, massechetId: 283 },
    "ביכורים": { name: "Bikkurim", perakimCount: 4, maxDaf: 12, massechetId: 283 },

    // Seder Moed
    "שבת": { name: "Shabbat", perakimCount: 24, maxDaf: 157, massechetId: 284 },
    "עירובין": { name: "Eruvin", perakimCount: 10, maxDaf: 105, massechetId: 285 },
    "פסחים": { name: "Pesachim", perakimCount: 10, maxDaf: 121, massechetId: 286 },
    "שקלים": { name: "Shekalim", perakimCount: 8, maxDaf: 22, massechetId: 287 },
    "יומא": { name: "Yoma", perakimCount: 8, maxDaf: 88, massechetId: 288 },
    "סוכה": { name: "Sukkah", perakimCount: 5, maxDaf: 56, massechetId: 289 },
    "ביצה": { name: "Beitzah", perakimCount: 5, maxDaf: 40, massechetId: 290 },
    "ראש השנה": { name: "Rosh Hashanah", perakimCount: 4, maxDaf: 35, massechetId: 291 },
    "תענית": { name: "Taanit", perakimCount: 4, maxDaf: 31, massechetId: 292 },
    "מגילה": { name: "Megillah", perakimCount: 4, maxDaf: 32, massechetId: 293 },
    "מועד קטן": { name: "Moed Katan", perakimCount: 3, maxDaf: 29, massechetId: 294 },
    "חגיגה": { name: "Chagigah", perakimCount: 3, maxDaf: 27, massechetId: 295 },

    // Seder Nashim
    "יבמות": { name: "Yevamot", perakimCount: 16, maxDaf: 122, massechetId: 296 },
    "כתובות": { name: "Ketubot", perakimCount: 13, maxDaf: 112, massechetId: 297 },
    "נדרים": { name: "Nedarim", perakimCount: 11, maxDaf: 91, massechetId: 298 },
    "נזיר": { name: "Nazir", perakimCount: 9, maxDaf: 66, massechetId: 299 },
    "סוטה": { name: "Sotah", perakimCount: 9, maxDaf: 49, massechetId: 300 },
    "גיטין": { name: "Gittin", perakimCount: 9, maxDaf: 90, massechetId: 301 },
    "קידושין": { name: "Kiddushin", perakimCount: 4, maxDaf: 82, massechetId: 302 },

    // Seder Nezikin
    "בבא קמא": { name: "Bava Kamma", perakimCount: 10, maxDaf: 119, massechetId: 303 },
    "בבא מציעא": { name: "Bava Metzia", perakimCount: 10, maxDaf: 119, massechetId: 304 },
    "בבא בתרא": { name: "Bava Batra", perakimCount: 10, maxDaf: 176, massechetId: 305 },
    "סנהדרין": { name: "Sanhedrin", perakimCount: 11, maxDaf: 113, massechetId: 306 },
    "מכות": { name: "Makkot", perakimCount: 3, maxDaf: 24, massechetId: 307 },
    "שבועות": { name: "Shevuot", perakimCount: 8, maxDaf: 49, massechetId: 308 },
    "עבודה זרה": { name: "Avodah Zarah", perakimCount: 5, maxDaf: 76, massechetId: 309 },
    "הוריות": { name: "Horayot", perakimCount: 3, maxDaf: 14, massechetId: 310 },

    // Seder Kodashim
    "זבחים": { name: "Zevachim", perakimCount: 14, maxDaf: 120, massechetId: 311 },
    "מנחות": { name: "Menachot", perakimCount: 13, maxDaf: 110, massechetId: 312 },
    "חולין": { name: "Chullin", perakimCount: 12, maxDaf: 142, massechetId: 313 },
    "בכורות": { name: "Bekhorot", perakimCount: 9, maxDaf: 61, massechetId: 314 },
    "ערכין": { name: "Arakhin", perakimCount: 9, maxDaf: 34, massechetId: 315 },
    "תמורה": { name: "Temurah", perakimCount: 7, maxDaf: 34, massechetId: 316 },
    "כריתות": { name: "Keritot", perakimCount: 6, maxDaf: 28, massechetId: 317 },
    "מעילה": { name: "Meilah", perakimCount: 6, maxDaf: 22, massechetId: 318 },
    "תמיד": { name: "Tamid", perakimCount: 7, maxDaf: 33, massechetId: 319 },
    "מידות": { name: "Middot", perakimCount: 5, maxDaf: 37, massechetId: 320 },
    "קינים": { name: "Kinnim", perakimCount: 3, maxDaf: 25, massechetId: 321 },

    // Seder Tohorot
    "נדה": { name: "Niddah", perakimCount: 10, maxDaf: 73, massechetId: 322 }
};

// Convertir un entier (ex: 2, 15, 176) en numérotation hébraïque (ex: "ב", "טו", "קעו")
function numberToHebrewLetters(num) {
    const hundreds = ['', 'ק', 'ר'];
    const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
    const units = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];

    const h = Math.floor(num / 100);
    const rem = num % 100;

    if (rem === 15) {
        return (hundreds[h] || '') + 'טו';
    }
    if (rem === 16) {
        return (hundreds[h] || '') + 'טז';
    }

    const t = Math.floor(rem / 10);
    const u = rem % 10;

    return (hundreds[h] || '') + (tens[t] || '') + (units[u] || '');
}

// Générer les Perakim et répartir tous les Dapim (de Daf 2 à maxDaf) pour chaque Massekhet
function generatePerakimWithDapim(perakimCount, maxDaf) {
    const hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב', 'יג', 'יד', 'טו', 'טז', 'יז', 'יח', 'יט', 'כ', 'כא', 'כב', 'כג', 'כד'];
    const perakim = {};
    const totalDapimCount = Math.max(perakimCount, maxDaf - 1); // Les Dapim commencent à Daf 2 (דף ב)
    const dapimPerPerek = Math.max(1, Math.floor(totalDapimCount / perakimCount));

    let currentDafNum = 2;

    for (let i = 0; i < perakimCount; i++) {
        const perekNum = hebrewLetters[i] || (i + 1).toString();
        const perekKey = `פרק ${perekNum}`;
        const dapim = {};

        const endDafNum = (i === perakimCount - 1)
            ? maxDaf
            : Math.min(maxDaf, currentDafNum + dapimPerPerek - 1);

        for (let d = currentDafNum; d <= endDafNum; d++) {
            const dafHeb = `דף ${numberToHebrewLetters(d)}`;
            dapim[dafHeb] = {
                dafNum: d,
                questions: [] // Sera chargé dynamiquement depuis /api/quiz/questions (daf-yomi.com)
            };
        }

        currentDafNum = Math.min(maxDaf, endDafNum + 1);

        perakim[perekKey] = {
            name: `Perek ${perekNum}`,
            dapim: dapim
        };
    }

    return perakim;
}

// Générer la structure complète de tous les traités, chapitres et dapim
function generateCompleteTalmudData() {
    const completeData = {};

    Object.keys(allMassekhotStructure).forEach(massekhetKey => {
        const info = allMassekhotStructure[massekhetKey];
        completeData[massekhetKey] = {
            name: info.name,
            massechetId: info.massechetId,
            maxDaf: info.maxDaf,
            perakim: generatePerakimWithDapim(info.perakimCount, info.maxDaf)
        };
    });

    return completeData;
}

// Questions de secours locales (en français et hébreu)
const existingDataWithQuestions = {
    "ברכות": {
        name: "Berakhot",
        perakim: {
            "פרק א": {
                name: "Perek Aleph",
                dapim: {
                    "דף ב": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "מהו הנושא העיקרי של דף ב במסכת ברכות?",
                                questionFr: "Quel est le sujet principal du daf bet dans Berakhot ?",
                                options: [
                                    "זמן קריאת שמע בערבית",
                                    "ברכות השחר",
                                    "תפילת העמידה",
                                    "ברכת המזון"
                                ],
                                optionsFr: [
                                    "L'heure de la lecture du Chema le soir",
                                    "Les bénédictions du matin (Birkot HaChahar)",
                                    "La prière de la Amida",
                                    "Le Birkat HaMazon"
                                ],
                                correctAnswer: 0,
                                explanation: "דף ב עוסק בזמן קריאת שמע בערבית - מאימתי קורין את שמע בערבין",
                                explanationFr: "Le daf bet traite du moment de la lecture du Chema le soir : « À partir de quand lit-on le Chema le soir ? » (daf-yomi.com)."
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "מהו הזמן המדויק לקריאת שמע בערב לפי המשנה?",
                                questionFr: "Quel est le moment précis pour lire le Chema le soir selon la Michna ?",
                                options: [
                                    "משעה שהכהנים נכנסים לאכול בתרומתן",
                                    "משעה שהשמש שוקעת",
                                    "משעה שהכוכבים יוצאים",
                                    "משעה שהערב מתחיל"
                                ],
                                optionsFr: [
                                    "Dès l'heure où les Kohanim rentrent consommer leur Terouma",
                                    "Dès le coucher du soleil",
                                    "Dès que la lune se lève",
                                    "Au milieu de la nuit"
                                ],
                                correctAnswer: 0,
                                explanation: "הזמן לקריאת שמע בערב מתחיל משעה שהכהנים נכנסים לאכול בתרומתן (צאת הכוכבים)",
                                explanationFr: "Le temps du Chema du soir commence à l'heure où les Kohanim devenus impurs rentrent consommer leur Terouma après la sortie des étoiles."
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהי המילה הראשונה במשנה הראשונה של דף ב?",
                                questionFr: "Quel est le premier mot de la première Michna du daf bet ?",
                                correctAnswer: "מאימתי",
                                correctAnswerFr: "Meematai",
                                explanation: "המילה הראשונה היא 'מאימתי' - מאימתי קורין את שמע בערבין",
                                explanationFr: "Le premier mot est « מאימתי » (Meémataï - À partir de quand)."
                            }
                        ]
                    }
                }
            }
        }
    }
};

function mergeTalmudData() {
    const completeData = generateCompleteTalmudData();

    Object.keys(existingDataWithQuestions).forEach(massekhetKey => {
        if (completeData[massekhetKey]) {
            Object.keys(existingDataWithQuestions[massekhetKey].perakim).forEach(perekKey => {
                if (completeData[massekhetKey].perakim[perekKey]) {
                    Object.keys(existingDataWithQuestions[massekhetKey].perakim[perekKey].dapim).forEach(dafKey => {
                        const existingDaf = existingDataWithQuestions[massekhetKey].perakim[perekKey].dapim[dafKey];
                        if (completeData[massekhetKey].perakim[perekKey].dapim[dafKey]) {
                            completeData[massekhetKey].perakim[perekKey].dapim[dafKey].questions = existingDaf.questions;
                        } else {
                            completeData[massekhetKey].perakim[perekKey].dapim[dafKey] = existingDaf;
                        }
                    });
                }
            });
        }
    });

    return completeData;
}

const talmudData = mergeTalmudData();

// État de l'application
let currentSeder = null;
let currentMassekhet = null;
let currentPerek = null;
let currentDaf = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Initialisation (compatible chargement direct, module différé et navigation)
function initQuizApp() {
    const sedarimList = document.getElementById('sedarim-list');
    if (!sedarimList) {
        return;
    }

    displaySedarim();

    if (sedarimList.dataset.listenersBound === '1') {
        return;
    }
    sedarimList.dataset.listenersBound = '1';

    const backToSederBtn = document.getElementById('back-to-seder');
    if (backToSederBtn) {
        backToSederBtn.addEventListener('click', () => {
            showScreen('seder-screen');
        });
    }

    const backToMassekhetBtn = document.getElementById('back-to-massekhet');
    if (backToMassekhetBtn) {
        backToMassekhetBtn.addEventListener('click', () => {
            showScreen('massekhet-screen');
        });
    }

    const backToPerekBtn = document.getElementById('back-to-perek');
    if (backToPerekBtn) {
        backToPerekBtn.addEventListener('click', () => {
            showScreen('perek-screen');
        });
    }

    const backToDafBtn = document.getElementById('back-to-daf');
    if (backToDafBtn) {
        backToDafBtn.addEventListener('click', () => {
            showScreen('daf-screen');
        });
    }

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitAnswer);
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    const finishBtn = document.getElementById('finish-btn');
    if (finishBtn) {
        finishBtn.addEventListener('click', finishQuiz);
    }

    const retryDafBtn = document.getElementById('retry-daf-btn');
    if (retryDafBtn) {
        retryDafBtn.addEventListener('click', retryDaf);
    }

    const newSelectionBtn = document.getElementById('new-selection-btn');
    if (newSelectionBtn) {
        newSelectionBtn.addEventListener('click', () => {
            showScreen('seder-screen');
        });
    }

    const regenerateBtn = document.getElementById('regenerate-questions-btn');
    if (regenerateBtn) {
        regenerateBtn.addEventListener('click', () => {
            startQuiz(true);
        });
    }

    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
        changeLanguage(languageSelect.value || 'fr');
    }
}

window.selectSederById = function (sederId) {
    const seder = sedarim.find(s => s.id === sederId);
    if (!seder) return;
    currentSeder = seder;
    displayMassekhotForSeder(seder.id);
    showScreen('massekhet-screen');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuizApp);
} else {
    initQuizApp();
}
document.addEventListener('turbo:load', initQuizApp);

// Afficher la liste des Sedarim
function displaySedarim() {
    const list = document.getElementById('sedarim-list');
    if (!list) return;

    list.innerHTML = '';

    sedarim.forEach((seder) => {
        const item = document.createElement('button');
        item.className = 'btn btn-seder';
        item.innerHTML = `
            <span class="hebrew">${seder.hebrew}</span>
            <span class="french">${seder.french}</span>
            <span class="description">${seder.description}</span>
        `;

        item.addEventListener('click', () => {
            currentSeder = seder;
            displayMassekhotForSeder(seder.id);
            showScreen('massekhet-screen');
        });

        list.appendChild(item);
    });

    showScreen('seder-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    window.scrollTo(0, 0);
}

// Afficher les Massékhot d'un Seder spécifique
function displayMassekhotForSeder(sederId) {
    const seder = sedarim.find(s => s.id === sederId);
    if (!seder) return;

    const list = document.getElementById('massekhot-list');
    if (!list) return;

    list.innerHTML = '';

    const newTitle = currentLanguage === 'he'
        ? `${t('chooseMassekhet')} - ${seder.hebrew}`
        : `${t('chooseMassekhet')} - ${seder.french} (${seder.hebrew})`;
    document.querySelector('#massekhet-screen h3').textContent = newTitle;

    seder.massekhot.forEach((massekhetKey, index) => {
        const massekhet = talmudData[massekhetKey];
        if (massekhet) {
            const item = document.createElement('div');
            item.className = 'selection-item';
            item.innerHTML = `
                <div class="selection-item-hebrew">${massekhetKey}</div>
                <div class="selection-item-name">${massekhet.name}</div>
            `;

            item.addEventListener('click', () => {
                currentMassekhet = massekhetKey;
                displayPerakim();
            });

            list.appendChild(item);
            setTimeout(() => {
                item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 30);
        }
    });

    showScreen('massekhet-screen');
}

// Afficher la liste des perakim
function displayPerakim() {
    const massekhet = talmudData[currentMassekhet];
    const list = document.getElementById('perakim-list');
    list.innerHTML = '';

    document.getElementById('perek-title').textContent =
        `${t('choosePerek')} - ${massekhet.name} (${currentMassekhet})`;

    Object.keys(massekhet.perakim).forEach((perekKey, index) => {
        const perek = massekhet.perakim[perekKey];
        const dapimKeys = Object.keys(perek.dapim);
        const firstDaf = dapimKeys[0] || '';
        const lastDaf = dapimKeys[dapimKeys.length - 1] || '';

        const item = document.createElement('div');
        item.className = 'selection-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.innerHTML = `
            <div class="selection-item-hebrew">${perekKey}</div>
            <div class="selection-item-name">${perek.name} (${firstDaf} - ${lastDaf})</div>
        `;
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                currentPerek = perekKey;
                displayDapim();
            }, 120);
        });
        list.appendChild(item);
        setTimeout(() => {
            item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 30);
    });

    showScreen('perek-screen');
}

// Afficher la liste des dapim (tous disponibles via daf-yomi.com)
function displayDapim() {
    const massekhet = talmudData[currentMassekhet];
    const perek = massekhet.perakim[currentPerek];
    const list = document.getElementById('dapim-list');
    list.innerHTML = '';

    document.getElementById('daf-title').textContent =
        `${t('chooseDaf')} - ${massekhet.name} ${currentPerek}`;

    const dapimKeys = Object.keys(perek.dapim);

    dapimKeys.forEach((dafKey, index) => {
        const daf = perek.dapim[dafKey];
        const item = document.createElement('div');
        item.className = 'selection-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';

        const cachedCount = daf.questions && daf.questions.length > 0 ? daf.questions.length : null;
        const subtitle = cachedCount
            ? `${cachedCount} ${t('questions')}`
            : `✨ ${t('dafYomiReady')}`;

        item.innerHTML = `
            <div class="selection-item-hebrew">${dafKey}</div>
            <div class="selection-item-name">${subtitle}</div>
        `;

        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                currentDaf = dafKey;
                startQuiz(false);
            }, 120);
        });

        list.appendChild(item);
        setTimeout(() => {
            item.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 20);
    });

    showScreen('daf-screen');
}

// Démarrer le quiz en récupérant ou générant les questions depuis /api/quiz/questions (daf-yomi.com/dafYomi.aspx)
async function startQuiz(forceRefresh = false) {
    const massekhet = talmudData[currentMassekhet];
    const perek = massekhet.perakim[currentPerek];
    const daf = perek.dapim[currentDaf];

    // Mettre à jour le fil d'Ariane
    const sederEl = document.getElementById('current-seder-name');
    if (sederEl && currentSeder) {
        sederEl.textContent = currentLanguage === 'he' ? currentSeder.hebrew : currentSeder.french;
    }
    document.getElementById('current-massekhet-name').textContent = massekhet.name;
    document.getElementById('current-perek-name').textContent = currentPerek;
    document.getElementById('current-daf-name').textContent = currentDaf;

    // Lien par défaut vers daf-yomi.com/dafYomi.aspx
    const dafYomiLink = document.getElementById('daf-yomi-link');
    if (dafYomiLink) {
        const dafNum = daf.dafNum || 2;
        const massechetId = massekhet.massechetId || 283;
        dafYomiLink.href = `https://daf-yomi.com/dafYomi.aspx?massechet=${massechetId}&daf=${dafNum}`;
    }

    showScreen('quiz-screen');

    const loadingEl = document.getElementById('quiz-loading');
    const bodyEl = document.getElementById('quiz-body-content');

    if (loadingEl && bodyEl) {
        loadingEl.style.display = 'block';
        bodyEl.style.display = 'none';
    }

    try {
        const params = new URLSearchParams({
            massekhet: currentMassekhet,
            perek: currentPerek,
            daf: currentDaf,
            refresh: forceRefresh ? '1' : '0'
        });

        const response = await fetch(`/api/quiz/questions?${params.toString()}`);
        if (response.ok) {
            const data = await response.json();
            if (data.portalUrl && dafYomiLink) {
                dafYomiLink.href = data.portalUrl;
            }
            if (Array.isArray(data.questions) && data.questions.length > 0) {
                daf.questions = data.questions;
            }
        }
    } catch (err) {
        console.error('Erreur lors du chargement des questions depuis le serveur:', err);
    } finally {
        if (loadingEl && bodyEl) {
            loadingEl.style.display = 'none';
            bodyEl.style.display = 'block';
        }
    }

    if (!daf || !daf.questions || daf.questions.length === 0) {
        alert(t('noQuestions'));
        showScreen('daf-screen');
        return;
    }

    currentQuestions = shuffleArray([...daf.questions]);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    displayQuestion();
    updateScore();
}

// Afficher une question (Français ou Hébreu)
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;

    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.classList.remove('show', 'correct', 'incorrect', 'explanation');
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';

    const existingExplanation = document.querySelector('.feedback.explanation');
    if (existingExplanation) {
        existingExplanation.remove();
    }

    document.getElementById('question-number').textContent =
        `${t('question')} ${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    const typeText = question.type === 'multiple-choice' ? t('multipleChoice') : t('textAnswer');
    document.getElementById('question-type').textContent = `${t('question')}: ${typeText}`;

    const questionTextEl = document.getElementById('question-text');
    if (currentLanguage === 'he') {
        questionTextEl.style.direction = 'rtl';
        questionTextEl.style.textAlign = 'right';
        questionTextEl.innerHTML = question.question;
    } else {
        questionTextEl.style.direction = 'ltr';
        questionTextEl.style.textAlign = 'left';
        const frText = question.questionFr || question.question;
        questionTextEl.innerHTML = `
            <div>${frText}</div>
            <div style="color: #7a6a58; direction: rtl; text-align: right; font-size: 0.85em; margin-top: 10px; border-top: 1px dashed rgba(212, 175, 55, 0.35); padding-top: 8px;">${question.question}</div>
        `;
    }

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    if (question.type === 'multiple-choice') {
        question.options.forEach((optionHe, index) => {
            const optionFr = (question.optionsFr && question.optionsFr[index]) ? question.optionsFr[index] : null;
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';

            if (currentLanguage === 'he' || !optionFr) {
                optionDiv.style.direction = 'rtl';
                optionDiv.style.textAlign = 'right';
                optionDiv.innerHTML = `
                    <input type="radio" name="answer" id="option-${index}" value="${index}">
                    <label for="option-${index}">${optionHe}</label>
                `;
            } else {
                optionDiv.style.direction = 'ltr';
                optionDiv.style.textAlign = 'left';
                optionDiv.innerHTML = `
                    <input type="radio" name="answer" id="option-${index}" value="${index}" style="margin-right: 12px; margin-left: 0;">
                    <label for="option-${index}" style="cursor: pointer;">
                        <strong>${optionFr}</strong>
                        <span style="display: block; font-size: 0.9em; color: #666; direction: rtl; text-align: right; margin-top: 4px;">${optionHe}</span>
                    </label>
                `;
            }

            optionDiv.addEventListener('click', () => {
                document.getElementById(`option-${index}`).checked = true;
                selectAnswer(index);
            });
            answersContainer.appendChild(optionDiv);
        });
    } else if (question.type === 'text') {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'answer-option';
        inputDiv.innerHTML = `
            <input type="text" id="text-answer" placeholder="${t('typeAnswer')}" style="direction: ${currentLanguage === 'he' ? 'rtl' : 'ltr'}; text-align: ${currentLanguage === 'he' ? 'right' : 'left'};">
        `;
        const textInput = inputDiv.querySelector('#text-answer');
        textInput.addEventListener('input', () => {
            selectedAnswer = textInput.value.trim();
            document.getElementById('submit-btn').disabled = !selectedAnswer;
        });
        answersContainer.appendChild(inputDiv);
    }

    updateProgress();
}

function selectAnswer(index) {
    selectedAnswer = index;
    document.getElementById('submit-btn').disabled = false;

    document.querySelectorAll('.answer-option').forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
}

// Normaliser une réponse texte (retire le nikoud hébraïque, les accents français, la ponctuation et les articles)
function normalizeAnswerText(str) {
    if (!str) return '';
    return str
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // retire les accents latins
        .replace(/[\u0591-\u05C7]/g, '') // retire le nikoud hébraïque
        .toLowerCase()
        .replace(/['"״׳.,;:!?()\[\]\-]/g, ' ')
        .replace(/\b(le|la|les|l|un|une|de|du|des|d|a|au|aux)\b/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// Soumettre la réponse
function submitAnswer() {
    if (selectedAnswer === null) return;

    const question = currentQuestions[currentQuestionIndex];
    const feedbackDiv = document.getElementById('feedback');
    let isCorrect = false;

    if (question.type === 'multiple-choice') {
        isCorrect = selectedAnswer === question.correctAnswer;
    } else if (question.type === 'text') {
        const userNorm = normalizeAnswerText(selectedAnswer);
        const candidates = [
            question.correctAnswer || '',
            question.correctAnswerFr || '',
            ...(Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [])
        ]
            .map(normalizeAnswerText)
            .filter(Boolean);

        isCorrect = userNorm.length > 0 && candidates.some(cand =>
            userNorm === cand ||
            (userNorm.length >= 3 && (userNorm.includes(cand) || cand.includes(userNorm)))
        );
    }

    feedbackDiv.classList.add('show');
    feedbackDiv.style.direction = currentLanguage === 'he' ? 'rtl' : 'ltr';
    feedbackDiv.style.textAlign = currentLanguage === 'he' ? 'right' : 'left';

    if (isCorrect) {
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.textContent = t('correct');
        score++;
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
        if (question.type === 'multiple-choice') {
            const correctOptionHe = question.options[question.correctAnswer];
            const correctOptionFr = (question.optionsFr && question.optionsFr[question.correctAnswer])
                ? question.optionsFr[question.correctAnswer]
                : correctOptionHe;
            const displayedOption = currentLanguage === 'he' ? correctOptionHe : `${correctOptionFr} (${correctOptionHe})`;
            feedbackDiv.textContent = `${t('incorrect')}. ${t('correctAnswer')} ${displayedOption}`;
        } else {
            const displayedCorrect = (currentLanguage === 'fr' && question.correctAnswerFr)
                ? `${question.correctAnswerFr} (${question.correctAnswer})`
                : question.correctAnswer;
            feedbackDiv.textContent = `${t('incorrect')}. ${t('correctAnswer')} ${displayedCorrect}`;
        }
    }

    const explanationText = (currentLanguage === 'fr' && question.explanationFr)
        ? question.explanationFr
        : question.explanation;

    if (explanationText) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'feedback explanation show';
        explanationDiv.style.direction = currentLanguage === 'he' ? 'rtl' : 'ltr';
        explanationDiv.style.textAlign = currentLanguage === 'he' ? 'right' : 'left';
        explanationDiv.textContent = explanationText;
        feedbackDiv.after(explanationDiv);
    }

    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
        if (question.type === 'multiple-choice') {
            const input = option.querySelector('input');
            if (input) {
                const index = parseInt(input.value);
                if (index === question.correctAnswer) {
                    option.classList.add('correct');
                } else if (index === selectedAnswer && !isCorrect) {
                    option.classList.add('incorrect');
                }
            }
        }
    });

    document.getElementById('submit-btn').style.display = 'none';
    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'inline-block';
    }

    updateScore();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

async function saveQuizResults(score, totalQuestions, massekhet, perek, daf) {
    const data = {
        massekhet: massekhet,
        perek: perek,
        daf: daf,
        score: score,
        totalQuestions: totalQuestions
    };

    try {
        const response = await fetch('/api/quiz/result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                return;
            }
            throw new Error('Erreur réseau ou serveur');
        }
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des résultats:', error);
    }
}

function finishQuiz() {
    saveQuizResults(score, currentQuestions.length, currentMassekhet, currentPerek, currentDaf);
    showResults();
}

function showResults() {
    showScreen('results-screen');

    const percentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('final-score').textContent = percentage;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = currentQuestions.length - score;
    document.getElementById('total-questions').textContent = currentQuestions.length;

    const messageDiv = document.getElementById('score-message');
    if (percentage >= 90) {
        messageDiv.textContent = t('excellent');
        messageDiv.style.color = '#28a745';
    } else if (percentage >= 70) {
        messageDiv.textContent = t('veryGood');
        messageDiv.style.color = '#667eea';
    } else if (percentage >= 50) {
        messageDiv.textContent = t('good');
        messageDiv.style.color = '#ffc107';
    } else {
        messageDiv.textContent = t('keepGoing');
        messageDiv.style.color = '#dc3545';
    }
}

function retryDaf() {
    startQuiz(false);
}

function updateScore() {
    document.getElementById('score').textContent = `${t('score')}: ${score}`;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
