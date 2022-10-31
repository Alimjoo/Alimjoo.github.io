---
title: MathJax basic tutorial and quick reference(MathJax教程)
author:
  name: Piyazon
  link: https://piyazon.top
date: 2021-12-06 18:10:00 +0800
categories: [Blogging, Tutorial]
tags: [latex, mathjax]
math: true
pin: true
image:
  src: /jekyll/posts/mj-logo.svg
  alt: MathJax-logo
---

<p class="alert alert-success">In case you want to practice, I made a website, feel free to check it out. <a href="https://piyazon.top/latex-practice-tool/" target="_blank">Latex Practice
<img src="https://gitlab.com/Alimjoo/cdn_img/-/raw/main/latex/latex-practice.png">
</a></p>

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

- **Accents and diacritical marks** Use `\hat` for a single symbol $\hat x$ , `\widehat` for a larger formula $\widehat{xy}$ . If you make it too wide, it will look silly. Similarly, there are `\bar` $\bar x$ and `\overline` $\overline{xyz}$ , and `\vec` $\vec x$ and `\overrightarrow` $\overrightarrow{xy}$ and `\overleftrightarrow` $\overleftrightarrow{xy}$ . For dots, as in $\frac{d}{dx}x\dot x = {\dot x}^2 + x\dot x$ , use `\dot` and `\ddot`

- Special characters used for MathJax interpreting can be escaped using the `\` character: `\\\$` $\\\$$ , `\{` $\lbrace$ , `\\_` $\\_$ , etc. If you want `\` itself, you should use `\backslash` (symbol) or `\setminus` (binary operation) for $\backslash$ , because `\\` is for a new line.

<p class="alert alert-info">
Tutorial ends here. And for more derail see <b>Contents</b> below.
</p>

# Contents

Alphabetical list of links to To MathJax Topics, by title:

- [Absolute values and norms](#absolute-values-and-norms) • [Additional symbolic decorations](#additional-decorations) • [Aligning Equations](#aligned-equations)
- [Alternative Ways of Writing in LaTeX](#alternative-ways-of-writing-in-latex) • [Annotations of reasoning](#annotations-of-reasoning) • [Arbitrary operators](#arbitrary-operators)
- [Arrays](#arrays) • [Big braces](#big-braces) • [Colors](#colors)
- [Commutative diagrams](#commutative-diagrams) • [Continued fractions](#continued-fractions) • [Crossing things out](#crossing-things-out)
- [Definitions by cases (piecewise functions)](#definitions-by-cases-piecewise-functions) • [Degree symbol](#degree-symbol) • [Display style](#displaystyle-and-textstyle)
- [Equation numbering](#equation-numbering) • [Fussy spacing issues](#fussy-spacing-issues) • [Highlighting expressions](#highlighting-equation)
- [Left and right arrows](#l-a-r-i-a) • [Limits](#limits) • [Linear programming](#linear-programming)
- [Long division](#long-division) • [Math Programming](#linear-programming) • [Matrices](#matrix)
- [Markov Chains](#markov-chains) • [Mixing code and MathJax formatting on lines](#mixing-code-and-mathJax-formatting-on-lines) • [The `\newcommand` function](#using-newcommand)
- [Numbering Equations](#tags-and-references) • [Overlaying Symbols](#overlaying-symbols) • [Packs of cards](#pack-of-cards)
- [Symbols](#symbols) • [System of equations](#system-of-equations) • [Tables](#tables)
- [Tags and References](#tags-and-references) • [Tensor indices](#tensor-indices) • [Units](#units)
- [Vertical spacing](#vertical-spacing)

<h2 id="matrix">Matrix</h2>

- Use `$$\begin{matrix}…\end{matrix}$$` In between the `\begin` and `\end`, put the matrix elements. End each matrix row with `\\`, and separate matrix elements with `&`. For example,

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
  $$
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

- Vertical space between equations. As explained in [Definitions by cases](#definitions-by-cases-piecewise-functions) _to get a larger vertical space between_ equations we can use `\\[2ex]` instead of `\\`. The system

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

_AMScd_ diagrams must start with a "require":

```latex
\require{AMScd}
\begin{CD}
A @>a>> B\\
@V b V V= @VV c V\\
C @>>d> D
\end{CD}
```

get this diagram:

$$
\require{AMScd}
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
\require{AMScd}
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @. @AAA @| \\
    D @= E @<<< F
\end{CD}
```

$$
\require{AMScd}
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @. @AAA @| \\
    D @= E @<<< F
\end{CD}
$$

Long labels increase the length of the arrow and in this version also automatically increase corresponding arrows.

```latex
\require{AMScd}
\begin{CD}
  RCOHR'SO_3Na @>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>> (RCOR')+NaCl+SO_2+ H_2O
\end{CD}
```

$$
\require{AMScd}
\begin{CD}
  \text{RCOHR'SO$_3$Na} @>{\text{Hydrolysis, $\Delta,$ Dil. HCl}}>> \text{(RCOR')+NaCl+SO$_2$+ H$_2$O}
\end{CD}
$$

<h2 id="continued-fractions">Continued fractions</h2>

To make a continued fraction, use `\cfrac`, which works just like `\frac` but typesets the results differently:

$$
x = a_0 + \cfrac{1^2}{a_1
          + \cfrac{2^2}{a_2
          + \cfrac{3^2}{a_3 + \cfrac{4^4}{a_4 + \cdots}}}}
$$

Don't use regular `\frac` or `\over`, or it will look awful:

$$
x = a_0 + \frac{1^2}{a_1
          + \frac{2^2}{a_2
          + \frac{3^2}{a_3 + \frac{4^4}{a_4 + \cdots}}}}
$$

You can of course use `\frac` for the compact notation:

$$
x = a_0 + \frac{1^2}{a_1+}
          \frac{2^2}{a_2+}
          \frac{3^2}{a_3 +} \frac{4^4}{a_4 +} \cdots
$$

Continued fractions are too big to put inline. Display them with `$$…$$` or use a notation like $[a_0; a_1, a_2, a_3, \ldots]$

<h2 id="using-newcommand">Using <code class="language-plaintext highlighter-rouge" style="font-size:1.5rem;">\newcommand</code>
</h2>

