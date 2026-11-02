// Mock Translations
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
        backToSeder: "Retour aux ordres",
        backToMassekhet: "Retour aux traités",
        backToPerek: "Retour aux chapitres",
        backToDaf: "Retour",
        question: "Question",
        questions: "Questions",
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
        correct: "Correct!",
        incorrect: "Incorrect",
        correctAnswer: "La bonne réponse est :",
        excellent: "Excellent !",
        veryGood: "Très bien !",
        good: "Bien !",
        keepGoing: "Continuez vos efforts !",
        noSederAvailable: "Aucun Seder disponible",
        noMassekhetAvailable: "Aucune Massekhet disponible",
        noDafAvailable: "Aucun Daf disponible",
        addDapimMessage: "Ajoutez des questions pour commencer.",
        noQuestions: "Aucune question disponible pour ce Daf.",
        typeAnswer: "Tapez votre réponse ici...",
        french: "Français",
        english: "Anglais",
        hebrew: "Hébreu",
        noProgressYet: "Aucune progression pour le moment.",
        noDafStudiedYet: "Aucun daf étudié pour le moment.",
        lastScore: "Dernière note",
        bestScore: "Meilleure note",
        attempts: "Tentatives",
        noQuizYet: "Aucun quiz effectué pour le moment.",
        loginTitle: "Connexion",
        email: "Email",
        password: "Mot de passe",
        loginButton: "Se connecter",
        noAccount: "Pas encore de compte ?",
        signUp: "S'inscrire",
        registerTitle: "Inscription",
        username: "Nom d'utilisateur",
        confirmPassword: "Confirmer le mot de passe",
        registerButton: "S'inscrire",
        haveAccount: "Déjà inscrit ?",
        signIn: "Se connecter",
        registrationSuccess: "Inscription réussie !",
        passwordsNotMatch: "Les mots de passe ne correspondent pas.",
        error: "Erreur :",
        mustBeLoggedIn: "Vous devez être connecté pour voir votre tableau de bord."
    },
    en: {
        title: "Hazara Besimha - Memorization Quiz",
        language: "Language:",
        dashboard: "My Dashboard",
        logout: "Logout",
        login: "Login",
        register: "Register",
        backToLearning: "Back to Learning",
        chooseSeder: "Choose an Order (Seder)",
        chooseMassekhet: "Choose a Tractate (Massekhet)",
        choosePerek: "Choose a Chapter (Perek)",
        chooseDaf: "Choose a Daf",
        backToSeder: "Back to Orders",
        backToMassekhet: "Back to Tractates",
        backToPerek: "Back to Chapters",
        backToDaf: "Back",
        question: "Question",
        questions: "Questions",
        multipleChoice: "Multiple Choice",
        textAnswer: "Text Answer",
        submit: "Submit",
        nextQuestion: "Next Question",
        finishQuiz: "Finish Quiz",
        resultsTitle: "Quiz Results",
        correctAnswers: "Correct Answers:",
        incorrectAnswers: "Incorrect Answers:",
        totalQuestions: "Total:",
        retryDaf: "Review this Daf again",
        newSelection: "Choose another Daf",
        score: "Score",
        correct: "Correct!",
        incorrect: "Incorrect",
        correctAnswer: "The correct answer is:",
        excellent: "Excellent!",
        veryGood: "Very Good!",
        good: "Good!",
        keepGoing: "Keep going!",
        noSederAvailable: "No Seder available",
        noMassekhetAvailable: "No Massekhet available",
        noDafAvailable: "No Daf available",
        addDapimMessage: "Add questions to start.",
        noQuestions: "No questions available for this Daf.",
        typeAnswer: "Type your answer here...",
        french: "French",
        english: "English",
        hebrew: "Hebrew",
        noProgressYet: "No progress yet.",
        noDafStudiedYet: "No daf studied yet.",
        lastScore: "Last score",
        bestScore: "Best score",
        attempts: "Attempts",
        noQuizYet: "No quiz taken yet.",
        loginTitle: "Login",
        email: "Email",
        password: "Password",
        loginButton: "Login",
        noAccount: "No account yet?",
        signUp: "Sign Up",
        registerTitle: "Register",
        username: "Username",
        confirmPassword: "Confirm Password",
        registerButton: "Register",
        haveAccount: "Already registered?",
        signIn: "Sign In",
        registrationSuccess: "Registration successful!",
        passwordsNotMatch: "Passwords do not match.",
        error: "Error:",
        mustBeLoggedIn: "You must be logged in to view your dashboard."
    },
    he: {
        title: "חזרה בשמחה - חידון שינון",
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
        backToSeder: "חזרה לסדרים",
        backToMassekhet: "חזרה למסכתות",
        backToPerek: "חזרה לפרקים",
        backToDaf: "חזרה",
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
        totalQuestions: "סה"כ:",
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
        addDapimMessage: "הוסף שאלות כדי להתחיל.",
        noQuestions: "אין שאלות זמינות לדף זה.",
        typeAnswer: "הקלד את תשובתך כאן...",
        french: "צרפתית",
        english: "אנגלית",
        hebrew: "עברית",
        noProgressYet: "אין התקדמות עדיין.",
        noDafStudiedYet: "לא נלמד אף דף עדיין.",
        lastScore: "ציון אחרון",
        bestScore: "ציון הטוב ביותר",
        attempts: "נסיונות",
        noQuizYet: "לא בוצע חידון עדיין.",
        loginTitle: "התחברות",
        email: "אימייל",
        password: "סיסמה",
        loginButton: "התחבר",
        noAccount: "עדיין אין חשבון?",
        signUp: "הירשם",
        registerTitle: "הרשמה",
        username: "שם משתמש",
        confirmPassword: "אמת סיסמה",
        registerButton: "הירשם",
        haveAccount: "כבר רשום?",
        signIn: "התחבר",
        registrationSuccess: "ההרשמה הצליחה!",
        passwordsNotMatch: "הסיסמאות אינן תואמות.",
        error: "שגיאה:",
        mustBeLoggedIn: "עליך להתחבר כדי לצפות בלוח הבקרה שלך."
    }
};

