import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi bhai</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye bhai</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi bhai
  // Write code here
bye bhai

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">bhai ye hai</code>.
      </>
    ),
    code: `hi bhai
    bhai ye hai a = 10;
    bhai ye hai b = "two";
    bhai ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye bhai
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `hi bhai
    bhai ye hai a = 10;
    bhai ye hai b = 10 + (15*20);
    bhai ye hai c = "two";
    bhai ye hai d = 'ok';
    bhai ye hai e = nalla;
    bhai ye hai f = sahi;
    bhai ye hai g = galat;
bye bhai
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol bhai</code> to print anything to
        console.
      </>
    ),
    code: `hi bhai
    bol bhai "Hello World";
    bhai ye hai a = 10;
    {
       bhai ye hai b = 20;
       bol bhai a + b;
    }
    bol bhai 5, 'ok', nalla , sahi , galat;
bye bhai
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports simple if else construct , <code className="language-cpp">agar bhai</code> block will execute if condition is <code className="language-cpp">sahi</code> and <code className="language-cpp">warna bhai</code> block will execute if condition is <code className="language-cpp">galat</code>.
      </>
    ),
    code: `hi bhai
    bhai ye hai a = 10;
    agar bhai (a < 25) {
      bol bhai "a is less than 25";
    } warna bhai {
      bol bhai "a is greater than or equal to 25";
    }
bye bhai
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak bhai</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.
      </>
    ),
    code: `hi bhai
    bhai ye hai a = 0;
    jab tak bhai (a < 10) {
      a += 1;
      agar bhai (a == 5) {
        bol bhai "andar se bol bhai ", a;
        agla dekh bhai;
      }
      agar bhai (a == 6) {
        bas kar bhai;
      }
      bol bhai a;
    }
    bol bhai "done";
bye bhai
    `
  }

];
   name: "Functions",
    description: (
      <>
        Statements inside <code className="language-cpp">Aaj tera bhai gaadi chalaega </code> defining a function. The function name is followed by parameter in ().
      </>
    ),
    code: `hi bhai
    Aaj gaadi tera bhai chalaega function():
    bol bhai "Sahi Jaa Raha Hai Bhai"
bye bhai
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
