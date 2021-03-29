function textSplit(text: string, size: number): string {
  if (!text || typeof text !== 'string') {
    return text;
  }

  if (text.length > size) {
    const newText = text.slice(0, size).replace(/\s$/, '');

    return `${newText}...`;
  }

  return text;
}

export default textSplit;
