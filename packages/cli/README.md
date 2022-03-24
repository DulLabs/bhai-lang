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
வணக்கம் நண்பா
  சொல்லு நண்பா "Hello bhai";
நன்றி நண்பா

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
<p align="center"><code>வணக்கம் நண்பா</code> is the entrypoint for the program and all program must end with <code>நன்றி நண்பா</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

வணக்கம் நண்பா
// Write code here
நன்றி நண்பா

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>இதான் நண்பா</code>.</p>

```

வணக்கம் நண்பா
  இதான் நண்பா a = 10;
  இதான் நண்பா b = "two";
  இதான் நண்பா c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
நன்றி நண்பா
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>ஒன்னுமேயில்லை நண்பா. sahi and galat</code> are the boolean values.</p>

```

வணக்கம் நண்பா
  இதான் நண்பா a = 10;
  இதான் நண்பா b = 10 + (15*20);
  இதான் நண்பா c = "two";
  இதான் நண்பா d = 'ok';
  இதான் நண்பா e = ஒன்னுமேயில்லை நண்பா;
  இதான் நண்பா f = sahi;
  இதான் நண்பா g = galat;
நன்றி நண்பா
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>சொல்லு நண்பா</code> to print anything to console.</p>

```

வணக்கம் நண்பா
  சொல்லு நண்பா "வணக்கமுங்க";
  இதான் நண்பா a = 10;
  {
    இதான் நண்பா b = 20;
    சொல்லு நண்பா a + b;
  }
  சொல்லு நண்பா 5, 'ok', ஒன்னுமேயில்லை நண்பா , sahi , galat;
நன்றி நண்பா
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>இப்படின்னா நண்பா</code> block will execute if condition is <code>sahi</code> and <code>அப்படி இல்லேன்னா</code> block will execute if condition is <code>galat</code>.</p>

```

வணக்கம் நண்பா
  இதான் நண்பா a = 10;
  இப்படின்னா நண்பா (a < 25) {
   சொல்லு நண்பா "a is less than 25";
  } அப்படி இல்லேன்னா {
   சொல்லு நண்பா "a is greater than or equal to 25";
  }
நன்றி நண்பா
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>இதுவரைக்கும் சுத்து நண்பா</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>போதும் நண்பா</code> to break the loop and <code className="language-cpp">அடுத்தது நண்பா</code> to continue within loop.</p>


```

வணக்கம் நண்பா
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
```



