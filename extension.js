"use strict";
const {
	languages,
	Range,
	TextEdit
} = require("vscode");
const {
	formatChunk
} = require("@appguru/luafmt");

module.exports = {
	activate: context => context.subscriptions.push(languages.registerDocumentFormattingEditProvider("lua", {
		provideDocumentFormattingEdits: document => [TextEdit.replace(new Range(document.lineAt(0).range.start, document.lineAt(document.lineCount - 1).range.end), formatChunk(document.getText()))]
	})),
	deactivate: () => {}
};