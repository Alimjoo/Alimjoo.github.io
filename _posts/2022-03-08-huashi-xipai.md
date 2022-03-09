---
title: 花式洗牌
author:
  name: Piyazon
  link: https://piyazon.top
date: 2022-03-08 14:10:00 +0800
categories: [Coding, OJ]
tags: [coding, c/c++]
math: true
---

# Description

欢迎各位同学

这是你在这个学期的第一道算法题，意在让你熟悉OJ的操作、复习C语言和基本的数据结构

题目如下：

小明手中有 $n$ 张扑克牌从上到下堆叠， 其他人不知道它们的顺序。

小明进行了以下操作：

1. 从牌顶拿出一张牌， 放到桌子上。

2. 从牌顶再拿一张牌， 放在手上牌的底部。

重复 1 + 2 的操作， 直到小明手中所有的牌都放到了桌子上。

最后，所有人都可以看到桌上的牌序，请你编写一个程序，得到小明刚开始拿在手里的牌序。

<em style="color:red;">注意：</em>


*本题目只开放 C 语言作为答题语言，请同学们参照公告第一条，在本机配置合理的编程环境.*


# Input
首先是一个数字 $n$, 表示小明手中共有 $n$ 张牌。

然后是 $n$ 个数字，以空格或`\n`为间隔，表示桌上的牌从下到上的顺序。

满足限制：$0 < n \leqslant 10^5$
 

# Output
输出一行 $n$ 个数字，以空格为间隔，表示小明原来手上的牌从上到下的顺序。

## Sample Input 1
```
4
1 2 3 4
```
## Sample Output 1
```
1 3 2 4
```
## Sample Input 2
```
7
1 2 3 4 6 5 7
```
## Sample Output 2
```
1 5 2 6 3 7 4
```
## Sample Input 3
```
8
1 2 3 4 5 6 7 8
```
## Sample Output 3
```
1 5 2 7 3 6 4 8
```

# Hint
请用 C 语言从零定义数据结构，完成题目。（使用链表以降低时间复杂度）

*本题目已给出 C 代码框架，可以自行选择是否使用框架。之后的题目不再给出。*

# Code

```c
#include <stdio.h>
#include <stdlib.h>
#define MAXN 100000

typedef struct Node {
  // Please fill this blank to create Node struct
    int data;
    struct Node *next;
    struct Node *prior;
} *LinkedList, Node;


void display(LinkedList tail, int n){
    LinkedList p=tail;
    for (int i=0;i<n;i++){
        printf("%d ", p->data);
        p = p->prior;
    }
  printf("\n");
}

LinkedList initLinkedlist(int *cards, int n){
    LinkedList head, tail, pnew, temp;
    head = (LinkedList)malloc(sizeof(Node));
    if(NULL==head){
        printf("%s\n", "动态分配内存失败，程序退出");
        exit(-1);
    }
    head->next = NULL;
    head->prior = NULL;
    tail = head;
    for (int i=n-1; i >=0; i--){
        pnew = (LinkedList)malloc(sizeof(Node));
        if (pnew == NULL) {
            printf("动态分配内存失败，程序退出");
            exit(-1);
        }
        pnew->data = cards[i];

        tail->next = pnew;
        pnew->prior = tail;
        pnew->next = NULL;
        tail = pnew;
        // printf("%d\n", tail->data);

        // Swap
        if(n-i!=1 && n-i!=n){
            temp = head->next;
            head->next = head->next->next;
            temp->next->prior = head;
            tail->next = temp;
            temp->prior = tail;
            tail = temp;
            tail->next =NULL;

        }
    }
    return tail;
}


int main() {
  int n;
  int cards[MAXN];
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &cards[i]);
  }
  // Please fill this blank
  display(initLinkedlist(cards, n), n);
  return 0;
}
```