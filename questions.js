/* ==========================================================================
   PJV / Java — datová sada otázek ke zkoušce
   Doplněno: všechny QUESTIONS mají ručně připravené ABCD options + correctOption.
   Původní ručně připravené options zůstaly zachované.
   ========================================================================== */

const CATEGORIES = [
  {
    "key": "jvm",
    "label": "Java, JVM, kompilace, běh",
    "color": "#e25555"
  },
  {
    "key": "types",
    "label": "Základní typy, výrazy, pole",
    "color": "#e2913a"
  },
  {
    "key": "oop",
    "label": "Třídy, objekty, OOP základy",
    "color": "#d9b13b"
  },
  {
    "key": "inheritance",
    "label": "Dědičnost, polymorfismus, interface",
    "color": "#7fb83a"
  },
  {
    "key": "object",
    "label": "Třída Object",
    "color": "#3ab87f"
  },
  {
    "key": "packages",
    "label": "Balíky, čitelnost, návrh",
    "color": "#3ab8b0"
  },
  {
    "key": "exceptions",
    "label": "Výjimky",
    "color": "#3a8fe2"
  },
  {
    "key": "enum",
    "label": "Enum",
    "color": "#5a6fe2"
  },
  {
    "key": "generics",
    "label": "Generika, kolekce",
    "color": "#8a5ae2"
  },
  {
    "key": "io",
    "label": "Soubory, proudy, serializace",
    "color": "#b85ae2"
  },
  {
    "key": "gui",
    "label": "GUI, Swing, MVC, události",
    "color": "#e25ab8"
  },
  {
    "key": "threads",
    "label": "Vlákna, paralelismus, synchronizace",
    "color": "#e25a7f"
  },
  {
    "key": "network",
    "label": "Síťování, sockety, protokoly",
    "color": "#c77b4a"
  },
  {
    "key": "algorithms",
    "label": "Algoritmy, datové struktury",
    "color": "#6a9a4a"
  },
  {
    "key": "memory",
    "label": "Paměť, GC, JVM výkon",
    "color": "#4a9a9a"
  },
  {
    "key": "modern",
    "label": "Moderní Java",
    "color": "#9a4a9a"
  },
  {
    "key": "traps",
    "label": "Pravda/nepravda a chytáky",
    "color": "#c0392b"
  }
];

