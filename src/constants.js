export const MODES = {
  normal: {
    prompt: '',
  },
  german: {
    prompt:
      'Translate the provided English text into German. Give only the German translation without explanations, comments, or formatting. Present the translation as plain text. Here is text in German: ',
  },
  slang: {
    prompt:
      'Rewrite the provided text using slang. Give only the rewritten version without explanations, comments, or formatting. Present the slang version as plain text. Here is the original text: ',
  },
  grammar: {
    prompt:
      'Correct grammar mistakes in the provided sentences. Only give the corrected version without any explanations, comments, or markdown formatting. Present the corrected sentence as plain text. Here is the sentence: ',
  },
};