let currentLanguage = 'fr';

function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return key; // Fallback to key if not found
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Refresh current view if needed (e.g. to update dynamic titles)
    if (document.getElementById('massekhet-screen').classList.contains('active')) {
        // Refresh massekhet title logic if complicated
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

// Structure complète de toutes les massekhot du Talmud de Babylone
const allMassekhotStructure = {
    // Seder Zeraim
    "ברכות": { name: "Berakhot", perakimCount: 9 },
    "פאה": { name: "Peah", perakimCount: 8 },
    "דמאי": { name: "Demai", perakimCount: 7 },
    "כלאים": { name: "Kilayim", perakimCount: 9 },
    "שביעית": { name: "Sheviit", perakimCount: 10 },
    "תרומות": { name: "Terumot", perakimCount: 11 },
    "מעשרות": { name: "Maasrot", perakimCount: 5 },
    "מעשר שני": { name: "Maaser Sheni", perakimCount: 5 },
    "חלה": { name: "Challah", perakimCount: 4 },
    "ערלה": { name: "Orlah", perakimCount: 3 },
    "ביכורים": { name: "Bikkurim", perakimCount: 4 },
    
    // Seder Moed
    "שבת": { name: "Shabbat", perakimCount: 24 },
    "עירובין": { name: "Eruvin", perakimCount: 10 },
    "פסחים": { name: "Pesachim", perakimCount: 10 },
    "שקלים": { name: "Shekalim", perakimCount: 8 },
    "יומא": { name: "Yoma", perakimCount: 8 },
    "סוכה": { name: "Sukkah", perakimCount: 5 },
    "ביצה": { name: "Beitzah", perakimCount: 5 },
    "ראש השנה": { name: "Rosh Hashanah", perakimCount: 4 },
    "תענית": { name: "Taanit", perakimCount: 4 },
    "מגילה": { name: "Megillah", perakimCount: 4 },
    "מועד קטן": { name: "Moed Katan", perakimCount: 3 },
    "חגיגה": { name: "Chagigah", perakimCount: 3 },
    
    // Seder Nashim
    "יבמות": { name: "Yevamot", perakimCount: 16 },
    "כתובות": { name: "Ketubot", perakimCount: 13 },
    "נדרים": { name: "Nedarim", perakimCount: 11 },
    "נזיר": { name: "Nazir", perakimCount: 9 },
    "סוטה": { name: "Sotah", perakimCount: 9 },
    "גיטין": { name: "Gittin", perakimCount: 9 },
    "קידושין": { name: "Kiddushin", perakimCount: 4 },
    
    // Seder Nezikin
    "בבא קמא": { name: "Bava Kamma", perakimCount: 10 },
    "בבא מציעא": { name: "Bava Metzia", perakimCount: 10 },
    "בבא בתרא": { name: "Bava Batra", perakimCount: 10 },
    "סנהדרין": { name: "Sanhedrin", perakimCount: 11 },
    "מכות": { name: "Makkot", perakimCount: 3 },
    "שבועות": { name: "Shevuot", perakimCount: 8 },
    "עבודה זרה": { name: "Avodah Zarah", perakimCount: 5 },
    "הוריות": { name: "Horayot", perakimCount: 3 },
    
    // Seder Kodashim
    "זבחים": { name: "Zevachim", perakimCount: 14 },
    "מנחות": { name: "Menachot", perakimCount: 13 },
    "חולין": { name: "Chullin", perakimCount: 12 },
    "בכורות": { name: "Bekhorot", perakimCount: 9 },
    "ערכין": { name: "Arakhin", perakimCount: 9 },
    "תמורה": { name: "Temurah", perakimCount: 7 },
    "כריתות": { name: "Keritot", perakimCount: 6 },
    "מעילה": { name: "Meilah", perakimCount: 6 },
    "תמיד": { name: "Tamid", perakimCount: 7 },
    "מידות": { name: "Middot", perakimCount: 5 },
    "קינים": { name: "Kinnim", perakimCount: 3 },
    
    // Seder Tohorot
    "נדה": { name: "Niddah", perakimCount: 10 }
};

// Fonction pour générer les noms de perakim en hébreu
function generatePerekNames(count) {
    const hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב', 'יג', 'יד', 'טו', 'טז', 'יז', 'יח', 'יט', 'כ', 'כא', 'כב', 'כג', 'כד'];
    const names = {};
    for (let i = 0; i < count; i++) {
        const perekNum = hebrewLetters[i] || (i + 1).toString();
        names[`פרק ${perekNum}`] = {
            name: `Perek ${perekNum}`,
            dapim: {}
        };
    }
    return names;
}

// Générer la structure de base complète
function generateCompleteTalmudData() {
    const completeData = {};
    
    Object.keys(allMassekhotStructure).forEach(massekhetKey => {
        const massekhetInfo = allMassekhotStructure[massekhetKey];
        completeData[massekhetKey] = {
            name: massekhetInfo.name,
            perakim: generatePerekNames(massekhetInfo.perakimCount)
        };
    });
    
    return completeData;
}

// Données existantes avec questions (à fusionner)
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
                                questionEn: "What is the main topic of daf bet in Berakhot?",
                                options: [
                                    "זמן קריאת שמע בערבית",
                                    "ברכות השחר",
                                    "תפילת העמידה",
                                    "ברכת המזון"
                                ],
                                correctAnswer: 0,
                                explanation: "דף ב עוסק בזמן קריאת שמע בערבית - מאימתי קורין את שמע בערבין"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "מהו הזמן המדויק לקריאת שמע בערב?",
                                questionFr: "Quel est le moment précis pour lire le Shema le soir ?",
                                questionEn: "What is the precise time to recite the Shema in the evening?",
                                options: [
                                    "משעה שהכהנים נכנסים לאכול בתרומתן",
                                    "משעה שהשמש שוקעת",
                                    "משעה שהכוכבים יוצאים",
                                    "משעה שהערב מתחיל"
                                ],
                                correctAnswer: 0,
                                explanation: "הזמן לקריאת שמע בערב מתחיל משעה שהכהנים נכנסים לאכול בתרומתן"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהי המילה הראשונה במשנה הראשונה של דף ב?",
                                questionFr: "Quel est le premier mot de la première mishna du daf bet ?",
                                questionEn: "What is the first word of the first mishna on daf bet?",
                                correctAnswer: "מאימתי",
                                explanation: "המילה הראשונה היא 'מאימתי' - מאימתי קורין את שמע בערבין"
                            }
                        ]
                    },
                    "דף ג": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "עד מתי ניתן לקרוא את שמע בערב?",
                                questionFr: "Jusqu'à quand peut-on lire le Shema le soir ?",
                                questionEn: "Until when can one recite the Shema in the evening?",
                                options: [
                                    "עד חצות",
                                    "עד עלות השחר",
                                    "עד סוף הלילה",
                                    "עד בוקר"
                                ],
                                correctAnswer: 1,
                                explanation: "ניתן לקרוא את שמע בערב עד עלות השחר"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "מה דין מי שקרא את שמע אחרי חצות?",
                                questionFr: "Quelle est la règle pour celui qui lit le Shema après minuit ?",
                                questionEn: "What is the law for someone who recites the Shema after midnight?",
                                options: [
                                    "יצא ידי חובה",
                                    "לא יצא ידי חובה",
                                    "יצא בדיעבד",
                                    "צריך לחזור ולקרות"
                                ],
                                correctAnswer: 0,
                                explanation: "אם קרא אחרי חצות, יצא ידי חובה כי אמרו חכמים עד עלות השחר"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהו הזמן האחרון לקריאת שמע בערב?",
                                questionFr: "Quel est le dernier moment pour lire le Shema le soir ?",
                                questionEn: "What is the last time to recite the Shema in the evening?",
                                correctAnswer: "עלות השחר",
                                explanation: "הזמן האחרון הוא עלות השחר"
                            }
                        ]
                    }
                }
            },
            "פרק ב": {
                name: "Perek Bet",
                dapim: {
                    "דף יא": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "מהו הנושא של דף יא בפרק ב?",
                                questionFr: "Quel est le sujet du daf yud aleph dans le chapitre 2 ?",
                                questionEn: "What is the topic of daf yud aleph in chapter 2?",
                                options: [
                                    "ברכות השחר",
                                    "קריאת שמע",
                                    "תפילת העמידה",
                                    "ברכת המזון"
                                ],
                                correctAnswer: 0,
                                explanation: "דף יא עוסק בברכות השחר"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "כמה ברכות יש בברכות השחר?",
                                questionFr: "Combien de bénédictions y a-t-il dans les bénédictions du matin ?",
                                questionEn: "How many blessings are there in the morning blessings (Birkot HaShachar)?",
                                options: [
                                    "חמש עשרה",
                                    "שמונה עשרה",
                                    "עשרים",
                                    "תשע"
                                ],
                                correctAnswer: 0,
                                explanation: "יש חמש עשרה ברכות בברכות השחר"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהי הברכה הראשונה בברכות השחר?",
                                questionFr: "Quelle est la première bénédiction des bénédictions du matin ?",
                                questionEn: "What is the first blessing of the morning blessings (Birkot HaShachar)?",
                                correctAnswer: "ברכת אשר נתן לשכוי בינה",
                                explanation: "הברכה הראשונה היא ברכת אשר נתן לשכוי בינה"
                            }
                        ]
                    }
                }
            }
        }
    },
    "שבת": {
        name: "Shabbat",
        perakim: {
            "פרק א": {
                name: "Perek Aleph",
                dapim: {
                    "דף ב": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "מהו הנושא של דף ב במסכת שבת?",
                                questionFr: "Quel est le sujet du daf bet dans Shabbat ?",
                                questionEn: "What is the topic of daf bet in Shabbat?",
                                options: [
                                    "יציאות השבת",
                                    "מלאכות שבת",
                                    "תחומי שבת",
                                    "הדלקת נר שבת"
                                ],
                                correctAnswer: 0,
                                explanation: "דף ב עוסק ביציאות השבת"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "כמה יציאות יש בשבת?",
                                questionFr: "Combien d'expéditions y a-t-il le Shabbat ?",
                                questionEn: "How many 'exits' (transfers) are there on Shabbat?",
                                options: [
                                    "שתיים",
                                    "ארבע",
                                    "שש",
                                    "שמונה"
                                ],
                                correctAnswer: 0,
                                explanation: "יש שתי יציאות בשבת - יציאה ויציאה"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהי המילה הראשונה במסכת שבת?",
                                questionFr: "Quel est le premier mot du traité Shabbat ?",
                                questionEn: "What is the first word of the tractate Shabbat?",
                                correctAnswer: "יציאות",
                                explanation: "המילה הראשונה היא 'יציאות' - יציאות השבת"
                            }
                        ]
                    },
                    "דף ג": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "מה דין המוציא מרשות לרשות בשבת?",
                                questionFr: "Quelle est la règle pour celui qui transporte d'un domaine à l'autre le Shabbat ?",
                                questionEn: "What is the law for someone who transfers from one domain to another on Shabbat?",
                                options: [
                                    "חייב",
                                    "פטור",
                                    "מותר",
                                    "אסור מדרבנן"
                                ],
                                correctAnswer: 0,
                                explanation: "המוציא מרשות לרשות בשבת חייב"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "מהי שיעור ההוצאה האסורה בשבת?",
                                questionFr: "Quelle est la mesure de transport interdite le Shabbat ?",
                                questionEn: "What is the measure of carrying that is forbidden on Shabbat?",
                                options: [
                                    "כגרוגרת",
                                    "כזית",
                                    "ככותבת",
                                    "כביצה"
                                ],
                                correctAnswer: 0,
                                explanation: "שיעור ההוצאה הוא כגרוגרת"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהו שיעור ההוצאה בשבת?",
                                questionFr: "Quelle est la mesure du transport le Shabbat ?",
                                questionEn: "What is the measure of carrying on Shabbat?",
                                correctAnswer: "כגרוגרת",
                                explanation: "שיעור ההוצאה הוא כגרוגרת"
                            }
                        ]
                    }
                }
            }
        }
    },
    "פסחים": {
        name: "Pesachim",
        perakim: {
            "פרק א": {
                name: "Perek Aleph",
                dapim: {
                    "דף ב": {
                        questions: [
                            {
                                id: 1,
                                type: "multiple-choice",
                                question: "מהו הנושא של דף ב במסכת פסחים?",
                                questionFr: "Quel est le sujet du daf bet dans Pesachim ?",
                                questionEn: "What is the topic of daf bet in Pesachim?",
                                options: [
                                    "איסור חמץ",
                                    "קרבן פסח",
                                    "הגדה של פסח",
                                    "מצות"
                                ],
                                correctAnswer: 0,
                                explanation: "דף ב עוסק באיסור חמץ"
                            },
                            {
                                id: 2,
                                type: "multiple-choice",
                                question: "מתי מתחיל איסור חמץ?",
                                questionFr: "Quand commence l'interdiction du hametz ?",
                                questionEn: "When does the prohibition of chametz begin?",
                                options: [
                                    "בליל י"ד",
                                    "בבוקר י"ד",
                                    "בצהריים י"ד",
                                    "בליל ט"ו"
                                ],
                                correctAnswer: 1,
                                explanation: "איסור חמץ מתחיל בבוקר י"ד בניסן"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהו הזמן שבו מתחיל איסור חמץ?",
                                questionFr: "Quel est le moment où commence l'interdiction du hametz ?",
                                questionEn: "At what time does the prohibition of chametz begin?",
                                correctAnswer: "בוקר י"ד",
                                explanation: "איסור חמץ מתחיל בבוקר י"ד בניסן"
                            }
                        ]
                    }
                }
            }
        }
    }
};

