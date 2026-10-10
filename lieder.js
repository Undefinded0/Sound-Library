/* =========================================================
   HIER TRAGST DU DAS KONZERT UND DIE LIEDER EIN
   ---------------------------------------------------------
   - Die MP3-Dateien kommen in den Ordner "audio".
   - "datei" muss GENAU so heißen wie die Datei im Ordner
     (Groß-/Kleinschreibung beachten, am besten ohne
     Leerzeichen und Umlaute, z. B. 01-marsch.mp3).
   - "info" ist optional (z. B. Komponist oder Arrangeur).
   - Die Reihenfolge hier = Reihenfolge auf der Seite.
   - Nach jedem Eintrag ein Komma, nur nach dem letzten nicht.
   ========================================================= */

window.KONZERT = {
  titel: "Jahreskonzert 2026",
  untertitel: "Probenaufnahmen zum Anhören",

  lieder: [
    { titel: "Beispiel-Stück 1", info: "Komponist eintragen", datei: "audio/01-beispiel.mp3" },
    { titel: "Beispiel-Stück 2", info: "Komponist eintragen", datei: "audio/02-beispiel.mp3" },
    { titel: "Beispiel-Stück 3", info: "Komponist eintragen", datei: "audio/03-beispiel.mp3" },
    { titel: "Beispiel-Stück 4", info: "",                    datei: "audio/04-beispiel.mp3" }
  ]
};
