var meSpeak = require("mespeak");

//Select english/american voice
meSpeak.loadVoice(require("mespeak/voices/en/en-us.json"));

module.exports.play = function() {
	meSpeak.speak('I am a wolf. Awwwwooooo');
};
