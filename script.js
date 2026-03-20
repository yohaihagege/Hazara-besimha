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
                                    "בליל י\"ד",
                                    "בבוקר י\"ד",
                                    "בצהריים י\"ד",
                                    "בליל ט\"ו"
                                ],
                                correctAnswer: 1,
                                explanation: "איסור חמץ מתחיל בבוקר י\"ד בניסן"
                            },
                            {
                                id: 3,
                                type: "text",
                                question: "מהו הזמן שבו מתחיל איסור חמץ?",
                                questionFr: "Quel est le moment où commence l'interdiction du hametz ?",
                                questionEn: "At what time does the prohibition of chametz begin?",
                                correctAnswer: "בוקר י\"ד",
                                explanation: "איסור חמץ מתחיל בבוקר י\"ד בניסן"
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
    console.log('🚀 DOM loaded - Initialisation de l\'application');
    
    // Attendre que Firebase soit chargé
    setTimeout(() => {
        if (typeof firebase === 'undefined') {
            console.error('❌ Firebase n\'est pas chargé');
            return;
        }
        
        console.log('✅ Firebase loaded:', firebase);
        console.log('🔥 Auth disponible:', typeof firebase.auth !== 'undefined');
        console.log('🗄️ Firestore disponible:', typeof firebase.firestore !== 'undefined');
        
        // Afficher les Sedarim au chargement
        console.log('📚 Affichage des Sedarim...');
        displaySedarim();
        
        // Gestion de la fenêtre modale
        const modal = document.getElementById('auth-modal');
        const closeModal = document.querySelector('.close-modal');
        const loginBtn = document.getElementById('login-modal-btn');
        const registerBtn = document.getElementById('register-modal-btn');
        
        console.log('🔍 Recherche des éléments DOM:');
        console.log('  - Modal element:', modal);
        console.log('  - Close modal element:', closeModal);
        console.log('  - Login button:', loginBtn);
        console.log('  - Register button:', registerBtn);
        
        if (loginBtn) {
            // Ouvrir la modale de connexion
            loginBtn.addEventListener('click', () => {
                console.log('🔑 Bouton Connexion cliqué');
                modal.style.display = 'block';
                showAuthForm('login');
                console.log('📋 Modale de connexion ouverte');
            });
        } else {
            console.error('❌ Bouton de connexion non trouvé');
        }
        
        if (registerBtn) {
            // Ouvrir la modale d'inscription
            registerBtn.addEventListener('click', () => {
                console.log('📝 Bouton Inscription cliqué');
                modal.style.display = 'block';
                showAuthForm('register');
                console.log('📋 Modale d\'inscription ouverte');
            });
        } else {
            console.error('❌ Bouton d\'inscription non trouvé');
        }
        
        if (closeModal) {
            // Fermer la modale
            closeModal.addEventListener('click', () => {
                console.log('❌ Fermeture de la modale via le bouton X');
                modal.style.display = 'none';
            });
        }
        
        // Fermer la modale en cliquant à l'extérieur
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                console.log('❌ Fermeture de la modale via clic extérieur');
                modal.style.display = 'none';
            }
        });
        
        // Événements de navigation
        console.log('🧭 Configuration des événements de navigation');
        document.getElementById('back-to-seder').addEventListener('click', () => {
            console.log('⬅️ Retour aux Sedarim');
            showScreen('seder-screen');
        });
        
        document.getElementById('back-to-massekhet').addEventListener('click', () => {
            console.log('⬅️ Retour aux Massékhot');
            showScreen('massekhet-screen');
        });
        
        document.getElementById('back-to-perek').addEventListener('click', () => {
            console.log('⬅️ Retour aux Pérakim');
            showScreen('perek-screen');
        });
        
        document.getElementById('back-to-daf').addEventListener('click', () => {
            console.log('⬅️ Retour aux Dapim');
            showScreen('daf-screen');
        });

        const dashboardBackBtn = document.getElementById('dashboard-back-to-seder');
        if (dashboardBackBtn) {
            dashboardBackBtn.addEventListener('click', () => {
                console.log('⬅️ Retour à l\'écran d\'étude depuis le dashboard');
                showScreen('seder-screen');
            });
        }
        
        // Événements du quiz
        console.log('🎯 Configuration des événements du quiz');
        document.getElementById('submit-btn').addEventListener('click', () => {
            console.log('✅ Soumission de la réponse');
            submitAnswer();
        });
        document.getElementById('next-btn').addEventListener('click', () => {
            console.log('➡️ Question suivante');
            nextQuestion();
        });
        document.getElementById('finish-btn').addEventListener('click', () => {
            console.log('🏁 Fin du quiz');
            finishQuiz();
        });
        
        // Événements des résultats
        console.log('📊 Configuration des événements des résultats');
        document.getElementById('retry-daf-btn').addEventListener('click', () => {
            console.log('🔄 Réessayer ce daf');
            retryDaf();
        });
        document.getElementById('new-selection-btn').addEventListener('click', () => {
            console.log('🆕 Nouvelle sélection');
            showScreen('seder-screen');
        });
        
        // Gestionnaire du sélecteur de langue
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                changeLanguage(e.target.value);
            });
        }
        
        // Événements d'authentification
        console.log('🔐 Configuration des événements d\'authentification');
        document.getElementById('register-btn').addEventListener('click', async () => {
            console.log('📝 Début du processus d\'inscription');
            
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const username = document.getElementById('register-username').value;

            console.log('📋 Données du formulaire:');
            console.log('  - Email:', email);
            console.log('  - Username:', username);
            console.log('  - Password length:', password.length);
            console.log('  - Confirm password length:', confirmPassword.length);

            if (password !== confirmPassword) {
                console.error('❌ Les mots de passe ne correspondent pas');
                alert(t('passwordsNotMatch'));
                return;
            }

            try {
                console.log('🔥 Création de l\'utilisateur Firebase...');
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
                console.log('✅ Utilisateur créé avec succès:', userCredential.user.uid);
                
                console.log('👤 Mise à jour du profil utilisateur...');
                await firebase.auth().updateProfile(userCredential.user, {
                    displayName: username
                });
                console.log('✅ Profil mis à jour');

                // Créer un document utilisateur dans Firestore
                console.log('🗄️ Création du document utilisateur dans Firestore...');
                await firebase.firestore().doc(`users/${userCredential.user.uid}`).set({
                    username: username,
                    email: email,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    stats: {
                        totalQuizzes: 0,
                        correctAnswers: 0,
                        totalAnswers: 0
                    }
                });
                console.log('✅ Document utilisateur créé dans Firestore');

                alert(t('registrationSuccess'));
                modal.style.display = 'none';
                showAuthForm('login');
                console.log('🎉 Inscription complétée avec succès');
            } catch (error) {
                console.error('❌ Erreur lors de l\'inscription:', error.code, error.message);
                alert(t('error') + ' ' + error.message);
            }
        });

        document.getElementById('login-btn').addEventListener('click', async () => {
            console.log('🔑 Début du processus de connexion');
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            console.log('📋 Données de connexion:');
            console.log('  - Email:', email);
            console.log('  - Password length:', password.length);

            try {
                console.log('🔥 Tentative de connexion...');
                await firebase.auth().signInWithEmailAndPassword(email, password);
                console.log('✅ Connexion réussie');
                modal.style.display = 'none';
            } catch (error) {
                console.error('❌ Erreur lors de la connexion:', error.code, error.message);
                alert(t('error') + ' ' + error.message);
            }
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            console.log('🚪 Déconnexion de l\'utilisateur');
            firebase.auth().signOut();
        });

        const dashboardBtn = document.getElementById('dashboard-btn');
        if (dashboardBtn) {
            dashboardBtn.addEventListener('click', () => {
                if (!currentUser) {
                    alert(t('mustBeLoggedIn') || 'Vous devez être connecté pour voir votre tableau de bord.');
                    return;
                }
                console.log('📊 Ouverture du tableau de bord utilisateur');
                showScreen('dashboard-screen');
                loadUserDashboard(currentUser.uid);
            });
        }

        // Basculer entre les formulaires d'inscription et de connexion
        document.getElementById('show-register').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🔄 Affichage du formulaire d\'inscription');
            showAuthForm('register');
        });

        document.getElementById('show-login').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🔄 Affichage du formulaire de connexion');
            showAuthForm('login');
        });
        
        console.log('🎉 Initialisation terminée avec succès');
    }, 1000); // Attendre 1 seconde que Firebase se charge
});

