// ============================================================
//  riddlesData — zagadki o technikach IT, kryptografii i ZSP Niemce
// ============================================================

const riddlesData = {
  easy: [
    {
      title: "Sieciowy Strażnik",
      text: "Strzegę granic sieci w ZSP Niemce. Przepuszczam, kogo znam — blokuję nieproszonych gości. Czytam każdy pakiet, lecz sam nie wysyłam żadnego. Co to jestem?",
      answers: ["Firewall", "Router", "Switch", "Modem"],
      correct: 0,
      hint: "Pracuje na granicy między siecią lokalną a internetem.",
      success: "Firewall — niewidzialny ochroniarz każdej szkolnej sieci."
    },
    {
      title: "Adres Bez Miejsca",
      text: "Każdy uczeń technikum informatycznego zna moje imię. Mam cztery liczby, każda między 0 a 255. Bez mnie żaden komputer w pracowni ZSP Niemce nie dogada się z innym. Co to jestem?",
      answers: ["MAC adres", "Port", "DNS", "Adres IP"],
      correct: 3,
      hint: "Nadaje go DHCP lub administrator sieci.",
      success: "Adres IP — unikalny identyfikator każdego urządzenia w sieci."
    },
    {
      title: "Klucz do Wiedzy",
      text: "W ZSP Niemce otwierasz mnie każdego ranka. Nie jestem z metalu, lecz chronię twoje dane. Wpisujemy mnie, zanim zobaczymy pulpit. Im dłuższy, tym bezpieczniejszy. Co to jestem?",
      answers: ["Login", "PIN", "Hasło", "Token"],
      correct: 2,
      hint: "Powinno mieć wielkie litery, cyfry i znaki specjalne.",
      success: "Hasło — pierwsza linia obrony każdego konta."
    },
    {
      title: "Niemieccy Technicy",
      text: "To szkoła w gminie Niemce pod Lublinem, która kształci przyszłych informatyków i specjalistów od cyberbezpieczeństwa. Jak się nazywa?",
      answers: ["ZSTiO", "ZSP Niemce", "Technikum Lubelskie", "LO Niemce"],
      correct: 1,
      hint: "Skrót ZSP oznacza Zespół Szkół Ponadpodstawowych.",
      success: "ZSP Niemce — kuźnia informatyków i specjalistów cyberbezpieczeństwa!"
    },
    {
      title: "Cyfrowy Listonosz",
      text: "Noszę wiadomości przez internet, lecz nie jestem człowiekiem. Dzielę dane na kawałki i każdy wysyłam osobno. Na miejscu ktoś inny musi je złożyć w całość. Co to jestem?",
      answers: ["Pakiet sieciowy", "E-mail", "Plik", "Bit"],
      correct: 0,
      hint: "Protokół TCP dba o to, żeby wszystkie dotarły.",
      success: "Pakiet sieciowy — podstawowa jednostka komunikacji w internecie."
    }
  ],

  medium: [
    {
      title: "Tajny Szyfr Cezara",
      text: "Używał mnie już Juliusz Cezar. Przesuwam każdą literę o stały krok w alfabecie. Uczniowie technikum cyberbezpieczeństwa w ZSP Niemce łamią mnie w kilka minut. Jak mnie nazywają?",
      answers: ["ROT13", "Base64", "Szyfr Cezara", "Szyfr Vigenere'a"],
      correct: 2,
      hint: "Klasyczny szyfr podstawieniowy — przesuwa litery o N pozycji.",
      success: "Szyfr Cezara — prosty, ale historycznie przełomowy szyfr podstawieniowy."
    },
    {
      title: "Strażnik Integralności",
      text: "Przetwarzam dane wejściowe i zawsze zwracam ciąg o tej samej długości. Nie można mnie odwrócić. Zmiana choćby jednego bajtu zmienia mój wynik całkowicie. Pilnuję, czy pliki nie zostały zmodyfikowane. Co to jestem?",
      answers: ["Funkcja skrótu", "Szyfrowanie AES", "Certyfikat SSL", "Podpis cyfrowy"],
      correct: 0,
      hint: "MD5 i SHA-256 to moje popularne warianty.",
      success: "Funkcja skrótu (hash) — odcisk palca każdego pliku i wiadomości."
    },
    {
      title: "Dwa Klucze",
      text: "Mam dwa klucze — jeden daję wszystkim, drugiego nie zdradzam nikomu. Co zaszyfrujesz jednym, odszyfruje tylko drugi. Strzegę tajemnic w internecie i e-mailu. Co to jestem?",
      answers: ["Szyfrowanie symetryczne", "VPN", "Firewall", "Kryptografia asymetryczna"],
      correct: 3,
      hint: "RSA i ECC to moje najpopularniejsze algorytmy.",
      success: "Kryptografia asymetryczna — fundament bezpiecznej komunikacji w sieci."
    },
    {
      title: "Fałszywa Sieć",
      text: "Jestem atakiem, który uczniowie technikum cyberbezpieczeństwa w ZSP Niemce uczą się wykrywać. Udaję zaufane Wi-Fi, by przechwytywać twój ruch sieciowy. Jak mnie nazywają?",
      answers: ["DDoS", "Evil Twin", "Phishing", "SQL Injection"],
      correct: 1,
      hint: "Tworzę fałszywy punkt dostępowy o tej samej nazwie co prawdziwy.",
      success: "Evil Twin — fałszywy hotspot, który podszywa się pod zaufaną sieć."
    },
    {
      title: "Zielona Kłódka",
      text: "Widzisz mnie w pasku przeglądarki jako małą kłódkę. Zapewniam, że dane między twoim komputerem a stroną ZSP Niemce są szyfrowane. Bez mnie logowanie byłoby niebezpieczne. Co to jestem?",
      answers: ["HTTP", "FTP", "HTTPS / SSL", "SSH"],
      correct: 2,
      hint: "Certyfikat wystawia zaufany urząd certyfikacji (CA).",
      success: "HTTPS/SSL — szyfrowana warstwa chroniąca dane w przeglądarce."
    }
  ],

  hard: [
    {
      title: "Nieodwracalna Transformacja",
      text: "Jestem algorytmem, który uczniowie ZSP Niemce poznają na zajęciach z kryptografii. Przyjmuję dowolnie długi ciąg bitów i zawsze zwracam 256 bitów. Jestem lawinowy — zmiana jednego bitu zmienia połowę moich wyników. Jak mnie nazywają?",
      answers: ["AES-256", "RSA-2048", "bcrypt", "SHA-256"],
      correct: 3,
      hint: "Należę do rodziny SHA-2, zaprojektowanej przez NSA.",
      success: "SHA-256 — kryptograficzna funkcja skrótu używana m.in. w Bitcoinie i SSL."
    },
    {
      title: "Człowiek Pośrodku",
      text: "Jestem atakiem poznawanym w technikum cyberbezpieczeństwa. Wchodzę między dwie komunikujące się strony, nie wiedząc, że obie rozmawiają ze mną, a nie ze sobą. Podszywam się pod obie jednocześnie. Jak mnie nazywają?",
      answers: ["Atak Man-in-the-Middle", "ARP Spoofing", "Ransomware", "Brute Force"],
      correct: 0,
      hint: "Skrót to MITM. Używa technik ARP poisoning lub DNS spoofing.",
      success: "Man-in-the-Middle — jeden z najgroźniejszych ataków na szyfrowaną komunikację."
    },
    {
      title: "Tajemnica Diffiego i Hellmana",
      text: "Dzięki mnie dwoje uczniów ZSP Niemce może ustalić wspólny tajny klucz, rozmawiając przez nieszyfrowany kanał, a podsłuchujący i tak nie odkryje sekretu. Opiera się na trudności logarytmu dyskretnego. Co to jestem?",
      answers: ["RSA Key Exchange", "Szyfr ElGamala", "Protokół Diffiego-Hellmana", "Krzywa eliptyczna P-256"],
      correct: 2,
      hint: "Pomyśl o mieszaniu kolorów — łatwo zmieszać, trudno rozdzielić.",
      success: "Protokół Diffiego-Hellmana — rewolucyjny sposób wymiany kluczy przez otwarty kanał."
    },
    {
      title: "Strażnik Tożsamości",
      text: "W ZSP Niemce wystawiają mnie zaufane urzędy. Wiążę klucz publiczny z tożsamością właściciela. Przeglądarka sprawdza mnie zanim zaufasz stronie. Jeśli wygasłem — dostajesz ostrzeżenie. Co to jestem?",
      answers: ["Token JWT", "Certyfikat X.509", "Klucz SSH", "Cookie sesji"],
      correct: 1,
      hint: "Standardowy format to X.509, a wystawia go urząd CA.",
      success: "Certyfikat cyfrowy X.509 — elektroniczny dowód tożsamości serwera lub osoby."
    },
    {
      title: "Kwantowy Postrach",
      text: "Jestem algorytmem, który pewnego dnia złamie RSA i ECC, dlatego uczniowie technikum cyberbezpieczeństwa uczą się już o kryptografii post-kwantowej. Potrzebuję komputera kwantowego. Jak mnie nazywają?",
      answers: ["Algorytm Shora", "Algorytm Grovera", "Atak słownikowy", "Algorytm Eulera"],
      correct: 0,
      hint: "Zaproponowany w 1994 roku przez Petera Shora.",
      success: "Algorytm Shora — kwantowy algorytm, który potrafi faktoryzować liczby w czasie wielomianowym, łamiąc RSA."
    }
  ]
};
