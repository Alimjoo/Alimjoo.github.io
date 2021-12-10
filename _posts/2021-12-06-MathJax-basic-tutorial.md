---
title: MathJax basic tutorial and quick reference(MathJax教程)
author:
  name: Piyazon
  link: https://piyazon.top
date: 2021-12-06 18:10:00 +0800
categories: [Blogging, Tutorial]
tags: [latex, mathjax]
math: true
image:
  src: /jekyll/posts/mj-logo.svg
  alt: MathJax-logo
---

# Basics

- **For inline formulas, enclose the formula in `$...$`. For displayed formulas, use `$$...$$`.** <br>
These render differently. For example, type`$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$` to show $\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$ (which is inline mode) or type `$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$` to show

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

(which is display mode).
- For **Greek letters**, use `\alpha`, `\beta`, …, `\omega` : $\alpha, \beta, \ldots, \omega$ . For uppercase, use `\Gamma`, `\Delta`, …, `\Omega` : $\Gamma, \Delta, \ldots, \Omega$ . Some Greek letters have variant forms: `\epsilon` `\varepsilon` $\epsilon, \varepsilon$ , `\phi` `\varphi` $\phi, \varphi$ , and others.

- For **superscripts** and **subscripts**, use `^` and `_`. For example, `x_i^2`: $x_i^2$ , `\log_2 x`: $\log_2 x$ .

- **Groups**. Superscripts, subscripts, and other operations apply only to the next “group”. A “group” is either a single symbol, or any formula surrounded by curly braces `{`…`}`. If you do `10^10`, you will get a surprise: $10^10$ . But `10^{10}` gives what you probably wanted: $10^{10}$ . Use curly braces to delimit a formula to which a superscript or subscript applies: `x^5^6` is an error; `{x^y}^z` is ${x^y}^z$, and `x^{y^z}` is $x^{y^z}$ . Observe the difference between `x_i^2` $x_i^2$ and `x_{i^2}` $x_{i^2}$.

- **Parentheses** Ordinary symbols `()[]` make parentheses and brackets $(2+3)[4+4]$. Use `\{` and `\}` for curly braces $\{\}$. <br>
These do bot scale with the formula in between, so if you write `(\frac{\sqrt x}{y^3})` the parentheses will be too small: $(\frac{\sqrt x}{y^3})$ . Using `\left(`…`\right)` will make the sizes adjust automatically to the formula they enclose: `\left(\frac{\sqrt x}{y^3}\right)` is $\left(\frac{\sqrt x}{y^3}\right)$ . <br>
`\left` and `\right` apply to all the following sorts of parentheses: `(` and `)` $\left( x \right)$ , `[` and `]` $\left[ x \right]$ , `\{` and `\}` $\left\lbrace x \right\rbrace$ , `|` $\left| x \right|$ , `\vert` $\left\vert x \right\vert$ , `\Vert` $\left\Vert x \right\Vert$ , `\langle` and `\rangle` $\left\langle x \right\rangle$ , `\lceil` and `\rceil` $\left\lceil x \right\rceil$ , and `\lfloor` and `\rfloor` $\left\lfloor x \right\rfloor$ . `\middle` can be used to add additional dividers. There are also invisible parentheses, denoted by `.`: `\left.\frac12\right\rbrace` is $\left.\frac12\right\rbrace$ . <br>
If manual size adjustment are required: `\Biggl(\biggl(\Bigl(\bigl((x)\bigr)\Bigr)\biggr)\Biggr)` gives $\Biggl(\biggl(\Bigl(\bigl((x)\bigr)\Bigr)\biggr)\Biggr)$ .

- **Sums** and **integrals** `\sum` and `\int`; the subscript is the lower limit and the superscript is the upper limit, so for example `\sum_1^n` $\sum_1^n$ . Don't forget `{`…`}` if the limits are more than a single symbol. For example, `\sum_{i=0}^\infty i^2` is $\sum_{i=0}^\infty i^2$ . Similarly, `\prod` $\prod$ , `\int` $\int$ , `\bigcup` $\bigcup$ , `\bigcap` $\bigcap$, `\iint` $\iint$, `\iiint` $\iiint$, `\idotsint` $\idotsint$.

- **Fractions** There are three ways to make these. `\frac ab` applies to the next two groups, and produces $\frac ab$ ; for more complicated numerators and denominators use `{`…`}`: `\frac{a+1}{b+1}` is $\frac{a+1}{b+1}$ . If the numerator and denominator are complicated, you may prefer `\over`, which splits up the group that it is in: `{a+1\over b+1}` is ${a+1\over b+1}$ . Using `\cfrac{a}{b}` command is useful for continued fractions $\cfrac{a}{b}$.