// Afficher la liste des Sedarim
function displaySedarim() {
    console.log('📚 Début de l\'affichage des Sedarim');
    const list = document.getElementById('sedarim-list');
    if (!list) {
        console.error('❌ Élément sedarim-list non trouvé');
        return;
    }
    
    console.log('✅ Élément sedarim-list trouvé');
    list.innerHTML = '';
    
    if (sedarim.length === 0) {
        console.error('❌ Aucun Seder disponible');
        list.innerHTML = `<p style="color: red; text-align: center;">${t('noSederAvailable')}</p>`;
        return;
    }
    
    console.log('📋 Nombre de Sedarim à afficher:', sedarim.length);
    
    sedarim.forEach((seder, index) => {
        console.log(`📖 Création du bouton pour le Seder ${index + 1}: ${seder.french} (${seder.hebrew})`);
        const item = document.createElement('button');
        item.className = 'btn btn-seder';
        item.innerHTML = `
            <span class="hebrew">${seder.hebrew}</span>
            <span class="french">${seder.french}</span>
            <span class="description">${seder.description}</span>
        `;
        
        item.addEventListener('click', () => {
            console.log(`🖱️ Clic sur le Seder: ${seder.french}`);
            displayMassekhotForSeder(seder.id);
            showScreen('massekhet-screen');
        });
        
        list.appendChild(item);
    });
    
    console.log('✅ Affichage des Sedarim terminé');
    showScreen('seder-screen');
}

