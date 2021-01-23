function main() {
    const S = readLine();
    const N = parseInt(S);
    try {
    console.log(isNaN(N)?"Bad String":N);
  } catch (e) {
    console.log('Bad String')
  }
}
