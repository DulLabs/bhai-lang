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
        using <code className="language-cpp">nulla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `hi bhai
    bhai ye hai a = 10;
    bhai ye hai b = 10 + (15*20);
    bhai ye hai c = "two";
    bhai ye hai d = 'ok';
    bhai ye hai e = nulla;
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
    bol bhai 5, 'ok', nulla , sahi , galat;
    bye bhai
    `,
  },
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

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-300">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </dd>
                <Snippet code={feature.code} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