- **Fonts**
  - Use `mathbb` or `Bbb` for "blackboard bold": $\mathbb{ABCDEFGHIJK}$ , $\mathbb{abcdefghijk}$ .
  - Use `mathbf` for boldface: $\mathbf{ABCDEFGHIJK}$,$\mathbf{abcdefghijk}$
    - For expression based characters, use `\boldsymbol` instead: $\boldsymbol \alpha$ .
  - Use `\mathit` for italics: $\mathit{ABCDEFGHIJK}$, $\mathit{abcdefghijk}$ .
  - Use `\pmb` for boldfaces italics: $\pmb{ABCDEFGHIJK}$, $\pmb{abcdefghijk}$ .
  - Use `\mathtt` for "typewriter" font: $\mathtt{ABCDEFGHIJK}$, $\mathtt{abcdefghijk}$ .
  - Use `\mathrm` for roman font: $\mathrm{ABCDEFGHIJK}$ , $\mathrm{abcdefghijk}$ .
  - Use `\mathsf` for sans-serif font: $\mathsf{ABCDEFGHIJK}$ , $\mathsf{abcdefghijk}$ .
  - Use `\mathcal` for "calligraphic" letters: $\mathcal{ABCDEFGHIJK}$ , $\mathcal{abcdefghijk}$ .
  - Use `\mathscr` for script letters: $\mathscr{ABCDEFGHIJK}$ , $\mathscr{abcdefghijk}$ .
  - Use `\mathfrak` for "Fraktur" (old German style) letters: $\mathfrak{ABCDEFGHIJK}$ , $\mathfrak{abcdefghijk}$ .

- **Radical signs / roots** Use `\sqrt`, which adjusts to the size of its argument: `\sqrt{x^3}` $\sqrt{x^3}$ ; `\sqrt[3]{\frac xy}` $\sqrt[3]{\frac xy}$ . For complicated expressions, consider using `{...}^{1/2}`instead.

- Some **special functions** such as "lim", "sin", "max", "ln", and so on are normally set in roman font instead of italic font. Use `\lim`, `\sin`, etc. to make these: `\sin x` $\sin x$, not `sin x` $sin x$. Use subscripts to attach a notation to `\lim`: `\lim_{x\to 0}` 

$$\lim_{x\to 0}$$

  Nonstandard function names can be set with `\operatorname{foo}(x)` $\operatorname{foo}(x)$ .

