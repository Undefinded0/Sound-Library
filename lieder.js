/* =========================================================
   HIER TRAGST DU DAS KONZERT UND DIE LIEDER EIN
   ---------------------------------------------------------
   - Die MP3-Dateien kommen in den Ordner "audio".
   - "datei" muss GENAU so heißen wie die Datei im Ordner
     (auch Leerzeichen, Bindestriche, Groß-/Kleinschreibung).
   - "titel" ist das, was auf der Seite angezeigt wird.
   - "info" ist optional (z. B. Komponist oder Arrangeur).
   - Die Reihenfolge hier = Reihenfolge auf der Seite.
   - Nach jedem Eintrag ein Komma, nur nach dem letzten nicht.
   ========================================================= */

window.KONZERT = {
  titel: "Herbstkonzert 2026",
  untertitel: "Referenzaufnahmen von anderen Orchestern",

  // Hinweis-Kasten oben auf der Seite (zum Ausblenden: hinweis: null)
  hinweis: {
    titel: "Nur zum Üben",
    text: "Diese Aufnahmen stammen nicht von der Musikkapelle Meckenhausen, sondern von anderen Orchestern. Sie dienen ausschließlich unseren Mitgliedern als Hilfe zum Üben. Bitte nicht weitergeben, veröffentlichen oder anderweitig verwenden."
  },

  lieder: [
    { titel: "A Childhood Remembered", info: "Rossano Galante",  datei: "audio/A Childhood Remembered - Rossano Galante.mp3" },
    { titel: "Adventure",              info: "Markus Götz",      datei: "audio/Adventure - Markus Götz.mp3" },
    { titel: "Dance With The Devil",   info: "Fritz Neuböck",    datei: "audio/Dance With The Devil -  Fritz Neuböck.mp3" },
    { titel: "Dramatic Tales",         info: "Markus Götz",      datei: "audio/Dramatic Tales - Markus Götz.mp3" },
    { titel: "Ehrenwort",              info: "Fäaschtbänkler",   datei: "audio/Ehrenwort - Fäaschtbänkler.mp3" },
    { titel: "Heublumen Polka",        info: "Kurt Gäble",       datei: "audio/Heublumen Polka - Kurt Gäble.mp3" },
    { titel: "Rapunzel",               info: "Bert Appermont",   datei: "audio/Rapunzel – Bert Appermont.mp3" },
    { titel: "The Greatest Showman",   info: "Paul Murtha",      datei: "audio/The Greates Showman - Paul Murtha.mp3" }
  ]
};