I would like to remark that it is possible to define $\LaTeX$ commands as you do in your $\TeX$ files. I felt so happy when I first discovered it! It's enough to insert something like

```tex
$ \newcommand{\SES}[3]{ 0 \to #1 \to #2 \to #3 \to 0 } $
```

at the top of your post (remember the dollars!). Then you can just use your commands as you are used to do: in my example typing `$$ \SES{A}{B}{C} $$` will produce the following:
$ \newcommand{\SES}[3]{ 0 \to #1 \to #2 \to #3 \to 0 } $

$$
\SES{A}{B}{C}
$$

It's also possible to use plain `\def`:

```tex
\def\ses#1#2#3{0 \to #1 \to #2 \to #3 \to 0}
```

and then `$\ses{A}{B}{C}$` will produce the same output.

<h2 id="tags-and-references">Tags & References</h2>

For longer calculations (or referring to other post's results) it is convenient to use the tagging/labelling/referencing system. To tag an equation use `\tag{yourtag}`, and if you want to refer to that tag later on, add `\label{somelabel}` right after the `\tag`. It is not necessary that yourtag and somelabel are the same, but it usually is more convenient to do so:

```tex
$$ a := x^2-y^3 \tag{*}\label{*} $$
```

$$ a := x^2-y^3 \tag{*}\label{*} $$

In order to refer to an equation, just use `\eqref{somelabel}`
```tex
$$ a+y^3 \stackrel{\eqref{*}}= x^2 $$
```

$$ a+y^3 \stackrel{\eqref{*}}= x^2 $$

or `\ref{somelabel}`

> Equations are usually referred to as `$\eqref{*}$`, but you can also use `$\ref{*}$`.

Equations are usually referred to as $\eqref{\*}$, but you can also use $\ref{\*}$.



<h2 id="big-braces">Big braces</h2>

Use `\left` and `\right` to make braces - (round), [square] and {curly} - scale up to be the size of their arguments. Thus
```tex
$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$
```
renders as

$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$

Note that curly braces need to be escaped as `\{ \}`.

If you start a big brace with `\left` and then need to match that to a `\right` brace that's on a different line, use the forms `\right`. and `\left`. to make "shadow" braces. Thus,

```tex
$$
\begin{aligned}
a=&\left(1+2+3+  \cdots \right. \\
& \cdots+ \left. \infty-2+\infty-1+\infty\right)
\end{aligned}
$$
```

renders as

$$
\begin{aligned}
a=&\left(1+2+3+  \cdots \right. \\
& \cdots+ \left. \infty-2+\infty-1+\infty\right)
\end{aligned}
$$

There is also a `\middle` construct which is useful when one has a mid-expression brace which must also scale up:

```tex
$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$
```

refers as

$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$

Note that constructs like `\left\langle`, `\left|` and `\left\|` are also possible.

<h2 id="limits">Limits</h2>

To make a limit (like $\lim \limits_{x \to 1} \frac{x^2-1}{x-1}$), use this syntax:

First, start off with `$\lim`. This renders as lim. The backslash is there to prevent things like $lim$, where the letters are slanted.

Second, add `\limits_{x \to 1}` inside. The code now looks like `$\lim \limits_{x \to 1}$`, and renders as $\lim \limits_{x \to 1}$. The `\to` inside makes the right arrow, rendered as $\to$. The _ makes the $x \to 1$ go underneath the lim. Finally, the pair of curly braces `{ }` makes sure that $x \to 1$ is treated as a whole object, and not two separate things.

Lastly, add the function you want to apply the limit to. To make the limit mentioned above, $\lim \limits_{x \to 1} \frac{x^2-1}{x-1}$, simply use `$\lim\limits_{x \to 1} \frac{x^2-1}{x-1}$`.

And that is how you make a limit using MathJax.

<h2 id="arbitrary-operators">Arbitrary operators</h2>

If an operator is not available as a built-in command, use `\operatorname{…}`. So for things like

$$
\operatorname{arsinh}(x)
$$

write `\operatorname{arsinh}(x)` since `\arsinh(x)` will give an error and `arsinh(x)` has wrong font and spacing: $arsinh(x)$.

For operators which need limits above and below the operator, use `\operatorname*{…}`, as in

$$
\operatorname*{Res}_{z=1}\left(\frac1{z^2-z}\right)=1
$$

<h2 id="highlighting-equation">Highlighting equation</h2>

To highlight an equation, `\bbox` can be used. E.g,
```tex
$$ \bbox[yellow]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$
```

produces

$$ \bbox[yellow]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$

By default, the bounding box is "tight", so it doesn't extend beyond the characters used in the formula. You can add a little space around the equation by adding a measurement after the color. E.g.,

```tex
$$ \bbox[yellow,5px]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$
```

produces

$$ \bbox[yellow,5px]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$

To add a border, use

```tex
$$ \bbox[5px,border:2px solid red]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (2) 
}
$$
```

produces

$$ \bbox[5px,border:2px solid red]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (2) 
}
$$

You can do both border and background, as well:

```tex
$$ \bbox[yellow,5px,border:2px solid red]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$
```

produces

$$ \bbox[yellow,5px,border:2px solid red]
{
e^x=\lim_{n\to\infty} \left( 1+\frac{x}{n} \right)^n
\qquad (1)
}
$$

<h2 id="absolute-values-and-norms">Absolute values and norms</h2>

The absolute value of some expression can be denoted as `\lvert x\rvert` or, more generally, as `\left\lvert … \right\rvert`. It renders as $\lvert x\rvert$.

The norm of a vector (or similar) can be denoted as `\lVert v\rVert` or, more generally, as `\left\lVert … \right\rVert`. It renders as $\lVert v\rVert$. (You may also write `\left\|…\right\|` instead.)

In both cases, the rendering is better than what you'd get from `|x|` or `||v||`, which render with bars that don't descend low enough and sub-optimal spacing.

And here is the same formula rendered by your browser:

$$|x|, ||v|| \quad\longrightarrow\quad \lvert x\rvert, \lVert v\rVert$$

It was typeset as
```tex
$$|x|, ||v|| \quad\longrightarrow\quad \lvert x\rvert, \lVert v\rVert$$
```

<h2 id="annotations-of-reasoning">Giving reasons on each line of a sequence of equations (Annotations of reasoning)</h2>

To produce this:

$$
\begin{align}
   v + w & = 0  &&\text{Given} \tag 1\\
   -w & = -w + 0 && \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) && \text{equations $(1)$ and $(2)$}