- There are a very large number of **special symbols and notations**, too many to list here; see [this shorter listing](https://pic.plover.com/MISC/symbols.pdf), or [this exhaustive listing](https://mirrors.tuna.tsinghua.edu.cn/CTAN/info/symbols/comprehensive/symbols-a4.pdf). Some of the most common include:
  - `\lt \gt \le \leq \leqq \leqslant \ge \geq \geqq \geqslant \neq` $\lt, \gt, \le, \leq, \leqq, \leqslant, \ge, \geq, \geqq, \geqslant, \neq$ . You can use `\not` to put a slash through almost anything: `\not\lt` $\not\lt$ but it often looks bad.
  - `\times \div \pm \mp` $\times, \div, \pm, \mp$ . `\cdot` is a centered dot: $x \cdot y$
  - `\cup \cap \setminus \subset \subseteq \subsetneq \supset \in \notin \emptyset \varnothing` $\cup, \cap, \setminus, \subset, \subseteq, \subsetneq, \supset, \in, \notin, \emptyset, \varnothing $
  - `{n+1 \choose 2k}` or `\binom{n+1}{2k}` $\binom{n+1}{2k}$
  - `\to \rightarrow \leftarrow \Rightarrow \Leftarrow \mapsto` $\to, \rightarrow, \leftarrow, \Rightarrow, \Leftarrow, \mapsto$
  - `\land \lor \lnot \forall \exists \top \bot \vdash \vDash` $\land, \lor, \lnot, \forall, \exists, \top, \bot, \vdash, \vDash$
  - `\star \ast \oplus \circ \bullet` $\star, \ast, \oplus, \circ, \bullet$
  - `\approx \sim \simeq \cong \equiv \prec \lhd \therefore` $\approx, \sim, \simeq, \cong, \equiv, \prec, \lhd, \therefore$
  - `\infty \aleph_0` $\infty \aleph_0$ , `\nabla \partial` $\nabla \partial$ , `\Im \Re` $\Im \Re$
  - For modular equivalence, use `\pmod` like this: `a\equiv b\pmod n` $a\equiv b\pmod n$ .
  - For the binary mod operator, use `\bmod` like this: `a\bmod 17$.
  - `\ldots` in the dots in $a_1, a_2, \ldots, a_n$ `\cdots` in the dots in $a_1 + a_2 + \cdots + a_n$
  - Script lowercase l is `\ell` $\ell$ .

  [Detexify](http://detexify.kirelabs.org/classify.html) lets you draw a symbol on a web page and then lists the $\TeX$ symbols that seem to resemble it. These are not guaranteed to work in MathJax but are a good place to start. To check that a command is supported, note that [MathJax.org](https://www.mathjax.org/) maintains a list of currently supported $\LaTeX$ [commands](http://docs.mathjax.org/en/latest/input/tex/macros/index.html), and one can also check Dr. Carol JVF Burns's page of [$\TeX$ Commands Available in MathJax](http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm).

- **Spaces** MathJax usually decides for itself how to space formulas, using a complex set of rules. Putting extra literal spaces into formulas will not change the amount of space MathJax puts in: `a␣b` and `a␣␣␣␣b` are both $ab$. To add more space, use `\,` for a thin space $a\,b$; `\;` for a wider space $a \; b$. `\quad` and `\qquad` are large spaces: $a \quad b$ , $a \qquad b$ .

  To set plain text, use `\text{…}`: $\lbrace x \in s \; \| \; x \text{ is extra large}\rbrace$ . You can nest `$…$` inside of `\text{…}`, for example to access spaces.

- **Accents and diacritical marks** Use `\hat` for a single symbol $\hat x$ , `\widehat` for a larger formula $\widehat{xy}$ . If you make it too wide, it will look silly. Similarly, there are `\bar` $\bar x$ and `\overline` $\overline{xyz}$ , and `\vec` $\vec x$  and `\overrightarrow` $\overrightarrow{xy}$ and `\overleftrightarrow` $\overleftrightarrow{xy}$ . For dots, as in $\frac{d}{dx}x\dot x = {\dot x}^2 + x\dot x$ , use `\dot` and `\ddot`

- Special characters used for MathJax interpreting can be escaped using the `\` character: `\\\$` $\\\$$ , `\{` $\lbrace$ , `\\_` $\\_$ , etc. If you want `\` itself, you should use `\backslash` (symbol) or `\setminus` (binary operation) for $\backslash$ , because `\\` is for a new line.

<p class="alert alert-info">
Tutorial ends here. And for more derail see <b>Contents</b> below.
</p>

# Contents
Alphabetical list of links to To MathJax Topics, by title:
- [Absolute values and norms]() • [Additional symbolic decorations](#additional-decorations) • [Aligning Equations](#aligned-equations)
- [Alternative Ways of Writing in LaTeX]() • [Annotations of reasoning]() • [Arbitrary operators]()
- [Arrays](#arrays) • [Big braces]() • [Colors](#colors)
- [Commutative diagrams](#commutative-diagrams) • [Continued fractions](#continued-fractions) • [Crossing things out](#crossing-things-out)
- [Definitions by cases (piecewise functions)](#definitions-by-cases-piecewise-functions) • [Degree symbol]() • [Display style]()
- [Equation numbering]() • [Fussy spacing issues](#fussy-spacing-issues) • [Highlighting expressions]()
- [Left and right arrows]() • [Limits]() • [Linear programming]()
- [Long division]() • [Math Programming]() • [Matrices](#matrix)
- [Markov Chains]() • [Mixing code and MathJax formatting on lines]() • [The `\newcommand` function]()
- [Numbering Equations]() • [Overlaying Symbols]() • [Packs of cards]()
- [Symbols](#symbols) • [System of equations](#system-of-equations) • [Tables]()
- [Tags and references]() • [Tensor indices]() • [Units]()
- [Vertical spacing]()

<h2 id="matrix">Matrix</h2>

-  Use `$$\begin{matrix}…\end{matrix}$$` In between the `\begin` and `\end`, put the matrix elements. End each matrix row with `\\`, and separate matrix elements with `&`. For example,
```latex
$$
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
$$
```
produces:

$$
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
$$

  MathJax will adjust the sizes of the rows and columns so that everything fits.

- To add brackets, either use `\left…\right`, or replace `matrix` with `pmatrix`
$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$
, `bmatrix`
$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$
, `Bmatrix`
$$
\begin{Bmatrix}
1 & 2 \\
3 & 4
\end{Bmatrix}
$$
, `vmatrix`
$$
\begin{vmatrix}
1 & 2 \\
3 & 4
\end{vmatrix}
$$
, `Vmatrix`
$$
\begin{Vmatrix}
1 & 2 \\
3 & 4
\end{Vmatrix}
$$.
- Use `\cdots` $\cdots$ `\ddots` $\ddots$ `\vdots` $\vdots$ when you want to omit some of the entries:

$$
\begin{pmatrix}
1 & a_1 & a_1^2 & \cdots & a_1^n \\
1 & a_2 & a_2^2 & \cdots & a_2^n \\
\vdots & \vdots & \vdots & \ddots &  \vdots  \\
1 & a_m & a_m^2 & \cdots & a_m^n
\end{pmatrix}
$$

- For horizontally "augmented" matrices, put parentheses or brackets around a suitably-formatted table; see [Arrays](#arrays) below for details. Here is an example:

$$
\left[
\begin{array}{cc|c}
  1&2&3\\
  4&5&6
\end{array}
\right]
$$

is produced by:
```latex
$$ \left[
\begin{array}{cc|c}
  1&2&3\\
  4&5&6
\end{array}
\right] $$
```
  The `cc|c` is the crucial part here; it says that there are three centered columns with a vertical bar between the second and third.

- For vertically "augmented" matrices, use `\hline`. For example

$$
\begin{pmatrix}
    a & b\\
    c & d\\
  \hline
    1 & 0\\
    0 & 1
\end{pmatrix}
$$

is produced by:
```latex
$$
  \begin{pmatrix}
    a & b\\
    c & d\\
  \hline
    1 & 0\\
    0 & 1
  \end{pmatrix}
$$
```
- For small inline matrices use `\bigl(\begin{smallmatrix} ... \end{smallmatrix}\bigr)`, e.g. $$\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)$$ is produced by:
```latex
$$\bigl( \begin{smallmatrix} a & b \\ c & d \end{smallmatrix} \bigr)$$
```

<h2 id="symbols">Symbols</h2>

In general, you have to search in long tables about a specific symbol you're looking for, things like $\Psi, \delta, \zeta, \geq, \subseteq$ ... And it turns out that this operation can be frustrating and time consuming, which can cause the buddy to abandon writing the complete $\LaTeX$ sentence in his answer, or in some cases, the complete answer itself.

That's why the tool that I will present you in this post was conceived. Basically, it is a $\LaTeX$ handwritten symbol recognition. Example in image:

![Detexify](/jekyll/posts/Detexify.png)

  Here is the website: [Detexify](http://detexify.kirelabs.org/classify.html) No more frustration.

<h2 id="aligned-equations">Aligned equations</h2>
Often people want a series of equations where the equals signs are aligned. To get this, use `\begin{align}…\end{align}`. Each line should end with `\\`, and should contain an ampersand at the point to align at, typically immediately before the equals sign.

For example:

$$
\begin{align}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
 & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
 & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
 & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
 & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align}
$$

is produced by
```latex
\begin{align}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
 & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
 & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
 & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
 & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align}
```
The usual `$$` marks that delimit the display may be omitted here.

<h2 id="definitions-by-cases-piecewise-functions">Definitions by cases (piecewise functions)</h2>
Use `\begin{cases}…\end{cases}`. End each case with a `\\`, and use `&` before parts that should be aligned.

For example, you get this:

$$
f(n) =
\begin{cases}
n/2,  & \text{if $n$ is even} \\
3n+1, & \text{if $n$ is odd}
\end{cases}
$$

by writing this:
```latex
f(n) =
\begin{cases}
n/2,  & \text{if $n$ is even} \\
3n+1, & \text{if $n$ is odd}
\end{cases}
```
The brace can be moved to the right:

$$
\left.
\begin{array}{l}
\text{if $n$ is even:}&n/2\\
\text{if $n$ is odd:}&3n+1
\end{array}
\right\}
=f(n)
$$

by writing this:
```latex
\left.
\begin{array}{l}
\text{if $n$ is even:}&n/2\\
\text{if $n$ is odd:}&3n+1
\end{array}
\right\}
=f(n)
```

To get a larger vertical space between cases we can use `\\[2ex]` instead of `\\`. For example, you get this:

$$
f(n) =
\begin{cases}
\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
3n+1, & \text{if $n$ is odd}
\end{cases}
$$

by writing this:
```latex
f(n) =
\begin{cases}
\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
3n+1, & \text{if $n$ is odd}
\end{cases}
```
(An ‘ex’ is a length equal to the height of the letter `x`; `2ex` here means the space should be two exes high.)

<h2 id="arrays">Arrays</h2>

It is often easier to read tables formatted in MathJax rather than plain text or a fixed width font. Arrays and tables are created with the `array` environment. Just after `\begin{array}`the format of each column should be listed, use `c` for a center aligned column, `r` for right aligned, `l` for left aligned and a `|` for a vertical line. Just as with matrices, cells are separated with `&` and rows are broken using `\\`. A horizontal line spanning the array can be placed before the current line with `\hline`.

For example,

$$
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i
\end{array}
$$

is produced by:
```latex
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i
\end{array}
```
Arrays can be nested to make an array of tables.

For example,


$$
\begin{array}{c}
\begin{array}{cc}
\begin{array}{c|cccc}
\text{min} & 0 & 1 & 2 & 3\\
\hline
0 & 0 & 0 & 0 & 0\\
1 & 0 & 1 & 1 & 1\\
2 & 0 & 1 & 2 & 2\\
3 & 0 & 1 & 2 & 3
\end{array}
&
\begin{array}{c|cccc}
\text{max}&0&1&2&3\\
\hline
0 & 0 & 1 & 2 & 3\\
1 & 1 & 1 & 2 & 3\\
2 & 2 & 2 & 2 & 3\\
3 & 3 & 3 & 3 & 3
\end{array}
\end{array}
\\
\begin{array}{c|cccc}
\Delta&0&1&2&3\\
\hline
0 & 0 & 1 & 2 & 3\\
1 & 1 & 0 & 1 & 2\\
2 & 2 & 1 & 0 & 1\\
3 & 3 & 2 & 1 & 0
\end{array}
\end{array}
$$


As the source for the preceding array is long, please right-click on one of the tables and choose $\mathtt{Show \; Math \; As } ▸ \mathtt{Tex \; Commands}$ .

<h2 id="fussy-spacing-issues">Fussy spacing issues</h2>

These are issues that won't affect the correctness of formulas, but might make them look significantly better or worse. Beginners should feel free to ignore this advice; someone else will correct it for them, or more likely nobody will care.

Don't use `\frac` in exponents or limits of integrals; it looks bad and can be confusing, which is why it is rarely done in professional mathematical typesetting. Write the fraction horizontally, with a slash:

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
e^{i\frac{\pi}2} \quad e^{\frac{i\pi}2}& e^{i\pi/2} \\
\int_{-\frac\pi2}^\frac\pi2 \sin x\,dx & \int_{-\pi/2}^{\pi/2}\sin x\,dx \\
\end{array}
$$

The `|` symbol has the wrong spacing when it is used as a divider, for example in set comprehensions. Use `\mid` instead:

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\{x|x^2\in\Bbb Z\} & \{x\mid x^2\in\Bbb Z\} \\
\end{array}
$$

When using stretchable delimiters (i.e. with `\left` and `\right`), it may be preferable to use `\,\middle|\,`. This produces a stretchable vertical bar with a little bit of space around it. Another alternative is to use a colon instead.

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\left\{\dfrac{m}{n} \mid m,n\in\Bbb Z\right\} & \left\{\dfrac{m}{n} \,\middle|\, m,n\in\Bbb Z\right\} \\
\end{array}
$$

For double and triple integrals, don't use `\int\int` or `\int\int\int`. Instead use the special forms `\iint` and `\iiint`:

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\int\int_S f(x)\,dy\,dx & \iint_S f(x)\,dy\,dx \\
\int\int\int_V f(x)\,dz\,dy\,dx & \iiint_V f(x)\,dz\,dy\,dx
\end{array}
$$

Use `\,` to insert a thin space before differentials; without this $\TeX$ will mash them together:

$$
\begin{array}{cc}
\mathrm{Bad} & \mathrm{Better} \\
\hline \\
\iiint_V f(x)dz dy dx & \iiint_V f(x)\,dz\,dy\,dx
\end{array}
$$

<h2 id="crossing-things-out">Crossing things out</h2>

Use `\require{cancel}` in the first formula in your post that requires cancelling; you need it only once per page. Then use:

$$
\require{cancel}\begin{array}{rl}
\verb|y+\cancel{x}| & y+\cancel{x}\\
\verb|\cancel{y+x}| & \cancel{y+x}\\
\verb|y+\bcancel{x}| & y+\bcancel{x}\\
\verb|y+\xcancel{x}| & y+\xcancel{x}\\
\verb|y+\cancelto{0}{x}| & y+\cancelto{0}{x}\\
\verb+\frac{1\cancel9}{\cancel95} = \frac15+& \frac{1\cancel9}{\cancel95} = \frac15 \\
\end{array}
$$

Use `\require{enclose}` for the following:

$$
\require{enclose}\begin{array}{rl}
\verb|\enclose{horizontalstrike}{x+y}| & \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{\frac xy}| & \enclose{verticalstrike}{\frac xy}\\
\verb|\enclose{updiagonalstrike}{x+y}| & \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| & \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{horizontalstrike,updiagonalstrike}{x+y}| & \enclose{horizontalstrike,updiagonalstrike}{x+y}\\
\end{array}
$$

`\enclose` can also produce enclosing boxes, circles, and other notations; see [MathML `menclose` documentation](https://developer.mozilla.org/en-US/docs/Web/MathML/Element/menclose) for a complete list.

<h2 id="system-of-equations">System of equations</h2>

- Use `\begin{array}…\end{array}` and `\left\{…\right.` For example, you get this:

$$
\left\{ 
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\ 
a_2x+b_2y+c_2z=d_2 \\ 
a_3x+b_3y+c_3z=d_3
\end{array}
\right. 
$$

by writing this:
```latex
\left\{ 
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\ 
a_2x+b_2y+c_2z=d_2 \\ 
a_3x+b_3y+c_3z=d_3
\end{array}
\right. 
```

- To align the `=` signs use `\begin{aligned}...\end{aligned}` and `\left\{…\right.` (see asmeurer's comment)

$$
\left\{
\begin{aligned} 
a_1x+b_1y+c_1z &=d_1+e_1 \\ 
a_2x+b_2y&=d_2 \\ 
a_3x+b_3y+c_3z &=d_3 
\end{aligned} 
\right.
$$

whose code is
```latex
\left\{
\begin{aligned} 
a_1x+b_1y+c_1z &=d_1+e_1 \\ 
a_2x+b_2y&=d_2 \\ 
a_3x+b_3y+c_3z &=d_3 
\end{aligned} 
\right.
```

- To align the `=` signs and the terms as in

$$
\left\{
\begin{array}{ll}
a_1x+b_1y+c_1z &=d_1+e_1 \\ 
a_2x+b_2y &=d_2 \\ 
a_3x+b_3y+c_3z &=d_3 
\end{array} 
\right.
$$

use `array` with `l` (for "align **left**"; there are also `c` and `r`) parameters

```latex
\left\{
\begin{array}{ll}
a_1x+b_1y+c_1z &=d_1+e_1 \\ 
a_2x+b_2y &=d_2 \\ 
a_3x+b_3y+c_3z &=d_3 
\end{array} 
\right.
```

- Vertical space between equations. As explained in [Definitions by cases](#definitions-by-cases-piecewise-functions) *to get a larger vertical space between* equations we can use `\\[2ex]` instead of `\\`. The system

$$
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\[2ex] 
a_2x+b_2y+c_2z=d_2 \\[2ex] 
a_3x+b_3y+c_3z=d_3
\end{cases}
$$

is generated by the following code
```latex
\begin{cases}
a_1x+b_1y+c_1z=d_1 \\[2ex] 
a_2x+b_2y+c_2z=d_2 \\[2ex] 
a_3x+b_3y+c_3z=d_3
\end{cases}
```
in comparison with

$$
\begin{cases}
a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
$$

whose code is:
```latex
\begin{cases}
a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
```

- In response to `elect's comment`. The following code

```latex
\left\{ 
\begin{array}{l}
0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex] 
0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} 
\end{array}
\right.
```
produces

$$
\left\{ \begin{array}{l}
0 = c_x-a_{x0}-d_{x0}\dfrac{(c_x-a_{x0})\cdot d_{x0}}{\|d_{x0}\|^2} + c_x-a_{x1}-d_{x1}\dfrac{(c_x-a_{x1})\cdot d_{x1}}{\|d_{x1}\|^2} \\[2ex] 
0 = c_y-a_{y0}-d_{y0}\dfrac{(c_y-a_{y0})\cdot d_{y0}}{\|d_{y0}\|^2} + c_y-a_{y1}-d_{y1}\dfrac{(c_y-a_{y1})\cdot d_{y1}}{\|d_{y1}\|^2} \end{array} \right. 
$$

<h2 id="colors">Colors</h2>

Named colors are browser-dependent; if a browser doesn't know a particular color name, it may render the text as black. The following colors are standard in HTML4 and CSS2 and should be interpreted the same by most browsers:

$$
\begin{array}{|rc|}
\hline
\verb+\color{black}{text}+ & \color{black}{text} \\
\verb+\color{gray}{text}+ & \color{gray}{text} \\
\verb+\color{silver}{text}+ & \color{silver}{text} \\
\verb+\color{white}{text}+ & \color{white}{text} \\
\hline
\verb+\color{maroon}{text}+ & \color{maroon}{text} \\
\verb+\color{red}{text}+ & \color{red}{text} \\
\verb+\color{yellow}{text}+ & \color{yellow}{text} \\
\verb+\color{lime}{text}+ & \color{lime}{text} \\
\verb+\color{olive}{text}+ & \color{olive}{text} \\
\verb+\color{green}{text}+ & \color{green}{text} \\
\verb+\color{teal}{text}+ & \color{teal}{text} \\
\verb+\color{aqua}{text}+ & \color{aqua}{text} \\
\verb+\color{blue}{text}+ & \color{blue}{text} \\
\verb+\color{navy}{text}+ & \color{navy}{text} \\
\verb+\color{purple}{text}+ & \color{purple}{text} \\ 
\verb+\color{fuchsia}{text}+ & \color{magenta}{text} \\
\hline
\end{array}
$$

[HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) and [CSS 3](https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/) define [an additional 124 color names that will be supported on many browsers](https://www.w3.org/TR/css-color-3/#svg-color).

Math Stack Exchange's default style uses a light-colored page background, so avoid using light colors for text. Stick to darker colors like maroon, green, blue, and purple, and remember also that 7–10% of men are color-blind and have difficulty distinguishing red and green.

The color may also have the form #rgb where 𝑟,𝑔,𝑏 are in the range or `0`–`9`, `a`–`f` and represent the intensity of red, green, and blue on a scale of `0`–`15`, with `a`=10, `b`=11, … `f`=15. For example:

$$
\begin{array}{|rrrrrrrr|}\hline
\verb+#000+ & \color{#000}{text} & & &
\verb+#00F+ & \color{#00F}{text} & & \\
& & \verb+#0F0+ & \color{#0F0}{text} &
& & \verb+#0FF+ & \color{#0FF}{text}\\
\verb+#F00+ & \color{#F00}{text} & & &
\verb+#F0F+ & \color{#F0F}{text} & & \\
& & \verb+#FF0+ & \color{#FF0}{text} &
& & \verb+#FFF+ & \color{#FFF}{text}\\
\hline
\end{array}
$$

$$
\begin{array}{|rrrrrrrr|}
\hline
\verb+#000+ & \color{#000}{text} & \verb+#005+ & \color{#005}{text} & \verb+#00A+ & \color{#00A}{text} & \verb+#00F+ & \color{#00F}{text}  \\
\verb+#500+ & \color{#500}{text} & \verb+#505+ & \color{#505}{text} & \verb+#50A+ & \color{#50A}{text} & \verb+#50F+ & \color{#50F}{text}  \\
\verb+#A00+ & \color{#A00}{text} & \verb+#A05+ & \color{#A05}{text} & \verb+#A0A+ & \color{#A0A}{text} & \verb+#A0F+ & \color{#A0F}{text}  \\
\verb+#F00+ & \color{#F00}{text} & \verb+#F05+ & \color{#F05}{text} & \verb+#F0A+ & \color{#F0A}{text} & \verb+#F0F+ & \color{#F0F}{text}  \\
\hline
\verb+#080+ & \color{#080}{text} & \verb+#085+ & \color{#085}{text} & \verb+#08A+ & \color{#08A}{text} & \verb+#08F+ & \color{#08F}{text}  \\
\verb+#580+ & \color{#580}{text} & \verb+#585+ & \color{#585}{text} & \verb+#58A+ & \color{#58A}{text} & \verb+#58F+ & \color{#58F}{text}  \\
\verb+#A80+ & \color{#A80}{text} & \verb+#A85+ & \color{#A85}{text} & \verb+#A8A+ & \color{#A8A}{text} & \verb+#A8F+ & \color{#A8F}{text}  \\
\verb+#F80+ & \color{#F80}{text} & \verb+#F85+ & \color{#F85}{text} & \verb+#F8A+ & \color{#F8A}{text} & \verb+#F8F+ & \color{#F8F}{text}  \\
\hline
\verb+#0F0+ & \color{#0F0}{text} & \verb+#0F5+ & \color{#0F5}{text} & \verb+#0FA+ & \color{#0FA}{text} & \verb+#0FF+ & \color{#0FF}{text}  \\
\verb+#5F0+ & \color{#5F0}{text} & \verb+#5F5+ & \color{#5F5}{text} & \verb+#5FA+ & \color{#5FA}{text} & \verb+#5FF+ & \color{#5FF}{text}  \\
\verb+#AF0+ & \color{#AF0}{text} & \verb+#AF5+ & \color{#AF5}{text} & \verb+#AFA+ & \color{#AFA}{text} & \verb+#AFF+ & \color{#AFF}{text}  \\
\verb+#FF0+ & \color{#FF0}{text} & \verb+#FF5+ & \color{#FF5}{text} & \verb+#FFA+ & \color{#FFA}{text} & \verb+#FFF+ & \color{#FFF}{text}  \\
\hline
\end{array}
$$

You can have a look [here for quick reference on colors in HTML](https://www.runoob.com/html/html-colors.html).

<h2 id="additional-decorations">Additional symbolic decorations</h2>

<p class="alert alert-info">
To see <b>Tex Commands</b> right click on the Math
</p>

`\overline`: $\overline{A} \; \overline{AA} \; \overline{AAA}$

`\underline`: $\underline{B} \; \underline{BB} \; \underline{BBB}$

`\widetilde`: $\widetilde{C} \; \widetilde{CC} \; \widetilde{CCC}$

`\widehat`: $\widehat{D} \; \widehat{DD} \; \widehat{DDD}$

`\fbox`: $\fbox{E} \; \fbox{EE} \; \fbox{EEE}$

`\underleftarrow`: $\underleftarrow{F} \; \underleftarrow{FF} \; \underleftarrow{FFF} \qquad$ variant: `\xleftarrow{}`: $\xleftarrow{abc}$ 

`\underrightarrow`: $\underrightarrow{G} \; \underrightarrow{GG} \; \underrightarrow{GGG} \qquad$ variant: `\xleftarrow{}`: $\xrightarrow{abc}$ 

`\underleftrightarrow`: $\underleftrightarrow{H} \; \underleftrightarrow{HH} \; \underleftrightarrow{HHH}$

`\overrightarrow`: $\overrightarrow{AB} \; \overrightarrow{ABAB} \; \overrightarrow{ABABAB}$

`\overbrace`: $\overbrace{(n - 2) + \overbrace{(n - 1) + n + (n + 1)} + (n + 2)}$

`\underbrace`: $(n \underbrace{- 2) + (n \underbrace{- 1) + n + (n +} 1) + (n +} 2)$

`\overbrace` and `\underbrace` accept a superscript or a subscript, respectively, to annotate the brace. For example, `\underbrace{a\cdot a\cdots a}_{b\text{ times}}` is

$$
\underbrace{a\cdot a\cdots a}_{b\text{ times}}
$$

Note: `\varliminf`: $\varliminf$ and `\varlimsup`: $\varlimsup$ have special symbol of their own.

### Single character accents

`\check`: $\check I$

`\acute`: $\acute J$ 

`\grave`: $\grave K$ 

`\vec`: $\vec{u} \; \vec{AB}$ (c.f. `\overrightarrow` above)

`\bar`: $\bar z$

`\hat`: $\hat x$ 

`\tilde`: $\tilde x$ 

`\dot \ddot \dddot`: $\dot x , \ddot x, \dddot x$

`\mathring`: $\mathring A$

### General stacking

If you cannot find your symbol remember that you can stack various symbols using

`\overset{above}{level}`: $\overset{@}{ABC}\ \overset{x^2}{\longmapsto}\ \overset{\bullet\circ\circ\bullet}{T}$

`\underset{below}{level}`: $\underset{@}{ABC}\ \underset{x^2}{\longmapsto}\ \underset{\bullet\circ\circ\bullet}{T}$

You can use these together too. You can type $X\overset{a}{\underset{b}{\to}}Y$ with `X\overset{a}{\underset{b}{\to}}Y`.

### Arc over points

`\overset{ \huge\frown}{PQ}`: $\overset{ \huge\frown}{PQ}$ denotes the arc over points $P$ and $Q$ .

<h2 id="commutative-diagrams">Commutative diagrams</h2>

```latex
\begin{CD}
A @>a>> B\\
@V b V V= @VV c V\\
C @>>d> D
\end{CD}
```
get this diagram: 

$$
\begin{CD}
A @>a>> B\\
@V b V V= @VV c V\\
C @>>d> D
\end{CD}
$$

`@>>>` is used for arrow right

`@<<<` is used for arrow left

`@VVV` is used for arrow down

`@AAA` is used for arrow up

`@=` is used for horizontal double line

`@|` is used for vertical double line

`@.` is used for no arrow

Another example:

```latex
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @. @AAA @| \\
    D @= E @<<< F
\end{CD}
```

$$
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @. @AAA @| \\
    D @= E @<<< F
\end{CD}
$$

Long labels increase the length of the arrow and in this version also automatically increase corresponding arrows.

```latex
\begin{CD}
  RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O
\end{CD}
```

$$
\begin{CD}
  \text{RCOHR'SO$_3$Na} @>{\text{Hydrolysis, $\Delta,$ Dil. HCl}}>> \text{(RCOR')+NaCl+SO$_2$+ H$_2$O} 
\end{CD}
$$


<p class="alert alert-primary">
obviously this diagram is not working correctly on my website, may it will work for other sites.
</p>

<h2 id="continued-fractions">Continued fractions</h2>



<https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference>