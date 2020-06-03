import { Request, Response } from "express";
import { resolve } from "dns";
const translate = require('@vitalets/google-translate-api');

// Class to handle translations
export class TranslationController {

    public translationHandler(req: Request, res: Response) {
        const text = req.query.text;

        if (!text || text.length == 0) {
            return res.status(400).json({'status': 400, 'message': 'Invalid text provided'});
        }

        this.translatorService(text.toString())
        .then((translated: any) => res.status(200).json({'status': 200, 'data': translated}))
        .catch((error: any) => res.status(200).json({
            'status': 200, 
            'message': `Error translating ${text}`,
            'error': error
          }));
    }

    // Define languages to translate to and return array of translations
    async translatorService(text: String): Promise<Array<any>> {
        const languages = this.languages();
        const translated: {language: String, text: String}[] = [];

        for(let i=0; i<languages.length; i++) {
            const t = await this.translator(languages[i].abbreviation, text);
            translated.push({'language': languages[i].language, 'text': t});
        }

        return translated;
    }

    // Handle specific translation
    async translator(language: String, text: String): Promise<String> {
        return new Promise<String>((resolve, reject) => {
            translate(text, {to: language}).then((res: any) => {
                resolve(res.text);
            }).catch((error: any) => {
                console.log(`Error translating: ${error}`);
                resolve(null);
            });
        });
    }

    // Array of languages
    private languages() {
        return [
            {'language': 'Afrikaans', 'abbreviation': 'af'},
            {'language': 'Hausa', 'abbreviation': 'ha'},
            {'language': 'Hindi', 'abbreviation': 'hi'},
            {'language': 'Hungarian', 'abbreviation': 'hu'},
            {'language': 'Igbo', 'abbreviation': 'ig'},
            {'language': 'Indonesian', 'abbreviation': 'id'},   
            {'language': 'Japanese', 'abbreviation': 'ja'},
            {'language': 'Marathi', 'abbreviation': 'mr'},
            {'language': 'Spanish', 'abbreviation': 'es'},
            {'language': 'Swahili', 'abbreviation': 'sw'},
            {'language': 'Xhosa', 'abbreviation': 'xh'},
            {'language': 'Zulu', 'abbreviation': 'zu'},
        ]
    }
}