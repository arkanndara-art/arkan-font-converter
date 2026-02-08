var thisString;
function startText() {
thisString = document.form.select.value;
thisString = thisString.replace(/ىَ/g, "ێ‌");
thisString = thisString.replace(/ىَ/g, "ێ‌");

thisString = thisString.replace(/ة/g, "ه‌");
thisString = thisString.replace(/ذ/g, "ژ");
thisString = thisString.replace(/ؤ/g, "ۆ");
thisString = thisString.replace(/ث/g, "ppzppp");

thisString = thisString.replace(/يَ/g, "ێ");
thisString = thisString.replace(/ى/g, "ی‌");
thisString = thisString.replace(/ي/g, "ی");
thisString = thisString.replace(/ي/g, "ی");
thisString = thisString.replace(/يَ/g, "ێ");
thisString = thisString.replace(/ي/g, "ی");
thisString = thisString.replace(/ط/g, "گ");
thisString = thisString.replace(/لأ/g, "ڵ‌");
thisString = thisString.replace(/لآ/g, "ڵا");
thisString = thisString.replace(/آ/g, "ێ‌");
thisString = thisString.replace(/لَ/g, "ڵ");
thisString = thisString.replace(/ض/g, "چ");
thisString = thisString.replace(/رِ/g, "ڕ");
thisString = thisString.replace(/’/g, "‌");
thisString = thisString.replace(/ppzppp/g, "پ");


thisString = thisString.replace(/ظ/g, "ڤ");
thisString = thisString.replace(/ء/g, "‌و");
thisString = thisString.replace(/ـ/g, "ـ");

document.form.select.value=thisString;
}
