function add12(v1: number, v2: number): number;
function add12(v1: string, v2: string): string;
function add12(v1: Combinale, v2: Combinale): Combinale {
  if (typeof v1 === 'number' && typeof v2 === 'number') {
    return v1 + v2;
  }
  return v1.toString() + v2.toString()
}

// const sss: number
const sss = add12(12, 12);