---
title: First Test of My Blog
author:
  name: Piyazon
  link: https://piyazon.top
date: 2021-12-06 14:32:00 +0800
categories: [Blogging, Test]
tags: [test]
math: true
mermaid: true
image:
  src: /iytka.jpeg
  alt: iytka
---

## RTL language support
<p class="alert alert-primary right-to-left">
سالام قەشقەر
</p>

## image
### image caption

![jason-Statham](/markdown-syntax-language.png)
_I love markdown_

### image size

![markdown](/markdown-syntax-language.png){: width="200"}

## code block

```
blablaba
```

```markdown
### title
```

{: .nolineno}

```shell
echo 'No more line numbers!'
echo 'No more line numbers!'
echo 'No more line numbers!'

```

{: file="path/to/file" }

```shell
# content
```


## list

### Task list

- [ ] TODO
- [x] Completed
- [ ] Defeat COVID-19
  - [x] Vaccine production
  - [ ] Economic recovery
  - [ ] People smile again

### Description list

Sun
: the star around which the earth orbits

Moon
: the natural satellite of the earth, visible by reflected light from the sun

## Footnote

Click the hook will locate the footnote[^footnote], and here is another footnote[^fn-nth-2].

## Images

- Left aligned

![Desktop View](/jekyll/mockup.png){: width="972" height="589" style="max-width: 60%" .normal}

<br>

- Float to left

  ![Desktop View](/jekyll/mockup.png){: width="972" height="589" style="max-width: 100px" .left}
  "A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space."

<br>

- Float to right

  ![Desktop View](/jekyll/mockup.png){: width="972" height="589" style="max-width: 100px" .right}
  "A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space. A repetitive and meaningless text is used to fill the space."

<br>

## Mermaid SVG

```mermaid
 gantt
  title  Adding GANTT diagram functionality to mermaid
  apple :a, 2017-07-20, 1w
  banana :crit, b, 2017-07-23, 1d
  cherry :active, c, after b a, 1d
```

## Mathematics

The mathematics powered by [**MathJax**](https://www.mathjax.org/):

$$ \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6} $$

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

## Inline code

This is an example of `Inline Code`.

## Custom Alert message
<p class="alert alert-success">
this is a success message
</p>

## Reverse Footnote

[^footnote]: The footnote source
[^fn-nth-2]: The 2nd footnote source