// Afficher un écran spécifique
function showScreen(screenId) {
    console.log(`📺 Changement d'écran vers: ${screenId}`);
    
    // Cacher tous les écrans
    const allScreens = document.querySelectorAll('.screen');
    console.log(`🔍 Masquage de ${allScreens.length} écrans`);
    allScreens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Afficher l'écran demandé
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log(`✅ Écran ${screenId} affiché avec succès`);
    } else {
        console.error(`❌ Écran non trouvé: ${screenId}`);
    }
    
    // Mettre à jour l'état de navigation
    const screenName = screenId.replace('-screen', '');
    console.log(`📍 État de navigation mis à jour: ${screenName}`);
    
    // Faire défiler vers le haut de la page
    window.scrollTo(0, 0);
    console.log('⬆️ Défilement vers le haut de la page');
}

// Afficher les Massékhot d'un Seder spécifique
function displayMassekhotForSeder(sederId) {
    console.log(`📚 Affichage des Massékhot pour le Seder: ${sederId}`);
    
    const seder = sedarim.find(s => s.id === sederId);
    if (!seder) {
        console.error('❌ Seder non trouvé:', sederId);
        return;
    }

    console.log(`✅ Seder trouvé: ${seder.french} (${seder.hebrew})`);
    console.log(`📋 Nombre de Massékhot dans ce Seder: ${seder.massekhot.length}`);

    const list = document.getElementById('massekhot-list');
    if (!list) {
        console.error('❌ Élément massekhot-list non trouvé');
        return;
    }

    list.innerHTML = '';

    // Mettre à jour le titre avec le nom du Seder
    const newTitle = currentLanguage === 'he' 
        ? `${t('chooseMassekhet')} - ${seder.hebrew}`
        : `${t('chooseMassekhet')} - ${seder.french} (${seder.hebrew})`;
    document.querySelector('#massekhet-screen h3').textContent = newTitle;
    console.log(`📝 Titre mis à jour: ${newTitle}`);

    if (seder.massekhot.length === 0) {
        console.log('⚠️ Aucun Massékhot disponible pour ce Seder');
        list.innerHTML = `<p style="text-align: center; color: #999;">${t('noMassekhetAvailable')}</p>`;
        return;
    }

    seder.massekhot.forEach((massekhetKey, index) => {
        const massekhet = talmudData[massekhetKey];
        if (massekhet) {
            console.log(`📖 Création du bouton pour la Massekhet ${index + 1}: ${massekhetKey} (${massekhet.name})`);
            const item = document.createElement('button');
            item.className = 'btn btn-massekhet';
            item.innerHTML = `
                <span class="hebrew">${massekhetKey}</span>
                <span class="french">${massekhet.name}</span>
            `;
            
            item.addEventListener('click', () => {
                console.log(`🖱️ Clic sur la Massekhet: ${massekhetKey}`);
                currentMassekhet = massekhetKey;
                displayPerakim();
                showScreen('perek-screen');
            });
            
            list.appendChild(item);
        } else {
            console.warn(`⚠️ Massekhet non trouvée dans talmudData: ${massekhetKey}`);
        }
    });

    console.log(`✅ Affichage des ${seder.massekhot.length} Massékhot terminé`);
    showScreen('massekhet-screen');
}

// Afficher la liste des massekhot
function displayMassekhot() {
    console.log('displayMassekhot called');
    const list = document.getElementById('massekhot-list');
    if (!list) {
        console.error('Element massekhot-list not found');
        return;
    }
    console.log('Found massekhot-list element');
    list.innerHTML = '';
    
    const massekhotKeys = Object.keys(talmudData);
    console.log('Massekhot keys:', massekhotKeys);
    if (massekhotKeys.length === 0) {
        console.error('No massekhot found in talmudData');
        list.innerHTML = `<p style="color: red; text-align: center;">${t('noMassekhetAvailable')}</p>`;
        return;
    }
    
    massekhotKeys.forEach((massekhetKey, index) => {
        const massekhet = talmudData[massekhetKey];
        console.log('Creating item for:', massekhetKey, massekhet);
        const item = document.createElement('div');
        item.className = 'selection-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.innerHTML = `
            <div class="selection-item-hebrew">${massekhetKey}</div>
            <div class="selection-item-name">${massekhet.name}</div>
        `;
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Clicked on massekhet:', massekhetKey);
            // Animation de clic
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
                currentMassekhet = massekhetKey;
                displayPerakim();
            }, 150);
        });
        list.appendChild(item);
        // Animation d'apparition en cascade
        setTimeout(() => {
            item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
        console.log('Item appended to list');
    });
    console.log('Total items in list:', list.children.length);
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
        // Aucun daf disponible - afficher un message
        const message = document.createElement('div');
        message.className = 'no-dapim-message';
        message.style.cssText = 'text-align: center; padding: 40px; color: #666;';
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
    
    // Supprimer les explications précédentes
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
    let mainText = question.question; // hébreu par défaut
    if (typeof currentLanguage !== 'undefined') {
        if (currentLanguage === 'fr' && question.questionFr) {
            mainText = question.questionFr;
        } else if (currentLanguage === 'en' && question.questionEn) {
            mainText = question.questionEn;
        }
    }

    // Afficher aussi la version hébraïque en petit si on n'est pas en hébreu
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

// Terminer le quiz
function finishQuiz() {
    // Enregistrer les résultats dans Firebase
    saveQuizResults(score, currentQuestions.length, currentMassekhet, currentPerek, currentDaf);
    showResults();
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

// Changer d'écran avec animation
function showScreen(screenId) {
    const currentScreen = document.querySelector('.screen.active');
    const newScreen = document.getElementById(screenId);
    
    if (currentScreen) {
        currentScreen.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            currentScreen.classList.remove('active');
            currentScreen.style.animation = '';
            newScreen.classList.add('active');
            newScreen.style.animation = 'fadeInUp 0.5s ease-out';
        }, 300);
    } else {
        newScreen.classList.add('active');
        newScreen.style.animation = 'fadeInUp 0.5s ease-out';
    }
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
// État de l'utilisateur
let currentUser = null;

// Gestion de l'état d'authentification
firebase.auth().onAuthStateChanged((user) => {
    console.log('🔄 Changement d\'état d\'authentification détecté');
    if (user) {
        // Utilisateur connecté
        console.log('✅ Utilisateur connecté:', user.email, 'UID:', user.uid);
        currentUser = user;
        document.getElementById('auth-buttons').style.display = 'none';
        document.getElementById('user-menu').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
        console.log('👤 Interface utilisateur mise à jour pour l\'utilisateur connecté');
        loadUserData(user.uid);
    } else {
        // Utilisateur non connecté
        console.log('❌ Utilisateur déconnecté');
        currentUser = null;
        document.getElementById('auth-buttons').style.display = 'block';
        document.getElementById('user-menu').style.display = 'none';
        console.log('👤 Interface utilisateur mise à jour pour l\'utilisateur déconnecté');
    }
});

function showAuthForm(formType) {
    console.log('🔄 Changement de formulaire d\'authentification vers:', formType);
    if (formType === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
        console.log('📋 Formulaire de connexion affiché');
    } else {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        console.log('📋 Formulaire d\'inscription affiché');
    }
}

// Charger les données utilisateur
async function loadUserData(userId) {
    console.log('📂 Chargement des données utilisateur pour:', userId);
    try {
        const userDoc = await firebase.firestore().doc(`users/${userId}`).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            console.log('✅ Données utilisateur chargées:', userData);
            // Mettre à jour l'interface utilisateur avec les données de l'utilisateur
        } else {
            console.log('⚠️ Aucune donnée utilisateur trouvée dans Firestore');
        }
    } catch (error) {
        console.error('❌ Erreur lors du chargement des données utilisateur:', error);
    }
}

/**
 * Charger et calculer les données de tableau de bord pour un utilisateur donné.
 * Utilise uniquement les données propres à l'utilisateur (users/{uid}/dafStats et quizResults)
 * et les combine avec la structure statique du Talmud (talmudData).
 */
async function loadUserDashboard(userId) {
    console.log('📊 Chargement du tableau de bord pour:', userId);
    try {
        // Récupérer tous les dapim étudiés de l'utilisateur
        const dafStatsSnap = await firebase
            .firestore()
            .collection('users')
            .doc(userId)
            .collection('dafStats')
            .get();

        const studiedDapim = [];
        const studiedByMassekhet = {};
        const studiedByPerek = {};

        dafStatsSnap.forEach(doc => {
            const data = doc.data();
            if (!data.studied) return;

            studiedDapim.push({ id: doc.id, ...data });

            // Comptage par massekhet
            studiedByMassekhet[data.massekhet] = (studiedByMassekhet[data.massekhet] || 0) + 1;

            // Comptage par perek
            const perekKey = `${data.massekhet}__${data.perek}`;
            studiedByPerek[perekKey] = (studiedByPerek[perekKey] || 0) + 1;
        });

        const totalDafim = talmudDafCounts.total || 0;
        const studiedTotal = studiedDapim.length;
        const globalProgress = totalDafim > 0
            ? Math.round((studiedTotal / totalDafim) * 100)
            : 0;

        // Progression par massekhet
        const massekhetProgress = Object.keys(talmudDafCounts.byMassekhet).map(mKey => {
            const total = talmudDafCounts.byMassekhet[mKey] || 0;
            const done = studiedByMassekhet[mKey] || 0;
            const percent = total > 0 ? Math.round((done / total) * 100) : 0;
            return {
                massekhetKey: mKey,
                name: talmudData[mKey]?.name || mKey,
                done,
                total,
                percent
            };
        }).filter(item => item.total > 0);

        // Progression par perek (seulement pour ceux où l'utilisateur a étudié au moins 1 daf)
        const perekProgress = Object.keys(studiedByPerek).map(pk => {
            const [mKey, pKey] = pk.split('__');
            const total = talmudPerekDafCounts[pk] || 0;
            const done = studiedByPerek[pk] || 0;
            const percent = total > 0 ? Math.round((done / total) * 100) : 0;
            return {
                massekhetKey: mKey,
                massekhetName: talmudData[mKey]?.name || mKey,
                perekKey: pKey,
                done,
                total,
                percent
            };
        }).filter(item => item.total > 0);

        // Trier les dapim étudiés par dernière tentative
        studiedDapim.sort((a, b) => {
            const da = a.lastAttemptAt && a.lastAttemptAt.toMillis ? a.lastAttemptAt.toMillis() : 0;
            const db = b.lastAttemptAt && b.lastAttemptAt.toMillis ? b.lastAttemptAt.toMillis() : 0;
            return db - da;
        });
        const lastStudied = studiedDapim.slice(0, 10);

        // Dernières tentatives (toutes massekhot confondues)
        const lastResultsSnap = await firebase
            .firestore()
            .collection('quizResults')
            .where('userId', '==', userId)
            .orderBy('date', 'desc')
            .limit(5)
            .get();

        const lastResults = [];
        lastResultsSnap.forEach(doc => {
            lastResults.push(doc.data());
        });

        const dashboardData = {
            globalProgress,
            studiedTotal,
            totalDafim,
            massekhetProgress,
            perekProgress,
            lastStudied,
            lastResults
        };

        renderUserDashboard(dashboardData);
    } catch (error) {
        console.error('❌ Erreur lors du chargement du tableau de bord:', error);
    }
}

/**
 * Rendu du tableau de bord à partir des données calculées.
 * Cette fonction ne fait que du DOM, aucune logique métier.
 */
function renderUserDashboard(data) {
    console.log('📊 Rendu du tableau de bord avec les données:', data);

    // Progression globale
    const percentText = document.getElementById('dashboard-global-percent');
    const globalText = document.getElementById('dashboard-global-text');
    const globalBar = document.getElementById('dashboard-global-progress-bar');

    if (percentText) {
        percentText.textContent = `${data.globalProgress || 0}%`;
    }
    if (globalText) {
        globalText.textContent = `${data.studiedTotal || 0} / ${data.totalDafim || 0} dapim étudiés`;
    }
    if (globalBar) {
        globalBar.style.width = `${data.globalProgress || 0}%`;
    }

    // Progression par massekhet
    const massekhetList = document.getElementById('dashboard-massekhet-list');
    if (massekhetList) {
        massekhetList.innerHTML = '';
        if (!data.massekhetProgress || data.massekhetProgress.length === 0) {
            massekhetList.innerHTML = `<p style="color:#666;">${t('noProgressYet') || 'Aucune progression pour le moment.'}</p>`;
        } else {
            data.massekhetProgress
                .sort((a, b) => b.percent - a.percent)
                .forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'dashboard-item';
                    div.innerHTML = `
                        <div class="dashboard-item-title">
                            <span class="hebrew">${item.massekhetKey}</span>
                            <span class="french">${item.name}</span>
                        </div>
                        <div class="dashboard-item-info">
                            <span>${item.done} / ${item.total} dapim</span>
                            <span>${item.percent}%</span>
                        </div>
                        <div class="progress-bar small">
                            <div class="progress-fill" style="width:${item.percent}%;"></div>
                        </div>
                    `;
                    massekhetList.appendChild(div);
                });
        }
    }

    // Dapim étudiés (détail par daf)
    const dapimList = document.getElementById('dashboard-dapim-list');
    if (dapimList) {
        dapimList.innerHTML = '';
        if (!data.lastStudied || data.lastStudied.length === 0) {
            dapimList.innerHTML = `<p style="color:#666;">${t('noDafStudiedYet') || 'Aucun daf étudié pour le moment.'}</p>`;
        } else {
            data.lastStudied.forEach(d => {
                const mName = talmudData[d.massekhet]?.name || d.massekhet;
                const dateText = d.lastAttemptAt && d.lastAttemptAt.toDate
                    ? d.lastAttemptAt.toDate().toLocaleDateString()
                    : '';
                const div = document.createElement('div');
                div.className = 'dashboard-item';
                div.innerHTML = `
                    <div class="dashboard-item-title">
                        <span class="hebrew">${d.massekhet} ${d.perek} ${d.daf}</span>
                        <span class="french">${mName}</span>
                    </div>
                    <div class="dashboard-item-info">
                        <span>${t('lastScore') || 'Dernière note'}: ${d.lastScore}</span>
                        <span>${t('bestScore') || 'Meilleure note'}: ${d.bestScore}</span>
                        <span>${t('attempts') || 'Tentatives'}: ${d.attemptsCount || 1}</span>
                        ${dateText ? `<span>${dateText}</span>` : ''}
                    </div>
                `;
                dapimList.appendChild(div);
            });
        }
    }

    // Dernières notes (par tentative)
    const lastResultsList = document.getElementById('dashboard-last-results');
    if (lastResultsList) {
        lastResultsList.innerHTML = '';
        if (!data.lastResults || data.lastResults.length === 0) {
            lastResultsList.innerHTML = `<p style="color:#666;">${t('noQuizYet') || 'Aucun quiz effectué pour le moment.'}</p>`;
        } else {
            data.lastResults.forEach(r => {
                const mName = talmudData[r.massekhet]?.name || r.massekhet;
                const percentage = r.totalQuestions > 0
                    ? Math.round((r.score / r.totalQuestions) * 100)
                    : 0;
                const dateText = r.date && r.date.toDate
                    ? r.date.toDate().toLocaleDateString()
                    : '';
                const div = document.createElement('div');
                div.className = 'dashboard-item';
                div.innerHTML = `
                    <div class="dashboard-item-title">
                        <span class="hebrew">${r.massekhet} ${r.perek} ${r.daf}</span>
                        <span class="french">${mName}</span>
                    </div>
                    <div class="dashboard-item-info">
                        <span>${r.score} / ${r.totalQuestions} (${percentage}%)</span>
                        ${dateText ? `<span>${dateText}</span>` : ''}
                    </div>
                `;
                lastResultsList.appendChild(div);
            });
        }
    }
}

// Fonction pour enregistrer les résultats du quiz
async function saveQuizResults(score, totalQuestions, massekhet, perek, daf) {
    if (!currentUser) {
        console.log('⚠️ Aucun utilisateur connecté, impossible de sauvegarder les résultats');
        return;
    }

    console.log('💾 Sauvegarde des résultats du quiz:');
    console.log('  - Score:', score, '/', totalQuestions);
    console.log('  - Massekhet:', massekhet);
    console.log('  - Perek:', perek);
    console.log('  - Daf:', daf);

    const quizResult = {
        userId: currentUser.uid,
        score,
        totalQuestions,
        massekhet,
        perek,
        daf,
        date: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        // Ajouter le résultat à la collection 'quizResults'
        console.log('📝 Ajout du résultat dans la collection quizResults...');
        await firebase.firestore().collection('quizResults').add(quizResult);

        // Mettre à jour les statistiques globales de l'utilisateur
        console.log('📊 Mise à jour des statistiques utilisateur...');
        await firebase.firestore().doc(`users/${currentUser.uid}`).update({
            'stats.totalQuizzes': firebase.firestore.FieldValue.increment(1),
            'stats.correctAnswers': firebase.firestore.FieldValue.increment(score),
            'stats.totalAnswers': firebase.firestore.FieldValue.increment(totalQuestions)
        });

        /**
         * Mise à jour des statistiques par daf pour cet utilisateur
         *
         * Modèle de données choisi (FireStore) :
         * - Document utilisateur : users/{uid}
         * - Sous-collection par utilisateur : users/{uid}/dafStats
         *   - Document par combinaison massekhet/perek/daf :
         *     id = `${massekhet}__${perek}__${daf}` (clé déterministe et lisible)
         *     Champs principaux :
         *       - massekhet, perek, daf : permettent de relier à la structure du Talmud
         *       - studied (bool) : vrai si au moins une tentative
         *       - studiedAt (timestamp) : première fois où le daf a été étudié
         *       - lastAttemptAt (timestamp) : dernière tentative
         *       - attemptsCount (number) : nombre total de tentatives
         *       - lastScore (number) : score de la dernière tentative (0–totalQuestions)
         *       - bestScore (number) : meilleur score obtenu
         *
         * Pourquoi persister ces données ?
         * - Elles sont propres à chaque utilisateur et nécessaires pour :
         *   - marquer un daf comme étudié
         *   - calculer les pourcentages de progression (par massekhet, perek, global)
         *   - afficher les dernières notes par daf sans recalculer tout l'historique
         * - Elles peuvent être recalculées partiellement à partir de `quizResults`,
         *   mais les agrégats (bestScore, attemptsCount, dates) rendent l'affichage
         *   du tableau de bord beaucoup plus performant et scalable.
         */
        const dafStatsRef = firebase
            .firestore()
            .collection('users')
            .doc(currentUser.uid)
            .collection('dafStats')
            .doc(`${massekhet}__${perek}__${daf}`);

        await firebase.firestore().runTransaction(async (tx) => {
            const doc = await tx.get(dafStatsRef);
            const now = firebase.firestore.FieldValue.serverTimestamp();

            if (!doc.exists) {
                // Première fois que ce daf est étudié par cet utilisateur
                tx.set(dafStatsRef, {
                    userId: currentUser.uid,
                    massekhet,
                    perek,
                    daf,
                    studied: true,
                    studiedAt: now,
                    lastAttemptAt: now,
                    attemptsCount: 1,
                    lastScore: score,
                    bestScore: score
                });
            } else {
                // Mise à jour d'un daf déjà étudié
                const data = doc.data();
                const newAttemptsCount = (data.attemptsCount || 0) + 1;
                const newBestScore = Math.max(data.bestScore || 0, score);

                tx.update(dafStatsRef, {
                    studied: true,
                    lastAttemptAt: now,
                    attemptsCount: newAttemptsCount,
                    lastScore: score,
                    bestScore: newBestScore
                });
            }
        });

        console.log('✅ Résultats et statistiques par daf enregistrés avec succès dans Firestore');
    } catch (error) {
        console.error('❌ Erreur lors de l\'enregistrement des résultats:', error);
    }
}
