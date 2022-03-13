# Calculator master
### **Master** je totožná s poslední vydanou **verzí 3**. 

Kalkulačka **master** - je plně funkční, přesně jak se od kalkulačky očekává.  
V sekci **odvětví** se můžete podívat na **kód všech verzí**.  

---
 
### **Struktura:**
* **index.php** - Klasické hmtl + proměnná pro _hezčí vzhled kódu._
* **math.php** - Přijímá hodnoty z inputů formuláře. Následně zpracuje požadavek, a **zobrazí výsledek operace na stránku.**
* **normalize.css** - Je malý soubor CSS, který zajišťuje lepší konzistenci **výchozího stylování prvků HTML** napříč prohlížeči.
* **StyleSheet1.css** - Zde je veškeré CSS stylování.
* **app.js** - Se stará o všechny **ovládací prvky**, **zobrazení hodnot na displeji**, **validaci**, a **Ajax**.


<br>

# **Verze 3**
### **Funkce:**
\:- Přidání - historie.  
\:- Přidání - tlačítka vymazání předchozího znaku.   
### **Oprava chyb:**
\:- Při počítání v závorkách (validace).  
\:- Oprava přepisování čísla (v závorce).  
\:- Umístění závorky ``1x2(15+15)``.  
\:- Oprava přepisování historie.

<br>

# **Verze 2**
### **Funkce:**
\:- Přidání - tlačítka pro vymazání aktuální operace.  
\:- Výpočty - včetně závorek, např. ``10x(96÷6)``.   
\:- Výpočty - (bez použití závorek), mají povolené číselné formátování výsledků.   
### **Oprava chyb:**
\:- Přepisování druhého čísla na operační znaménko.

<br>

# **Verze 1**
### **Funkce:**
\:- Součet, odečet, násobení, dělení - včetně desetinných míst.  
\:- Ovládání pomocí tlačítek na kalkulačce.  
\:- Ovládání pomocí numerických kláves.  
\:- Přepisování operačního znaménka. 

\:- Zobrazení výsledku na displeji kalkulačky.  
\:- Při zobrazení výsledku - není nutné aktualizovat stránku, stačí rovnou napsat další příklad :)    

#### _Chyby... :(_
\- Tato verze neumí pracovat se závorkami.  
\- Ale má bohužel mnoho dalších chyb, například: při zadání ``1+1`` následným stisknutím, (např. ``x``) se zobrazí ``1+x``.    
