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
    console.log('DOM loaded');
    
    // Afficher les Sedarim au chargement
    displaySedarim();
    
    // Événements de navigation
    document.getElementById('back-to-seder').addEventListener('click', () => {
        showScreen('seder-screen');
    });
    
    document.getElementById('back-to-massekhet').addEventListener('click', () => {
        showScreen('massekhet-screen');
    });
    
    document.getElementById('back-to-perek').addEventListener('click', () => {
        showScreen('perek-screen');
    });
    
    document.getElementById('back-to-daf').addEventListener('click', () => {
        showScreen('daf-screen');
    });
    
    // Événements du quiz
    document.getElementById('submit-btn').addEventListener('click', submitAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishQuiz);
    
    // Événements des résultats
    document.getElementById('retry-daf-btn').addEventListener('click', retryDaf);
    document.getElementById('new-selection-btn').addEventListener('click', () => {
        showScreen('seder-screen');
    });
});

// Afficher la liste des Sedarim
function displaySedarim() {
    const list = document.getElementById('sedarim-list');
    if (!list) {
        console.error('Élément sedarim-list non trouvé');
        return;
    }
    
    list.innerHTML = '';
    
    if (sedarim.length === 0) {
        list.innerHTML = '<p style="color: red; text-align: center;">Aucun ordre disponible</p>';
        return;
    }
    
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
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Afficher l'écran demandé
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    } else {
        console.error(`Écran non trouvé: ${screenId}`);
    }
    
    // Mettre à jour l'état de navigation
    state.currentScreen = screenId.replace('-screen', '');
    
    // Faire défiler vers le haut de la page
    window.scrollTo(0, 0);
}

// Afficher les Massékhot d'un Seder spécifique
function displayMassekhotForSeder(sederId) {
    const seder = sedarim.find(s => s.id === sederId);
    if (!seder) {
        console.error('Seder non trouvé:', sederId);
        return;
    }

    const list = document.getElementById('massekhot-list');
    if (!list) {
        console.error('Élément massekhot-list non trouvé');
        return;
    }

    list.innerHTML = '';

    // Mettre à jour le titre avec le nom du Seder
    document.querySelector('#massekhet-screen h3').textContent = 
        `Traités de l'ordre ${seder.french} (${seder.hebrew})`;

    if (seder.massekhot.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">Aucun traité disponible pour cet ordre</p>';
        return;
    }

    seder.massekhot.forEach(massekhetKey => {
        const massekhet = talmudData[massekhetKey];
        if (massekhet) {
            const item = document.createElement('button');
            item.className = 'btn btn-massekhet';
            item.innerHTML = `
                <span class="hebrew">${massekhetKey}</span>
                <span class="french">${massekhet.name}</span>
            `;
            
            item.addEventListener('click', () => {
                currentMassekhet = massekhetKey;
                displayPerakim();
                showScreen('perek-screen');
            });
            
            list.appendChild(item);
        }
    });

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
        list.innerHTML = '<p style="color: red; text-align: center;">Aucun traité disponible</p>';
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
        `Choisissez un chapitre (פרק) - ${massekhet.name}`;
    
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
        `Choisissez un daf (דף) - ${massekhet.name} ${currentPerek}`;
    
    const dapimKeys = Object.keys(perek.dapim);
    
    if (dapimKeys.length === 0) {
        // Aucun daf disponible - afficher un message
        const message = document.createElement('div');
        message.className = 'no-dapim-message';
        message.style.cssText = 'text-align: center; padding: 40px; color: #666;';
        message.innerHTML = `
            <p style="font-size: 1.2em; margin-bottom: 10px;">Aucun daf disponible pour ce chapitre</p>
            <p style="font-size: 0.9em;">Vous pouvez ajouter des dapim et leurs questions dans le fichier script.js</p>
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
            item.innerHTML = `
                <div class="selection-item-hebrew">${dafKey}</div>
                <div class="selection-item-name">${questionCount} question${questionCount > 1 ? 's' : ''}</div>
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
        alert('Ce daf n\'a pas encore de questions. Ajoutez-en dans le fichier script.js');
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
        `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    // Afficher le type de question
    const typeText = question.type === 'multiple-choice' ? 'Choix multiple' : 'Réponse libre';
    document.getElementById('question-type').textContent = `Type: ${typeText}`;

    // Afficher la question
    const questionText = question.questionFr ? 
        `${question.question}<br><small style="color: #888; direction: ltr; text-align: left;">${question.questionFr}</small>` : 
        question.question;
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
            <input type="text" id="text-answer" placeholder="Tapez votre réponse...">
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
        feedbackDiv.textContent = '✓ Correct !';
        score++;
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
        if (question.type === 'multiple-choice') {
            const correctOption = question.options[question.correctAnswer];
            feedbackDiv.textContent = `✗ Incorrect. La bonne réponse est: ${correctOption}`;
        } else {
            feedbackDiv.textContent = `✗ Incorrect. La bonne réponse est: ${question.correctAnswer}`;
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
        messageDiv.textContent = 'Excellent ! Vous maîtrisez parfaitement ce daf ! 🎉';
        messageDiv.style.color = '#28a745';
    } else if (percentage >= 70) {
        messageDiv.textContent = 'Très bien ! Continuez vos révisions ! 👍';
        messageDiv.style.color = '#667eea';
    } else if (percentage >= 50) {
        messageDiv.textContent = 'Pas mal ! Il faut encore réviser ce daf. 📚';
        messageDiv.style.color = '#ffc107';
    } else {
        messageDiv.textContent = 'Continuez à étudier ce daf, vous y arriverez ! 💪';
        messageDiv.style.color = '#dc3545';
    }
}

// Réessayer le même daf
function retryDaf() {
    startQuiz();
}

// Mettre à jour le score
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
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
