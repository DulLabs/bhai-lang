<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
vanakkam nanba
  sollu nanba "Hello bhai";
nanri nanba

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>vanakkam nanba</code> is the entrypoint for the program and all program must end with <code>nanri nanba</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

vanakkam nanba
// Write code here
nanri nanba

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>nanba idhaan</code>.</p>

```

vanakkam nanba
  nanba idhaan a = 10;
  nanba idhaan b = "two";
  nanba idhaan c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
nanri nanba
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla. sahi and galat</code> are the boolean values.</p>

```

vanakkam nanba
  nanba idhaan a = 10;
  nanba idhaan b = 10 + (15*20);
  nanba idhaan c = "two";
  nanba idhaan d = 'ok';
  nanba idhaan e = nalla;
  nanba idhaan f = sahi;
  nanba idhaan g = galat;
nanri nanba
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>sollu nanba</code> to print anything to console.</p>

```

vanakkam nanba
  sollu nanba "Hello World";
  nanba idhaan a = 10;
  {
    nanba idhaan b = 20;
    sollu nanba a + b;
  }
  sollu nanba 5, 'ok', nalla , sahi , galat;
nanri nanba
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>agar bhai</code> block will execute if condition is <code>sahi</code> and <code>warna bhai</code> block will execute if condition is <code>galat</code>.</p>

```

vanakkam nanba
  nanba idhaan a = 10;
  agar bhai (a < 25) {
   sollu nanba "a is less than 25";
  } warna bhai {
   sollu nanba "a is greater than or equal to 25";
  }
nanri nanba
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bhai</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

vanakkam nanba
  nanba idhaan a = 0;
  jab tak bhai (a < 10) {
   a += 1;
   agar bhai (a == 5) {
    sollu nanba "andar se sollu nanba ", a;
    agla dekh bhai;
   }
   agar bhai (a == 6) {
    bas kar bhai;
   }
   sollu nanba a;
  }
  sollu nanba "done";
nanri nanba
```



