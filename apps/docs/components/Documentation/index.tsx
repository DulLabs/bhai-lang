import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">வணக்கம் நண்பா</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">நன்றி நண்பா</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

வணக்கம் நண்பா
  // Write code here
நன்றி நண்பா

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">இதான் நண்பா</code>.
      </>
    ),
    code: `வணக்கம் நண்பா
    இதான் நண்பா a = 10;
    இதான் நண்பா b = "two";
    இதான் நண்பா c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
நன்றி நண்பா
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">ஒன்னுமேயில்லை நண்பா</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `வணக்கம் நண்பா
    இதான் நண்பா a = 10;
    இதான் நண்பா b = 10 + (15*20);
    இதான் நண்பா c = "two";
    இதான் நண்பா d = 'ok';
    இதான் நண்பா e = ஒன்னுமேயில்லை நண்பா;
    இதான் நண்பா f = sahi;
    இதான் நண்பா g = galat;
நன்றி நண்பா
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">சொல்லு நண்பா</code> to print anything to
        console.
      </>
    ),
    code: `வணக்கம் நண்பா
    சொல்லு நண்பா "வணக்கமுங்க";
    இதான் நண்பா a = 10;
    {
       இதான் நண்பா b = 20;
       சொல்லு நண்பா a + b;
    }
    சொல்லு நண்பா 5, 'ok', ஒன்னுமேயில்லை நண்பா , sahi , galat;
நன்றி நண்பா
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports if-else-if ladder construct , <code className="language-cpp">இப்படின்னா நண்பா</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">இல்ல ஒருவேளை</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">அப்படி இல்லேன்னா</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `வணக்கம் நண்பா
    இதான் நண்பா a = 10;
    இப்படின்னா நண்பா (a < 20) {
      சொல்லு நண்பா "a is less than 20";
    } இல்ல ஒருவேளை ( a < 25 ) {
      சொல்லு நண்பா "a is less than 25";
    } அப்படி இல்லேன்னா {
      சொல்லு நண்பா "a is greater than or equal to 25";
    }
நன்றி நண்பா
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">இதுவரைக்கும் சுத்து நண்பா</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">போதும் நண்பா</code> to break the loop and <code className="language-cpp">அடுத்தது நண்பா</code> to continue within loop.
      </>
    ),
    code: `வணக்கம் நண்பா
    இதான் நண்பா a = 0;
    இதுவரைக்கும் சுத்து நண்பா (a < 10) {
      a += 1;
      இப்படின்னா நண்பா (a == 5) {
        சொல்லு நண்பா "andar se சொல்லு நண்பா ", a;
        அடுத்தது நண்பா;
      }
      இப்படின்னா நண்பா (a == 6) {
        போதும் நண்பா;
      }
      சொல்லு நண்பா a;
    }
    சொல்லு நண்பா "done";
நன்றி நண்பா
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Bhailang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
