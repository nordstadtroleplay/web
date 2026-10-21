/* =====================  CONFIG  — hier alles ändern  ===================== */
const CONFIG={
  discord:{main:"https://discord.gg/5C8nTFZuVJ",support:"https://discord.gg/x7Hfw2MEjR"},
  phase:"Beta beendet · Verbesserungen laufen bis Ende des Jahres",
  passPercent:80,

  /* Status: online | wartung | offline */
  status:[
    {name:"Hauptserver",state:"online",note:"Läuft stabil."},
    {name:"Website",state:"online",note:""},
    {name:"Weiterer Server",state:"bald",label:"Bald verfügbar",note:"Folgt demnächst."}
  ],
  /* Wartungsmeldung: leer lassen ("") = keine Meldung */
  maintenance:{text:"Wartungsarbeiten Nordstadt Roleplay Roblox Server",type:"warn"},   // z. B. text:"Wartung heute 20–22 Uhr", type:"warn" oder "good"

  /* Zeiten (0=So … 6=Sa) → [öffnet, schließt] in Stunden, deutsche Zeit */
  hours:{0:[10,21],1:[10,21],2:[10,21],3:[10,21],4:[10,21],5:[10,22],6:[10,22]},
  /* Discord-Kategorien mit Zeiten (hier gleiche Zeiten, einzeln änderbar) */
  discordCats:[{name:"Discord",use:"hours"},{name:"Discord Support",use:"hours"}],

  /* Devlog: neuester zuerst. Neuen Eintrag oben einfügen, alte rutschen nach unten. Zeige die letzten 2. */
  devlogShow:2,
  devlog:[
    {title:"Update 2.1 – Bundesregierung Update",date:"2026-10-20",items:["Neu: überarbeitete Uniform","Neu: Bundesregierung Service Center","Fix: Weste der Bundesregierung"]},
    {title:"Update 2.0 – Ende der Beta",date:"2026-09-28",items:["Beta-Phase beendet","Neues Main Menu","Bekannte Fehler werden laufend behoben"]}
  ],

  /* Ausbildungen. state: aktiv | bald | geschlossen */
  jobs:[
    {id:"lp",name:"Landespolizei",state:"aktiv",desc:"Sorge für Sicherheit und Ordnung in Nordstadt: Streife, Einsätze, Verkehrskontrollen."},
    {id:"bp",name:"Bundespolizei",state:"aktiv",desc:"Schütze Grenzen, Bahnhöfe und wichtige Einrichtungen."},
    {id:"lka",name:"Landeskriminalamt",state:"bald",desc:"Ermittle bei schweren Straftaten und arbeite verdeckt."},
    {id:"sv",name:"Stadtverwaltung",state:"bald",desc:"Betreue Bürger, Ausweise, Anträge und Termine."},
    {id:"sb",name:"Nordstadt-Südbahn",state:"geschlossen",desc:"Fahre Bahnen und halte den Takt der Stadt."},
    {id:"bk",name:"Nordstadt-Bank",state:"geschlossen",desc:"Berate Kunden, verwalte Konten und sichere Werte."},
    {id:"mb",name:"Nordstadt-Mobil",state:"geschlossen",desc:"Kümmere dich um Fahrzeuge, Service und Mobilität."},
    {id:"vb",name:"Verkehrsbetriebe",state:"bald",desc:"Steuere Busse und Verkehr in der ganzen Stadt."}
  ],

  /* Häufige Fragen (Support) */
  faq:[
    {q:"Ein Spieler hat mich grundlos niedergeschossen (VDM). Was tun?",a:"Nimm wenn möglich ein Video oder Screenshots auf. Notiere Namen, Uhrzeit und Server. Öffne dann ein Ticket im Support-Discord und beschreibe, was passiert ist."},
    {q:"Die Polizei hat grundlos ihre Waffe eingesetzt. Was tun?",a:"Sichere Beweise (Video, Screenshot, Dienstnummer, Uhrzeit) und melde den Vorfall per Ticket. Bitte nicht im Spiel diskutieren, das klärt das Team."},
    {q:"Wie bewerbe ich mich für eine Ausbildung?",a:"Mache im Tab „Ausbildungen“ den Eignungstest. Ab 80 % machst du einen Screenshot und legst ihn in dein Bewerbungsticket im Discord."},
    {q:"Ich habe einen Bug gefunden.",a:"Öffne ein Ticket mit einer kurzen Beschreibung und, wenn möglich, einem Video. Das Spiel ist aus der Beta, aber noch nicht fehlerfrei."},
    {q:"Wann ist der Support erreichbar?",a:"Siehe Tabelle unten. Außerhalb der Zeiten kannst du trotzdem ein Ticket schreiben, wir antworten, sobald wir online sind."}
  ],

  /* Eignungstests: Antwort = [Text, Punkte 0-2]. Gleiche Fragen für mehrere Jobs möglich. */
  tests:{
    lp:[["Du siehst bei einer Kontrolle, dass eine Person die Hände hebt und ruhig bleibt. Was tust du?",[["Ich spreche ruhig, erkläre das Vorgehen und kontrolliere sachlich.",2],["Ich ziehe zur Sicherheit die Waffe.",0],["Ich lasse die Person ohne Kontrolle gehen.",1]]],
        ["Wann darfst du deine Schusswaffe einsetzen?",[["Nur bei akuter Gefahr und wenn mildere Mittel nicht reichen.",2],["Wenn jemand wegläuft.",0],["Wenn mir langweilig ist.",0]]],
        ["Ein Kollege verhält sich unfair gegenüber einem Spieler. Was machst du?",[["Ich spreche ihn an und melde es bei Bedarf.",2],["Ich ignoriere es.",0],["Ich mache mit.",0]]]],
    bp:[["Am Bahnhof gibt es einen verdächtigen Koffer. Erste Maßnahme?",[["Bereich absperren, Leitstelle informieren, Abstand halten.",2],["Selbst öffnen.",0],["Wegschieben.",0]]],
        ["Du bekommst einen Funkspruch während einer Kontrolle. Was tust du?",[["Kurz bestätigen und Prioritäten abwägen.",2],["Funk ignorieren.",0],["Kontrolle sofort abbrechen ohne Meldung.",1]]],
        ["Wie trittst du gegenüber Reisenden auf?",[["Höflich, klar und bestimmt.",2],["Laut und einschüchternd.",0],["Gleichgültig.",1]]]],
    lka:[["Du findest am Tatort Spuren. Was tust du zuerst?",[["Sichern, dokumentieren, nichts verändern.",2],["Alles einsammeln und mitnehmen.",1],["Liegen lassen.",0]]],
        ["Ein Verdächtiger will nicht aussagen. Was gilt?",[["Rechte belehren und sachlich weiterermitteln.",2],["Druck und Drohungen nutzen.",0],["Sofort aufgeben.",0]]],
        ["Wie gehst du mit vertraulichen Infos um?",[["Nur an Berechtigte weitergeben.",2],["Im Chat teilen.",0],["Freunden erzählen.",0]]]],
    sv:[["Ein Bürger ist verärgert wegen langer Wartezeit. Wie reagierst du?",[["Zuhören, entschuldigen und Lösung anbieten.",2],["Auf andere Schalter verweisen ohne Hilfe.",1],["Ihn ignorieren.",0]]],
        ["Ein Antrag ist unvollständig. Was tust du?",[["Fehlende Unterlagen freundlich nennen.",2],["Trotzdem genehmigen.",0],["Ablehnen ohne Erklärung.",0]]],
        ["Wie ordnest du mehrere Anliegen?",[["Nach Dringlichkeit und Reihenfolge.",2],["Zufällig.",0],["Freunde zuerst.",0]]]],
    sb:[["Ein Signal zeigt Halt. Was tust du?",[["Anhalten und Meldung an die Leitstelle.",2],["Weiterfahren.",0],["Kurz abwarten, dann fahren.",0]]],
        ["Fahrgäste stehen zu nah am Gleis. Was machst du?",[["Durchsage machen und Abfahrt erst bei freiem Gleis.",2],["Hupen und losfahren.",0],["Nichts tun.",0]]],
        ["Du bist verspätet. Was ist richtig?",[["Sicher fahren und Verspätung melden.",2],["Zu schnell fahren.",0],["Haltestellen auslassen.",1]]]],
    bk:[["Ein Kunde will hohe Summe abheben. Dein Vorgehen?",[["Identität prüfen und Vorgaben einhalten.",2],["Sofort auszahlen.",1],["Ablehnen ohne Grund.",0]]],
        ["Du erkennst einen möglichen Betrugsversuch.",[["Ruhig bleiben und intern melden.",2],["Kunde beschuldigen.",0],["Ignorieren.",0]]],
        ["Datenschutz bei Kontodaten?",[["Nie ohne Berechtigung weitergeben.",2],["Nur an Freunde.",0],["Öffentlich posten.",0]]]],
    mb:[["Ein Fahrzeug hat Schaden. Was tust du?",[["Prüfen, dokumentieren, reparieren.",2],["Ignorieren.",0],["Dem Kunden die Schuld geben.",0]]],
        ["Zwei Kunden warten. Wen bedienst du?",[["In Reihenfolge, Dringendes zuerst.",2],["Den Lauteren.",0],["Keinen.",0]]],
        ["Wie gehst du mit Werkzeug und Fahrzeugen um?",[["Sorgsam und nach Regeln.",2],["Unvorsichtig.",0],["Mit Freunden herumspielen.",0]]]],
    vb:[["Straße ist gesperrt. Was tust du?",[["Umleitung nutzen und Leitstelle informieren.",2],["Durchfahren.",0],["Stehen bleiben ohne Meldung.",0]]],
        ["Ein Fahrgast fragt nach dem Weg.",[["Freundlich und genau erklären.",2],["Ignorieren.",0],["Falsch antworten.",0]]],
        ["Wie fährst du bei Regen?",[["Vorsichtig und mit Abstand.",2],["Wie immer.",0],["Besonders schnell.",0]]]]
  }
};
/* =====================  ENDE CONFIG  ===================== */

