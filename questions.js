/* ==========================================================================
   PJV / Java — datová sada otázek ke zkoušce
   Každá otázka: id, category, question, answer, keywords, difficulty, type
   Volitelně: codeExample, commonMistakes, options, correctOption
   ========================================================================== */

const CATEGORIES = [
  { key: "jvm",         label: "Java, JVM, kompilace, běh",            color: "#e25555" },
  { key: "types",       label: "Základní typy, výrazy, pole",          color: "#e2913a" },
  { key: "oop",         label: "Třídy, objekty, OOP základy",          color: "#d9b13b" },
  { key: "inheritance", label: "Dědičnost, polymorfismus, interface",  color: "#7fb83a" },
  { key: "object",      label: "Třída Object",                         color: "#3ab87f" },
  { key: "packages",    label: "Balíky, čitelnost, návrh",             color: "#3ab8b0" },
  { key: "exceptions",  label: "Výjimky",                              color: "#3a8fe2" },
  { key: "enum",        label: "Enum",                                 color: "#5a6fe2" },
  { key: "generics",    label: "Generika, kolekce",                    color: "#8a5ae2" },
  { key: "io",          label: "Soubory, proudy, serializace",         color: "#b85ae2" },
  { key: "gui",         label: "GUI, Swing, MVC, události",            color: "#e25ab8" },
  { key: "threads",     label: "Vlákna, paralelismus, synchronizace",  color: "#e25a7f" },
  { key: "network",     label: "Síťování, sockety, protokoly",         color: "#c77b4a" },
  { key: "algorithms",  label: "Algoritmy, datové struktury",          color: "#6a9a4a" },
  { key: "memory",      label: "Paměť, GC, JVM výkon",                 color: "#4a9a9a" },
  { key: "modern",      label: "Moderní Java",                         color: "#9a4a9a" },
  { key: "traps",       label: "Pravda/nepravda a chytáky",            color: "#c0392b" }
];