\end{align}
$$

write this :
```tex
\begin{align}
   v + w & = 0  &&\text{Given} \tag 1\\
   -w & = -w + 0 && \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) && \text{equations $(1)$ and $(2)$}
\end{align}
```

<h2 id="pack-of-cards">Pack of cards</h2>

If you are asking (or answering) a combinatorics question involving packs of cards you can make it look more elegant by using `\spadesuit`, `\heartsuit`, `\diamondsuit`, `\clubsuit` in math mode:

$$
\spadesuit\quad\heartsuit\quad\diamondsuit\quad\clubsuit
$$

Or if you're really fussy:
`\color{red}{\heartsuit}` and `\color{red}{\diamondsuit}`

$$
\color{red}{\heartsuit}\quad\color{red}{\diamondsuit}
$$

You can also enter the standard Unicode characters (`U+2660 BLACK SPADE SUIT` etc.) literally, or copy them from here:

$$
♠\quad♡\quad♢\quad♣\\
♤\quad♥\quad♦\quad♧
$$

<h2 id="l-a-r-i-a">Left and Right Implication Arrows</h2>

Another way to display the arrows for right and left implication instead of using

`$\Rightarrow$`, `$\Leftarrow$` and `$\Leftrightarrow$`

which produces $\Rightarrow$ , $\Leftarrow$ and $\Leftrightarrow$ respectively, you can use
`$\implies$` for $\implies$, `$\impliedby$` for $\impliedby$  and `$\iff$` for $\iff$.

The latter of which produces longer arrows which may be more desirable to some.

`\implies` ($\implies$) is a marginally preferable alternative to `\Rightarrow` ($\Rightarrow$) for implication.

There's also `\iff` $\iff$ and `\impliedby` $\impliedby$.

`\to` ($\to$) is preferable to `\rightarrow` or `\longrightarrow` for things like $f:A \to B$. The reverse is `\gets` ($\gets$).

<h2 id="degree-symbol">Degree symbol</h2>

Standard Mathjax does not yet support a dedicated degree symbol, so here are some of the ways to try and emulate one :

$$
\begin{array} \\
\text{45^\text{o}} & \text{renders as} & 45^\text{o} \\
\text{45^o} & \text{renders as} & 45^o \\
\text{45^\circ} & \text{renders as} & 45^\circ \\
\text{45^{\large\circ}} & \text{renders as} & 45^{\large\circ}\\
\text{45\unicode{xB0}} & \text{renders as} & 45\unicode{xB0} & \text{Actual Unicode character}\\
\text{90°} & \text{renders as} & 90° & \text{Using keyboard entry of symbol}
\end{array}
$$

The degree symbol for angles is not `^\circ`. Although many people use this notation, the result looks quite different from the canonical degree symbol shipped with the font, as seen above.

If your keyboard doesn't have a `°` key, feel free to copy from this post here.

> For Latex we use package  `\usepackage{gensymb}` to get the `\degree` symbol.


<h2 id="long-division">Long division</h2>

```tex
$$
\require{enclose}
\begin{array}{r}
                13  \\[-3pt]
4 \enclose{longdiv}{52} \\[-3pt]
     \underline{4}\phantom{2} \\[-3pt]
                12  \\[-3pt]
     \underline{12}
\end{array}
$$
```

$$
\require{enclose}
\begin{array}{r}
                13  \\[-3pt]
4 \enclose{longdiv}{52} \\[-3pt]
     \underline{4}\phantom{2} \\[-3pt]
                12  \\[-3pt]
     \underline{12}
\end{array}
$$


One important trick shown here is the use of `\phantom{2}` to make a blank space that is the same size and shape as the digit 2 just above it.

<h2 id="displaystyle-and-textstyle">Displaystyle and Textstyle</h2>

Many things like fractions, sums, limits, and integrals display differently when written inline versus in a displayed formula. You can switch styles back and forth with `\displaystyle` and `\textstyle` in order to achieve the desired appearance.

Here's an example switching back and forth in a displayed equation:

```tex
$$\sum_{n=1}^\infty \frac{1}{n^2} \to
  \textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
  \displaystyle \sum_{n=1}^\infty \frac{1}{n^2}$$
```

$$\sum_{n=1}^\infty \frac{1}{n^2} \to
  \textstyle \sum_{n=1}^\infty \frac{1}{n^2} \to
  \displaystyle \sum_{n=1}^\infty \frac{1}{n^2}$$

It is possible to switch style inline as well:

```tex
Compare $\displaystyle \lim_{t \to 0} \int_t^1 f(t)\, dt$ versus $\lim_{t \to 0} \int_t^1 f(t)\, dt$.
```

Compare $\displaystyle \lim_{t \to 0} \int_t^1 f(t)\, dt$ versus $\lim_{t \to 0} \int_t^1 f(t)\, dt$.

<h2 id="vertical-spacing">Vertical Spacing</h2>

Some formulas such as $\overline a+\overline b=\overline {a\cdot b}$, $\sqrt{a}-\sqrt{b}$, do not look quite right when it comes to vertical spacing. Fortunately, there is more than one way to fix this. One can for instance employ the `\mathstrut` command as follows:
```tex
$\sqrt{\mathstrut a} - \sqrt{\mathstrut b}$
```
Which yields: $\sqrt{\mathstrut a} - \sqrt{\mathstrut b}$. Or using `\vphantom` (vertical phantom) command, which measures the height of its argument and places a math strut of that height into the formula.
```tex
$\sqrt{\vphantom{b} a} - \sqrt{b}$
```

Which renders as : $\sqrt{\vphantom{b} a} - \sqrt{b}$.

Another issue is with the spacing within lines in situations like this,
> Based on the previous technique, we can simplify $\dfrac{1}{\sqrt{\vphantom{b} a} - \sqrt{b}}$, and we thus get the result of the previous limit.

These two lines are too far apart, but this is unnecessary since the second line is very short. We can solve this by using the `\smash` command, to get:

