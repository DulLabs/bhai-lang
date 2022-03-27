<h1 align="center">didi Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/didi-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/didi-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/didi-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/didi-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/didi-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/didi-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://didilang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-didilang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/didilang"><img alt="Build" src="https://img.shields.io/badge/npm-didilang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for didi-lang.<br><br>
  <b>didi lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g didilang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.didi</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://didilang.js.org/#playground">didi Lang PlayGround</a></h4>

```
hi didi
  bol didi "Hello didi";
bye didi

```

<h4 align="left">Run</h4>

```
didilang test.didi
```

<h4 align="left">Output</h4>

```
hello didi
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi didi</code> is the entrypoint for the program and all program must end with <code>bye didi</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi didi
// Write code here
bye didi

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>didi ye hai</code>.</p>

```

hi didi
  didi ye hai a = 10;
  didi ye hai b = "two";
  didi ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye didi
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi didi
  didi ye hai a = 10;
  didi ye hai b = 10 + (15*20);
  didi ye hai c = "two";
  didi ye hai d = 'ok';
  didi ye hai e = nalla;
  didi ye hai f = sahi;
  didi ye hai g = galat;
bye didi
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol didi</code> to print anything to console.</p>

```

hi didi
  bol didi "Hello World";
  didi ye hai a = 10;
  {
    didi ye hai b = 20;
    bol didi a + b;
  }
  bol didi 5, 'ok', nalla , sahi , galat;
bye didi
```

<h3 align="center">Conditionals</h3>
<p align="center">didilang supports if-else-if ladder construct , <code>agar didi</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to didi</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>warna didi</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi didi
  didi ye hai a = 10;
  agar didi (a < 20) {
    bol didi "a is less than 20";
  } nahi to didi ( a < 25 ) {
    bol didi "a is less than 25";
  } warna didi {
    bol didi "a is greater than or equal to 25";
  }
bye didi
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak didi</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar didi</code> to break the loop and <code className="language-cpp">agla dekh didi</code> to continue within loop.</p>


```

hi didi
  didi ye hai a = 0;
  jab tak didi (a < 10) {
   a += 1;
   agar didi (a == 5) {
    bol didi "andar se bol didi ", a;
    agla dekh didi;
   }
   agar didi (a == 6) {
    bas kar didi;
   }
   bol didi a;
  }
  bol didi "done";
bye didi
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of didilang <a href="https://didilang-ast.netlify.app/" target="_blank">here</a>.</p>








