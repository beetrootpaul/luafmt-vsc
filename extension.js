"use strict";
const {
	languages,
	Range,
	TextEdit
} = require("vscode");

const {
	formatChunk
} = require("luafmt-pico8");

module.exports = {
	activate: context => context.subscriptions.push(
		languages.registerDocumentFormattingEditProvider("lua", {
			provideDocumentFormattingEdits: document => [
				TextEdit.replace(
					new Range(
						document.lineAt(0).range.start,
						document.lineAt(document.lineCount - 1).range.end
					),
					// "abc\ndef\n\tghi"
					formatChunk(document.getText())
				)
			]
	})),
	deactivate: () => {}
};