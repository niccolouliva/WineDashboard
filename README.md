# 🍷 Wine Dashboard

**Wine Dashboard** è un progetto da me interamente sviluppato come **Project Work** nell'ambito della mia **Tesi di Laurea Triennale in Informatica per le Aziende Digitali**, svolto durante l'**anno accademico 2024/2025**.
Questo progetto è stato realizzato sulla base delle richieste e delle esigenze definite nella traccia del Project Work, con l'obiettivo di creare una piattaforma innovativa per supportare la digitalizzazione delle imprese vinicole.
Il lavoro rappresenta una sintesi delle competenze teoriche e pratiche maturate durante il mio percorso accademico.
L’obiettivo è stato quello di rispondere in modo efficace e concreto alle sfide e alle opportunità offerte dal settore vinicolo, fornendo soluzioni innovative e funzionali alle esigenze aziendali.

<br>

<div align="center">
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/1.png" alt="Wine Dashboard - Home Page" width="100%">
  <br><br>
  <i>🖼️ Tutte le foto di anteprima del progetto sono disponibili in fondo alla pagina, nella sezione "<b>Anteprima del Progetto</b>"</i>
</div>

---

## ✅ Funzionalità Principali
- **📈 KPI Interattivi in Tempo Reale**: Monitoraggio di indicatori chiave come produttività, performance finanziarie, sostenibilità ambientale e gestione dei rischi.
- **📊 Grafici Dinamici**: Visualizzazioni avanzate con **Chart.js**, tra cui radar, barre, linee, polar area e torta, per facilitare l'interpretazione dei dati.
- **📝 Esportazione in Excel**: Generazione automatica di report in formato Excel contenenti i dati analizzati.
- **🔄 Simulazione Realistica**: Utilizzo di distribuzioni gaussiane per creare scenari aziendali simulati, in grado di supportare decisioni strategiche.
- **📡 Streaming dei Dati in Tempo Reale**: Comunicazione continua tra il backend Python e la dashboard React tramite API RESTful.
- **🌗 Modalità Scura e Accessibilità**: Interfaccia ottimizzata per dispositivi mobili e desktop, con attenzione all'usabilità e alla leggibilità.

---

## 🎯 Obiettivi
- **Digitalizzazione del Settore Vinicolo**: Introdurre strumenti digitali che migliorino la produttività e la sostenibilità delle imprese vinicole.
- **Sostenibilità Ambientale**: Integrare metriche chiave legate all'efficienza energetica, all'uso delle risorse e alla riduzione degli sprechi.
- **Decision-Making Basato sui Dati**: Fornire supporto ai decision-maker aziendali attraverso analisi approfondite e simulazioni realistiche.
- **Adattabilità Multisettoriale**: Progettare una piattaforma scalabile, utilizzabile anche in altri settori agricoli e industriali.
- **Esperienza Utente Intuitiva**: Garantire un'interfaccia chiara e accessibile per utenti con diversi livelli di competenza tecnologica.

---

## 📂 Struttura del Progetto
- **Frontend**: Il frontend è stato sviluppato con **React.js** e offre un'interfaccia grafica dinamica e interattiva. È organizzato in 7 sezioni principali:
  - **Dashboard KPI**: Monitoraggio di indicatori chiave di prestazione.
  - **Sostenibilità**: Dati relativi all'impatto ambientale dell'azienda.
  - **Analisi Finanziaria**: Andamento dei costi, ricavi e margini di profitto.
  - **Esportazione Dati**: Download dei report in Excel.
  - **Impostazioni**: Configurazioni personalizzate per l'utente.

- **Backend**: Il backend, sviluppato in **Python** con **FastAPI**, ha il compito di:
  - Generare dati simulati in tempo reale usando **NumPy**.
  - Gestire API RESTful per inviare dati al frontend.
  - Generare file Excel formattati e scaricabili grazie a **OpenPyXL**.

---

## 🛠️ Tecnologie Utilizzate
### Frontend:
- **React.js**: Framework per la creazione di un'interfaccia utente dinamica e modulare.
- **Chart.js**: Libreria per la visualizzazione di grafici interattivi.
- **CSS**: Styling responsivo e personalizzato, con supporto alla modalità scura.
- **HTML**: Linguaggio di markup utilizzato per la struttura dei contenuti della dashboard.
- **JSON**: Formato standard per lo scambio dei dati tra il backend e il frontend.

### Backend:
- **Python**: Linguaggio di programmazione principale utilizzato per lo sviluppo del backend e del simulatore di dati.
- **FastAPI**: Framework Python per la gestione di API RESTful.
- **OpenPyXL**: Per la generazione di file Excel organizzati e leggibili.
- **NumPy**: Per la generazione di dati simulati basati su distribuzioni statistiche.
- **ThreadPoolExecutor**: Per ottimizzare le operazioni simultanee.