const QUESTIONS = [
  {
    "id": 1,
    "category": "jvm",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je bytecode a k čemu se používá?",
    "answer": "Bytecode je mezikód vzniklý překladem .java souboru. Je uložen v .class souboru a vykonává ho JVM. Díky bytecodu je Java přenositelná mezi platformami (write once, run anywhere).",
    "keywords": [
      "bytecode",
      ".class",
      "JVM",
      "přenositelnost"
    ],
    "options": [
      "Mezikód v .class souboru, který vykonává JVM; zajišťuje přenositelnost",
      "Strojový kód konkrétního procesoru vzniklý překladem",
      "Zdrojový kód v .java souboru před překladem",
      "Textový formát pro ukládání konfigurace aplikace"
    ],
    "correctOption": 0
  },
  {
    "id": 2,
    "category": "jvm",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je JVM?",
    "answer": "JVM (Java Virtual Machine) je běhové prostředí, které spouští Java bytecode. Zajišťuje interpretaci, JIT kompilaci, správu paměti, garbage collection a běh programu na konkrétní platformě.",
    "keywords": [
      "JVM",
      "běhové prostředí",
      "JIT",
      "garbage collection"
    ],
    "options": [
      "Běhové prostředí spouštějící bytecode (interpretace, JIT, GC)",
      "Editor zdrojového kódu Javy",
      "Nástroj, který překládá .java na .class",
      "Knihovna standardních tříd Javy"
    ],
    "correctOption": 0
  },
  {
    "id": 3,
    "category": "jvm",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak probíhá kompilace v Javě?",
    "answer": "Zdrojový soubor .java se pomocí javac přeloží do .class souboru, který obsahuje bytecode. Bytecode potom spouští JVM.",
    "keywords": [
      "javac",
      "kompilace",
      ".class",
      "bytecode"
    ],
    "codeExample": "javac Main.java\njava Main",
    "options": [
      ".java se přeloží přímo do .exe souboru pro daný OS.",
      "JVM překládá zdrojový .java soubor bez vzniku .class.",
      ".java se přeloží javac do .class bytecodu, který spouští JVM.",
      "Kompilace v Javě znamená jen zabalení tříd do JAR."
    ],
    "correctOption": 2
  },
  {
    "id": 4,
    "category": "jvm",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak probíhá start programu v Javě?",
    "answer": "Spustí se JVM, načte zadanou třídu a hledá metodu public static void main(String[] args). Od této metody začíná běh programu.",
    "keywords": [
      "main",
      "start",
      "vstupní bod"
    ],
    "codeExample": "public static void main(String[] args)",
    "options": [
      "JVM načte zadanou třídu a spustí public static void main(String[] args).",
      "JVM vždy spouští metodu run() v první třídě souboru.",
      "Program začne v konstruktoru první vytvořené třídy.",
      "Start programu probíhá automaticky od prvního řádku .java souboru."
    ],
    "correctOption": 0
  },
  {
    "id": 5,
    "category": "jvm",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je nutné specifikovat při spuštění konkrétní třídy v Javě?",
    "answer": "Třída musí obsahovat metodu public static void main(String[] args). Při spuštění se zadá jméno třídy, která tuto metodu obsahuje.",
    "keywords": [
      "main",
      "spuštění třídy"
    ],
    "codeExample": "public static void main(String[] args)",
    "options": [
      "Stačí, aby třída implementovala Runnable.",
      "Stačí, aby třída měla libovolný public konstruktor.",
      "Spouštěná třída musí mít public static void main(String[] args).",
      "Musí být uveden soubor .class včetně přípony jako argument java."
    ],
    "correctOption": 2
  },
  {
    "id": 6,
    "category": "jvm",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaký je rozdíl mezi jménem třídy a plným jménem třídy?",
    "answer": "Jméno třídy je pouze název třídy, např. User. Plné jméno třídy (fully qualified name) obsahuje i balík, např. cz.cvut.fel.User.",
    "keywords": [
      "jméno třídy",
      "fully qualified name",
      "balík"
    ],
    "codeExample": "cz.cvut.fel.User",
    "options": [
      "Plné jméno třídy obsahuje jen název metody main.",
      "Jméno třídy a plné jméno třídy jsou vždy totožné.",
      "Jméno třídy je jen název; plné jméno obsahuje i balík.",
      "Plné jméno třídy je název souboru včetně .java."
    ],
    "correctOption": 2
  },
  {
    "id": 7,
    "category": "jvm",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se v Javě zapisují jména tříd?",
    "answer": "Jména tříd se píší v PascalCase, tedy první písmeno velké a každé další slovo také velkým písmenem.",
    "keywords": [
      "PascalCase",
      "konvence",
      "názvy tříd"
    ],
    "codeExample": "class MyClass {\n}",
    "options": [
      "Jména tříd musí vždy začínat podtržítkem.",
      "Jména tříd se podle konvence píší camelCase od malého písmene.",
      "Jména tříd se musí psát pouze velkými písmeny.",
      "Jména tříd se podle konvence píší PascalCase."
    ],
    "correctOption": 3
  },
  {
    "id": 8,
    "category": "jvm",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou nástroje na řízení překladu zdrojových souborů v Javě?",
    "answer": "Jsou to nástroje pro sestavení projektu (build tools), správu závislostí a spuštění testů. Příklady: Maven, Gradle, Ant.",
    "keywords": [
      "build",
      "Maven",
      "Gradle",
      "Ant",
      "závislosti"
    ],
    "options": [
      "Maven, Gradle, Ant – build nástroje a správa závislostí",
      "javac, java, jar – součásti JDK",
      "JUnit, Mockito – testovací knihovny",
      "Eclipse, IntelliJ – vývojová prostředí"
    ],
    "correctOption": 0
  },
  {
    "id": 9,
    "category": "jvm",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je JIT kompilace?",
    "answer": "JIT (Just-In-Time compilation) znamená, že JVM za běhu programu překládá často používané části bytecodu do nativního strojového kódu. Tím může výrazně zrychlit běh programu.",
    "keywords": [
      "JIT",
      "Just-In-Time",
      "nativní kód",
      "optimalizace"
    ],
    "options": [
      "JVM za běhu překládá horké části bytecodu do nativního kódu",
      "Překlad .java na .class před spuštěním",
      "Předběžný překlad celé aplikace do nativního executable",
      "Interpretace bytecodu řádek po řádku bez optimalizace"
    ],
    "correctOption": 0
  },
  {
    "id": 10,
    "category": "jvm",
    "type": "theory",
    "difficulty": "medium",
    "question": "Proč se výkonnost Java programu může lišit po spuštění a po delším běhu?",
    "answer": "Na začátku probíhá class loading, interpretace a JIT warmup. Po určité době JVM pozná často používané (horké) části kódu a optimalizuje je, takže program postupně zrychluje.",
    "keywords": [
      "warmup",
      "JIT",
      "class loading",
      "výkon"
    ],
    "options": [
      "Protože .class soubory se po každém běhu mění na nativní .exe.",
      "Protože JVM po startu postupně vypíná garbage collector.",
      "Kvůli class loadingu, interpretaci a JIT warmupu se program časem optimalizuje.",
      "Protože Java vždy běží první minutu bez přístupu k heapu."
    ],
    "correctOption": 2
  },
  {
    "id": 11,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte celočíselné typy v Javě?",
    "answer": "byte, short, int, long. Dále char je znakový typ, ale vnitřně je celočíselný unsigned 16bitový typ. Pozor: Java nemá long long ani běžné unsigned varianty pro byte, short, int, long.",
    "keywords": [
      "byte",
      "short",
      "int",
      "long",
      "char",
      "celočíselné typy"
    ],
    "commonMistakes": "Java nemá 'long long' ani 'unsigned int'. char je sice unsigned 16bit, ale je to znakový typ.",
    "options": [
      "byte, short, int, long (a char jako unsigned 16bit)",
      "byte, int, long, long long",
      "int, uint, long, ulong",
      "short, int, float, long"
    ],
    "correctOption": 0
  },
  {
    "id": 12,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte neceločíselné číselné typy v Javě?",
    "answer": "float a double. Pro přesné desetinné výpočty, například peníze, se používá BigDecimal.",
    "keywords": [
      "float",
      "double",
      "BigDecimal",
      "desetinná čísla"
    ],
    "options": [
      "Pro desetinná čísla se používají hlavně boolean a char.",
      "Neceločíselné typy jsou int a long; pro přesnost String.",
      "Java má pouze double, float v Javě neexistuje.",
      "Neceločíselné číselné typy jsou float a double; pro přesnost BigDecimal."
    ],
    "correctOption": 3
  },
  {
    "id": 13,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte nečíselné primitivní datové typy?",
    "answer": "boolean a char.",
    "keywords": [
      "boolean",
      "char",
      "primitivní typy"
    ],
    "options": [
      "Java nemá žádné nečíselné primitivní typy.",
      "Nečíselné primitivní typy jsou boolean a char.",
      "Nečíselné primitivní typy jsou String a Object.",
      "Nečíselné primitivní typy jsou float a double."
    ],
    "correctOption": 1
  },
  {
    "id": 14,
    "category": "types",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak je reprezentován neceločíselný typ v Javě?",
    "answer": "Typy float a double jsou reprezentovány podle standardu IEEE 754. float má 32 bitů, double má 64 bitů.",
    "keywords": [
      "IEEE 754",
      "float",
      "double",
      "32 bitů",
      "64 bitů"
    ],
    "options": [
      "float i double jsou celočíselné typy s pevnou čárkou.",
      "float a double jsou uloženy jako přesné desetinné řetězce.",
      "float a double jsou reprezentovány podle IEEE 754.",
      "double je reprezentován jako BigDecimal v JVM."
    ],
    "correctOption": 2
  },
  {
    "id": 15,
    "category": "types",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak je reprezentován typ double v Javě?",
    "answer": "double je 64bitové číslo podle IEEE 754: 1 bit znaménko, 11 bitů exponent, 52 bitů mantisa.",
    "keywords": [
      "double",
      "IEEE 754",
      "mantisa",
      "exponent",
      "znaménko"
    ],
    "codeExample": "1 bit  znaménko\n11 bitů exponent\n52 bitů mantisa",
    "options": [
      "double je přesné desetinné číslo bez mantisy a exponentu.",
      "double má 64 bitů: znaménko, 11bit exponent a 52bit mantisu.",
      "double má 64 bitů rozdělených na dva inty bez exponentu.",
      "double má 32 bitů: znaménko, 8bit exponent a 23bit mantisu."
    ],
    "correctOption": 1
  },
  {
    "id": 16,
    "category": "types",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak vypadá reprezentace reálných čísel v počítači?",
    "answer": "Reálná čísla jsou obvykle reprezentována ve floating-point tvaru: znaménko + mantisa + exponent. V Javě podle standardu IEEE 754.",
    "keywords": [
      "floating-point",
      "mantisa",
      "exponent",
      "IEEE 754"
    ],
    "options": [
      "Reálná čísla se v Javě vždy ukládají přesně jako zlomky.",
      "Reálná čísla se ukládají jako znaménko, mantisa a exponent.",
      "Reálná čísla se ukládají jako text s desetinnou čárkou.",
      "Reálná čísla se ukládají stejně jako int, jen s větším rozsahem."
    ],
    "correctOption": 1
  },
  {
    "id": 17,
    "category": "types",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se v Javě zapisují textové řetězce?",
    "answer": "Textové řetězce se zapisují do dvojitých uvozovek. Uvozovky uvnitř řetězce se escapují zpětným lomítkem.",
    "keywords": [
      "String",
      "uvozovky",
      "escape"
    ],
    "codeExample": "String s = \"Ahoj\";\nString s2 = \"Řekl: \\\"Ahoj\\\"\";",
    "options": [
      "Textový řetězec se v Javě zapisuje bez uvozovek.",
      "String se zapisuje do hranatých závorek jako pole znaků.",
      "String se píše do apostrofů, dvojité uvozovky jsou jen pro char.",
      "String se píše do dvojitých uvozovek, uvozovky uvnitř se escapují."
    ],
    "correctOption": 3
  },
  {
    "id": 18,
    "category": "types",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se v Javě deklaruje pole hodnot?",
    "answer": "Pole lze deklarovat třemi způsoby: zadáním velikosti přes new, inicializačním seznamem, nebo kombinací new s inicializátorem.",
    "keywords": [
      "pole",
      "array",
      "new",
      "deklarace"
    ],
    "codeExample": "int[] a = new int[20];\nint[] b = {1, 2, 3};\nint[] c = new int[]{1, 2, 3};",
    "options": [
      "Pole se deklaruje jen jako Array<T>, podobně jako generika.",
      "Pole v Javě musí být vždy dynamicky zvětšitelné přes add().",
      "Pole se deklaruje přes typ[], new s velikostí nebo inicializační seznam.",
      "Pole se deklaruje pomocí malloc a ručního uvolnění paměti."
    ],
    "correctOption": 2
  },
  {
    "id": 19,
    "category": "types",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se v Javě vytvoří pole polí?",
    "answer": "Dvojrozměrné pole (pole polí) se vytvoří uvedením dvou rozměrů přes new, nebo vnořeným inicializačním seznamem.",
    "keywords": [
      "2D pole",
      "matice",
      "pole polí"
    ],
    "codeExample": "int[][] matrix = new int[2][3];\n\nint[][] m2 = {\n    {1, 2},\n    {3, 4}\n};",
    "options": [
      "Pole polí se v Javě vytvořit nedá, existují jen jednorozměrná pole.",
      "Pole polí musí vždy používat ArrayList<ArrayList<int>>.",
      "Pole polí se vytvoří např. int[][] matrix = new int[2][3].",
      "Pole polí se zapisuje jako int[2,3] matrix."
    ],
    "correctOption": 2
  },
  {
    "id": 20,
    "category": "types",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jak zjistíme délku pole statické délky?",
    "answer": "Pomocí atributu array.length. Pozor: bez závorek — není to metoda, je to veřejný atribut pole.",
    "keywords": [
      "length",
      "délka pole",
      "atribut"
    ],
    "commonMistakes": "array.length je atribut (bez závorek), kdežto String.length() a List.size() jsou metody (se závorkami).",
    "codeExample": "array.length",
    "options": [
      "Délka pole je atribut array.length bez závorek.",
      "Délka pole se zjistí jen přes Iterator.",
      "Délka pole je metoda array.size().",
      "Délka pole je metoda array.length()."
    ],
    "correctOption": 0
  },
  {
    "id": 21,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je výraz v Javě?",
    "answer": "Výraz je kombinace operandů a operátorů, která má hodnotu. Výraz může obsahovat proměnné, literály, volání metod a operátory.",
    "keywords": [
      "výraz",
      "operand",
      "operátor",
      "hodnota"
    ],
    "codeExample": "int x = a + b * 2;",
    "options": [
      "Výraz je pouze celý blok příkazů mezi složenými závorkami.",
      "Výraz je kombinace operandů a operátorů, která má hodnotu.",
      "Výraz je vždy jen volání metody bez návratové hodnoty.",
      "Výraz je název třídy použitý při deklaraci objektu."
    ],
    "correctOption": 1
  },
  {
    "id": 22,
    "category": "types",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je ternární operátor?",
    "answer": "Ternární operátor je zkrácený zápis podmínky ve tvaru condition ? valueIfTrue : valueIfFalse.",
    "keywords": [
      "ternární operátor",
      "podmínka",
      "?:"
    ],
    "codeExample": "String result = age >= 18 ? \"adult\" : \"child\";",
    "options": [
      "Ternární operátor je zápis switch se třemi větvemi.",
      "Ternární operátor má tvar hodnota1 : hodnota2 ? podmínka.",
      "Ternární operátor slouží k cyklu se třemi proměnnými.",
      "Ternární operátor má tvar podmínka ? hodnotaKdyžTrue : hodnotaKdyžFalse."
    ],
    "correctOption": 3
  },
  {
    "id": 23,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte relační operátory v Javě?",
    "answer": "== (rovnost), != (nerovnost), > (větší než), >= (větší nebo rovno), < (menší než), <= (menší nebo rovno).",
    "keywords": [
      "relační operátory",
      "==",
      "!=",
      "<",
      ">"
    ],
    "codeExample": "==   rovnost\n!=   nerovnost\n>    větší než\n>=   větší nebo rovno\n<    menší než\n<=   menší nebo rovno",
    "options": [
      "Relační operátory jsou ==, !=, >, >=, <, <=.",
      "Relační operátory jsou new, this a super.",
      "Relační operátory jsou &&, || a !.",
      "Relační operátory jsou +, -, *, / a %."
    ],
    "correctOption": 0
  },
  {
    "id": 24,
    "category": "types",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte řídicí struktury v Javě?",
    "answer": "if/else, switch, for, while, do-while, break, continue, try-catch-finally.",
    "keywords": [
      "if",
      "switch",
      "for",
      "while",
      "řídicí struktury"
    ],
    "codeExample": "if, else\nswitch\nfor\nwhile\ndo-while\nbreak\ncontinue\ntry-catch-finally",
    "options": [
      "Řídicí struktury jsou pouze metody třídy Object.",
      "V Javě jsou řídicí struktury jen for a while.",
      "Patří sem if/else, switch, cykly, break/continue a try-catch-finally.",
      "Patří sem pouze třídy, rozhraní a balíky."
    ],
    "correctOption": 2
  },
  {
    "id": 25,
    "category": "types",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak lze předčasně opustit dva vnořené for cykly?",
    "answer": "Pomocí návěští (label) u vnějšího cyklu a příkazu break s tímto návěštím.",
    "keywords": [
      "návěští",
      "label",
      "break",
      "vnořené cykly"
    ],
    "codeExample": "outer:\nfor (int i = 0; i < 10; i++) {\n    for (int j = 0; j < 10; j++) {\n        if (j == 5) {\n            break outer;\n        }\n    }\n}",
    "options": [
      "Použije se návěští u vnějšího cyklu a break s tímto návěštím.",
      "V Javě nelze dva vnořené cykly opustit najednou.",
      "Použije se continue bez návěští ve vnitřním cyklu.",
      "Použije se obyčejný break uvnitř vnitřního cyklu."
    ],
    "correctOption": 0
  },
  {
    "id": 26,
    "category": "types",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se zapisují konstanty v Javě?",
    "answer": "Pomocí static final. Konvence: názvy konstant se píší velkými písmeny (UPPER_SNAKE_CASE).",
    "keywords": [
      "konstanta",
      "static final",
      "konvence"
    ],
    "codeExample": "public static final int MAX_SIZE = 100;",
    "options": [
      "Konstanty se zapisují pouze klíčovým slovem const.",
      "Konstanty se zapisují jako static final, typicky UPPER_SNAKE_CASE.",
      "Konstanta je každá proměnná označená static bez final.",
      "Konstanty se v Javě deklarují přes #define."
    ],
    "correctOption": 1
  },
  {
    "id": 27,
    "category": "oop",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou objekty v objektově orientovaném systému?",
    "answer": "Objekty jsou instance tříd. Mají stav (tvořený atributy), chování (tvořené metodami) a identitu (odlišuje objekt od jiných objektů).",
    "keywords": [
      "objekt",
      "instance",
      "stav",
      "chování",
      "identita"
    ],
    "options": [
      "Instance tříd se stavem, chováním a identitou",
      "Předpisy pro vytváření instancí",
      "Statické metody bez stavu",
      "Pouze datové struktury bez chování"
    ],
    "correctOption": 0
  },
  {
    "id": 28,
    "category": "oop",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou třídy v objektově orientovaném systému?",
    "answer": "Třída je předpis nebo šablona pro vytváření objektů. Definuje atributy, metody, konstruktory a rozhraní objektů.",
    "keywords": [
      "třída",
      "šablona",
      "předpis",
      "atributy",
      "metody"
    ],
    "options": [
      "Třída je konkrétní instance objektu vytvořená přes new.",
      "Třída v Javě vždy reprezentuje jedno běžící vlákno.",
      "Třída je jen kontejner pro globální proměnné bez metod.",
      "Třída je šablona pro objekty; definuje atributy, metody a konstruktory."
    ],
    "correctOption": 3
  },
  {
    "id": 29,
    "category": "oop",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co obsahují třídy v objektově orientovaném systému?",
    "answer": "Třída může obsahovat: instanční atributy, instanční metody, statické atributy, statické metody, konstruktory a vnitřní třídy.",
    "keywords": [
      "atributy",
      "metody",
      "konstruktory",
      "vnitřní třídy",
      "static"
    ],
    "options": [
      "Třída může obsahovat jen public proměnné a žádné konstruktory.",
      "Třída může obsahovat atributy, metody, statické členy, konstruktory a vnitřní třídy.",
      "Třída může obsahovat pouze metodu main a žádné atributy.",
      "Třída obsahuje jen objekty vytvořené v heapu."
    ],
    "correctOption": 1
  },
  {
    "id": 30,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se v Javě vytvářejí objekty?",
    "answer": "Objekty se vytvářejí pomocí operátoru new a konstruktoru.",
    "keywords": [
      "new",
      "konstruktor",
      "instance"
    ],
    "codeExample": "Person p = new Person();",
    "options": [
      "Objekty se vytvářejí operátorem new a voláním konstruktoru.",
      "Objekty se vytvářejí pouze deklarací referenční proměnné.",
      "Objekty se vytvářejí pomocí malloc a free.",
      "Objekty se vytvářejí automaticky při importu balíku."
    ],
    "correctOption": 0
  },
  {
    "id": 31,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak definujeme konstruktor?",
    "answer": "Konstruktor má stejné jméno jako třída a nemá návratový typ.",
    "keywords": [
      "konstruktor",
      "definice"
    ],
    "codeExample": "class Person {\n    Person() {\n    }\n}",
    "options": [
      "Konstruktor se vždy jmenuje main.",
      "Konstruktor musí mít návratový typ void.",
      "Konstruktor má stejné jméno jako třída a nemá návratový typ.",
      "Konstruktor je metoda označená static final."
    ],
    "correctOption": 2
  },
  {
    "id": 32,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "Můžeme definovat více konstruktorů jedné třídy?",
    "answer": "Ano. Jde o přetížení konstruktoru (overloading). Používá se pro různé způsoby vytvoření objektu — konstruktory se liší počtem či typem parametrů.",
    "keywords": [
      "přetížení",
      "overloading",
      "konstruktor"
    ],
    "codeExample": "class Person {\n    Person() {\n    }\n    Person(String name) {\n    }\n}",
    "options": [
      "Ne, každá třída může mít právě jeden konstruktor.",
      "Ano, ale pouze pokud mají stejný počet a typ parametrů.",
      "Více konstruktorů znamená vícenásobnou dědičnost.",
      "Ano, konstruktory lze přetížit různými parametry."
    ],
    "correctOption": 3
  },
  {
    "id": 33,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "Kdy definujeme konstruktor jako private?",
    "answer": "Když nechceme dovolit vytváření instancí zvenčí. Typické použití: singleton, utility class, factory pattern.",
    "keywords": [
      "private konstruktor",
      "singleton",
      "utility",
      "factory"
    ],
    "codeExample": "class MathUtils {\n    private MathUtils() {\n    }\n}",
    "options": [
      "Když chceme zakázat vytváření instancí zvenčí, např. utility/singleton.",
      "Když má konstruktor automaticky vracet null.",
      "Když chceme, aby konstruktor dědily všechny podtřídy.",
      "Když chceme, aby třída byla vždy abstraktní."
    ],
    "correctOption": 0
  },
  {
    "id": 34,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "K čemu slouží operátor this?",
    "answer": "this odkazuje na aktuální instanci objektu. Používá se například pro rozlišení atributu a parametru se stejným jménem.",
    "keywords": [
      "this",
      "aktuální instance",
      "atribut vs parametr"
    ],
    "codeExample": "class Person {\n    private String name;\n    Person(String name) {\n        this.name = name;\n    }\n}",
    "options": [
      "this odkazuje na aktuální instanci objektu.",
      "this odkazuje na předka aktuální třídy.",
      "this slouží k importu třídy z jiného balíku.",
      "this označuje statickou část třídy bez objektu."
    ],
    "correctOption": 0
  },
  {
    "id": 35,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu slouží operátor super?",
    "answer": "super odkazuje na předka (nadřazenou třídu). Použití: super.method() pro volání metody předka a super(...) pro volání konstruktoru předka.",
    "keywords": [
      "super",
      "předek",
      "nadřazená třída"
    ],
    "codeExample": "class Dog extends Animal {\n    Dog() {\n        super();\n    }\n    void sound() {\n        super.sound();\n    }\n}",
    "options": [
      "super vytváří novou instanci potomka.",
      "super odkazuje na předka, jeho konstruktor nebo metodu.",
      "super odkazuje na aktuální instanci stejně jako this.",
      "super slouží jen k ukončení metody předka."
    ],
    "correctOption": 1
  },
  {
    "id": 36,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak se používá super v konstruktoru?",
    "answer": "Volání konstruktoru předka super(...) musí být první příkaz konstruktoru.",
    "keywords": [
      "super",
      "konstruktor",
      "první příkaz"
    ],
    "commonMistakes": "super(...) musí být úplně první příkaz konstruktoru, jinak nastane chyba překladu.",
    "codeExample": "class Dog extends Animal {\n    Dog() {\n        super();\n    }\n}",
    "options": [
      "super(...) se volá až po inicializaci všech polí potomka.",
      "super(...) se v konstruktoru nesmí volat nikdy.",
      "super(...) může být kdekoliv v konstruktoru.",
      "super(...) musí být první příkaz konstruktoru."
    ],
    "correctOption": 3
  },
  {
    "id": 37,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je zapouzdření?",
    "answer": "Zapouzdření (encapsulation) znamená skrytí vnitřního stavu objektu a přístup k němu pouze přes jasně definované rozhraní (typicky gettery a settery).",
    "keywords": [
      "zapouzdření",
      "encapsulation",
      "private",
      "getter",
      "setter"
    ],
    "codeExample": "private int age;\npublic int getAge() {\n    return age;\n}\npublic void setAge(int age) {\n    if (age >= 0) {\n        this.age = age;\n    }\n}",
    "options": [
      "Skrytí vnitřního stavu a přístup přes definované rozhraní",
      "Dědění atributů z nadřazené třídy",
      "Volání metod podle skutečného typu za běhu",
      "Sloučení více tříd do jednoho balíku"
    ],
    "correctOption": 0
  },
  {
    "id": 38,
    "category": "oop",
    "type": "theory",
    "difficulty": "easy",
    "question": "Proč se používají přístupové metody k atributům?",
    "answer": "Kvůli zapouzdření. Gettery a settery umožňují kontrolovat přístup k datům, validovat hodnoty a měnit vnitřní implementaci bez změny veřejného rozhraní.",
    "keywords": [
      "getter",
      "setter",
      "validace",
      "zapouzdření"
    ],
    "options": [
      "Kvůli zapouzdření, validaci a zachování stabilního veřejného rozhraní.",
      "Aby se atributy daly měnit bez jakékoliv kontroly.",
      "Protože private atributy nelze nikdy přečíst ani uvnitř třídy.",
      "Protože getter automaticky vytváří kopii celé třídy."
    ],
    "correctOption": 0
  },
  {
    "id": 39,
    "category": "oop",
    "type": "theory",
    "difficulty": "easy",
    "question": "Které atributy třídy je vhodné dát jako public?",
    "answer": "Obvykle pouze konstanty (public static final). Běžné atributy mají být private.",
    "keywords": [
      "public",
      "konstanty",
      "private",
      "atributy"
    ],
    "codeExample": "public static final int MAX_SIZE = 100;",
    "options": [
      "Vhodné jsou hlavně public static final konstanty; běžné atributy mají být private.",
      "Public mají být jen proměnné, které se často mění.",
      "Všechny atributy mají být public kvůli jednoduššímu přístupu.",
      "Atributy v Javě nikdy nemohou být public."
    ],
    "correctOption": 0
  },
  {
    "id": 40,
    "category": "oop",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké jsou kategorie přístupu v Javě?",
    "answer": "public (odkudkoliv), protected (v balíku a v potomcích), package-private/default (v rámci balíku) a private (pouze ve třídě).",
    "keywords": [
      "public",
      "protected",
      "package-private",
      "private",
      "modifikátory"
    ],
    "codeExample": "public     přístup odkudkoliv\nprotected  přístup v balíku a potomcích\ndefault    přístup v rámci balíku\nprivate    přístup pouze ve třídě",
    "options": [
      "public, protected, package-private (default), private",
      "public, private, static, final",
      "open, closed, sealed, final",
      "global, local, package, instance"
    ],
    "correctOption": 0
  },
  {
    "id": 41,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak v Javě deklarujeme třídní proměnné?",
    "answer": "Pomocí klíčového slova static. Třídní proměnná patří třídě, ne konkrétní instanci — je sdílená všemi instancemi.",
    "keywords": [
      "static",
      "třídní proměnná",
      "class variable"
    ],
    "codeExample": "class Counter {\n    static int count;\n}",
    "options": [
      "Třídní proměnná se deklaruje klíčovým slovem static.",
      "Třídní proměnná se deklaruje klíčovým slovem class.",
      "Třídní proměnná musí být vždy final a private.",
      "Třídní proměnná je každá proměnná uvnitř konstruktoru."
    ],
    "correctOption": 0
  },
  {
    "id": 42,
    "category": "oop",
    "type": "code",
    "difficulty": "easy",
    "question": "Co znamená, že je třída final?",
    "answer": "Z final třídy nelze dědit. Příklady v Javě: String, Integer.",
    "keywords": [
      "final",
      "dědičnost",
      "String",
      "Integer"
    ],
    "codeExample": "final class MyClass {\n}",
    "options": [
      "Z final třídy nelze dědit.",
      "Final třída se může dědit jen v tom samém balíku.",
      "Final třída nemůže obsahovat žádné metody.",
      "Final třída je automaticky abstraktní."
    ],
    "correctOption": 0
  },
  {
    "id": 43,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je vnitřní třída?",
    "answer": "Vnitřní třída (inner class) je třída definovaná uvnitř jiné třídy. Používá se pro pomocné objekty, které mají význam jen uvnitř dané třídy.",
    "keywords": [
      "vnitřní třída",
      "inner class",
      "nested"
    ],
    "codeExample": "class Outer {\n    class Inner {\n    }\n}",
    "options": [
      "Vnitřní třída je každá private třída v jiném souboru.",
      "Vnitřní třída je objekt uložený uvnitř pole.",
      "Vnitřní třída je třída bez konstruktoru.",
      "Vnitřní třída je třída definovaná uvnitř jiné třídy."
    ],
    "correctOption": 3
  },
  {
    "id": 44,
    "category": "oop",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží vnitřní třída?",
    "answer": "Používá se, když pomocná třída patří logicky k jedné konkrétní třídě. Příklady: Node ve spojovém seznamu, listener v GUI, callback, pomocná implementace.",
    "keywords": [
      "vnitřní třída",
      "Node",
      "listener",
      "callback"
    ],
    "options": [
      "Slouží pro pomocnou třídu logicky svázanou s konkrétní vnější třídou.",
      "Slouží k vícenásobné dědičnosti tříd.",
      "Slouží výhradně k vytvoření statické proměnné.",
      "Slouží k automatickému převodu objektu na String."
    ],
    "correctOption": 0
  },
  {
    "id": 45,
    "category": "oop",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je anonymní vnitřní třída?",
    "answer": "Je to třída bez jména, vytvořená přímo na místě použití. Často se používala pro listenery (dnes nahrazené lambdami).",
    "keywords": [
      "anonymní třída",
      "listener",
      "lambda"
    ],
    "codeExample": "button.addActionListener(new ActionListener() {\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(\"Click\");\n    }\n});",
    "options": [
      "Anonymní vnitřní třída je třída bez metod.",
      "Anonymní třída je vždy abstraktní a nelze ji instancovat.",
      "Anonymní vnitřní třída je bezejmenná třída vytvořená přímo na místě.",
      "Anonymní třída je třída, která není v žádném balíku."
    ],
    "correctOption": 2
  },
  {
    "id": 46,
    "category": "inheritance",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je polymorfismus?",
    "answer": "Polymorfismus znamená, že s objekty různých tříd můžeme pracovat přes společný typ. Volaná metoda závisí na skutečném typu objektu za běhu programu (dynamický dispatch).",
    "keywords": [
      "polymorfismus",
      "dynamický dispatch",
      "společný typ"
    ],
    "codeExample": "Animal a = new Dog();\na.sound();",
    "options": [
      "Práce s objekty různých tříd přes společný typ; metoda dle skutečného typu za běhu",
      "Více konstruktorů se stejným jménem a různými parametry",
      "Skrytí vnitřního stavu objektu přes gettery/settery",
      "Dědění z více tříd zároveň"
    ],
    "correctOption": 0
  },
  {
    "id": 47,
    "category": "inheritance",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je overriding?",
    "answer": "Overriding znamená přepsání metody předka v potomkovi. Metoda má stejnou signaturu (jméno i parametry).",
    "keywords": [
      "overriding",
      "přepsání",
      "@Override",
      "signatura"
    ],
    "codeExample": "class Animal {\n    void sound() {\n    }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() {\n    }\n}",
    "options": [
      "Overriding je přepsání metody předka v potomkovi se stejnou signaturou.",
      "Overriding je skrytí atributu pomocí private.",
      "Overriding je více metod stejného jména s různými parametry.",
      "Overriding znamená dědění z více tříd."
    ],
    "correctOption": 0
  },
  {
    "id": 48,
    "category": "inheritance",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je overloading?",
    "answer": "Overloading znamená přetížení metody. Více metod má stejné jméno, ale jiné parametry (počet nebo typy).",
    "keywords": [
      "overloading",
      "přetížení",
      "parametry"
    ],
    "codeExample": "void print(String s) {\n}\nvoid print(int x) {\n}",
    "options": [
      "Overloading je více metod stejného jména s různými parametry.",
      "Overloading je implementace více interface najednou.",
      "Overloading je převod objektu na nadtřídu.",
      "Overloading je přepsání metody předka stejnou signaturou."
    ],
    "correctOption": 0
  },
  {
    "id": 49,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi overriding a overloading?",
    "answer": "Overriding přepisuje metodu předka v potomkovi (stejná signatura). Overloading definuje více metod stejného jména s různými parametry (ve stejné nebo i jiné třídě).",
    "keywords": [
      "overriding",
      "overloading",
      "rozdíl"
    ],
    "commonMistakes": "Nezaměňovat: overRIDing = přepsání zděděné metody; overLOADing = stejné jméno, jiné parametry.",
    "options": [
      "Overriding = přepsání metody předka; overloading = stejné jméno, jiné parametry",
      "Overriding = jiné parametry; overloading = přepsání metody předka",
      "Jsou to synonyma pro totéž",
      "Overriding se týká atributů, overloading metod"
    ],
    "correctOption": 0
  },
  {
    "id": 50,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co jsou virtuální metody?",
    "answer": "Virtuální metody jsou metody, jejichž konkrétní implementace se vybírá za běhu podle skutečného typu objektu. V Javě jsou běžné instanční metody virtuální, pokud nejsou static, final nebo private.",
    "keywords": [
      "virtuální metody",
      "dynamický dispatch",
      "static",
      "final",
      "private"
    ],
    "options": [
      "Virtuální metoda je každá static metoda.",
      "Virtuální metody se vždy vybírají jen podle statického typu proměnné.",
      "Virtuální metoda v Javě musí být označena klíčovým slovem virtual.",
      "Virtuální metody se vybírají za běhu podle skutečného typu objektu."
    ],
    "correctOption": 3
  },
  {
    "id": 51,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co je vícenásobná dědičnost?",
    "answer": "Vícenásobná dědičnost znamená, že třída dědí z více tříd najednou. Java vícenásobnou dědičnost tříd nepodporuje, ale umožňuje implementovat více rozhraní (interface).",
    "keywords": [
      "vícenásobná dědičnost",
      "interface",
      "implements"
    ],
    "commonMistakes": "Java NEumí vícenásobnou dědičnost tříd, ale UMÍ implementovat více interface.",
    "codeExample": "class MyClass implements A, B {\n}",
    "options": [
      "Dědění z více tříd; Java to u tříd neumí, ale umí více interface",
      "Vytvoření více instancí jedné třídy",
      "Přepsání více metod předka najednou",
      "Java podporuje vícenásobnou dědičnost tříd bez omezení"
    ],
    "correctOption": 0
  },
  {
    "id": 52,
    "category": "inheritance",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je vazba is-a?",
    "answer": "is-a znamená dědičnost. Příklad: Dog is an Animal, Rectangle is a Shape.",
    "keywords": [
      "is-a",
      "dědičnost",
      "extends"
    ],
    "codeExample": "class Dog extends Animal {\n}",
    "options": [
      "is-a je vztah kompozice, např. Car has an Engine.",
      "is-a znamená, že objekt má jiný objekt jako atribut.",
      "is-a je vztah dědičnosti, např. Dog is an Animal.",
      "is-a označuje porovnání referencí operátorem ==."
    ],
    "correctOption": 2
  },
  {
    "id": 53,
    "category": "inheritance",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je vazba has-a?",
    "answer": "has-a znamená, že objekt obsahuje jiný objekt. Jde o agregaci nebo kompozici. Příklad: Car has an Engine, Person has an Address.",
    "keywords": [
      "has-a",
      "agregace",
      "kompozice"
    ],
    "codeExample": "class Car {\n    private Engine engine;\n}",
    "options": [
      "has-a označuje přepsání metody v potomkovi.",
      "has-a znamená, že objekt obsahuje jiný objekt; agregace nebo kompozice.",
      "has-a znamená dědičnost mezi předkem a potomkem.",
      "has-a znamená, že třída implementuje rozhraní."
    ],
    "correctOption": 1
  },
  {
    "id": 54,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi agregací a kompozicí?",
    "answer": "Agregace je slabší vztah — část může existovat nezávisle na celku (tým má hráče). Kompozice je silnější vztah — část bez celku nedává smysl nebo její životnost závisí na celku (dům má místnosti).",
    "keywords": [
      "agregace",
      "kompozice",
      "rozdíl",
      "životnost"
    ],
    "options": [
      "Agregace = část žije nezávisle; kompozice = život části závisí na celku",
      "Agregace = silnější vztah; kompozice = slabší vztah",
      "Jsou to synonyma",
      "Agregace se týká tříd, kompozice rozhraní"
    ],
    "correctOption": 0
  },
  {
    "id": 55,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "easy",
    "question": "Z jakých částí se skládá odvozená třída?",
    "answer": "Odvozená třída obsahuje: vlastní atributy a metody, zděděné atributy a metody, konstruktor a odkaz na předka přes super.",
    "keywords": [
      "odvozená třída",
      "zděděné členy",
      "super",
      "konstruktor"
    ],
    "codeExample": "class Child extends Parent {\n}",
    "options": [
      "Obsahuje jen konstruktory předka, vlastní konstruktor nemá.",
      "Obsahuje vždy všechna private pole předka jako public.",
      "Obsahuje vlastní i zděděné členy, konstruktor a vazbu na předka přes super.",
      "Obsahuje pouze nově přidané členy, zděděné členy zanikají."
    ],
    "correctOption": 2
  },
  {
    "id": 56,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak se liší abstract class a interface?",
    "answer": "abstract class může obsahovat stav, konstruktory, atributy a implementované metody; třída může dědit jen z jedné abstraktní třídy. interface popisuje rozhraní (kontrakt); třída může implementovat více rozhraní.",
    "keywords": [
      "abstract class",
      "interface",
      "stav",
      "vícenásobná implementace"
    ],
    "options": [
      "Abstract class = stav a jeden předek; interface = kontrakt a více implementací",
      "Abstract class i interface mohou mít stav i konstruktory stejně",
      "Interface umí mít stav, abstract class ne",
      "Třída může dědit z více abstract class, ale jen z jednoho interface"
    ],
    "correctOption": 0
  },
  {
    "id": 57,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "medium",
    "question": "Kdy použít abstract class?",
    "answer": "Když mají potomci společný základ, společný stav nebo společnou část implementace.",
    "keywords": [
      "abstract class",
      "společný stav",
      "společná implementace"
    ],
    "options": [
      "Použij ji, když potomci sdílejí stav nebo společnou implementaci.",
      "Použij ji, když třída musí dědit z více předků.",
      "Použij ji jen pro třídy bez jakýchkoliv metod.",
      "Použij ji vždy místo interface, protože interface neumí polymorfismus."
    ],
    "correctOption": 0
  },
  {
    "id": 58,
    "category": "inheritance",
    "type": "code",
    "difficulty": "medium",
    "question": "Kdy použít interface?",
    "answer": "Když chceme definovat schopnost nebo kontrakt, který mohou implementovat různé nesouvisející třídy.",
    "keywords": [
      "interface",
      "kontrakt",
      "schopnost"
    ],
    "codeExample": "interface Runnable {\n    void run();\n}",
    "options": [
      "Použij ho jen tehdy, když potřebuješ vytvořit objekt interface přes new.",
      "Použij ho pro kontrakt/schopnost implementovatelnou i nesouvisejícími třídami.",
      "Použij ho pro dědění implementace z více tříd.",
      "Použij ho, když chceš sdílet instanční stav a konstruktory."
    ],
    "correctOption": 1
  },
  {
    "id": 59,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jsou metody v interface veřejné?",
    "answer": "Ano. Metody v rozhraní jsou implicitně public (a abstraktní, pokud nejsou default/static).",
    "keywords": [
      "interface",
      "public",
      "implicitně"
    ],
    "commonMistakes": "I když u metody v interface nenapíšeš 'public', je public z definice.",
    "options": [
      "Ne, viditelnost metod interface závisí na implementující třídě.",
      "Ano, metody interface jsou implicitně public.",
      "Ne, metody interface jsou implicitně private.",
      "Jen pokud se u interface napíše protected."
    ],
    "correctOption": 1
  },
  {
    "id": 60,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "medium",
    "question": "Musí být implementace metody z interface public?",
    "answer": "Ano. Implementace nesmí snížit viditelnost. Pokud u implementující metody zapomeneš public, kód se nezkompiluje.",
    "keywords": [
      "interface",
      "public",
      "viditelnost",
      "implementace"
    ],
    "commonMistakes": "Vynechání 'public' u implementující metody = chyba překladu (pokus o snížení viditelnosti).",
    "codeExample": "// Špatně – nezkompiluje se:\nclass Letadlo implements Letoun {\n    void let() { }\n}\n// Správně:\nclass Letadlo implements Letoun {\n    public void let() { }\n}",
    "options": [
      "Ano, implementace musí být public a nesmí snížit viditelnost.",
      "Ne, implementace musí být vždy private.",
      "Ne, implementace může být package-private bez public.",
      "Jen pokud interface obsahuje default metodu."
    ],
    "correctOption": 0
  },
  {
    "id": 61,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "medium",
    "question": "Je implementace metody z interface overloading?",
    "answer": "Ne. Je to implementace (přepsání) metody, ne overloading. Overloading by znamenal stejný název, ale jiné parametry.",
    "keywords": [
      "interface",
      "implementace",
      "overloading"
    ],
    "commonMistakes": "Implementace metody z interface = přepsání, NE overloading.",
    "options": [
      "Ano, každá metoda z interface je automaticky overloading.",
      "Ne, je to serializace metody z rozhraní.",
      "Ne, je to implementace/přepsání; overloading by měl jiné parametry.",
      "Ano, protože interface metoda nemá tělo."
    ],
    "correctOption": 2
  },
  {
    "id": 62,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je double dispatch?",
    "answer": "Double dispatch je mechanismus, kdy se výběr operace řídí dynamickým typem dvou objektů, ne jen jednoho. V Javě je běžný single dispatch (metoda se vybírá podle objektu, na kterém je volána). Double dispatch se často řeší přes návrhový vzor Visitor.",
    "keywords": [
      "double dispatch",
      "single dispatch",
      "Visitor"
    ],
    "options": [
      "Double dispatch vybírá operaci podle dynamického typu dvou objektů.",
      "Double dispatch je přetížení metody dvěma parametry při kompilaci.",
      "Double dispatch znamená, že jedna metoda se zavolá dvakrát za sebou.",
      "Double dispatch je vícenásobná dědičnost tříd v Javě."
    ],
    "correctOption": 0
  },
  {
    "id": 63,
    "category": "inheritance",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co znamená, když přepíšeme equals()?",
    "answer": "Měníme pravidlo porovnávání objektů. Dva objekty pak mohou být považovány za stejné podle obsahu (logické rovnosti), ne podle identity (reference).",
    "keywords": [
      "equals",
      "logická rovnost",
      "porovnání"
    ],
    "options": [
      "Měníme způsob výpočtu hashCode, equals se tím nedotkne.",
      "Zajistíme, že objekt bude automaticky immutable.",
      "Měníme pravidlo logické rovnosti objektů, typicky z identity na obsah.",
      "Zakážeme porovnávání objektů operátorem ==."
    ],
    "correctOption": 2
  },
  {
    "id": 64,
    "category": "inheritance",
    "type": "trap",
    "difficulty": "medium",
    "question": "Když přepíšeme equals(), musíme přepsat i hashCode()?",
    "answer": "Ano. Pokud jsou dva objekty stejné podle equals(), musí mít stejný hashCode(). Je to nutné pro správnou funkci hashovacích kolekcí: HashMap, HashSet, Hashtable.",
    "keywords": [
      "equals",
      "hashCode",
      "kontrakt",
      "HashMap",
      "HashSet"
    ],
    "commonMistakes": "Přepsat equals() bez hashCode() rozbije chování v HashMap/HashSet.",
    "options": [
      "Ano – stejné objekty dle equals() musí mít stejný hashCode()",
      "Ne – hashCode() je nepovinný",
      "Jen pokud používáš TreeMap",
      "Ne, equals() a hashCode() spolu nesouvisí"
    ],
    "correctOption": 0
  },
  {
    "id": 65,
    "category": "object",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké základní metody poskytuje třída Object?",
    "answer": "toString(), equals(Object obj), hashCode(), getClass(), clone(), wait(), notify(), notifyAll().",
    "keywords": [
      "Object",
      "toString",
      "equals",
      "hashCode",
      "getClass"
    ],
    "codeExample": "toString()\nequals(Object obj)\nhashCode()\ngetClass()\nclone()\nwait()\nnotify()\nnotifyAll()",
    "options": [
      "Object je rozhraní, které se musí ručně implementovat.",
      "Object poskytuje např. toString, equals, hashCode, getClass, clone, wait/notify.",
      "Object poskytuje hlavně main, run, start a sleep.",
      "Object obsahuje pouze metodu toString a žádné další."
    ],
    "correctOption": 1
  },
  {
    "id": 66,
    "category": "object",
    "type": "code",
    "difficulty": "easy",
    "question": "K čemu slouží toString()?",
    "answer": "Vrací textovou reprezentaci objektu.",
    "keywords": [
      "toString",
      "textová reprezentace"
    ],
    "codeExample": "@Override\npublic String toString() {\n    return \"Person{name='\" + name + \"'}\";\n}",
    "options": [
      "toString() vrací textovou reprezentaci objektu.",
      "toString() uspí aktuální vlákno na monitoru.",
      "toString() vrací runtime třídu objektu.",
      "toString() porovnává dva objekty podle obsahu."
    ],
    "correctOption": 0
  },
  {
    "id": 67,
    "category": "object",
    "type": "theory",
    "difficulty": "easy",
    "question": "K čemu slouží equals()?",
    "answer": "Slouží k porovnání objektů podle logické rovnosti (podle obsahu, ne podle reference).",
    "keywords": [
      "equals",
      "logická rovnost",
      "porovnání"
    ],
    "options": [
      "equals() vždy porovnává jen hashCode bez další kontroly.",
      "equals() porovnává objekty podle logické rovnosti dle implementace.",
      "equals() vrací runtime třídu objektu.",
      "equals() převádí objekt na textový řetězec."
    ],
    "correctOption": 1
  },
  {
    "id": 68,
    "category": "object",
    "type": "theory",
    "difficulty": "easy",
    "question": "K čemu slouží hashCode()?",
    "answer": "Vrací hash objektu. Používá se v hashovacích kolekcích, například HashMap a HashSet.",
    "keywords": [
      "hashCode",
      "hash",
      "HashMap",
      "HashSet"
    ],
    "options": [
      "hashCode() porovnává objekty podle textové reprezentace.",
      "hashCode() slouží k uzamčení monitoru objektu.",
      "hashCode() vrací hash používaný hlavně v HashMap a HashSet.",
      "hashCode() vždy vrací unikátní adresu objektu v paměti."
    ],
    "correctOption": 2
  },
  {
    "id": 69,
    "category": "object",
    "type": "code",
    "difficulty": "easy",
    "question": "K čemu slouží getClass()?",
    "answer": "Vrací runtime třídu objektu (objekt typu Class).",
    "keywords": [
      "getClass",
      "runtime třída",
      "reflexe"
    ],
    "codeExample": "obj.getClass()",
    "options": [
      "getClass() vytvoří novou instanci třídy.",
      "getClass() slouží ke změně dynamického typu objektu.",
      "getClass() vrací plné jméno balíku jako String vždy bez třídy.",
      "getClass() vrací runtime třídu objektu jako objekt Class."
    ],
    "correctOption": 3
  },
  {
    "id": 70,
    "category": "object",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží wait(), notify(), notifyAll()?",
    "answer": "Slouží k synchronizaci vláken nad monitorem objektu. wait() uspí vlákno a uvolní monitor, notify()/notifyAll() probudí čekající vlákna.",
    "keywords": [
      "wait",
      "notify",
      "notifyAll",
      "monitor",
      "synchronizace"
    ],
    "options": [
      "wait/notify/notifyAll slouží k synchronizaci vláken nad monitorem objektu.",
      "wait/notify slouží k převodu objektu na text.",
      "wait/notify jsou metody pro správu kolekcí List a Set.",
      "wait/notify fungují jen pro síťové sockety."
    ],
    "correctOption": 0
  },
  {
    "id": 71,
    "category": "packages",
    "type": "code",
    "difficulty": "easy",
    "question": "Proč organizujeme třídy do balíků?",
    "answer": "Kvůli přehlednosti, modularitě, zamezení konfliktům názvů a řízení viditelnosti.",
    "keywords": [
      "balík",
      "package",
      "modularita",
      "viditelnost"
    ],
    "codeExample": "package cz.cvut.fel.pjv;",
    "options": [
      "Balíky automaticky převádějí Java kód na bytecode.",
      "Balíky zlepšují přehlednost, modularitu, viditelnost a řeší konflikty názvů.",
      "Balíky nahrazují dědičnost mezi třídami.",
      "Balíky jsou potřeba pouze pro spuštění metody main."
    ],
    "correctOption": 1
  },
  {
    "id": 72,
    "category": "packages",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaká pravidla používáme při definování balíků?",
    "answer": "Obvykle se používá obrácená doména (např. cz.cvut.fel.project nebo com.company.app). Názvy balíků se píší malými písmeny.",
    "keywords": [
      "balík",
      "obrácená doména",
      "konvence",
      "malá písmena"
    ],
    "codeExample": "cz.cvut.fel.project\ncom.company.app",
    "options": [
      "Balíky se vždy píší PascalCase jako názvy tříd.",
      "Názvy balíků musí být stejné jako názvy metod.",
      "Balík musí začínat slovem package a končit .class.",
      "Používá se obrácená doména a malá písmena, např. cz.cvut.fel.project."
    ],
    "correctOption": 3
  },
  {
    "id": 73,
    "category": "packages",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co znamená čitelnost programu?",
    "answer": "Čitelný program má správné odsazení, smysluplné názvy, krátké metody, logické rozdělení do tříd a balíků, komentáře tam, kde pomáhají, a JavaDoc u veřejného API.",
    "keywords": [
      "čitelnost",
      "odsazení",
      "názvy",
      "JavaDoc"
    ],
    "options": [
      "Čitelný program musí mít všechny atributy public.",
      "Čitelný program má jasné názvy, odsazení, krátké metody a logické členění.",
      "Čitelnost se týká pouze rychlosti běhu programu.",
      "Čitelnost znamená co nejkratší kód bez ohledu na názvy."
    ],
    "correctOption": 1
  },
  {
    "id": 74,
    "category": "packages",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je objektově orientovaná analýza?",
    "answer": "OO analýza popisuje problémovou oblast pomocí objektů, vztahů a požadavků. Řeší, CO v systému existuje.",
    "keywords": [
      "OO analýza",
      "problémová oblast",
      "co"
    ],
    "options": [
      "OO analýza popisuje problémovou oblast: objekty, vztahy a požadavky.",
      "OO analýza vybírá JVM a garbage collector.",
      "OO analýza řeší konkrétní syntax Javy a optimalizaci bytecodu.",
      "OO analýza je totéž jako psaní unit testů."
    ],
    "correctOption": 0
  },
  {
    "id": 75,
    "category": "packages",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je objektově orientovaný návrh?",
    "answer": "OO návrh řeší, JAK problém implementovat pomocí tříd, rozhraní, vazeb a odpovědností.",
    "keywords": [
      "OO návrh",
      "implementace",
      "jak"
    ],
    "options": [
      "OO návrh řeší, jak problém implementovat třídami, rozhraními a vazbami.",
      "OO návrh je výběr operačního systému pro JVM.",
      "OO návrh je překlad .java souborů do .class.",
      "OO návrh řeší jen popis reálného světa bez implementačních rozhodnutí."
    ],
    "correctOption": 0
  },
  {
    "id": 76,
    "category": "packages",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi OO analýzou a OO návrhem?",
    "answer": "Analýza řeší problém a pojmy reálného světa (CO). Návrh řeší softwarovou strukturu a implementaci (JAK).",
    "keywords": [
      "analýza",
      "návrh",
      "rozdíl"
    ],
    "options": [
      "Analýza = co existuje (reálný svět); návrh = jak to implementovat (software)",
      "Analýza = implementace; návrh = pojmy reálného světa",
      "Jsou to synonyma pro totéž",
      "Analýza je o kódu, návrh o testování"
    ],
    "correctOption": 0
  },
  {
    "id": 77,
    "category": "packages",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak spolu souvisí efektivita a znovupoužitelnost?",
    "answer": "Obvykle jde o kompromis. Vysoce obecný a znovupoužitelný návrh může být méně efektivní. Vysoce optimalizovaný návrh bývá často méně obecný.",
    "keywords": [
      "efektivita",
      "znovupoužitelnost",
      "kompromis",
      "obecnost"
    ],
    "options": [
      "Znovupoužitelnost znamená vypnout polymorfismus kvůli výkonu.",
      "Obecný znovupoužitelný návrh může být méně efektivní; optimalizovaný méně obecný.",
      "Čím obecnější návrh, tím je vždy rychlejší.",
      "Efektivita a znovupoužitelnost se nikdy neovlivňují."
    ],
    "correctOption": 1
  },
  {
    "id": 78,
    "category": "exceptions",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak lze vyvolat vlastní výjimku MyException?",
    "answer": "Pomocí klíčového slova throw a vytvoření nové instance výjimky.",
    "keywords": [
      "throw",
      "výjimka",
      "vyvolání"
    ],
    "codeExample": "throw new MyException();",
    "options": [
      "Výjimka se vyvolá pouze pomocí return new MyException().",
      "Výjimka se vyvolá příkazem throw new MyException().",
      "Výjimku lze vyvolat jen automaticky, nikdy ručně.",
      "Výjimka se vyvolá deklarací throws bez vytvoření instance."
    ],
    "correctOption": 1
  },
  {
    "id": 79,
    "category": "exceptions",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak lze vytvořit novou výjimku?",
    "answer": "Vytvoříme třídu, která dědí z Exception (checked) nebo z RuntimeException (unchecked).",
    "keywords": [
      "výjimka",
      "Exception",
      "RuntimeException",
      "checked",
      "unchecked"
    ],
    "codeExample": "// Checked:\nclass MyException extends Exception {\n}\n// Unchecked:\nclass MyException extends RuntimeException {\n}",
    "options": [
      "Výjimku vytvoříme jako enum s hodnotou ERROR.",
      "Nová výjimka je třída dědící z Exception nebo RuntimeException.",
      "Nová výjimka musí dědit přímo z Object a nesmí z Throwable.",
      "Výjimka je libovolná třída s metodou main."
    ],
    "correctOption": 1
  },
  {
    "id": 80,
    "category": "exceptions",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké znáte typy výjimek v Javě?",
    "answer": "checked exceptions, unchecked exceptions (RuntimeException) a Error. Všechny dědí z Throwable.",
    "keywords": [
      "checked",
      "unchecked",
      "Error",
      "Throwable"
    ],
    "options": [
      "checked, unchecked (RuntimeException), Error – vše dědí z Throwable",
      "compile-time a runtime, jiné nejsou",
      "fatal, warning, info",
      "pouze checked a Error"
    ],
    "correctOption": 0
  },
  {
    "id": 81,
    "category": "exceptions",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaké výjimky je nutné ošetřovat?",
    "answer": "Povinně se ošetřují checked exceptions, tedy potomci Exception mimo RuntimeException. Možnosti: zachytit přes try-catch, nebo deklarovat přes throws.",
    "keywords": [
      "checked",
      "try-catch",
      "throws",
      "povinné ošetření"
    ],
    "commonMistakes": "Unchecked (RuntimeException) NEmusíš ošetřovat. Checked ANO – jinak chyba překladu.",
    "options": [
      "Povinně se ošetřují checked exceptions; přes try-catch nebo throws.",
      "V Javě se výjimky nikdy povinně neošetřují.",
      "Povinně se ošetřují pouze RuntimeException.",
      "Povinně se ošetřují všechny Throwable včetně Error."
    ],
    "correctOption": 0
  },
  {
    "id": 82,
    "category": "exceptions",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se ošetří výjimka pomocí try-catch?",
    "answer": "Rizikový kód se obalí do bloku try a výjimka se zachytí v bloku catch.",
    "keywords": [
      "try-catch",
      "ošetření výjimky"
    ],
    "codeExample": "try {\n    riskyMethod();\n} catch (IOException e) {\n    e.printStackTrace();\n}",
    "options": [
      "catch blok musí být vždy před try blokem.",
      "try-catch slouží jen pro RuntimeException, ne pro checked výjimky.",
      "Výjimka se ošetří pouze tím, že metoda vrátí null.",
      "Rizikový kód patří do try a konkrétní výjimka do catch."
    ],
    "correctOption": 3
  },
  {
    "id": 83,
    "category": "exceptions",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jak zachytáváme konkrétní výjimku?",
    "answer": "Do catch uvedeme konkrétní typ výjimky. Konkrétnější výjimky musí být v catch blocích PŘED obecnějšími.",
    "keywords": [
      "catch",
      "konkrétní výjimka",
      "pořadí catch"
    ],
    "commonMistakes": "Obecnější výjimka (Exception) před konkrétnější (IOException) = nedosažitelný kód a chyba překladu.",
    "codeExample": "try {\n    readFile();\n} catch (IOException e) {\n    System.out.println(\"Chyba čtení\");\n}",
    "options": [
      "Konkrétní výjimku zachytíme pomocí throws v těle metody.",
      "Vždy stačí dát catch(Exception) jako první a další catch fungují dál.",
      "Do catch uvedeme konkrétní typ; konkrétnější catch musí být před obecnějším.",
      "Pořadí catch bloků nemá žádný význam."
    ],
    "correctOption": 2
  },
  {
    "id": 84,
    "category": "exceptions",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak definujeme, že metoda může způsobit výjimku?",
    "answer": "Pomocí klíčového slova throws v hlavičce metody.",
    "keywords": [
      "throws",
      "hlavička metody",
      "deklarace výjimky"
    ],
    "codeExample": "void readFile() throws IOException {\n}",
    "options": [
      "Metoda musí mít návratový typ Exception.",
      "Výjimka se deklaruje anotací @ExceptionOnly.",
      "Metoda deklaruje možnou výjimku pomocí throws v hlavičce.",
      "Metoda deklaruje možnou výjimku příkazem throw v signatuře."
    ],
    "correctOption": 2
  },
  {
    "id": 85,
    "category": "exceptions",
    "type": "code",
    "difficulty": "medium",
    "question": "Kdy se provede blok finally?",
    "answer": "Blok finally se provede po try-catch téměř vždy, i když dojde k return nebo výjimce. Slouží k úklidu zdrojů.",
    "keywords": [
      "finally",
      "úklid",
      "return",
      "vždy"
    ],
    "codeExample": "try {\n} catch (Exception e) {\n} finally {\n    // úklid zdrojů\n}",
    "options": [
      "finally se provede po try-catch téměř vždy, i při return nebo výjimce.",
      "finally se provede jen tehdy, když žádná výjimka nenastane.",
      "finally se provede před try blokem.",
      "finally se používá jen pro checked výjimky."
    ],
    "correctOption": 0
  },
  {
    "id": 86,
    "category": "exceptions",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu se používá finally?",
    "answer": "K uvolnění zdrojů: zavření souboru, zavření socketu, uvolnění zámku. V moderní Javě se často používá try-with-resources.",
    "keywords": [
      "finally",
      "zdroje",
      "try-with-resources"
    ],
    "options": [
      "finally nahrazuje klíčové slovo throws v hlavičce metody.",
      "finally slouží k vyhození nové výjimky místo catch.",
      "finally se používá k definici vlastních výjimek.",
      "finally se používá k úklidu zdrojů, např. zavření souboru nebo socketu."
    ],
    "correctOption": 3
  },
  {
    "id": 87,
    "category": "exceptions",
    "type": "trap",
    "difficulty": "medium",
    "question": "Lze zabránit vyvolání RuntimeException?",
    "answer": "Částečně ano, správným návrhem a validací: kontrola null, kontrola indexů, kontrola vstupů, správný stav objektu. RuntimeException lze i zachytit pomocí try-catch, ale hlavní řešení je psát korektní kód.",
    "keywords": [
      "RuntimeException",
      "validace",
      "null",
      "prevence"
    ],
    "options": [
      "Lze jim předcházet validací vstupů, null, indexů a stavu programu.",
      "RuntimeException nelze nikdy zachytit přes try-catch.",
      "RuntimeException se musí vždy povinně deklarovat pomocí throws.",
      "RuntimeException vzniká pouze při chybě JVM, ne v programu."
    ],
    "correctOption": 0
  },
  {
    "id": 88,
    "category": "exceptions",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi checked a unchecked výjimkou?",
    "answer": "Checked exception musí být ošetřena nebo deklarována pomocí throws. Unchecked exception (RuntimeException) se ošetřovat nemusí.",
    "keywords": [
      "checked",
      "unchecked",
      "throws",
      "rozdíl"
    ],
    "options": [
      "Checked musíš ošetřit/deklarovat; unchecked (RuntimeException) nemusíš",
      "Unchecked musíš ošetřit; checked nemusíš",
      "Obě se musí vždy ošetřit try-catch",
      "Žádná se nemusí ošetřovat"
    ],
    "correctOption": 0
  },
  {
    "id": 89,
    "category": "exceptions",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Error?",
    "answer": "Error označuje vážný problém běhového prostředí, například OutOfMemoryError nebo StackOverflowError. Obvykle se nezachytává.",
    "keywords": [
      "Error",
      "OutOfMemoryError",
      "StackOverflowError"
    ],
    "options": [
      "Error je vážný problém běhového prostředí, obvykle se nezachytává.",
      "Error vzniká pouze při syntaktické chybě při kompilaci.",
      "Error je běžná checked výjimka, kterou musíš vždy ošetřit.",
      "Error je jen jiný název pro RuntimeException."
    ],
    "correctOption": 0
  },
  {
    "id": 90,
    "category": "enum",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se definuje výčtový typ v Javě?",
    "answer": "Pomocí klíčového slova enum a seznamu pojmenovaných hodnot.",
    "keywords": [
      "enum",
      "výčtový typ",
      "definice"
    ],
    "codeExample": "enum Color {\n    RED, GREEN, BLUE\n}",
    "options": [
      "Enum se v Javě vytváří jen pomocí public static final int.",
      "Výčtový typ se definuje klíčovým slovem enum a seznamem hodnot.",
      "Enum je speciální pole Stringů bez vlastního typu.",
      "Výčtový typ se definuje přes class enum extends int."
    ],
    "correctOption": 1
  },
  {
    "id": 91,
    "category": "enum",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jsou výčtové typy v Javě typově bezpečné?",
    "answer": "Ano. enum je typově bezpečný. Proměnná typu Color může obsahovat jen hodnoty definované v Color, případně null.",
    "keywords": [
      "enum",
      "typová bezpečnost",
      "null"
    ],
    "options": [
      "Enum může obsahovat libovolný String bez omezení.",
      "Ano, enum je typově bezpečný a dovolí jen své hodnoty nebo null.",
      "Ne, enum je jen int konstanta bez typové kontroly.",
      "Enum je vždy primitivní typ, proto nemůže být null."
    ],
    "correctOption": 1
  },
  {
    "id": 92,
    "category": "enum",
    "type": "trap",
    "difficulty": "easy",
    "question": "Může mít referenční proměnná výčtového typu hodnotu null?",
    "answer": "Ano. Enum je referenční typ, takže proměnná může být null.",
    "keywords": [
      "enum",
      "null",
      "referenční typ"
    ],
    "codeExample": "Color c = null;",
    "options": [
      "Ano, enum je referenční typ, takže proměnná může být null.",
      "Ne, výčtová proměnná musí vždy obsahovat první hodnotu enumu.",
      "Ano, ale jen pokud enum dědí z Object ručně.",
      "Ne, enum je primitivní typ a null mít nemůže."
    ],
    "correctOption": 0
  },
  {
    "id": 93,
    "category": "enum",
    "type": "theory",
    "difficulty": "easy",
    "question": "Proč je enum lepší než konstanty typu int?",
    "answer": "Protože je typově bezpečný, přehlednější a omezuje možné hodnoty (proměnná může nabývat jen definovaných hodnot).",
    "keywords": [
      "enum",
      "typová bezpečnost",
      "int konstanty"
    ],
    "options": [
      "Je typově bezpečný, přehledný a omezuje množinu povolených hodnot",
      "Je rychlejší při výpočtech než int",
      "Zabírá méně paměti než int",
      "Umožňuje libovolnou číselnou hodnotu"
    ],
    "correctOption": 0
  },
  {
    "id": 94,
    "category": "generics",
    "type": "code",
    "difficulty": "medium",
    "question": "Co jsou generické typy?",
    "answer": "Generické typy umožňují psát třídy a metody nezávislé na konkrétním typu (typový parametr T se dosadí při použití).",
    "keywords": [
      "generika",
      "typový parametr",
      "generické typy"
    ],
    "codeExample": "class Box<T> {\n    private T value;\n}",
    "options": [
      "Generický typ je vždy abstraktní třída bez metod.",
      "Generické typy jsou kolekce, které přijímají pouze int.",
      "Generika slouží jen ke zrychlení běhu JVM, ne k typové bezpečnosti.",
      "Generické typy používají typový parametr a nejsou pevně vázané na jeden typ."
    ],
    "correctOption": 3
  },
  {
    "id": 95,
    "category": "generics",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu slouží genericita?",
    "answer": "K typové bezpečnosti a znovupoužitelnosti kódu. Díky generikám kompilátor hlídá, že v seznamu jsou jen prvky daného typu.",
    "keywords": [
      "genericita",
      "typová bezpečnost",
      "znovupoužitelnost"
    ],
    "codeExample": "List<String> names = new ArrayList<>();",
    "options": [
      "Genericita dovoluje ukládat do kolekce libovolné typy bez kontroly.",
      "Genericita slouží k překladu Javy do nativního kódu.",
      "Genericita je způsob synchronizace vláken.",
      "Genericita zajišťuje typovou bezpečnost a znovupoužitelnost kódu."
    ],
    "correctOption": 3
  },
  {
    "id": 96,
    "category": "generics",
    "type": "trap",
    "difficulty": "medium",
    "question": "Mohou generika v Javě používat primitivní typy?",
    "answer": "Ne přímo. Místo primitivních typů se používají jejich obalové (wrapper) třídy. Špatně: List<int>. Správně: List<Integer>.",
    "keywords": [
      "generika",
      "primitivní typy",
      "wrapper",
      "Integer"
    ],
    "commonMistakes": "List<int> neexistuje – musíš použít List<Integer> (wrapper třídu).",
    "codeExample": "// Špatně:\nList<int> a;\n// Správně:\nList<Integer> b;",
    "options": [
      "Ne, generika mohou používat pouze String.",
      "Ne přímo; používají se wrapper třídy, např. List<Integer> místo List<int>.",
      "Ano, List<int> je běžný zápis generik s primitivy.",
      "Ano, ale jen pro int a boolean, ne pro double."
    ],
    "correctOption": 1
  },
  {
    "id": 97,
    "category": "generics",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Java Collections Framework?",
    "answer": "JCF je sada rozhraní a tříd pro práci s kolekcemi dat. Obsahuje například: Collection, List, Set, Queue, Map, ArrayList, LinkedList, HashSet, TreeSet, HashMap.",
    "keywords": [
      "JCF",
      "Collections Framework",
      "List",
      "Set",
      "Map"
    ],
    "options": [
      "JCF je nástroj pro kompilaci zdrojových souborů.",
      "JCF je garbage collector pro kolekce.",
      "JCF je pouze třída ArrayList.",
      "JCF je sada rozhraní a tříd pro kolekce, např. List, Set, Map."
    ],
    "correctOption": 3
  },
  {
    "id": 98,
    "category": "generics",
    "type": "trap",
    "difficulty": "medium",
    "question": "Je Map kolekce?",
    "answer": "Formálně Map NENÍ potomkem Collection, ale patří do Java Collections Framework.",
    "keywords": [
      "Map",
      "Collection",
      "JCF"
    ],
    "commonMistakes": "Map nedědí z Collection, přestože je součástí Collections Frameworku.",
    "options": [
      "Map je přímý potomek Collection stejně jako List.",
      "Map nepatří do Java Collections Framework.",
      "Map není potomkem Collection, ale patří do Java Collections Framework.",
      "Map je pouze speciální druh Setu bez klíčů."
    ],
    "correctOption": 2
  },
  {
    "id": 99,
    "category": "generics",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jaký je rozdíl mezi List a Set?",
    "answer": "List je uspořádaná posloupnost, dovoluje duplicity a umožňuje přístup přes index. Set je množina, nedovoluje duplicity a obecně neposkytuje přístup přes index.",
    "keywords": [
      "List",
      "Set",
      "duplicity",
      "index"
    ],
    "options": [
      "List = pořadí + duplicity + index; Set = množina bez duplicit, bez indexu",
      "List = bez duplicit; Set = s duplicitami",
      "Oba dovolují přístup přes index",
      "List i Set zakazují duplicity"
    ],
    "correctOption": 0
  },
  {
    "id": 100,
    "category": "generics",
    "type": "trap",
    "difficulty": "medium",
    "question": "Zachovává Set pořadí vkládání?",
    "answer": "Obecně ne, záleží na implementaci. HashSet nezaručuje pořadí, LinkedHashSet zachovává pořadí vložení, TreeSet řadí podle porovnání.",
    "keywords": [
      "Set",
      "pořadí",
      "HashSet",
      "LinkedHashSet",
      "TreeSet"
    ],
    "commonMistakes": "HashSet pořadí NEzaručuje. Pro pořadí vložení použij LinkedHashSet.",
    "codeExample": "HashSet        nezaručuje pořadí\nLinkedHashSet  zachovává pořadí vložení\nTreeSet        řadí podle porovnání",
    "options": [
      "Obecně ne; HashSet pořadí negarantuje, LinkedHashSet ano, TreeSet řadí.",
      "Ne, žádná implementace Setu nikdy neumí pořadí zachovat.",
      "Set pořadí zachovává jen pokud obsahuje primitivní typy.",
      "Ano, každý Set vždy zachovává pořadí vložení."
    ],
    "correctOption": 0
  },
  {
    "id": 101,
    "category": "generics",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké jsou běžné implementace List?",
    "answer": "ArrayList a LinkedList.",
    "keywords": [
      "List",
      "ArrayList",
      "LinkedList"
    ],
    "options": [
      "Běžné implementace List jsou HashSet a TreeSet.",
      "Běžné implementace List jsou HashMap a Hashtable.",
      "Běžné implementace List jsou ArrayList a LinkedList.",
      "List nemá žádné implementace, je vždy konkrétní třída."
    ],
    "correctOption": 2
  },
  {
    "id": 102,
    "category": "generics",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké jsou běžné implementace Set?",
    "answer": "HashSet, LinkedHashSet a TreeSet.",
    "keywords": [
      "Set",
      "HashSet",
      "LinkedHashSet",
      "TreeSet"
    ],
    "options": [
      "Set se v Javě implementuje pouze přes pole.",
      "Běžné implementace Set jsou HashMap a TreeMap.",
      "Běžné implementace Set jsou ArrayList a LinkedList.",
      "Běžné implementace Set jsou HashSet, LinkedHashSet a TreeSet."
    ],
    "correctOption": 3
  },
  {
    "id": 103,
    "category": "generics",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je iterátor?",
    "answer": "Iterátor je objekt pro postupné procházení kolekce (metody hasNext() a next()).",
    "keywords": [
      "iterátor",
      "Iterator",
      "hasNext",
      "next"
    ],
    "codeExample": "Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String item = it.next();\n}",
    "options": [
      "Iterátor postupně prochází kolekci přes hasNext() a next().",
      "Iterátor je kolekce ukládající klíče a hodnoty.",
      "Iterátor automaticky řadí prvky podle priority.",
      "Iterátor slouží pouze k mazání souborů po bajtech."
    ],
    "correctOption": 0
  },
  {
    "id": 104,
    "category": "generics",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu slouží rozhraní pro přístup ke kolekcím?",
    "answer": "Umožňují programovat proti obecnému typu (rozhraní), ne proti konkrétní implementaci. To zvyšuje flexibilitu kódu.",
    "keywords": [
      "rozhraní",
      "abstrakce",
      "program to interface"
    ],
    "codeExample": "// Lepší:\nList<String> list = new ArrayList<>();\n// Méně vhodné:\nArrayList<String> list2 = new ArrayList<>();",
    "options": [
      "Zajišťují, že každá kolekce bude synchronizovaná.",
      "Umožňují programovat proti rozhraní místo konkrétní implementace.",
      "Slouží výhradně ke zrychlení HashMap.",
      "Nahrazují potřebu generických typů a typové kontroly."
    ],
    "correctOption": 1
  },
  {
    "id": 105,
    "category": "generics",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Collection<E>?",
    "answer": "Základní rozhraní pro skupinu prvků. Je předkem například pro List, Set a Queue.",
    "keywords": [
      "Collection",
      "rozhraní",
      "List",
      "Set",
      "Queue"
    ],
    "options": [
      "Collection<E> je základní rozhraní pro skupinu prvků, předek List/Set/Queue.",
      "Collection<E> je třída pro připojení k databázi.",
      "Collection<E> je konkrétní implementace hash tabulky.",
      "Collection<E> je předek Map i všech výjimek."
    ],
    "correctOption": 0
  },
  {
    "id": 106,
    "category": "generics",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je Map<K,V>?",
    "answer": "Mapa ukládá dvojice klíč–hodnota (key–value).",
    "keywords": [
      "Map",
      "klíč",
      "hodnota",
      "key-value"
    ],
    "codeExample": "Map<String, Integer> ages = new HashMap<>();",
    "options": [
      "Map<K,V> je fronta zpracovaná metodou poll().",
      "Map<K,V> ukládá dvojice klíč–hodnota.",
      "Map<K,V> je seznam prvků s indexy od nuly.",
      "Map<K,V> je množina bez duplicitních hodnot."
    ],
    "correctOption": 1
  },
  {
    "id": 107,
    "category": "generics",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je hashovací funkce?",
    "answer": "Hashovací funkce převádí vstup na hodnotu pevné délky. Stejný vstup má dát stejný hash. Používá se např. v HashMap, HashSet, hashování hesel a indexaci dat.",
    "keywords": [
      "hashovací funkce",
      "hash",
      "pevná délka"
    ],
    "options": [
      "Hashovací funkce převádí vstup na hash hodnotu pevné délky.",
      "Hashovací funkce slouží k uzamčení monitoru objektu.",
      "Hashovací funkce vždy jednoznačně zabrání všem kolizím.",
      "Hashovací funkce převádí objekt na text přes toString()."
    ],
    "correctOption": 0
  },
  {
    "id": 108,
    "category": "generics",
    "type": "theory",
    "difficulty": "medium",
    "question": "Proč vznikají kolize při hashování?",
    "answer": "Protože množina možných vstupů je větší než množina možných hashů. Různé vstupy tedy mohou mít stejný hash.",
    "keywords": [
      "kolize",
      "hash",
      "vstupy"
    ],
    "options": [
      "Kolize vznikají, protože různých vstupů je víc než možných hashů.",
      "Kolize vzniká, když dva objekty nejsou stejné podle equals().",
      "Kolize v hash tabulkách nemohou nastat.",
      "Kolize vznikají jen tehdy, když hashCode není přepsán vůbec."
    ],
    "correctOption": 0
  },
  {
    "id": 109,
    "category": "generics",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak se řeší kolize v hash tabulkách?",
    "answer": "Typicky: řetězení pomocí seznamu/bucketu, otevřené adresování, lepší hashovací funkce, zvětšení tabulky.",
    "keywords": [
      "kolize",
      "řetězení",
      "otevřené adresování",
      "bucket"
    ],
    "options": [
      "Kolize se v Javě neřeší, HashMap při ní přestane fungovat.",
      "Kolize se řeší pouze seřazením celé tabulky podle klíčů.",
      "Kolize se řeší vyhozením všech prvků se stejným hashem.",
      "Kolize se řeší např. řetězením, otevřeným adresováním nebo zvětšením tabulky."
    ],
    "correctOption": 3
  },
  {
    "id": 110,
    "category": "io",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaký je rozdíl mezi binárním a textovým souborem?",
    "answer": "Textový soubor obsahuje znaky v určitém kódování. Binární soubor obsahuje bajty, které je nutné interpretovat podle formátu.",
    "keywords": [
      "binární soubor",
      "textový soubor",
      "kódování",
      "bajty"
    ],
    "options": [
      "Textový = znaky v kódování; binární = bajty interpretované dle formátu",
      "Textový = bajty; binární = znaky",
      "Není mezi nimi rozdíl",
      "Textový lze číst jen sekvenčně, binární jen přímo"
    ],
    "correctOption": 0
  },
  {
    "id": 111,
    "category": "io",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se zpracovává textový soubor?",
    "answer": "Typicky znakově nebo po řádcích, např. pomocí BufferedReader a FileReader.",
    "keywords": [
      "textový soubor",
      "BufferedReader",
      "FileReader",
      "řádky"
    ],
    "codeExample": "BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"));",
    "options": [
      "Textový soubor se musí vždy načíst celý najednou do pole byte[].",
      "Textový soubor lze v Javě zpracovat jen přes ObjectInputStream.",
      "Textový soubor se čte výhradně po bajtech bez kódování.",
      "Textový soubor se typicky čte znakově nebo po řádcích, např. BufferedReaderem."
    ],
    "correctOption": 3
  },
  {
    "id": 112,
    "category": "io",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak se zpracovává binární soubor?",
    "answer": "Typicky po bajtech, např. pomocí FileInputStream.",
    "keywords": [
      "binární soubor",
      "FileInputStream",
      "bajty"
    ],
    "codeExample": "FileInputStream input = new FileInputStream(\"file.bin\");",
    "options": [
      "Binární soubor se typicky zpracovává po bajtech, např. FileInputStreamem.",
      "Binární soubor obsahuje pouze znaky UTF-8.",
      "Binární soubor se čte vždy po řádcích přes BufferedReader.",
      "Binární soubor se v Javě nedá číst."
    ],
    "correctOption": 0
  },
  {
    "id": 113,
    "category": "io",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi přímým a sekvenčním přístupem k souboru?",
    "answer": "Sekvenční přístup čte data od začátku postupně. Přímý přístup umožňuje skočit na konkrétní pozici v souboru (např. pomocí seek).",
    "keywords": [
      "sekvenční přístup",
      "přímý přístup",
      "seek"
    ],
    "options": [
      "Přímý a sekvenční přístup jsou totéž.",
      "Přímý čte od začátku, sekvenční používá seek.",
      "Sekvenční čte postupně; přímý přístup umí skočit na konkrétní pozici.",
      "Sekvenční přístup existuje jen pro binární soubory."
    ],
    "correctOption": 2
  },
  {
    "id": 114,
    "category": "io",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak přistupujeme k datovým záznamům při nepřímém vyhledávání?",
    "answer": "Sekvenčně procházíme záznamy a hledáme požadovaný záznam (čteme řádek po řádku, dokud nenajdeme hledaný záznam).",
    "keywords": [
      "nepřímé vyhledávání",
      "sekvenční procházení",
      "záznamy"
    ],
    "options": [
      "Nepřímé vyhledávání znamená, že soubor vůbec nečteme.",
      "Při nepřímém vyhledávání záznamy sekvenčně procházíme, dokud nenajdeme cíl.",
      "Při nepřímém vyhledávání vždy skočíme přímo na známý offset.",
      "Nepřímé vyhledávání je výhradně síťová operace přes socket."
    ],
    "correctOption": 1
  },
  {
    "id": 115,
    "category": "io",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je trojvrstevná struktura proudů?",
    "answer": "Proudy lze vrstvit: základní proud pro bajty/znaky, proud pro datové typy nebo objekty, a filtrační proud (např. bufferování).",
    "keywords": [
      "vrstvení proudů",
      "filtrační proud",
      "buffer"
    ],
    "codeExample": "new BufferedInputStream(new FileInputStream(\"file.bin\"));",
    "options": [
      "Trojvrstevná struktura znamená tři nezávislá vlákna pro soubor.",
      "Proudy se vrství: základní proud, datový/objektový proud, filtrační/bufferovaný proud.",
      "Trojvrstevná struktura je dělení na heap, stack a registry.",
      "Proudy v Javě nelze skládat do vrstev."
    ],
    "correctOption": 1
  },
  {
    "id": 116,
    "category": "io",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké jsou bytové proudy?",
    "answer": "Příklady: FileInputStream, FileOutputStream, BufferedInputStream, BufferedOutputStream, DataInputStream, DataOutputStream, ObjectInputStream, ObjectOutputStream.",
    "keywords": [
      "bytové proudy",
      "InputStream",
      "OutputStream"
    ],
    "options": [
      "Bytové proudy pracují pouze s Unicode znaky, ne s bajty.",
      "Bytové proudy jsou např. FileReader a BufferedWriter.",
      "Bytové proudy jsou např. FileInputStream, BufferedInputStream, ObjectInputStream.",
      "Bytový proud je každá kolekce typu List<Byte>."
    ],
    "correctOption": 2
  },
  {
    "id": 117,
    "category": "io",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké jsou znakové proudy?",
    "answer": "Příklady: FileReader, FileWriter, BufferedReader, BufferedWriter.",
    "keywords": [
      "znakové proudy",
      "Reader",
      "Writer"
    ],
    "options": [
      "Znakový proud je každá instance StringBuilderu.",
      "Znakové proudy jsou FileInputStream a FileOutputStream.",
      "Znakové proudy jsou např. FileReader, FileWriter, BufferedReader, BufferedWriter.",
      "Znakové proudy pracují jen s objekty přes Serializable."
    ],
    "correctOption": 2
  },
  {
    "id": 118,
    "category": "io",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak realizujeme serializaci v Javě?",
    "answer": "Třída implementuje rozhraní Serializable. Objekt se zapíše přes ObjectOutputStream metodou writeObject().",
    "keywords": [
      "serializace",
      "Serializable",
      "ObjectOutputStream",
      "writeObject"
    ],
    "codeExample": "class Person implements Serializable {\n}\n\nObjectOutputStream out =\n    new ObjectOutputStream(new FileOutputStream(\"data.bin\"));\nout.writeObject(person);",
    "options": [
      "Třída implementuje Serializable a objekt se ukládá přes ObjectOutputStream.writeObject().",
      "Serializace se provádí pouze metodou toString().",
      "Serializace znamená převod .java na .class.",
      "Serializace vyžaduje, aby třída dědila z Thread."
    ],
    "correctOption": 0
  },
  {
    "id": 119,
    "category": "io",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak Java reaguje na ztrátu reference?",
    "answer": "Pokud na objekt nevede žádná dosažitelná reference, může být odstraněn garbage collectorem.",
    "keywords": [
      "ztráta reference",
      "garbage collector",
      "dosažitelnost"
    ],
    "options": [
      "Při ztrátě reference se objekt smaže okamžitě deterministicky.",
      "Ztráta reference vyvolá vždy checked výjimku.",
      "Když objekt není dosažitelný žádnou referencí, může ho odstranit GC.",
      "Ztracený objekt zůstává v paměti navždy, GC ho nikdy neřeší."
    ],
    "correctOption": 2
  },
  {
    "id": 120,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké jsou tři základní prvky GUI?",
    "answer": "Komponenty, kontejnery a layout managery.",
    "keywords": [
      "GUI",
      "komponenty",
      "kontejnery",
      "layout"
    ],
    "options": [
      "Komponenty, kontejnery, layout managery",
      "Model, View, Controller",
      "Okna, tlačítka, menu",
      "Vlákna, události, posluchače"
    ],
    "correctOption": 0
  },
  {
    "id": 121,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou komponenty v GUI?",
    "answer": "Komponenty jsou grafické prvky, například JLabel, JButton, JTextField, JPasswordField, JList, JComboBox, JCheckBox, JRadioButton, JProgressBar.",
    "keywords": [
      "komponenty",
      "JButton",
      "JLabel",
      "JTextField"
    ],
    "options": [
      "Komponenty jsou pouze layout managery.",
      "Komponenty jsou grafické prvky jako JButton, JLabel, JTextField.",
      "Komponenty jsou jen okna JFrame a JDialog.",
      "Komponenty jsou vlákna zpracovávající události."
    ],
    "correctOption": 1
  },
  {
    "id": 122,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou kontejnery ve Swing?",
    "answer": "Kontejnery obsahují komponenty. Příklady: JFrame, JDialog, JPanel.",
    "keywords": [
      "kontejnery",
      "JFrame",
      "JDialog",
      "JPanel"
    ],
    "options": [
      "Kontejnery jsou výjimky pro GUI chyby.",
      "Kontejnery slouží ke kompilaci Java souborů.",
      "Kontejnery obsahují komponenty, např. JFrame, JDialog, JPanel.",
      "Kontejnery jsou jen tlačítka a textová pole."
    ],
    "correctOption": 2
  },
  {
    "id": 123,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co jsou layout managery?",
    "answer": "Layout manager určuje rozmístění komponent v kontejneru. Příklady: BorderLayout, FlowLayout, GridLayout, BoxLayout, GridBagLayout.",
    "keywords": [
      "layout manager",
      "BorderLayout",
      "FlowLayout",
      "GridLayout"
    ],
    "options": [
      "Layout manager spouští hlavní metodu main.",
      "Layout manager je listener pro kliknutí myší.",
      "Layout manager určuje rozmístění komponent v kontejneru.",
      "Layout manager je kolekce pro ukládání komponent podle klíče."
    ],
    "correctOption": 2
  },
  {
    "id": 124,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je modální dialogové okno?",
    "answer": "Modální dialog blokuje interakci s nadřazeným oknem, dokud není dialog uzavřen.",
    "keywords": [
      "modální dialog",
      "blokování",
      "okno"
    ],
    "options": [
      "Modální dialog je listener pro klávesnici.",
      "Modální dialog je vždy hlavní JFrame aplikace.",
      "Modální dialog nikdy neblokuje rodičovské okno.",
      "Modální dialog blokuje nadřazené okno, dokud není zavřen."
    ],
    "correctOption": 3
  },
  {
    "id": 125,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je MVC?",
    "answer": "MVC (Model-View-Controller) rozděluje aplikaci na Model, View a Controller.",
    "keywords": [
      "MVC",
      "Model",
      "View",
      "Controller"
    ],
    "options": [
      "MVC je nástroj pro garbage collection GUI.",
      "MVC dělí aplikaci na Model, View a Controller.",
      "MVC dělí aplikaci na Memory, Variable a Class.",
      "MVC je typ socketového protokolu."
    ],
    "correctOption": 1
  },
  {
    "id": 126,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Model v MVC?",
    "answer": "Model obsahuje data a aplikační logiku.",
    "keywords": [
      "MVC",
      "Model",
      "data",
      "logika"
    ],
    "options": [
      "Model je layout manager okna.",
      "Model zobrazuje komponenty uživateli.",
      "Model obsahuje data a aplikační logiku.",
      "Model přímo zpracovává kliknutí jako listener."
    ],
    "correctOption": 2
  },
  {
    "id": 127,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je View v MVC?",
    "answer": "View zobrazuje data uživateli.",
    "keywords": [
      "MVC",
      "View",
      "zobrazení"
    ],
    "options": [
      "View je síťový protokol pro GUI.",
      "View ukládá data a business logiku.",
      "View je synchronizační monitor vlákna.",
      "View zobrazuje data uživateli."
    ],
    "correctOption": 3
  },
  {
    "id": 128,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Controller v MVC?",
    "answer": "Controller zpracovává vstupy uživatele a mění model nebo view.",
    "keywords": [
      "MVC",
      "Controller",
      "vstupy"
    ],
    "options": [
      "Controller je grafický prvek pro kreslení tlačítek.",
      "Controller drží výhradně data aplikace bez vstupů.",
      "Controller zpracovává vstupy uživatele a mění model nebo view.",
      "Controller slouží ke kompilaci Swing aplikace."
    ],
    "correctOption": 2
  },
  {
    "id": 129,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké jsou výhody MVC?",
    "answer": "Oddělení dat, zobrazení a řízení; lepší údržba; možnost více pohledů nad jedním modelem; menší provázanost částí aplikace.",
    "keywords": [
      "MVC",
      "výhody",
      "oddělení",
      "údržba"
    ],
    "options": [
      "MVC odděluje data, zobrazení a řízení, což zlepšuje údržbu.",
      "MVC zakazuje mít více pohledů nad jedním modelem.",
      "MVC se používá jen pro síťové sockety, ne pro GUI.",
      "MVC znamená sloučit všechna data i GUI do jedné třídy."
    ],
    "correctOption": 0
  },
  {
    "id": 130,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je událostmi řízené programování?",
    "answer": "Program nereaguje jen sekvenčně shora dolů, ale čeká na události. Příklady událostí: kliknutí na tlačítko, stisk klávesy, pohyb myši, zavření okna.",
    "keywords": [
      "událostmi řízené",
      "event-driven",
      "události"
    ],
    "options": [
      "Program čeká na události a podle nich spouští obslužný kód.",
      "Program vždy běží jen shora dolů bez čekání na vstupy.",
      "Události v GUI se zpracovávají výhradně v konstruktoru.",
      "Událostmi řízené programování znamená jen použití více vláken."
    ],
    "correctOption": 0
  },
  {
    "id": 131,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi sekvenčním a událostmi řízeným programováním?",
    "answer": "Sekvenční program se vykonává postupně podle pořadí příkazů. Událostmi řízený program čeká na události a podle nich spouští obslužný kód.",
    "keywords": [
      "sekvenční",
      "událostmi řízené",
      "rozdíl"
    ],
    "options": [
      "Sekvenční = příkazy po pořadí; událostmi řízené = čeká na události",
      "Sekvenční = čeká na události; událostmi řízené = příkazy po pořadí",
      "Jsou to dva názvy pro totéž",
      "Sekvenční běží jen ve více vláknech"
    ],
    "correctOption": 0
  },
  {
    "id": 132,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je event queue?",
    "answer": "Event queue je fronta událostí. Události se do ní ukládají a postupně zpracovávají.",
    "keywords": [
      "event queue",
      "fronta událostí"
    ],
    "options": [
      "Event queue je zásobník objektů ukládaných LIFO.",
      "Event queue je fronta síťových paketů TCP.",
      "Event queue je fronta událostí zpracovávaných postupně.",
      "Event queue je seznam všech tříd v balíku."
    ],
    "correctOption": 2
  },
  {
    "id": 133,
    "category": "gui",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je listener?",
    "answer": "Listener je objekt, který reaguje na určitou událost.",
    "keywords": [
      "listener",
      "posluchač",
      "událost"
    ],
    "codeExample": "button.addActionListener(listener);",
    "options": [
      "Listener je objekt reagující na určitou událost.",
      "Listener je layout manager pro rozmístění komponent.",
      "Listener je výjimka vzniklá při kliknutí myší.",
      "Listener je speciální kolekce bez duplicit."
    ],
    "correctOption": 0
  },
  {
    "id": 134,
    "category": "gui",
    "type": "code",
    "difficulty": "easy",
    "question": "Jak předepíšeme obsluhu stisknutí tlačítka?",
    "answer": "Přidáním ActionListeneru přes addActionListener — buď anonymní třídou, nebo lambdou.",
    "keywords": [
      "ActionListener",
      "addActionListener",
      "lambda",
      "tlačítko"
    ],
    "codeExample": "button.addActionListener(new ActionListener() {\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(\"Clicked\");\n    }\n});\n\n// Nebo lambda:\nbutton.addActionListener(e -> System.out.println(\"Clicked\"));",
    "options": [
      "Obsluha tlačítka se přidá přes addActionListener, anonymní třídou nebo lambdou.",
      "ActionListener slouží k nastavení layoutu komponent.",
      "Obsluha tlačítka se píše výhradně do metody main bez listeneru.",
      "Kliknutí se zachytává pouze přes WindowListener."
    ],
    "correctOption": 0
  },
  {
    "id": 135,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte typy událostí ve Swing aplikaci?",
    "answer": "ActionEvent, MouseEvent, KeyEvent, WindowEvent, MouseWheelEvent.",
    "keywords": [
      "ActionEvent",
      "MouseEvent",
      "KeyEvent",
      "WindowEvent"
    ],
    "options": [
      "Např. ActionEvent, MouseEvent, KeyEvent, WindowEvent a MouseWheelEvent.",
      "Např. IOException, RuntimeException a Error.",
      "Např. ThreadEvent, SocketEvent a GCEvent jako základ Swingu.",
      "Např. HashEvent, ListEvent a MapEvent."
    ],
    "correctOption": 0
  },
  {
    "id": 136,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co charakterizuje ActionEvent?",
    "answer": "Vzniká například při kliknutí na tlačítko nebo výběru položky.",
    "keywords": [
      "ActionEvent",
      "kliknutí",
      "tlačítko"
    ],
    "options": [
      "ActionEvent označuje garbage collection v GUI vlákně.",
      "ActionEvent vzniká výhradně při zavření okna.",
      "ActionEvent reprezentuje pohyb myši po komponentě.",
      "ActionEvent vzniká např. kliknutím na tlačítko nebo výběrem položky."
    ],
    "correctOption": 3
  },
  {
    "id": 137,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co charakterizuje MouseEvent?",
    "answer": "Události myši: kliknutí, pohyb, stisk, uvolnění, vstup/opuštění komponenty.",
    "keywords": [
      "MouseEvent",
      "myš",
      "kliknutí",
      "pohyb"
    ],
    "options": [
      "MouseEvent vzniká při výběru položky v menu přes klávesnici.",
      "MouseEvent popisuje události myši: kliknutí, pohyb, stisk, uvolnění.",
      "MouseEvent slouží k zavření síťového socketu.",
      "MouseEvent je objekt pro ukládání textového řetězce."
    ],
    "correctOption": 1
  },
  {
    "id": 138,
    "category": "gui",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co charakterizuje WindowEvent?",
    "answer": "Události okna: otevření, zavření, aktivace, deaktivace, minimalizace.",
    "keywords": [
      "WindowEvent",
      "okno",
      "zavření",
      "aktivace"
    ],
    "options": [
      "WindowEvent je layout manager pro JFrame.",
      "WindowEvent reprezentuje kliknutí na běžné JButton.",
      "WindowEvent popisuje otevření, zavření, aktivaci či deaktivaci okna.",
      "WindowEvent je výjimka při práci se soubory."
    ],
    "correctOption": 2
  },
  {
    "id": 139,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Proč se dlouhý výpočet nemá spouštět přímo v GUI vlákně?",
    "answer": "Protože zablokuje překreslování a reakce GUI. Aplikace přestane být interaktivní (zamrzne).",
    "keywords": [
      "EDT",
      "GUI vlákno",
      "blokování",
      "responzivita"
    ],
    "options": [
      "Zablokuje překreslování a reakce GUI – aplikace zamrzne",
      "Zrychlí to výpočet díky prioritě GUI vlákna",
      "Nic se nestane, GUI vlákno zvládne vše",
      "Způsobí to deadlock garbage collectoru"
    ],
    "correctOption": 0
  },
  {
    "id": 140,
    "category": "gui",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je SwingWorker?",
    "answer": "SwingWorker slouží ke spuštění dlouhé práce na pozadí a bezpečné aktualizaci Swing GUI. Důležité metody: doInBackground(), process(), done(), publish().",
    "keywords": [
      "SwingWorker",
      "pozadí",
      "doInBackground",
      "EDT"
    ],
    "options": [
      "SwingWorker je layout manager pro rozmístění tlačítek.",
      "SwingWorker nahrazuje model v MVC.",
      "SwingWorker spouští dlouhou práci na pozadí a bezpečně aktualizuje GUI.",
      "SwingWorker je třída pro čtení binárních souborů."
    ],
    "correctOption": 2
  },
  {
    "id": 141,
    "category": "threads",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je proces?",
    "answer": "Proces je spuštěný program s vlastním paměťovým prostorem, který plánuje operační systém.",
    "keywords": [
      "proces",
      "paměťový prostor",
      "OS"
    ],
    "options": [
      "Proces je spuštěný program s vlastním paměťovým prostorem.",
      "Proces je objekt vytvořený operátorem new.",
      "Proces je kritická sekce uvnitř synchronized bloku.",
      "Proces je pouze jedno vlákno sdílející paměť s jinými procesy."
    ],
    "correctOption": 0
  },
  {
    "id": 142,
    "category": "threads",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je vlákno?",
    "answer": "Vlákno je jednotka běhu uvnitř procesu. Vlákna stejného procesu sdílejí paměť.",
    "keywords": [
      "vlákno",
      "thread",
      "sdílená paměť"
    ],
    "options": [
      "Vlákno je datová struktura typu fronta.",
      "Vlákno je vždy fyzické CPU jádro.",
      "Vlákno je samostatný program s vlastním adresním prostorem jako proces.",
      "Vlákno je jednotka běhu uvnitř procesu; vlákna sdílejí paměť procesu."
    ],
    "correctOption": 3
  },
  {
    "id": 143,
    "category": "threads",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jaký je rozdíl mezi procesem a vláknem?",
    "answer": "Proces má vlastní paměťový prostor. Vlákna běží uvnitř procesu a sdílejí jeho paměť.",
    "keywords": [
      "proces",
      "vlákno",
      "paměť",
      "rozdíl"
    ],
    "options": [
      "Proces má vlastní paměť; vlákna v procesu sdílejí paměť",
      "Vlákno má vlastní paměť; procesy sdílejí paměť",
      "Proces i vlákno mají vždy oddělenou paměť",
      "Mezi procesem a vláknem není rozdíl"
    ],
    "correctOption": 0
  },
  {
    "id": 144,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Kdy má smysl použít vícevláknovou architekturu?",
    "answer": "Když aplikace má nezávislé úlohy, dlouhé blokující operace, výpočetně náročné části, musí zůstat responzivní, nebo čeká na asynchronní události.",
    "keywords": [
      "vícevláknová architektura",
      "responzivita",
      "paralelismus"
    ],
    "options": [
      "Pouze když běží JVM bez garbage collectoru.",
      "Když jsou úlohy nezávislé, blokující, výpočetně náročné nebo kvůli responzivitě.",
      "Více vláken má smysl jen pro textové soubory.",
      "Když aplikace nemá žádné čekání ani nezávislé části."
    ],
    "correctOption": 1
  },
  {
    "id": 145,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Má smysl paralelizovat program i na jednom procesoru?",
    "answer": "Ano, pokud jde o responzivitu nebo čekání na I/O. OS může přepínat vlákna, takže GUI může reagovat, i když jiné vlákno čeká. Pro čistě výpočetní zrychlení na jednom jádře to většinou smysl nemá.",
    "keywords": [
      "paralelismus",
      "jeden procesor",
      "I/O",
      "responzivita"
    ],
    "options": [
      "Ano kvůli responzivitě/I-O; pro čistý výpočet na jednom jádře obvykle neurychlí.",
      "Ano, protože každé vlákno vytvoří nové CPU jádro.",
      "Ne, na jednom procesoru více vláken nikdy nedává smysl.",
      "Ano, vždy to zrychlí každý výpočet přesně tolikrát, kolik je vláken."
    ],
    "correctOption": 0
  },
  {
    "id": 146,
    "category": "threads",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co je problém souběhu / race condition?",
    "answer": "Race condition nastává, když více vláken přistupuje ke sdíleným datům a alespoň jedno je mění bez správné synchronizace. Výsledek závisí na pořadí běhu vláken.",
    "keywords": [
      "race condition",
      "souběh",
      "synchronizace",
      "sdílená data"
    ],
    "options": [
      "Výsledek závisí na pořadí běhu vláken při nesynchronizovaném přístupu k datům",
      "Vlákna na sebe navzájem čekají a žádné nepokračuje",
      "Vlákno se dlouhodobě nedostane ke zdroji",
      "Vlákno běží příliš rychle a přetíží CPU"
    ],
    "correctOption": 0
  },
  {
    "id": 147,
    "category": "threads",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co je deadlock?",
    "answer": "Deadlock je situace, kdy vlákna čekají navzájem na zdroje, které drží jiné vlákno, a žádné nemůže pokračovat.",
    "keywords": [
      "deadlock",
      "uváznutí",
      "vzájemné čekání"
    ],
    "options": [
      "Deadlock je běžné ukončení vlákna po dokončení práce.",
      "Deadlock je vzájemné čekání vláken na zdroje, takže žádné nepokračuje.",
      "Deadlock je dlouhodobé nedostání se jednoho vlákna ke zdroji.",
      "Deadlock je nesprávný výsledek závislý na pořadí běhu vláken."
    ],
    "correctOption": 1
  },
  {
    "id": 148,
    "category": "threads",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co je starvation?",
    "answer": "Starvation znamená, že vlákno dlouhodobě nedostává přístup ke zdroji nebo CPU, i když by mohlo běžet.",
    "keywords": [
      "starvation",
      "hladovění",
      "přístup ke zdroji"
    ],
    "options": [
      "Starvation je okamžité ukončení procesu při GC.",
      "Starvation je situace, kdy více vláken mění stejnou proměnnou bez zámku.",
      "Starvation je dlouhodobé nedostání se vlákna ke zdroji nebo CPU.",
      "Starvation je stav, kdy všechna vlákna čekají navzájem na zámky."
    ],
    "correctOption": 2
  },
  {
    "id": 149,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké jsou hlavní synchronizační problémy ve vícevláknových aplikacích?",
    "answer": "Race condition, deadlock, starvation, producer-consumer problém, reader-writer problém, lock contention.",
    "keywords": [
      "race condition",
      "deadlock",
      "starvation",
      "lock contention"
    ],
    "options": [
      "Synchronizační problémy neexistují, pokud používáme Java objekty.",
      "Patří sem race condition, deadlock, starvation, producer-consumer a lock contention.",
      "Patří sem pouze syntax errors a checked exceptions.",
      "Hlavní problém je jen nízká rychlost JIT kompilace."
    ],
    "correctOption": 1
  },
  {
    "id": 150,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak se lze vyhnout deadlocku?",
    "answer": "Například: zamykat zdroje vždy ve stejném pořadí, minimalizovat kritické sekce, nečekat při držení zámku, použít timeouty, použít vyšší synchronizační mechanismus.",
    "keywords": [
      "deadlock",
      "pořadí zámků",
      "timeout",
      "prevence"
    ],
    "options": [
      "Deadlocku nelze v Javě nijak předcházet.",
      "Zamykat ve stejném pořadí, minimalizovat kritické sekce, nečekat se zámkem, timeouty.",
      "Deadlock vyřešíme tím, že přidáme více zámků bez pravidel.",
      "Stačí používat pouze RuntimeException místo checked exceptions."
    ],
    "correctOption": 1
  },
  {
    "id": 151,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jak dosáhneme thread-safe funkce?",
    "answer": "Například: nepoužívat sdílený měnitelný stav, použít synchronized, použít immutable objekty, použít atomické proměnné, použít thread-safe kolekce, správně používat zámky.",
    "keywords": [
      "thread-safe",
      "synchronized",
      "immutable",
      "atomické proměnné"
    ],
    "options": [
      "Thread-safe funkce vznikne automaticky při použití ArrayList.",
      "Thread-safe funkce nikdy nesmí vracet hodnotu.",
      "Thread-safe funkce je každá static metoda.",
      "Thread-safe funkce nepoužívá sdílený měnitelný stav nebo ho chrání synchronizací."
    ],
    "correctOption": 3
  },
  {
    "id": 152,
    "category": "threads",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je monitor?",
    "answer": "Monitor je synchronizační mechanismus spojený s objektem. V Javě ho používá klíčové slovo synchronized.",
    "keywords": [
      "monitor",
      "synchronized",
      "zámek"
    ],
    "codeExample": "synchronized (lock) {\n    // kritická sekce\n}",
    "options": [
      "Monitor je grafická komponenta Swingu.",
      "Monitor je synchronizační mechanismus objektu používaný přes synchronized.",
      "Monitor je nástroj pro překlad bytecodu.",
      "Monitor je speciální typ checked výjimky."
    ],
    "correctOption": 1
  },
  {
    "id": 153,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co dělá synchronized?",
    "answer": "Zajišťuje, že daný blok nebo metodu může v jeden čas vykonávat jen jedno vlákno nad daným monitorem.",
    "keywords": [
      "synchronized",
      "monitor",
      "vzájemné vyloučení"
    ],
    "options": [
      "synchronized vždy spustí kód paralelně ve všech vláknech.",
      "synchronized zakáže garbage collection v celém programu.",
      "synchronized pustí do bloku/metody jen jedno vlákno nad daným monitorem.",
      "synchronized slouží k serializaci objektu do souboru."
    ],
    "correctOption": 2
  },
  {
    "id": 154,
    "category": "threads",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je kritická sekce?",
    "answer": "Část kódu, kde se pracuje se sdílenými daty a musí být chráněna před souběžným přístupem.",
    "keywords": [
      "kritická sekce",
      "sdílená data",
      "ochrana"
    ],
    "options": [
      "Kritická sekce je metoda main při startu programu.",
      "Kritická sekce je část kódu se sdílenými daty chráněná před souběhem.",
      "Kritická sekce je část kódu, která vyhazuje checked výjimku.",
      "Kritická sekce je každý blok if/else."
    ],
    "correctOption": 1
  },
  {
    "id": 155,
    "category": "threads",
    "type": "code",
    "difficulty": "easy",
    "question": "Co je Runnable?",
    "answer": "Runnable je funkcionální rozhraní s metodou void run(). Používá se pro kód, který má být spuštěn ve vlákně.",
    "keywords": [
      "Runnable",
      "run",
      "Thread",
      "funkcionální rozhraní"
    ],
    "codeExample": "Runnable r = () -> System.out.println(\"Running\");\nnew Thread(r).start();",
    "options": [
      "Runnable je rozhraní s metodou run(), používané jako úloha pro Thread.",
      "Runnable je třída, která automaticky startuje nové vlákno v konstruktoru.",
      "Runnable je metoda pro uspání aktuálního vlákna.",
      "Runnable je výjimka vzniklá při práci s vlákny."
    ],
    "correctOption": 0
  },
  {
    "id": 156,
    "category": "threads",
    "type": "code",
    "difficulty": "easy",
    "question": "K čemu slouží isAlive()?",
    "answer": "Vrací, zda vlákno stále běží.",
    "keywords": [
      "isAlive",
      "stav vlákna"
    ],
    "codeExample": "thread.isAlive()",
    "options": [
      "isAlive() spustí vlákno znovu od začátku.",
      "isAlive() uspí vlákno na zadaný čas.",
      "isAlive() vrací, zda vlákno stále běží.",
      "isAlive() ukončí aktuální vlákno."
    ],
    "correctOption": 2
  },
  {
    "id": 157,
    "category": "threads",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu slouží join()?",
    "answer": "Aktuální vlákno počká, než jiné vlákno skončí.",
    "keywords": [
      "join",
      "čekání na vlákno"
    ],
    "codeExample": "thread.join();",
    "options": [
      "join() spojí dvě vlákna do jednoho objektu.",
      "join() okamžitě ukončí jiné vlákno.",
      "join() nechá aktuální vlákno počkat na dokončení jiného vlákna.",
      "join() předá zámek monitoru jinému vláknu."
    ],
    "correctOption": 2
  },
  {
    "id": 158,
    "category": "threads",
    "type": "code",
    "difficulty": "easy",
    "question": "K čemu slouží sleep()?",
    "answer": "Uspí aktuální vlákno na danou dobu (v milisekundách).",
    "keywords": [
      "sleep",
      "uspání vlákna"
    ],
    "codeExample": "Thread.sleep(1000);",
    "options": [
      "sleep() uvolní monitor stejně jako wait().",
      "sleep() trvale ukončí vlákno.",
      "sleep() uspí aktuální vlákno na danou dobu.",
      "sleep() uspí vlákno, na kterém je metoda zavolána jako objekt thread.sleep()."
    ],
    "correctOption": 2
  },
  {
    "id": 159,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží yield()?",
    "answer": "Naznačí plánovači, že aktuální vlákno může uvolnit procesor jiným vláknům. Efekt není garantovaný.",
    "keywords": [
      "yield",
      "plánovač",
      "uvolnění CPU"
    ],
    "options": [
      "yield() ukončí aktuální vlákno a vrátí výsledek.",
      "yield() pouze naznačí plánovači, že může přepnout na jiné vlákno.",
      "yield() garantovaně předá CPU konkrétnímu vláknu.",
      "yield() slouží k zamknutí monitoru objektu."
    ],
    "correctOption": 1
  },
  {
    "id": 160,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Thread Pool?",
    "answer": "Thread pool je skupina znovupoužitelných vláken. Místo vytváření nového vlákna pro každou úlohu se úlohy zadávají do poolu. Výhody: menší režie, kontrola počtu vláken, lepší výkon serverových aplikací.",
    "keywords": [
      "Thread Pool",
      "znovupoužití vláken",
      "režie"
    ],
    "options": [
      "Skupina znovupoužitelných vláken, do které se zadávají úlohy",
      "Jediné vlákno zpracovávající vše sekvenčně",
      "Fronta procesů spravovaná OS",
      "Mechanismus pro zamykání sdílených dat"
    ],
    "correctOption": 0
  },
  {
    "id": 161,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké vlastnosti hledáme u Thread Poolu?",
    "answer": "Omezený počet vláken, fronta úloh, znovupoužití vláken, možnost ukončení, správa přetížení.",
    "keywords": [
      "Thread Pool",
      "fronta úloh",
      "omezený počet vláken"
    ],
    "options": [
      "Má mít omezený počet vláken, frontu úloh, znovupoužití a řízení přetížení.",
      "Nemá mít frontu úloh ani možnost ukončení.",
      "Má vytvářet neomezený počet vláken pro každou úlohu.",
      "Má nahrazovat heap i stack programu."
    ],
    "correctOption": 0
  },
  {
    "id": 162,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké modely vícevláknových aplikací znáte?",
    "answer": "Boss/Worker, Peer, Pipeline, Producer/Consumer, Thread Pool.",
    "keywords": [
      "Boss/Worker",
      "Peer",
      "Pipeline",
      "Producer/Consumer"
    ],
    "options": [
      "List, Set, Map a Queue.",
      "Boss/Worker, Peer, Pipeline, Producer/Consumer a Thread Pool.",
      "MVC, Singleton, Factory a Observer.",
      "TCP, UDP, HTTP a Telnet."
    ],
    "correctOption": 1
  },
  {
    "id": 163,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Boss/Worker model?",
    "answer": "Boss přijímá požadavky a rozděluje práci workerům. Workeři zpracovávají úlohy.",
    "keywords": [
      "Boss/Worker",
      "rozdělování práce"
    ],
    "options": [
      "Boss přijímá požadavky a rozděluje práci workerům.",
      "Boss/Worker je vzor pro čtení souboru po bajtech.",
      "Boss/Worker znamená, že všechna vlákna jsou úplně rovnocenná.",
      "Boss/Worker je vztah dědičnosti mezi třídami."
    ],
    "correctOption": 0
  },
  {
    "id": 164,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Peer model?",
    "answer": "Vlákna jsou rovnocenná. Není zde centrální řídicí vlákno.",
    "keywords": [
      "Peer model",
      "rovnocenná vlákna"
    ],
    "options": [
      "Peer model znamená jednovláknové zpracování GUI.",
      "Peer model má vždy jednoho bosse a mnoho workerů.",
      "Peer model je datová struktura typu zásobník.",
      "Peer model má rovnocenná vlákna bez centrálního řídicího vlákna."
    ],
    "correctOption": 3
  },
  {
    "id": 165,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Pipeline model?",
    "answer": "Data procházejí několika fázemi zpracování. Každá fáze může běžet ve vlastním vlákně.",
    "keywords": [
      "Pipeline",
      "fáze zpracování",
      "proud dat"
    ],
    "options": [
      "Pipeline znamená, že všechna vlákna dělají stejnou práci bez pořadí fází.",
      "Pipeline zpracovává data v navazujících fázích, často ve vlastních vláknech.",
      "Pipeline je vždy síťový socket přes UDP.",
      "Pipeline je mechanismus garbage collectoru pro heap."
    ],
    "correctOption": 1
  },
  {
    "id": 166,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Kdy je výhodné vícevláknové proudové zpracování dat?",
    "answer": "Když jsou jednotky vstupu nezávislé a mohou být zpracovány paralelně (např. velké množství nezávislých obrázků, nezávislé záznamy, nezávislé požadavky).",
    "keywords": [
      "proudové zpracování",
      "nezávislé jednotky",
      "paralelismus"
    ],
    "options": [
      "Když cílem je vždy minimalizovat počet vláken na nulu.",
      "Když aplikace smí běžet pouze v jednom vlákně.",
      "Když jsou vstupní jednotky nezávislé a lze je zpracovat paralelně.",
      "Když každý záznam závisí na všech předchozích záznamech."
    ],
    "correctOption": 2
  },
  {
    "id": 167,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je Producer/Consumer?",
    "answer": "Jedno vlákno produkuje data do bufferu/fronty, druhé je odebírá a zpracovává. Přístup do bufferu musí být synchronizovaný.",
    "keywords": [
      "Producer/Consumer",
      "buffer",
      "fronta",
      "synchronizace"
    ],
    "options": [
      "Producer/Consumer se používá jen pro GUI layouty.",
      "Producer/Consumer je rozdíl mezi TCP a UDP.",
      "Producer vyrábí data do fronty/bufferu, consumer je odebírá; buffer se synchronizuje.",
      "Producer/Consumer znamená, že jedno vlákno dědí z druhého."
    ],
    "correctOption": 2
  },
  {
    "id": 168,
    "category": "threads",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké základní operace řeší jazyky s podporou paralelismu?",
    "answer": "Vytváření vláken, spouštění vláken, ukončení vláken, synchronizace, komunikace mezi vlákny, zamykání sdílených zdrojů.",
    "keywords": [
      "paralelismus",
      "vlákna",
      "synchronizace",
      "zamykání"
    ],
    "options": [
      "Řeší pouze přepisování metod pomocí @Override.",
      "Řeší vytváření, spouštění, ukončení, synchronizaci a komunikaci vláken.",
      "Řeší jen práci s balíky a názvy tříd.",
      "Řeší jen serializaci objektů do souboru."
    ],
    "correctOption": 1
  },
  {
    "id": 169,
    "category": "threads",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je reentrantní funkce?",
    "answer": "Reentrantní funkci lze bezpečně zavolat znovu dříve, než předchozí volání skončilo. Neměla by používat sdílený měnitelný stav, globální proměnné ani statická data bez synchronizace.",
    "keywords": [
      "reentrantní funkce",
      "sdílený stav",
      "thread-safe"
    ],
    "options": [
      "Reentrantní funkce je synonymum pro synchronized metodu.",
      "Reentrantní funkci lze bezpečně znovu zavolat před koncem předchozího volání.",
      "Reentrantní funkce je každá funkce používající globální proměnnou bez zámku.",
      "Reentrantní funkce je funkce, kterou lze zavolat pouze jednou."
    ],
    "correctOption": 1
  },
  {
    "id": 170,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je komunikace?",
    "answer": "Komunikace je výměna zpráv mezi dvěma nebo více účastníky. Typicky obsahuje zahájení komunikace, předání zprávy, reakci na zprávu a ukončení komunikace.",
    "keywords": [
      "komunikace",
      "výměna zpráv",
      "účastníci"
    ],
    "options": [
      "Komunikace je výměna zpráv mezi dvěma nebo více účastníky.",
      "Komunikace je pouze přímý zápis do heapu jiného procesu.",
      "Komunikace v Javě znamená jen volání toString().",
      "Komunikace je vždy spojení přes TCP, nikdy jinak."
    ],
    "correctOption": 0
  },
  {
    "id": 171,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je protokol?",
    "answer": "Protokol definuje pravidla komunikace: formát zpráv, pořadí zpráv, syntaxi, sémantiku a reakce na zprávy.",
    "keywords": [
      "protokol",
      "pravidla",
      "formát",
      "syntaxe",
      "sémantika"
    ],
    "options": [
      "Pravidla komunikace: formát, pořadí, syntaxe, sémantika zpráv",
      "Fyzické propojení dvou počítačů kabelem",
      "Adresa konkrétního počítače v síti",
      "Program pro odesílání e-mailů"
    ],
    "correctOption": 0
  },
  {
    "id": 172,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké znáte modely komunikace?",
    "answer": "Klient/server a peer-to-peer.",
    "keywords": [
      "klient/server",
      "peer-to-peer",
      "modely komunikace"
    ],
    "options": [
      "Základní modely jsou stack a heap.",
      "Základní modely jsou List/Set a Map/Queue.",
      "Základní modely jsou klient/server a peer-to-peer.",
      "Základní modely jsou checked a unchecked."
    ],
    "correctOption": 2
  },
  {
    "id": 173,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je klient/server?",
    "answer": "Server poskytuje službu. Klient o službu žádá. Příklad: webový server a prohlížeč.",
    "keywords": [
      "klient",
      "server",
      "služba"
    ],
    "options": [
      "Server poskytuje službu, klient o ni žádá.",
      "Klient/server znamená, že obě strany jsou vždy úplně rovnocenné.",
      "Klient/server je vztah is-a mezi třídami.",
      "Klient vždy poskytuje službu a server ji pouze zobrazuje."
    ],
    "correctOption": 0
  },
  {
    "id": 174,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je peer-to-peer?",
    "answer": "Každý účastník může být klient i server zároveň.",
    "keywords": [
      "peer-to-peer",
      "P2P",
      "rovnocenní účastníci"
    ],
    "options": [
      "Peer-to-peer je druh garbage collection.",
      "V peer-to-peer může být každý účastník klient i server.",
      "V peer-to-peer existuje vždy jeden centrální server.",
      "Peer-to-peer znamená komunikaci pouze v rámci jednoho vlákna."
    ],
    "correctOption": 1
  },
  {
    "id": 175,
    "category": "network",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké způsoby navazování komunikace znáte?",
    "answer": "V kontextu sítí hlavně spojovaná a nespojovaná komunikace. Obecně také: TCP, UDP, pipe, sdílená paměť, zprávy mezi objekty.",
    "keywords": [
      "spojovaná",
      "nespojovaná",
      "TCP",
      "UDP",
      "pipe"
    ],
    "options": [
      "Existuje pouze TCP, jiné způsoby komunikace nejsou.",
      "Komunikace se vždy navazuje přes metodu equals().",
      "Rozlišujeme hlavně spojovanou a nespojovanou komunikaci.",
      "Navazování komunikace se týká jen tříd a objektů, ne sítí."
    ],
    "correctOption": 2
  },
  {
    "id": 176,
    "category": "network",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je spojovaná komunikace?",
    "answer": "Nejdříve se naváže spojení, potom se přenášejí data a nakonec se spojení ukončí. Příklad: TCP.",
    "keywords": [
      "spojovaná komunikace",
      "TCP",
      "navázání spojení"
    ],
    "options": [
      "Spojovaná komunikace posílá izolované datagramy bez spojení.",
      "Spojovaná komunikace nejdřív naváže spojení, pak přenáší data; příklad TCP.",
      "Spojovaná komunikace je typická pro UDP.",
      "Spojovaná komunikace nikdy neukončuje spojení."
    ],
    "correctOption": 1
  },
  {
    "id": 177,
    "category": "network",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je nespojovaná komunikace?",
    "answer": "Strany nenavazují spojení. Posílají se samostatné zprávy/datagramy. Příklad: UDP.",
    "keywords": [
      "nespojovaná komunikace",
      "UDP",
      "datagram"
    ],
    "options": [
      "Nespojovaná komunikace je jediný režim protokolu Telnet.",
      "Nespojovaná komunikace nejdřív vždy naváže spojení jako TCP.",
      "Nespojovaná komunikace garantuje doručení i pořadí všech dat.",
      "Nespojovaná komunikace neposílá spojení předem, ale samostatné datagramy; příklad UDP."
    ],
    "correctOption": 3
  },
  {
    "id": 178,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je proudový přenos?",
    "answer": "Data se přenášejí jako proud bajtů. Typicky TCP.",
    "keywords": [
      "proudový přenos",
      "TCP",
      "proud bajtů"
    ],
    "options": [
      "Proudový přenos posílá data jako proud bajtů, typicky TCP.",
      "Proudový přenos je ukládání objektů do HashMap.",
      "Proudový přenos posílá vždy samostatné UDP datagramy.",
      "Proudový přenos znamená čtení textu po řádcích z GUI."
    ],
    "correctOption": 0
  },
  {
    "id": 179,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je blokový/datagramový přenos?",
    "answer": "Data se přenášejí po samostatných blocích (datagramech). Typicky UDP.",
    "keywords": [
      "datagramový přenos",
      "UDP",
      "bloky"
    ],
    "options": [
      "Datagramový přenos je zápis objektů přes Serializable.",
      "Datagramový přenos posílá samostatné bloky/datagramy, typicky UDP.",
      "Datagramový přenos je proud bajtů bez hranic zpráv, typicky TCP.",
      "Datagramový přenos je způsob iterace přes List."
    ],
    "correctOption": 1
  },
  {
    "id": 180,
    "category": "network",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi TCP a UDP?",
    "answer": "TCP je spojovaný, spolehlivý, zachovává pořadí a používá proudový přenos. UDP je nespojovaný, nespolehlivý, nezaručuje pořadí a používá datagramy.",
    "keywords": [
      "TCP",
      "UDP",
      "spolehlivost",
      "pořadí"
    ],
    "options": [
      "TCP = spojovaný, spolehlivý, pořadí; UDP = nespojovaný, nespolehlivý, datagramy",
      "TCP = nespojovaný a rychlý; UDP = spojovaný a spolehlivý",
      "Oba garantují doručení a pořadí",
      "TCP používá datagramy, UDP proud bajtů"
    ],
    "correctOption": 0
  },
  {
    "id": 181,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Kdy použít TCP?",
    "answer": "Když potřebujeme spolehlivý přenos a zachování pořadí. Příklad: HTTP, SSH, Telnet, FTP.",
    "keywords": [
      "TCP",
      "spolehlivost",
      "HTTP",
      "SSH",
      "FTP"
    ],
    "options": [
      "TCP použijeme, když potřebujeme spolehlivost a zachování pořadí.",
      "TCP je vhodné jen pro garbage collection.",
      "TCP použijeme, když nevadí ztráta dat a jde hlavně o datagramy.",
      "TCP se používá jen pro lokální komunikaci v rámci jednoho procesu."
    ],
    "correctOption": 0
  },
  {
    "id": 182,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Kdy použít UDP?",
    "answer": "Když je důležitá nízká latence a nevadí ztráta části dat. Příklad: streamování, hry, senzorická data, DNS.",
    "keywords": [
      "UDP",
      "nízká latence",
      "streamování",
      "DNS"
    ],
    "options": [
      "UDP je spojovaný protokol pro Telnet.",
      "UDP se používá výhradně pro HTTP v prohlížeči.",
      "UDP použijeme pro nízkou latenci, když nevadí ztráta části dat.",
      "UDP použijeme, když musí být garantované doručení a pořadí."
    ],
    "correctOption": 2
  },
  {
    "id": 183,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jaké protokoly použijeme pro jednoduchou aplikaci typu telnet?",
    "answer": "Telnet používá TCP.",
    "keywords": [
      "telnet",
      "TCP"
    ],
    "options": [
      "Telnet používá TCP.",
      "Telnet je protokol garbage collectoru.",
      "Telnet používá pouze lokální pipe bez sítě.",
      "Telnet používá UDP, protože nepotřebuje pořadí dat."
    ],
    "correctOption": 0
  },
  {
    "id": 184,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je HTTP?",
    "answer": "HTTP je aplikační protokol nad TCP. Funguje modelem request/response (požadavek/odpověď).",
    "keywords": [
      "HTTP",
      "aplikační protokol",
      "request/response",
      "TCP"
    ],
    "options": [
      "HTTP je metoda třídy Object pro komunikaci objektů.",
      "HTTP je aplikační protokol nad TCP, pracuje request/response.",
      "HTTP je transportní protokol nahrazující TCP i UDP.",
      "HTTP je binární souborový formát pro serializaci."
    ],
    "correctOption": 1
  },
  {
    "id": 185,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je socket?",
    "answer": "Socket je koncový bod komunikace mezi procesy přes síť.",
    "keywords": [
      "socket",
      "koncový bod",
      "komunikace"
    ],
    "options": [
      "Socket je koncový bod síťové komunikace mezi procesy.",
      "Socket je vždy fyzická síťová karta.",
      "Socket je kolekce ukládající páry klíč–hodnota.",
      "Socket je metoda pro porovnání objektů podle reference."
    ],
    "correctOption": 0
  },
  {
    "id": 186,
    "category": "network",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je serverový socket?",
    "answer": "Serverový socket čeká na příchozí spojení na určitém portu.",
    "keywords": [
      "ServerSocket",
      "port",
      "accept"
    ],
    "codeExample": "ServerSocket server = new ServerSocket(8080);\nSocket client = server.accept();",
    "options": [
      "Serverový socket slouží jen ke čtení textového souboru.",
      "Serverový socket je konkrétní klientská IP adresa.",
      "ServerSocket čeká na příchozí spojení na portu a přijímá je přes accept().",
      "Serverový socket vždy aktivně navazuje spojení na vzdálený server."
    ],
    "correctOption": 2
  },
  {
    "id": 187,
    "category": "network",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je klientský socket?",
    "answer": "Klientský socket navazuje spojení se serverem.",
    "keywords": [
      "Socket",
      "klient",
      "connect"
    ],
    "codeExample": "Socket socket = new Socket(\"localhost\", 8080);",
    "options": [
      "Klientský socket slouží pouze pro UDP datagramy.",
      "Klientský socket čeká na příchozí spojení přes listen().",
      "Klientský socket je vždy totéž co ServerSocket.",
      "Klientský Socket navazuje spojení se serverem."
    ],
    "correctOption": 3
  },
  {
    "id": 188,
    "category": "network",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je součástí plné specifikace TCP/IP socketu?",
    "answer": "U navázaného spojení: protokol, lokální IP adresa, lokální port, vzdálená IP adresa, vzdálený port.",
    "keywords": [
      "socket",
      "IP adresa",
      "port",
      "protokol",
      "5-tice"
    ],
    "options": [
      "TCP socket je určen jen názvem Java třídy.",
      "TCP socket obsahuje pouze MAC adresu a název balíku.",
      "TCP spojení určuje protokol, lokální IP/port a vzdálená IP/port.",
      "TCP socket určuje pouze číslo portu serveru."
    ],
    "correctOption": 2
  },
  {
    "id": 189,
    "category": "network",
    "type": "code",
    "difficulty": "medium",
    "question": "Jaká jsou základní primitiva socketu?",
    "answer": "Obecně: create, bind, connect, listen, accept, send, receive, shutdown, close. V Javě typicky: new ServerSocket(port), accept(), new Socket(host, port), getInputStream(), getOutputStream(), close().",
    "keywords": [
      "bind",
      "connect",
      "listen",
      "accept",
      "send",
      "receive"
    ],
    "codeExample": "new ServerSocket(port)\naccept()\nnew Socket(host, port)\ngetInputStream()\ngetOutputStream()\nclose()",
    "options": [
      "Základní primitiva jsou create, bind, connect, listen, accept, send/receive, close.",
      "Základní primitiva jsou List, Set, Map a Queue.",
      "Základní primitiva jsou if, for, while a switch.",
      "Základní primitiva jsou equals, hashCode, toString a clone."
    ],
    "correctOption": 0
  },
  {
    "id": 190,
    "category": "network",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží bind?",
    "answer": "Přiřadí socketu lokální adresu a port.",
    "keywords": [
      "bind",
      "lokální adresa",
      "port"
    ],
    "options": [
      "bind zavře vstupní a výstupní proudy.",
      "bind přijme příchozí spojení a vrátí klientský socket.",
      "bind naváže spojení se vzdáleným serverem.",
      "bind přiřadí socketu lokální adresu a port."
    ],
    "correctOption": 3
  },
  {
    "id": 191,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "K čemu slouží connect?",
    "answer": "Klient naváže spojení se vzdáleným socketem.",
    "keywords": [
      "connect",
      "navázání spojení",
      "klient"
    ],
    "options": [
      "connect převede objekt na bytecode.",
      "connect přiřadí socketu lokální port bez vzdálené strany.",
      "connect naváže klientské spojení se vzdáleným socketem.",
      "connect začne čekat na příchozí spojení jako server."
    ],
    "correctOption": 2
  },
  {
    "id": 192,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "K čemu slouží listen?",
    "answer": "Server začne čekat na příchozí spojení.",
    "keywords": [
      "listen",
      "server",
      "čekání na spojení"
    ],
    "options": [
      "listen odešle data přes klientský socket.",
      "listen vytvoří nové vlákno automaticky.",
      "listen nastaví serverový socket do režimu čekání na příchozí spojení.",
      "listen přečte bajty z binárního souboru."
    ],
    "correctOption": 2
  },
  {
    "id": 193,
    "category": "network",
    "type": "theory",
    "difficulty": "easy",
    "question": "K čemu slouží accept?",
    "answer": "Server přijme příchozí spojení a vrátí socket pro komunikaci s klientem.",
    "keywords": [
      "accept",
      "server",
      "příchozí spojení"
    ],
    "options": [
      "accept slouží k porovnání dvou objektů.",
      "accept přijme příchozí spojení a vrátí socket pro komunikaci s klientem.",
      "accept přiřadí lokální port bez klienta.",
      "accept aktivně naváže spojení na server."
    ],
    "correctOption": 1
  },
  {
    "id": 194,
    "category": "network",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak lze standardní vstup a výstup použít ke komunikaci mezi procesy?",
    "answer": "Pomocí pipe (roury). Výstup jednoho procesu se použije jako vstup druhého.",
    "keywords": [
      "pipe",
      "roura",
      "stdin",
      "stdout",
      "IPC"
    ],
    "codeExample": "ls | grep test",
    "options": [
      "Pomocí dědičnosti mezi dvěma procesy.",
      "Pomocí JIT kompilace bytecodu.",
      "Pomocí přepsání equals() mezi procesy.",
      "Pomocí pipe: výstup jednoho procesu se použije jako vstup druhého."
    ],
    "correctOption": 3
  },
  {
    "id": 195,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jak popíšeme algoritmus před implementací?",
    "answer": "Například: pseudokódem, vývojovým diagramem, slovním popisem, UML/strukturogramem, matematickým zápisem.",
    "keywords": [
      "algoritmus",
      "pseudokód",
      "vývojový diagram",
      "UML"
    ],
    "options": [
      "Algoritmus lze popsat pseudokódem, diagramem, slovně nebo matematicky.",
      "Algoritmus lze popsat pouze zdrojovým kódem v Javě.",
      "Algoritmus se popisuje výhradně přes UML balíky.",
      "Algoritmus se před implementací nepopisuje, jen se spustí."
    ],
    "correctOption": 0
  },
  {
    "id": 196,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "easy",
    "question": "Jak popíšeme algoritmus z hlediska použití?",
    "answer": "Popíšeme vstupy, výstupy, účel, hlavní kroky, podmínky použití a příklad použití.",
    "keywords": [
      "algoritmus",
      "vstupy",
      "výstupy",
      "účel"
    ],
    "options": [
      "Popíšeme vstupy, výstupy, účel, kroky, podmínky a příklad použití.",
      "Popíšeme jen názvy proměnných bez vstupů a výstupů.",
      "Popíšeme pouze počet řádků výsledného kódu.",
      "Popíšeme pouze operační systém, na kterém poběží."
    ],
    "correctOption": 0
  },
  {
    "id": 197,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké jsou ukazatele kvality algoritmu?",
    "answer": "Časová složitost, paměťová složitost, korektnost, terminace, stabilita (u třídění), univerzálnost.",
    "keywords": [
      "časová složitost",
      "paměťová složitost",
      "korektnost",
      "terminace"
    ],
    "options": [
      "Časová a paměťová složitost, korektnost, terminace, stabilita, univerzálnost",
      "Pouze rychlost běhu na konkrétním počítači",
      "Počet řádků zdrojového kódu",
      "Jen velikost vstupu"
    ],
    "correctOption": 0
  },
  {
    "id": 198,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co znamená, že je algoritmus univerzální?",
    "answer": "Algoritmus řeší celou třídu problémů, ne jen jeden konkrétní vstup. Příklad: obecné třídění s komparátorem.",
    "keywords": [
      "univerzální algoritmus",
      "třída problémů",
      "komparátor"
    ],
    "options": [
      "Univerzální algoritmus je takový, který nemá žádné vstupy.",
      "Univerzální algoritmus řeší celou třídu problémů, ne jeden konkrétní vstup.",
      "Univerzální algoritmus je algoritmus fungující jen pro jeden pevný vstup.",
      "Univerzální algoritmus je vždy nejrychlejší možná implementace."
    ],
    "correctOption": 1
  },
  {
    "id": 199,
    "category": "algorithms",
    "type": "trap",
    "difficulty": "medium",
    "question": "Je efektivnější rekurze nebo iterace?",
    "answer": "Obvykle iterace, protože rekurze vytváří další volání na zásobníku. Rekurze ale může být přirozenější pro stromové nebo rekurzivní struktury.",
    "keywords": [
      "rekurze",
      "iterace",
      "zásobník",
      "efektivita"
    ],
    "options": [
      "Rekurze je vždy rychlejší a nepoužívá zásobník.",
      "Obvykle iterace kvůli menší režii, ale rekurze se hodí pro přirozeně rekurzivní struktury.",
      "Iterace v Javě neexistuje, používá se jen rekurze.",
      "Rekurze a iterace mají vždy přesně stejnou paměťovou režii."
    ],
    "correctOption": 1
  },
  {
    "id": 200,
    "category": "algorithms",
    "type": "trap",
    "difficulty": "easy",
    "question": "Jaký je rozdíl mezi zásobníkem a frontou?",
    "answer": "Zásobník: LIFO (Last In, First Out). Fronta: FIFO (First In, First Out).",
    "keywords": [
      "zásobník",
      "fronta",
      "LIFO",
      "FIFO"
    ],
    "options": [
      "Zásobník = LIFO; fronta = FIFO",
      "Zásobník = FIFO; fronta = LIFO",
      "Oba jsou LIFO",
      "Oba jsou FIFO"
    ],
    "correctOption": 0
  },
  {
    "id": 201,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké znáte nelineární datové struktury?",
    "answer": "Strom, graf, halda. V Javě například TreeSet, TreeMap, PriorityQueue.",
    "keywords": [
      "strom",
      "graf",
      "halda",
      "TreeSet",
      "PriorityQueue"
    ],
    "options": [
      "Nelineární struktury jsou strom, graf a halda.",
      "Nelineární struktury jsou pole, seznam a fronta.",
      "Nelineární struktury jsou int, double a boolean.",
      "Nelineární struktury jsou pouze zásobník a fronta."
    ],
    "correctOption": 0
  },
  {
    "id": 202,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je halda?",
    "answer": "Halda (heap) je stromová datová struktura splňující heap property. Používá se například pro prioritní frontu.",
    "keywords": [
      "halda",
      "heap",
      "heap property",
      "prioritní fronta"
    ],
    "options": [
      "Halda je stromová struktura splňující heap property, často pro prioritní frontu.",
      "Halda je část paměti, kde jsou vždy uloženy lokální proměnné metod.",
      "Halda je kolekce bez jakéhokoliv uspořádání nebo pravidla.",
      "Halda je lineární struktura FIFO."
    ],
    "correctOption": 0
  },
  {
    "id": 203,
    "category": "algorithms",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je prioritní fronta?",
    "answer": "Prioritní fronta odebírá prvek podle priority, ne podle pořadí vložení.",
    "keywords": [
      "prioritní fronta",
      "PriorityQueue",
      "priorita"
    ],
    "codeExample": "PriorityQueue<Integer> pq = new PriorityQueue<>();",
    "options": [
      "Prioritní fronta je vždy FIFO jako běžná fronta.",
      "Prioritní fronta odebírá prvek podle priority, ne nutně podle vložení.",
      "Prioritní fronta je LIFO jako zásobník.",
      "Prioritní fronta je Map ukládající klíč–hodnota."
    ],
    "correctOption": 1
  },
  {
    "id": 204,
    "category": "algorithms",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co je slabě typovaný jazyk?",
    "answer": "Slabě typovaný jazyk dovoluje implicitní nebo volnější konverze mezi typy (např. JavaScript, PHP). Java je silně typovaný jazyk.",
    "keywords": [
      "slabě typovaný",
      "silně typovaný",
      "konverze",
      "Java"
    ],
    "commonMistakes": "Java je SILNĚ typovaný jazyk. Slabě typované jsou např. JavaScript a PHP.",
    "options": [
      "Java je slabě typovaná, protože má generika.",
      "Slabě typovaný jazyk je jazyk, který běží pomalu.",
      "Slabě typovaný jazyk dovoluje volnější implicitní konverze mezi typy.",
      "Slabě typovaný jazyk nemá vůbec žádné typy ani hodnoty."
    ],
    "correctOption": 2
  },
  {
    "id": 205,
    "category": "algorithms",
    "type": "trap",
    "difficulty": "hard",
    "question": "Co znamená statické a dynamické stanovení typu?",
    "answer": "Statické stanovení typu: typ je znám při překladu. Dynamické stanovení typu: typ se určí až za běhu. Java má statické typování, ale polymorfismus používá dynamický dispatch metod.",
    "keywords": [
      "statické typování",
      "dynamické typování",
      "dispatch",
      "Java"
    ],
    "options": [
      "Statický typ se určuje za běhu a dynamický při kompilaci.",
      "Statický typ je znám při překladu; dynamický typ se projeví za běhu.",
      "Java má jen dynamické typování a žádné statické typy.",
      "Statický a dynamický typ jsou v OOP vždy totéž."
    ],
    "correctOption": 1
  },
  {
    "id": 206,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co popisuje sémantika programovacího jazyka?",
    "answer": "Sémantika popisuje význam syntakticky správných konstrukcí programu. Syntaxe říká, JAK se něco píše; sémantika říká, CO to znamená.",
    "keywords": [
      "sémantika",
      "syntaxe",
      "význam"
    ],
    "options": [
      "Sémantika popisuje pouze zápis závorek a středníků.",
      "Sémantika popisuje jen rychlost běhu algoritmu.",
      "Sémantika je název nástroje pro build Javy.",
      "Sémantika popisuje význam syntakticky správných konstrukcí."
    ],
    "correctOption": 3
  },
  {
    "id": 207,
    "category": "algorithms",
    "type": "code",
    "difficulty": "medium",
    "question": "Jak realizujeme předání více hodnot jako návratové hodnoty metody?",
    "answer": "Možnosti: vrátit objekt, vrátit pole, vrátit kolekci, použít record, použít vlastní třídu.",
    "keywords": [
      "návratová hodnota",
      "record",
      "objekt",
      "pole"
    ],
    "codeExample": "record Result(int count, String name) {\n}",
    "options": [
      "Java metoda může vracet více hodnot oddělených čárkou přímo v return.",
      "Více hodnot vrátíme objektem, polem, kolekcí, recordem nebo vlastní třídou.",
      "Více hodnot lze vrátit jen přes globální proměnné.",
      "Více hodnot nelze v Javě nijak předat jako výsledek."
    ],
    "correctOption": 1
  },
  {
    "id": 208,
    "category": "algorithms",
    "type": "code",
    "difficulty": "medium",
    "question": "Jakého typu musí být formální a skutečný parametr?",
    "answer": "Skutečný parametr musí být kompatibilní s formálním parametrem (např. potomek lze předat tam, kde se očekává předek).",
    "keywords": [
      "formální parametr",
      "skutečný parametr",
      "kompatibilita"
    ],
    "codeExample": "void feed(Animal a) {\n}\nfeed(new Dog()); // Dog dědí z Animal",
    "options": [
      "Formální parametr musí být vždy typu Object.",
      "Formální a skutečný parametr spolu typově nesouvisí.",
      "Skutečný parametr musí mít vždy přesně stejnou třídu, potomek nestačí.",
      "Skutečný parametr musí být kompatibilní s formálním parametrem."
    ],
    "correctOption": 3
  },
  {
    "id": 209,
    "category": "algorithms",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je fiktivní/dummy parametr?",
    "answer": "Parametr, který je v signatuře metody, ale uvnitř se nepoužívá. Používá se například kvůli kompatibilitě rozhraní.",
    "keywords": [
      "dummy parametr",
      "fiktivní parametr",
      "kompatibilita rozhraní"
    ],
    "options": [
      "Dummy parametr je vždy výjimka předaná metodě.",
      "Dummy parametr je v signatuře, ale uvnitř se nepoužívá.",
      "Dummy parametr je parametr, který se musí měnit v každém volání.",
      "Dummy parametr je skutečná návratová hodnota metody."
    ],
    "correctOption": 1
  },
  {
    "id": 210,
    "category": "memory",
    "type": "trap",
    "difficulty": "medium",
    "question": "Jaký je rozdíl mezi stackem a heapem?",
    "answer": "Stack obsahuje rámce volání metod, lokální proměnné a reference. Heap obsahuje objekty vytvořené za běhu programu.",
    "keywords": [
      "stack",
      "heap",
      "rámce",
      "objekty",
      "reference"
    ],
    "options": [
      "Stack = rámce metod, lokální proměnné, reference; heap = objekty",
      "Stack = objekty; heap = lokální proměnné",
      "Stack i heap ukládají totéž",
      "Heap = rámce metod; stack = objekty"
    ],
    "correctOption": 0
  },
  {
    "id": 211,
    "category": "memory",
    "type": "trap",
    "difficulty": "medium",
    "question": "Kde jsou lokální proměnné?",
    "answer": "Lokální proměnné a reference jsou typicky na stacku. Objekty, na které reference ukazují, jsou na heapu.",
    "keywords": [
      "lokální proměnné",
      "stack",
      "heap",
      "reference"
    ],
    "options": [
      "Lokální proměnné a reference jsou typicky na stacku; objekty na heapu.",
      "Lokální proměnné jsou vždy součástí objektu na heapu.",
      "Lokální proměnné spravuje garbage collector stejně jako objekty.",
      "Lokální proměnné se ukládají výhradně do statických polí."
    ],
    "correctOption": 0
  },
  {
    "id": 212,
    "category": "memory",
    "type": "trap",
    "difficulty": "medium",
    "question": "Kde jsou instanční proměnné?",
    "answer": "Instanční proměnné jsou součástí objektu, tedy na heapu.",
    "keywords": [
      "instanční proměnné",
      "heap",
      "objekt"
    ],
    "options": [
      "Instanční proměnné jsou vždy lokální proměnné na stacku.",
      "Instanční proměnné existují jen při kompilaci, ne za běhu.",
      "Instanční proměnné se ukládají do JAR manifestu.",
      "Instanční proměnné jsou součástí objektu, tedy na heapu."
    ],
    "correctOption": 3
  },
  {
    "id": 213,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je garbage collection?",
    "answer": "Garbage collection je automatické uvolňování objektů, které už nejsou dosažitelné.",
    "keywords": [
      "garbage collection",
      "GC",
      "uvolňování paměti",
      "dosažitelnost"
    ],
    "options": [
      "GC překládá .java soubory do .class.",
      "GC ručně uvolňuje programátor pomocí free().",
      "GC maže všechny objekty po každém volání metody.",
      "GC automaticky uvolňuje objekty, které už nejsou dosažitelné."
    ],
    "correctOption": 3
  },
  {
    "id": 214,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Kdy je objekt kandidátem na odstranění GC?",
    "answer": "Když k němu nevede žádná cesta od GC roots.",
    "keywords": [
      "GC roots",
      "dosažitelnost",
      "kandidát na odstranění"
    ],
    "options": [
      "Objekt je kandidát, pokud má hashCode rovný nule.",
      "Objekt je kandidát na odstranění, když k němu nevede cesta z GC roots.",
      "Objekt je kandidát, když má prázdný toString().",
      "Objekt je odstraněn, jakmile ho program právě nepoužívá v jedné metodě."
    ],
    "correctOption": 1
  },
  {
    "id": 215,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co jsou GC roots?",
    "answer": "Například: reference na stacku, statická pole, aktivní vlákna, JNI handly.",
    "keywords": [
      "GC roots",
      "stack",
      "statická pole",
      "vlákna",
      "JNI"
    ],
    "options": [
      "GC roots jsou všechny objekty v heapu bez rozdílu.",
      "GC roots jsou jen weak reference.",
      "GC roots jsou např. reference na stacku, statická pole, aktivní vlákna a JNI handly.",
      "GC roots jsou pouze objekty vytvořené přes new v main metodě."
    ],
    "correctOption": 2
  },
  {
    "id": 216,
    "category": "memory",
    "type": "trap",
    "difficulty": "medium",
    "question": "Co znamená dosažitelnost objektu?",
    "answer": "Objekt je dosažitelný, pokud k němu vede cesta z GC roots. GC neřeší užitečnost objektu, ale dosažitelnost.",
    "keywords": [
      "dosažitelnost",
      "GC roots",
      "užitečnost"
    ],
    "commonMistakes": "GC nemaže objekty podle toho, zda jsou 'užitečné', ale podle DOSAŽITELNOSTI z GC roots.",
    "options": [
      "Dosažitelnost znamená, že objekt má public metody.",
      "Objekt je dosažitelný, pokud k němu vede cesta z GC roots.",
      "Objekt je dosažitelný, pokud je podle programátora ještě užitečný.",
      "Objekt je dosažitelný jen pokud je uložen ve Stringu."
    ],
    "correctOption": 1
  },
  {
    "id": 217,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je memory leak v Javě?",
    "answer": "Objekt už nepotřebujeme, ale stále na něj existuje reference, takže ho GC nemůže odstranit.",
    "keywords": [
      "memory leak",
      "reference",
      "GC",
      "únik paměti"
    ],
    "options": [
      "Memory leak v Javě nemůže nikdy nastat kvůli garbage collectoru.",
      "Memory leak je chyba kompilace při nedostatku importů.",
      "Memory leak znamená, že objekt ztratí všechny reference a GC ho smaže.",
      "Memory leak nastane, když nepotřebný objekt stále drží reference a GC ho nemůže smazat."
    ],
    "correctOption": 3
  },
  {
    "id": 218,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké znáte typy referencí v Javě?",
    "answer": "strong reference, soft reference, weak reference, phantom reference.",
    "keywords": [
      "strong",
      "soft",
      "weak",
      "phantom",
      "reference"
    ],
    "options": [
      "Typy referencí jsou checked, unchecked a Error.",
      "Typy referencí jsou strong, soft, weak a phantom.",
      "Typy referencí jsou TCP, UDP a HTTP.",
      "Typy referencí jsou public, protected, private a static."
    ],
    "correctOption": 1
  },
  {
    "id": 219,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je strong reference?",
    "answer": "Běžná reference. Dokud existuje, objekt zůstává živý (GC ho neodstraní).",
    "keywords": [
      "strong reference",
      "běžná reference"
    ],
    "options": [
      "Strong reference je běžná reference; dokud existuje, GC objekt neodstraní.",
      "Strong reference je reference používaná pouze v HashMap.",
      "Strong reference se smaže při každém minor GC bez ohledu na dosažitelnost.",
      "Strong reference slouží jen ke sledování finalizace objektu."
    ],
    "correctOption": 0
  },
  {
    "id": 220,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je soft reference?",
    "answer": "Reference, kterou GC může odstranit při nedostatku paměti. Používá se pro cache.",
    "keywords": [
      "soft reference",
      "cache",
      "nedostatek paměti"
    ],
    "options": [
      "Soft reference je reference na lokální proměnnou na stacku.",
      "Soft reference vždy zmizí při každém minor GC.",
      "Soft reference je silnější než strong reference a nikdy se nemaže.",
      "Soft reference může GC odstranit při nedostatku paměti, hodí se pro cache."
    ],
    "correctOption": 3
  },
  {
    "id": 221,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je weak reference?",
    "answer": "Slabá reference. Objekt může být odstraněn při nejbližší vhodné GC, pokud na něj nejsou silné reference.",
    "keywords": [
      "weak reference",
      "slabá reference",
      "GC"
    ],
    "options": [
      "Weak reference může být odstraněna při GC, pokud neexistují strong reference.",
      "Weak reference je vždy stejná jako null.",
      "Weak reference funguje pouze pro primitivní typy.",
      "Weak reference brání GC odstranit objekt stejně jako strong reference."
    ],
    "correctOption": 0
  },
  {
    "id": 222,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je phantom reference?",
    "answer": "Slouží ke sledování úklidu objektu. Objekt už nelze přes phantom referenci běžně používat.",
    "keywords": [
      "phantom reference",
      "sledování úklidu"
    ],
    "options": [
      "Phantom reference zabraňuje odstranění objektu navždy.",
      "Phantom reference slouží ke sledování úklidu objektu, objekt přes ni běžně nepoužiješ.",
      "Phantom reference je způsob implementace interface.",
      "Phantom reference je běžná silná reference pro práci s objektem."
    ],
    "correctOption": 1
  },
  {
    "id": 223,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je generační GC?",
    "answer": "GC rozděluje heap na mladou a starou generaci. Většina objektů zaniká brzy, proto se mladá generace uklízí častěji.",
    "keywords": [
      "generační GC",
      "mladá generace",
      "stará generace"
    ],
    "options": [
      "GC dělí heap na mladou a starou generaci; mladá se uklízí častěji",
      "GC běží jen jednou při ukončení programu",
      "GC dělí stack na generace podle vláken",
      "GC nikdy nemaže staré objekty"
    ],
    "correctOption": 0
  },
  {
    "id": 224,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Minor GC?",
    "answer": "Úklid mladé generace.",
    "keywords": [
      "Minor GC",
      "mladá generace"
    ],
    "options": [
      "Minor GC uklízí pouze stack aktuálního vlákna.",
      "Minor GC je JIT optimalizace metod.",
      "Minor GC uklízí mladou generaci heapu.",
      "Minor GC uklízí celý heap včetně staré generace."
    ],
    "correctOption": 2
  },
  {
    "id": 225,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Major GC?",
    "answer": "Úklid staré generace.",
    "keywords": [
      "Major GC",
      "stará generace"
    ],
    "options": [
      "Major GC pracuje jen s lokálními proměnnými na stacku.",
      "Major GC uklízí starou generaci.",
      "Major GC uklízí pouze mladou generaci.",
      "Major GC je spuštění profileru VisualVM."
    ],
    "correctOption": 1
  },
  {
    "id": 226,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je Full GC?",
    "answer": "Úklid celého heapu.",
    "keywords": [
      "Full GC",
      "celý heap"
    ],
    "options": [
      "Full GC vypíná všechna vlákna natrvalo.",
      "Full GC je překlad celého programu do nativního kódu.",
      "Full GC uklízí celý heap.",
      "Full GC uklízí jen mladou generaci."
    ],
    "correctOption": 2
  },
  {
    "id": 227,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je Escape Analysis?",
    "answer": "Optimalizace JIT kompilátoru. Zjišťuje, jestli objekt „uniká“ mimo metodu nebo vlákno. Pokud neuniká, JVM může optimalizovat alokaci nebo odstranit zámky.",
    "keywords": [
      "Escape Analysis",
      "JIT",
      "únik objektu",
      "optimalizace"
    ],
    "options": [
      "Escape Analysis zjišťuje, zda objekt uniká mimo metodu/vlákno, a umožňuje optimalizace.",
      "Escape Analysis je ruční mazání objektů přes free().",
      "Escape Analysis hledá úniky síťových socketů přes TCP.",
      "Escape Analysis je technika pro escapování uvozovek ve Stringu."
    ],
    "correctOption": 0
  },
  {
    "id": 228,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Jaké stavy rozlišuje Escape Analysis?",
    "answer": "NoEscape, ArgEscape, GlobalEscape.",
    "keywords": [
      "NoEscape",
      "ArgEscape",
      "GlobalEscape",
      "Escape Analysis"
    ],
    "options": [
      "Escape Analysis rozlišuje TCP, UDP a HTTP.",
      "Escape Analysis rozlišuje Minor, Major a Full GC.",
      "Escape Analysis rozlišuje public, private a protected.",
      "Escape Analysis rozlišuje NoEscape, ArgEscape a GlobalEscape."
    ],
    "correctOption": 3
  },
  {
    "id": 229,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je NoEscape?",
    "answer": "Objekt není viditelný mimo aktuální metodu/vlákno. JVM ho může výrazně optimalizovat (např. alokace na stacku, odstranění zámků).",
    "keywords": [
      "NoEscape",
      "optimalizace",
      "lokální objekt"
    ],
    "options": [
      "NoEscape znamená, že objekt nelze optimalizovat.",
      "NoEscape znamená, že objekt neuniká mimo aktuální metodu/vlákno.",
      "NoEscape znamená, že objekt je vždy návratovou hodnotou metody.",
      "NoEscape znamená, že objekt je uložen do statické proměnné."
    ],
    "correctOption": 1
  },
  {
    "id": 230,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je ArgEscape?",
    "answer": "Objekt je předán jako argument, ale neuniká globálně.",
    "keywords": [
      "ArgEscape",
      "argument",
      "Escape Analysis"
    ],
    "options": [
      "ArgEscape je stav garbage collectoru při Full GC.",
      "ArgEscape znamená, že objekt je předán jako argument, ale neuniká globálně.",
      "ArgEscape znamená, že objekt vůbec neopustí metodu.",
      "ArgEscape znamená, že objekt je uložen v globální statické proměnné."
    ],
    "correctOption": 1
  },
  {
    "id": 231,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je GlobalEscape?",
    "answer": "Objekt uniká mimo metodu, například návratovou hodnotou nebo uložením do statické proměnné.",
    "keywords": [
      "GlobalEscape",
      "návratová hodnota",
      "statická proměnná"
    ],
    "options": [
      "GlobalEscape znamená, že objekt je jen argumentem bez dalšího úniku.",
      "GlobalEscape znamená, že objekt je čistě lokální a nepředává se dál.",
      "GlobalEscape označuje smazání objektu při Minor GC.",
      "GlobalEscape znamená, že objekt uniká mimo metodu, např. návratem nebo statickým uložením."
    ],
    "correctOption": 3
  },
  {
    "id": 232,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co znamená výkon aplikace na JVM?",
    "answer": "Výkon není jedno číslo. Sledují se hlavně: latency, throughput, allocation rate, memory footprint.",
    "keywords": [
      "výkon",
      "latency",
      "throughput",
      "allocation rate",
      "footprint"
    ],
    "options": [
      "Výkon JVM se hodnotí např. latencí, throughputem, alokacemi a footprintem.",
      "Výkon JVM je pouze jedno číslo: velikost .class souboru.",
      "Výkon JVM se měří jen počtem tříd v balíku.",
      "Výkon JVM závisí výhradně na názvu metody main."
    ],
    "correctOption": 0
  },
  {
    "id": 233,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je latency?",
    "answer": "Doba jedné odpovědi nebo operace.",
    "keywords": [
      "latency",
      "doba odezvy"
    ],
    "options": [
      "Latency je doba jedné odpovědi nebo operace.",
      "Latency je rychlost alokace objektů.",
      "Latency je počet operací za sekundu.",
      "Latency je množství živé paměti na heapu."
    ],
    "correctOption": 0
  },
  {
    "id": 234,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je throughput?",
    "answer": "Počet operací za jednotku času.",
    "keywords": [
      "throughput",
      "propustnost",
      "operace za čas"
    ],
    "options": [
      "Throughput je počet tříd v JAR souboru.",
      "Throughput je množství paměti držené aplikací.",
      "Throughput je počet operací za jednotku času.",
      "Throughput je doba jedné operace."
    ],
    "correctOption": 2
  },
  {
    "id": 235,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je allocation rate?",
    "answer": "Kolik objektů/paměti program alokuje za jednotku času.",
    "keywords": [
      "allocation rate",
      "alokace",
      "rychlost alokace"
    ],
    "options": [
      "Allocation rate je počet přijatých TCP spojení.",
      "Allocation rate je velikost statického typu proměnné.",
      "Allocation rate je délka jedné odezvy aplikace.",
      "Allocation rate je množství paměti/objektů alokovaných za čas."
    ],
    "correctOption": 3
  },
  {
    "id": 236,
    "category": "memory",
    "type": "theory",
    "difficulty": "easy",
    "question": "Co je footprint?",
    "answer": "Kolik paměti aplikace drží živé.",
    "keywords": [
      "footprint",
      "živá paměť"
    ],
    "options": [
      "Footprint je množství paměti, které aplikace drží živé.",
      "Footprint je počet vláken v thread poolu.",
      "Footprint je počet operací za sekundu.",
      "Footprint je doba odezvy jedné operace."
    ],
    "correctOption": 0
  },
  {
    "id": 237,
    "category": "memory",
    "type": "trap",
    "difficulty": "medium",
    "question": "Proč je špatné měřit výkon jedním během bez warmupu?",
    "answer": "První běh obsahuje class loading, JIT warmup a často více GC aktivity. Výsledek může být zavádějící.",
    "keywords": [
      "warmup",
      "měření výkonu",
      "JIT",
      "class loading"
    ],
    "options": [
      "Warmup slouží jen k načtení GUI komponent, ne k výkonu.",
      "Warmup není potřeba, protože JVM nikdy neoptimalizuje za běhu.",
      "Jeden běh je nejlepší, protože eliminuje náhodnost měření.",
      "První běh zkresluje class loading, JIT warmup a GC aktivita."
    ],
    "correctOption": 3
  },
  {
    "id": 238,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "Jaké nástroje se používají pro profilování JVM?",
    "answer": "VisualVM, jcmd, JFR (Java Flight Recorder), jstat, GC log, heap dump, thread dump.",
    "keywords": [
      "VisualVM",
      "jcmd",
      "JFR",
      "jstat",
      "heap dump",
      "thread dump"
    ],
    "options": [
      "Používají se pouze Maven a Gradle.",
      "Používají se jen JButton a JFrame.",
      "Profilování JVM se provádí jen přes equals() a hashCode().",
      "Používají se VisualVM, jcmd, JFR, jstat, GC logy, heap/thread dumpy."
    ],
    "correctOption": 3
  },
  {
    "id": 239,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží VisualVM?",
    "answer": "K rychlé kontrole CPU, heapu, GC aktivity, threadů a samplerů.",
    "keywords": [
      "VisualVM",
      "CPU",
      "heap",
      "GC",
      "thready"
    ],
    "options": [
      "VisualVM překládá .java soubory do .class.",
      "VisualVM slouží ke kontrole CPU, heapu, GC, threadů a samplerů.",
      "VisualVM je kolekce pro ukládání objektů.",
      "VisualVM je nástroj na psaní Java kódu místo IDE."
    ],
    "correctOption": 1
  },
  {
    "id": 240,
    "category": "memory",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu slouží jcmd?",
    "answer": "K diagnostice běžící JVM.",
    "keywords": [
      "jcmd",
      "diagnostika",
      "běžící JVM"
    ],
    "codeExample": "jcmd <pid> GC.heap_info\njcmd <pid> GC.class_histogram\njcmd <pid> Thread.print",
    "options": [
      "jcmd je Java příkaz pro vytvoření nového objektu.",
      "jcmd je metoda pro zamykání monitoru.",
      "jcmd slouží k diagnostice běžící JVM, např. heap info nebo thread dump.",
      "jcmd slouží pouze ke spuštění GUI události."
    ],
    "correctOption": 2
  },
  {
    "id": 241,
    "category": "memory",
    "type": "theory",
    "difficulty": "medium",
    "question": "K čemu slouží JFR?",
    "answer": "Java Flight Recorder slouží k nízko-režijnímu profilování aplikace.",
    "keywords": [
      "JFR",
      "Java Flight Recorder",
      "profilování"
    ],
    "options": [
      "JFR je příkaz pro vyhození výjimky.",
      "JFR je kolekce pro ukládání klíč–hodnota.",
      "JFR je layout manager ve Swingu.",
      "JFR je nízko-režijný nástroj pro profilování Java aplikace."
    ],
    "correctOption": 3
  },
  {
    "id": 242,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Jak poznat CPU pressure?",
    "answer": "CPU je vysoké, aplikace je pomalá a profiler ukazuje několik dominantních metod.",
    "keywords": [
      "CPU pressure",
      "profiler",
      "dominantní metody"
    ],
    "options": [
      "CPU pressure poznáš podle vysokého CPU a dominantních metod v profileru.",
      "CPU pressure znamená, že GC roots nejsou dosažitelné.",
      "CPU pressure se projevuje jen plným diskem.",
      "CPU pressure znamená hlavně časté čekání vláken na zámek bez CPU aktivity."
    ],
    "correctOption": 0
  },
  {
    "id": 243,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Jak poznat allocation pressure?",
    "answer": "Heap má pilovitý tvar, GC běží často a sampler ukazuje velké množství krátkodobých objektů.",
    "keywords": [
      "allocation pressure",
      "pilovitý heap",
      "GC",
      "krátkodobé objekty"
    ],
    "options": [
      "Allocation pressure poznáš podle časté GC a velkého množství krátkodobých objektů.",
      "Allocation pressure znamená vysoké CPU bez alokací.",
      "Allocation pressure se týká pouze síťových socketů.",
      "Allocation pressure je stav, kdy se nepoužívá heap."
    ],
    "correctOption": 0
  },
  {
    "id": 244,
    "category": "memory",
    "type": "theory",
    "difficulty": "hard",
    "question": "Jak poznat lock contention?",
    "answer": "CPU nemusí být vysoké, ale hodně vláken čeká ve stavu BLOCKED nebo WAITING na stejný zámek.",
    "keywords": [
      "lock contention",
      "BLOCKED",
      "WAITING",
      "zámek"
    ],
    "options": [
      "Lock contention je vysoký počet alokací krátkodobých objektů.",
      "Lock contention poznáš podle vláken BLOCKED/WAITING na stejném zámku.",
      "Lock contention znamená, že JVM nemá dost tříd v classpath.",
      "Lock contention znamená špatně zapsaný ternární operátor."
    ],
    "correctOption": 1
  },
  {
    "id": 245,
    "category": "modern",
    "type": "code",
    "difficulty": "medium",
    "question": "Co jsou records?",
    "answer": "record je stručný zápis immutable datové třídy. Automaticky generuje konstruktor, gettery (ve formě name()), equals(), hashCode() a toString().",
    "keywords": [
      "record",
      "immutable",
      "datová třída",
      "equals",
      "hashCode"
    ],
    "codeExample": "record Person(String name, int age) {\n}",
    "options": [
      "record je speciální druh vlákna pro paralelní programování.",
      "record je kolekce s přístupem přes index.",
      "record je stručná immutable datová třída s generovaným konstruktorem, equals/hashCode/toString.",
      "record je ruční náhrada garbage collectoru."
    ],
    "correctOption": 2
  },
  {
    "id": 246,
    "category": "modern",
    "type": "code",
    "difficulty": "medium",
    "question": "K čemu jsou lambda funkce?",
    "answer": "Lambda je stručný zápis anonymní funkce pro funkcionální rozhraní.",
    "keywords": [
      "lambda",
      "anonymní funkce",
      "funkcionální rozhraní"
    ],
    "codeExample": "list.forEach(x -> System.out.println(x));",
    "options": [
      "Lambda je stručný zápis anonymní funkce pro funkcionální rozhraní.",
      "Lambda je třída, která může dědit z více tříd.",
      "Lambda je typ checked výjimky.",
      "Lambda je příkaz pro spuštění JVM."
    ],
    "correctOption": 0
  },
  {
    "id": 247,
    "category": "modern",
    "type": "theory",
    "difficulty": "medium",
    "question": "Co je funkcionální rozhraní?",
    "answer": "Rozhraní s jednou abstraktní metodou. Příklady: Runnable, Predicate, Function, Consumer, Supplier.",
    "keywords": [
      "funkcionální rozhraní",
      "jedna abstraktní metoda",
      "Predicate",
      "Function"
    ],
    "options": [
      "Rozhraní s jedinou abstraktní metodou (lze použít s lambdou)",
      "Rozhraní bez jakékoliv metody",
      "Rozhraní s alespoň dvěma abstraktními metodami",
      "Třída, která dědí z více rozhraní"
    ],
    "correctOption": 0
  },
  {
    "id": 248,
    "category": "modern",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je Stream API?",
    "answer": "API pro funkcionální zpracování kolekcí. Příklady operací: map, filter, reduce, forEach, collect.",
    "keywords": [
      "Stream API",
      "map",
      "filter",
      "reduce",
      "collect"
    ],
    "codeExample": "list.stream()\n    .filter(x -> x > 0)\n    .map(x -> x * 2)\n    .collect(Collectors.toList());",
    "options": [
      "Stream API je náhrada za všechny kolekce a ukládá data samo trvale.",
      "Stream API slouží jen ke čtení binárních souborů po bajtech.",
      "Stream API slouží k funkcionálnímu zpracování dat přes map/filter/reduce/collect.",
      "Stream API je protokol pro síťovou komunikaci přes TCP."
    ],
    "correctOption": 2
  },
  {
    "id": 249,
    "category": "modern",
    "type": "code",
    "difficulty": "medium",
    "question": "Co je pattern matching?",
    "answer": "Moderní zápis pro bezpečné testování a rozklad objektů (např. instanceof s vazbou na proměnnou).",
    "keywords": [
      "pattern matching",
      "instanceof",
      "rozklad objektů"
    ],
    "codeExample": "if (obj instanceof String s) {\n    System.out.println(s.length());\n}",
    "options": [
      "Pattern matching je automatické řazení kolekce TreeSet.",
      "Pattern matching je způsob serializace objektů do souboru.",
      "Pattern matching znamená porovnání textu pouze přes ==.",
      "Pattern matching umožňuje bezpečné testování a rozklad objektů, např. instanceof s proměnnou."
    ],
    "correctOption": 3
  },
  {
    "id": 250,
    "category": "modern",
    "type": "code",
    "difficulty": "hard",
    "question": "Co jsou sealed classes?",
    "answer": "sealed omezuje, které třídy mohou dědit z dané třídy. Potomek musí být final, sealed nebo non-sealed.",
    "keywords": [
      "sealed",
      "permits",
      "omezení dědičnosti",
      "non-sealed"
    ],
    "codeExample": "sealed class Shape permits Circle, Rectangle {\n}",
    "options": [
      "sealed class je vždy anonymní vnitřní třída.",
      "sealed class lze dědit libovolnou třídou bez omezení.",
      "sealed class automaticky implementuje Serializable.",
      "sealed class omezuje, které třídy ji smějí dědit."
    ],
    "correctOption": 3
  },
  {
    "id": 251,
    "category": "modern",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co jsou virtual threads?",
    "answer": "Lehká vlákna spravovaná JVM. Jsou levnější než klasická platform threads a hodí se pro velké množství blokujících úloh.",
    "keywords": [
      "virtual threads",
      "lehká vlákna",
      "JVM",
      "blokující úlohy"
    ],
    "options": [
      "Virtual threads jsou fyzická vlákna OS dražší než platform threads.",
      "Virtual threads nahrazují potřebu synchronizace objektů.",
      "Virtual threads jsou lehká vlákna spravovaná JVM pro mnoho blokujících úloh.",
      "Virtual threads jsou pouze vlákna vytvořená v GUI EDT."
    ],
    "correctOption": 2
  },
  {
    "id": 252,
    "category": "modern",
    "type": "trap",
    "difficulty": "hard",
    "question": "Jaký je rozdíl mezi platform thread a virtual thread?",
    "answer": "Platform thread je vlákno OS — je dražší. Virtual thread spravuje JVM — je lehký a vhodný pro mnoho souběžných požadavků.",
    "keywords": [
      "platform thread",
      "virtual thread",
      "OS",
      "JVM"
    ],
    "options": [
      "Platform thread = vlákno OS (drahé); virtual thread = lehké, spravuje JVM",
      "Platform thread = lehké JVM vlákno; virtual thread = vlákno OS",
      "Oba jsou totožné, jen jinak pojmenované",
      "Virtual thread běží mimo JVM v nativním kódu"
    ],
    "correctOption": 0
  },
  {
    "id": 253,
    "category": "modern",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co jsou Scoped Values?",
    "answer": "Scoped Values umožňují bezpečně sdílet immutable hodnotu v definovaném rozsahu, například mezi rodičovským vláknem a jeho podúlohami.",
    "keywords": [
      "Scoped Values",
      "immutable",
      "rozsah",
      "sdílení hodnoty"
    ],
    "options": [
      "Scoped Values slouží k serializaci objektů přes ObjectOutputStream.",
      "Scoped Values jsou nový typ kolekce List.",
      "Scoped Values bezpečně sdílejí immutable hodnotu v definovaném rozsahu.",
      "Scoped Values jsou mutable globální proměnné pro všechna vlákna."
    ],
    "correctOption": 2
  },
  {
    "id": 254,
    "category": "modern",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co jsou flexible constructors?",
    "answer": "Novější možnost Javy dovolující provést některé příkazy před voláním super() v konstruktoru. Smysl: validace parametrů dříve, než se inicializuje předek.",
    "keywords": [
      "flexible constructors",
      "super()",
      "validace parametrů"
    ],
    "options": [
      "Flexible constructors dovolují některé příkazy před super(), např. validaci parametrů.",
      "Flexible constructors dovolují konstruktoru mít libovolný návratový typ.",
      "Flexible constructors znamenají, že konstruktor se dědí jako běžná metoda.",
      "Flexible constructors ruší povinnost konstruktoru mít stejné jméno jako třída."
    ],
    "correctOption": 0
  },
  {
    "id": 255,
    "category": "modern",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je Vector API?",
    "answer": "API pro SIMD výpočty, tedy zpracování více hodnot jednou instrukcí procesoru.",
    "keywords": [
      "Vector API",
      "SIMD",
      "vektorové výpočty"
    ],
    "options": [
      "Vector API je socketové API pro UDP datagramy.",
      "Vector API slouží pro SIMD výpočty více hodnot jednou instrukcí.",
      "Vector API je kolekce nahrazující ArrayList.",
      "Vector API slouží k vykreslování Swing komponent."
    ],
    "correctOption": 1
  },
  {
    "id": 256,
    "category": "modern",
    "type": "theory",
    "difficulty": "hard",
    "question": "Co je GraalVM Native Image?",
    "answer": "Ahead-of-time kompilace Java aplikace do nativního executable. Výhoda je rychlý start a menší runtime overhead. Nevýhoda je složitější build a omezení dynamických vlastností jako reflexe.",
    "keywords": [
      "GraalVM",
      "Native Image",
      "AOT",
      "nativní executable",
      "reflexe"
    ],
    "options": [
      "GraalVM Native Image AOT přeloží Java aplikaci do nativního executable.",
      "GraalVM Native Image je interpret bytecodu bez kompilace.",
      "GraalVM Native Image slouží jen k tvorbě Swing layoutů.",
      "GraalVM Native Image automaticky odstraní všechny limity reflexe."
    ],
    "correctOption": 0
  },
  {
    "id": 257,
    "category": "traps",
    "type": "trap",
    "difficulty": "medium",
    "question": "Interface metoda bez public v implementaci — co platí?",
    "answer": "Metody rozhraní jsou z definice veřejné, proto metoda let() v implementaci MUSÍ být public. Pokud public chybí, kód se NEzkompiluje. Nejde o overloading, ale o implementaci (přepsání) metody.",
    "keywords": [
      "interface",
      "public",
      "implementace",
      "overloading"
    ],
    "commonMistakes": "Pravda: metody interface jsou veřejné; implementace musí být public. Nepravda: že se to zkompiluje, nebo že jde o overloading.",
    "codeExample": "interface Letoun {\n    void let();\n}\n// Nezkompiluje se – chybí public:\nclass Letadlo implements Letoun {\n    void let() {\n        System.out.println(\"Letím\");\n    }\n}",
    "options": [
      "Metoda z interface je public; implementace musí být public a nejde o overloading.",
      "Jde o overloading, protože metoda v interface nemá tělo.",
      "Kód se zkompiluje, protože implementace může mít default viditelnost.",
      "Metody v interface jsou implicitně private, proto public není potřeba."
    ],
    "correctOption": 0
  },
  {
    "id": 258,
    "category": "traps",
    "type": "trap",
    "difficulty": "medium",
    "question": "List vs Set chyták — co platí?",
    "answer": "Pravda: List umožňuje přístup přes index, Set obecně ne; Set nedovoluje duplicity, List ano. Nepravda: že Set vždy zachovává pořadí vložení (HashSet ne), nebo že List je vždy synchronizovaný.",
    "keywords": [
      "List",
      "Set",
      "index",
      "duplicity",
      "synchronizace"
    ],
    "commonMistakes": "Set NEzachovává pořadí vždy (jen LinkedHashSet). ArrayList NENÍ synchronizovaný.",
    "options": [
      "List má indexy a dovoluje duplicity; Set duplicity nedovoluje a obecně nemá indexy.",
      "List i Set zakazují duplicity a liší se jen názvem.",
      "List je vždy synchronizovaný, Set nikdy synchronizovaný není.",
      "Set vždy zachovává pořadí vložení a List nikdy ne."
    ],
    "correctOption": 0
  },
  {
    "id": 259,
    "category": "traps",
    "type": "trap",
    "difficulty": "medium",
    "question": "Vícenásobná dědičnost chyták — co platí?",
    "answer": "Pravda: Java neumožňuje vícenásobnou dědičnost tříd, ale umožňuje implementovat více rozhraní. Nepravda: že vícenásobná dědičnost znamená vytvoření více instancí jedné třídy.",
    "keywords": [
      "vícenásobná dědičnost",
      "interface",
      "třídy"
    ],
    "commonMistakes": "Vícenásobná dědičnost = dědit z více tříd (Java to u tříd neumí), NE vytvoření více instancí.",
    "options": [
      "Java neumí vícenásobnou dědičnost tříd, ale umí implementovat více interface.",
      "Java podporuje dědění z více tříd pomocí extends A, B.",
      "Interface nelze v Javě implementovat více než jeden.",
      "Vícenásobná dědičnost znamená vytvořit více objektů stejné třídy."
    ],
    "correctOption": 0
  },
  {
    "id": 260,
    "category": "traps",
    "type": "trap",
    "difficulty": "medium",
    "question": "Race condition chyták — jaký je rozdíl od deadlocku a starvation?",
    "answer": "Race condition není totéž co deadlock. Race condition = výsledek závisí na pořadí běhu vláken. Deadlock = vlákna na sebe čekají a nic nepokračuje. Starvation = vlákno se dlouhodobě nedostane ke zdroji.",
    "keywords": [
      "race condition",
      "deadlock",
      "starvation",
      "rozdíl"
    ],
    "options": [
      "Race condition = výsledek závisí na pořadí vláken (ne deadlock ani starvation)",
      "Race condition = vlákna na sebe navzájem čekají",
      "Race condition = vlákno se nedostane ke zdroji",
      "Race condition a deadlock jsou synonyma"
    ],
    "correctOption": 0
  },
  {
    "id": 261,
    "category": "traps",
    "type": "trap",
    "difficulty": "medium",
    "question": "RuntimeException chyták — co platí?",
    "answer": "Správně: RuntimeException se povinně ošetřovat nemusí; lze ji zachytit, ale lepší je jí předcházet validací a správným stavem programu. Špatně: že se RuntimeException vždy musí ošetřit try-catch.",
    "keywords": [
      "RuntimeException",
      "unchecked",
      "try-catch",
      "validace"
    ],
    "commonMistakes": "RuntimeException (unchecked) NEmusíš povinně ošetřovat – to platí jen pro checked výjimky.",
    "options": [
      "RuntimeException není povinně ošetřovaná; lepší je jí předcházet validací.",
      "RuntimeException se vždy musí zachytit try-catch, jinak kód nejde přeložit.",
      "RuntimeException je checked výjimka deklarovaná povinně přes throws.",
      "RuntimeException nelze nikdy zachytit, protože ji řeší jen JVM."
    ],
    "correctOption": 0
  },
  {
    "id": 262,
    "category": "traps",
    "type": "trap",
    "difficulty": "easy",
    "question": "Celočíselné typy chyták — které existují v Javě?",
    "answer": "Správně: byte, short, int, long (doplňkově char). Špatně: long long, unsigned int — ty v Javě neexistují.",
    "keywords": [
      "byte",
      "short",
      "int",
      "long",
      "char",
      "unsigned"
    ],
    "commonMistakes": "Java nemá 'long long' ani 'unsigned int'.",
    "options": [
      "byte, short, int, long (a char) – ano; long long, unsigned int – ne",
      "byte, int, long, long long",
      "int, uint, long, ulong",
      "pouze int a long"
    ],
    "correctOption": 0
  },
  {
    "id": 263,
    "category": "traps",
    "type": "trap",
    "difficulty": "easy",
    "question": "throws vs throw — jaký je rozdíl?",
    "answer": "throw skutečně vyhazuje výjimku (throw new IOException();). throws v hlavičce metody jen říká, že metoda může výjimku vyhodit (void read() throws IOException).",
    "keywords": [
      "throw",
      "throws",
      "rozdíl",
      "výjimka"
    ],
    "commonMistakes": "throw = vyhození výjimky (příkaz); throws = deklarace v hlavičce metody. Nejsou totéž.",
    "codeExample": "throw new IOException();        // vyhodí výjimku\nvoid read() throws IOException  // deklaruje možnou výjimku",
    "options": [
      "throw se používá jen pro checked výjimky, throws jen pro RuntimeException.",
      "throw výjimku vyhazuje; throws jen deklaruje možnou výjimku v hlavičce metody.",
      "throws výjimku vyhazuje v těle metody a throw ji deklaruje v hlavičce.",
      "throw a throws jsou synonyma a lze je libovolně zaměnit."
    ],
    "correctOption": 1
  },
  {
    "id": 264,
    "category": "traps",
    "type": "trap",
    "difficulty": "easy",
    "question": "array.length vs String.length() vs List.size() — co je správně?",
    "answer": "U pole: array.length (atribut, bez závorek). U Stringu: string.length() (metoda). U kolekce: list.size() (metoda).",
    "keywords": [
      "length",
      "size",
      "pole",
      "String",
      "List"
    ],
    "commonMistakes": "Pole = .length (bez závorek); String = .length(); kolekce = .size().",
    "codeExample": "array.length     // pole – atribut\nstring.length()  // String – metoda\nlist.size()      // kolekce – metoda",
    "options": [
      "pole: .length | String: .length() | kolekce: .size()",
      "pole: .length() | String: .size() | kolekce: .length",
      "vše používá .size()",
      "vše používá .length()"
    ],
    "correctOption": 0
  },
  {
    "id": 265,
    "category": "traps",
    "type": "trap",
    "difficulty": "easy",
    "question": "== vs equals() — jaký je rozdíl?",
    "answer": "== u objektů porovnává reference (identitu). equals() porovnává logickou rovnost podle implementace (obsah).",
    "keywords": [
      "==",
      "equals",
      "reference",
      "logická rovnost"
    ],
    "commonMistakes": "== porovnává reference, ne obsah. Pro porovnání obsahu objektů použij equals().",
    "options": [
      "== porovnává reference; equals() porovnává logickou rovnost (obsah)",
      "== porovnává obsah; equals() porovnává reference",
      "Oba porovnávají reference",
      "Oba porovnávají obsah"
    ],
    "correctOption": 0
  },
  {
    "id": 266,
    "category": "traps",
    "type": "trap",
    "difficulty": "easy",
    "question": "final chyták — co final znamená u třídy, metody a proměnné?",
    "answer": "final class nelze dědit. final method nelze přepsat. final variable nelze znovu přiřadit.",
    "keywords": [
      "final",
      "třída",
      "metoda",
      "proměnná"
    ],
    "commonMistakes": "final má tři významy podle kontextu: třída (nelze dědit), metoda (nelze přepsat), proměnná (nelze přeřadit).",
    "codeExample": "final class A {}        // nelze dědit\nfinal void m() {}       // nelze přepsat\nfinal int x = 5;        // nelze znovu přiřadit",
    "options": [
      "final class nelze dědit, final method přepsat, final proměnnou znovu přiřadit.",
      "final method lze přepsat, ale nelze ji přetížit.",
      "final proměnná se může měnit, pokud je private.",
      "final class je automaticky abstraktní a musí se dědit."
    ],
    "correctOption": 0
  }
];