// Fusionner les données existantes avec la structure complète
function mergeTalmudData() {
    const completeData = generateCompleteTalmudData();
    
    // Fusionner les données existantes (qui ont des questions) dans la structure complète
    Object.keys(existingDataWithQuestions).forEach(massekhetKey => {
        if (completeData[massekhetKey]) {
            // Fusionner les perakim
            Object.keys(existingDataWithQuestions[massekhetKey].perakim).forEach(perekKey => {
                if (completeData[massekhetKey].perakim[perekKey]) {
                    // Fusionner les dapim
                    Object.keys(existingDataWithQuestions[massekhetKey].perakim[perekKey].dapim).forEach(dafKey => {
                        completeData[massekhetKey].perakim[perekKey].dapim[dafKey] = 
                            existingDataWithQuestions[massekhetKey].perakim[perekKey].dapim[dafKey];
                    });
                } else {
                    // Si le perek n'existe pas dans la structure complète, l'ajouter
                    completeData[massekhetKey].perakim[perekKey] = 
                        existingDataWithQuestions[massekhetKey].perakim[perekKey];
                }
            });
        }
    });
    
    return completeData;
}

// Structure de données finale (toutes les massekhot avec leurs perakim, et les dapim/questions existants)
const talmudData = mergeTalmudData();

