"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationController = void 0;
const translate = require('@vitalets/google-translate-api');
// Class to handle translations
class TranslationController {
    translationHandler(req, res) {
        const text = req.query.text;
        if (!text || text.length == 0) {
            return res.status(400).json({ 'status': 400, 'message': 'Invalid text provided' });
        }
        this.translatorService(text.toString())
            .then((translated) => res.status(200).json({ 'status': 200, 'data': translated }))
            .catch((error) => res.status(200).json({
            'status': 200,
            'message': `Error translating ${text}`,
            'error': error
        }));
    }
    // Define languages to translate to and return array of translations
    translatorService(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const languages = this.languages();
            const translated = [];
            for (let i = 0; i < languages.length; i++) {
                const t = yield this.translator(languages[i].abbreviation, text);
                translated.push({ 'language': languages[i].language, 'text': t });
            }
            return translated;
        });
    }
    // Handle specific translation
    translator(language, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                translate(text, { to: language }).then((res) => {
                    resolve(res.text);
                }).catch((error) => {
                    console.log(`Error translating: ${error}`);
                    resolve(null);
                });
            });
        });
    }
    // Array of languages
    languages() {
        return [
            { 'language': 'Afrikaans', 'abbreviation': 'af' },
            { 'language': 'Hausa', 'abbreviation': 'ha' },
            { 'language': 'Hindi', 'abbreviation': 'hi' },
            { 'language': 'Hungarian', 'abbreviation': 'hu' },
            { 'language': 'Igbo', 'abbreviation': 'ig' },
            { 'language': 'Indonesian', 'abbreviation': 'in' },
            { 'language': 'Japanese', 'abbreviation': 'ja' },
            { 'language': 'Marathi', 'abbreviation': 'mr' },
            { 'language': 'Spanish', 'abbreviation': 'es' },
            { 'language': 'Swahili', 'abbreviation': 'sw' },
            { 'language': 'Xhosa', 'abbreviation': 'xh' },
            { 'language': 'Zulu', 'abbreviation': 'zu' },
        ];
    }
}
exports.TranslationController = TranslationController;
//# sourceMappingURL=translation-controller.js.map