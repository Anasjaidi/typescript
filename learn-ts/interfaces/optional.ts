interface opt {
  stock?: string;
  release: number;
}


class td implements opt {
  release: number;
}


class dt implements opt {
  release: number;
  stock?: string | undefined;
}


const optFn = (name?: string) => {
  if (name) {
    console.log(name);
  }
}

optFn()

optFn("anas")