/**
 * Structure dérivée pour la progression :
 * - talmudDafCounts: nombre total de dapim par massekhet et au global
 *   { byMassekhet: { "ברכות": 12, "שבת": 30, ... }, total: 123 }
 *
 * On ne persiste pas ces données, elles peuvent être recalculées en mémoire
 * à partir de `talmudData` et ne dépendent pas de l'utilisateur.
 */
function computeTalmudDafCounts() {
    const byMassekhet = {};
    let total = 0;

    Object.keys(talmudData).forEach(mKey => {
        const massekhet = talmudData[mKey];
        let countForMassekhet = 0;

        if (massekhet.perakim) {
            Object.keys(massekhet.perakim).forEach(pKey => {
                const perek = massekhet.perakim[pKey];
                if (perek.dapim) {
                    const dapimCount = Object.keys(perek.dapim).length;
                    countForMassekhet += dapimCount;
                }
            });
        }

        byMassekhet[mKey] = countForMassekhet;
        total += countForMassekhet;
    });

    return { byMassekhet, total };
}

// Comptages de base, communs à tous les utilisateurs
const talmudDafCounts = computeTalmudDafCounts();

/**
 * Nombre total de dapim par (massekhet, perek).
 * Clé: `${massekhetKey}__${perekKey}` → nombre de dapim.
 * Utile pour calculer la progression au niveau du perek.
 */
