Niestety zabrakło mi czasu na dokończenie zadania tak, jak bym tego chciała - zbyt wiele czasu poświęciłam na szukanie 
dokumentacji SciChart, gdyż pod linkiem "documentation" na stronie SciChart, otrzymywałam błąd 404.

W związku z tym chciałabym opisać brakującą część kodu.

Użyłam frameworka React.js, gdyż jak widnieje w moim CV, jest to mój główny framework jakim się posługuję. Z Vue3.js miałam bardzo małą styczność, 
jednak jeśli otrzymałabym od Państwa szansę - z chęcią się doszkolę przed dołączeniem do pracy, na własny koszt.


App.js:
Tutaj zabrakło mi czasu na poprawną konfigurację HTTP requestu, w związku z czym postanowiłam użyć tzw dummy data, które jest wycinkiem danych z bazy.
W requeście HTTP używam hooków useCallback oraz useEffect, aby zapobiec niepotrzebnym dodatkowym kalkulacjom. Następnie pozyskane dane powinny zostać przekazane 
w następujący sposób (linijka 171):
<MyChart data={data}/>. W tej chwili przekazuję tam predefiniowane dane.

Chart.js:
Utworzyłam trzy tablice, które przechowają moje dane dotyczące dat, ilości i ceny.
Następnie iterując przez dane przypisuję sobie właściwe informacje do właściwej tablicy, konwertuję obiekty na wartości (tablice jednowymiarowe), a następnie przy
pomocy pakietu apexcharts generuję wykres. Niestety zabrakło mi czasu aby go doszlifować.

Serdecznie dziękuję za możliwość wykonania testu dla Państwa.