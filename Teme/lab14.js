//1. O functie care calculeaza patratul unui numar care va fi dat ca parametru;
function CalculeazaPatrat(n) {
    return n * n;
}
//2. O functie care care calculeaza aria unui patrat;
function CalculeazaAriePatrat(latura) {
    return CalculeazaAriePatrat(latura);
}
//3. O functie care calculeaza perimetrul unui patrat;
function CalculeazaPerimetruPatrat(latura) {
    return 4 * latura;
}
//functia schimba class este utila pentru:
//4. O functie care schimba clasa unui buton;
//5. O functie care muta o imagine la dreapta;
//6. O functie care sa mute o imagine la stanga;
function SchimbaClass(elementId, className) {
    document.getElementById(elementId).classList = [];
    document.getElementById(elementId).classList.add(className);
}