/* ---------- Icons (Lucide-Stil) ---------- */
const IC={
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
shieldcheck:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
home:'<path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
help:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.2 4.2M14.9 9.1l4.2-4.2M14.9 14.9l4.2 4.2M9.1 14.9l-4.2 4.2"/>',
cap:'<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
discord:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
server:'<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2-.1-2.8a2 2 0 0 0-2.9-.2zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
ticket:'<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
building:'<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01"/>',
train:'<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16M12 3v8M8 19l-2 3M18 22l-2-3M8 15h.01M16 15h.01"/>',
bank:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2 2 8h20z"/>',
car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
bus:'<path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3M9 18h5"/><circle cx="7" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',
lockc:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'};
const ic=(n,s=20)=>`<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]||""}</svg>`;
const JOBIC={lp:"shield",bp:"shieldcheck",lka:"search",sv:"building",sb:"train",bk:"bank",mb:"car",vb:"bus"};
document.querySelectorAll("[data-ic]").forEach(e=>e.insertAdjacentHTML("afterbegin",ic(e.dataset.ic,+e.dataset.s||20)));

const $=s=>document.querySelector(s),el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LABEL={online:"Online",wartung:"Wartung",offline:"Offline",aktiv:"Aktiv",bald:"Bald geöffnet",geschlossen:"Geschlossen",open:"Geöffnet",closed:"Geschlossen"};
const DAYS=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
const badge=(state,label,cls)=>`<span class="badge s-${state} ${cls||""}">${esc(label||LABEL[state])}</span>`;
const SIC=["server","globe","rocket"];

/* Navigation */
const TABS=[["start","Start","home"],["status","Status","activity"],["support","Support","help"],["ausbildung","Ausbildungen","cap"]];
const nav=$("#nav");
TABS.forEach(([id,l,i])=>{const b=el("button","",ic(i,17)+"<span>"+l+"</span>");b.dataset.go=id;nav.append(b)});
function go(id){if(!TABS.some(t=>t[0]===id))id="start";
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t.id===id));
  nav.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.go===id));
  if(location.hash!=="#"+id)history.replaceState(null,"","#"+id);scrollTo(0,0);reveal()}
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g)go(g.dataset.go)});
addEventListener("hashchange",()=>go(location.hash.slice(1)));