> Based on the previous technique, we can simplify $\smash{\dfrac{1}{\sqrt{\vphantom{b} a} - \sqrt{b}}}$, and we thus get the result of the previous limit.

<h2 id="equation-numbering">Equation numbering</h2>

### Simple equation

To give an equation a number, use the `\tag{}`. To refer to it later, use `\label{}` to label this equation. When you want to refer to it, use `\eqref{}`. For example,

$$
e=mc^2 \tag{1}\label{eq1}
$$

Equation $\eqref{eq1}$ is one the greatest equations in mankind history. Equation $\eqref{eq1}$ is produced using the following code,

```tex
$$e=mc^2 \tag{1}\label{eq1}$$
```
To refer to it, use `\eqref{eq1}`.

### Multi-line equation
Multi-line equation is actually just one equation rather than several equations. So the correct environment is `aligned` instead of `align`.

$$
\begin{equation}\begin{aligned}
a &= b + c \\
  &= d + e + f + g \\
  &= h + i
\end{aligned}\end{equation}\tag{2}\label{eq2}
$$

Equation $\eqref{eq2}$ is a multi-line equation. The code to produce equation $\eqref{eq2}$ is
```tex
$$\begin{equation}\begin{aligned}
a &= b + c \\
  &= d + e + f + g \\
  &= h + i
\end{aligned}\end{equation}\tag{2}\label{eq2}$$
```

### Multiple aligned equations

For multiple aligned equations, we use the `align` environment.

$$
\begin{align}
a &= b + c \tag{3}\label{eq3} \\
x &= yz \tag{4}\label{eq4}\\
l &= m - n \tag{5}\label{eq5}
\end{align}
$$

Equation $\eqref{eq3}$, $\eqref{eq4}$ and $\eqref{eq5}$ are multiple equations aligned together. The code to produce these equations is,
```tex
$$\begin{align}
a &= b + c \tag{3}\label{eq3} \\
x &= yz \tag{4}\label{eq4}\\
l &= m - n \tag{5}\label{eq5}
\end{align}$$
```

<h2 id="units">Units</h2>

While $\LaTeX$ has packages that format units, MathJax does not. For visual consistency, one should format units within the same string of MathJax code as the value to which it corresponds, separating the value and unit with `\` (space-backslash-space) since the [BIPM](https://www.bipm.org/en/publications/si-brochure/) recommends a small space between the value and units. In addition, follow the below conventions for formatting values and units:

### Decimal Separator & Digit Separation
Following the conventions of the English-speaking world, a `.` . should be used to separate the decimal part of a number from the integral part, not `,` , as is common in some languages. This is because commas are already reserved for separating mathematical notation such as arguments of multivariate functions, elements of a set, and the coordinates of ordered tuples.

No punctuation should be used to separate multiples of three digits on either side of the decimal separator; instead, a small space rendered by `\,` should be used on both sides of the decimal marker when the string of digits consists of more than four or five digits. For example,

- 4321.1234 $4321.1234$
- 54\,321.123\,45 $54\,321.123\,45$
- 0.56789 $0.56789$
- 0.567\,89 $0.567\,89$

If you use a decimal separator, you should include a digit on both sides of the separator, even if the digit is simply 0.

### Powers of $10$

Seeing as we are not calculators, it is preferable to fully write without abbreviation `\times10^{n}` $\times10^{n}$ when scientific or engineering notation is helpful or necessary. Do not precede or follow this markdown with positive nor negative spaces; \times takes care of that on its own.

Nevertheless, if necessary, use an upright variant of the letter ‘E’ or ‘e’ to indicate order of magnitude, such as

- `\mathrm{E}\,6` $\mathrm{E}\,6$
- `\scriptsize{\mathrm{E}}\,\normalsize{6}` $\scriptsize{\mathrm{E}}\,\normalsize{6}$
- `\mathrm{e}\,6` $\mathrm{e}\,6$

A small space on either side is perfectly fine and recommended.

### Single Units
The symbol of any unit—especially SI units—should follow the form `\mathrm{u}`. (I have this command saved under the keyboard shortcut `usin` on my devices.) For example,

- `\mathrm{m}` $\mathrm{m}$
- `\mathrm{kg}` $\mathrm{kg}$
- `\mathrm{ft.}` $\mathrm{ft.}$

Do not use a period with symbolic units; do use a period with abbreviated units.

### Units with a Dot Multiplier

Multiplied units conjoined by a dot should follow the form `\mathrm{u}\!\cdot\!\mathrm{v}` 

$$\mathrm{u}\!\cdot\!\mathrm{v}$$

. (I have this sequence of commands saved under the keyboard shortcut umul on my devices.) Because of how `\cdot` is designed (i.e., to separate numbers), the small negative space `\!` on either side maintains uniform spacing throughout the whole compound unit. For example,

- `\mathrm{N} \! \cdot \! \mathrm{m}` 

$$\mathrm{N}\!\cdot\!\mathrm{m}$$

- `\mathrm{s}\!\cdot\!\mathrm{A}` 

$$\mathrm{s}\!\cdot\!\mathrm{A}$$

Do not use `\times` $\times$ as a separator.

### Units with a Solidus Separator

Divided units conjoined by a solidus should follow the form `\left.\mathrm{u}\middle/\mathrm{v}\right`.$\left.\mathrm{u}\middle/\mathrm{v}\right.$ (I have this sequence of commands saved under the keyboard shortcut `udiv` on my devices.) The extra markdown is to ensure that solidus stretches the entire height of the unit, especially when exponents are involved. For example,

- `\left.\mathrm{J}\middle/\mathrm{s}\right.` $\left.\mathrm{J}\middle/\mathrm{s}\right.$
- `\left.\mathrm{m}\middle/\mathrm{s}^2\right.` $\left.\mathrm{m}\middle/\mathrm{s}^2\right.$

You may include small negative spaces \! on either side of the solidus if you please.

### Exponents
Exponents can be rendered with the standard MathJax markdown. The carat and number should immediately follow the closing brace of the `mathrm{}` argument. For example,

- `\mathrm{m}^2` $\mathrm{m}^2$
- `\left.\mathrm{m}\middle/\mathrm{s}^2\right.` $\left.\mathrm{m}\middle/\mathrm{s}^2\right.$

### Parentheses
Parentheses can also be rendered with standard MathJax markdown using `\left(` and `\right)` outside the argument of `\mathrm`. For example,

- `\left.\mathrm{kg}\!\cdot\!\mathrm{m}^2\middle/\left(\mathrm{C}\!\cdot\!\mathrm{s}\right)\right.` 

$$\left.\mathrm{kg}\!\cdot\!\mathrm{m}^2\middle/\left(\mathrm{C}\!\cdot\!\mathrm{s}\right)\right.
$$

### Exponents in Place of Separators

If you prefer to use no separators and only powers, separator each single `\mathrm{}` with a small space `\,` and use exponents as necessary. For example,
- `\mathrm{m}\,\mathrm{s}^{-2}` $\mathrm{m}\,\mathrm{s}^{-2} $
- `\mathrm{s}^{-1}\,\mathrm{mol}`  $\mathrm{s}^{-1}\,\mathrm{mol}$

### Examples in Context

```tex
\mu_0=4\pi\times10^{-7} \ \left.\mathrm{\mathrm{T}\!\cdot\!\mathrm{m}}\middle/\mathrm{A}\right.
```

$$
\mu_0=4\pi\times10^{-7} \ \left.\mathrm{\mathrm{T}\!\cdot\!\mathrm{m}}\middle/\mathrm{A}\right.
$$

```tex
180^\circ=\pi \ \mathrm{rad}
```

$$
180^\circ=\pi \ \mathrm{rad}
$$

```tex
N_A = 6.022\times10^{23} \ \mathrm{mol}^{-1}
```

$$
N_A = 6.022\times10^{23} \ \mathrm{mol}^{-1}
$$

<h2 id="linear-programming">Linear programming</h2>

### Formulation
A theoretical LPP can be typeset as

```tex
\begin{array}{ll}
\text{maximize}  & c^T x \\
\text{subject to}& d^T x = \alpha \\
&0 \le x \le 1.
\end{array}
```

$$
\begin{array}{ll}
\text{maximize}  & c^T x \\
\text{subject to}& d^T x = \alpha \\
&0 \le x \le 1.
\end{array}
$$

To input a numerical LPP, use `alignat` instead of `align` to get better alignment between signs, variables and coefficients.

```tex
\begin{alignat}{5}
  \max \quad        & z = &   x_1  & + & 12 x_2  &   &       &         && \\
  \mbox{s.t.} \quad &     & 13 x_1 & + & x_2     & + & 12x_3 & \geq 5  && \tag{constraint 1} \\
                &     & x_1    &   &         & + & x_3   & \leq 16 && \tag{constraint 2} \\
                &     & 15 x_1 & + & 201 x_2 &   &       & =    14 && \tag{constraint 3} \\
                &     & \rlap{x_i \ge 0, i = 1, 2, 3}
