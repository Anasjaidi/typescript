const combine2 = (v: (number | string), v2 : (number | string), mode: ('as-number' | 'as-text')) => {
  if (typeof v1 === 'number' && typeof v1 === 'number' || mode === 'as-number') {
    return +v1 + +v2;
  } else {
    return v1.toString() + v2.toString()
  }
}

combine2(1, 2, 'as-number')