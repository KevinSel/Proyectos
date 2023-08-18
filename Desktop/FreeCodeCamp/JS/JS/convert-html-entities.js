function convertHTML(str) {
 let equivalents = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};
 Object.keys(equivalents).forEach(x => str = str.replaceAll(x,equivalents[x]));
 return str;
}

convertHTML("Dolce & Gabbana");