function computePerekDafCounts() {
    const byPerek = {};

    Object.keys(talmudData).forEach(mKey => {
        const massekhet = talmudData[mKey];
        if (!massekhet.perakim) return;

        Object.keys(massekhet.perakim).forEach(pKey => {
            const perek = massekhet.perakim[pKey];
            const dapimCount = perek.dapim ? Object.keys(perek.dapim).length : 0;
            byPerek[`${mKey}__${pKey}`] = dapimCount;
        });
    });

    return byPerek;
}

const talmudPerekDafCounts = computePerekDafCounts();

// État de l'application
let currentMassekhet = null;
let currentPerek = null;
let currentDaf = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded - Initialisation de l'application');
    
    // Afficher les Sedarim au chargement
    displaySedarim();
    
    // Événements de navigation
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

    const dashboardBackBtn = document.getElementById('dashboard-back-to-seder');
    if (dashboardBackBtn) {
        dashboardBackBtn.addEventListener('click', () => {
            showScreen('seder-screen');
        });
    }
    
    // Événements du quiz
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
    
    // Événements des résultats
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
    
    // Gestionnaire du sélecteur de langue
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
        // Init language
        changeLanguage('fr');
    }

    const dashboardBtn = document.getElementById('dashboard-btn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            // Dans Symfony, on est loggué si la variable globale est présente, ou on redirige
            // Pour l'instant, simulons ou redirigeons
            // window.location.href = "/dashboard";
            alert("Tableau de bord non disponible dans cette version de démonstration sans base de données.");
        });
    }
});

