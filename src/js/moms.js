// Simple moms database and check logic (extracted from inline script)
export const appState = {
  momsDatabase: {
    'æble': true, 'pære': true, 'banan': true, 'kartoffel': true, 'gulerod': true, 'løg': true,
    'kylling': true, 'oksekød': true, 'fisk': true, 'laks': true, 'torsk': true,
    'æg': true, 'mælk': true, 'fløde': true, 'smør': true, 'usaltet smør': true,
    'mel': true, 'havregryn': true, 'ris': true, 'bønner': true, 'linser': true, 'vand': true,
    'saltet smør': false, 'kiks': false, 'chips': false, 'sodavand': false, 'cola': false,
    'pølser': false, 'spegepølse': false, 'kage': false, 'brød': false, 'rugbrød': false,
    'pizza': false, 'færdigret': false, 'lasagne': false, 'slik': false, 'chokolade': false,
    'yoghurt med frugt': false, 'frugtyoghurt': false, 'marineret kylling': false
  }
}

export function checkMoms(inputValue) {
  const input = (inputValue || '').toLowerCase().trim();
  if (!input) return { type: 'empty' };

  let isMomsFri = appState.momsDatabase[input];

  if (isMomsFri === undefined) {
    if (input.includes('kage') || input.includes('ret') || input.includes('mix') || input.includes('sodavand')) {
      isMomsFri = false;
    } else if (input.includes('frugt') || input.includes('grønt') || input.includes('fersk')) {
      isMomsFri = true;
    } else {
      return { type: 'unknown' };
    }
  }

  return { type: isMomsFri ? 'zero' : 'vat', value: isMomsFri };
}
