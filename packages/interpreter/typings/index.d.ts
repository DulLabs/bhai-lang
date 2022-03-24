declare module "bhai-lang-interpreter" {
  function interpret(code: string): void;

  declare const interpreter = {
    interpret: interpret,
  };

  export default interpreter;
}
