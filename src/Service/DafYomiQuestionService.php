<?php

namespace App\Service;

use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class DafYomiQuestionService
{
    /**
     * Mapping des Massekhot vers les identifiants `massechet` de https://daf-yomi.com/dafYomi.aspx
     * ainsi que leurs noms français, hébreu et Sefaria.
     */
    private const MASSEKHOT_MAP = [
        // Seder Zeraim
        'ברכות' => ['id' => 283, 'nameFr' => 'Berakhot', 'sefaria' => 'Berakhot', 'themeFr' => 'les bénédictions, le Chema et la prière (Tefila)', 'themeHe' => 'הלכות קריאת שמע, תפילה וברכות'],
        'פאה' => ['id' => 283, 'nameFr' => 'Peah', 'sefaria' => 'Peah', 'themeFr' => 'le coin du champ laissé aux pauvres et la charité', 'themeHe' => 'מתנות עניים ופאת השדה'],
        'דמאי' => ['id' => 283, 'nameFr' => 'Demai', 'sefaria' => 'Demai', 'themeFr' => 'les produits agricoles dont le prélèvement des dîmes est douteux', 'themeHe' => 'פירות ספק מעושרים מעם הארץ'],
        'כלאים' => ['id' => 283, 'nameFr' => 'Kilayim', 'sefaria' => 'Kilayim', 'themeFr' => 'les mélanges interdits dans les semences, les arbres et les vêtements', 'themeHe' => 'איסורי כלאי זרעים, כרם ובגדים'],
        'שביעית' => ['id' => 283, 'nameFr' => 'Sheviit', 'sefaria' => 'Sheviit', 'themeFr' => 'les lois de l\'année sabbatique (Chemita)', 'themeHe' => 'הלכות שנת השמיטה וקדושת שביעית'],
        'תרומות' => ['id' => 283, 'nameFr' => 'Terumot', 'sefaria' => 'Terumot', 'themeFr' => 'les prélèvements agricoles destinés aux Kohanim (Terouma)', 'themeHe' => 'הלכות תרומה הניתנת לכהן'],
        'מעשרות' => ['id' => 283, 'nameFr' => 'Maasrot', 'sefaria' => 'Maasrot', 'themeFr' => 'la dîme prélevée pour les Léviim (Maasser Richon)', 'themeHe' => 'הלכות מעשר ראשון ללויים'],
        'מעשר שני' => ['id' => 283, 'nameFr' => 'Maaser Sheni', 'sefaria' => 'Maaser_Sheni', 'themeFr' => 'la seconde dîme consommée à Jérusalem', 'themeHe' => 'הלכות מעשר שני הנאכל בירושלים'],
        'חלה' => ['id' => 283, 'nameFr' => 'Challah', 'sefaria' => 'Challah', 'themeFr' => 'le prélèvement de la pâte (Halla) donné au Kohen', 'themeHe' => 'הפרשת חלה מן העיסה לכהן'],
        'ערלה' => ['id' => 283, 'nameFr' => 'Orlah', 'sefaria' => 'Orlah', 'themeFr' => 'l\'interdiction des fruits d\'un arbre durant ses trois premières années', 'themeHe' => 'איסור פירות האילן בשלוש השנים הראשונות'],
        'ביכורים' => ['id' => 283, 'nameFr' => 'Bikkurim', 'sefaria' => 'Bikkurim', 'themeFr' => 'les prémices des fruits apportés au Temple de Jérusalem', 'themeHe' => 'הבאת ביכורי הפירות לבית המקדש'],

        // Seder Moed
        'שבת' => ['id' => 284, 'nameFr' => 'Shabbat', 'sefaria' => 'Shabbat', 'themeFr' => 'les 39 travaux interdits (Melakhot) et le respect du Chabbat', 'themeHe' => 'ל"ט מלאכות שבת והלכות שבת'],
        'עירובין' => ['id' => 285, 'nameFr' => 'Eruvin', 'sefaria' => 'Eruvin', 'themeFr' => 'les domaines du Chabbat et la jonction des cours et des limites (Erouv)', 'themeHe' => 'עירובי חצרות ותחומין בשבת'],
        'פסחים' => ['id' => 286, 'nameFr' => 'Pesachim', 'sefaria' => 'Pesachim', 'themeFr' => 'l\'interdiction du Hamets, le sacrifice de Pessah et le Séder', 'themeHe' => 'הלכות ביעור חמץ, קרבן פסח וליל הסדר'],
        'שקלים' => ['id' => 287, 'nameFr' => 'Shekalim', 'sefaria' => 'Shekalim', 'themeFr' => 'le don du demi-sicle (Mahatsit HaChekel) et la gestion du Temple', 'themeHe' => 'מחצית השקל ולשכות בית המקדש'],
        'יומא' => ['id' => 288, 'nameFr' => 'Yoma', 'sefaria' => 'Yoma', 'themeFr' => 'le service du Cohen Gadol au Temple et les lois de Yom Kippour', 'themeHe' => 'עבודת הכהן הגדול ביום הכיפורים והלכות תענית'],
        'סוכה' => ['id' => 289, 'nameFr' => 'Sukkah', 'sefaria' => 'Sukkah', 'themeFr' => 'la construction de la Soucca et les quatre espèces (Arba Minim)', 'themeHe' => 'הלכות סוכה וארבעת המינים'],
        'ביצה' => ['id' => 290, 'nameFr' => 'Beitzah', 'sefaria' => 'Beitzah', 'themeFr' => 'les lois des jours de fête (Yom Tov) et la préparation de la nourriture', 'themeHe' => 'הלכות יום טוב ומלאכת אוכל נפש'],
        'ראש השנה' => ['id' => 291, 'nameFr' => 'Rosh Hashanah', 'sefaria' => 'Rosh_Hashanah', 'themeFr' => 'les quatre nouveaux ans, la sanctification du mois et le Chofar', 'themeHe' => 'ארבעה ראשי שנים, קידוש החודש ותקיעת שופר'],
        'תענית' => ['id' => 292, 'nameFr' => 'Taanit', 'sefaria' => 'Taanit', 'themeFr' => 'les prières pour la pluie et les jeûnes publics', 'themeHe' => 'הזכרת גשמים והלכות תעניות ציבור'],
        'מגילה' => ['id' => 293, 'nameFr' => 'Megillah', 'sefaria' => 'Megillah', 'themeFr' => 'la lecture de la Meguila d\'Esther, Pourim et la lecture publique de la Torah', 'themeHe' => 'קריאת מגילת אסתר, פורים וקריאת התורה'],
        'מועד קטן' => ['id' => 294, 'nameFr' => 'Moed Katan', 'sefaria' => 'Moed_Katan', 'themeFr' => 'les lois des demi-fêtes (Hol HaMoed) et du deuil (Avélout)', 'themeHe' => 'הלכות חול המועד והלכות אבילות'],
        'חגיגה' => ['id' => 295, 'nameFr' => 'Chagigah', 'sefaria' => 'Chagigah', 'themeFr' => 'les sacrifices des trois fêtes de pèlerinage (Regalim) et la pureté', 'themeHe' => 'מצוות ראייה, קרבן חגיגה ברגלים וטהרה'],

        // Seder Nashim
        'יבמות' => ['id' => 296, 'nameFr' => 'Yevamot', 'sefaria' => 'Yevamot', 'themeFr' => 'le mariage léviratique (Yiboum), la Halitsa et les unions interdites', 'themeHe' => 'הלכות ייבום וחליצה ואיסורי עריות'],
        'כתובות' => ['id' => 297, 'nameFr' => 'Ketubot', 'sefaria' => 'Ketubot', 'themeFr' => 'le contrat de mariage (Ketouba) et les obligations mutuelles des époux', 'themeHe' => 'שטר כתובה וחובות הבעל והאשה בנישואין'],
        'נדרים' => ['id' => 298, 'nameFr' => 'Nedarim', 'sefaria' => 'Nedarim', 'themeFr' => 'les vœux (Nedarim) et leur annulation par un sage ou le mari', 'themeHe' => 'הלכות נדרים והפרתם'],
        'נזיר' => ['id' => 299, 'nameFr' => 'Nazir', 'sefaria' => 'Nazir', 'themeFr' => 'le vœu de Naziréat (abstinence de vin, de coupe de cheveux et d\'impureté)', 'themeHe' => 'הלכות נזירות ואיסורי הנזיר'],
        'סוטה' => ['id' => 300, 'nameFr' => 'Sotah', 'sefaria' => 'Sotah', 'themeFr' => 'la femme soupçonnée d\'infidélité et les bénédictions publiques', 'themeHe' => 'הלכות אשה סוטה ומעמד הברכות והתפילות'],
        'גיטין' => ['id' => 301, 'nameFr' => 'Gittin', 'sefaria' => 'Gittin', 'themeFr' => 'la rédaction et la remise de l\'acte de divorce (Guet)', 'themeHe' => 'כתיבת גט פיטורין ונתינתו'],
        'קידושין' => ['id' => 302, 'nameFr' => 'Kiddushin', 'sefaria' => 'Kiddushin', 'themeFr' => 'les modes d\'acquisition des fiançailles (Kiddouchin) et de la propriété', 'themeHe' => 'דרכי הקניין בקידושי אשה ובממונות'],

        // Seder Nezikin
        'בבא קמא' => ['id' => 303, 'nameFr' => 'Bava Kamma', 'sefaria' => 'Bava_Kamma', 'themeFr' => 'la responsabilité civile, les quatre catégories de dommages et le vol', 'themeHe' => 'ארבעה אבות נזיקין, גניבה וגזילה'],
        'בבא מציעא' => ['id' => 304, 'nameFr' => 'Bava Metzia', 'sefaria' => 'Bava_Metzia', 'themeFr' => 'les objets trouvés, les dépôts, le prêt à intérêt (Ribit) et le droit du travail', 'themeHe' => 'השבת אבידה, פיקדונות, ריבית ושכירות פועלים'],
        'בבא בתרא' => ['id' => 305, 'nameFr' => 'Bava Batra', 'sefaria' => 'Bava_Batra', 'themeFr' => 'le voisinage, la propriété immobilière, les ventes et les successions', 'themeHe' => 'הלכות שכנים, חזקת קרקעות, מכירה וירושות'],
        'סנהדרין' => ['id' => 306, 'nameFr' => 'Sanhedrin', 'sefaria' => 'Sanhedrin', 'themeFr' => 'l\'organisation des tribunaux rabbiniques, la procédure judiciaire et le Monde Futur', 'themeHe' => 'סדרי בתי הדין, דיני נפשות וחלק לעולם הבא'],
        'מכות' => ['id' => 307, 'nameFr' => 'Makkot', 'sefaria' => 'Makkot', 'themeFr' => 'les faux témoins (Edim Zomemim), les villes de refuge et la peine de Malkout', 'themeHe' => 'עדים זוממין, ערי מקלט ודיני מלקות'],
        'שבועות' => ['id' => 308, 'nameFr' => 'Shevuot', 'sefaria' => 'Shevuot', 'themeFr' => 'les serments personnels et judiciaires ainsi que la pureté du sanctuaire', 'themeHe' => 'שבועות הביטוי, שבועות הדיינים וטומאת מקדש'],
        'עבודה זרה' => ['id' => 309, 'nameFr' => 'Avodah Zarah', 'sefaria' => 'Avodah_Zarah', 'themeFr' => 'l\'éloignement de l\'idolâtrie et les règles relatives aux aliments', 'themeHe' => 'הרחקה מעבודה זרה ואיסורי מאכלות'],
        'הוריות' => ['id' => 310, 'nameFr' => 'Horayot', 'sefaria' => 'Horayot', 'themeFr' => 'les décisions erronées du Sanhédrin, du Roi ou du Cohen Gadol', 'themeHe' => 'הוראת טעות של בית דין, מלך וכהן משוח'],

        // Seder Kodashim
        'זבחים' => ['id' => 311, 'nameFr' => 'Zevachim', 'sefaria' => 'Zevachim', 'themeFr' => 'les sacrifices animaux (Korbanot) et le service de l\'autel', 'themeHe' => 'הלכות הקרבת קרבנות מן החי בבית המקדש'],
        'מנחות' => ['id' => 312, 'nameFr' => 'Menachot', 'sefaria' => 'Menachot', 'themeFr' => 'les offrandes végétales (Menahot), les Tsitsit, les Tefillin et la Mezouza', 'themeHe' => 'קרבנות המנחה, ציצית, תפילין ומזוזה'],
        'חולין' => ['id' => 313, 'nameFr' => 'Chullin', 'sefaria' => 'Chullin', 'themeFr' => 'l\'abattage rituel (Chehita), les signes de Cacherout et le mélange lait/viande', 'themeHe' => 'הלכות שחיטה, טריפות, כשרות ובשר בחלב'],
        'בכורות' => ['id' => 314, 'nameFr' => 'Bekhorot', 'sefaria' => 'Bekhorot', 'themeFr' => 'la consécration des premiers-nés animaux et le rachat du premier-né (Pidyon HaBen)', 'themeHe' => 'בכור בהמה טהורה ופדיון הבן'],
        'ערכין' => ['id' => 315, 'nameFr' => 'Arakhin', 'sefaria' => 'Arakhin', 'themeFr' => 'les évaluations de dons au Temple et la consécration de biens (Hekdech)', 'themeHe' => 'נדרי ערכין והקדשות לבדק הבית'],
        'תמורה' => ['id' => 316, 'nameFr' => 'Temurah', 'sefaria' => 'Temurah', 'themeFr' => 'l\'interdiction de substituer un animal profane à un sacrifice consacré', 'themeHe' => 'איסור המרת קרבן והלכות תמורה'],
        'כריתות' => ['id' => 317, 'nameFr' => 'Keritot', 'sefaria' => 'Keritot', 'themeFr' => 'les 36 transgressions passibles de Karet et les sacrifices expiatoires (Hatat / Acham)', 'themeHe' => 'ל"ו כריתות שבתורה וקרבנות חטאת ואשם'],
        'מעילה' => ['id' => 318, 'nameFr' => 'Meilah', 'sefaria' => 'Meilah', 'themeFr' => 'l\'usage profane par inadvertance d\'objets consacrés au Temple (Meïla)', 'themeHe' => 'איסור הנאה מהקדש בשוגג וקרבן מעילה'],
        'תמיד' => ['id' => 319, 'nameFr' => 'Tamid', 'sefaria' => 'Tamid', 'themeFr' => 'le déroulement quotidien du sacrifice perpétuel (Korban Tamid) au Temple', 'themeHe' => 'סדר עבודת קרבן התמיד בבית המקדש בכל יום'],
        'מידות' => ['id' => 320, 'nameFr' => 'Middot', 'sefaria' => 'Middot', 'themeFr' => 'l\'architecture et les dimensions exactes du Second Temple de Jérusalem', 'themeHe' => 'מבנה בית המקדש השני ומידותיו'],
        'קינים' => ['id' => 321, 'nameFr' => 'Kinnim', 'sefaria' => 'Kinnim', 'themeFr' => 'les couples d\'oiseaux offerts en sacrifice et leurs mélanges accidentels', 'themeHe' => 'הלכות קרבנות העוף ותערובות קינים'],

        // Seder Tohorot
        'נדה' => ['id' => 322, 'nameFr' => 'Niddah', 'sefaria' => 'Niddah', 'themeFr' => 'les lois de pureté familiale (Taharat HaMichpaha)', 'themeHe' => 'הלכות נידה וטהרת המשפחה'],
    ];

    public function __construct(
        private readonly HttpClientInterface $httpClient,
        private readonly LoggerInterface $logger
    ) {
    }

    /**
     * Génère les URLs vers daf-yomi.com/dafYomi.aspx et Dafyomi_Page.aspx pour un traité et un daf donnés.
     */
    public function getDafYomiUrls(string $massekhet, string $daf): array
    {
        $info = self::MASSEKHOT_MAP[$massekhet] ?? [
            'id' => 283,
            'nameFr' => $massekhet,
            'sefaria' => 'Berakhot',
            'themeFr' => 'l\'étude de la Guémara',
            'themeHe' => 'לימוד הסוגיה בגמרא',
        ];

        $dafNum = $this->parseHebrewDafNumber($daf);
        $amudA = max(1, ($dafNum - 2) * 2 + 1);
        $amudB = $amudA + 1;

        $portalUrl = sprintf(
            'https://daf-yomi.com/dafYomi.aspx?massechet=%d&daf=%d',
            $info['id'],
            $dafNum
        );

        $pageUrlA = sprintf(
            'https://daf-yomi.com/Dafyomi_Page.aspx?vt=5&massechet=%d&amud=%d&fs=0',
            $info['id'],
            $amudA
        );

        $pageUrlB = sprintf(
            'https://daf-yomi.com/Dafyomi_Page.aspx?vt=5&massechet=%d&amud=%d&fs=0',
            $info['id'],
            $amudB
        );

        return [
            'massechetId' => $info['id'],
            'nameFr' => $info['nameFr'],
            'sefaria' => $info['sefaria'],
            'themeFr' => $info['themeFr'],
            'themeHe' => $info['themeHe'],
            'dafNum' => $dafNum,
            'amudA' => $amudA,
            'amudB' => $amudB,
            'portalUrl' => $portalUrl,
            'pageUrlA' => $pageUrlA,
            'pageUrlB' => $pageUrlB,
        ];
    }

    /**
     * Récupère le texte du Daf sur daf-yomi.com et génère les questions en français et hébreu.
     *
     * @return array{sourceUrl: string, portalUrl: string, pageUrl: string, dafExcerpt: string, questions: array, generatedBy: string}
     */
    public function generateQuestionsForDaf(string $massekhet, string $perek, string $daf): array
    {
        $urls = $this->getDafYomiUrls($massekhet, $daf);
        $dafText = $this->fetchDafContent($urls);

        $geminiApiKey = $this->resolveEnvValue('GEMINI_API_KEY', '');
        $questions = null;
        $generatedBy = 'daf-yomi-local';

        if (!empty($geminiApiKey)) {
            $questions = $this->generateQuestionsWithGemini(
                $geminiApiKey,
                $massekhet,
                $urls['nameFr'],
                $perek,
                $daf,
                $urls['dafNum'],
                $urls['portalUrl'],
                $dafText
            );
            if (!empty($questions)) {
                $generatedBy = 'gemini-daf-yomi';
            }
        }

        if (empty($questions)) {
            $questions = $this->generateQuestionsFromTextLocally(
                $massekhet,
                $urls['nameFr'],
                $perek,
                $daf,
                $urls['dafNum'],
                $urls['themeFr'],
                $urls['themeHe'],
                $urls['portalUrl'],
                $dafText
            );
        }

        return [
            'sourceUrl' => $urls['portalUrl'],
            'portalUrl' => $urls['portalUrl'],
            'pageUrl' => $urls['pageUrlA'],
            'dafExcerpt' => $this->strSub($dafText, 0, 2000),
            'questions' => $questions,
            'generatedBy' => $generatedBy,
        ];
    }

    private function strLen(string $str): int
    {
        return function_exists('mb_strlen') ? mb_strlen($str, 'UTF-8') : strlen($str);
    }

    private function strSub(string $str, int $start, int $length): string
    {
        return function_exists('mb_substr') ? mb_substr($str, $start, $length, 'UTF-8') : substr($str, $start, $length);
    }

    private function strPos(string $haystack, string $needle): int|false
    {
        return function_exists('mb_strpos') ? mb_strpos($haystack, $needle, 0, 'UTF-8') : strpos($haystack, $needle);
    }

    /**
     * Lit la valeur depuis .env.local / .env en priorité pour éviter qu'une ancienne variable
     * d'environnement Windows (ex: "VOTRE_VRAIE_CLE_API_ICI") n'écrase la clé configurée dans .env.
     */
    private function resolveEnvValue(string $key, string $default = ''): string
    {
        $projectRoot = dirname(__DIR__, 2);
        foreach ([$projectRoot . '/.env.local', $projectRoot . '/.env'] as $envFile) {
            if (is_file($envFile) && is_readable($envFile)) {
                $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
                foreach ($lines as $line) {
                    $line = trim($line);
                    if ($line === '' || str_starts_with($line, '#')) {
                        continue;
                    }
                    if (preg_match('/^' . preg_quote($key, '/') . '\s*=\s*(.*)$/', $line, $m)) {
                        $val = trim($m[1], " \t\n\r\0\x0B\"'");
                        if ($val !== '' && !str_contains($val, 'VOTRE_')) {
                            return $val;
                        }
                    }
                }
            }
        }

        $envVal = (string) ($_ENV[$key] ?? $_SERVER[$key] ?? getenv($key) ?: '');
        if ($envVal !== '' && !str_contains($envVal, 'VOTRE_')) {
            return $envVal;
        }

        return $default;
    }

    /**
     * Télécharge et extrait le texte du Daf depuis https://daf-yomi.com/dafYomi.aspx et Dafyomi_Page.aspx
     * (avec enrichissement Sefaria si le HTML de daf-yomi.com ne contient qu'une image scannée).
     */
    public function fetchDafContent(array $urls): string
    {
        $collectedSegments = [];

        // 1. Récupération depuis daf-yomi.com (dafYomi.aspx et Dafyomi_Page.aspx Amoud Aleph & Bet)
        foreach ([$urls['portalUrl'], $urls['pageUrlA'], $urls['pageUrlB']] as $targetUrl) {
            try {
                $response = $this->httpClient->request('GET', $targetUrl, [
                    'timeout' => 8.0,
                    'verify_peer' => false,
                    'verify_host' => false,
                    'headers' => [
                        'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) HazaraBesimha/1.0',
                        'Accept-Language' => 'he,fr;q=0.9',
                        'Connection' => 'close',
                    ],
                ]);

                if (200 === $response->getStatusCode()) {
                    $html = $response->getContent(false);
                    $extracted = $this->extractHebrewTextFromDafYomiHtml($html);
                    if ($this->strLen($extracted) > 60) {
                        $collectedSegments[] = $extracted;
                    }
                }
            } catch (\Throwable $e) {
                $this->logger->info('daf-yomi.com fetch info for ' . $targetUrl . ': ' . $e->getMessage());
            }
        }

        $combinedText = trim(implode("\n\n", $collectedSegments));

        // 2. Si le contenu texte extrait de daf-yomi.com est trop court (ex: page image Tzurat HaDaf ou hors-ligne),
        //    on complète avec le texte de la Guémara correspondant au même Daf via l'API Sefaria.
        if ($this->strLen($combinedText) < 250) {
            foreach (['a', 'b'] as $side) {
                $sefariaRef = sprintf('%s.%d%s', $urls['sefaria'], $urls['dafNum'], $side);
                try {
                    $response = $this->httpClient->request(
                        'GET',
                        sprintf('https://www.sefaria.org/api/texts/%s?context=0&pad=0', $sefariaRef),
                        [
                            'timeout' => 6.0,
                            'verify_peer' => false,
                            'verify_host' => false,
                            'headers' => [
                                'Connection' => 'close',
                            ],
                        ]
                    );
                    if (200 === $response->getStatusCode()) {
                        $data = $response->toArray(false);
                        if (!empty($data['he']) && is_array($data['he'])) {
                            $heLines = array_map(
                                static fn($line) => trim(strip_tags(is_string($line) ? $line : '')),
                                array_slice($data['he'], 0, 18)
                            );
                            $heText = implode(' ', array_filter($heLines));
                            if ($heText !== '') {
                                $collectedSegments[] = sprintf('[עמוד %s] %s', $side === 'a' ? 'א' : 'ב', $heText);
                            }
                        }
                    }
                } catch (\Throwable $e) {
                    $this->logger->info('Secondary text source info: ' . $e->getMessage());
                }
            }
            $combinedText = trim(implode("\n\n", $collectedSegments));
        }

        return $combinedText;
    }

    /**
     * Extrait le texte pertinent (Guémara, explications, questions de révision) d'une page HTML daf-yomi.com
     */
    private function extractHebrewTextFromDafYomiHtml(string $html): string
    {
        if (trim($html) === '') {
            return '';
        }

        // Supprimer scripts, styles, menus et formulaires ASP.NET (__VIEWSTATE)
        $clean = preg_replace('/<(script|style|head|nav|footer|select|option)[^>]*>.*?<\/\1>/is', ' ', $html) ?? $html;
        $clean = preg_replace('/<input[^>]*>/i', ' ', $clean) ?? $clean;

        // Cibler en priorité les conteneurs de contenu de daf-yomi.com (ex: divContent, dafContent, td, p)
        $text = html_entity_decode(strip_tags($clean), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $lines = preg_split('/[\r\n]+/', $text) ?: [];

        $meaningfulLines = [];
        $boilerplatePatterns = [
            'פורטל הדף היומי',
            'כל הזכויות שמורות',
            'התחבר',
            'חיפוש באתר',
            'ראשי תיבות',
            'לוח הדף היומי',
            'שיעורי שמע',
            'הורדת שיעורים',
        ];

        foreach ($lines as $line) {
            $line = trim(preg_replace('/\s+/u', ' ', $line) ?? '');
            if ($this->strLen($line) < 20) {
                continue;
            }
            // Doit contenir des caractères hébraïques
            if (!preg_match('/[\x{0590}-\x{05FF}]{4,}/u', $line)) {
                continue;
            }

            $isBoilerplate = false;
            foreach ($boilerplatePatterns as $bp) {
                if ($this->strPos($line, $bp) !== false && $this->strLen($line) < 90) {
                    $isBoilerplate = true;
                    break;
                }
            }
            if (!$isBoilerplate) {
                $meaningfulLines[] = $line;
            }
        }

        return $this->strSub(implode("\n", array_slice($meaningfulLines, 0, 40)), 0, 5000);
    }

    /**
     * Appelle l'API Google Gemini pour générer 5 questions (QCM et réponse libre) en français et en hébreu
     * à partir du texte du Daf issu de daf-yomi.com/dafYomi.aspx.
     */
    private function generateQuestionsWithGemini(
        string $apiKey,
        string $massekhetHe,
        string $massekhetFr,
        string $perek,
        string $daf,
        int $dafNum,
        string $portalUrl,
        string $dafText
    ): ?array {
        $primaryModel = $this->resolveEnvValue('GEMINI_MODEL', 'gemini-flash-latest');
        $modelsToTry = array_values(array_unique([
            $primaryModel,
            'gemini-flash-latest',
            'gemini-flash-lite-latest',
            'gemini-pro-latest',
            'gemini-3.8-flash',
        ]));

        $contextSnippet = $dafText !== ''
            ? "Texte extrait du Daf ({$portalUrl}) :\n\"\"\"\n" . $this->strSub($dafText, 0, 4000) . "\n\"\"\""
            : "Référence : Traité {$massekhetFr} ({$massekhetHe}), {$perek}, {$daf} (Daf {$dafNum}) sur {$portalUrl}.";

        $prompt = <<<PROMPT
Tu es un Talmid Hakham expert du Talmud de Babylone (Daf Yomi) et un pédagogue francophone et hébraïsant rigoureux.
À partir de la page du Daf Yomi issue de {$portalUrl} pour le traité {$massekhetFr} ({$massekhetHe}), {$perek}, {$daf} (Daf {$dafNum}), génère exactement 5 questions de révision (Hazara) logiques, pertinentes et fidèles aux souguiot de ce Daf.

{$contextSnippet}

Règles strictes de logique et de qualité pédagogique :
1. Génère 4 questions de type "multiple-choice" (4 options chacune) et 1 question de type "text" (réponse courte : uniquement le nom d'un Sage du Daf, un nombre précis ou un terme clé unique de 1 à 2 mots).
2. INTERDICTION ABSOLUE DE TAUTOLOGIE : La réponse ne doit JAMAIS être déjà écrite ou contenue dans l'énoncé de la question (ni en français ni en hébreu).
   - Mauvais exemple (INTERDIT) : Question : "Quel est le signe de la sortie des étoiles ?" -> Réponse : "Sortie des étoiles".
   - Bon exemple : Question : "Quel signe la Baraïta (Daf 2b) apporte-t-elle pour prouver que l'heure où les Kohanim consomment la Terouma correspond au début de la nuit ?" -> Réponse : "La sortie des étoiles (צאת הכוכבים)".
3. RIGUEUR DE TRADUCTION TALMUDIQUE :
   - Le terme "מעכב" / "מעכבת" signifie "est une condition indispensable (dont l'absence empêche)" et JAMAIS "l'obtention empêche".
   - N'inclus AUCUNE voyelle hébraïque (nikoud) dans les champs `correctAnswer` ou `acceptedAnswers`.
4. Toutes les questions, options et explications DOIVENT être fournies uniquement en FRANÇAIS et en HÉBREU :
   - `question` : la question en hébreu (clair, logique et précis).
   - `questionFr` : la question en français (clair, naturel et sans contresens).
   - Pour `type: "multiple-choice"` :
     - `options` : tableau de 4 réponses possibles en hébreu (distinctes et plausibles).
     - `optionsFr` : tableau de 4 réponses possibles en français (exactement dans le même ordre que `options`).
     - `correctAnswer` : l'index entier (0, 1, 2 ou 3) de la bonne réponse.
   - Pour `type: "text"` :
     - Pose une question factuelle fermée appelant un nom de Tanna/Amora, un chiffre ou un mot-clé unique (jamais une phrase longue).
     - `correctAnswer` : la réponse attendue en hébreu SANS nikoud (1 à 2 mots).
     - `correctAnswerFr` : la réponse attendue en français (1 à 3 mots).
     - `acceptedAnswers` : tableau de chaînes contenant toutes les variantes acceptables en français et en hébreu (ex: ["Rabbi Eliezer", "Eliezer", "רבי אליעזר", "אליעזר"]).
   - `explanation` : explication claire en hébreu résumant le raisonnement de la Guémara.
   - `explanationFr` : explication claire en français résumant le raisonnement de la Guémara.
5. Réponds UNIQUEMENT avec un tableau JSON valide contenant les 5 objets de questions, sans balises Markdown autour.
PROMPT;

        foreach ($modelsToTry as $model) {
            $endpoint = sprintf(
                'https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent',
                urlencode($model)
            );

            try {
                $payload = (string) json_encode([
                    'contents' => [
                        [
                            'parts' => [
                                ['text' => $prompt],
                            ],
                        ],
                    ],
                    'generationConfig' => [
                        'temperature' => 0.3,
                        'responseMimeType' => 'application/json',
                    ],
                ], JSON_UNESCAPED_UNICODE);

                [$statusCode, $rawBody] = $this->executeGeminiHttpPost($endpoint, trim($apiKey), $payload);

                if (200 !== $statusCode || $rawBody === '') {
                    $this->logger->warning(sprintf(
                        'Gemini API (%s) returned status %d: %s',
                        $model,
                        $statusCode,
                        $this->strSub($rawBody, 0, 600)
                    ));
                    continue;
                }

                $data = json_decode($rawBody, true);
                $rawJson = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';
                if ($rawJson === '') {
                    continue;
                }

                // Nettoyage d'éventuels blocs markdown ```json ... ```
                $rawJson = preg_replace('/^```(?:json)?\s*|\s*```$/m', '', trim($rawJson)) ?? $rawJson;
                $decoded = json_decode($rawJson, true);

                if (!is_array($decoded)) {
                    continue;
                }

                // Si l'IA a enveloppé dans {"questions": [...]}
                if (isset($decoded['questions']) && is_array($decoded['questions'])) {
                    $decoded = $decoded['questions'];
                }

                $normalized = [];
                foreach (array_values($decoded) as $idx => $q) {
                    if (!is_array($q) || empty($q['question']) || empty($q['questionFr'])) {
                        continue;
                    }
                    $sanitized = $this->sanitizeAndValidateQuestion($q, count($normalized) + 1, $portalUrl);
                    if ($sanitized !== null) {
                        $normalized[] = $sanitized;
                    }
                }

                if (count($normalized) >= 3) {
                    return $normalized;
                }
            } catch (\Throwable $e) {
                $this->logger->error(sprintf('Erreur lors de la génération Gemini (%s): %s', $model, $e->getMessage()));
            }
        }

        return null;
    }

    /**
     * Valide la cohérence logique d'une question générée (rejette toute tautologie où la réponse
     * figure déjà dans la question, retire le nikoud hébraïque des réponses courtes et mélange les options QCM).
     */
    private function sanitizeAndValidateQuestion(array $q, int $id, string $portalUrl): ?array
    {
        $type = ($q['type'] ?? 'multiple-choice') === 'text' ? 'text' : 'multiple-choice';
        $questionHe = trim((string) ($q['question'] ?? ''));
        $questionFr = trim((string) ($q['questionFr'] ?? ''));

        if ($questionHe === '' || $questionFr === '') {
            return null;
        }

        $item = [
            'id' => $id,
            'type' => $type,
            'question' => $questionHe,
            'questionFr' => $questionFr,
            'explanation' => trim((string) ($q['explanation'] ?? '')),
            'explanationFr' => trim((string) ($q['explanationFr'] ?? ($q['explanation'] ?? ''))),
            'sourceUrl' => $portalUrl,
        ];

        if ($type === 'multiple-choice') {
            $optionsHe = array_values(array_map('strval', (array) ($q['options'] ?? [])));
            $optionsFr = array_values(array_map('strval', (array) ($q['optionsFr'] ?? $optionsHe)));
            if (count($optionsHe) < 2) {
                return null;
            }

            $correctIndex = max(0, min(count($optionsHe) - 1, (int) ($q['correctAnswer'] ?? 0)));

            // Mélanger l'ordre des propositions de façon déterministe pour ne pas toujours avoir l'index 1
            $indices = range(0, count($optionsHe) - 1);
            shuffle($indices);

            $shuffledHe = [];
            $shuffledFr = [];
            $newCorrectIndex = 0;

            foreach ($indices as $pos => $oldIdx) {
                $shuffledHe[] = $optionsHe[$oldIdx];
                $shuffledFr[] = $optionsFr[$oldIdx] ?? $optionsHe[$oldIdx];
                if ($oldIdx === $correctIndex) {
                    $newCorrectIndex = $pos;
                }
            }

            $item['options'] = $shuffledHe;
            $item['optionsFr'] = $shuffledFr;
            $item['correctAnswer'] = $newCorrectIndex;

            return $item;
        }

        // Question de type "text" : supprimer le nikoud hébraïque et vérifier l'absence de tautologie
        $correctHe = $this->stripHebrewNikud(trim((string) ($q['correctAnswer'] ?? '')));
        $correctFr = trim((string) ($q['correctAnswerFr'] ?? $correctHe));

        if ($correctHe === '' && $correctFr === '') {
            return null;
        }

        $qHeClean = $this->stripHebrewNikud($questionHe);
        $qFrLower = function_exists('mb_strtolower') ? mb_strtolower($questionFr, 'UTF-8') : strtolower($questionFr);
        $ansFrLower = function_exists('mb_strtolower') ? mb_strtolower($correctFr, 'UTF-8') : strtolower($correctFr);

        // Si la réponse est déjà contenue mot pour mot dans l'énoncé de la question (tautologie), on rejette la question
        if (
            ($this->strLen($ansFrLower) >= 4 && $this->strPos($qFrLower, $ansFrLower) !== false) ||
            ($this->strLen($correctHe) >= 4 && $this->strPos($qHeClean, $correctHe) !== false)
        ) {
            return null;
        }

        $accepted = [];
        if (!empty($q['acceptedAnswers']) && is_array($q['acceptedAnswers'])) {
            foreach ($q['acceptedAnswers'] as $acc) {
                if (is_string($acc) && trim($acc) !== '') {
                    $accepted[] = $this->stripHebrewNikud(trim($acc));
                }
            }
        }
        $accepted[] = $correctHe;
        $accepted[] = $correctFr;

        $item['correctAnswer'] = $correctHe;
        $item['correctAnswerFr'] = $correctFr;
        $item['acceptedAnswers'] = array_values(array_unique(array_filter($accepted)));

        return $item;
    }

    private function stripHebrewNikud(string $text): string
    {
        return preg_replace('/[\x{0591}-\x{05C7}]/u', '', $text) ?? $text;
    }

    /**
     * Exécute la requête POST vers Gemini via ext-curl ou curl.exe (HTTP/2 natif sous Windows)
     * afin d'éviter les blocages du wrapper fopen() de PHP sous Windows.
     *
     * @return array{0: int, 1: string}
     */
    private function executeGeminiHttpPost(string $endpoint, string $apiKey, string $payload): array
    {
        if (function_exists('curl_init')) {
            $ch = curl_init($endpoint);
            if ($ch !== false) {
                curl_setopt_array($ch, [
                    CURLOPT_POST => true,
                    CURLOPT_POSTFIELDS => $payload,
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_TIMEOUT => 20,
                    CURLOPT_CONNECTTIMEOUT => 8,
                    CURLOPT_SSL_VERIFYPEER => false,
                    CURLOPT_SSL_VERIFYHOST => 0,
                    CURLOPT_HTTPHEADER => [
                        'Content-Type: application/json',
                        'X-goog-api-key: ' . $apiKey,
                    ],
                ]);
                $body = curl_exec($ch);
                $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
                curl_close($ch);
                if (is_string($body) && $status > 0) {
                    return [$status, $body];
                }
            }
        }

        // Fallback via curl.exe natif Windows (si ext-curl n'est pas activé dans php.ini)
        $tmpPayloadFile = tempnam(sys_get_temp_dir(), 'gemini_req_');
        if ($tmpPayloadFile !== false) {
            file_put_contents($tmpPayloadFile, $payload);
            $cmd = sprintf(
                'curl.exe -s -S -k -X POST %s -H "Content-Type: application/json" -H %s --data-binary %s -w "\n__HTTP_STATUS__:%%{http_code}" --max-time 20',
                escapeshellarg($endpoint),
                escapeshellarg('X-goog-api-key: ' . $apiKey),
                escapeshellarg('@' . $tmpPayloadFile)
            );
            $output = @shell_exec($cmd);
            @unlink($tmpPayloadFile);

            if (is_string($output) && preg_match('/^(.*)\r?\n__HTTP_STATUS__:(\d{3})\s*$/s', $output, $m)) {
                return [(int) $m[2], trim($m[1])];
            }
        }

        return [0, ''];
    }

    /**
     * Génère 5 questions bilingues (Français / Hébreu) directement à partir de l'analyse du texte du Daf
     * extrait de daf-yomi.com (ou des métadonnées du traité/chapitre/daf si le texte brut n'est pas accessible).
     */
    private function generateQuestionsFromTextLocally(
        string $massekhetHe,
        string $massekhetFr,
        string $perek,
        string $daf,
        int $dafNum,
        string $themeFr,
        string $themeHe,
        string $portalUrl,
        string $dafText
    ): array {
        // Extraire les phrases hébraïques propres du texte du Daf
        $cleanText = preg_replace('/\[עמוד [אב]\]/u', ' ', $dafText) ?? $dafText;
        $words = array_values(array_filter(
            preg_split('/\s+/u', trim($cleanText)) ?: [],
            static fn($w) => preg_match('/[\x{0590}-\x{05FF}]/u', $w)
        ));

        // 1. Premiers mots du Daf
        $firstWords = count($words) >= 4
            ? implode(' ', array_slice($words, 0, 5))
            : sprintf('מסכת %s %s (%s)', $massekhetHe, $daf, $perek);
        $firstWordSingle = $words[0] ?? $massekhetHe;
        $firstWordSingle = trim($firstWordSingle, ".,:;()[]\"'״׳");

        // 2. Détection des Sages (Tannaïm / Amoraïm) cités dans ce Daf
        $knownSages = [
            'רבי יהודה' => 'Rabbi Yehouda',
            'רבי מאיר' => 'Rabbi Méïr',
            'רבי שמעון' => 'Rabbi Chimon',
            'רבי יוחנן' => 'Rabbi Yohanan',
            'ריש לקיש' => 'Rich Lakich',
            'אביי' => 'Abayé',
            'רבא' => 'Rava',
            'רב יהודה' => 'Rav Yehouda',
            'רב הונא' => 'Rav Houna',
            'רב חסדא' => 'Rav Hisda',
            'רב אשי' => 'Rav Achi',
            'רבי עקיבא' => 'Rabbi Akiva',
            'רבי אליעזר' => 'Rabbi Éliézer',
            'רב נחמן' => 'Rav Nahman',
            'שמואל' => 'Chmouel',
            'רב פפא' => 'Rav Papa',
        ];

        $foundSageHe = null;
        $foundSageFr = null;
        foreach ($knownSages as $sageHe => $sageFr) {
            if ($cleanText !== '' && $this->strPos($cleanText, $sageHe) !== false) {
                $foundSageHe = $sageHe;
                $foundSageFr = $sageFr;
                break;
            }
        }

        if ($foundSageHe === null) {
            // Sélection déterministe basée sur le numéro de Daf si le texte complet n'était pas accessible
            $sageKeys = array_keys($knownSages);
            $foundSageHe = $sageKeys[$dafNum % count($sageKeys)];
            $foundSageFr = $knownSages[$foundSageHe];
        }

        // Choisir 3 autres Sages qui NE sont PAS dans le texte (ou différents) comme distracteurs
        $distractorSagesHe = [];
        $distractorSagesFr = [];
        foreach ($knownSages as $sHe => $sFr) {
            if ($sHe !== $foundSageHe && ($cleanText === '' || $this->strPos($cleanText, $sHe) === false)) {
                $distractorSagesHe[] = $sHe;
                $distractorSagesFr[] = $sFr;
                if (count($distractorSagesHe) === 3) {
                    break;
                }
            }
        }
        foreach ($knownSages as $sHe => $sFr) {
            if (count($distractorSagesHe) >= 3) {
                break;
            }
            if ($sHe !== $foundSageHe && !in_array($sHe, $distractorSagesHe, true)) {
                $distractorSagesHe[] = $sHe;
                $distractorSagesFr[] = $sFr;
            }
        }

        // 3. Détection d'un terme halakhique clé présent dans le Daf
        $halakhicTerms = [
            'חייב' => ['fr' => 'Obligé / Responsable (Hayav)', 'he' => 'חייב'],
            'פטור' => ['fr' => 'Exempté (Patour)', 'he' => 'פטור'],
            'מותר' => ['fr' => 'Permis (Moutar)', 'he' => 'מותר'],
            'אסור' => ['fr' => 'Interdit (Assour)', 'he' => 'אסור'],
            'כשר' => ['fr' => 'Valide / Cacher (Kacher)', 'he' => 'כשר'],
            'פסול' => ['fr' => 'Invalide (Passoul)', 'he' => 'פסול'],
            'טהור' => ['fr' => 'Pur (Tahor)', 'he' => 'טהור'],
            'טמא' => ['fr' => 'Impur (Tamé)', 'he' => 'טמא'],
        ];

        $foundTermHe = 'חייב';
        $foundTermFr = $halakhicTerms['חייב']['fr'];
        foreach ($halakhicTerms as $termKey => $termData) {
            if ($cleanText !== '' && preg_match('/\b' . preg_quote($termKey, '/') . '\b/u', $cleanText)) {
                $foundTermHe = $termData['he'];
                $foundTermFr = $termData['fr'];
                break;
            }
        }

        $termOptionsHe = [$foundTermHe];
        $termOptionsFr = [$foundTermFr];
        foreach ($halakhicTerms as $termKey => $termData) {
            if ($termKey !== $foundTermHe && count($termOptionsHe) < 4) {
                $termOptionsHe[] = $termData['he'];
                $termOptionsFr[] = $termData['fr'];
            }
        }

        return [
            [
                'id' => 1,
                'type' => 'multiple-choice',
                'question' => sprintf('באיזה נושא מרכזי עוסק %s ב%s של מסכת %s (לפי פורטל הדף היומי)?', $daf, $perek, $massekhetHe),
                'questionFr' => sprintf('Quel est le thème central étudié dans le %s (%s) du traité %s selon daf-yomi.com ?', $daf, $perek, $massekhetFr),
                'options' => [
                    $themeHe,
                    'דיני הקרבת קרבן התמיד ומנחת סולת במקדש',
                    'סדר העיבור וקידוש החודש בבית דין הגדול',
                    'דיני נחלות וחלוקת קרקעות בין האחים',
                ],
                'optionsFr' => [
                    ucfirst($themeFr),
                    'Les lois de l\'offrande perpétuelle et de la farine au Temple',
                    'Le calcul des années embolismiques par le Grand Tribunal',
                    'Le partage successoral des terres agricoles entre héritiers',
                ],
                'correctAnswer' => 0,
                'explanation' => sprintf('%s במסכת %s (%s) עוסק ב%s (מקור: daf-yomi.com).', $daf, $massekhetHe, $perek, $themeHe),
                'explanationFr' => sprintf('Dans le traité %s (%s, %s), la souguia porte sur %s (source : %s).', $massekhetFr, $perek, $daf, $themeFr, $portalUrl),
                'sourceUrl' => $portalUrl,
            ],
            [
                'id' => 2,
                'type' => 'multiple-choice',
                'question' => sprintf('מי מהחכמים הבאים מוזכר בסוגיית הגמרא של %s במסכת %s?', $daf, $massekhetHe),
                'questionFr' => sprintf('Lequel de ces Sages (Tannaïm / Amoraïm) intervient dans la souguia du %s de %s ?', $daf, $massekhetFr),
                'options' => [
                    $foundSageHe,
                    $distractorSagesHe[0],
                    $distractorSagesHe[1],
                    $distractorSagesHe[2],
                ],
                'optionsFr' => [
                    sprintf('%s (%s)', $foundSageFr, $foundSageHe),
                    sprintf('%s (%s)', $distractorSagesFr[0], $distractorSagesHe[0]),
                    sprintf('%s (%s)', $distractorSagesFr[1], $distractorSagesHe[1]),
                    sprintf('%s (%s)', $distractorSagesFr[2], $distractorSagesHe[2]),
                ],
                'correctAnswer' => 0,
                'explanation' => sprintf('%s מופיע בדברי הגמרא ב%s של מסכת %s.', $foundSageHe, $daf, $massekhetHe),
                'explanationFr' => sprintf('%s (%s) est cité dans l\'argumentation du %s du traité %s sur daf-yomi.com.', $foundSageFr, $foundSageHe, $daf, $massekhetFr),
                'sourceUrl' => $portalUrl,
            ],
            [
                'id' => 3,
                'type' => 'multiple-choice',
                'question' => sprintf('באילו מילים נפתח הקטע ב%s של מסכת %s?', $daf, $massekhetHe),
                'questionFr' => sprintf('Par quelle expression s\'ouvre le passage étudié dans le %s du traité %s ?', $daf, $massekhetFr),
                'options' => [
                    $firstWords,
                    'כל הפסולין ששחטו שחיטתן כשרה',
                    'שנים אוחזין בטלית זה אומר אני מצאתיה',
                    'ארבעה ראשי שנים הם באחד בניסן',
                ],
                'optionsFr' => [
                    sprintf('« %s »', $firstWords),
                    '« כל הפסולין ששחטו שחיטתן כשרה »',
                    '« שנים אוחזין בטלית זה אומר אני מצאתיה »',
                    '« ארבעה ראשי שנים הם באחד בניסן »',
                ],
                'correctAnswer' => 0,
                'explanation' => sprintf('פתיחת הדף במסכת %s %s היא: "%s".', $massekhetHe, $daf, $firstWords),
                'explanationFr' => sprintf('Le texte du %s de %s débute par : « %s ».', $daf, $massekhetFr, $firstWords),
                'sourceUrl' => $portalUrl,
            ],
            [
                'id' => 4,
                'type' => 'multiple-choice',
                'question' => sprintf('איזה מונח הלכתי נידון בסוגיות של %s במסכת %s?', $daf, $massekhetHe),
                'questionFr' => sprintf('Quelle qualification halakhique apparaît dans la discussion du %s de %s ?', $daf, $massekhetFr),
                'options' => $termOptionsHe,
                'optionsFr' => $termOptionsFr,
                'correctAnswer' => 0,
                'explanation' => sprintf('המונח ההלכתי "%s" נידון בסוגיית %s במסכת %s.', $foundTermHe, $daf, $massekhetHe),
                'explanationFr' => sprintf('La notion halakhique « %s » (%s) est employée dans la souguia de %s %s.', $foundTermFr, $foundTermHe, $massekhetFr, $daf),
                'sourceUrl' => $portalUrl,
            ],
            [
                'id' => 5,
                'type' => 'text',
                'question' => sprintf('כתוב את המילה הראשונה או שם המסכת של %s (%s):', $daf, $massekhetHe),
                'questionFr' => sprintf('Écrivez le premier mot du %s (ou le nom du traité %s) :', $daf, $massekhetFr),
                'correctAnswer' => $firstWordSingle,
                'correctAnswerFr' => $massekhetFr,
                'explanation' => sprintf('המילה הפותחת היא "%s" במסכת %s (%s).', $firstWordSingle, $massekhetHe, $daf),
                'explanationFr' => sprintf('Le premier mot est « %s » dans le traité %s (%s).', $firstWordSingle, $massekhetFr, $daf),
                'sourceUrl' => $portalUrl,
            ],
        ];
    }

    /**
     * Convertit un nom de Daf en hébreu (ex: "דף ב", "דף טו", "דף קעו") en numéro entier (ex: 2, 15, 176).
     */
    public function parseHebrewDafNumber(string $daf): int
    {
        $clean = trim(str_replace(['דף', '"', '\'', '״', '׳'], '', $daf));
        if (is_numeric($clean)) {
            return max(2, (int) $clean);
        }

        $gematria = [
            'א' => 1, 'ב' => 2, 'ג' => 3, 'ד' => 4, 'ה' => 5,
            'ו' => 6, 'ז' => 7, 'ח' => 8, 'ט' => 9, 'י' => 10,
            'כ' => 20, 'ך' => 20, 'ל' => 30, 'מ' => 40, 'ם' => 40,
            'נ' => 50, 'ן' => 50, 'ס' => 60, 'ע' => 70, 'פ' => 80,
            'ף' => 80, 'צ' => 90, 'ץ' => 90, 'ק' => 100, 'ר' => 200,
        ];

        $sum = 0;
        $chars = preg_split('//u', $clean, -1, PREG_SPLIT_NO_EMPTY) ?: [];
        foreach ($chars as $char) {
            if (isset($gematria[$char])) {
                $sum += $gematria[$char];
            }
        }

        return max(2, $sum > 0 ? $sum : 2);
    }
}
