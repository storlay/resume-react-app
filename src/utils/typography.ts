export const nbsp = (s: string) => s.replace(/ (\S{1,3}) /g, ' $1 ');
