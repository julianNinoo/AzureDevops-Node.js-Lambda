"use strict";

function getLocalGreeting(language) {
  switch(language) {
    case "en":
      return "HolaPragma!";
    case "es":
      return "¡comoestasPragma";
    case "ru":
      return "chaoPragma!";
    default:
      return "👋";
  }
}

function pickLocale() {
  const languages = ["en", "es", "cn", "fr", "ru"];
  return languages [Math.floor(Math.random() * languages.length)];
}
module.exports.getLocalGreeting = getLocalGreeting;

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: getLocalGreeting(pickLocale()),
        input: event,
      },
      null,
      2
    ),
  };
};