---

## 🚀 Come avviare Wine Dashboard
1. **Clona il Repository**:
   ```bash
   git clone https://github.com/tuo-username/WineDashboard.git
   ```
   
2. **Installa le Dipendenze della Dashboard**:
   ```bash
   npm install
   ```
   
3. **Avvia la Dashboard**:
   ```bash
   start "Wine Dashboard [DASHBOARD]" cmd /k "cd /d "%~dp0" && npm start"
   ```
   
4. **Installa le Dipendenze del Simulatore**:
   ```bash
   pip install fastapi uvicorn numpy openpyxl
   ```
   
6. **Avvia il Simulatore**:
   ```bash
   start "Wine Dashboard [SIMULATOR]" cmd /k "cd /d "%~dp0" && uvicorn simulator:app --reload"
   ```

La Dashboard sarà accessibile su [http://localhost:3000](http://localhost:3000)

---

## 📜 Endpoint Principali
- **`/real-time-data`**: Recupero dati KPI simulati in tempo reale.
- **`/stream-data`**: Flusso continuo di dati verso il frontend.
- **`/download-excel`**: Download dei dati in formato Excel.

---

## 📊 Grafici Disponibili
1. **Radar**: Per analisi di gestione del rischio.
2. **Barre**: Per monitoraggio ambientale e mercati.
3. **Linee**: Per tracciare andamenti temporali.
4. **Polar Area**: Per rappresentazioni di sostenibilità.
5. **Torta**: Per distribuzioni percentuali di risorse.

---

## 🖥️ Strumenti Utilizzati
- **Visual Studio Code**: Ambiente di sviluppo con estensioni per React e Python.
- **Google Chrome (DevTools)**: Debug e ottimizzazione della dashboard.

---

## 📌 Contributi
1. Fai un fork del repository.
2. Crea un branch per le tue modifiche:
   ```bash
   git checkout -b feature/nome-feature
   ```
3. Effettua un pull request per discutere i cambiamenti.

---

## 📝 Metadati del Progetto
- **Nome del Progetto**: Wine Dashboard
- **Autore**: Niccolò Uliva
- **Matricola**: 0312201901
- **Università**: Università Telematica Pegaso
- **Corso**: Informatica per le Aziende Digitali (L-31)
- **Anno Accademico**: 2024/2025
- **Tecnologie**: React.js, FastAPI, Chart.js, OpenPyXL
- **Descrizione**: Project Work della Tesi di Laurea - Wine Dashboard

---

## 🖼️ Anteprima del Progetto

<div align="center">
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/1.png" alt="Wine Dashboard - Home Page [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/2.png" alt="Wine Dashboard - Home Page [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/13.png" alt="Wine Dashboard - KPI Card [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/14.png" alt="Wine Dashboard - KPI Card [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/3.png" alt="Wine Dashboard - Descrizioni [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/4.png" alt="Wine Dashboard - Descrizioni [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/5.png" alt="Wine Dashboard - Descrizione Singola [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/6.png" alt="Wine Dashboard - Descrizione Singola [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/7.png" alt="Wine Dashboard - Grafico [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/8.png" alt="Wine Dashboard - Grafico [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/11.png" alt="Wine Dashboard - Header [LOGO]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/9.png" alt="Wine Dashboard - Menù [DEFAULT]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/10.png" alt="Wine Dashboard - Menù [SELECTED]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/12.png" alt="Wine Dashboard - JSON [CARD OUTPUT]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/15.png" alt="Wine Dashboard - Errore [DARK MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/16.png" alt="Wine Dashboard - Errore [LIGHT MODE]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/A.png" alt="Wine Dashboard - Real Time Data [OUTPUT]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/B.png" alt="Wine Dashboard - Stream Data [OUTPUT]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/C.png" alt="Wine Dashboard - Excel [OUTPUT]" width="100%">
  <br><br>
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/example/D.png" alt="Wine Dashboard - Console [RUNNING]" width="100%">
  <br><br>
</div>

---
<div align="center">
  <i>
    🌱🍇 Wine Dashboard è un progetto che unisce innovazione, efficienza e sostenibilità,  
  <br>
    offrendo una piattaforma completa e versatile per il monitoraggio delle prestazioni aziendali 🍷📊
  </i>
</div>

<br>

<div align="center">
  <img src="https://raw.githubusercontent.com/niccolouliva/WineDashboard/refs/heads/main/src/components/images/Memoji.webp" alt="Wine Dashboard - Credits" width="25%">
</div>

<div align="center">
  <b>Wine Dashboard</b> • Project Work
  <br>
  Realizzato da <b>Niccolò Uliva</b>
</div>
