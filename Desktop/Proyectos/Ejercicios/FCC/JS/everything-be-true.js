//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).




function truthCheck(collection, pre) {
  return collection.every(x => Boolean(x[pre]));
};

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");