\end{alignat}
```

$$
\begin{alignat}{5}
  \max \quad        & z = &   x_1  & + & 12 x_2  &   &       &         && \\
  \mbox{s.t.} \quad &     & 13 x_1 & + & x_2     & + & 12x_3 & \geq 5  && \tag{constraint 1} \\
                &     & x_1    &   &         & + & x_3   & \leq 16 && \tag{constraint 2} \\
                &     & 15 x_1 & + & 201 x_2 &   &       & =    14 && \tag{constraint 3} \\
                &     & \rlap{x_i \ge 0, i = 1, 2, 3}
\end{alignat}
$$

We treat $max$, $z$, each variable, $\pm$ sign and RHS as one separate column, while leaving an extra empty column on the right. Then we count the number of separators &, add one into this number then divide it by two. (e.g. (9 + 1) ÷ 2 = 5)

`\rlap` is used so that the last row spans over one column.

Optional: `\tag` is used to label the constraints.

### Change MATLAB/Octave matrices to $\rm\LaTeX$ code
To get fractions, execute `format rat` at the beginning.

Writing manually the $\rm\LaTeX$ code for a matrix with many rows and columns in Octave is tedious. The Octave function

```tex
strcat("\\begin{bmatrix}\n",strrep(strrep(mat2str(A)," "," & "), ...
";"," \\\\\n")(2:end-1),"\n\\end{bmatrix}\n")
```

converts


```matlab
A = [1 2 2; 2 3 4; 4 4 2]
A =

   1   2   2
   2   3   4
   4   4   2
```

to 

```tex
\begin{bmatrix}
1 & 2 & 2 \\
2 & 3 & 4 \\
4 & 4 & 2
\end{bmatrix}
```

so that pasting the generated code gives

$$
\begin{bmatrix}
1 & 2 & 2 \\
2 & 3 & 4 \\
4 & 4 & 2
\end{bmatrix}
$$

### Simplex tableaux

Since the coefficient of the objective value variable $z$ never changes, my habit is to omit the $𝑧$-column to save ink.

### Normal simplex tableau
```tex
\begin{array}{rrrrrr|r}
               & x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
           s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
           s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
           s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
               &  -1 &  -1 &   0 &   0 &   0 &  0
\end{array}
```

$$
\begin{array}{rrrrrr|r}
               & x_1 & x_2 & s_1 & s_2 & s_3 &    \\ \hline
           s_1 &   0 &   1 &   1 &   0 &   0 &  8 \\
           s_2 &   1 &  -1 &   0 &   1 &   0 &  4 \\
           s_3 &   1 &   1 &   0 &   0 &   1 & 12 \\ \hline
               &  -1 &  -1 &   0 &   0 &   0 &  0
\end{array}
$$

It can be stacked up to give an illustration of the entering of variables at different stages.

```tex
\begin{array}{rrrrrrr|rr}
      & x_1 & x_2 & s_1 & s_2 & s_3 &  w &    & \text{ratio} \\ \hline
  s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &            - \\
    w & 1^* &  -1 &   0 &  -1 &   0 &  1 &  4 &            4 \\
  s_3 &   1 &   1 &   0 &   0 &   1 &  0 & 12 &           12 \\ \hdashline
      &   1 &  -1 &   0 &  -1 &   0 &  0 &  4 &              \\ \hline
  s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &              \\
  x_1 &   1 &  -1 &   0 &  -1 &   0 &  1 &  4 &              \\
  s_3 &   0 &   2 &   0 &   2 &   1 & -1 &  8 &              \\ \hdashline
      &   0 &   0 &   0 &   0 &   0 & -1 &  0 &