const TRUE_FALSE = [
  {
    "statement": "Metody v interface jsou implicitně public.",
    "isTrue": true,
    "explanation": "Ano. I bez napsaného modifikátoru jsou metody rozhraní veřejné.",
    "category": "inheritance"
  },
  {
    "statement": "Implementace metody z interface může mít nižší viditelnost než public.",
    "isTrue": false,
    "explanation": "Nepravda. Implementace nesmí snížit viditelnost – musí být public, jinak se kód nezkompiluje.",
    "category": "inheritance"
  },
  {
    "statement": "Implementace metody z rozhraní je overloading.",
    "isTrue": false,
    "explanation": "Nepravda. Je to implementace (přepsání), ne overloading.",
    "category": "inheritance"
  },
  {
    "statement": "List umožňuje přístup přes index.",
    "isTrue": true,
    "explanation": "Ano. List je uspořádaná posloupnost s přístupem přes index.",
    "category": "generics"
  },
  {
    "statement": "Set obecně neumožňuje přístup přes index.",
    "isTrue": true,
    "explanation": "Ano. Set je množina a obecně nemá indexy.",
    "category": "generics"
  },
  {
    "statement": "Set dovoluje duplicitní prvky.",
    "isTrue": false,
    "explanation": "Nepravda. Set duplicity nedovoluje. Duplicity dovoluje List.",
    "category": "generics"
  },
  {
    "statement": "HashSet vždy zachovává pořadí vložení.",
    "isTrue": false,
    "explanation": "Nepravda. HashSet pořadí nezaručuje. Pořadí vložení zachovává LinkedHashSet.",
    "category": "generics"
  },
  {
    "statement": "Map je potomkem rozhraní Collection.",
    "isTrue": false,
    "explanation": "Nepravda. Map není potomkem Collection, ale patří do Collections Frameworku.",
    "category": "generics"
  },
  {
    "statement": "Java neumožňuje vícenásobnou dědičnost tříd.",
    "isTrue": true,
    "explanation": "Ano. Třída může dědit jen z jedné třídy.",
    "category": "inheritance"
  },
  {
    "statement": "Java umožňuje implementovat více rozhraní.",
    "isTrue": true,
    "explanation": "Ano. Třída může implementovat libovolný počet rozhraní.",
    "category": "inheritance"
  },
  {
    "statement": "RuntimeException se musí povinně ošetřit pomocí try-catch.",
    "isTrue": false,
    "explanation": "Nepravda. RuntimeException (unchecked) se ošetřovat nemusí. Povinné je to jen pro checked výjimky.",
    "category": "exceptions"
  },
  {
    "statement": "Checked výjimku je nutné ošetřit nebo deklarovat pomocí throws.",
    "isTrue": true,
    "explanation": "Ano. Jinak nastane chyba překladu.",
    "category": "exceptions"
  },
  {
    "statement": "throw a throws znamenají totéž.",
    "isTrue": false,
    "explanation": "Nepravda. throw vyhazuje výjimku; throws v hlavičce deklaruje, že metoda může výjimku vyhodit.",
    "category": "exceptions"
  },
  {
    "statement": "Délku pole zjistíme pomocí array.length (bez závorek).",
    "isTrue": true,
    "explanation": "Ano. length je atribut pole, ne metoda.",
    "category": "types"
  },
  {
    "statement": "Délku Stringu zjistíme pomocí string.length().",
    "isTrue": true,
    "explanation": "Ano. U Stringu je length() metoda (se závorkami).",
    "category": "types"
  },
  {
    "statement": "Počet prvků kolekce zjistíme pomocí list.length.",
    "isTrue": false,
    "explanation": "Nepravda. U kolekce se používá metoda size(), tedy list.size().",
    "category": "generics"
  },
  {
    "statement": "Operátor == u objektů porovnává jejich obsah.",
    "isTrue": false,
    "explanation": "Nepravda. == porovnává reference (identitu). Obsah porovnává equals().",
    "category": "traps"
  },
  {
    "statement": "Java má typy long long a unsigned int.",
    "isTrue": false,
    "explanation": "Nepravda. Tyto typy v Javě neexistují. Celočíselné typy jsou byte, short, int, long (a char).",
    "category": "types"
  },
  {
    "statement": "Deadlock a race condition jsou totéž.",
    "isTrue": false,
    "explanation": "Nepravda. Race condition = výsledek závisí na pořadí vláken; deadlock = vlákna na sebe vzájemně čekají.",
    "category": "threads"
  },
  {
    "statement": "Starvation znamená, že se vlákno dlouhodobě nedostane ke zdroji.",
    "isTrue": true,
    "explanation": "Ano. To je přesná definice starvation.",
    "category": "threads"
  },
  {
    "statement": "Java je silně typovaný jazyk.",
    "isTrue": true,
    "explanation": "Ano. Java je silně typovaná. Slabě typované jsou např. JavaScript nebo PHP.",
    "category": "algorithms"
  },
  {
    "statement": "Pokud přepíšeme equals(), měli bychom přepsat i hashCode().",
    "isTrue": true,
    "explanation": "Ano. Stejné objekty dle equals() musí mít stejný hashCode() kvůli HashMap/HashSet.",
    "category": "inheritance"
  },
  {
    "statement": "Z final třídy lze dědit.",
    "isTrue": false,
    "explanation": "Nepravda. Z final třídy dědit nelze (např. String).",
    "category": "oop"
  },
  {
    "statement": "final metodu nelze přepsat (override).",
    "isTrue": true,
    "explanation": "Ano. final metoda nemůže být přepsána v potomkovi.",
    "category": "oop"
  },
  {
    "statement": "Zásobník pracuje na principu LIFO.",
    "isTrue": true,
    "explanation": "Ano. Zásobník = Last In, First Out.",
    "category": "algorithms"
  },
  {
    "statement": "Fronta pracuje na principu LIFO.",
    "isTrue": false,
    "explanation": "Nepravda. Fronta je FIFO (First In, First Out). LIFO je zásobník.",
    "category": "algorithms"
  },
  {
    "statement": "TCP je nespojovaný a nespolehlivý protokol.",
    "isTrue": false,
    "explanation": "Nepravda. TCP je spojovaný a spolehlivý. Nespojovaný a nespolehlivý je UDP.",
    "category": "network"
  },
  {
    "statement": "UDP nezaručuje doručení ani pořadí dat.",
    "isTrue": true,
    "explanation": "Ano. UDP je nespojovaný, nespolehlivý a používá datagramy.",
    "category": "network"
  },
  {
    "statement": "Generika v Javě mohou přímo používat primitivní typy, např. List<int>.",
    "isTrue": false,
    "explanation": "Nepravda. Musí se použít wrapper třída, např. List<Integer>.",
    "category": "generics"
  },
  {
    "statement": "Objekt je odstraněn GC podle své užitečnosti.",
    "isTrue": false,
    "explanation": "Nepravda. GC řeší dosažitelnost z GC roots, ne užitečnost.",
    "category": "memory"
  },
  {
    "statement": "Instanční proměnné objektu jsou uloženy na heapu.",
    "isTrue": true,
    "explanation": "Ano. Objekt i jeho instanční proměnné jsou na heapu; reference bývají na stacku.",
    "category": "memory"
  },
  {
    "statement": "Virtual thread je vlákno operačního systému.",
    "isTrue": false,
    "explanation": "Nepravda. Virtual thread spravuje JVM a je lehký; vlákno OS je platform thread.",
    "category": "modern"
  },
  {
    "statement": "record automaticky generuje equals(), hashCode() a toString().",
    "isTrue": true,
    "explanation": "Ano. record generuje konstruktor, gettery, equals(), hashCode() i toString().",
    "category": "modern"
  },
  {
    "statement": "Dlouhý výpočet je vhodné spustit přímo v GUI vlákně (EDT).",
    "isTrue": false,
    "explanation": "Nepravda. Zablokoval by GUI. Použij vlákno na pozadí / SwingWorker.",
    "category": "gui"
  }
];

/* Export do globálního prostoru pro script.js */
if (typeof window !== "undefined") {
  window.CATEGORIES = CATEGORIES;
  window.QUESTIONS = QUESTIONS;
  window.TRUE_FALSE = TRUE_FALSE;
}