const QUESTIONS = [
  /* ===================== 1. Java, JVM, kompilace, běh ===================== */
  {
    id: 1, category: "jvm", type: "theory", difficulty: "easy",
    question: "Co je bytecode a k čemu se používá?",
    answer: "Bytecode je mezikód vzniklý překladem .java souboru. Je uložen v .class souboru a vykonává ho JVM. Díky bytecodu je Java přenositelná mezi platformami (write once, run anywhere).",
    keywords: ["bytecode", ".class", "JVM", "přenositelnost"],
    options: [
      "Mezikód v .class souboru, který vykonává JVM; zajišťuje přenositelnost",
      "Strojový kód konkrétního procesoru vzniklý překladem",
      "Zdrojový kód v .java souboru před překladem",
      "Textový formát pro ukládání konfigurace aplikace"
    ],
    correctOption: 0
  },
  {
    id: 2, category: "jvm", type: "theory", difficulty: "easy",
    question: "Co je JVM?",
    answer: "JVM (Java Virtual Machine) je běhové prostředí, které spouští Java bytecode. Zajišťuje interpretaci, JIT kompilaci, správu paměti, garbage collection a běh programu na konkrétní platformě.",
    keywords: ["JVM", "běhové prostředí", "JIT", "garbage collection"],
    options: [
      "Běhové prostředí spouštějící bytecode (interpretace, JIT, GC)",
      "Editor zdrojového kódu Javy",
      "Nástroj, který překládá .java na .class",
      "Knihovna standardních tříd Javy"
    ],
    correctOption: 0
  },
  {
    id: 3, category: "jvm", type: "code", difficulty: "easy",
    question: "Jak probíhá kompilace v Javě?",
    answer: "Zdrojový soubor .java se pomocí javac přeloží do .class souboru, který obsahuje bytecode. Bytecode potom spouští JVM.",
    keywords: ["javac", "kompilace", ".class", "bytecode"],
    codeExample: "javac Main.java\njava Main"
  },
  {
    id: 4, category: "jvm", type: "code", difficulty: "easy",
    question: "Jak probíhá start programu v Javě?",
    answer: "Spustí se JVM, načte zadanou třídu a hledá metodu public static void main(String[] args). Od této metody začíná běh programu.",
    keywords: ["main", "start", "vstupní bod"],
    codeExample: "public static void main(String[] args)"
  },
  {
    id: 5, category: "jvm", type: "theory", difficulty: "easy",
    question: "Co je nutné specifikovat při spuštění konkrétní třídy v Javě?",
    answer: "Třída musí obsahovat metodu public static void main(String[] args). Při spuštění se zadá jméno třídy, která tuto metodu obsahuje.",
    keywords: ["main", "spuštění třídy"],
    codeExample: "public static void main(String[] args)"
  },
  {
    id: 6, category: "jvm", type: "theory", difficulty: "easy",
    question: "Jaký je rozdíl mezi jménem třídy a plným jménem třídy?",
    answer: "Jméno třídy je pouze název třídy, např. User. Plné jméno třídy (fully qualified name) obsahuje i balík, např. cz.cvut.fel.User.",
    keywords: ["jméno třídy", "fully qualified name", "balík"],
    codeExample: "cz.cvut.fel.User"
  },
  {
    id: 7, category: "jvm", type: "code", difficulty: "easy",
    question: "Jak se v Javě zapisují jména tříd?",
    answer: "Jména tříd se píší v PascalCase, tedy první písmeno velké a každé další slovo také velkým písmenem.",
    keywords: ["PascalCase", "konvence", "názvy tříd"],
    codeExample: "class MyClass {\n}"
  },
  {
    id: 8, category: "jvm", type: "theory", difficulty: "easy",
    question: "Co jsou nástroje na řízení překladu zdrojových souborů v Javě?",
    answer: "Jsou to nástroje pro sestavení projektu (build tools), správu závislostí a spuštění testů. Příklady: Maven, Gradle, Ant.",
    keywords: ["build", "Maven", "Gradle", "Ant", "závislosti"],
    options: [
      "Maven, Gradle, Ant – build nástroje a správa závislostí",
      "javac, java, jar – součásti JDK",
      "JUnit, Mockito – testovací knihovny",
      "Eclipse, IntelliJ – vývojová prostředí"
    ],
    correctOption: 0
  },
  {
    id: 9, category: "jvm", type: "theory", difficulty: "medium",
    question: "Co je JIT kompilace?",
    answer: "JIT (Just-In-Time compilation) znamená, že JVM za běhu programu překládá často používané části bytecodu do nativního strojového kódu. Tím může výrazně zrychlit běh programu.",
    keywords: ["JIT", "Just-In-Time", "nativní kód", "optimalizace"],
    options: [
      "JVM za běhu překládá horké části bytecodu do nativního kódu",
      "Překlad .java na .class před spuštěním",
      "Předběžný překlad celé aplikace do nativního executable",
      "Interpretace bytecodu řádek po řádku bez optimalizace"
    ],
    correctOption: 0
  },
  {
    id: 10, category: "jvm", type: "theory", difficulty: "medium",
    question: "Proč se výkonnost Java programu může lišit po spuštění a po delším běhu?",
    answer: "Na začátku probíhá class loading, interpretace a JIT warmup. Po určité době JVM pozná často používané (horké) části kódu a optimalizuje je, takže program postupně zrychluje.",
    keywords: ["warmup", "JIT", "class loading", "výkon"]
  },

  /* ===================== 2. Základní typy, výrazy, pole ===================== */
  {
    id: 11, category: "types", type: "theory", difficulty: "easy",
    question: "Jaké znáte celočíselné typy v Javě?",
    answer: "byte, short, int, long. Dále char je znakový typ, ale vnitřně je celočíselný unsigned 16bitový typ. Pozor: Java nemá long long ani běžné unsigned varianty pro byte, short, int, long.",
    keywords: ["byte", "short", "int", "long", "char", "celočíselné typy"],
    commonMistakes: "Java nemá 'long long' ani 'unsigned int'. char je sice unsigned 16bit, ale je to znakový typ.",
    options: [
      "byte, short, int, long (a char jako unsigned 16bit)",
      "byte, int, long, long long",
      "int, uint, long, ulong",
      "short, int, float, long"
    ],
    correctOption: 0
  },
  {
    id: 12, category: "types", type: "theory", difficulty: "easy",
    question: "Jaké znáte neceločíselné číselné typy v Javě?",
    answer: "float a double. Pro přesné desetinné výpočty, například peníze, se používá BigDecimal.",
    keywords: ["float", "double", "BigDecimal", "desetinná čísla"]
  },
  {
    id: 13, category: "types", type: "theory", difficulty: "easy",
    question: "Jaké znáte nečíselné primitivní datové typy?",
    answer: "boolean a char.",
    keywords: ["boolean", "char", "primitivní typy"]
  },
  {
    id: 14, category: "types", type: "theory", difficulty: "medium",
    question: "Jak je reprezentován neceločíselný typ v Javě?",
    answer: "Typy float a double jsou reprezentovány podle standardu IEEE 754. float má 32 bitů, double má 64 bitů.",
    keywords: ["IEEE 754", "float", "double", "32 bitů", "64 bitů"]
  },
  {
    id: 15, category: "types", type: "theory", difficulty: "medium",
    question: "Jak je reprezentován typ double v Javě?",
    answer: "double je 64bitové číslo podle IEEE 754: 1 bit znaménko, 11 bitů exponent, 52 bitů mantisa.",
    keywords: ["double", "IEEE 754", "mantisa", "exponent", "znaménko"],
    codeExample: "1 bit  znaménko\n11 bitů exponent\n52 bitů mantisa"
  },
  {
    id: 16, category: "types", type: "theory", difficulty: "medium",
    question: "Jak vypadá reprezentace reálných čísel v počítači?",
    answer: "Reálná čísla jsou obvykle reprezentována ve floating-point tvaru: znaménko + mantisa + exponent. V Javě podle standardu IEEE 754.",
    keywords: ["floating-point", "mantisa", "exponent", "IEEE 754"]
  },
  {
    id: 17, category: "types", type: "code", difficulty: "easy",
    question: "Jak se v Javě zapisují textové řetězce?",
    answer: "Textové řetězce se zapisují do dvojitých uvozovek. Uvozovky uvnitř řetězce se escapují zpětným lomítkem.",
    keywords: ["String", "uvozovky", "escape"],
    codeExample: "String s = \"Ahoj\";\nString s2 = \"Řekl: \\\"Ahoj\\\"\";"
  },
  {
    id: 18, category: "types", type: "code", difficulty: "easy",
    question: "Jak se v Javě deklaruje pole hodnot?",
    answer: "Pole lze deklarovat třemi způsoby: zadáním velikosti přes new, inicializačním seznamem, nebo kombinací new s inicializátorem.",
    keywords: ["pole", "array", "new", "deklarace"],
    codeExample: "int[] a = new int[20];\nint[] b = {1, 2, 3};\nint[] c = new int[]{1, 2, 3};"
  },
  {
    id: 19, category: "types", type: "code", difficulty: "easy",
    question: "Jak se v Javě vytvoří pole polí?",
    answer: "Dvojrozměrné pole (pole polí) se vytvoří uvedením dvou rozměrů přes new, nebo vnořeným inicializačním seznamem.",
    keywords: ["2D pole", "matice", "pole polí"],
    codeExample: "int[][] matrix = new int[2][3];\n\nint[][] m2 = {\n    {1, 2},\n    {3, 4}\n};"
  },
  {
    id: 20, category: "types", type: "trap", difficulty: "easy",
    question: "Jak zjistíme délku pole statické délky?",
    answer: "Pomocí atributu array.length. Pozor: bez závorek — není to metoda, je to veřejný atribut pole.",
    keywords: ["length", "délka pole", "atribut"],
    commonMistakes: "array.length je atribut (bez závorek), kdežto String.length() a List.size() jsou metody (se závorkami).",
    codeExample: "array.length"
  },
  {
    id: 21, category: "types", type: "theory", difficulty: "easy",
    question: "Co je výraz v Javě?",
    answer: "Výraz je kombinace operandů a operátorů, která má hodnotu. Výraz může obsahovat proměnné, literály, volání metod a operátory.",
    keywords: ["výraz", "operand", "operátor", "hodnota"],
    codeExample: "int x = a + b * 2;"
  },
  {
    id: 22, category: "types", type: "code", difficulty: "easy",
    question: "Co je ternární operátor?",
    answer: "Ternární operátor je zkrácený zápis podmínky ve tvaru condition ? valueIfTrue : valueIfFalse.",
    keywords: ["ternární operátor", "podmínka", "?:"],
    codeExample: "String result = age >= 18 ? \"adult\" : \"child\";"
  },
  {
    id: 23, category: "types", type: "theory", difficulty: "easy",
    question: "Jaké znáte relační operátory v Javě?",
    answer: "== (rovnost), != (nerovnost), > (větší než), >= (větší nebo rovno), < (menší než), <= (menší nebo rovno).",
    keywords: ["relační operátory", "==", "!=", "<", ">"],
    codeExample: "==   rovnost\n!=   nerovnost\n>    větší než\n>=   větší nebo rovno\n<    menší než\n<=   menší nebo rovno"
  },
  {
    id: 24, category: "types", type: "theory", difficulty: "easy",
    question: "Jaké znáte řídicí struktury v Javě?",
    answer: "if/else, switch, for, while, do-while, break, continue, try-catch-finally.",
    keywords: ["if", "switch", "for", "while", "řídicí struktury"],
    codeExample: "if, else\nswitch\nfor\nwhile\ndo-while\nbreak\ncontinue\ntry-catch-finally"
  },
  {
    id: 25, category: "types", type: "code", difficulty: "medium",
    question: "Jak lze předčasně opustit dva vnořené for cykly?",
    answer: "Pomocí návěští (label) u vnějšího cyklu a příkazu break s tímto návěštím.",
    keywords: ["návěští", "label", "break", "vnořené cykly"],
    codeExample: "outer:\nfor (int i = 0; i < 10; i++) {\n    for (int j = 0; j < 10; j++) {\n        if (j == 5) {\n            break outer;\n        }\n    }\n}"
  },
  {
    id: 26, category: "types", type: "code", difficulty: "easy",
    question: "Jak se zapisují konstanty v Javě?",
    answer: "Pomocí static final. Konvence: názvy konstant se píší velkými písmeny (UPPER_SNAKE_CASE).",
    keywords: ["konstanta", "static final", "konvence"],
    codeExample: "public static final int MAX_SIZE = 100;"
  },

  /* ===================== 3. Třídy, objekty, OOP základy ===================== */
  {
    id: 27, category: "oop", type: "theory", difficulty: "easy",
    question: "Co jsou objekty v objektově orientovaném systému?",
    answer: "Objekty jsou instance tříd. Mají stav (tvořený atributy), chování (tvořené metodami) a identitu (odlišuje objekt od jiných objektů).",
    keywords: ["objekt", "instance", "stav", "chování", "identita"],
    options: [
      "Instance tříd se stavem, chováním a identitou",
      "Předpisy pro vytváření instancí",
      "Statické metody bez stavu",
      "Pouze datové struktury bez chování"
    ],
    correctOption: 0
  },
  {
    id: 28, category: "oop", type: "theory", difficulty: "easy",
    question: "Co jsou třídy v objektově orientovaném systému?",
    answer: "Třída je předpis nebo šablona pro vytváření objektů. Definuje atributy, metody, konstruktory a rozhraní objektů.",
    keywords: ["třída", "šablona", "předpis", "atributy", "metody"]
  },
  {
    id: 29, category: "oop", type: "theory", difficulty: "easy",
    question: "Co obsahují třídy v objektově orientovaném systému?",
    answer: "Třída může obsahovat: instanční atributy, instanční metody, statické atributy, statické metody, konstruktory a vnitřní třídy.",
    keywords: ["atributy", "metody", "konstruktory", "vnitřní třídy", "static"]
  },
  {
    id: 30, category: "oop", type: "code", difficulty: "easy",
    question: "Jak se v Javě vytvářejí objekty?",
    answer: "Objekty se vytvářejí pomocí operátoru new a konstruktoru.",
    keywords: ["new", "konstruktor", "instance"],
    codeExample: "Person p = new Person();"
  },
  {
    id: 31, category: "oop", type: "code", difficulty: "easy",
    question: "Jak definujeme konstruktor?",
    answer: "Konstruktor má stejné jméno jako třída a nemá návratový typ.",
    keywords: ["konstruktor", "definice"],
    codeExample: "class Person {\n    Person() {\n    }\n}"
  },
  {
    id: 32, category: "oop", type: "code", difficulty: "easy",
    question: "Můžeme definovat více konstruktorů jedné třídy?",
    answer: "Ano. Jde o přetížení konstruktoru (overloading). Používá se pro různé způsoby vytvoření objektu — konstruktory se liší počtem či typem parametrů.",
    keywords: ["přetížení", "overloading", "konstruktor"],
    codeExample: "class Person {\n    Person() {\n    }\n    Person(String name) {\n    }\n}"
  },
  {
    id: 33, category: "oop", type: "code", difficulty: "medium",
    question: "Kdy definujeme konstruktor jako private?",
    answer: "Když nechceme dovolit vytváření instancí zvenčí. Typické použití: singleton, utility class, factory pattern.",
    keywords: ["private konstruktor", "singleton", "utility", "factory"],
    codeExample: "class MathUtils {\n    private MathUtils() {\n    }\n}"
  },
  {
    id: 34, category: "oop", type: "code", difficulty: "easy",
    question: "K čemu slouží operátor this?",
    answer: "this odkazuje na aktuální instanci objektu. Používá se například pro rozlišení atributu a parametru se stejným jménem.",
    keywords: ["this", "aktuální instance", "atribut vs parametr"],
    codeExample: "class Person {\n    private String name;\n    Person(String name) {\n        this.name = name;\n    }\n}"
  },
  {
    id: 35, category: "oop", type: "code", difficulty: "medium",
    question: "K čemu slouží operátor super?",
    answer: "super odkazuje na předka (nadřazenou třídu). Použití: super.method() pro volání metody předka a super(...) pro volání konstruktoru předka.",
    keywords: ["super", "předek", "nadřazená třída"],
    codeExample: "class Dog extends Animal {\n    Dog() {\n        super();\n    }\n    void sound() {\n        super.sound();\n    }\n}"
  },
  {
    id: 36, category: "oop", type: "code", difficulty: "medium",
    question: "Jak se používá super v konstruktoru?",
    answer: "Volání konstruktoru předka super(...) musí být první příkaz konstruktoru.",
    keywords: ["super", "konstruktor", "první příkaz"],
    commonMistakes: "super(...) musí být úplně první příkaz konstruktoru, jinak nastane chyba překladu.",
    codeExample: "class Dog extends Animal {\n    Dog() {\n        super();\n    }\n}"
  },
  {
    id: 37, category: "oop", type: "code", difficulty: "medium",
    question: "Co je zapouzdření?",
    answer: "Zapouzdření (encapsulation) znamená skrytí vnitřního stavu objektu a přístup k němu pouze přes jasně definované rozhraní (typicky gettery a settery).",
    keywords: ["zapouzdření", "encapsulation", "private", "getter", "setter"],
    codeExample: "private int age;\npublic int getAge() {\n    return age;\n}\npublic void setAge(int age) {\n    if (age >= 0) {\n        this.age = age;\n    }\n}",
    options: [
      "Skrytí vnitřního stavu a přístup přes definované rozhraní",
      "Dědění atributů z nadřazené třídy",
      "Volání metod podle skutečného typu za běhu",
      "Sloučení více tříd do jednoho balíku"
    ],
    correctOption: 0
  },
  {
    id: 38, category: "oop", type: "theory", difficulty: "easy",
    question: "Proč se používají přístupové metody k atributům?",
    answer: "Kvůli zapouzdření. Gettery a settery umožňují kontrolovat přístup k datům, validovat hodnoty a měnit vnitřní implementaci bez změny veřejného rozhraní.",
    keywords: ["getter", "setter", "validace", "zapouzdření"]
  },
  {
    id: 39, category: "oop", type: "theory", difficulty: "easy",
    question: "Které atributy třídy je vhodné dát jako public?",
    answer: "Obvykle pouze konstanty (public static final). Běžné atributy mají být private.",
    keywords: ["public", "konstanty", "private", "atributy"],
    codeExample: "public static final int MAX_SIZE = 100;"
  },
  {
    id: 40, category: "oop", type: "theory", difficulty: "medium",
    question: "Jaké jsou kategorie přístupu v Javě?",
    answer: "public (odkudkoliv), protected (v balíku a v potomcích), package-private/default (v rámci balíku) a private (pouze ve třídě).",
    keywords: ["public", "protected", "package-private", "private", "modifikátory"],
    codeExample: "public     přístup odkudkoliv\nprotected  přístup v balíku a potomcích\ndefault    přístup v rámci balíku\nprivate    přístup pouze ve třídě",
    options: [
      "public, protected, package-private (default), private",
      "public, private, static, final",
      "open, closed, sealed, final",
      "global, local, package, instance"
    ],
    correctOption: 0
  },
  {
    id: 41, category: "oop", type: "code", difficulty: "easy",
    question: "Jak v Javě deklarujeme třídní proměnné?",
    answer: "Pomocí klíčového slova static. Třídní proměnná patří třídě, ne konkrétní instanci — je sdílená všemi instancemi.",
    keywords: ["static", "třídní proměnná", "class variable"],
    codeExample: "class Counter {\n    static int count;\n}"
  },
  {
    id: 42, category: "oop", type: "code", difficulty: "easy",
    question: "Co znamená, že je třída final?",
    answer: "Z final třídy nelze dědit. Příklady v Javě: String, Integer.",
    keywords: ["final", "dědičnost", "String", "Integer"],
    codeExample: "final class MyClass {\n}"
  },
  {
    id: 43, category: "oop", type: "code", difficulty: "medium",
    question: "Co je vnitřní třída?",
    answer: "Vnitřní třída (inner class) je třída definovaná uvnitř jiné třídy. Používá se pro pomocné objekty, které mají význam jen uvnitř dané třídy.",
    keywords: ["vnitřní třída", "inner class", "nested"],
    codeExample: "class Outer {\n    class Inner {\n    }\n}"
  },
  {
    id: 44, category: "oop", type: "theory", difficulty: "medium",
    question: "K čemu slouží vnitřní třída?",
    answer: "Používá se, když pomocná třída patří logicky k jedné konkrétní třídě. Příklady: Node ve spojovém seznamu, listener v GUI, callback, pomocná implementace.",
    keywords: ["vnitřní třída", "Node", "listener", "callback"]
  },
  {
    id: 45, category: "oop", type: "code", difficulty: "medium",
    question: "Co je anonymní vnitřní třída?",
    answer: "Je to třída bez jména, vytvořená přímo na místě použití. Často se používala pro listenery (dnes nahrazené lambdami).",
    keywords: ["anonymní třída", "listener", "lambda"],
    codeExample: "button.addActionListener(new ActionListener() {\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(\"Click\");\n    }\n});"
  },

  /* ============== 4. Dědičnost, polymorfismus, interface ============== */
  {
    id: 46, category: "inheritance", type: "code", difficulty: "medium",
    question: "Co je polymorfismus?",
    answer: "Polymorfismus znamená, že s objekty různých tříd můžeme pracovat přes společný typ. Volaná metoda závisí na skutečném typu objektu za běhu programu (dynamický dispatch).",
    keywords: ["polymorfismus", "dynamický dispatch", "společný typ"],
    codeExample: "Animal a = new Dog();\na.sound();",
    options: [
      "Práce s objekty různých tříd přes společný typ; metoda dle skutečného typu za běhu",
      "Více konstruktorů se stejným jménem a různými parametry",
      "Skrytí vnitřního stavu objektu přes gettery/settery",
      "Dědění z více tříd zároveň"
    ],
    correctOption: 0
  },
  {
    id: 47, category: "inheritance", type: "code", difficulty: "easy",
    question: "Co je overriding?",
    answer: "Overriding znamená přepsání metody předka v potomkovi. Metoda má stejnou signaturu (jméno i parametry).",
    keywords: ["overriding", "přepsání", "@Override", "signatura"],
    codeExample: "class Animal {\n    void sound() {\n    }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() {\n    }\n}"
  },
  {
    id: 48, category: "inheritance", type: "code", difficulty: "easy",
    question: "Co je overloading?",
    answer: "Overloading znamená přetížení metody. Více metod má stejné jméno, ale jiné parametry (počet nebo typy).",
    keywords: ["overloading", "přetížení", "parametry"],
    codeExample: "void print(String s) {\n}\nvoid print(int x) {\n}"
  },
  {
    id: 49, category: "inheritance", type: "trap", difficulty: "medium",
    question: "Jaký je rozdíl mezi overriding a overloading?",
    answer: "Overriding přepisuje metodu předka v potomkovi (stejná signatura). Overloading definuje více metod stejného jména s různými parametry (ve stejné nebo i jiné třídě).",
    keywords: ["overriding", "overloading", "rozdíl"],
    commonMistakes: "Nezaměňovat: overRIDing = přepsání zděděné metody; overLOADing = stejné jméno, jiné parametry.",
    options: [
      "Overriding = přepsání metody předka; overloading = stejné jméno, jiné parametry",
      "Overriding = jiné parametry; overloading = přepsání metody předka",
      "Jsou to synonyma pro totéž",
      "Overriding se týká atributů, overloading metod"
    ],
    correctOption: 0
  },
  {
    id: 50, category: "inheritance", type: "theory", difficulty: "medium",
    question: "Co jsou virtuální metody?",
    answer: "Virtuální metody jsou metody, jejichž konkrétní implementace se vybírá za běhu podle skutečného typu objektu. V Javě jsou běžné instanční metody virtuální, pokud nejsou static, final nebo private.",
    keywords: ["virtuální metody", "dynamický dispatch", "static", "final", "private"]
  },
  {
    id: 51, category: "inheritance", type: "trap", difficulty: "medium",
    question: "Co je vícenásobná dědičnost?",
    answer: "Vícenásobná dědičnost znamená, že třída dědí z více tříd najednou. Java vícenásobnou dědičnost tříd nepodporuje, ale umožňuje implementovat více rozhraní (interface).",
    keywords: ["vícenásobná dědičnost", "interface", "implements"],
    commonMistakes: "Java NEumí vícenásobnou dědičnost tříd, ale UMÍ implementovat více interface.",
    codeExample: "class MyClass implements A, B {\n}",
    options: [
      "Dědění z více tříd; Java to u tříd neumí, ale umí více interface",
      "Vytvoření více instancí jedné třídy",
      "Přepsání více metod předka najednou",
      "Java podporuje vícenásobnou dědičnost tříd bez omezení"
    ],
    correctOption: 0
  },
  {
    id: 52, category: "inheritance", type: "code", difficulty: "easy",
    question: "Co je vazba is-a?",
    answer: "is-a znamená dědičnost. Příklad: Dog is an Animal, Rectangle is a Shape.",
    keywords: ["is-a", "dědičnost", "extends"],
    codeExample: "class Dog extends Animal {\n}"
  },
  {
    id: 53, category: "inheritance", type: "code", difficulty: "easy",
    question: "Co je vazba has-a?",
    answer: "has-a znamená, že objekt obsahuje jiný objekt. Jde o agregaci nebo kompozici. Příklad: Car has an Engine, Person has an Address.",
    keywords: ["has-a", "agregace", "kompozice"],
    codeExample: "class Car {\n    private Engine engine;\n}"
  },
  {
    id: 54, category: "inheritance", type: "theory", difficulty: "medium",
    question: "Jaký je rozdíl mezi agregací a kompozicí?",
    answer: "Agregace je slabší vztah — část může existovat nezávisle na celku (tým má hráče). Kompozice je silnější vztah — část bez celku nedává smysl nebo její životnost závisí na celku (dům má místnosti).",
    keywords: ["agregace", "kompozice", "rozdíl", "životnost"],
    options: [
      "Agregace = část žije nezávisle; kompozice = život části závisí na celku",
      "Agregace = silnější vztah; kompozice = slabší vztah",
      "Jsou to synonyma",
      "Agregace se týká tříd, kompozice rozhraní"
    ],
    correctOption: 0
  },
  {
    id: 55, category: "inheritance", type: "theory", difficulty: "easy",
    question: "Z jakých částí se skládá odvozená třída?",
    answer: "Odvozená třída obsahuje: vlastní atributy a metody, zděděné atributy a metody, konstruktor a odkaz na předka přes super.",
    keywords: ["odvozená třída", "zděděné členy", "super", "konstruktor"],
    codeExample: "class Child extends Parent {\n}"
  },
  {
    id: 56, category: "inheritance", type: "theory", difficulty: "medium",
    question: "Jak se liší abstract class a interface?",
    answer: "abstract class může obsahovat stav, konstruktory, atributy a implementované metody; třída může dědit jen z jedné abstraktní třídy. interface popisuje rozhraní (kontrakt); třída může implementovat více rozhraní.",
    keywords: ["abstract class", "interface", "stav", "vícenásobná implementace"],
    options: [
      "Abstract class = stav a jeden předek; interface = kontrakt a více implementací",
      "Abstract class i interface mohou mít stav i konstruktory stejně",
      "Interface umí mít stav, abstract class ne",
      "Třída může dědit z více abstract class, ale jen z jednoho interface"
    ],
    correctOption: 0
  },
  {
    id: 57, category: "inheritance", type: "theory", difficulty: "medium",
    question: "Kdy použít abstract class?",
    answer: "Když mají potomci společný základ, společný stav nebo společnou část implementace.",
    keywords: ["abstract class", "společný stav", "společná implementace"]
  },
  {
    id: 58, category: "inheritance", type: "code", difficulty: "medium",
    question: "Kdy použít interface?",
    answer: "Když chceme definovat schopnost nebo kontrakt, který mohou implementovat různé nesouvisející třídy.",
    keywords: ["interface", "kontrakt", "schopnost"],
    codeExample: "interface Runnable {\n    void run();\n}"
  },
  {
    id: 59, category: "inheritance", type: "trap", difficulty: "easy",
    question: "Jsou metody v interface veřejné?",
    answer: "Ano. Metody v rozhraní jsou implicitně public (a abstraktní, pokud nejsou default/static).",
    keywords: ["interface", "public", "implicitně"],
    commonMistakes: "I když u metody v interface nenapíšeš 'public', je public z definice."
  },
  {
    id: 60, category: "inheritance", type: "trap", difficulty: "medium",
    question: "Musí být implementace metody z interface public?",
    answer: "Ano. Implementace nesmí snížit viditelnost. Pokud u implementující metody zapomeneš public, kód se nezkompiluje.",
    keywords: ["interface", "public", "viditelnost", "implementace"],
    commonMistakes: "Vynechání 'public' u implementující metody = chyba překladu (pokus o snížení viditelnosti).",
    codeExample: "// Špatně – nezkompiluje se:\nclass Letadlo implements Letoun {\n    void let() { }\n}\n// Správně:\nclass Letadlo implements Letoun {\n    public void let() { }\n}"
  },
  {
    id: 61, category: "inheritance", type: "trap", difficulty: "medium",
    question: "Je implementace metody z interface overloading?",
    answer: "Ne. Je to implementace (přepsání) metody, ne overloading. Overloading by znamenal stejný název, ale jiné parametry.",
    keywords: ["interface", "implementace", "overloading"],
    commonMistakes: "Implementace metody z interface = přepsání, NE overloading."
  },
  {
    id: 62, category: "inheritance", type: "theory", difficulty: "hard",
    question: "Co je double dispatch?",
    answer: "Double dispatch je mechanismus, kdy se výběr operace řídí dynamickým typem dvou objektů, ne jen jednoho. V Javě je běžný single dispatch (metoda se vybírá podle objektu, na kterém je volána). Double dispatch se často řeší přes návrhový vzor Visitor.",
    keywords: ["double dispatch", "single dispatch", "Visitor"]
  },
  {
    id: 63, category: "inheritance", type: "theory", difficulty: "medium",
    question: "Co znamená, když přepíšeme equals()?",
    answer: "Měníme pravidlo porovnávání objektů. Dva objekty pak mohou být považovány za stejné podle obsahu (logické rovnosti), ne podle identity (reference).",
    keywords: ["equals", "logická rovnost", "porovnání"]
  },
  {
    id: 64, category: "inheritance", type: "trap", difficulty: "medium",
    question: "Když přepíšeme equals(), musíme přepsat i hashCode()?",
    answer: "Ano. Pokud jsou dva objekty stejné podle equals(), musí mít stejný hashCode(). Je to nutné pro správnou funkci hashovacích kolekcí: HashMap, HashSet, Hashtable.",
    keywords: ["equals", "hashCode", "kontrakt", "HashMap", "HashSet"],
    commonMistakes: "Přepsat equals() bez hashCode() rozbije chování v HashMap/HashSet.",
    options: [
      "Ano – stejné objekty dle equals() musí mít stejný hashCode()",
      "Ne – hashCode() je nepovinný",
      "Jen pokud používáš TreeMap",
      "Ne, equals() a hashCode() spolu nesouvisí"
    ],
    correctOption: 0
  },

  /* ===================== 5. Třída Object ===================== */
  {
    id: 65, category: "object", type: "theory", difficulty: "easy",
    question: "Jaké základní metody poskytuje třída Object?",
    answer: "toString(), equals(Object obj), hashCode(), getClass(), clone(), wait(), notify(), notifyAll().",
    keywords: ["Object", "toString", "equals", "hashCode", "getClass"],
    codeExample: "toString()\nequals(Object obj)\nhashCode()\ngetClass()\nclone()\nwait()\nnotify()\nnotifyAll()"
  },
  {
    id: 66, category: "object", type: "code", difficulty: "easy",
    question: "K čemu slouží toString()?",
    answer: "Vrací textovou reprezentaci objektu.",
    keywords: ["toString", "textová reprezentace"],
    codeExample: "@Override\npublic String toString() {\n    return \"Person{name='\" + name + \"'}\";\n}"
  },
  {
    id: 67, category: "object", type: "theory", difficulty: "easy",
    question: "K čemu slouží equals()?",
    answer: "Slouží k porovnání objektů podle logické rovnosti (podle obsahu, ne podle reference).",
    keywords: ["equals", "logická rovnost", "porovnání"]
  },
  {
    id: 68, category: "object", type: "theory", difficulty: "easy",
    question: "K čemu slouží hashCode()?",
    answer: "Vrací hash objektu. Používá se v hashovacích kolekcích, například HashMap a HashSet.",
    keywords: ["hashCode", "hash", "HashMap", "HashSet"]
  },
  {
    id: 69, category: "object", type: "code", difficulty: "easy",
    question: "K čemu slouží getClass()?",
    answer: "Vrací runtime třídu objektu (objekt typu Class).",
    keywords: ["getClass", "runtime třída", "reflexe"],
    codeExample: "obj.getClass()"
  },
  {
    id: 70, category: "object", type: "theory", difficulty: "medium",
    question: "K čemu slouží wait(), notify(), notifyAll()?",
    answer: "Slouží k synchronizaci vláken nad monitorem objektu. wait() uspí vlákno a uvolní monitor, notify()/notifyAll() probudí čekající vlákna.",
    keywords: ["wait", "notify", "notifyAll", "monitor", "synchronizace"]
  },

  /* ===================== 6. Balíky, čitelnost, návrh ===================== */
  {
    id: 71, category: "packages", type: "code", difficulty: "easy",
    question: "Proč organizujeme třídy do balíků?",
    answer: "Kvůli přehlednosti, modularitě, zamezení konfliktům názvů a řízení viditelnosti.",
    keywords: ["balík", "package", "modularita", "viditelnost"],
    codeExample: "package cz.cvut.fel.pjv;"
  },
  {
    id: 72, category: "packages", type: "theory", difficulty: "easy",
    question: "Jaká pravidla používáme při definování balíků?",
    answer: "Obvykle se používá obrácená doména (např. cz.cvut.fel.project nebo com.company.app). Názvy balíků se píší malými písmeny.",
    keywords: ["balík", "obrácená doména", "konvence", "malá písmena"],
    codeExample: "cz.cvut.fel.project\ncom.company.app"
  },
  {
    id: 73, category: "packages", type: "theory", difficulty: "easy",
    question: "Co znamená čitelnost programu?",
    answer: "Čitelný program má správné odsazení, smysluplné názvy, krátké metody, logické rozdělení do tříd a balíků, komentáře tam, kde pomáhají, a JavaDoc u veřejného API.",
    keywords: ["čitelnost", "odsazení", "názvy", "JavaDoc"]
  },
  {
    id: 74, category: "packages", type: "theory", difficulty: "medium",
    question: "Co je objektově orientovaná analýza?",
    answer: "OO analýza popisuje problémovou oblast pomocí objektů, vztahů a požadavků. Řeší, CO v systému existuje.",
    keywords: ["OO analýza", "problémová oblast", "co"]
  },
  {
    id: 75, category: "packages", type: "theory", difficulty: "medium",
    question: "Co je objektově orientovaný návrh?",
    answer: "OO návrh řeší, JAK problém implementovat pomocí tříd, rozhraní, vazeb a odpovědností.",
    keywords: ["OO návrh", "implementace", "jak"]
  },
  {
    id: 76, category: "packages", type: "trap", difficulty: "medium",
    question: "Jaký je rozdíl mezi OO analýzou a OO návrhem?",
    answer: "Analýza řeší problém a pojmy reálného světa (CO). Návrh řeší softwarovou strukturu a implementaci (JAK).",
    keywords: ["analýza", "návrh", "rozdíl"],
    options: [
      "Analýza = co existuje (reálný svět); návrh = jak to implementovat (software)",
      "Analýza = implementace; návrh = pojmy reálného světa",
      "Jsou to synonyma pro totéž",
      "Analýza je o kódu, návrh o testování"
    ],
    correctOption: 0
  },
  {
    id: 77, category: "packages", type: "theory", difficulty: "medium",
    question: "Jak spolu souvisí efektivita a znovupoužitelnost?",
    answer: "Obvykle jde o kompromis. Vysoce obecný a znovupoužitelný návrh může být méně efektivní. Vysoce optimalizovaný návrh bývá často méně obecný.",
    keywords: ["efektivita", "znovupoužitelnost", "kompromis", "obecnost"]
  },

  /* ===================== 7. Výjimky ===================== */
  {
    id: 78, category: "exceptions", type: "code", difficulty: "easy",
    question: "Jak lze vyvolat vlastní výjimku MyException?",
    answer: "Pomocí klíčového slova throw a vytvoření nové instance výjimky.",
    keywords: ["throw", "výjimka", "vyvolání"],
    codeExample: "throw new MyException();"
  },
  {
    id: 79, category: "exceptions", type: "code", difficulty: "medium",
    question: "Jak lze vytvořit novou výjimku?",
    answer: "Vytvoříme třídu, která dědí z Exception (checked) nebo z RuntimeException (unchecked).",
    keywords: ["výjimka", "Exception", "RuntimeException", "checked", "unchecked"],
    codeExample: "// Checked:\nclass MyException extends Exception {\n}\n// Unchecked:\nclass MyException extends RuntimeException {\n}"
  },
  {
    id: 80, category: "exceptions", type: "theory", difficulty: "medium",
    question: "Jaké znáte typy výjimek v Javě?",
    answer: "checked exceptions, unchecked exceptions (RuntimeException) a Error. Všechny dědí z Throwable.",
    keywords: ["checked", "unchecked", "Error", "Throwable"],
    options: [
      "checked, unchecked (RuntimeException), Error – vše dědí z Throwable",
      "compile-time a runtime, jiné nejsou",
      "fatal, warning, info",
      "pouze checked a Error"
    ],
    correctOption: 0
  },
  {
    id: 81, category: "exceptions", type: "trap", difficulty: "medium",
    question: "Jaké výjimky je nutné ošetřovat?",
    answer: "Povinně se ošetřují checked exceptions, tedy potomci Exception mimo RuntimeException. Možnosti: zachytit přes try-catch, nebo deklarovat přes throws.",
    keywords: ["checked", "try-catch", "throws", "povinné ošetření"],
    commonMistakes: "Unchecked (RuntimeException) NEmusíš ošetřovat. Checked ANO – jinak chyba překladu."
  },
  {
    id: 82, category: "exceptions", type: "code", difficulty: "easy",
    question: "Jak se ošetří výjimka pomocí try-catch?",
    answer: "Rizikový kód se obalí do bloku try a výjimka se zachytí v bloku catch.",
    keywords: ["try-catch", "ošetření výjimky"],
    codeExample: "try {\n    riskyMethod();\n} catch (IOException e) {\n    e.printStackTrace();\n}"
  },
  {
    id: 83, category: "exceptions", type: "trap", difficulty: "medium",
    question: "Jak zachytáváme konkrétní výjimku?",
    answer: "Do catch uvedeme konkrétní typ výjimky. Konkrétnější výjimky musí být v catch blocích PŘED obecnějšími.",
    keywords: ["catch", "konkrétní výjimka", "pořadí catch"],
    commonMistakes: "Obecnější výjimka (Exception) před konkrétnější (IOException) = nedosažitelný kód a chyba překladu.",
    codeExample: "try {\n    readFile();\n} catch (IOException e) {\n    System.out.println(\"Chyba čtení\");\n}"
  },
  {
    id: 84, category: "exceptions", type: "code", difficulty: "easy",
    question: "Jak definujeme, že metoda může způsobit výjimku?",
    answer: "Pomocí klíčového slova throws v hlavičce metody.",
    keywords: ["throws", "hlavička metody", "deklarace výjimky"],
    codeExample: "void readFile() throws IOException {\n}"
  },
  {
    id: 85, category: "exceptions", type: "code", difficulty: "medium",
    question: "Kdy se provede blok finally?",
    answer: "Blok finally se provede po try-catch téměř vždy, i když dojde k return nebo výjimce. Slouží k úklidu zdrojů.",
    keywords: ["finally", "úklid", "return", "vždy"],
    codeExample: "try {\n} catch (Exception e) {\n} finally {\n    // úklid zdrojů\n}"
  },
  {
    id: 86, category: "exceptions", type: "theory", difficulty: "medium",
    question: "K čemu se používá finally?",
    answer: "K uvolnění zdrojů: zavření souboru, zavření socketu, uvolnění zámku. V moderní Javě se často používá try-with-resources.",
    keywords: ["finally", "zdroje", "try-with-resources"]
  },
  {
    id: 87, category: "exceptions", type: "trap", difficulty: "medium",
    question: "Lze zabránit vyvolání RuntimeException?",
    answer: "Částečně ano, správným návrhem a validací: kontrola null, kontrola indexů, kontrola vstupů, správný stav objektu. RuntimeException lze i zachytit pomocí try-catch, ale hlavní řešení je psát korektní kód.",
    keywords: ["RuntimeException", "validace", "null", "prevence"]
  },
  {
    id: 88, category: "exceptions", type: "trap", difficulty: "medium",
    question: "Jaký je rozdíl mezi checked a unchecked výjimkou?",
    answer: "Checked exception musí být ošetřena nebo deklarována pomocí throws. Unchecked exception (RuntimeException) se ošetřovat nemusí.",
    keywords: ["checked", "unchecked", "throws", "rozdíl"],
    options: [
      "Checked musíš ošetřit/deklarovat; unchecked (RuntimeException) nemusíš",
      "Unchecked musíš ošetřit; checked nemusíš",
      "Obě se musí vždy ošetřit try-catch",
      "Žádná se nemusí ošetřovat"
    ],
    correctOption: 0
  },
  {
    id: 89, category: "exceptions", type: "theory", difficulty: "medium",
    question: "Co je Error?",
    answer: "Error označuje vážný problém běhového prostředí, například OutOfMemoryError nebo StackOverflowError. Obvykle se nezachytává.",
    keywords: ["Error", "OutOfMemoryError", "StackOverflowError"]
  },

  /* ===================== 8. Enum ===================== */
  {
    id: 90, category: "enum", type: "code", difficulty: "easy",
    question: "Jak se definuje výčtový typ v Javě?",
    answer: "Pomocí klíčového slova enum a seznamu pojmenovaných hodnot.",
    keywords: ["enum", "výčtový typ", "definice"],
    codeExample: "enum Color {\n    RED, GREEN, BLUE\n}"
  },
  {
    id: 91, category: "enum", type: "trap", difficulty: "easy",
    question: "Jsou výčtové typy v Javě typově bezpečné?",
    answer: "Ano. enum je typově bezpečný. Proměnná typu Color může obsahovat jen hodnoty definované v Color, případně null.",
    keywords: ["enum", "typová bezpečnost", "null"]
  },
  {
    id: 92, category: "enum", type: "trap", difficulty: "easy",
    question: "Může mít referenční proměnná výčtového typu hodnotu null?",
    answer: "Ano. Enum je referenční typ, takže proměnná může být null.",
    keywords: ["enum", "null", "referenční typ"],
    codeExample: "Color c = null;"
  },
  {
    id: 93, category: "enum", type: "theory", difficulty: "easy",
    question: "Proč je enum lepší než konstanty typu int?",
    answer: "Protože je typově bezpečný, přehlednější a omezuje možné hodnoty (proměnná může nabývat jen definovaných hodnot).",
    keywords: ["enum", "typová bezpečnost", "int konstanty"],
    options: [
      "Je typově bezpečný, přehledný a omezuje množinu povolených hodnot",
      "Je rychlejší při výpočtech než int",
      "Zabírá méně paměti než int",
      "Umožňuje libovolnou číselnou hodnotu"
    ],
    correctOption: 0
  },

  /* ===================== 9. Generika, kolekce ===================== */
  {
    id: 94, category: "generics", type: "code", difficulty: "medium",
    question: "Co jsou generické typy?",
    answer: "Generické typy umožňují psát třídy a metody nezávislé na konkrétním typu (typový parametr T se dosadí při použití).",
    keywords: ["generika", "typový parametr", "generické typy"],
    codeExample: "class Box<T> {\n    private T value;\n}"
  },
  {
    id: 95, category: "generics", type: "code", difficulty: "medium",
    question: "K čemu slouží genericita?",
    answer: "K typové bezpečnosti a znovupoužitelnosti kódu. Díky generikám kompilátor hlídá, že v seznamu jsou jen prvky daného typu.",
    keywords: ["genericita", "typová bezpečnost", "znovupoužitelnost"],
    codeExample: "List<String> names = new ArrayList<>();"
  },
  {
    id: 96, category: "generics", type: "trap", difficulty: "medium",
    question: "Mohou generika v Javě používat primitivní typy?",
    answer: "Ne přímo. Místo primitivních typů se používají jejich obalové (wrapper) třídy. Špatně: List<int>. Správně: List<Integer>.",
    keywords: ["generika", "primitivní typy", "wrapper", "Integer"],
    commonMistakes: "List<int> neexistuje – musíš použít List<Integer> (wrapper třídu).",
    codeExample: "// Špatně:\nList<int> a;\n// Správně:\nList<Integer> b;"
  },
  {
    id: 97, category: "generics", type: "theory", difficulty: "medium",
    question: "Co je Java Collections Framework?",
    answer: "JCF je sada rozhraní a tříd pro práci s kolekcemi dat. Obsahuje například: Collection, List, Set, Queue, Map, ArrayList, LinkedList, HashSet, TreeSet, HashMap.",
    keywords: ["JCF", "Collections Framework", "List", "Set", "Map"]
  },
  {
    id: 98, category: "generics", type: "trap", difficulty: "medium",
    question: "Je Map kolekce?",
    answer: "Formálně Map NENÍ potomkem Collection, ale patří do Java Collections Framework.",
    keywords: ["Map", "Collection", "JCF"],
    commonMistakes: "Map nedědí z Collection, přestože je součástí Collections Frameworku."
  },
  {
    id: 99, category: "generics", type: "trap", difficulty: "easy",
    question: "Jaký je rozdíl mezi List a Set?",
    answer: "List je uspořádaná posloupnost, dovoluje duplicity a umožňuje přístup přes index. Set je množina, nedovoluje duplicity a obecně neposkytuje přístup přes index.",
    keywords: ["List", "Set", "duplicity", "index"],
    options: [
      "List = pořadí + duplicity + index; Set = množina bez duplicit, bez indexu",
      "List = bez duplicit; Set = s duplicitami",
      "Oba dovolují přístup přes index",
      "List i Set zakazují duplicity"
    ],
    correctOption: 0
  },
  {
    id: 100, category: "generics", type: "trap", difficulty: "medium",
    question: "Zachovává Set pořadí vkládání?",
    answer: "Obecně ne, záleží na implementaci. HashSet nezaručuje pořadí, LinkedHashSet zachovává pořadí vložení, TreeSet řadí podle porovnání.",
    keywords: ["Set", "pořadí", "HashSet", "LinkedHashSet", "TreeSet"],
    commonMistakes: "HashSet pořadí NEzaručuje. Pro pořadí vložení použij LinkedHashSet.",
    codeExample: "HashSet        nezaručuje pořadí\nLinkedHashSet  zachovává pořadí vložení\nTreeSet        řadí podle porovnání"
  },
  {
    id: 101, category: "generics", type: "theory", difficulty: "easy",
    question: "Jaké jsou běžné implementace List?",
    answer: "ArrayList a LinkedList.",
    keywords: ["List", "ArrayList", "LinkedList"]
  },
  {
    id: 102, category: "generics", type: "theory", difficulty: "easy",
    question: "Jaké jsou běžné implementace Set?",
    answer: "HashSet, LinkedHashSet a TreeSet.",
    keywords: ["Set", "HashSet", "LinkedHashSet", "TreeSet"]
  },
  {
    id: 103, category: "generics", type: "code", difficulty: "easy",
    question: "Co je iterátor?",
    answer: "Iterátor je objekt pro postupné procházení kolekce (metody hasNext() a next()).",
    keywords: ["iterátor", "Iterator", "hasNext", "next"],
    codeExample: "Iterator<String> it = list.iterator();\nwhile (it.hasNext()) {\n    String item = it.next();\n}"
  },
  {
    id: 104, category: "generics", type: "code", difficulty: "medium",
    question: "K čemu slouží rozhraní pro přístup ke kolekcím?",
    answer: "Umožňují programovat proti obecnému typu (rozhraní), ne proti konkrétní implementaci. To zvyšuje flexibilitu kódu.",
    keywords: ["rozhraní", "abstrakce", "program to interface"],
    codeExample: "// Lepší:\nList<String> list = new ArrayList<>();\n// Méně vhodné:\nArrayList<String> list2 = new ArrayList<>();"
  },
  {
    id: 105, category: "generics", type: "theory", difficulty: "easy",
    question: "Co je Collection<E>?",
    answer: "Základní rozhraní pro skupinu prvků. Je předkem například pro List, Set a Queue.",
    keywords: ["Collection", "rozhraní", "List", "Set", "Queue"]
  },
  {
    id: 106, category: "generics", type: "code", difficulty: "easy",
    question: "Co je Map<K,V>?",
    answer: "Mapa ukládá dvojice klíč–hodnota (key–value).",
    keywords: ["Map", "klíč", "hodnota", "key-value"],
    codeExample: "Map<String, Integer> ages = new HashMap<>();"
  },
  {
    id: 107, category: "generics", type: "theory", difficulty: "medium",
    question: "Co je hashovací funkce?",
    answer: "Hashovací funkce převádí vstup na hodnotu pevné délky. Stejný vstup má dát stejný hash. Používá se např. v HashMap, HashSet, hashování hesel a indexaci dat.",
    keywords: ["hashovací funkce", "hash", "pevná délka"]
  },
  {
    id: 108, category: "generics", type: "theory", difficulty: "medium",
    question: "Proč vznikají kolize při hashování?",
    answer: "Protože množina možných vstupů je větší než množina možných hashů. Různé vstupy tedy mohou mít stejný hash.",
    keywords: ["kolize", "hash", "vstupy"]
  },
  {
    id: 109, category: "generics", type: "theory", difficulty: "medium",
    question: "Jak se řeší kolize v hash tabulkách?",
    answer: "Typicky: řetězení pomocí seznamu/bucketu, otevřené adresování, lepší hashovací funkce, zvětšení tabulky.",
    keywords: ["kolize", "řetězení", "otevřené adresování", "bucket"]
  },

  /* ===================== 10. Soubory, proudy, serializace ===================== */
  {
    id: 110, category: "io", type: "theory", difficulty: "easy",
    question: "Jaký je rozdíl mezi binárním a textovým souborem?",
    answer: "Textový soubor obsahuje znaky v určitém kódování. Binární soubor obsahuje bajty, které je nutné interpretovat podle formátu.",
    keywords: ["binární soubor", "textový soubor", "kódování", "bajty"],
    options: [
      "Textový = znaky v kódování; binární = bajty interpretované dle formátu",
      "Textový = bajty; binární = znaky",
      "Není mezi nimi rozdíl",
      "Textový lze číst jen sekvenčně, binární jen přímo"
    ],
    correctOption: 0
  },
  {
    id: 111, category: "io", type: "code", difficulty: "easy",
    question: "Jak se zpracovává textový soubor?",
    answer: "Typicky znakově nebo po řádcích, např. pomocí BufferedReader a FileReader.",
    keywords: ["textový soubor", "BufferedReader", "FileReader", "řádky"],
    codeExample: "BufferedReader reader = new BufferedReader(new FileReader(\"file.txt\"));"
  },
  {
    id: 112, category: "io", type: "code", difficulty: "easy",
    question: "Jak se zpracovává binární soubor?",
    answer: "Typicky po bajtech, např. pomocí FileInputStream.",
    keywords: ["binární soubor", "FileInputStream", "bajty"],
    codeExample: "FileInputStream input = new FileInputStream(\"file.bin\");"
  },
  {
    id: 113, category: "io", type: "theory", difficulty: "medium",
    question: "Jaký je rozdíl mezi přímým a sekvenčním přístupem k souboru?",
    answer: "Sekvenční přístup čte data od začátku postupně. Přímý přístup umožňuje skočit na konkrétní pozici v souboru (např. pomocí seek).",
    keywords: ["sekvenční přístup", "přímý přístup", "seek"]
  },
  {
    id: 114, category: "io", type: "theory", difficulty: "medium",
    question: "Jak přistupujeme k datovým záznamům při nepřímém vyhledávání?",
    answer: "Sekvenčně procházíme záznamy a hledáme požadovaný záznam (čteme řádek po řádku, dokud nenajdeme hledaný záznam).",
    keywords: ["nepřímé vyhledávání", "sekvenční procházení", "záznamy"]
  },
  {
    id: 115, category: "io", type: "code", difficulty: "medium",
    question: "Co je trojvrstevná struktura proudů?",
    answer: "Proudy lze vrstvit: základní proud pro bajty/znaky, proud pro datové typy nebo objekty, a filtrační proud (např. bufferování).",
    keywords: ["vrstvení proudů", "filtrační proud", "buffer"],
    codeExample: "new BufferedInputStream(new FileInputStream(\"file.bin\"));"
  },
  {
    id: 116, category: "io", type: "theory", difficulty: "medium",
    question: "Jaké jsou bytové proudy?",
    answer: "Příklady: FileInputStream, FileOutputStream, BufferedInputStream, BufferedOutputStream, DataInputStream, DataOutputStream, ObjectInputStream, ObjectOutputStream.",
    keywords: ["bytové proudy", "InputStream", "OutputStream"]
  },
  {
    id: 117, category: "io", type: "theory", difficulty: "easy",
    question: "Jaké jsou znakové proudy?",
    answer: "Příklady: FileReader, FileWriter, BufferedReader, BufferedWriter.",
    keywords: ["znakové proudy", "Reader", "Writer"]
  },
  {
    id: 118, category: "io", type: "code", difficulty: "medium",
    question: "Jak realizujeme serializaci v Javě?",
    answer: "Třída implementuje rozhraní Serializable. Objekt se zapíše přes ObjectOutputStream metodou writeObject().",
    keywords: ["serializace", "Serializable", "ObjectOutputStream", "writeObject"],
    codeExample: "class Person implements Serializable {\n}\n\nObjectOutputStream out =\n    new ObjectOutputStream(new FileOutputStream(\"data.bin\"));\nout.writeObject(person);"
  },
  {
    id: 119, category: "io", type: "theory", difficulty: "medium",
    question: "Jak Java reaguje na ztrátu reference?",
    answer: "Pokud na objekt nevede žádná dosažitelná reference, může být odstraněn garbage collectorem.",
    keywords: ["ztráta reference", "garbage collector", "dosažitelnost"]
  },

  /* ===================== 11. GUI, Swing, MVC, události ===================== */
  {
    id: 120, category: "gui", type: "theory", difficulty: "easy",
    question: "Jaké jsou tři základní prvky GUI?",
    answer: "Komponenty, kontejnery a layout managery.",
    keywords: ["GUI", "komponenty", "kontejnery", "layout"],
    options: [
      "Komponenty, kontejnery, layout managery",
      "Model, View, Controller",
      "Okna, tlačítka, menu",
      "Vlákna, události, posluchače"
    ],
    correctOption: 0
  },
  {
    id: 121, category: "gui", type: "theory", difficulty: "easy",
    question: "Co jsou komponenty v GUI?",
    answer: "Komponenty jsou grafické prvky, například JLabel, JButton, JTextField, JPasswordField, JList, JComboBox, JCheckBox, JRadioButton, JProgressBar.",
    keywords: ["komponenty", "JButton", "JLabel", "JTextField"]
  },
  {
    id: 122, category: "gui", type: "theory", difficulty: "easy",
    question: "Co jsou kontejnery ve Swing?",
    answer: "Kontejnery obsahují komponenty. Příklady: JFrame, JDialog, JPanel.",
    keywords: ["kontejnery", "JFrame", "JDialog", "JPanel"]
  },
  {
    id: 123, category: "gui", type: "theory", difficulty: "easy",
    question: "Co jsou layout managery?",
    answer: "Layout manager určuje rozmístění komponent v kontejneru. Příklady: BorderLayout, FlowLayout, GridLayout, BoxLayout, GridBagLayout.",
    keywords: ["layout manager", "BorderLayout", "FlowLayout", "GridLayout"]
  },
  {
    id: 124, category: "gui", type: "theory", difficulty: "medium",
    question: "Co je modální dialogové okno?",
    answer: "Modální dialog blokuje interakci s nadřazeným oknem, dokud není dialog uzavřen.",
    keywords: ["modální dialog", "blokování", "okno"]
  },
  {
    id: 125, category: "gui", type: "theory", difficulty: "easy",
    question: "Co je MVC?",
    answer: "MVC (Model-View-Controller) rozděluje aplikaci na Model, View a Controller.",
    keywords: ["MVC", "Model", "View", "Controller"]
  },
  {
    id: 126, category: "gui", type: "theory", difficulty: "easy",
    question: "Co je Model v MVC?",
    answer: "Model obsahuje data a aplikační logiku.",
    keywords: ["MVC", "Model", "data", "logika"]
  },
  {
    id: 127, category: "gui", type: "theory", difficulty: "easy",
    question: "Co je View v MVC?",
    answer: "View zobrazuje data uživateli.",
    keywords: ["MVC", "View", "zobrazení"]
  },
  {
    id: 128, category: "gui", type: "theory", difficulty: "easy",
    question: "Co je Controller v MVC?",
    answer: "Controller zpracovává vstupy uživatele a mění model nebo view.",
    keywords: ["MVC", "Controller", "vstupy"]
  },
  {
    id: 129, category: "gui", type: "theory", difficulty: "medium",
    question: "Jaké jsou výhody MVC?",
    answer: "Oddělení dat, zobrazení a řízení; lepší údržba; možnost více pohledů nad jedním modelem; menší provázanost částí aplikace.",
    keywords: ["MVC", "výhody", "oddělení", "údržba"]
  },
  {
    id: 130, category: "gui", type: "theory", difficulty: "medium",
    question: "Co je událostmi řízené programování?",
    answer: "Program nereaguje jen sekvenčně shora dolů, ale čeká na události. Příklady událostí: kliknutí na tlačítko, stisk klávesy, pohyb myši, zavření okna.",
    keywords: ["událostmi řízené", "event-driven", "události"]
  },
  {
    id: 131, category: "gui", type: "theory", difficulty: "medium",
    question: "Jaký je rozdíl mezi sekvenčním a událostmi řízeným programováním?",
    answer: "Sekvenční program se vykonává postupně podle pořadí příkazů. Událostmi řízený program čeká na události a podle nich spouští obslužný kód.",
    keywords: ["sekvenční", "událostmi řízené", "rozdíl"],
    options: [
      "Sekvenční = příkazy po pořadí; událostmi řízené = čeká na události",
      "Sekvenční = čeká na události; událostmi řízené = příkazy po pořadí",
      "Jsou to dva názvy pro totéž",
      "Sekvenční běží jen ve více vláknech"
    ],
    correctOption: 0
  },
  {
    id: 132, category: "gui", type: "theory", difficulty: "easy",
    question: "Co je event queue?",
    answer: "Event queue je fronta událostí. Události se do ní ukládají a postupně zpracovávají.",
    keywords: ["event queue", "fronta událostí"]
  },
  {
    id: 133, category: "gui", type: "code", difficulty: "easy",
    question: "Co je listener?",
    answer: "Listener je objekt, který reaguje na určitou událost.",
    keywords: ["listener", "posluchač", "událost"],
    codeExample: "button.addActionListener(listener);"
  },
  {
    id: 134, category: "gui", type: "code", difficulty: "easy",
    question: "Jak předepíšeme obsluhu stisknutí tlačítka?",
    answer: "Přidáním ActionListeneru přes addActionListener — buď anonymní třídou, nebo lambdou.",
    keywords: ["ActionListener", "addActionListener", "lambda", "tlačítko"],
    codeExample: "button.addActionListener(new ActionListener() {\n    @Override\n    public void actionPerformed(ActionEvent e) {\n        System.out.println(\"Clicked\");\n    }\n});\n\n// Nebo lambda:\nbutton.addActionListener(e -> System.out.println(\"Clicked\"));"
  },
  {
    id: 135, category: "gui", type: "theory", difficulty: "easy",
    question: "Jaké znáte typy událostí ve Swing aplikaci?",
    answer: "ActionEvent, MouseEvent, KeyEvent, WindowEvent, MouseWheelEvent.",
    keywords: ["ActionEvent", "MouseEvent", "KeyEvent", "WindowEvent"]
  },
  {
    id: 136, category: "gui", type: "theory", difficulty: "easy",
    question: "Co charakterizuje ActionEvent?",
    answer: "Vzniká například při kliknutí na tlačítko nebo výběru položky.",
    keywords: ["ActionEvent", "kliknutí", "tlačítko"]
  },
  {
    id: 137, category: "gui", type: "theory", difficulty: "easy",
    question: "Co charakterizuje MouseEvent?",
    answer: "Události myši: kliknutí, pohyb, stisk, uvolnění, vstup/opuštění komponenty.",
    keywords: ["MouseEvent", "myš", "kliknutí", "pohyb"]
  },
  {
    id: 138, category: "gui", type: "theory", difficulty: "easy",
    question: "Co charakterizuje WindowEvent?",
    answer: "Události okna: otevření, zavření, aktivace, deaktivace, minimalizace.",
    keywords: ["WindowEvent", "okno", "zavření", "aktivace"]
  },
  {
    id: 139, category: "gui", type: "theory", difficulty: "medium",
    question: "Proč se dlouhý výpočet nemá spouštět přímo v GUI vlákně?",
    answer: "Protože zablokuje překreslování a reakce GUI. Aplikace přestane být interaktivní (zamrzne).",
    keywords: ["EDT", "GUI vlákno", "blokování", "responzivita"],
    options: [
      "Zablokuje překreslování a reakce GUI – aplikace zamrzne",
      "Zrychlí to výpočet díky prioritě GUI vlákna",
      "Nic se nestane, GUI vlákno zvládne vše",
      "Způsobí to deadlock garbage collectoru"
    ],
    correctOption: 0
  },
  {
    id: 140, category: "gui", type: "theory", difficulty: "medium",
    question: "Co je SwingWorker?",
    answer: "SwingWorker slouží ke spuštění dlouhé práce na pozadí a bezpečné aktualizaci Swing GUI. Důležité metody: doInBackground(), process(), done(), publish().",
    keywords: ["SwingWorker", "pozadí", "doInBackground", "EDT"]
  },

  /* ============== 12. Vlákna, paralelismus, synchronizace ============== */
  {
    id: 141, category: "threads", type: "theory", difficulty: "easy",
    question: "Co je proces?",
    answer: "Proces je spuštěný program s vlastním paměťovým prostorem, který plánuje operační systém.",
    keywords: ["proces", "paměťový prostor", "OS"]
  },
  {
    id: 142, category: "threads", type: "theory", difficulty: "easy",
    question: "Co je vlákno?",
    answer: "Vlákno je jednotka běhu uvnitř procesu. Vlákna stejného procesu sdílejí paměť.",
    keywords: ["vlákno", "thread", "sdílená paměť"]
  },
  {
    id: 143, category: "threads", type: "trap", difficulty: "easy",
    question: "Jaký je rozdíl mezi procesem a vláknem?",
    answer: "Proces má vlastní paměťový prostor. Vlákna běží uvnitř procesu a sdílejí jeho paměť.",
    keywords: ["proces", "vlákno", "paměť", "rozdíl"],
    options: [
      "Proces má vlastní paměť; vlákna v procesu sdílejí paměť",
      "Vlákno má vlastní paměť; procesy sdílejí paměť",
      "Proces i vlákno mají vždy oddělenou paměť",
      "Mezi procesem a vláknem není rozdíl"
    ],
    correctOption: 0
  },
  {
    id: 144, category: "threads", type: "theory", difficulty: "medium",
    question: "Kdy má smysl použít vícevláknovou architekturu?",
    answer: "Když aplikace má nezávislé úlohy, dlouhé blokující operace, výpočetně náročné části, musí zůstat responzivní, nebo čeká na asynchronní události.",
    keywords: ["vícevláknová architektura", "responzivita", "paralelismus"]
  },
  {
    id: 145, category: "threads", type: "theory", difficulty: "medium",
    question: "Má smysl paralelizovat program i na jednom procesoru?",
    answer: "Ano, pokud jde o responzivitu nebo čekání na I/O. OS může přepínat vlákna, takže GUI může reagovat, i když jiné vlákno čeká. Pro čistě výpočetní zrychlení na jednom jádře to většinou smysl nemá.",
    keywords: ["paralelismus", "jeden procesor", "I/O", "responzivita"]
  },
  {
    id: 146, category: "threads", type: "trap", difficulty: "medium",
    question: "Co je problém souběhu / race condition?",
    answer: "Race condition nastává, když více vláken přistupuje ke sdíleným datům a alespoň jedno je mění bez správné synchronizace. Výsledek závisí na pořadí běhu vláken.",
    keywords: ["race condition", "souběh", "synchronizace", "sdílená data"],
    options: [
      "Výsledek závisí na pořadí běhu vláken při nesynchronizovaném přístupu k datům",
      "Vlákna na sebe navzájem čekají a žádné nepokračuje",
      "Vlákno se dlouhodobě nedostane ke zdroji",
      "Vlákno běží příliš rychle a přetíží CPU"
    ],
    correctOption: 0
  },
  {
    id: 147, category: "threads", type: "trap", difficulty: "medium",
    question: "Co je deadlock?",
    answer: "Deadlock je situace, kdy vlákna čekají navzájem na zdroje, které drží jiné vlákno, a žádné nemůže pokračovat.",
    keywords: ["deadlock", "uváznutí", "vzájemné čekání"]
  },
  {
    id: 148, category: "threads", type: "trap", difficulty: "medium",
    question: "Co je starvation?",
    answer: "Starvation znamená, že vlákno dlouhodobě nedostává přístup ke zdroji nebo CPU, i když by mohlo běžet.",
    keywords: ["starvation", "hladovění", "přístup ke zdroji"]
  },
  {
    id: 149, category: "threads", type: "theory", difficulty: "medium",
    question: "Jaké jsou hlavní synchronizační problémy ve vícevláknových aplikacích?",
    answer: "Race condition, deadlock, starvation, producer-consumer problém, reader-writer problém, lock contention.",
    keywords: ["race condition", "deadlock", "starvation", "lock contention"]
  },
  {
    id: 150, category: "threads", type: "theory", difficulty: "medium",
    question: "Jak se lze vyhnout deadlocku?",
    answer: "Například: zamykat zdroje vždy ve stejném pořadí, minimalizovat kritické sekce, nečekat při držení zámku, použít timeouty, použít vyšší synchronizační mechanismus.",
    keywords: ["deadlock", "pořadí zámků", "timeout", "prevence"]
  },
  {
    id: 151, category: "threads", type: "theory", difficulty: "medium",
    question: "Jak dosáhneme thread-safe funkce?",
    answer: "Například: nepoužívat sdílený měnitelný stav, použít synchronized, použít immutable objekty, použít atomické proměnné, použít thread-safe kolekce, správně používat zámky.",
    keywords: ["thread-safe", "synchronized", "immutable", "atomické proměnné"]
  },
  {
    id: 152, category: "threads", type: "code", difficulty: "medium",
    question: "Co je monitor?",
    answer: "Monitor je synchronizační mechanismus spojený s objektem. V Javě ho používá klíčové slovo synchronized.",
    keywords: ["monitor", "synchronized", "zámek"],
    codeExample: "synchronized (lock) {\n    // kritická sekce\n}"
  },
  {
    id: 153, category: "threads", type: "theory", difficulty: "medium",
    question: "Co dělá synchronized?",
    answer: "Zajišťuje, že daný blok nebo metodu může v jeden čas vykonávat jen jedno vlákno nad daným monitorem.",
    keywords: ["synchronized", "monitor", "vzájemné vyloučení"]
  },
  {
    id: 154, category: "threads", type: "theory", difficulty: "easy",
    question: "Co je kritická sekce?",
    answer: "Část kódu, kde se pracuje se sdílenými daty a musí být chráněna před souběžným přístupem.",
    keywords: ["kritická sekce", "sdílená data", "ochrana"]
  },
  {
    id: 155, category: "threads", type: "code", difficulty: "easy",
    question: "Co je Runnable?",
    answer: "Runnable je funkcionální rozhraní s metodou void run(). Používá se pro kód, který má být spuštěn ve vlákně.",
    keywords: ["Runnable", "run", "Thread", "funkcionální rozhraní"],
    codeExample: "Runnable r = () -> System.out.println(\"Running\");\nnew Thread(r).start();"
  },
  {
    id: 156, category: "threads", type: "code", difficulty: "easy",
    question: "K čemu slouží isAlive()?",
    answer: "Vrací, zda vlákno stále běží.",
    keywords: ["isAlive", "stav vlákna"],
    codeExample: "thread.isAlive()"
  },
  {
    id: 157, category: "threads", type: "code", difficulty: "medium",
    question: "K čemu slouží join()?",
    answer: "Aktuální vlákno počká, než jiné vlákno skončí.",
    keywords: ["join", "čekání na vlákno"],
    codeExample: "thread.join();"
  },
  {
    id: 158, category: "threads", type: "code", difficulty: "easy",
    question: "K čemu slouží sleep()?",
    answer: "Uspí aktuální vlákno na danou dobu (v milisekundách).",
    keywords: ["sleep", "uspání vlákna"],
    codeExample: "Thread.sleep(1000);"
  },
  {
    id: 159, category: "threads", type: "theory", difficulty: "medium",
    question: "K čemu slouží yield()?",
    answer: "Naznačí plánovači, že aktuální vlákno může uvolnit procesor jiným vláknům. Efekt není garantovaný.",
    keywords: ["yield", "plánovač", "uvolnění CPU"]
  },
  {
    id: 160, category: "threads", type: "theory", difficulty: "medium",
    question: "Co je Thread Pool?",
    answer: "Thread pool je skupina znovupoužitelných vláken. Místo vytváření nového vlákna pro každou úlohu se úlohy zadávají do poolu. Výhody: menší režie, kontrola počtu vláken, lepší výkon serverových aplikací.",
    keywords: ["Thread Pool", "znovupoužití vláken", "režie"],
    options: [
      "Skupina znovupoužitelných vláken, do které se zadávají úlohy",
      "Jediné vlákno zpracovávající vše sekvenčně",
      "Fronta procesů spravovaná OS",
      "Mechanismus pro zamykání sdílených dat"
    ],
    correctOption: 0
  },
  {
    id: 161, category: "threads", type: "theory", difficulty: "medium",
    question: "Jaké vlastnosti hledáme u Thread Poolu?",
    answer: "Omezený počet vláken, fronta úloh, znovupoužití vláken, možnost ukončení, správa přetížení.",
    keywords: ["Thread Pool", "fronta úloh", "omezený počet vláken"]
  },
  {
    id: 162, category: "threads", type: "theory", difficulty: "medium",
    question: "Jaké modely vícevláknových aplikací znáte?",
    answer: "Boss/Worker, Peer, Pipeline, Producer/Consumer, Thread Pool.",
    keywords: ["Boss/Worker", "Peer", "Pipeline", "Producer/Consumer"]
  },
  {
    id: 163, category: "threads", type: "theory", difficulty: "medium",
    question: "Co je Boss/Worker model?",
    answer: "Boss přijímá požadavky a rozděluje práci workerům. Workeři zpracovávají úlohy.",
    keywords: ["Boss/Worker", "rozdělování práce"]
  },
  {
    id: 164, category: "threads", type: "theory", difficulty: "medium",
    question: "Co je Peer model?",
    answer: "Vlákna jsou rovnocenná. Není zde centrální řídicí vlákno.",
    keywords: ["Peer model", "rovnocenná vlákna"]
  },
  {
    id: 165, category: "threads", type: "theory", difficulty: "medium",
    question: "Co je Pipeline model?",
    answer: "Data procházejí několika fázemi zpracování. Každá fáze může běžet ve vlastním vlákně.",
    keywords: ["Pipeline", "fáze zpracování", "proud dat"]
  },
  {
    id: 166, category: "threads", type: "theory", difficulty: "medium",
    question: "Kdy je výhodné vícevláknové proudové zpracování dat?",
    answer: "Když jsou jednotky vstupu nezávislé a mohou být zpracovány paralelně (např. velké množství nezávislých obrázků, nezávislé záznamy, nezávislé požadavky).",
    keywords: ["proudové zpracování", "nezávislé jednotky", "paralelismus"]
  },
  {
    id: 167, category: "threads", type: "theory", difficulty: "medium",
    question: "Co je Producer/Consumer?",
    answer: "Jedno vlákno produkuje data do bufferu/fronty, druhé je odebírá a zpracovává. Přístup do bufferu musí být synchronizovaný.",
    keywords: ["Producer/Consumer", "buffer", "fronta", "synchronizace"]
  },
  {
    id: 168, category: "threads", type: "theory", difficulty: "medium",
    question: "Jaké základní operace řeší jazyky s podporou paralelismu?",
    answer: "Vytváření vláken, spouštění vláken, ukončení vláken, synchronizace, komunikace mezi vlákny, zamykání sdílených zdrojů.",
    keywords: ["paralelismus", "vlákna", "synchronizace", "zamykání"]
  },
  {
    id: 169, category: "threads", type: "theory", difficulty: "hard",
    question: "Co je reentrantní funkce?",
    answer: "Reentrantní funkci lze bezpečně zavolat znovu dříve, než předchozí volání skončilo. Neměla by používat sdílený měnitelný stav, globální proměnné ani statická data bez synchronizace.",
    keywords: ["reentrantní funkce", "sdílený stav", "thread-safe"]
  },

  /* ============== 13. Síťování, sockety, protokoly ============== */
  {
    id: 170, category: "network", type: "theory", difficulty: "easy",
    question: "Co je komunikace?",
    answer: "Komunikace je výměna zpráv mezi dvěma nebo více účastníky. Typicky obsahuje zahájení komunikace, předání zprávy, reakci na zprávu a ukončení komunikace.",
    keywords: ["komunikace", "výměna zpráv", "účastníci"]
  },
  {
    id: 171, category: "network", type: "theory", difficulty: "easy",
    question: "Co je protokol?",
    answer: "Protokol definuje pravidla komunikace: formát zpráv, pořadí zpráv, syntaxi, sémantiku a reakce na zprávy.",
    keywords: ["protokol", "pravidla", "formát", "syntaxe", "sémantika"],
    options: [
      "Pravidla komunikace: formát, pořadí, syntaxe, sémantika zpráv",
      "Fyzické propojení dvou počítačů kabelem",
      "Adresa konkrétního počítače v síti",
      "Program pro odesílání e-mailů"
    ],
    correctOption: 0
  },
  {
    id: 172, category: "network", type: "theory", difficulty: "easy",
    question: "Jaké znáte modely komunikace?",
    answer: "Klient/server a peer-to-peer.",
    keywords: ["klient/server", "peer-to-peer", "modely komunikace"]
  },
  {
    id: 173, category: "network", type: "theory", difficulty: "easy",
    question: "Co je klient/server?",
    answer: "Server poskytuje službu. Klient o službu žádá. Příklad: webový server a prohlížeč.",
    keywords: ["klient", "server", "služba"]
  },
  {
    id: 174, category: "network", type: "theory", difficulty: "easy",
    question: "Co je peer-to-peer?",
    answer: "Každý účastník může být klient i server zároveň.",
    keywords: ["peer-to-peer", "P2P", "rovnocenní účastníci"]
  },
  {
    id: 175, category: "network", type: "theory", difficulty: "medium",
    question: "Jaké způsoby navazování komunikace znáte?",
    answer: "V kontextu sítí hlavně spojovaná a nespojovaná komunikace. Obecně také: TCP, UDP, pipe, sdílená paměť, zprávy mezi objekty.",
    keywords: ["spojovaná", "nespojovaná", "TCP", "UDP", "pipe"]
  },
  {
    id: 176, category: "network", type: "theory", difficulty: "medium",
    question: "Co je spojovaná komunikace?",
    answer: "Nejdříve se naváže spojení, potom se přenášejí data a nakonec se spojení ukončí. Příklad: TCP.",
    keywords: ["spojovaná komunikace", "TCP", "navázání spojení"]
  },
  {
    id: 177, category: "network", type: "theory", difficulty: "medium",
    question: "Co je nespojovaná komunikace?",
    answer: "Strany nenavazují spojení. Posílají se samostatné zprávy/datagramy. Příklad: UDP.",
    keywords: ["nespojovaná komunikace", "UDP", "datagram"]
  },
  {
    id: 178, category: "network", type: "theory", difficulty: "easy",
    question: "Co je proudový přenos?",
    answer: "Data se přenášejí jako proud bajtů. Typicky TCP.",
    keywords: ["proudový přenos", "TCP", "proud bajtů"]
  },
  {
    id: 179, category: "network", type: "theory", difficulty: "easy",
    question: "Co je blokový/datagramový přenos?",
    answer: "Data se přenášejí po samostatných blocích (datagramech). Typicky UDP.",
    keywords: ["datagramový přenos", "UDP", "bloky"]
  },
  {
    id: 180, category: "network", type: "trap", difficulty: "medium",
    question: "Jaký je rozdíl mezi TCP a UDP?",
    answer: "TCP je spojovaný, spolehlivý, zachovává pořadí a používá proudový přenos. UDP je nespojovaný, nespolehlivý, nezaručuje pořadí a používá datagramy.",
    keywords: ["TCP", "UDP", "spolehlivost", "pořadí"],
    options: [
      "TCP = spojovaný, spolehlivý, pořadí; UDP = nespojovaný, nespolehlivý, datagramy",
      "TCP = nespojovaný a rychlý; UDP = spojovaný a spolehlivý",
      "Oba garantují doručení a pořadí",
      "TCP používá datagramy, UDP proud bajtů"
    ],
    correctOption: 0
  },
  {
    id: 181, category: "network", type: "theory", difficulty: "easy",
    question: "Kdy použít TCP?",
    answer: "Když potřebujeme spolehlivý přenos a zachování pořadí. Příklad: HTTP, SSH, Telnet, FTP.",
    keywords: ["TCP", "spolehlivost", "HTTP", "SSH", "FTP"]
  },
  {
    id: 182, category: "network", type: "theory", difficulty: "easy",
    question: "Kdy použít UDP?",
    answer: "Když je důležitá nízká latence a nevadí ztráta části dat. Příklad: streamování, hry, senzorická data, DNS.",
    keywords: ["UDP", "nízká latence", "streamování", "DNS"]
  },
  {
    id: 183, category: "network", type: "theory", difficulty: "easy",
    question: "Jaké protokoly použijeme pro jednoduchou aplikaci typu telnet?",
    answer: "Telnet používá TCP.",
    keywords: ["telnet", "TCP"]
  },
  {
    id: 184, category: "network", type: "theory", difficulty: "easy",
    question: "Co je HTTP?",
    answer: "HTTP je aplikační protokol nad TCP. Funguje modelem request/response (požadavek/odpověď).",
    keywords: ["HTTP", "aplikační protokol", "request/response", "TCP"]
  },
  {
    id: 185, category: "network", type: "theory", difficulty: "easy",
    question: "Co je socket?",
    answer: "Socket je koncový bod komunikace mezi procesy přes síť.",
    keywords: ["socket", "koncový bod", "komunikace"]
  },
  {
    id: 186, category: "network", type: "code", difficulty: "medium",
    question: "Co je serverový socket?",
    answer: "Serverový socket čeká na příchozí spojení na určitém portu.",
    keywords: ["ServerSocket", "port", "accept"],
    codeExample: "ServerSocket server = new ServerSocket(8080);\nSocket client = server.accept();"
  },
  {
    id: 187, category: "network", type: "code", difficulty: "medium",
    question: "Co je klientský socket?",
    answer: "Klientský socket navazuje spojení se serverem.",
    keywords: ["Socket", "klient", "connect"],
    codeExample: "Socket socket = new Socket(\"localhost\", 8080);"
  },
  {
    id: 188, category: "network", type: "theory", difficulty: "medium",
    question: "Co je součástí plné specifikace TCP/IP socketu?",
    answer: "U navázaného spojení: protokol, lokální IP adresa, lokální port, vzdálená IP adresa, vzdálený port.",
    keywords: ["socket", "IP adresa", "port", "protokol", "5-tice"]
  },
  {
    id: 189, category: "network", type: "code", difficulty: "medium",
    question: "Jaká jsou základní primitiva socketu?",
    answer: "Obecně: create, bind, connect, listen, accept, send, receive, shutdown, close. V Javě typicky: new ServerSocket(port), accept(), new Socket(host, port), getInputStream(), getOutputStream(), close().",
    keywords: ["bind", "connect", "listen", "accept", "send", "receive"],
    codeExample: "new ServerSocket(port)\naccept()\nnew Socket(host, port)\ngetInputStream()\ngetOutputStream()\nclose()"
  },
  {
    id: 190, category: "network", type: "theory", difficulty: "medium",
    question: "K čemu slouží bind?",
    answer: "Přiřadí socketu lokální adresu a port.",
    keywords: ["bind", "lokální adresa", "port"]
  },
  {
    id: 191, category: "network", type: "theory", difficulty: "easy",
    question: "K čemu slouží connect?",
    answer: "Klient naváže spojení se vzdáleným socketem.",
    keywords: ["connect", "navázání spojení", "klient"]
  },
  {
    id: 192, category: "network", type: "theory", difficulty: "easy",
    question: "K čemu slouží listen?",
    answer: "Server začne čekat na příchozí spojení.",
    keywords: ["listen", "server", "čekání na spojení"]
  },
  {
    id: 193, category: "network", type: "theory", difficulty: "easy",
    question: "K čemu slouží accept?",
    answer: "Server přijme příchozí spojení a vrátí socket pro komunikaci s klientem.",
    keywords: ["accept", "server", "příchozí spojení"]
  },
  {
    id: 194, category: "network", type: "code", difficulty: "medium",
    question: "Jak lze standardní vstup a výstup použít ke komunikaci mezi procesy?",
    answer: "Pomocí pipe (roury). Výstup jednoho procesu se použije jako vstup druhého.",
    keywords: ["pipe", "roura", "stdin", "stdout", "IPC"],
    codeExample: "ls | grep test"
  },

  /* ============== 14. Algoritmy, datové struktury ============== */
  {
    id: 195, category: "algorithms", type: "theory", difficulty: "easy",
    question: "Jak popíšeme algoritmus před implementací?",
    answer: "Například: pseudokódem, vývojovým diagramem, slovním popisem, UML/strukturogramem, matematickým zápisem.",
    keywords: ["algoritmus", "pseudokód", "vývojový diagram", "UML"]
  },
  {
    id: 196, category: "algorithms", type: "theory", difficulty: "easy",
    question: "Jak popíšeme algoritmus z hlediska použití?",
    answer: "Popíšeme vstupy, výstupy, účel, hlavní kroky, podmínky použití a příklad použití.",
    keywords: ["algoritmus", "vstupy", "výstupy", "účel"]
  },
  {
    id: 197, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Jaké jsou ukazatele kvality algoritmu?",
    answer: "Časová složitost, paměťová složitost, korektnost, terminace, stabilita (u třídění), univerzálnost.",
    keywords: ["časová složitost", "paměťová složitost", "korektnost", "terminace"],
    options: [
      "Časová a paměťová složitost, korektnost, terminace, stabilita, univerzálnost",
      "Pouze rychlost běhu na konkrétním počítači",
      "Počet řádků zdrojového kódu",
      "Jen velikost vstupu"
    ],
    correctOption: 0
  },
  {
    id: 198, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Co znamená, že je algoritmus univerzální?",
    answer: "Algoritmus řeší celou třídu problémů, ne jen jeden konkrétní vstup. Příklad: obecné třídění s komparátorem.",
    keywords: ["univerzální algoritmus", "třída problémů", "komparátor"]
  },
  {
    id: 199, category: "algorithms", type: "trap", difficulty: "medium",
    question: "Je efektivnější rekurze nebo iterace?",
    answer: "Obvykle iterace, protože rekurze vytváří další volání na zásobníku. Rekurze ale může být přirozenější pro stromové nebo rekurzivní struktury.",
    keywords: ["rekurze", "iterace", "zásobník", "efektivita"]
  },
  {
    id: 200, category: "algorithms", type: "trap", difficulty: "easy",
    question: "Jaký je rozdíl mezi zásobníkem a frontou?",
    answer: "Zásobník: LIFO (Last In, First Out). Fronta: FIFO (First In, First Out).",
    keywords: ["zásobník", "fronta", "LIFO", "FIFO"],
    options: [
      "Zásobník = LIFO; fronta = FIFO",
      "Zásobník = FIFO; fronta = LIFO",
      "Oba jsou LIFO",
      "Oba jsou FIFO"
    ],
    correctOption: 0
  },
  {
    id: 201, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Jaké znáte nelineární datové struktury?",
    answer: "Strom, graf, halda. V Javě například TreeSet, TreeMap, PriorityQueue.",
    keywords: ["strom", "graf", "halda", "TreeSet", "PriorityQueue"]
  },
  {
    id: 202, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Co je halda?",
    answer: "Halda (heap) je stromová datová struktura splňující heap property. Používá se například pro prioritní frontu.",
    keywords: ["halda", "heap", "heap property", "prioritní fronta"]
  },
  {
    id: 203, category: "algorithms", type: "code", difficulty: "medium",
    question: "Co je prioritní fronta?",
    answer: "Prioritní fronta odebírá prvek podle priority, ne podle pořadí vložení.",
    keywords: ["prioritní fronta", "PriorityQueue", "priorita"],
    codeExample: "PriorityQueue<Integer> pq = new PriorityQueue<>();"
  },
  {
    id: 204, category: "algorithms", type: "trap", difficulty: "medium",
    question: "Co je slabě typovaný jazyk?",
    answer: "Slabě typovaný jazyk dovoluje implicitní nebo volnější konverze mezi typy (např. JavaScript, PHP). Java je silně typovaný jazyk.",
    keywords: ["slabě typovaný", "silně typovaný", "konverze", "Java"],
    commonMistakes: "Java je SILNĚ typovaný jazyk. Slabě typované jsou např. JavaScript a PHP."
  },
  {
    id: 205, category: "algorithms", type: "trap", difficulty: "hard",
    question: "Co znamená statické a dynamické stanovení typu?",
    answer: "Statické stanovení typu: typ je znám při překladu. Dynamické stanovení typu: typ se určí až za běhu. Java má statické typování, ale polymorfismus používá dynamický dispatch metod.",
    keywords: ["statické typování", "dynamické typování", "dispatch", "Java"]
  },
  {
    id: 206, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Co popisuje sémantika programovacího jazyka?",
    answer: "Sémantika popisuje význam syntakticky správných konstrukcí programu. Syntaxe říká, JAK se něco píše; sémantika říká, CO to znamená.",
    keywords: ["sémantika", "syntaxe", "význam"]
  },
  {
    id: 207, category: "algorithms", type: "code", difficulty: "medium",
    question: "Jak realizujeme předání více hodnot jako návratové hodnoty metody?",
    answer: "Možnosti: vrátit objekt, vrátit pole, vrátit kolekci, použít record, použít vlastní třídu.",
    keywords: ["návratová hodnota", "record", "objekt", "pole"],
    codeExample: "record Result(int count, String name) {\n}"
  },
  {
    id: 208, category: "algorithms", type: "code", difficulty: "medium",
    question: "Jakého typu musí být formální a skutečný parametr?",
    answer: "Skutečný parametr musí být kompatibilní s formálním parametrem (např. potomek lze předat tam, kde se očekává předek).",
    keywords: ["formální parametr", "skutečný parametr", "kompatibilita"],
    codeExample: "void feed(Animal a) {\n}\nfeed(new Dog()); // Dog dědí z Animal"
  },
  {
    id: 209, category: "algorithms", type: "theory", difficulty: "medium",
    question: "Co je fiktivní/dummy parametr?",
    answer: "Parametr, který je v signatuře metody, ale uvnitř se nepoužívá. Používá se například kvůli kompatibilitě rozhraní.",
    keywords: ["dummy parametr", "fiktivní parametr", "kompatibilita rozhraní"]
  },

  /* ============== 15. Paměť, GC, JVM výkon ============== */
  {
    id: 210, category: "memory", type: "trap", difficulty: "medium",
    question: "Jaký je rozdíl mezi stackem a heapem?",
    answer: "Stack obsahuje rámce volání metod, lokální proměnné a reference. Heap obsahuje objekty vytvořené za běhu programu.",
    keywords: ["stack", "heap", "rámce", "objekty", "reference"],
    options: [
      "Stack = rámce metod, lokální proměnné, reference; heap = objekty",
      "Stack = objekty; heap = lokální proměnné",
      "Stack i heap ukládají totéž",
      "Heap = rámce metod; stack = objekty"
    ],
    correctOption: 0
  },
  {
    id: 211, category: "memory", type: "trap", difficulty: "medium",
    question: "Kde jsou lokální proměnné?",
    answer: "Lokální proměnné a reference jsou typicky na stacku. Objekty, na které reference ukazují, jsou na heapu.",
    keywords: ["lokální proměnné", "stack", "heap", "reference"]
  },
  {
    id: 212, category: "memory", type: "trap", difficulty: "medium",
    question: "Kde jsou instanční proměnné?",
    answer: "Instanční proměnné jsou součástí objektu, tedy na heapu.",
    keywords: ["instanční proměnné", "heap", "objekt"]
  },
  {
    id: 213, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je garbage collection?",
    answer: "Garbage collection je automatické uvolňování objektů, které už nejsou dosažitelné.",
    keywords: ["garbage collection", "GC", "uvolňování paměti", "dosažitelnost"]
  },
  {
    id: 214, category: "memory", type: "theory", difficulty: "medium",
    question: "Kdy je objekt kandidátem na odstranění GC?",
    answer: "Když k němu nevede žádná cesta od GC roots.",
    keywords: ["GC roots", "dosažitelnost", "kandidát na odstranění"]
  },
  {
    id: 215, category: "memory", type: "theory", difficulty: "medium",
    question: "Co jsou GC roots?",
    answer: "Například: reference na stacku, statická pole, aktivní vlákna, JNI handly.",
    keywords: ["GC roots", "stack", "statická pole", "vlákna", "JNI"]
  },
  {
    id: 216, category: "memory", type: "trap", difficulty: "medium",
    question: "Co znamená dosažitelnost objektu?",
    answer: "Objekt je dosažitelný, pokud k němu vede cesta z GC roots. GC neřeší užitečnost objektu, ale dosažitelnost.",
    keywords: ["dosažitelnost", "GC roots", "užitečnost"],
    commonMistakes: "GC nemaže objekty podle toho, zda jsou 'užitečné', ale podle DOSAŽITELNOSTI z GC roots."
  },
  {
    id: 217, category: "memory", type: "theory", difficulty: "medium",
    question: "Co je memory leak v Javě?",
    answer: "Objekt už nepotřebujeme, ale stále na něj existuje reference, takže ho GC nemůže odstranit.",
    keywords: ["memory leak", "reference", "GC", "únik paměti"]
  },
  {
    id: 218, category: "memory", type: "theory", difficulty: "medium",
    question: "Jaké znáte typy referencí v Javě?",
    answer: "strong reference, soft reference, weak reference, phantom reference.",
    keywords: ["strong", "soft", "weak", "phantom", "reference"]
  },
  {
    id: 219, category: "memory", type: "theory", difficulty: "medium",
    question: "Co je strong reference?",
    answer: "Běžná reference. Dokud existuje, objekt zůstává živý (GC ho neodstraní).",
    keywords: ["strong reference", "běžná reference"]
  },
  {
    id: 220, category: "memory", type: "theory", difficulty: "medium",
    question: "Co je soft reference?",
    answer: "Reference, kterou GC může odstranit při nedostatku paměti. Používá se pro cache.",
    keywords: ["soft reference", "cache", "nedostatek paměti"]
  },
  {
    id: 221, category: "memory", type: "theory", difficulty: "medium",
    question: "Co je weak reference?",
    answer: "Slabá reference. Objekt může být odstraněn při nejbližší vhodné GC, pokud na něj nejsou silné reference.",
    keywords: ["weak reference", "slabá reference", "GC"]
  },
  {
    id: 222, category: "memory", type: "theory", difficulty: "hard",
    question: "Co je phantom reference?",
    answer: "Slouží ke sledování úklidu objektu. Objekt už nelze přes phantom referenci běžně používat.",
    keywords: ["phantom reference", "sledování úklidu"]
  },
  {
    id: 223, category: "memory", type: "theory", difficulty: "medium",
    question: "Co je generační GC?",
    answer: "GC rozděluje heap na mladou a starou generaci. Většina objektů zaniká brzy, proto se mladá generace uklízí častěji.",
    keywords: ["generační GC", "mladá generace", "stará generace"],
    options: [
      "GC dělí heap na mladou a starou generaci; mladá se uklízí častěji",
      "GC běží jen jednou při ukončení programu",
      "GC dělí stack na generace podle vláken",
      "GC nikdy nemaže staré objekty"
    ],
    correctOption: 0
  },
  {
    id: 224, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je Minor GC?",
    answer: "Úklid mladé generace.",
    keywords: ["Minor GC", "mladá generace"]
  },
  {
    id: 225, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je Major GC?",
    answer: "Úklid staré generace.",
    keywords: ["Major GC", "stará generace"]
  },
  {
    id: 226, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je Full GC?",
    answer: "Úklid celého heapu.",
    keywords: ["Full GC", "celý heap"]
  },
  {
    id: 227, category: "memory", type: "theory", difficulty: "hard",
    question: "Co je Escape Analysis?",
    answer: "Optimalizace JIT kompilátoru. Zjišťuje, jestli objekt „uniká“ mimo metodu nebo vlákno. Pokud neuniká, JVM může optimalizovat alokaci nebo odstranit zámky.",
    keywords: ["Escape Analysis", "JIT", "únik objektu", "optimalizace"]
  },
  {
    id: 228, category: "memory", type: "theory", difficulty: "hard",
    question: "Jaké stavy rozlišuje Escape Analysis?",
    answer: "NoEscape, ArgEscape, GlobalEscape.",
    keywords: ["NoEscape", "ArgEscape", "GlobalEscape", "Escape Analysis"]
  },
  {
    id: 229, category: "memory", type: "theory", difficulty: "hard",
    question: "Co je NoEscape?",
    answer: "Objekt není viditelný mimo aktuální metodu/vlákno. JVM ho může výrazně optimalizovat (např. alokace na stacku, odstranění zámků).",
    keywords: ["NoEscape", "optimalizace", "lokální objekt"]
  },
  {
    id: 230, category: "memory", type: "theory", difficulty: "hard",
    question: "Co je ArgEscape?",
    answer: "Objekt je předán jako argument, ale neuniká globálně.",
    keywords: ["ArgEscape", "argument", "Escape Analysis"]
  },
  {
    id: 231, category: "memory", type: "theory", difficulty: "hard",
    question: "Co je GlobalEscape?",
    answer: "Objekt uniká mimo metodu, například návratovou hodnotou nebo uložením do statické proměnné.",
    keywords: ["GlobalEscape", "návratová hodnota", "statická proměnná"]
  },
  {
    id: 232, category: "memory", type: "theory", difficulty: "medium",
    question: "Co znamená výkon aplikace na JVM?",
    answer: "Výkon není jedno číslo. Sledují se hlavně: latency, throughput, allocation rate, memory footprint.",
    keywords: ["výkon", "latency", "throughput", "allocation rate", "footprint"]
  },
  {
    id: 233, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je latency?",
    answer: "Doba jedné odpovědi nebo operace.",
    keywords: ["latency", "doba odezvy"]
  },
  {
    id: 234, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je throughput?",
    answer: "Počet operací za jednotku času.",
    keywords: ["throughput", "propustnost", "operace za čas"]
  },
  {
    id: 235, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je allocation rate?",
    answer: "Kolik objektů/paměti program alokuje za jednotku času.",
    keywords: ["allocation rate", "alokace", "rychlost alokace"]
  },
  {
    id: 236, category: "memory", type: "theory", difficulty: "easy",
    question: "Co je footprint?",
    answer: "Kolik paměti aplikace drží živé.",
    keywords: ["footprint", "živá paměť"]
  },
  {
    id: 237, category: "memory", type: "trap", difficulty: "medium",
    question: "Proč je špatné měřit výkon jedním během bez warmupu?",
    answer: "První běh obsahuje class loading, JIT warmup a často více GC aktivity. Výsledek může být zavádějící.",
    keywords: ["warmup", "měření výkonu", "JIT", "class loading"]
  },
  {
    id: 238, category: "memory", type: "theory", difficulty: "medium",
    question: "Jaké nástroje se používají pro profilování JVM?",
    answer: "VisualVM, jcmd, JFR (Java Flight Recorder), jstat, GC log, heap dump, thread dump.",
    keywords: ["VisualVM", "jcmd", "JFR", "jstat", "heap dump", "thread dump"]
  },
  {
    id: 239, category: "memory", type: "theory", difficulty: "medium",
    question: "K čemu slouží VisualVM?",
    answer: "K rychlé kontrole CPU, heapu, GC aktivity, threadů a samplerů.",
    keywords: ["VisualVM", "CPU", "heap", "GC", "thready"]
  },
  {
    id: 240, category: "memory", type: "code", difficulty: "medium",
    question: "K čemu slouží jcmd?",
    answer: "K diagnostice běžící JVM.",
    keywords: ["jcmd", "diagnostika", "běžící JVM"],
    codeExample: "jcmd <pid> GC.heap_info\njcmd <pid> GC.class_histogram\njcmd <pid> Thread.print"
  },
  {
    id: 241, category: "memory", type: "theory", difficulty: "medium",
    question: "K čemu slouží JFR?",
    answer: "Java Flight Recorder slouží k nízko-režijnímu profilování aplikace.",
    keywords: ["JFR", "Java Flight Recorder", "profilování"]
  },
  {
    id: 242, category: "memory", type: "theory", difficulty: "hard",
    question: "Jak poznat CPU pressure?",
    answer: "CPU je vysoké, aplikace je pomalá a profiler ukazuje několik dominantních metod.",
    keywords: ["CPU pressure", "profiler", "dominantní metody"]
  },
  {
    id: 243, category: "memory", type: "theory", difficulty: "hard",
    question: "Jak poznat allocation pressure?",
    answer: "Heap má pilovitý tvar, GC běží často a sampler ukazuje velké množství krátkodobých objektů.",
    keywords: ["allocation pressure", "pilovitý heap", "GC", "krátkodobé objekty"]
  },
  {
    id: 244, category: "memory", type: "theory", difficulty: "hard",
    question: "Jak poznat lock contention?",
    answer: "CPU nemusí být vysoké, ale hodně vláken čeká ve stavu BLOCKED nebo WAITING na stejný zámek.",
    keywords: ["lock contention", "BLOCKED", "WAITING", "zámek"]
  },

  /* ===================== 16. Moderní Java ===================== */
  {
    id: 245, category: "modern", type: "code", difficulty: "medium",
    question: "Co jsou records?",
    answer: "record je stručný zápis immutable datové třídy. Automaticky generuje konstruktor, gettery (ve formě name()), equals(), hashCode() a toString().",
    keywords: ["record", "immutable", "datová třída", "equals", "hashCode"],
    codeExample: "record Person(String name, int age) {\n}"
  },
  {
    id: 246, category: "modern", type: "code", difficulty: "medium",
    question: "K čemu jsou lambda funkce?",
    answer: "Lambda je stručný zápis anonymní funkce pro funkcionální rozhraní.",
    keywords: ["lambda", "anonymní funkce", "funkcionální rozhraní"],
    codeExample: "list.forEach(x -> System.out.println(x));"
  },
  {
    id: 247, category: "modern", type: "theory", difficulty: "medium",
    question: "Co je funkcionální rozhraní?",
    answer: "Rozhraní s jednou abstraktní metodou. Příklady: Runnable, Predicate, Function, Consumer, Supplier.",
    keywords: ["funkcionální rozhraní", "jedna abstraktní metoda", "Predicate", "Function"],
    options: [
      "Rozhraní s jedinou abstraktní metodou (lze použít s lambdou)",
      "Rozhraní bez jakékoliv metody",
      "Rozhraní s alespoň dvěma abstraktními metodami",
      "Třída, která dědí z více rozhraní"
    ],
    correctOption: 0
  },
  {
    id: 248, category: "modern", type: "code", difficulty: "medium",
    question: "Co je Stream API?",
    answer: "API pro funkcionální zpracování kolekcí. Příklady operací: map, filter, reduce, forEach, collect.",
    keywords: ["Stream API", "map", "filter", "reduce", "collect"],
    codeExample: "list.stream()\n    .filter(x -> x > 0)\n    .map(x -> x * 2)\n    .collect(Collectors.toList());"
  },
  {
    id: 249, category: "modern", type: "code", difficulty: "medium",
    question: "Co je pattern matching?",
    answer: "Moderní zápis pro bezpečné testování a rozklad objektů (např. instanceof s vazbou na proměnnou).",
    keywords: ["pattern matching", "instanceof", "rozklad objektů"],
    codeExample: "if (obj instanceof String s) {\n    System.out.println(s.length());\n}"
  },
  {
    id: 250, category: "modern", type: "code", difficulty: "hard",
    question: "Co jsou sealed classes?",
    answer: "sealed omezuje, které třídy mohou dědit z dané třídy. Potomek musí být final, sealed nebo non-sealed.",
    keywords: ["sealed", "permits", "omezení dědičnosti", "non-sealed"],
    codeExample: "sealed class Shape permits Circle, Rectangle {\n}"
  },
  {
    id: 251, category: "modern", type: "theory", difficulty: "hard",
    question: "Co jsou virtual threads?",
    answer: "Lehká vlákna spravovaná JVM. Jsou levnější než klasická platform threads a hodí se pro velké množství blokujících úloh.",
    keywords: ["virtual threads", "lehká vlákna", "JVM", "blokující úlohy"]
  },
  {
    id: 252, category: "modern", type: "trap", difficulty: "hard",
    question: "Jaký je rozdíl mezi platform thread a virtual thread?",
    answer: "Platform thread je vlákno OS — je dražší. Virtual thread spravuje JVM — je lehký a vhodný pro mnoho souběžných požadavků.",
    keywords: ["platform thread", "virtual thread", "OS", "JVM"],
    options: [
      "Platform thread = vlákno OS (drahé); virtual thread = lehké, spravuje JVM",
      "Platform thread = lehké JVM vlákno; virtual thread = vlákno OS",
      "Oba jsou totožné, jen jinak pojmenované",
      "Virtual thread běží mimo JVM v nativním kódu"
    ],
    correctOption: 0
  },
  {
    id: 253, category: "modern", type: "theory", difficulty: "hard",
    question: "Co jsou Scoped Values?",
    answer: "Scoped Values umožňují bezpečně sdílet immutable hodnotu v definovaném rozsahu, například mezi rodičovským vláknem a jeho podúlohami.",
    keywords: ["Scoped Values", "immutable", "rozsah", "sdílení hodnoty"]
  },
  {
    id: 254, category: "modern", type: "theory", difficulty: "hard",
    question: "Co jsou flexible constructors?",
    answer: "Novější možnost Javy dovolující provést některé příkazy před voláním super() v konstruktoru. Smysl: validace parametrů dříve, než se inicializuje předek.",
    keywords: ["flexible constructors", "super()", "validace parametrů"]
  },
  {
    id: 255, category: "modern", type: "theory", difficulty: "hard",
    question: "Co je Vector API?",
    answer: "API pro SIMD výpočty, tedy zpracování více hodnot jednou instrukcí procesoru.",
    keywords: ["Vector API", "SIMD", "vektorové výpočty"]
  },
  {
    id: 256, category: "modern", type: "theory", difficulty: "hard",
    question: "Co je GraalVM Native Image?",
    answer: "Ahead-of-time kompilace Java aplikace do nativního executable. Výhoda je rychlý start a menší runtime overhead. Nevýhoda je složitější build a omezení dynamických vlastností jako reflexe.",
    keywords: ["GraalVM", "Native Image", "AOT", "nativní executable", "reflexe"]
  },

  /* ============== 17. Pravda/nepravda a typické chytáky ============== */
  {
    id: 257, category: "traps", type: "trap", difficulty: "medium",
    question: "Interface metoda bez public v implementaci — co platí?",
    answer: "Metody rozhraní jsou z definice veřejné, proto metoda let() v implementaci MUSÍ být public. Pokud public chybí, kód se NEzkompiluje. Nejde o overloading, ale o implementaci (přepsání) metody.",
    keywords: ["interface", "public", "implementace", "overloading"],
    commonMistakes: "Pravda: metody interface jsou veřejné; implementace musí být public. Nepravda: že se to zkompiluje, nebo že jde o overloading.",
    codeExample: "interface Letoun {\n    void let();\n}\n// Nezkompiluje se – chybí public:\nclass Letadlo implements Letoun {\n    void let() {\n        System.out.println(\"Letím\");\n    }\n}"
  },
  {
    id: 258, category: "traps", type: "trap", difficulty: "medium",
    question: "List vs Set chyták — co platí?",
    answer: "Pravda: List umožňuje přístup přes index, Set obecně ne; Set nedovoluje duplicity, List ano. Nepravda: že Set vždy zachovává pořadí vložení (HashSet ne), nebo že List je vždy synchronizovaný.",
    keywords: ["List", "Set", "index", "duplicity", "synchronizace"],
    commonMistakes: "Set NEzachovává pořadí vždy (jen LinkedHashSet). ArrayList NENÍ synchronizovaný."
  },
  {
    id: 259, category: "traps", type: "trap", difficulty: "medium",
    question: "Vícenásobná dědičnost chyták — co platí?",
    answer: "Pravda: Java neumožňuje vícenásobnou dědičnost tříd, ale umožňuje implementovat více rozhraní. Nepravda: že vícenásobná dědičnost znamená vytvoření více instancí jedné třídy.",
    keywords: ["vícenásobná dědičnost", "interface", "třídy"],
    commonMistakes: "Vícenásobná dědičnost = dědit z více tříd (Java to u tříd neumí), NE vytvoření více instancí."
  },
  {
    id: 260, category: "traps", type: "trap", difficulty: "medium",
    question: "Race condition chyták — jaký je rozdíl od deadlocku a starvation?",
    answer: "Race condition není totéž co deadlock. Race condition = výsledek závisí na pořadí běhu vláken. Deadlock = vlákna na sebe čekají a nic nepokračuje. Starvation = vlákno se dlouhodobě nedostane ke zdroji.",
    keywords: ["race condition", "deadlock", "starvation", "rozdíl"],
    options: [
      "Race condition = výsledek závisí na pořadí vláken (ne deadlock ani starvation)",
      "Race condition = vlákna na sebe navzájem čekají",
      "Race condition = vlákno se nedostane ke zdroji",
      "Race condition a deadlock jsou synonyma"
    ],
    correctOption: 0
  },
  {
    id: 261, category: "traps", type: "trap", difficulty: "medium",
    question: "RuntimeException chyták — co platí?",
    answer: "Správně: RuntimeException se povinně ošetřovat nemusí; lze ji zachytit, ale lepší je jí předcházet validací a správným stavem programu. Špatně: že se RuntimeException vždy musí ošetřit try-catch.",
    keywords: ["RuntimeException", "unchecked", "try-catch", "validace"],
    commonMistakes: "RuntimeException (unchecked) NEmusíš povinně ošetřovat – to platí jen pro checked výjimky."
  },
  {
    id: 262, category: "traps", type: "trap", difficulty: "easy",
    question: "Celočíselné typy chyták — které existují v Javě?",
    answer: "Správně: byte, short, int, long (doplňkově char). Špatně: long long, unsigned int — ty v Javě neexistují.",
    keywords: ["byte", "short", "int", "long", "char", "unsigned"],
    commonMistakes: "Java nemá 'long long' ani 'unsigned int'.",
    options: [
      "byte, short, int, long (a char) – ano; long long, unsigned int – ne",
      "byte, int, long, long long",
      "int, uint, long, ulong",
      "pouze int a long"
    ],
    correctOption: 0
  },
  {
    id: 263, category: "traps", type: "trap", difficulty: "easy",
    question: "throws vs throw — jaký je rozdíl?",
    answer: "throw skutečně vyhazuje výjimku (throw new IOException();). throws v hlavičce metody jen říká, že metoda může výjimku vyhodit (void read() throws IOException).",
    keywords: ["throw", "throws", "rozdíl", "výjimka"],
    commonMistakes: "throw = vyhození výjimky (příkaz); throws = deklarace v hlavičce metody. Nejsou totéž.",
    codeExample: "throw new IOException();        // vyhodí výjimku\nvoid read() throws IOException  // deklaruje možnou výjimku"
  },
  {
    id: 264, category: "traps", type: "trap", difficulty: "easy",
    question: "array.length vs String.length() vs List.size() — co je správně?",
    answer: "U pole: array.length (atribut, bez závorek). U Stringu: string.length() (metoda). U kolekce: list.size() (metoda).",
    keywords: ["length", "size", "pole", "String", "List"],
    commonMistakes: "Pole = .length (bez závorek); String = .length(); kolekce = .size().",
    codeExample: "array.length     // pole – atribut\nstring.length()  // String – metoda\nlist.size()      // kolekce – metoda",
    options: [
      "pole: .length | String: .length() | kolekce: .size()",
      "pole: .length() | String: .size() | kolekce: .length",
      "vše používá .size()",
      "vše používá .length()"
    ],
    correctOption: 0
  },
  {
    id: 265, category: "traps", type: "trap", difficulty: "easy",
    question: "== vs equals() — jaký je rozdíl?",
    answer: "== u objektů porovnává reference (identitu). equals() porovnává logickou rovnost podle implementace (obsah).",
    keywords: ["==", "equals", "reference", "logická rovnost"],
    commonMistakes: "== porovnává reference, ne obsah. Pro porovnání obsahu objektů použij equals().",
    options: [
      "== porovnává reference; equals() porovnává logickou rovnost (obsah)",
      "== porovnává obsah; equals() porovnává reference",
      "Oba porovnávají reference",
      "Oba porovnávají obsah"
    ],
    correctOption: 0
  },
  {
    id: 266, category: "traps", type: "trap", difficulty: "easy",
    question: "final chyták — co final znamená u třídy, metody a proměnné?",
    answer: "final class nelze dědit. final method nelze přepsat. final variable nelze znovu přiřadit.",
    keywords: ["final", "třída", "metoda", "proměnná"],
    commonMistakes: "final má tři významy podle kontextu: třída (nelze dědit), metoda (nelze přepsat), proměnná (nelze přeřadit).",
    codeExample: "final class A {}        // nelze dědit\nfinal void m() {}       // nelze přepsat\nfinal int x = 5;        // nelze znovu přiřadit"
  }
];