\end{array}
```

$$
\begin{array}{rrrrrrr|rr}
      & x_1 & x_2 & s_1 & s_2 & s_3 &  w &    & \text{ratio} \\ \hline
  s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &            - \\
    w & 1^* &  -1 &   0 &  -1 &   0 &  1 &  4 &            4 \\
  s_3 &   1 &   1 &   0 &   0 &   1 &  0 & 12 &           12 \\ \hdashline
      &   1 &  -1 &   0 &  -1 &   0 &  0 &  4 &              \\ \hline
  s_1 &   0 &   1 &   1 &   0 &   0 &  0 &  8 &              \\
  x_1 &   1 &  -1 &   0 &  -1 &   0 &  1 &  4 &              \\
  s_3 &   0 &   2 &   0 &   2 &   1 & -1 &  8 &              \\ \hdashline
      &   0 &   0 &   0 &   0 &   0 & -1 &  0 &
\end{array}
$$

### Dual simplex tableau
```tex
\begin{array}{rrrrrrrr|r}
             & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
         x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
         x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
         x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
         x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
             &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
\text{ratio} &     &     &   1 &     &     &     &  1/2 &
\end{array}
```

$$
\begin{array}{rrrrrrrr|r}
             & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
         x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
         x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
         x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
         x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
             &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
\text{ratio} &     &     &   1 &     &     &     &  1/2 &
\end{array}
$$
It can be stacked up to give a theoretical illustration of what happens in the upcoming steps.

$$
\begin{array}{rrrrrrr|r}
         &  x_1 &  x_2 &  x_3 &  s_1 &    s_2 &  s_3 &       \\     \hline
     s_1 &   -2 &    0 &   -2 &    1 &      0 &    0 &   -60 \\
     s_2 &   -2 & -4^* &   -5 &    0 &      1 &    0 &   -70 \\
     s_3 &    0 &   -3 &   -1 &    0 &      0 &    1 &   -27 \\ \hdashline
         &    8 &   10 &   25 &    0 &      0 &    0 &     0 \\
\text{ratio} &   -4 & -5/2 &   -5 &      &        &      &       \\     \hline
     s_1 & -2^* &    0 &   -2 &    1 &      0 &    0 &   -60 \\
     x_2 &  1/2 &    1 &  5/4 &    0 &   -1/4 &    0 &  35/2 \\
     s_3 &  3/2 &    0 & 11/4 &    0 &   -3/4 &    1 &  51/2 \\ \hdashline
         &    3 &    0 & 25/2 &    0 &    5/2 &    0 &  -175 \\
\text{ratio} & -3/2 &      & 25/4 &      &        &      &       \\     \hline
     x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
     x_2 &    0 &    1 &  3/4 &  1/4 &   -1/4 &    0 &   5/2 \\
     s_3 &    0 &    0 &  5/4 &  3/4 & -3/4^* &    1 & -39/2 \\ \hdashline
         &    0 &    0 & 19/2 &  3/2 &    5/2 &    0 &  -265 \\
\text{ratio} &      &      &      &      &  \dots &      &       \\     \hline
     x_1 &    1 &    0 &    1 & -1/2 &      0 &    0 &    30 \\
     x_2 &    0 &    1 &  1/3 &    0 &      0 & -1/3 &     9 \\
     s_2 &    0 &    0 & -5/3 &   -1 &      1 & -4/3 &    26 \\ \hdashline
         &    0 &    0 & 41/3 &    4 &      0 & 10/3 &  -330
\end{array}
$$

### Duality
A picture is worth a thousand words.

$$
\require{extpfeil} 
\begin{array}{ccc} 
\begin{array}{ll}
\max & z = c^T x \\
\text{s.t.} & A x \le b \\
& x \ge 0
\end{array}
& \xtofrom{\text{duality}} &
\begin{array}{ll}
\min & v = b^T y \\
\text{s.t.} & A^T y \ge c \\
& y \ge 0
\end{array} \\
({\cal PC}) & & ({\cal DC}) \\
\text{add } {\Large \downharpoonleft} \text{slack var} &  & \text{minus } {\Large \downharpoonright} \text{surplus var}\\
\begin{array}{ll}
\max & z = c^T x \\
\text{s.t.} & A x + s = b \\
& x,s \ge 0
\end{array}
& \xtofrom[\text{some steps skipped}]{\text{duality}} &
\begin{array}{ll}
\min & v = b^T y \\
\text{s.t.} & A^T y - t = c \\
& y,t \ge 0
\end{array} \\
({\cal PS}) & & ({\cal DS})
\end{array}
$$

<h2 id="mixing-code-and-mathJax-formatting-on-lines">Mixing code and MathJax formatting on lines</h2>

To give an example of how this might be useful, I wanted to express an algorithm in more or less the same indentation and symbolic way it appears in a paper.

On my desktop browsers (Chrome, Firefox) the following appears reasonably well spaced and indented, but loses indentation on my Android smartphone:

**Input:** positive integer $n$

**Output:** Tangent numbers $T_1, \ldots, T_n$

$T_1\gets 1$ <br>
`for`$k$`from`$2$`to`$n$  <br>
`⌴⌴⌴⌴`$T_k\gets (k−1)T_{k−1}$ <br>
`for`$k$`from`$2$`to`$n$ <br>
`⌴⌴⌴⌴``for`$j$`from`$k$`to`$n$ <br>
`⌴⌴⌴⌴⌴⌴⌴⌴`$T_j\gets (j −k)T_{j−1} + (j −k+2)T_j$ <br>
`return`$T_1,T_2,\ldots,T_n$

The source can be examined for specific techniques, but the basic trick is that a MathJax dollar-delimiter can follow a closing back-tick code delimiter, but an opening back-tick should be preceded by a space when following the (closing) dollar-sign delimiter.

Here is a version using `\phantom` rather than code monospacing to produce indents and tweaking the spacing between code and MathJax expressions with `\;`, so that the results appear clear on Android browsers:

**Input:** positive integer $n$

**Output:** Tangent numbers $T_1, \ldots, T_n$

$T_1\gets 1$ <br>
`for`$\;k\;$`from`$\;2\;$`to`$\;n\;$  <br>
`⌴⌴⌴⌴`$\;T_k\gets (k−1)T_{k−1}$ <br>
`for`$\;k\;$`from`$\;2\;$`to`$\;n\;$ <br>
`⌴⌴⌴⌴``for`$\;j\;$`from`$\;k\;$`to`$\;n\;$ <br>
`⌴⌴⌴⌴⌴⌴⌴⌴`$\;T_j\gets (j −k)T_{j−1} + (j −k+2)T_j$ <br>
`return`$\;T_1,T_2,\ldots,T_n$

<h2 id="markov-chains">Markov Chains</h2>

This is a heuristic solution for coding Markov chains in Mathjax using a combination of commutative diagrams, the encircle tool and font sizes. There are a few minor issues with this method, for instance the arrows' ends should be attached closer to their targets. Also, it lacks double-headed diagonal arrows and it is difficult to attach probabilities to diagonal arrows. Therefore, it's mostly useful for small chains.

$$
\begin{array}{ccccccccc}   
\rlap{\, A}\bigcirc & \xrightarrow{0.1} & \rlap{\, B}\bigcirc & \xrightarrow{0.2} & \rlap{\, C}\bigcirc & \xleftarrow{0.3} & \rlap{\, D}\bigcirc & \xleftarrow{0.4} & \rlap{\, E}\bigcirc\\\
\scriptsize{0.5}\large{\downarrow} & \scriptsize{0.6}\large{\searrow} & \scriptsize{0.7}\large{\downarrow} & \scriptsize{0.8}\large{\nearrow} & \scriptsize{0.9}\large{\downarrow} & \scriptsize{0.1}\large{\swarrow} & \scriptsize{0.2}\large{\downarrow} & \scriptsize{0.3}\large{\nwarrow} & \scriptsize{0.4}\large{\downarrow}\\\  
\rlap{\, F}\bigcirc & \xrightarrow[0.5]{} & \rlap{\, G}\bigcirc & \xrightarrow[0.6]{} & \rlap{\, H}\bigcirc & \xleftarrow[0.7]{} & \rlap{\, I}\bigcirc & \xleftarrow[0.8]{} & \rlap{\, J}\bigcirc\\
\circlearrowright\tfrac12\\ 
\end{array} 
$$

```tex
\begin{array}{ccccccccc}   
\rlap{\, A}\bigcirc & \xrightarrow{0.1} & \rlap{\, B}\bigcirc & \xrightarrow{0.2} & \rlap{\, C}\bigcirc & \xleftarrow{0.3} & \rlap{\, D}\bigcirc & \xleftarrow{0.4} & \rlap{\, E}\bigcirc\\\
\scriptsize{0.5}\large{\downarrow} & \scriptsize{0.6}\large{\searrow} & \scriptsize{0.7}\large{\downarrow} & \scriptsize{0.8}\large{\nearrow} & \scriptsize{0.9}\large{\downarrow} & \scriptsize{0.1}\large{\swarrow} & \scriptsize{0.2}\large{\downarrow} & \scriptsize{0.3}\large{\nwarrow} & \scriptsize{0.4}\large{\downarrow}\\\  
\rlap{\, F}\bigcirc & \xrightarrow[0.5]{} & \rlap{\, G}\bigcirc & \xrightarrow[0.6]{} & \rlap{\, H}\bigcirc & \xleftarrow[0.7]{} & \rlap{\, I}\bigcirc & \xleftarrow[0.8]{} & \rlap{\, J}\bigcirc\\
\circlearrowright\tfrac12\\ 
\end{array} 
```

<h2 id="tables">Tables</h2>

### W/ Sub-Variables

After spending too much time searching for a way to make tables of this form (to no avail), I spent even longer searching for the pieces to Frankenstein my own.

$$
\begin{array}{l}
 \begin{array}{c|c}
  \hskip36.5pt & \hskip42.5pt\style{font-family:inherit}{\text{Ordering}}
 \end{array} \\[-7pt]\hline\hskip-5.5pt
 \begin{array}{c|c|c}
  \style{font-family:inherit}{\text{Repetition}} & \style{font-family:inherit}{\text{w/}}
& \style{font-family:inherit}{\text{w/o}} \\\hline
  \style{font-family:inherit}{\text{w/}}         & P_r^n=n^r
& C_r^n=\left(\!\left(\begin{smallmatrix} n \\ r \end{smallmatrix}\right)\!\right)=\left(\begin{smallmatrix} n+r-1 \\ r \end{smallmatrix}\right) \\[0pt]\hline
  \style{font-family:inherit}{\text{w/o}}        & nPr=\frac{n!}{(n-r)!}
& nCr=\left(\begin{smallmatrix} n \\ r \end{smallmatrix}\right)=\frac{n!}{r!(n-r)!}
 \end{array}\hskip-5.5pt
\end{array}
$$

### W/o Sub-Variables
While searching, I found several tables of this form...

$$
\begin{array}{c|c|c|c}
 \style{font-family:inherit}{\text{Day}} & \style{font-family:inherit}{\text{Credit}}
& \style{font-family:inherit}{\text{Debit}} & \style{font-family:inherit}{\text{Total}}\\\hline
 0                                       & 0    & 0   & 10000 \\\hline
 1                                       & 100  & 500 & 9600 \\\hline
 2                                       & 0    & 400 & 10000 \\\hline
 3                                       & 1000 & 500 & 10500
\end{array}
$$

<h2 id="tensor-indices">Tensor indices</h2>

`T^{\alpha\beta}{}_{\gamma\delta}`

$$
T^{\alpha\beta}{}_{\gamma\delta}
$$

`T^{\alpha \beta}{}_{\gamma\delta}{}^{\lambda}` 

$$
T^{\alpha \beta}{}_{\gamma\delta}{}^{\lambda}
$$

So for instance, a $(2,2)-$ tensor would act on two covectors $(\omega, \varphi)$ and two vectors $(v, w)$ to produce a real number like this:

$$
[T^{\alpha \beta}{}_{\gamma\delta}e_\alpha\otimes e_\beta\otimes e^\gamma \otimes e^\delta](\omega,\varphi,v,w).
$$


<h2 id="overlaying-symbols">Overlaying Symbols</h2>

To overlay the $\wedge$ `\wedge` and the $\bigcirc$ `\bigcirc`, to make the [Kulkarni–Nomizu product](https://en.wikipedia.org/wiki/Kulkarni%E2%80%93Nomizu_product):

$$
\mathbin{\rlap{\,\wedge}\bigcirc}
$$

Which is `\mathbin{\rlap{\,\wedge}\bigcirc}`.

Just for another example: Overlaying of $\\}$ `\}` and $\div$ `\div` :

$$
\rlap{\,\,\}}\div
$$

Which is `\rlap{\,\,\}}\div`.

The command `\rlap{c1}c2` prints the character `c1` with zero-width on the right-hand side of the current position, so that `c2` overlaps with `c1`. In practice, you might want to

1. choose the widest character as `c2`
2. adjust the horizontal spacing by prepending `c1` with extra horizontal space `\,`.
3. if necessary, wrap up the symbol with `\mathbin` so that MathJax treats the symbol like an operator, and the spacing around the symbol is correct.

As you can see, the number of `\!` is different, for exact overlaying of each symbol. `\!` makes the characters left and right to it move a little bit closer.

e.g, the code ab produces $ab$. <br>
And the code `a\!b` produces 

$$a\!b$$

<h2 id="alternative-ways-of-writing-in-latex">Alternative Ways of Writing in $\LaTeX$</h2>

### TYPESET FONTS

As mentioned before, you can write `$\mathtt{. . .}$` to generate fonts like $\mathtt{A, B, C}$ and etc.

And concerning different “angle fonts”, `$\angle$` generates $\angle$, `$\measuredangle$` generates $\measuredangle$ and last but not least, `$\sphericalangle$` generates $\sphericalangle$. Also, `$\langle...\rangle$` generates $\langle...\rangle$.

Concerning different “approximation fonts”, `$\approx$` generates $\approx$ with `$\thickapprox$` generating $\thickapprox$. In addition to that, `$\sim$` generates $\sim$ and `$\thicksim$` generates $\thicksim$ with `$\backsim$`generating $\backsim$.

For a symbol of contradiction, you can write `$\Rightarrow\Leftarrow$` to generate $\Rightarrow\Leftarrow$ or you can write `$\unicode{x21af}$` to generate $\unicode{x21af}$, which is read as Scar (short for Harry Potter's scar, explaining why it looks like a lightning bolt).

$$***$$

### INEQUALITY SIGNS

You can write `$\lt$` or `$<$` to generate $<$ and `$\gt$` or `$>$` to generate $>$, with `$\le$` or `$\leq$` to generate $\leq$.

You can also produce similar less than inequality signs with `$\leqslant$` to generate $\leqslant$ and `$\leqq$` to generate $\leqq$. The same applies for greater than inequality signs, for which we just rewrite the command as `$\g...$` instead of `$\l...$` which produces $\geq$, $\geqslant$ and $\geqq$.

By putting in an `n`, we could form commands like `$\ngtr$` to generate $\ngtr$ and `$\nless$` to generate $\nless$ as opposed to `$\not>$` and `$\not<$`.

Also, `$\ngeq$` = `$\not\geq$` which generates $\not\geq$ and `$\nleq$` = `$\not\leq$`, generating $\not\leq$.

Furthermore, putting `slant` at the end of strictly the previous two commands generates $\ngeqslant$ and $\nleqslant$.

$$∗∗∗$$

### SET CONTAINMENT

You could write `$\not\subseteq$` to generate $\not\subseteq$ or `$\not\supseteq$` to generate $\not\supseteq$.

You can write `$\subsetneq$` to generate $\subsetneq$ and `$\supsetneq$` to generate $\supsetneq$.

Or, you can write `$\subsetneqq$` to generate $\subsetneqq$ and `$\supsetneqq$` to generate $\supsetneqq$.

By striking out the n in the previous commands with `qq` at the end, we can generate $\subseteqq$ and $\supseteqq$.

Instead of `$\left\{. . .\right\}$` to generate $\left\\{. . .\right\\}$, you can write `$\lbrace...\rbrace$` to generate the exact same thing. For sets that contain element(s) with a single number or letter, you can also write `$\{. . .\}$` to generate strictly $\\{. . .\\}$ with no other smaller or larger brace sizes.

As another alternative to denoting the difference of two sets $A$ and $B$, you can write `$\diagdown$` to generate $\diagdown$ in the set expression, $A\diagdown B$. This command though is mainly used for sets $A^n$ and $B^n$. There also exists `$\diagup$` = $\diagup$ by the way to denote the division operation as opposed to the ordinary / or `$\div$` = $\div$.

$$∗∗∗$$

### OLD-STYLE

For old-style notation, you can write `$\eqslantless$` to generate $\eqslantless$ and `$\eqslantgtr$` to generate $\eqslantgtr$. These notations can be used to mean the same as $\leqslant$ and $\geqslant$ which is also the same as $\leq$ and $\geq$, but if used today, they commonly represent a *not much less than or not much greater than* inequality sign.

If you want to write that the statement, $x > y$ $\color{red}{\text{and thus}}$ $x\neq y$, without any words, then you can write `$x \gvertneqq y$` to generate $x \gvertneqq y$. If, on the other hand, you want to then write the same statement for $x < y$ then you can write `$x \lvertneqq y$` to generate $x \lvertneqq y$.

Suppose you have that $x\in \mathbb{R}$ but $x \neq 0$ $(\star)$, one could write it as follows: $x\in\mathbb{R}\setminus\{0\}$ with `$\setminus$` to generate $\setminus$. There is an alternative way of writing $(\star)$, nonetheless.

You can write `$\gtrless$` to generate $\gtrless$ which means less than and greater than. If $x\gtrless y$ then $x$ is equal to a number greater than $y$ or less than $y$. Therefore, $x \in\mathbb{R}\setminus\{0\}$ can also be written as $x\gtrless 0$. You can also write `$\lessgtr$` to generate $\lessgtr$ which essentially means the same thing. The following commands and notation is unnecessary, for their definition is obvious.

`$\gtreqless$` generates $\gtreqless$ and `$\lesseqgtr$` generates $\lesseqgtr$.

`$\gtreqqless$` generates $\gtreqqless$ and `$\lesseqgtr$` generates $\lesseqgtr$.
