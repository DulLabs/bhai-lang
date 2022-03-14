import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hello dost</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye dost</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hello dost
  // Write code here
bye dost

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">dost ye hai</code>.
      </>
    ),
    code: `hello dost
    dost ye hai a = 10;
    dost ye hai b = "two";
    dost ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye dost
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
    code: `hello dost
    dost ye hai a = 10;
    dost ye hai b = 10 + (15*20);
    dost ye hai c = "two";
    dost ye hai d = 'ok';
    dost ye hai e = nalla;
    dost ye hai f = sahi;
    dost ye hai g = galat;
bye dost
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bolo dost</code> to print anything to
        console.
      </>
    ),
    code: `hello dost
    bolo dost "Hello World";
    dost ye hai a = 10;
    {
       dost ye hai b = 20;
       bolo dost a + b;
    }
    bolo dost 5, 'ok', nalla , sahi , galat;
bye dost
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports simple if else construct , <code className="language-cpp">agar dost</code> block will execute if condition is <code className="language-cpp">sahi</code> and <code className="language-cpp">warna dost</code> block will execute if condition is <code className="language-cpp">galat</code>.
      </>
    ),
    code: `hello dost
    dost ye hai a = 10;
    agar dost (a < 25) {
      bolo dost "a is less than 25";
    } warna dost {
      bolo dost "a is greater than or equal to 25";
    }
bye dost
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak dost</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas karo dost</code> to break the loop and <code className="language-cpp">agla dekho dost</code> to continue within loop.
      </>
    ),
    code: `hello dost
    dost ye hai a = 0;
    jab tak dost (a < 10) {
      a += 1;
      agar dost (a == 5) {
        bolo dost "andar se bolo dost ", a;
        agla dekho dost;
      }
      agar dost (a == 6) {
        bas karo dost;
      }
      bolo dost a;
    }
    bolo dost "done";
bye dost
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