/* ==========================================================================
   Pravda / nepravda — samostatná tvrzení pro režim „Pravda/Nepravda"
   Každé: statement, isTrue (boolean), explanation, category
   ========================================================================== */
const TRUE_FALSE = [
  { statement: "Metody v interface jsou implicitně public.", isTrue: true,
    explanation: "Ano. I bez napsaného modifikátoru jsou metody rozhraní veřejné.", category: "inheritance" },
  { statement: "Implementace metody z interface může mít nižší viditelnost než public.", isTrue: false,
    explanation: "Nepravda. Implementace nesmí snížit viditelnost – musí být public, jinak se kód nezkompiluje.", category: "inheritance" },
  { statement: "Implementace metody z rozhraní je overloading.", isTrue: false,
    explanation: "Nepravda. Je to implementace (přepsání), ne overloading.", category: "inheritance" },
  { statement: "List umožňuje přístup přes index.", isTrue: true,
    explanation: "Ano. List je uspořádaná posloupnost s přístupem přes index.", category: "generics" },
  { statement: "Set obecně neumožňuje přístup přes index.", isTrue: true,
    explanation: "Ano. Set je množina a obecně nemá indexy.", category: "generics" },
  { statement: "Set dovoluje duplicitní prvky.", isTrue: false,
    explanation: "Nepravda. Set duplicity nedovoluje. Duplicity dovoluje List.", category: "generics" },
  { statement: "HashSet vždy zachovává pořadí vložení.", isTrue: false,
    explanation: "Nepravda. HashSet pořadí nezaručuje. Pořadí vložení zachovává LinkedHashSet.", category: "generics" },
  { statement: "Map je potomkem rozhraní Collection.", isTrue: false,
    explanation: "Nepravda. Map není potomkem Collection, ale patří do Collections Frameworku.", category: "generics" },
  { statement: "Java neumožňuje vícenásobnou dědičnost tříd.", isTrue: true,
    explanation: "Ano. Třída může dědit jen z jedné třídy.", category: "inheritance" },
  { statement: "Java umožňuje implementovat více rozhraní.", isTrue: true,
    explanation: "Ano. Třída může implementovat libovolný počet rozhraní.", category: "inheritance" },
  { statement: "RuntimeException se musí povinně ošetřit pomocí try-catch.", isTrue: false,
    explanation: "Nepravda. RuntimeException (unchecked) se ošetřovat nemusí. Povinné je to jen pro checked výjimky.", category: "exceptions" },
  { statement: "Checked výjimku je nutné ošetřit nebo deklarovat pomocí throws.", isTrue: true,
    explanation: "Ano. Jinak nastane chyba překladu.", category: "exceptions" },
  { statement: "throw a throws znamenají totéž.", isTrue: false,
    explanation: "Nepravda. throw vyhazuje výjimku; throws v hlavičce deklaruje, že metoda může výjimku vyhodit.", category: "exceptions" },
  { statement: "Délku pole zjistíme pomocí array.length (bez závorek).", isTrue: true,
    explanation: "Ano. length je atribut pole, ne metoda.", category: "types" },
  { statement: "Délku Stringu zjistíme pomocí string.length().", isTrue: true,
    explanation: "Ano. U Stringu je length() metoda (se závorkami).", category: "types" },
  { statement: "Počet prvků kolekce zjistíme pomocí list.length.", isTrue: false,
    explanation: "Nepravda. U kolekce se používá metoda size(), tedy list.size().", category: "generics" },
  { statement: "Operátor == u objektů porovnává jejich obsah.", isTrue: false,
    explanation: "Nepravda. == porovnává reference (identitu). Obsah porovnává equals().", category: "traps" },
  { statement: "Java má typy long long a unsigned int.", isTrue: false,
    explanation: "Nepravda. Tyto typy v Javě neexistují. Celočíselné typy jsou byte, short, int, long (a char).", category: "types" },
  { statement: "Deadlock a race condition jsou totéž.", isTrue: false,
    explanation: "Nepravda. Race condition = výsledek závisí na pořadí vláken; deadlock = vlákna na sebe vzájemně čekají.", category: "threads" },
  { statement: "Starvation znamená, že se vlákno dlouhodobě nedostane ke zdroji.", isTrue: true,
    explanation: "Ano. To je přesná definice starvation.", category: "threads" },
  { statement: "Java je silně typovaný jazyk.", isTrue: true,
    explanation: "Ano. Java je silně typovaná. Slabě typované jsou např. JavaScript nebo PHP.", category: "algorithms" },
  { statement: "Pokud přepíšeme equals(), měli bychom přepsat i hashCode().", isTrue: true,
    explanation: "Ano. Stejné objekty dle equals() musí mít stejný hashCode() kvůli HashMap/HashSet.", category: "inheritance" },
  { statement: "Z final třídy lze dědit.", isTrue: false,
    explanation: "Nepravda. Z final třídy dědit nelze (např. String).", category: "oop" },
  { statement: "final metodu nelze přepsat (override).", isTrue: true,
    explanation: "Ano. final metoda nemůže být přepsána v potomkovi.", category: "oop" },
  { statement: "Zásobník pracuje na principu LIFO.", isTrue: true,
    explanation: "Ano. Zásobník = Last In, First Out.", category: "algorithms" },
  { statement: "Fronta pracuje na principu LIFO.", isTrue: false,
    explanation: "Nepravda. Fronta je FIFO (First In, First Out). LIFO je zásobník.", category: "algorithms" },
  { statement: "TCP je nespojovaný a nespolehlivý protokol.", isTrue: false,
    explanation: "Nepravda. TCP je spojovaný a spolehlivý. Nespojovaný a nespolehlivý je UDP.", category: "network" },
  { statement: "UDP nezaručuje doručení ani pořadí dat.", isTrue: true,
    explanation: "Ano. UDP je nespojovaný, nespolehlivý a používá datagramy.", category: "network" },
  { statement: "Generika v Javě mohou přímo používat primitivní typy, např. List<int>.", isTrue: false,
    explanation: "Nepravda. Musí se použít wrapper třída, např. List<Integer>.", category: "generics" },
  { statement: "Objekt je odstraněn GC podle své užitečnosti.", isTrue: false,
    explanation: "Nepravda. GC řeší dosažitelnost z GC roots, ne užitečnost.", category: "memory" },
  { statement: "Instanční proměnné objektu jsou uloženy na heapu.", isTrue: true,
    explanation: "Ano. Objekt i jeho instanční proměnné jsou na heapu; reference bývají na stacku.", category: "memory" },
  { statement: "Virtual thread je vlákno operačního systému.", isTrue: false,
    explanation: "Nepravda. Virtual thread spravuje JVM a je lehký; vlákno OS je platform thread.", category: "modern" },
  { statement: "record automaticky generuje equals(), hashCode() a toString().", isTrue: true,
    explanation: "Ano. record generuje konstruktor, gettery, equals(), hashCode() i toString().", category: "modern" },
  { statement: "Dlouhý výpočet je vhodné spustit přímo v GUI vlákně (EDT).", isTrue: false,
    explanation: "Nepravda. Zablokoval by GUI. Použij vlákno na pozadí / SwingWorker.", category: "gui" }
];

/* Export do globálního prostoru pro script.js */
if (typeof window !== "undefined") {
  window.CATEGORIES = CATEGORIES;
  window.QUESTIONS = QUESTIONS;
  window.TRUE_FALSE = TRUE_FALSE;
}