/* Zeiten (deutsche Zeit) */
function berlinNow(){const p=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Berlin",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date());
  const g=t=>p.find(x=>x.type===t).value;return{day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday")),h:(+g("hour")%24)+(+g("minute"))/60}}
function isOpen(){const n=berlinNow(),[a,b]=CONFIG.hours[n.day];return n.h>=a&&n.h<b}

function render(){
  $("#phase").innerHTML=ic("wrench",14)+esc(CONFIG.phase);
  $("#discordBtn").href=CONFIG.discord.main;$("#discordTop").href=CONFIG.discord.main;$("#supportBtn").href=CONFIG.discord.support;
  $("#yr").textContent=new Date().getFullYear();
  const open=isOpen(),m=CONFIG.maintenance;

  /* Live-Panel im Hero */
  $("#statusMini").innerHTML=CONFIG.status.slice(0,2).map((s,i)=>`<div class="lr"><span class="li">${ic(SIC[i],18)}</span><span>${esc(s.name)}</span>${badge(s.state,s.label)}</div>`).join("")
   +`<div class="lr"><span class="li">${ic("discord",18)}</span><span>Discord</span>${badge(open?"open":"closed")}</div>`;

  /* Status */
  $("#statusGrid").innerHTML=CONFIG.status.map((s,i)=>`<div class="srow rv"><span class="tile">${ic(SIC[i%3],24)}</span><div><h3>${esc(s.name)}</h3><p class="mute">${esc(s.note||"Keine Meldung.")}</p></div>${badge(s.state,s.label)}</div>`).join("");
  $("#maint").innerHTML=m.text?`<div class="banner ${m.type==="good"?"good":""}">${ic(m.type==="good"?"check":"wrench",20)}<span>${esc(m.text)}</span></div>`:"";
  $("#dcGrid").innerHTML=CONFIG.discordCats.map(c=>`<div class="card rv"><span class="tile">${ic("discord",24)}</span><h3>${esc(c.name)}</h3><p class="mute">Heute ${CONFIG.hours[berlinNow().day].map(h=>h+":00").join(" bis ")} Uhr</p>${badge(open?"open":"closed")}</div>`).join("");
  $("#supportNow").className="badge s-"+(open?"open":"closed");$("#supportNow").textContent="Support jetzt: "+(open?"Geöffnet":"Geschlossen");
  const today=berlinNow().day;
  $("#hoursTable").innerHTML=[1,2,3,4,5,6,0].map(d=>`<div class="hr${d===today?" today":""}"><span>${DAYS[d]}</span><i></i><b>${CONFIG.hours[d][0]}:00 bis ${CONFIG.hours[d][1]}:00 Uhr</b></div>`).join("");

  /* Devlog */
  $("#devlog").innerHTML=CONFIG.devlog.slice(0,CONFIG.devlogShow).map((d,i)=>`<article class="tli rv"><span class="td">${ic("zap",14)}</span><div class="tc"><div class="th"><h3>${esc(d.title)}</h3>${i===0?'<span class="new">Neu</span>':""}</div><span class="note">${new Date(d.date).toLocaleDateString("de-DE",{day:"numeric",month:"long",year:"numeric"})}</span><ul>${d.items.map(x=>`<li>${ic("check",15)}<span>${esc(x)}</span></li>`).join("")}</ul></div></article>`).join("");

  /* FAQ */
  $("#faq").innerHTML=CONFIG.faq.map(f=>`<details><summary><span class="tile s">${ic("alert",18)}</span><span class="q">${esc(f.q)}</span><span class="pl">${ic("x",18)}</span></summary><div class="a">${esc(f.a)}</div></details>`).join("");

  /* Ausbildungen */
  $("#jobGrid").innerHTML="";
  CONFIG.jobs.forEach(j=>{
    const c=el("div","card job rv");const done=getResult(j.id);
    c.innerHTML=`${badge(j.state,"","corner")}<span class="tile big">${ic(JOBIC[j.id]||"shield",30)}</span><h3>${esc(j.name)}</h3><p class="mute">${esc(j.desc)}</p>`;
    const b=el("button","btn full",done?ic("check",16)+`Ergebnis: ${done.pct} %`:"Eignungstest starten"+ic("arrow",16));
    if(j.state!=="aktiv"||done)b.disabled=true;
    if(j.state!=="aktiv")b.innerHTML=ic("lock",16)+(j.state==="bald"?"Öffnet bald":"Geschlossen");
    b.onclick=()=>startTest(j);c.append(b);$("#jobGrid").append(c)});
  reveal();
}

/* Einmaliger Test (Browser). Echtes "pro IP" geht nur mit Server. */
const key=id=>"nr_test_"+id;
function getResult(id){try{return JSON.parse(localStorage.getItem(key(id)))}catch(e){return null}}
function saveResult(id,r){try{localStorage.setItem(key(id),JSON.stringify(r))}catch(e){}}

function startTest(job){
  const qs=(typeof TESTS!=="undefined"&&TESTS[job.id])||CONFIG.tests[job.id];let i=0,pts=0;const max=qs.length*2,dlg=$("#dlg"),qb=$("#qb");
  saveResult(job.id,{pct:0,started:true,date:Date.now()});
  function show(){
    if(i>=qs.length){const pct=Math.round(pts/max*100),ok=pct>=CONFIG.passPercent,C=326.7;
      saveResult(job.id,{pct,date:Date.now()});
      qb.innerHTML=`<div class="res"><div class="ring ${ok?"ok":"bad"}"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52"/><circle id="rg" cx="60" cy="60" r="52" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><b>${pct}%</b></div>
      <h2>${ok?"Bestanden":"Nicht bestanden"}</h2><p>${ok?`Stark, du hast ${CONFIG.passPercent} % erreicht. Mache jetzt einen Screenshot dieser Seite und lege ihn in dein Bewerbungsticket im Discord.`:`Für eine Bewerbung brauchst du mindestens ${CONFIG.passPercent} %. Der Test kann nicht wiederholt werden.`}</p>
      <div class="row" style="justify-content:center"><a class="btn" href="${CONFIG.discord.main}" target="_blank" rel="noopener">${ic("discord",18)}Zum Discord</a><button class="btn light" id="cl">Schließen</button></div></div>`;
      requestAnimationFrame(()=>requestAnimationFrame(()=>{$("#rg").style.strokeDashoffset=C*(1-pct/100)}));
      $("#cl").onclick=()=>{dlg.close();render()};return}
    const [q,opts]=qs[i],order=opts.map((o,n)=>n).sort(()=>Math.random()-.5);
    qb.innerHTML=`<div class="qh"><span class="tile">${ic(JOBIC[job.id]||"shield",22)}</span><div><b>${esc(job.name)}</b><span class="note">Frage ${i+1} von ${qs.length}</span></div></div><div class="prog"><i style="width:${i/qs.length*100}%"></i></div><h2 class="qt">${esc(q)}</h2>`;
    order.forEach((n,k)=>{const b=el("button","opt",`<span class="ab">${"ABC"[k]}</span><span>${esc(opts[n][0])}</span>`);b.onclick=()=>{pts+=opts[n][1];i++;show()};qb.append(b)})}
  show();dlg.showModal();dlg.oncancel=e=>e.preventDefault();
}

/* Einblend-Effekt beim Scrollen */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function reveal(){document.querySelectorAll(".rv:not(.in),.ft:not(.in)").forEach(e=>io.observe(e))}
/* Lichtkegel auf Karten */
document.addEventListener("pointermove",e=>{const c=e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});
render();go(location.hash.slice(1));setInterval(()=>{render();document.querySelectorAll(".rv").forEach(e=>e.classList.add("in"))},60000);
