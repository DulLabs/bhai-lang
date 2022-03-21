<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for bhai-lang.<br><br>
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bhai</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
hi bhai
  bol bhai "Hello bhai";
bye bhai

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
<p align="center"><code>hi bhai</code> is the entrypoint for the program and all program must end with <code>bye bhai</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi bhai
// Write code here
bye bhai

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bhai ye hai</code>.</p>

```

hi bhai
  bhai ye hai a = 10;
  bhai ye hai b = "two";
  bhai ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye bhai
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi bhai
  bhai ye hai a = 10;
  bhai ye hai b = 10 + (15*20);
  bhai ye hai c = "two";
  bhai ye hai d = 'ok';
  bhai ye hai e = nalla;
  bhai ye hai f = sahi;
  bhai ye hai g = galat;
bye bhai
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol bhai</code> to print anything to console.</p>

```

hi bhai
  bol bhai "Hello World";
  bhai ye hai a = 10;
  {
    bhai ye hai b = 20;
    bol bhai a + b;
  }
  bol bhai 5, 'ok', nalla , sahi , galat;
bye bhai
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports if-else-if ladder construct , <code>agar bhai</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to bhai</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>warna bhai</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi bhai
  bhai ye hai a = 10;
  agar bhai (a < 20) {
    bol bhai "a is less than 20";
  } nahi to bhai ( a < 25 ) {
    bol bhai "a is less than 25";
  } warna bhai {
    bol bhai "a is greater than or equal to 25";
  }
bye bhai
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bhai</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

hi bhai
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
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of bhailang <a href="https://bhailang-ast.netlify.app/" target="_blank">here</a>.</p>








