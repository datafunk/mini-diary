import { Translations } from "../../../shared/types";

const translationsHu: Translations = {
	// Menu (defined by macOS)
	"about-app": "A {appName} alkalmazásról",
	"bring-all-to-front": "Mindent előre",
	close: "Bezár",
	copy: "Másol",
	cut: "Kivág",
	edit: "Szerkeszt",
	file: "Fájl",
	help: "Segítség",
	"hide-app": "Rejtsd el a {appName}",
	"hide-others": "Mások elrejtése",
	minimize: "Minimalizál",
	paste: "Beilleszt",
	preferences: "Beállítások",
	"quit-app": "Bezár {appName}",
	redo: "Újra",
	"select-all": "Mindet kiválszt",
	"show-all": "Mutass Mindent",
	speech: "Beszéd",
	"start-speaking": "Kezdj beszélni",
	"stop-speaking": "Ne beszélj",
	undo: "Visszavonás",
	view: "Nézet",
	window: "Ablak",
	zoom: "Zoom",

	// Menu (app-specific)
	export: "Exportállás",
	"export-to-format": "Exportállás {format} formátumban",
	"go-to-date": "Dátumhoz",
	"go-to-today": "Mai nap",
	import: "Importálás",
	"import-from-format": "Importálás {format} formátumból",
	license: "Licensz",
	"lock-diary": "Naplózár",
	"next-day": "Holnap",
	"next-month": "Jövő hónap",
	"previous-day": "Tegnap",
	"previous-month": "Múlt hónap",
	"privacy-policy": "Adatvédelem",
	statistics: "Statisztikák",
	website: "Weboldal",

	// Weekdays
	sunday: "Vasárnap",
	monday: "Hétfő",
	tuesday: "Kedd",
	wednesday: "Szerda",
	thursday: "Csütörtök",
	friday: "Péntek",
	saturday: "Szombat",

	// Theme
	dark: "Sötét",
	light: "Világos",
	theme: "Megjelenés",

	// Calendar
	today: "Ma",

	// Editor
	"add-a-title": "Cím",
	bold: "Félkövér",
	bullets: "Felsorolás",
	italic: "Dőlt betü",
	list: "Lista",
	"write-something": "Bejegyzés...",

	// Search
	clear: "keresőmező törlése",
	"no-results": "Nincs találat",
	"no-title": "Nincs cím",
	search: "Keresés",

	// Preferences
	"allow-future-entries": "övőbeni bejegyzések engedélyezése",
	auto: "Auto",
	"diary-entries": "Naptár bejegyzések",
	"enable-spellcheck": "Helyesírás ellenőrzése",
	"first-day-of-week": "A hét első napja",
	"hide-titles": "Címek elrejtése",
	no: "Nem",
	ok: "OK",
	"reset-diary": "Napló visszaállítása",
	"reset-diary-confirm": "Igen, biztos vagyok benne",
	"reset-diary-msg":
		"Biztos, hogy vissza akarja állítani a naptárát? Ez törölni fogja az összes tartalmát. Az adatok nem állíthatók vissza.",

	// Password and directory
	"change-directory": "Könyvtárváltás",
	"change-password": "Jelszóváltoztatás",
	"choose-password": "Válassz jelszavat",
	"decryption-error": "Hiba a naplófájl dekódolásában",
	"diary-file": "Naplófájl",
	"file-exists": "Egy másik fájl is létezik a könyvtár elérési útvonalán",
	"move-error-msg": "Hiba történt a fájl áthelyezésekor",
	"move-error-title": "Áthelyezési hiba",
	"move-file": "Fájl áthelyezése",
	"new-password": "Új jelszó",
	password: "Jelszó",
	"passwords-no-match": "A jelszavak nem egyeznek",
	"repeat-new-password": "Új jelszó megismétlése",
	"repeat-password": "Jelszó megismétlése",
	"select-directory": "Könyvtár kiválasztása",
	"set-password": "Jelszó beállítása",
	unlock: "Kizár",
	"wrong-password": "Hibás jelszó",

	// Statistics
	"total-entries": "bejegyzés",
	"entries-per-week": "heti bejegyzés",
	"streak-best": "egymás utáni bejegyzés (rekord)",
	"streak-current": "egymás utáni bejegyzés (jelenleg)",
	"total-words": "szó (összesen)",
	"words-per-entry": "szó bejegyzésenként",

	// Import
	"import-error-msg": "Hiba történt az importálás során",
	"import-error-title": "Importálási hiba",
	"import-instructions-day-one":
		"Nyissa meg a Day One alkalmazást, és exportálja a naplóját a Fájl → Exportálás → {format} menüpont alatt. Csomagolja ki a létrehozott fájlt. A következő lépésben válassza ki az így kapott {format} fájlt, hogy importálja azt az {appName} alkalmazásba.",
	"import-instructions-jrnl":
        "A jrnl napló exportálásához futtassa a {command} parancsot. A következő lépésben válassza ki a létrehozott JSON fájlt, hogy importálja azt az {appName}-be.",
	"import-instructions-mini-diary":
        "Az adatokat importálhatja egy korábbi {appName} JSON exportból vagy egy másik JSON fájlból, amely ugyanúgy van formázva.",
	"start-import": "Import indítása",

	// Export
	"export-error-msg": "Hiba történt az exportálás során",
	"export-error-title": "Exportállási hiba",

	// Other
	loading: "Betöltés",
};

export default translationsHu;