// Afficher la liste des Sedarim
function displaySedarim() {
    console.log('📚 Début de l'affichage des Sedarim');
    const list = document.getElementById('sedarim-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    sedarim.forEach((seder, index) => {
        const item = document.createElement('button');
        item.className = 'btn btn-seder';
        item.innerHTML = `
            <span class="hebrew">${seder.hebrew}</span>
            <span class="french">${seder.french}</span>
            <span class="description">${seder.description}</span>
        `;
        
        item.addEventListener('click', () => {
            displayMassekhotForSeder(seder.id);
            showScreen('massekhet-screen');
        });
        
        list.appendChild(item);
    });
    
    showScreen('seder-screen');
}

// Afficher un écran spécifique
function showScreen(screenId) {
    // Cacher tous les écrans
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Afficher l'écran demandé
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Faire défiler vers le haut de la page
    window.scrollTo(0, 0);
}

// Afficher les Massékhot d'un Seder spécifique
function displayMassekhotForSeder(sederId) {
    const seder = sedarim.find(s => s.id === sederId);
    if (!seder) return;

    const list = document.getElementById('massekhot-list');
    if (!list) return;

    list.innerHTML = '';

    // Mettre à jour le titre avec le nom du Seder
    const newTitle = currentLanguage === 'he' 
        ? `${t('chooseMassekhet')} - ${seder.hebrew}`
        : `${t('chooseMassekhet')} - ${seder.french} (${seder.hebrew})`;
    document.querySelector('#massekhet-screen h3').textContent = newTitle;

    if (seder.massekhot.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: #999;">${t('noMassekhetAvailable')}</p>`;
        return;
    }

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
             // Animation d'apparition en cascade
            setTimeout(() => {
                item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
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
        `${t('choosePerek')} - ${massekhet.name}`;
    
    Object.keys(massekhet.perakim).forEach((perekKey, index) => {
        const perek = massekhet.perakim[perekKey];
        const item = document.createElement('div');
        item.className = 'selection-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.innerHTML = `
            <div class="selection-item-hebrew">${perekKey}</div>
            <div class="selection-item-name">${perek.name}</div>
        `;
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                currentPerek = perekKey;
                displayDapim();
            }, 150);
        });
        list.appendChild(item);
        setTimeout(() => {
            item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });
    
    showScreen('perek-screen');
}

// Afficher la liste des dapim
function displayDapim() {
    const massekhet = talmudData[currentMassekhet];
    const perek = massekhet.perakim[currentPerek];
    const list = document.getElementById('dapim-list');
    list.innerHTML = '';
    
    document.getElementById('daf-title').textContent = 
        `${t('chooseDaf')} - ${massekhet.name} ${currentPerek}`;
    
    const dapimKeys = Object.keys(perek.dapim);
    
    if (dapimKeys.length === 0) {
        const message = document.createElement('div');
        message.className = 'no-dapim-message';
        message.innerHTML = `
            <p style="font-size: 1.2em; margin-bottom: 10px;">${t('noDafAvailable')}</p>
            <p style="font-size: 0.9em;">${t('addDapimMessage')}</p>
        `;
        list.appendChild(message);
    } else {
        dapimKeys.forEach((dafKey, index) => {
            const daf = perek.dapim[dafKey];
            const item = document.createElement('div');
            item.className = 'selection-item';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            const questionCount = daf.questions ? daf.questions.length : 0;
            const questionText = questionCount === 1 ? t('question') : t('questions');
            item.innerHTML = `
                <div class="selection-item-hebrew">${dafKey}</div>
                <div class="selection-item-name">${questionCount} ${questionText}</div>
            `;
            item.addEventListener('click', () => {
                if (questionCount > 0) {
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        currentDaf = dafKey;
                        startQuiz();
                    }, 150);
                } else {
                    item.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        item.style.animation = '';
                    }, 500);
                }
            });
            if (questionCount === 0) {
                item.style.opacity = '0.6';
                item.style.cursor = 'not-allowed';
            }
            list.appendChild(item);
            setTimeout(() => {
                item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                item.style.opacity = questionCount > 0 ? '1' : '0.6';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
    
    showScreen('daf-screen');
}

// Démarrer le quiz
function startQuiz() {
    const massekhet = talmudData[currentMassekhet];
    const perek = massekhet.perakim[currentPerek];
    const daf = perek.dapim[currentDaf];
    
    if (!daf || !daf.questions || daf.questions.length === 0) {
        alert(t('noQuestions'));
        showScreen('daf-screen');
        return;
    }
    
    currentQuestions = shuffleArray([...daf.questions]);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    // Mettre à jour le breadcrumb
    document.getElementById('current-massekhet-name').textContent = massekhet.name;
    document.getElementById('current-perek-name').textContent = currentPerek;
    document.getElementById('current-daf-name').textContent = currentDaf;
    
    showScreen('quiz-screen');
    displayQuestion();
    updateScore();
}

// Afficher une question
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;

    // Réinitialiser l'interface
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect', 'explanation');
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';
    
    const existingExplanation = document.querySelector('.feedback.explanation');
    if (existingExplanation) {
        existingExplanation.remove();
    }

    // Afficher le numéro de la question
    document.getElementById('question-number').textContent = 
        `${t('question')} ${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    // Afficher le type de question
    const typeText = question.type === 'multiple-choice' ? t('multipleChoice') : t('textAnswer');
    document.getElementById('question-type').textContent = `${t('question')}: ${typeText}`;

    // Afficher la question selon la langue
    let mainText = question.question; 
    if (typeof currentLanguage !== 'undefined') {
        if (currentLanguage === 'fr' && question.questionFr) {
            mainText = question.questionFr;
        } else if (currentLanguage === 'en' && question.questionEn) {
            mainText = question.questionEn;
        }
    }

    let questionText;
    if (currentLanguage === 'he') {
        questionText = question.question;
    } else {
        questionText = `${mainText}<br><small style="color: #888; direction: rtl; text-align: right;">${question.question}</small>`;
    }
    document.getElementById('question-text').innerHTML = questionText;

    // Afficher les réponses
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    if (question.type === 'multiple-choice') {
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.innerHTML = `
                <input type="radio" name="answer" id="option-${index}" value="${index}">
                <label for="option-${index}">${option}</label>
            `;
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
            <input type="text" id="text-answer" placeholder="${t('typeAnswer')}">
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

// Sélectionner une réponse
function selectAnswer(index) {
    selectedAnswer = index;
    document.getElementById('submit-btn').disabled = false;
    
    document.querySelectorAll('.answer-option').forEach((option, i) => {
        option.classList.toggle('selected', i === index);
    });
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
        const userAnswer = selectedAnswer.toLowerCase().trim();
        const correctAnswer = question.correctAnswer.toLowerCase().trim();
        isCorrect = userAnswer === correctAnswer || 
                   userAnswer.includes(correctAnswer) || 
                   correctAnswer.includes(userAnswer);
    }

    // Afficher le feedback
    feedbackDiv.classList.add('show');
    if (isCorrect) {
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.textContent = t('correct');
        score++;
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
        if (question.type === 'multiple-choice') {
            const correctOption = question.options[question.correctAnswer];
            feedbackDiv.textContent = `${t('incorrect')}. ${t('correctAnswer')} ${correctOption}`;
        } else {
            feedbackDiv.textContent = `${t('incorrect')}. ${t('correctAnswer')} ${question.correctAnswer}`;
        }
    }

    // Afficher l'explication
    if (question.explanation) {
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'feedback explanation';
        explanationDiv.textContent = question.explanation;
        feedbackDiv.after(explanationDiv);
    }

    // Désactiver les options
    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
        if (question.type === 'multiple-choice') {
            const index = parseInt(option.querySelector('input').value);
            if (index === question.correctAnswer) {
                option.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        }
    });

    // Afficher le bouton suivant
    document.getElementById('submit-btn').style.display = 'none';
    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'inline-block';
    }

    updateScore();
}

// Question suivante
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Fonction pour enregistrer les résultats du quiz
async function saveQuizResults(score, totalQuestions, massekhet, perek, daf) {
    console.log('💾 Sauvegarde des résultats du quiz via API Symfony:');
    
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
            // Si le statut est 401 ou 403, l'utilisateur n'est probablement pas connecté
            if (response.status === 401 || response.status === 403) {
                console.warn('⚠️ Utilisateur non connecté, résultats non sauvegardés.');
                return;
            }
            throw new Error('Erreur réseau ou serveur');
        }
        
        const result = await response.json();
        console.log('✅ Résultats enregistrés avec succès:', result);
        
    } catch (error) {
        console.error('❌ Erreur lors de l\'enregistrement des résultats:', error);
    }
}

// Terminer le quiz
function finishQuiz() {
    saveQuizResults(score, currentQuestions.length, currentMassekhet, currentPerek, currentDaf);
    showResults();
}

// Charger les données de tableau de bord
async function loadUserDashboard() {
    try {
        const response = await fetch('/api/quiz/stats');
        if (!response.ok) throw new Error('Erreur lors du chargement des statistiques');
        
        const data = await response.json();
        renderUserDashboard(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function renderUserDashboard(data) {
    // Cette fonction sera implémentée lorsque nous aurons la structure HTML du tableau de bord
    console.log('Données du tableau de bord reçues:', data);
}


// Afficher les résultats
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

// Réessayer le même daf
function retryDaf() {
    startQuiz();
}

// Mettre à jour le score
function updateScore() {
    document.getElementById('score').textContent = `${t('score')}: ${score}`;
}

// Mettre à jour la progression
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Mélanger un tableau
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
